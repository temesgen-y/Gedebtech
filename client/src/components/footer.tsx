import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";
import { SiLinkedin, SiFacebook, SiTelegram, SiInstagram, SiYoutube, SiTiktok } from "react-icons/si";
import { Logo } from "./logo";

const footerLinks = {
  services: [
    { href: "/services", label: "Custom Software" },
    { href: "/services", label: "Web Development" },
    { href: "/services", label: "Mobile Apps" },
    { href: "/services", label: "Cloud Solutions" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Projects" },
    { href: "/careers", label: "Careers" },
  ],
  resources: [
    { href: "/industries", label: "Industries" },
    { href: "/hire-talents", label: "Hire Talents" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="lg:col-span-2">
            <div className="mb-4 overflow-visible">
              <Logo testId="link-footer-logo" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-sm">
              Delivering innovative, reliable, and scalable software solutions
              for enterprise, government, and startup clients worldwide.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="LinkedIn"
                data-testid="link-social-linkedin"
              >
                <SiLinkedin className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Facebook"
                data-testid="link-social-facebook"
              >
                <SiFacebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Telegram"
                data-testid="link-social-telegram"
              >
                <SiTelegram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="Instagram"
                data-testid="link-social-instagram"
              >
                <SiInstagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="YouTube"
                data-testid="link-social-youtube"
              >
                <SiYoutube className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-primary/50 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label="TikTok"
                data-testid="link-social-tiktok"
              >
                <SiTiktok className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <span>Bole, Wollo sefer Garad City Center 5th Floor</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href="mailto:info@gedebtech.com"
                  className="hover:text-foreground transition-colors"
                >
                  info@gedebtech.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0" />
                <a
                  href="tel:+251911000000"
                  className="hover:text-foreground transition-colors"
                >
                  +251 928 730 333
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Gedeb Technologies. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
