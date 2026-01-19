import { useQuery } from "@tanstack/react-query";
import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw, Mail, User, Building, Calendar, MessageSquare, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactMessage {
  id: string;
  name: string;
  email: string;
  company?: string;
  message: string;
  createdAt: string;
}

export default function AdminMessages() {
  const { toast } = useToast();

  const { data: messages, isLoading, error, refetch } = useQuery<ContactMessage[]>({
    queryKey: ["/api/contact"],
    queryFn: async () => {
      const response = await fetch("/api/contact");
      if (!response.ok) {
        throw new Error("Failed to fetch messages");
      }
      return response.json();
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return dateString;
    }
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-center min-h-[400px]">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12">
          <Card>
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-red-500 mb-4">Error loading messages. Please check your configuration.</p>
                <Button onClick={() => refetch()}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-2">Contact Messages</h1>
            <p className="text-muted-foreground">
              View and manage messages from the contact form
            </p>
          </div>
          <Button
            onClick={() => {
              refetch();
              toast({
                title: "Refreshing...",
                description: "Fetching latest messages",
              });
            }}
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
        </div>

        {messages && messages.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No messages yet</h3>
                <p className="text-muted-foreground">
                  Messages submitted through the contact form will appear here.
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-4">
            {messages?.map((message) => (
              <Card key={message.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2 mb-2">
                        <User className="h-5 w-5 text-primary" />
                        {message.name}
                      </CardTitle>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Mail className="h-4 w-4" />
                          <a
                            href={`mailto:${message.email}`}
                            className="hover:text-primary underline"
                          >
                            {message.email}
                          </a>
                        </div>
                        {message.company && (
                          <div className="flex items-center gap-1">
                            <Building className="h-4 w-4" />
                            {message.company}
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {formatDate(message.createdAt)}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-2 mb-2">
                    <MessageSquare className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.message}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {messages && messages.length > 0 && (
          <div className="mt-6 text-center text-sm text-muted-foreground">
            Total messages: {messages.length}
          </div>
        )}
      </div>
    </Layout>
  );
}
