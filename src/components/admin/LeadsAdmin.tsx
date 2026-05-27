"use client";

import { useEffect, useMemo, useState } from "react";
import {
  CircleCheck,
  Download,
  LoaderCircle,
  LogOut,
  RefreshCcw,
  Search,
  TriangleAlert,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/Table";
import { cn, formatRelative } from "@/lib/utils";
import {
  leadStatuses,
  type Lead,
  type LeadStatus,
} from "@/lib/admin/leads";

type Props = {
  token: string;
  onSignOut: () => void;
};

type StatusFilter = "all" | LeadStatus;

const statusTone: Record<
  LeadStatus,
  "neutral" | "brand" | "success" | "warning" | "danger" | "info"
> = {
  new: "brand",
  contacted: "info",
  qualified: "success",
  closed: "neutral",
  archived: "warning",
};

const statusLabel: Record<LeadStatus, string> = {
  new: "New",
  contacted: "Contacted",
  qualified: "Qualified",
  closed: "Closed",
  archived: "Archived",
};

export function LeadsAdmin({ token, onSignOut }: Props) {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");
  const [exporting, setExporting] = useState(false);

  async function fetchLeads(): Promise<{ leads?: Lead[]; error?: string; unauthorized?: boolean }> {
    try {
      const res = await fetch("/api/admin/leads", {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });
      if (res.status === 401) return { unauthorized: true };
      const data = (await res.json().catch(() => ({}))) as {
        ok: boolean;
        leads?: Lead[];
        error?: string;
      };
      if (!res.ok || !data.ok) {
        return { error: data.error ?? "Could not load leads." };
      }
      return { leads: data.leads ?? [] };
    } catch {
      return { error: "Network error — please try again." };
    }
  }

  function applyLoadResult(result: {
    leads?: Lead[];
    error?: string;
    unauthorized?: boolean;
  }) {
    if (result.unauthorized) {
      onSignOut();
      return;
    }
    if (result.error) {
      setError(result.error);
      return;
    }
    setLeads(result.leads ?? []);
  }

  function refresh() {
    setRefreshing(true);
    setError(null);
    fetchLeads().then((result) => {
      applyLoadResult(result);
      setRefreshing(false);
    });
  }

  useEffect(() => {
    fetchLeads().then((result) => {
      applyLoadResult(result);
      setLoading(false);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return leads.filter((lead) => {
      if (statusFilter !== "all" && lead.status !== statusFilter) return false;
      if (!q) return true;
      const haystack = [
        lead.name,
        lead.email,
        lead.company ?? "",
        lead.service,
        lead.budget ?? "",
        lead.message,
        lead.notes ?? "",
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [leads, query, statusFilter]);

  const counts = useMemo(() => {
    const totals: Record<StatusFilter, number> = {
      all: leads.length,
      new: 0,
      contacted: 0,
      qualified: 0,
      closed: 0,
      archived: 0,
    };
    for (const lead of leads) totals[lead.status]++;
    return totals;
  }, [leads]);

  async function updateLead(
    id: string,
    patch: { status?: LeadStatus; notes?: string | null }
  ) {
    const res = await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patch),
    });
    if (res.status === 401) {
      onSignOut();
      throw new Error("Unauthorized");
    }
    const data = (await res.json().catch(() => ({}))) as {
      ok: boolean;
      lead?: Lead;
      error?: string;
    };
    if (!res.ok || !data.ok || !data.lead) {
      throw new Error(data.error ?? "Update failed.");
    }
    setLeads((prev) => prev.map((l) => (l.id === id ? data.lead! : l)));
    return data.lead;
  }

  async function exportCsv() {
    setExporting(true);
    try {
      const res = await fetch("/api/admin/leads/export", {
        headers: { Authorization: `Bearer ${token}` },
        cache: "no-store",
      });
      if (res.status === 401) {
        onSignOut();
        return;
      }
      if (!res.ok) {
        setError("Export failed.");
        return;
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const stamp = new Date().toISOString().slice(0, 10);
      const link = document.createElement("a");
      link.href = url;
      link.download = `leads-${stamp}.csv`;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(url);
    } catch {
      setError("Export failed.");
    } finally {
      setExporting(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-5xl">
      <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Leads
          </h1>
          <p className="mt-2 text-[13.5px] text-foreground-muted">
            {counts.all} total · {counts.new} new · {counts.contacted} contacted ·{" "}
            {counts.qualified} qualified
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            onClick={refresh}
            disabled={refreshing}
            variant="outline"
            size="sm"
          >
            <RefreshCcw
              className={cn("h-3.5 w-3.5", refreshing && "animate-spin")}
            />
            Refresh
          </Button>
          <Button
            onClick={exportCsv}
            disabled={exporting}
            variant="outline"
            size="sm"
          >
            {exporting ? (
              <LoaderCircle className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <Download className="h-3.5 w-3.5" />
            )}
            Export CSV
          </Button>
          <Button
            onClick={onSignOut}
            variant="ghost"
            size="sm"
          >
            <LogOut className="h-3.5 w-3.5" />
            Sign out
          </Button>
        </div>
      </header>

      <div className="mt-6 grid gap-3 sm:grid-cols-[1fr_auto]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-subtle" />
          <Input
            type="search"
            placeholder="Search name, email, company, message…"
            className="pl-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
          className="sm:w-56"
        >
          <option value="all">All statuses ({counts.all})</option>
          {leadStatuses.map((status) => (
            <option key={status} value={status}>
              {statusLabel[status]} ({counts[status]})
            </option>
          ))}
        </Select>
      </div>

      {error && (
        <div
          role="alert"
          className="mt-4 flex items-start gap-3 rounded-2xl border border-danger/30 bg-danger/10 p-4 text-[13.5px] text-danger"
        >
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <div className="mt-6 space-y-4">
        {loading ? (
          <Card className="glass-card flex items-center justify-center rounded-2xl border-white/8 bg-transparent p-10 text-[13.5px] text-foreground-muted">
            <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
            Loading leads…
          </Card>
        ) : filtered.length === 0 ? (
          <Card className="glass-card rounded-2xl border-white/8 bg-transparent p-10 text-center text-[13.5px] text-foreground-muted">
            {leads.length === 0
              ? "No leads yet."
              : "No leads match the current filters."}
          </Card>
        ) : (
          filtered.map((lead) => (
            <LeadCard key={lead.id} lead={lead} onUpdate={updateLead} />
          ))
        )}
      </div>
    </div>
  );
}

type LeadCardProps = {
  lead: Lead;
  onUpdate: (
    id: string,
    patch: { status?: LeadStatus; notes?: string | null }
  ) => Promise<Lead>;
};

function LeadCard({ lead, onUpdate }: LeadCardProps) {
  const incomingNotes = lead.notes ?? "";
  const [notes, setNotes] = useState(incomingNotes);
  const [syncedNotes, setSyncedNotes] = useState(incomingNotes);
  const [savingStatus, setSavingStatus] = useState(false);
  const [savingNotes, setSavingNotes] = useState(false);
  const [notesSavedAt, setNotesSavedAt] = useState<number | null>(null);
  const [rowError, setRowError] = useState<string | null>(null);
  const [expanded, setExpanded] = useState(false);

  // Pull in newer parent values for notes (e.g. after a refresh) without an effect.
  if (syncedNotes !== incomingNotes) {
    setSyncedNotes(incomingNotes);
    setNotes(incomingNotes);
  }

  const notesDirty = notes !== incomingNotes;

  async function changeStatus(next: LeadStatus) {
    if (next === lead.status) return;
    setSavingStatus(true);
    setRowError(null);
    try {
      await onUpdate(lead.id, { status: next });
    } catch (err) {
      setRowError(err instanceof Error ? err.message : "Update failed.");
    } finally {
      setSavingStatus(false);
    }
  }

  async function saveNotes() {
    if (!notesDirty) return;
    setSavingNotes(true);
    setRowError(null);
    try {
      await onUpdate(lead.id, { notes: notes.trim() === "" ? null : notes });
      setNotesSavedAt(Date.now());
      setTimeout(() => setNotesSavedAt(null), 2000);
    } catch (err) {
      setRowError(err instanceof Error ? err.message : "Update failed.");
    } finally {
      setSavingNotes(false);
    }
  }

  const messagePreview =
    !expanded && lead.message.length > 220
      ? lead.message.slice(0, 220).trimEnd() + "…"
      : lead.message;

  return (
    <Card asChild className="glass-card rounded-2xl border-white/8 bg-transparent p-5 sm:p-6">
      <article>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-[15px] font-semibold tracking-tight text-white">
              {lead.name}
            </h2>
            <Badge tone={statusTone[lead.status]}>
              {statusLabel[lead.status]}
            </Badge>
          </div>
          <a
            href={`mailto:${lead.email}`}
            className="mt-1 inline-block break-all text-[13px] text-foreground-muted underline-offset-4 hover:text-white hover:underline"
          >
            {lead.email}
          </a>
          {lead.company && (
            <div className="mt-0.5 text-[12.5px] text-foreground-subtle">
              {lead.company}
            </div>
          )}
        </div>
        <div className="text-[12px] text-foreground-subtle sm:text-right">
          {formatRelative(lead.created_at)}
        </div>
      </div>

      <div className="mt-4 overflow-hidden rounded-xl border border-white/8 bg-white/2">
        <Table>
          <TableBody>
            <TableRow className="border-white/6 hover:bg-white/4">
              <TableCell className="w-24 py-2 text-[11px] uppercase tracking-[0.14em] text-foreground-subtle">
                Service
              </TableCell>
              <TableCell className="py-2 text-white">{lead.service}</TableCell>
            </TableRow>
            {lead.budget && (
              <TableRow className="border-white/6 hover:bg-white/4">
                <TableCell className="w-24 py-2 text-[11px] uppercase tracking-[0.14em] text-foreground-subtle">
                  Budget
                </TableCell>
                <TableCell className="py-2 text-white">{lead.budget}</TableCell>
              </TableRow>
            )}
            <TableRow className="border-white/6 hover:bg-white/4">
              <TableCell className="w-24 py-2 text-[11px] uppercase tracking-[0.14em] text-foreground-subtle">
                Source
              </TableCell>
              <TableCell className="py-2 text-white">{lead.source}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="mt-4">
        <div className="text-[10.5px] uppercase tracking-[0.16em] text-foreground-subtle">
          Message
        </div>
        <p className="mt-2 whitespace-pre-wrap text-[13.5px] leading-relaxed text-foreground">
          {messagePreview}
        </p>
        {lead.message.length > 220 && (
          <Button
            onClick={() => setExpanded((v) => !v)}
            type="button"
            variant="link"
            className="mt-2 text-[12px]"
          >
            {expanded ? "Show less" : "Show full message"}
          </Button>
        )}
      </div>

      <div className="mt-5 grid gap-4 sm:grid-cols-[200px_1fr] sm:items-start">
        <div>
          <div className="text-[10.5px] uppercase tracking-[0.16em] text-foreground-subtle">
            Status
          </div>
          <Select
            className="mt-2"
            value={lead.status}
            disabled={savingStatus}
            onChange={(e) => changeStatus(e.target.value as LeadStatus)}
          >
            {leadStatuses.map((status) => (
              <option key={status} value={status}>
                {statusLabel[status]}
              </option>
            ))}
          </Select>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <span className="text-[10.5px] uppercase tracking-[0.16em] text-foreground-subtle">
              Notes
            </span>
            {notesSavedAt && (
              <span className="inline-flex items-center gap-1 text-[11px] text-success">
                <CircleCheck className="h-3 w-3" />
                Saved
              </span>
            )}
          </div>
          <Textarea
            className="mt-2"
            rows={3}
            placeholder="Internal notes…"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <div className="mt-2 flex justify-end">
            <Button
              onClick={saveNotes}
              disabled={!notesDirty || savingNotes}
              variant="outline"
              size="sm"
            >
              {savingNotes && (
                <LoaderCircle className="h-3.5 w-3.5 animate-spin" />
              )}
              Save notes
            </Button>
          </div>
        </div>
      </div>

      {rowError && (
        <div className="mt-3 text-[12.5px] text-danger">{rowError}</div>
      )}
      </article>
    </Card>
  );
}
