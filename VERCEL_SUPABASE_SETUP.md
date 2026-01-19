# Connecting Supabase to Vercel - Step-by-Step Guide

## Overview
This guide will help you connect your Supabase database to your Vercel deployment so contact form messages are saved to Supabase.

## Step 1: Set Up Supabase Database

### 1.1 Create Supabase Account & Project
1. Go to https://supabase.com and sign up/login
2. Click "New Project"
3. Fill in project details:
   - **Name**: gedeb-technologies (or your preferred name)
   - **Database Password**: Create a strong password
   - **Region**: Choose closest to your users
4. Click "Create new project" (takes 2-3 minutes)

### 1.2 Create Contact Messages Table
1. In Supabase dashboard, click **"SQL Editor"** in the left sidebar
2. Click **"New query"**
3. Paste and run this SQL:

```sql
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert messages (for contact form)
CREATE POLICY "Allow public insert" ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Allow service role to read all messages (for admin)
CREATE POLICY "Allow service role read" ON contact_messages
  FOR SELECT
  TO service_role
  USING (true);
```

4. Click **"Run"** or press `Ctrl+Enter`
5. Verify table creation: Go to **"Table Editor"** → You should see `contact_messages` table

## Step 2: Get Supabase Credentials

1. In Supabase dashboard, click **"Settings"** (gear icon) → **"API"**
2. Copy these values (you'll need them for Vercel):

   - **Project URL**: `https://xxxxx.supabase.co`
     - Copy the "Project URL" value
   
   - **anon public key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
     - Copy the "anon public" key
   
   - **service_role key**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`
     - Copy the "service_role" key (⚠️ Keep this secret!)
     - This key bypasses Row Level Security

## Step 3: Add Environment Variables to Vercel

### Option A: Via Vercel Dashboard (Recommended)

1. Go to https://vercel.com/dashboard
2. Select your project (Gedeb-Technologies or Gedebtech)
3. Click **"Settings"** tab
4. Click **"Environment Variables"** in the left sidebar
5. Add each variable one by one:

   **Variable 1:**
   - **Key**: `SUPABASE_URL`
   - **Value**: Your Supabase Project URL (from Step 2)
   - **Environment**: Select all (Production, Preview, Development)
   - Click **"Save"**

   **Variable 2:**
   - **Key**: `SUPABASE_ANON_KEY`
   - **Value**: Your Supabase anon public key (from Step 2)
   - **Environment**: Select all (Production, Preview, Development)
   - Click **"Save"**

   **Variable 3:**
   - **Key**: `SUPABASE_SERVICE_ROLE_KEY`
   - **Value**: Your Supabase service_role key (from Step 2)
   - **Environment**: Select all (Production, Preview, Development)
   - Click **"Save"**

6. After adding all variables, **redeploy your site**:
   - Go to **"Deployments"** tab
   - Click the three dots (⋮) on the latest deployment
   - Click **"Redeploy"**
   - Make sure **"Use existing Build Cache"** is OFF
   - Click **"Redeploy"**

### Option B: Via Vercel CLI (Alternative)

If you have Vercel CLI installed:

```bash
vercel env add SUPABASE_URL
vercel env add SUPABASE_ANON_KEY
vercel env add SUPABASE_SERVICE_ROLE_KEY
```

## Step 4: Verify the Connection

### 4.1 Test the Contact Form
1. Go to your deployed Vercel site
2. Navigate to the Contact page
3. Fill out and submit the contact form
4. Check for success message

### 4.2 Verify in Supabase
1. Go to your Supabase dashboard
2. Click **"Table Editor"** → **"contact_messages"**
3. You should see your submitted message with:
   - Name
   - Email
   - Company (if provided)
   - Message
   - Created timestamp

## Step 5: Local Development (Optional)

To test Supabase locally:

1. Create a `.env` file in the project root (not committed to git)
2. Add your Supabase credentials:

```env
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

3. Restart your local dev server
4. Test the contact form locally

## Troubleshooting

### Issue: Messages not saving to Supabase
- ✅ Check Vercel environment variables are set correctly
- ✅ Verify Supabase table exists and policies are set
- ✅ Check Vercel deployment logs for errors
- ✅ Ensure you redeployed after adding environment variables

### Issue: "Supabase credentials not configured" warning
- ✅ Verify all 3 environment variables are set in Vercel
- ✅ Make sure you redeployed after adding variables
- ✅ Check variable names match exactly (case-sensitive):
  - `SUPABASE_URL`
  - `SUPABASE_ANON_KEY`
  - `SUPABASE_SERVICE_ROLE_KEY`

### Issue: RLS (Row Level Security) errors
- ✅ Verify the SQL policies were created correctly
- ✅ Make sure the service_role key is used for admin operations
- ✅ Check Supabase logs in the dashboard

## Security Best Practices

1. **Never commit** `.env` file to git (already in .gitignore)
2. **Service Role Key** should only be used server-side (never expose to client)
3. **Rate Limiting**: Consider adding rate limiting to prevent spam
4. **Email Validation**: The form already validates emails, but consider additional verification
5. **Monitoring**: Set up Supabase alerts for unusual activity

## Next Steps

- ✅ Contact form now saves to Supabase
- 📧 Optional: Set up email notifications for new messages
- 📊 Optional: Create admin dashboard to view messages
- 🔒 Optional: Add CAPTCHA to prevent spam

## Support

If you encounter issues:
1. Check Vercel deployment logs
2. Check Supabase logs (Dashboard → Logs)
3. Verify environment variables are correctly set
4. Test the API endpoint directly
