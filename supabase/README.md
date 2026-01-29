# Supabase setup for Contact Messages & Admin Dashboard

**Table:** `public.contact_messages` (underscore; schema `public`).

If you see *"Could not find the table ... in the schema"*, the table does not exist yet. Run the SQL below in Supabase.

## 1. Project setup

1. Create a [Supabase](https://supabase.com) project.
2. Copy your project URL and anon key from **Settings → API**.
3. Add a `.env` file in the project root (see `.env.example`):

   ```
   VITE_SUPABASE_URL=https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

## 2. Create the table (required)

**Option A – Contact form only (quick):**  
Run `quick-setup.sql` in **Supabase Dashboard → SQL Editor**.  
Creates `public.contact_messages` and allows anonymous INSERT so the contact form works.

**Option B – Full (contact form + admin dashboard):**  
Run `migrations/20250128000000_contact_messages_rls.sql` in the **SQL Editor**.  
This creates:

- `contact_messages` table (id, name, email, subject, message, company, created_at, status)
- `profiles` table (id, role) for admin role
- RLS policies (anon can INSERT into `contact_messages`; only admins can SELECT/UPDATE/DELETE)
- Trigger to create a `profiles` row on signup

## 3. Enable realtime (optional)

For live updates when new messages arrive:

1. **Dashboard → Database → Replication**
2. Enable replication for `public.contact_messages`

Or run in SQL Editor:

```sql
ALTER PUBLICATION supabase_realtime ADD TABLE public.contact_messages;
```

## 4. Create an admin user

1. **Dashboard → Authentication → Users** → Add user (email + password) or sign up via the app.
2. Copy the user’s **UUID** (e.g. from **Authentication → Users**).
3. In **SQL Editor**:

   ```sql
   INSERT INTO public.profiles (id, role)
   VALUES ('USER_UUID_HERE', 'admin')
   ON CONFLICT (id) DO UPDATE SET role = 'admin';
   ```

Replace `USER_UUID_HERE` with the actual UUID.

## 5. Auth

- **Login:** `/login` (email/password via Supabase Auth).
- **Admin dashboard:** `/admin/messages` (redirects to `/login` if not authenticated or not admin).
