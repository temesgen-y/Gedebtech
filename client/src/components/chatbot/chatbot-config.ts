export interface ChatbotConfig {
  companyName: string;
  brandColors: {
    primary: string;
    secondary: string;
  };
  contactLinks: {
    whatsapp: string;
    telegram: string;
    phone: string;
    contactForm: string;
  };
  defaultTheme: "light" | "dark" | "system";
  welcomeMessage: string;
  quickReplies: string[];
}

export const defaultChatbotConfig: ChatbotConfig = {
  companyName: "wODEB Technologies",
  brandColors: {
    primary: "hsl(var(--primary))",
    secondary: "hsl(var(--secondary))",
  },
  contactLinks: {
    whatsapp: "https://wa.me/251928730333",
    telegram: "https://t.me/masre24",
    phone: "tel:+251928730333",
    contactForm: "/contact",
  },
  defaultTheme: "system",
  welcomeMessage: "Hello! Welcome to wODEB Technologies. I'm your virtual assistant. How may I help you today?",
  quickReplies: [
    "Tell me about your services",
    "View projects",
    "Industries you serve",
    "Contact the team",
    "Hiring & Partnerships",
  ],
};
