import { useState, useEffect, useCallback } from "react";
import { useLocation } from "wouter";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { Layout } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
} from "@/components/ui/pagination";
import { MessagesTable } from "@/components/admin/messages-table";
import { MessageViewerModal } from "@/components/admin/message-viewer-modal";
import {
  fetchContactMessagesPaginated,
  updateMessageStatus,
  deleteMessage,
  subscribeContactMessages,
} from "@/lib/contact-messages";
import { useAuth } from "@/contexts/auth-context";
import { useToast } from "@/hooks/use-toast";
import {
  RefreshCw,
  Mail,
  Loader2,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import type { ContactMessageRow } from "@/lib/supabase";

const QUERY_KEY = ["contact-messages"];
const PAGE_SIZES = [10, 20, 50] as const;

function formatDate(dateString: string): string {
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
}

export default function AdminMessages() {
  const [, setLocation] = useLocation();
  const { signOut } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  const [selected, setSelected] = useState<ContactMessageRow | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const invalidate = useCallback(
    () =>
      queryClient.invalidateQueries({
        queryKey: QUERY_KEY,
      }),
    [queryClient]
  );

  const {
    data,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: [...QUERY_KEY, page, pageSize],
    queryFn: () => fetchContactMessagesPaginated(page, pageSize),
  });

  const messages = data?.data ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.max(1, Math.ceil(total / pageSize));
  const from = total === 0 ? 0 : (page - 1) * pageSize + 1;
  const to = Math.min(page * pageSize, total);

  useEffect(() => {
    const unsub = subscribeContactMessages(invalidate, invalidate, invalidate);
    return unsub;
  }, [invalidate]);

  useEffect(() => {
    if (page > totalPages && totalPages > 0) setPage(totalPages);
  }, [page, totalPages]);

  const markRepliedMutation = useMutation({
    mutationFn: (id: string) => updateMessageStatus(id, "replied"),
    onSuccess: () => {
      invalidate();
      toast({ title: "Marked as replied" });
    },
    onError: (err: Error) => {
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive",
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: deleteMessage,
    onSuccess: () => {
      invalidate();
      toast({ title: "Message deleted" });
      if (messages.length === 1 && page > 1) setPage((p) => Math.max(1, p - 1));
    },
    onError: (err: Error) => {
      toast({
        title: "Error",
        description: err.message,
        variant: "destructive",
      });
    },
  });

  const handleRowClick = async (msg: ContactMessageRow) => {
    setSelected(msg);
    setModalOpen(true);
    if (msg.status === "new") {
      try {
        await updateMessageStatus(msg.id, "read");
        invalidate();
      } catch (e) {
        toast({
          title: "Error",
          description: (e as Error).message,
          variant: "destructive",
        });
      }
    }
  };

  const handleMarkReplied = (id: string) => markRepliedMutation.mutateAsync(id);
  const handleDelete = (id: string) => deleteMutation.mutateAsync(id);

  const handleSignOut = async () => {
    await signOut();
    setLocation("/login");
  };

  const handlePageSizeChange = (value: string) => {
    const n = Number(value);
    setPageSize(n);
    setPage(1);
  };

  const unreadCount = messages.filter((m) => m.status === "new").length;

  if (isLoading) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-8 lg:py-12">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <Skeleton className="h-9 w-64 mb-2" />
              <Skeleton className="h-5 w-80" />
            </div>
          </div>
          <div className="rounded-lg border">
            <div className="p-4 space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-12 w-full" />
              ))}
            </div>
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
                <p className="text-destructive mb-4">
                  Error loading messages. Please check your configuration.
                </p>
                <Button onClick={() => refetch()} variant="outline">
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
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold mb-2 flex items-center gap-2">
              Contact Messages
              {unreadCount > 0 && (
                <span className="inline-flex items-center justify-center rounded-full bg-primary px-2.5 py-0.5 text-xs font-medium text-primary-foreground">
                  {unreadCount} new
                </span>
              )}
            </h1>
            <p className="text-muted-foreground">
              View and manage messages. Click a row to read, mark as replied, or delete.
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => {
                refetch();
                toast({
                  title: "Refreshing…",
                  description: "Fetching latest messages.",
                });
              }}
            >
              <RefreshCw className="mr-2 h-4 w-4" />
              Refresh
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleSignOut}
              title="Sign out"
            >
              <LogOut className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {messages.length === 0 ? (
          <Card>
            <CardContent className="pt-6">
              <div className="text-center py-12">
                <Mail className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No messages yet</h3>
                <p className="text-muted-foreground">
                  Messages from the contact form will appear here.
                </p>
              </div>
            </CardContent>
          </Card>
        ) : (
          <>
            <MessagesTable
              messages={messages}
              onRowClick={handleRowClick}
              formatDate={formatDate}
            />

            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span>
                  Showing {from}–{to} of {total}
                </span>
                <div className="flex items-center gap-2">
                  <span>Per page</span>
                  <Select
                    value={String(pageSize)}
                    onValueChange={handlePageSizeChange}
                  >
                    <SelectTrigger className="w-[70px] h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {PAGE_SIZES.map((s) => (
                        <SelectItem key={s} value={String(s)}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Pagination>
                <PaginationContent className="gap-1">
                  <PaginationItem>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1"
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={page <= 1}
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Previous
                    </Button>
                  </PaginationItem>
                  <PaginationItem className="px-2 text-sm">
                    Page {page} of {totalPages}
                  </PaginationItem>
                  <PaginationItem>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-1"
                      onClick={() =>
                        setPage((p) => Math.min(totalPages, p + 1))
                      }
                      disabled={page >= totalPages}
                    >
                      Next
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </>
        )}

        <MessageViewerModal
          message={selected}
          open={modalOpen}
          onOpenChange={setModalOpen}
          formatDate={formatDate}
          onMarkReplied={handleMarkReplied}
          onDelete={handleDelete}
        />
      </div>
    </Layout>
  );
}
