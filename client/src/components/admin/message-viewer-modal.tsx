import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Mail, MessageSquare, Loader2, Reply, Trash2 } from "lucide-react";
import { useState } from "react";
import type { ContactMessageRow } from "@/lib/supabase";

interface MessageViewerModalProps {
  message: ContactMessageRow | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  formatDate: (date: string) => string;
  onMarkReplied: (id: string) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export function MessageViewerModal({
  message,
  open,
  onOpenChange,
  formatDate,
  onMarkReplied,
  onDelete,
}: MessageViewerModalProps) {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [actionLoading, setActionLoading] = useState<
    "replied" | "delete" | null
  >(null);

  if (!message) return null;

  const handleMarkReplied = async () => {
    setActionLoading("replied");
    try {
      await onMarkReplied(message.id);
      onOpenChange(false);
    } finally {
      setActionLoading(null);
    }
  };

  const handleDeleteClick = () => setShowDeleteConfirm(true);

  const handleDeleteConfirm = async () => {
    setActionLoading("delete");
    try {
      await onDelete(message.id);
      setShowDeleteConfirm(false);
      onOpenChange(false);
    } finally {
      setActionLoading(null);
    }
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>{message.subject || "No subject"}</DialogTitle>
            <DialogDescription>
              From {message.name} · {formatDate(message.created_at)}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <a
                href={`mailto:${message.email}`}
                className="text-primary hover:underline"
              >
                {message.email}
              </a>
            </div>
            {message.company && (
              <p className="text-sm text-muted-foreground">
                Company: {message.company}
              </p>
            )}
            <div className="space-y-1">
              <p className="text-sm font-medium text-foreground">Message</p>
              <div className="flex gap-2">
                <MessageSquare className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <p className="text-sm leading-relaxed whitespace-pre-wrap flex-1">
                  {(message.message ?? (message as { body?: string }).body ?? (message as { content?: string }).content ?? "") || "—"}
                </p>
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={handleMarkReplied}
              disabled={actionLoading !== null}
            >
              {actionLoading === "replied" ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : (
                <Reply className="h-4 w-4 mr-2" />
              )}
              Mark as Replied
            </Button>
            <Button
              variant="destructive"
              onClick={handleDeleteClick}
              disabled={actionLoading !== null}
            >
              <Trash2 className="h-4 w-4 mr-2" />
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <AlertDialog open={showDeleteConfirm} onOpenChange={setShowDeleteConfirm}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete message?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The message from {message.name} will
              be permanently deleted.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={actionLoading !== null}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={(e) => {
                e.preventDefault();
                handleDeleteConfirm();
              }}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
              disabled={actionLoading !== null}
            >
              {actionLoading === "delete" ? (
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
              ) : null}
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
