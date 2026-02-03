import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MessageCircle, X } from "lucide-react";

/**
 * Sticky contact CTA bar - appears after user scrolls down.
 * Improves conversion by keeping contact option visible.
 */
export function StickyCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (dismissed) return;
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-md border-t border-border shadow-lg animate-in slide-in-from-bottom duration-300"
      role="complementary"
      aria-label="Contact options"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm">
          <MessageCircle className="h-5 w-5 text-primary shrink-0" />
          <span className="font-medium">
            Need software development or BPO services? Get a free quote.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/contact">
            <Button size="sm" data-testid="sticky-cta-contact">
              Request Quote
            </Button>
          </Link>
          <Link href="/hire-talents">
            <Button size="sm" variant="outline" data-testid="sticky-cta-hire">
              Hire Talents
            </Button>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 shrink-0"
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
