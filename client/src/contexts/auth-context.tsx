import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

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
    if (!supabase) return false;

    // 0. Dev override: any signed-in user is admin (frontend-only fix for local testing)
    if (import.meta.env.DEV) {
      return true;
    }

    // 1. Email allowlist (fallback when profiles missing or failing)
    const allowlist = (import.meta.env.VITE_ADMIN_EMAILS ?? "")
      .split(",")
      .map((e: string) => e.trim().toLowerCase())
      .filter(Boolean);
    const email = (u.email ?? "").trim().toLowerCase();
    if (email && allowlist.includes(email)) {
      return true;
    }

    // 2. profiles.role = 'admin'
    const { data, error } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", u.id)
      .single();
    if (error) {
      console.warn("[auth] profiles fetch:", error.message);
      return false;
    }
    return data?.role === "admin";
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
      if (!supabase) {
        return { error: new Error("Supabase is not configured.") };
      }
      const { error } = await supabase.auth.signInWithPassword({ email, password });
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
