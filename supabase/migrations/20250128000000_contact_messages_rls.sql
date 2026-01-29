-- Contact messages table (run in Supabase SQL Editor if not using Supabase CLI)
-- Ensure auth.users exists (default Supabase project).

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

-- 2. Profiles table for admin role (links to auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  role text NOT NULL DEFAULT 'user' CHECK (role IN ('user', 'admin'))
);

-- 3. Enable RLS on both tables
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

-- 4. Helper: true if current user is admin
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.profiles
    WHERE id = auth.uid() AND role = 'admin'
  );
$$;

-- 5. contact_messages policies

-- Allow anonymous INSERT (public contact form)
CREATE POLICY "contact_messages_insert_anon"
  ON public.contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow authenticated users too (e.g. form behind auth)
CREATE POLICY "contact_messages_insert_authenticated"
  ON public.contact_messages
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Only admins can SELECT
CREATE POLICY "contact_messages_select_admin"
  ON public.contact_messages
  FOR SELECT
  TO authenticated
  USING (public.is_admin());

-- Only admins can UPDATE (e.g. mark read/replied)
CREATE POLICY "contact_messages_update_admin"
  ON public.contact_messages
  FOR UPDATE
  TO authenticated
  USING (public.is_admin())
  WITH CHECK (public.is_admin());

-- Only admins can DELETE
CREATE POLICY "contact_messages_delete_admin"
  ON public.contact_messages
  FOR DELETE
  TO authenticated
  USING (public.is_admin());

-- 6. profiles policies (users can read own profile; service role updates)

CREATE POLICY "profiles_select_own"
  ON public.profiles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "profiles_insert_own"
  ON public.profiles
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

CREATE POLICY "profiles_update_own"
  ON public.profiles
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

-- 7. Enable realtime for contact_messages (optional; enable in Dashboard > Database > Replication if needed)
-- ALTER PUBLICATION supabase_realtime ADD TABLE public.contact_messages;

-- 8. Create profile on signup (trigger)
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, role)
  VALUES (NEW.id, 'user')
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 9. Grant anon/authenticated usage
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT INSERT ON public.contact_messages TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.contact_messages TO authenticated;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.profiles TO authenticated;

-- 10. Make a user admin (run manually; replace USER_UUID with auth.users.id)
-- INSERT INTO public.profiles (id, role) VALUES ('USER_UUID', 'admin')
-- ON CONFLICT (id) DO UPDATE SET role = 'admin';
