import { createClient } from "@supabase/supabase-js";

export default async function handler(req: any, res: any) {
  // Only allow GET requests
  if (req.method !== "GET") {
    return res.status(405).json({ 
      success: false, 
      error: "Method not allowed" 
    });
  }

  try {
    // Get Supabase credentials from environment variables
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase credentials not configured");
      return res.status(500).json({ 
        success: false, 
        error: "Server configuration error" 
      });
    }

    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    // Fetch contact messages from Supabase
    const { data: messages, error } = await supabase
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ 
        success: false, 
        error: "Failed to fetch messages" 
      });
    }

    // Transform messages to match expected format
    const formattedMessages = (messages || []).map((msg) => ({
      id: msg.id,
      name: msg.name,
      email: msg.email,
      company: msg.company || undefined,
      message: msg.message,
      createdAt: msg.created_at ? new Date(msg.created_at).toISOString() : new Date().toISOString(),
    }));

    return res.status(200).json(formattedMessages);

  } catch (error) {
    console.error("Error fetching contact messages:", error);
    return res.status(500).json({ 
      success: false, 
      error: "Failed to fetch contact messages" 
    });
  }
}
