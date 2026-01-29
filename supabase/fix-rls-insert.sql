-- Run in Supabase Dashboard → SQL Editor → New query → Run
-- Fixes: "new row violates row-level security policy" on contact form submit.
-- Table: public.contact_messages
-- For admin dashboard read/update/delete, also run fix-rls-admin-read.sql.

-- 1. Drop any existing INSERT policies (avoid conflicts)
DROP POLICY IF EXISTS "contact_messages_insert_anon" ON public.contact_messages;
DROP POLICY IF EXISTS "contact_messages_insert_authenticated" ON public.contact_messages;

-- 2. Enable RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- 3. Permissive INSERT policies (anon = public form, authenticated = logged-in users)
CREATE POLICY "contact_messages_insert_anon"
  ON public.contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "contact_messages_insert_authenticated"
  ON public.contact_messages
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- 4. Grants
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT INSERT ON public.contact_messages TO anon;
GRANT INSERT ON public.contact_messages TO authenticated;
GRANT SELECT, UPDATE, DELETE ON public.contact_messages TO authenticated;
