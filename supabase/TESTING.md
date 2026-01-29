# Testing Contact Form & Admin Dashboard

## Prerequisites

1. **Supabase**
   - Project created, `.env` has `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.
   - Table `contact_messages` exists (run `fix-rls-insert.sql` or full migration).
   - RLS allows `anon` INSERT (contact form) and admin SELECT/UPDATE/DELETE.

2. **Admin user**
   - User in Supabase **Authentication → Users** (email + password).
   - `profiles` row with `role = 'admin'` for that user (see `supabase/README.md`).

3. **App**
   - `npm run dev` from project root.

---

## 1. Contact form

1. Open **http://localhost:5000/contact** (or your dev URL).
2. Fill: Name, Email, Subject, Message (Company optional).
3. Click **Send Message**.
4. **Expect:** “Message sent!” toast; success view with “Send Another Message”.
5. In **Supabase Dashboard → Table Editor → contact_messages**, confirm a new row (newest first).

---

## 2. Admin login

1. Open **http://localhost:5000/login**.
2. Sign in with your **admin** email and password.
3. **Expect:** Redirect to **/admin/messages**. If not admin, “You don’t have admin access” and sign out.

---

## 3. Admin dashboard – read & delete

1. Go to **http://localhost:5000/admin/messages** (or /login → sign in).
2. **Read**
   - Click a row.
   - **Expect:** Modal with full message (name, email, subject, company, message).
   - New messages are marked “read” when you open them.
3. **Delete**
   - Open a message → **Delete** → confirm.
   - **Expect:** “Message deleted” toast; row disappears; list updates.
4. **Mark as Replied**
   - Open a message → **Mark as Replied**.
   - **Expect:** “Marked as replied” toast; status badge updates.

---

## 4. Pagination

1. Add enough rows (via contact form or Supabase Table Editor) so you have more than one page (e.g. > 10).
2. On **/admin/messages**:
   - **Expect:** “Showing 1–10 of N”, “Page 1 of X”, **Previous** / **Next**.
3. Change **Per page** to 20 (or 50).
   - **Expect:** Page 1, more rows per page, total unchanged.
4. Click **Next** → **Previous**.
   - **Expect:** Page changes, “Showing A–B of N” updates.
5. Delete the last remaining item on a page (e.g. page 2 has 1 item).
   - **Expect:** Navigate back to previous page after delete.

---

## 5. Protection & errors

1. **Logged-out access**
   - Sign out (or use incognito). Open **http://localhost:5000/admin/messages**.
   - **Expect:** Redirect to **/login**.
2. **Non-admin**
   - Sign in with a user that has `role = 'user'` (or no admin profile).
   - **Expect:** “You don’t have admin access” on login; redirect or sign out.
3. **Config missing**
   - Remove Supabase env vars, restart dev server, submit contact form.
   - **Expect:** “Contact form is not configured” (or similar) error.

---

## 6. Realtime (optional)

1. Enable **replication** for `contact_messages` (Supabase **Database → Replication**).
2. Open **/admin/messages** in one tab.
3. Submit a new message from **/contact** (or another tab).
4. **Expect:** New message appears in the admin list without refreshing.

---

## Quick checklist

| Test | Pass? |
|------|-------|
| Contact form submit → toast + new row in Supabase | ☐ |
| /login → admin → redirect to /admin/messages | ☐ |
| /admin/messages without auth → redirect to /login | ☐ |
| Click row → modal (read) | ☐ |
| Delete in modal → confirmation → row gone | ☐ |
| Pagination: per page, prev/next, “Showing X–Y of Z” | ☐ |
| Realtime: new message appears without refresh | ☐ |
