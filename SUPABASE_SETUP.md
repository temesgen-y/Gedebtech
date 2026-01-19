# Supabase Setup for Contact Messages

## Prerequisites

1. Create a Supabase account at https://supabase.com
2. Create a new project in Supabase

## Database Table Setup

1. In your Supabase dashboard, go to the SQL Editor
2. Run the following SQL to create the `contact_messages` table:

```sql
CREATE TABLE contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows inserting new messages (for public access)
CREATE POLICY "Allow public insert" ON contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create a policy that allows reading messages (for admin access)
-- You can restrict this further if needed
CREATE POLICY "Allow service role read" ON contact_messages
  FOR SELECT
  TO service_role
  USING (true);
```

## Environment Variables

Create a `.env` file in the root directory (or add to your existing `.env`):

```env
# Supabase Configuration
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

### How to Get Your Supabase Credentials:

1. **SUPABASE_URL**: 
   - Go to your Supabase project dashboard
   - Click on "Settings" → "API"
   - Copy the "Project URL"

2. **SUPABASE_ANON_KEY**:
   - Same page as above
   - Copy the "anon public" key

3. **SUPABASE_SERVICE_ROLE_KEY**:
   - Same page as above
   - Copy the "service_role" key (keep this secret!)
   - ⚠️ Never expose this key in client-side code

## Vercel Environment Variables

If deploying to Vercel, add these environment variables in your Vercel project settings:

1. Go to your Vercel project dashboard
2. Click "Settings" → "Environment Variables"
3. Add each variable:
   - `SUPABASE_URL`
   - `SUPABASE_ANON_KEY`
   - `SUPABASE_SERVICE_ROLE_KEY`

## Testing

After setting up:

1. The contact form will automatically use Supabase if the environment variables are configured
2. If Supabase is not configured, it will fall back to in-memory storage
3. Check your Supabase dashboard → Table Editor → `contact_messages` to see submitted messages

## Security Notes

- The service role key bypasses Row Level Security (RLS), so keep it secure
- The anon key is used if service role key is not provided, but requires proper RLS policies
- Consider adding rate limiting to prevent spam
- Optionally add email validation or CAPTCHA for additional security
