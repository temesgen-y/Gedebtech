# Deployment (GitHub → Vercel / Netlify / etc.)

Get the app working in production the same as local: contact form, admin dashboard, login, logout.

## 1. Environment variables

Set these in your **host's dashboard** (e.g. **Vercel** → Project → Settings → Environment Variables). Use **Production** (and **Preview** if you want) so they're available at build time. **Do not** commit `.env` or put secrets in `vercel.json`.

| Variable | Required | Description |
|----------|----------|-------------|
| `VITE_SUPABASE_URL` | Yes | Supabase project URL (e.g. `https://xxx.supabase.co`) |
| `VITE_SUPABASE_ANON_KEY` | Yes | Supabase anon/public key |
| `VITE_ADMIN_EMAILS` | Yes for admin | Comma-separated emails that can log in as admin (e.g. `admin@example.com`) |

- **Contact form** needs `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
- **Admin login** needs `VITE_ADMIN_EMAILS` in production (or `profiles.role = 'admin'` in Supabase; see `supabase/README.md`).  
  Locally, any signed-in user is treated as admin in dev; that does **not** apply in production.

## 2. Supabase setup

Before deploy:

1. **Table** `public.contact_messages` exists (see `supabase/quick-setup.sql` or full migration).
2. **RLS**  
   - Run `supabase/fix-rls-insert.sql` (contact form INSERT).  
   - Run `supabase/fix-rls-admin-read.sql` (admin SELECT/UPDATE/DELETE).
3. **Admin user**  
   - Create a user in Supabase **Authentication → Users**.  
   - Set `VITE_ADMIN_EMAILS` to that user's email **or** add a `profiles` row with `role = 'admin'` (see `supabase/fix-admin-user.sql`).

## 3. Build

- **Vercel** (from `vercel.json`): `npm run build:client`, output `dist/public`.
- **Netlify** (or similar): use `npm run build:client` and publish `dist/public`.

Ensure the build runs in an environment where the `VITE_*` variables above are set (so they are embedded at build time).

## 4. Post-deploy checks

- **Contact** page: submit form → success, row in `contact_messages`.
- **Login** (`/login`): sign in with an admin email → redirect to `/admin/messages`.
- **Admin** (`/admin/messages`): list, read, delete, pagination, logout.
- **Nav**: when logged in as admin, "Admin" and "Log out" appear; "Log out" signs out and redirects to `/login`.

## 5. Troubleshooting

- **"Contact form is not configured"** → `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` missing or wrong in build env.
- **"You don't have admin access"** → Set `VITE_ADMIN_EMAILS` (or `profiles.role = 'admin'`) and use that email to log in.
- **RLS errors on form submit** → Run `supabase/fix-rls-insert.sql`.
- **Admin can't read messages** → Run `supabase/fix-rls-admin-read.sql`.

## 6. Works locally, fails on Vercel

**Why:** Locally, `import.meta.env.DEV` is true → any signed-in user is treated as admin, and `.env` supplies Supabase + optionally `VITE_ADMIN_EMAILS`. On Vercel, `DEV` is false, so admin depends on `VITE_ADMIN_EMAILS` or `profiles.role`. Vite embeds `VITE_*` at **build time**, so Vercel must have the vars **before** the build.

**Checklist for Vercel:**

1. **Vercel** → your project → **Settings** → **Environment Variables**.
2. Add (or fix) these for **Production** (and **Preview** if you use branch deploys):

   | Name | Value |
   |------|--------|
   | `VITE_SUPABASE_URL` | `https://your-project.supabase.co` (same as local) |
   | `VITE_SUPABASE_ANON_KEY` | Your Supabase anon key (same as local) |
   | `VITE_ADMIN_EMAILS` | **Exact** email you use to log in (e.g. `admin@gedebtech.com`) |

3. **Redeploy** after adding or changing env vars: **Deployments** → **⋯** on latest → **Redeploy** (use "Use existing Build Cache" **off** if you changed vars and want a fresh build).
4. **Log in** at `https://your-domain.com/login` with that email and the password for the user in **Supabase → Authentication → Users**.

**If you still get "Invalid login credentials":**

- Confirm the user exists in **Supabase → Authentication → Users** for the **same project** whose URL/key you use in Vercel.
- **Email confirmation:** **Authentication → Providers → Email** → turn **Confirm email** off (or ensure the user is confirmed).
- Reset password: delete the user in Supabase, create a new user with the same email and a known password, then try again.

**If you get "You don't have admin access" after a successful login:**

- `VITE_ADMIN_EMAILS` must match the login email **exactly** (case-insensitive, no extra spaces).
- Redeploy after changing `VITE_ADMIN_EMAILS`.

**Optional:** In **Supabase → Authentication → URL Configuration**, set **Site URL** to `https://www.gedebtech.com` (or your production domain) and add it to **Redirect URLs** if you use email confirmation or OAuth.
