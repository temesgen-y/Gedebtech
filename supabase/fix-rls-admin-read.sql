-- Run in Supabase Dashboard → SQL Editor → New query → Run
-- Fixes: admin dashboard can't read/update/delete contact_messages.
-- Allows any authenticated user to SELECT, UPDATE, DELETE (use with dev override / allowlist).

-- 1. Drop existing admin-only policies if present (they block when is_admin() is false)
DROP POLICY IF EXISTS "contact_messages_select_admin" ON public.contact_messages;
DROP POLICY IF EXISTS "contact_messages_update_admin" ON public.contact_messages;
DROP POLICY IF EXISTS "contact_messages_delete_admin" ON public.contact_messages;

-- 2. Add permissive policies for authenticated users (dashboard read/update/delete)
DROP POLICY IF EXISTS "contact_messages_select_authenticated" ON public.contact_messages;
CREATE POLICY "contact_messages_select_authenticated"
  ON public.contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "contact_messages_update_authenticated" ON public.contact_messages;
CREATE POLICY "contact_messages_update_authenticated"
  ON public.contact_messages
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

DROP POLICY IF EXISTS "contact_messages_delete_authenticated" ON public.contact_messages;
CREATE POLICY "contact_messages_delete_authenticated"
  ON public.contact_messages
  FOR DELETE
  TO authenticated
  USING (true);

-- 3. Ensure grants
GRANT SELECT, UPDATE, DELETE ON public.contact_messages TO authenticated;
