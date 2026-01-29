import { supabase } from "./supabase";
import type { ContactMessageRow } from "./supabase";

export interface FetchMessagesResult {
  data: ContactMessageRow[];
  total: number;
}

export async function fetchContactMessages(): Promise<ContactMessageRow[]> {
  if (!supabase) throw new Error("Supabase is not configured.");
  const { data, error } = await supabase
    .from("contact_messages")
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw error;
  return (data ?? []) as ContactMessageRow[];
}

export async function fetchContactMessagesPaginated(
  page: number,
  pageSize: number
): Promise<FetchMessagesResult> {
  if (!supabase) throw new Error("Supabase is not configured.");
  const from = (page - 1) * pageSize;
  const to = from + pageSize - 1;
  const { data, error, count } = await supabase
    .from("contact_messages")
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false })
    .range(from, to);
  if (error) throw error;
  return {
    data: (data ?? []) as ContactMessageRow[],
    total: count ?? 0,
  };
}

export async function updateMessageStatus(
  id: string,
  status: "new" | "read" | "replied"
): Promise<void> {
  if (!supabase) throw new Error("Supabase is not configured.");
  const { error } = await supabase
    .from("contact_messages")
    .update({ status })
    .eq("id", id);
  if (error) throw error;
}

export async function deleteMessage(id: string): Promise<void> {
  if (!supabase) throw new Error("Supabase is not configured.");
  const { error } = await supabase.from("contact_messages").delete().eq("id", id);
  if (error) throw error;
}

export function subscribeContactMessages(
  onInsert: () => void,
  onUpdate: () => void,
  onDelete: () => void
): () => void {
  const client = supabase;
  if (!client) return () => {};
  const channel = client
    .channel("contact_messages_changes")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "contact_messages" },
      onInsert
    )
    .on(
      "postgres_changes",
      { event: "UPDATE", schema: "public", table: "contact_messages" },
      onUpdate
    )
    .on(
      "postgres_changes",
      { event: "DELETE", schema: "public", table: "contact_messages" },
      onDelete
    )
    .subscribe();
  return () => {
    client.removeChannel(channel);
  };
}
