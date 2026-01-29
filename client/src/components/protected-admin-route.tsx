import { useEffect } from "react";
import { useLocation } from "wouter";
import { useAuth } from "@/contexts/auth-context";
import { Loader2 } from "lucide-react";
import { Layout } from "@/components/layout";

interface ProtectedAdminRouteProps {
  children: React.ReactNode;
}

export function ProtectedAdminRoute({ children }: ProtectedAdminRouteProps) {
  const [, setLocation] = useLocation();
  const { user, isAdmin, isLoading } = useAuth();

  useEffect(() => {
    if (isLoading) return;
    if (!user || !isAdmin) {
      setLocation("/login");
    }
  }, [user, isAdmin, isLoading, setLocation]);

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-24 flex justify-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </div>
      </Layout>
    );
  }

  if (!user || !isAdmin) {
    return null;
  }

  return <>{children}</>;
}
