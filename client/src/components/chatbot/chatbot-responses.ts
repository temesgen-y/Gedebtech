interface BotResponse {
  content: string;
  quickReplies?: string[];
}

const responses: Record<string, BotResponse> = {
  services: {
    content: `wODEB Technologies offers comprehensive BPO and software development services:\n\n• **BPO Services**: Customer support, data entry, back-office operations\n• **Software Development**: Custom web & mobile applications\n• **Cloud Solutions**: Infrastructure setup and management\n• **AI & Automation**: Intelligent process automation\n• **Cybersecurity**: Security audits and protection\n• **IT Consulting**: Strategic technology guidance\n\nWould you like to learn more about any specific service?`,
    quickReplies: ["BPO Services details", "Software Development", "View our projects", "Contact the team"],
  },
  bpo: {
    content: `Our BPO Services include:\n\n• **Customer Support**: 24/7 multichannel support (voice, chat, email)\n• **Data Processing**: Data entry, validation, and management\n• **Back-Office Operations**: Administrative support, HR processing\n• **Finance & Accounting**: Bookkeeping, invoicing, payroll\n• **Content Moderation**: Social media and platform moderation\n\nWe help businesses reduce costs by up to 60% while maintaining quality.`,
    quickReplies: ["Get a quote", "View case studies", "Other services"],
  },
  software: {
    content: `Our Software Development expertise:\n\n• **Web Applications**: React, Node.js, Python, full-stack solutions\n• **Mobile Apps**: iOS, Android, cross-platform development\n• **Enterprise Systems**: ERP, CRM, custom business tools\n• **API Development**: RESTful APIs, integrations\n• **Database Design**: Scalable, secure data architecture\n\nWe follow agile methodologies and deliver high-quality code.`,
    quickReplies: ["Start a project", "View portfolio", "Technical consultation"],
  },
  projects: {
    content: `We've delivered 500+ successful projects across various industries:\n\n• Enterprise platforms for Ethiopian Airlines\n• Banking solutions for Awash Bank\n• Telecom applications for Ethio Telecom\n• E-commerce platforms for retail clients\n• Government digital transformation projects\n\nVisit our Projects page to see detailed case studies.`,
    quickReplies: ["View Projects page", "Industries we serve", "Start your project"],
  },
  industries: {
    content: `We serve diverse industries:\n\n• **Financial Services**: Banking, insurance, fintech\n• **Telecommunications**: Network solutions, customer platforms\n• **Healthcare**: Patient management, telemedicine\n• **Government**: Digital services, citizen portals\n• **Retail & E-commerce**: Online stores, inventory systems\n• **Transportation**: Logistics, fleet management\n\nOur cross-industry experience enables innovative solutions.`,
    quickReplies: ["View Industries page", "Tell me about your services", "Contact sales"],
  },
  contact: {
    content: `You can reach wODEB Technologies through:\n\n• **Email**: info@aittechworld.com\n• **Phone**: Available via the contact options below\n• **Office**: Addis Ababa, Ethiopia\n\nOr use the quick contact buttons below to connect instantly.`,
    quickReplies: ["Submit a message", "Request a callback", "View office location"],
  },
  hiring: {
    content: `Interested in hiring talent or exploring partnerships?\n\nWe offer:\n• **Staff Augmentation**: Skilled developers on demand\n• **Dedicated Teams**: Full project teams\n• **Technology Partnerships**: Strategic collaborations\n\nTo provide you with the best assistance, may I collect some information?`,
    quickReplies: ["Yes, let's proceed", "Talk to sales directly", "Learn more first"],
  },
  pricing: {
    content: `Our pricing is customized based on your specific requirements:\n\n• Project scope and complexity\n• Team size and expertise needed\n• Timeline and deliverables\n• Ongoing support requirements\n\nTo provide an accurate quote, I'd like to connect you with our team. May I collect your contact information?`,
    quickReplies: ["Yes, get a quote", "Talk to sales directly", "More about services"],
  },
  careers: {
    content: `Join the wODEB Technologies team!\n\nWe're always looking for talented professionals:\n• Software Engineers\n• Project Managers\n• BPO Specialists\n• UI/UX Designers\n• DevOps Engineers\n\nVisit our Careers page to view open positions.`,
    quickReplies: ["View Careers page", "Company culture", "Benefits we offer"],
  },
  default: {
    content: `I appreciate your question. For detailed assistance on this topic, I recommend speaking with our team directly.\n\nWould you like me to connect you with a specialist, or would you prefer to explore our services?`,
    quickReplies: ["Contact the team", "Tell me about services", "View projects"],
  },
};

export function getBotResponse(userMessage: string): BotResponse {
  const message = userMessage.toLowerCase();
  
  if (message.includes("service") || message.includes("what do you do") || message.includes("offer")) {
    return responses.services;
  }
  if (message.includes("bpo") || message.includes("outsourc") || message.includes("customer support") || message.includes("data entry")) {
    return responses.bpo;
  }
  if (message.includes("software") || message.includes("develop") || message.includes("app") || message.includes("web") || message.includes("mobile")) {
    return responses.software;
  }
  if (message.includes("project") || message.includes("portfolio") || message.includes("case stud") || message.includes("work")) {
    return responses.projects;
  }
  if (message.includes("industr") || message.includes("sector") || message.includes("who do you serve")) {
    return responses.industries;
  }
  if (message.includes("contact") || message.includes("reach") || message.includes("talk") || message.includes("call") || message.includes("email")) {
    return responses.contact;
  }
  if (message.includes("hire") || message.includes("talent") || message.includes("partner") || message.includes("staff") || message.includes("team")) {
    return responses.hiring;
  }
  if (message.includes("price") || message.includes("cost") || message.includes("quote") || message.includes("budget") || message.includes("rate")) {
    return responses.pricing;
  }
  if (message.includes("career") || message.includes("job") || message.includes("position") || message.includes("work with you") || message.includes("hiring")) {
    return responses.careers;
  }
  if (message.includes("yes") && message.includes("proceed")) {
    return {
      content: "To provide you with personalized assistance, may I have your name please?",
      quickReplies: [],
    };
  }
  
  return responses.default;
}

export function shouldCaptureLead(message: string): boolean {
  const leadTriggers = ["price", "pricing", "cost", "quote", "hire", "partner", "talent", "get a quote", "yes, let's proceed", "yes, get"];
  return leadTriggers.some(trigger => message.toLowerCase().includes(trigger));
}
