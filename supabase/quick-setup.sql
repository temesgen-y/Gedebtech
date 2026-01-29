-- Run this in Supabase Dashboard → SQL Editor (New query) → Run
-- Creates public.contact_messages so the contact form works.
-- Table name: contact_messages (underscore, not "contact.messages").
-- Schema: public (not "Oublic").

-- 1. Create contact_messages table
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL DEFAULT '',
  message text NOT NULL,
  company text,
  created_at timestamptz NOT NULL DEFAULT now(),
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied'))
);

-- 2. Enable RLS
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- 3. Allow anonymous INSERT (contact form)
DROP POLICY IF EXISTS "contact_messages_insert_anon" ON public.contact_messages;
CREATE POLICY "contact_messages_insert_anon"
  ON public.contact_messages FOR INSERT TO anon
  WITH CHECK (true);

DROP POLICY IF EXISTS "contact_messages_insert_authenticated" ON public.contact_messages;
CREATE POLICY "contact_messages_insert_authenticated"
  ON public.contact_messages FOR INSERT TO authenticated
  WITH CHECK (true);

-- 4. Grants
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT INSERT ON public.contact_messages TO anon;
GRANT ALL ON public.contact_messages TO authenticated;
