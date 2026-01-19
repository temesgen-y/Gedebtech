import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default async function handler(req: any, res: any) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ 
      success: false, 
      error: "Method not allowed" 
    });
  }

  try {
    // Validate request body
    const validatedData = contactSchema.parse(req.body);

    // Get Supabase credentials from environment variables
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error("Supabase credentials not configured");
      return res.status(500).json({ 
        success: false, 
        error: "Server configuration error. Please contact support." 
      });
    }

    // Create Supabase client
    const supabase = createClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    // Insert contact message into Supabase
    const { data: message, error } = await supabase
      .from("contact_messages")
      .insert({
        name: validatedData.name,
        email: validatedData.email,
        company: validatedData.company || null,
        message: validatedData.message,
      })
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return res.status(500).json({ 
        success: false, 
        error: "Failed to save message. Please try again." 
      });
    }

    // Return success response
    return res.status(201).json({ 
      success: true, 
      message: {
        id: message.id,
        name: message.name,
        email: message.email,
        company: message.company || undefined,
        message: message.message,
        createdAt: message.created_at ? new Date(message.created_at).toISOString() : new Date().toISOString(),
      }
    });

  } catch (error: any) {
    // Handle validation errors
    if (error.errors) {
      return res.status(400).json({ 
        success: false, 
        error: error.errors[0]?.message || "Validation error" 
      });
    }

    console.error("Contact form error:", error);
    return res.status(500).json({ 
      success: false, 
      error: "Failed to submit contact form. Please try again." 
    });
  }
}
