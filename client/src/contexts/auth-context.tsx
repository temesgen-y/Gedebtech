import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { User } from "@supabase/supabase-js";
import { supabase, supabaseConfigured } from "@/lib/supabase";

type AuthState = {
  user: User | null;
  isAdmin: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const fetchAdminRole = useCallback(async (u: { id: string; email?: string | null }): Promise<boolean> => {
    console.log("[auth] fetchAdminRole for:", u.email, "id:", u.id);
    if (!supabase) {
      console.warn("[auth] supabase client is null");
      return false;
    }

    // 0. Dev override: any signed-in user is admin (frontend-only fix for local testing)
    if (import.meta.env.DEV) {
      console.log("[auth] DEV mode -> isAdmin: true");
      return true;
    }

    // 1. Email allowlist (fallback when profiles missing or failing)
    const rawAllowlist = import.meta.env.VITE_ADMIN_EMAILS ?? "";
    const allowlist = rawAllowlist
      .split(",")
      .map((e: string) => e.trim().toLowerCase())
      .filter(Boolean);
    const email = (u.email ?? "").trim().toLowerCase();
    console.log("[auth] allowlist:", allowlist, "user email:", email);
    if (email && allowlist.includes(email)) {
      console.log("[auth] email in allowlist -> isAdmin: true");
      return true;
    }

    // 2. profiles.role = 'admin'
    const { data, error } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", u.id)
      .single();
    if (error) {
      console.warn("[auth] profiles fetch error:", error.message);
      return false;
    }
    const isAdmin = data?.role === "admin";
    console.log("[auth] profiles.role:", data?.role, "-> isAdmin:", isAdmin);
    return isAdmin;
  }, []);

  useEffect(() => {
    const client = supabase;
    if (!client) {
      setIsLoading(false);
      return;
    }

    const init = async () => {
      const {
        data: { session },
      } = await client.auth.getSession();
      setUser(session?.user ?? null);
      if (session?.user) {
        const admin = await fetchAdminRole(session.user);
        setIsAdmin(admin);
      } else {
        setIsAdmin(false);
      }
      setIsLoading(false);
    };

    init();

    const {
      data: { subscription },
    } = client.auth.onAuthStateChange(async (_, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        const admin = await fetchAdminRole(session.user);
        setIsAdmin(admin);
      } else {
        setIsAdmin(false);
      }
    });

    return () => subscription.unsubscribe();
  }, [fetchAdminRole]);

  const signIn = useCallback(
    async (email: string, password: string) => {
      console.log("[auth] signIn attempt for:", email);
      if (!supabase) {
        console.error("[auth] Supabase client is null. Check VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
        return { error: new Error("Supabase is not configured. Please check environment variables.") };
      }
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        console.error("[auth] signIn error:", error.message, error);
      } else {
        console.log("[auth] signIn success, user:", data.user?.email);
      }
      return { error: error ?? null };
    },
    []
  );

  const signOut = useCallback(async () => {
    if (supabase) await supabase.auth.signOut();
  }, []);

  const value: AuthState = {
    user,
    isAdmin,
    isLoading,
    signIn,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
