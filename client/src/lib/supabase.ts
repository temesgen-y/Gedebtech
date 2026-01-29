import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Debug: log config status (no secrets)
if (typeof window !== "undefined") {
  console.log("[supabase] config:", {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseAnonKey,
    urlPrefix: supabaseUrl?.slice(0, 30) ?? "(missing)",
  });
}

export const supabaseConfigured = !!(supabaseUrl && supabaseAnonKey);

export const supabase: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

/** Anon-only client for contact form. Never sends auth token → always inserts as anon (avoids RLS issues when signed in). */
export const supabaseAnonOnly: SupabaseClient | null =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey, {
        auth: {
          persistSession: false,
          autoRefreshToken: false,
          detectSessionInUrl: false,
        },
      })
    : null;

export type ContactMessageRow = {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  created_at: string;
  status: "new" | "read" | "replied";
  company?: string;
};
