import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { CookieConsent } from "@/components/cookie-consent";
import { AuthProvider } from "@/contexts/auth-context";
import { ProtectedAdminRoute } from "@/components/protected-admin-route";
import Home from "@/pages/home";
import Services from "@/pages/services";
import About from "@/pages/about";
import Projects from "@/pages/projects";
import Industries from "@/pages/industries";
import Careers from "@/pages/careers";
import HireTalents from "@/pages/hire-talents";
import Contact from "@/pages/contact";
import PrivacyPolicy from "@/pages/privacy-policy";
import AdminMessages from "@/pages/admin-messages";
import Login from "@/pages/login";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/industries" component={Industries} />
      <Route path="/careers" component={Careers} />
      <Route path="/hire-talents" component={HireTalents} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/login" component={Login} />
      <Route path="/admin/messages">
        <ProtectedAdminRoute>
          <AdminMessages />
        </ProtectedAdminRoute>
      </Route>
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <AuthProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
            <CookieConsent />
          </TooltipProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
