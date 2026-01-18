export interface ChatMessage {
  id: string;
  type: "user" | "bot";
  content: string;
  timestamp: Date;
  quickReplies?: string[];
}

export interface LeadInfo {
  name?: string;
  contactMethod?: "whatsapp" | "telegram" | "email" | "phone";
  contactValue?: string;
  inquiry?: string;
}

export type ChatState = 
  | "idle"
  | "collecting_name"
  | "collecting_contact_method"
  | "collecting_contact_value"
  | "lead_captured";
