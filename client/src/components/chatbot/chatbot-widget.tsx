import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, Send, Phone, Loader2 } from "lucide-react";
import { SiWhatsapp, SiTelegram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { defaultChatbotConfig, type ChatbotConfig } from "./chatbot-config";
import { type ChatMessage, type LeadInfo, type ChatState } from "./chatbot-types";
import { getBotResponse, shouldCaptureLead } from "./chatbot-responses";

interface ChatbotWidgetProps {
  config?: Partial<ChatbotConfig>;
}

function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

export function ChatbotWidget({ config: userConfig }: ChatbotWidgetProps) {
  const config = { ...defaultChatbotConfig, ...userConfig };
  
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [chatState, setChatState] = useState<ChatState>("idle");
  const [leadInfo, setLeadInfo] = useState<LeadInfo>({});
  const contactMethodRef = useRef<string>("");
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = useCallback(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(config.welcomeMessage, config.quickReplies);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  const addBotMessage = (content: string, quickReplies?: string[]) => {
    setIsTyping(true);
    const typingDelay = Math.min(content.length * 15, 1500);
    
    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          id: generateId(),
          type: "bot",
          content,
          timestamp: new Date(),
          quickReplies,
        },
      ]);
    }, typingDelay);
  };

  const handleLeadCapture = (userMessage: string) => {
    switch (chatState) {
      case "collecting_name":
        setLeadInfo((prev) => ({ ...prev, name: userMessage }));
        setChatState("collecting_contact_method");
        addBotMessage(
          `Thank you, ${userMessage}. How would you prefer to be contacted?`,
          ["WhatsApp", "Telegram", "Email", "Phone"]
        );
        break;
      case "collecting_contact_method":
        const methodInput = userMessage.toLowerCase();
        const validMethods = ["whatsapp", "telegram", "email", "phone"];
        const method = validMethods.includes(methodInput) ? methodInput as "whatsapp" | "telegram" | "email" | "phone" : "email";
        contactMethodRef.current = method;
        setLeadInfo((prev) => ({ ...prev, contactMethod: method }));
        setChatState("collecting_contact_value");
        const prompts: Record<string, string> = {
          whatsapp: "Please provide your WhatsApp number:",
          telegram: "Please provide your Telegram username or number:",
          email: "Please provide your email address:",
          phone: "Please provide your phone number:",
        };
        addBotMessage(prompts[method]);
        break;
      case "collecting_contact_value":
        const currentMethod = contactMethodRef.current || leadInfo.contactMethod || "your preferred method";
        const capturedLead = { ...leadInfo, contactMethod: currentMethod, contactValue: userMessage };
        setLeadInfo((prev) => ({ ...prev, contactValue: userMessage }));
        setChatState("lead_captured");
        addBotMessage(
          `Thank you for your interest! Our team will reach out to you via ${currentMethod} shortly.\n\nIs there anything else I can help you with?`,
          ["Tell me about services", "View projects", "That's all for now"]
        );
        console.log("Lead captured:", capturedLead);
        setChatState("idle");
        setLeadInfo({});
        contactMethodRef.current = "";
        break;
      default:
        return false;
    }
    return true;
  };

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;
    
    const userMessage: ChatMessage = {
      id: generateId(),
      type: "user",
      content: message,
      timestamp: new Date(),
    };
    
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    
    if (chatState !== "idle" && handleLeadCapture(message)) {
      return;
    }
    
    if (shouldCaptureLead(message) && chatState === "idle") {
      setChatState("collecting_name");
      addBotMessage("To provide you with personalized assistance, may I have your name please?");
      return;
    }
    
    const response = getBotResponse(message);
    addBotMessage(response.content, response.quickReplies);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSendMessage(inputValue);
  };

  return (
    <div 
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4"
      data-testid="chatbot-widget"
    >
      {isOpen && (
        <div
          className={`
            w-[380px] max-w-[calc(100vw-48px)] h-[560px] max-h-[calc(100vh-120px)]
            bg-background border border-border rounded-lg shadow-xl
            flex flex-col overflow-hidden
            animate-in slide-in-from-bottom-4 fade-in duration-300
          `}
          data-testid="chatbot-window"
        >
          <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">{config.companyName}</h3>
                <p className="text-xs opacity-80">Virtual Assistant</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground"
              aria-label="Close chat"
              data-testid="button-close-chat"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          <ScrollArea className="flex-1 p-4" ref={scrollRef}>
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`
                      max-w-[85%] rounded-lg px-4 py-2.5
                      ${message.type === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-foreground"
                      }
                    `}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    <p className={`text-xs mt-1 ${message.type === "user" ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                      {formatTime(message.timestamp)}
                    </p>
                    
                    {message.quickReplies && message.quickReplies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {message.quickReplies.map((reply) => (
                          <Button
                            key={reply}
                            variant="outline"
                            size="sm"
                            onClick={() => handleQuickReply(reply)}
                            className="text-xs h-7 bg-background"
                            data-testid={`button-quick-reply-${reply.toLowerCase().replace(/\s/g, "-")}`}
                          >
                            {reply}
                          </Button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start" role="status" aria-live="polite" aria-label="Assistant is typing">
                  <div className="bg-muted rounded-lg px-4 py-3">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-foreground/40 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          <div className="border-t p-3 bg-muted/30">
            <div className="flex items-center justify-center gap-2 mb-3">
              <a
                href={config.contactLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-500/10 text-green-600 dark:text-green-400 hover:bg-green-500/20 transition-colors text-xs font-medium"
                aria-label="Contact via WhatsApp"
                data-testid="link-whatsapp"
              >
                <SiWhatsapp className="h-3.5 w-3.5" />
                WhatsApp
              </a>
              <a
                href={config.contactLinks.telegram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20 transition-colors text-xs font-medium"
                aria-label="Contact via Telegram"
                data-testid="link-telegram"
              >
                <SiTelegram className="h-3.5 w-3.5" />
                Telegram
              </a>
              <a
                href={config.contactLinks.phone}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 text-primary hover:bg-primary/20 transition-colors text-xs font-medium"
                aria-label="Call us"
                data-testid="link-phone"
              >
                <Phone className="h-3.5 w-3.5" />
                Call
              </a>
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                ref={inputRef}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
                aria-label="Chat message input"
                data-testid="input-chat-message"
              />
              <Button 
                type="submit" 
                size="icon"
                disabled={!inputValue.trim() || isTyping}
                aria-label="Send message"
                data-testid="button-send-message"
              >
                {isTyping ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </form>
          </div>
        </div>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        variant={isOpen ? "secondary" : "default"}
        className="w-14 h-14 rounded-full shadow-lg transition-all duration-200"
        aria-label={isOpen ? "Close chat" : "Open chat"}
        data-testid="button-toggle-chat"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
}

export default ChatbotWidget;
