import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ChatbotWidget } from "@/components/chatbot";
import { StickyCTA } from "@/components/sticky-cta";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">{children}</main>
      <Footer />
      <StickyCTA />
      <ChatbotWidget />
    </div>
  );
}
