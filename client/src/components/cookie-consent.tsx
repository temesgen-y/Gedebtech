import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Show banner after a short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-in slide-in-from-bottom duration-300">
      <div 
        className="w-full px-4 py-4 lg:px-8 lg:py-5"
        style={{ backgroundColor: '#22589D' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white text-sm lg:text-base flex-1 text-center sm:text-left">
            Gedeb Technologies uses cookies to provide enhanced website functionality and experience. By using our website, you agree to our{" "}
            <Link 
              href="/privacy-policy" 
              className="underline underline-offset-2 hover:underline-offset-4 transition-all"
            >
              privacy policy
            </Link>
            .
          </p>
          <Button
            onClick={handleAccept}
            className="rounded-full px-6 py-2 text-white font-medium whitespace-nowrap"
            style={{ 
              backgroundColor: '#1a4680',
              transition: 'background-color 0.2s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#153d66';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#1a4680';
            }}
          >
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}