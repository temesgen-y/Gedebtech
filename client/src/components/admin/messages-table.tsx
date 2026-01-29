import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import type { ContactMessageRow } from "@/lib/supabase";

interface MessagesTableProps {
  messages: ContactMessageRow[];
  onRowClick: (msg: ContactMessageRow) => void;
  formatDate: (date: string) => string;
}

export function MessagesTable({
  messages,
  onRowClick,
  formatDate,
}: MessagesTableProps) {
  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Subject</TableHead>
            <TableHead>Message</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages.map((msg) => {
            const body = msg.message ?? (msg as { body?: string }).body ?? (msg as { content?: string }).content ?? "";
            return (
              <TableRow
                key={msg.id}
                className="cursor-pointer hover:bg-muted/50"
                onClick={() => onRowClick(msg)}
              >
                <TableCell className="font-medium">{msg.name}</TableCell>
                <TableCell className="text-muted-foreground">{msg.email}</TableCell>
                <TableCell className="max-w-[160px] truncate">
                  {msg.subject || "—"}
                </TableCell>
                <TableCell className="max-w-[220px] truncate text-muted-foreground">
                  {body ? String(body).slice(0, 60) + (String(body).length > 60 ? "…" : "") : "—"}
                </TableCell>
                <TableCell className="text-muted-foreground whitespace-nowrap">
                  {formatDate(msg.created_at)}
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      msg.status === "new"
                        ? "default"
                        : msg.status === "replied"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {msg.status}
                  </Badge>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}
