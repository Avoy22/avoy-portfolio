"use client";

import { useMemo, useState } from "react";
import {
  ChevronDown,
  Download,
  Mail,
  Search,
  SlidersHorizontal,
  StickyNote,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { formatRelative } from "@/lib/utils";
import type { Lead, LeadStatus } from "@/types";
import { cn } from "@/lib/utils";

const statusOrder: (LeadStatus | "all")[] = [
  "all",
  "new",
  "contacted",
  "qualified",
  "won",
  "lost",
];

const statusTone: Record<
  LeadStatus,
  "info" | "brand" | "success" | "danger" | "neutral"
> = {
  new: "info",
  contacted: "brand",
  qualified: "brand",
  won: "success",
  lost: "danger",
};

const statusLabel: Record<LeadStatus, string> = {
  new: "New",
  contacted: "Contacted",
  qualified: "Qualified",
  won: "Won",
  lost: "Lost",
};

export function LeadsTable({ initialLeads }: { initialLeads: Lead[] }) {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<LeadStatus | "all">("all");
  const [activeLead, setActiveLead] = useState<Lead | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return leads.filter((l) => {
      if (statusFilter !== "all" && l.status !== statusFilter) return false;
      if (!q) return true;
      return (
        l.name.toLowerCase().includes(q) ||
        l.email.toLowerCase().includes(q) ||
        (l.company ?? "").toLowerCase().includes(q) ||
        (l.service ?? "").toLowerCase().includes(q) ||
        l.message.toLowerCase().includes(q)
      );
    });
  }, [leads, query, statusFilter]);

  function updateStatus(id: string, status: LeadStatus) {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status } : l)));
    setActiveLead((prev) =>
      prev && prev.id === id ? { ...prev, status } : prev
    );
  }

  function updateNotes(id: string, notes: string) {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, notes } : l)));
    setActiveLead((prev) =>
      prev && prev.id === id ? { ...prev, notes } : prev
    );
  }

  function exportCsv() {
    const headers = [
      "id",
      "createdAt",
      "name",
      "email",
      "company",
      "budget",
      "service",
      "status",
      "source",
      "message",
      "notes",
    ];
    const rows = filtered.map((l) =>
      headers
        .map((h) => {
          const v =
            (l as unknown as Record<string, string | undefined>)[h] ?? "";
          const safe = String(v).replace(/"/g, '""');
          return `"${safe}"`;
        })
        .join(",")
    );
    const csv = [headers.join(","), ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `leads-${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <div className="glass-card overflow-hidden rounded-2xl">
      <div className="flex flex-col gap-4 border-b border-white/6 p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 items-center gap-3">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-subtle" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, email, company, service…"
              className="w-full rounded-xl border border-white/10 bg-white/3 py-2.5 pl-10 pr-9 text-sm text-foreground placeholder:text-foreground-subtle transition hover:border-white/20 focus:border-accent/60 focus:bg-white/5 focus:outline-none focus:ring-4 focus:ring-accent/10"
            />
            {query && (
              <button
                aria-label="Clear search"
                onClick={() => setQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-foreground-subtle transition hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/3 p-1 backdrop-blur sm:inline-flex">
            <SlidersHorizontal className="ml-2 h-3.5 w-3.5 text-foreground-subtle" />
            {statusOrder.map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={cn(
                  "rounded-full px-3 py-1 text-xs capitalize transition",
                  statusFilter === s
                    ? "bg-white/9 text-white shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]"
                    : "text-foreground-muted hover:text-white"
                )}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        <button
          onClick={exportCsv}
          className="inline-flex h-10 items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 text-xs font-medium text-white backdrop-blur transition hover:border-white/25 hover:bg-white/6"
        >
          <Download className="h-4 w-4" />
          Export CSV ({filtered.length})
        </button>
      </div>

      <div className="overflow-x-auto sm:hidden">
        <div className="flex gap-2 px-4 py-3">
          {statusOrder.map((s) => (
            <button
              key={s}
              onClick={() => setStatusFilter(s)}
              className={cn(
                "shrink-0 rounded-full px-3 py-1.5 text-xs capitalize transition",
                statusFilter === s
                  ? "bg-white/9 text-white"
                  : "border border-white/10 text-foreground-muted"
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-white/6 text-left text-[10.5px] uppercase tracking-[0.16em] text-foreground-subtle">
              <th className="px-5 py-3.5 font-semibold">Lead</th>
              <th className="px-5 py-3.5 font-semibold">Service</th>
              <th className="px-5 py-3.5 font-semibold">Budget</th>
              <th className="px-5 py-3.5 font-semibold">Source</th>
              <th className="px-5 py-3.5 font-semibold">Status</th>
              <th className="px-5 py-3.5 font-semibold">Received</th>
              <th className="px-5 py-3.5 font-semibold" />
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="px-5 py-20 text-center text-sm text-foreground-subtle"
                >
                  No leads match your filters.
                </td>
              </tr>
            )}
            {filtered.map((lead) => (
              <tr
                key={lead.id}
                className="border-b border-white/4 transition hover:bg-white/2"
              >
                <td className="px-5 py-4">
                  <button
                    onClick={() => setActiveLead(lead)}
                    className="flex items-center gap-3 text-left"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-accent/40 to-accent-2/40 text-[11px] font-semibold text-white ring-1 ring-white/10">
                      {lead.name
                        .split(" ")
                        .map((p) => p[0])
                        .slice(0, 2)
                        .join("")}
                    </div>
                    <div className="min-w-0">
                      <div className="truncate font-medium text-white">
                        {lead.name}
                      </div>
                      <div className="truncate text-xs text-foreground-subtle">
                        {lead.company ?? lead.email}
                      </div>
                    </div>
                  </button>
                </td>
                <td className="px-5 py-4 text-foreground-muted">
                  {lead.service ?? "—"}
                </td>
                <td className="px-5 py-4 tabular text-foreground-muted">
                  {lead.budget ?? "—"}
                </td>
                <td className="px-5 py-4 text-foreground-muted">
                  {lead.source ?? "—"}
                </td>
                <td className="px-5 py-4">
                  <StatusSelect
                    value={lead.status}
                    onChange={(s) => updateStatus(lead.id, s)}
                  />
                </td>
                <td className="px-5 py-4 tabular text-xs text-foreground-subtle">
                  {formatRelative(lead.createdAt)}
                </td>
                <td className="px-5 py-4 text-right">
                  <button
                    onClick={() => setActiveLead(lead)}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs text-white backdrop-blur transition hover:border-white/25 hover:bg-white/6"
                  >
                    <StickyNote className="h-3.5 w-3.5" />
                    Open
                    {lead.notes && (
                      <span className="ml-1 inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                    )}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {activeLead && (
        <LeadDrawer
          lead={activeLead}
          onClose={() => setActiveLead(null)}
          onStatusChange={(s) => updateStatus(activeLead.id, s)}
          onNotesChange={(n) => updateNotes(activeLead.id, n)}
        />
      )}
    </div>
  );
}

function StatusSelect({
  value,
  onChange,
}: {
  value: LeadStatus;
  onChange: (status: LeadStatus) => void;
}) {
  return (
    <div className="relative inline-flex items-center">
      <Badge tone={statusTone[value]} dot>
        {statusLabel[value]}
      </Badge>
      <select
        aria-label="Change status"
        value={value}
        onChange={(e) => onChange(e.target.value as LeadStatus)}
        className="absolute inset-0 cursor-pointer opacity-0"
      >
        {(["new", "contacted", "qualified", "won", "lost"] as LeadStatus[]).map(
          (s) => (
            <option key={s} value={s}>
              {statusLabel[s]}
            </option>
          )
        )}
      </select>
      <ChevronDown className="ml-1 h-3 w-3 text-foreground-subtle" />
    </div>
  );
}

function LeadDrawer({
  lead,
  onClose,
  onStatusChange,
  onNotesChange,
}: {
  lead: Lead;
  onClose: () => void;
  onStatusChange: (s: LeadStatus) => void;
  onNotesChange: (n: string) => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex">
      <button
        aria-label="Close"
        onClick={onClose}
        className="flex-1 bg-black/65 backdrop-blur-sm"
      />
      <aside className="flex w-full max-w-xl flex-col border-l border-white/6 bg-background-soft shadow-[-30px_0_80px_-30px_rgba(0,0,0,0.6)]">
        <div className="flex items-center justify-between border-b border-white/6 p-5">
          <div>
            <div className="text-[10.5px] uppercase tracking-[0.16em] text-foreground-subtle">
              Lead details
            </div>
            <div className="mt-1 text-base font-semibold tracking-tight text-white">
              {lead.name}
            </div>
          </div>
          <button
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/3 text-foreground-muted transition hover:border-white/25 hover:bg-white/6 hover:text-white"
            aria-label="Close drawer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5">
          <div className="grid grid-cols-2 gap-3 text-sm">
            <DetailCell label="Email">
              <a
                href={`mailto:${lead.email}`}
                className="inline-flex items-center gap-1.5 text-white hover:underline"
              >
                <Mail className="h-3.5 w-3.5" />
                {lead.email}
              </a>
            </DetailCell>
            <DetailCell label="Company">{lead.company ?? "—"}</DetailCell>
            <DetailCell label="Service">{lead.service ?? "—"}</DetailCell>
            <DetailCell label="Budget">{lead.budget ?? "—"}</DetailCell>
            <DetailCell label="Source">{lead.source ?? "—"}</DetailCell>
            <DetailCell label="Received">
              {formatRelative(lead.createdAt)}
            </DetailCell>
          </div>

          <div className="mt-7">
            <div className="text-[10.5px] uppercase tracking-[0.16em] text-foreground-subtle">
              Status
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {(
                ["new", "contacted", "qualified", "won", "lost"] as LeadStatus[]
              ).map((s) => (
                <button
                  key={s}
                  onClick={() => onStatusChange(s)}
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs capitalize transition",
                    lead.status === s
                      ? "border-accent/50 bg-accent/10 text-white shadow-[0_0_0_3px_rgba(109,140,255,0.08)]"
                      : "border-white/10 bg-white/3 text-foreground-muted hover:border-white/25 hover:text-white"
                  )}
                >
                  {statusLabel[s]}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <div className="text-[10.5px] uppercase tracking-[0.16em] text-foreground-subtle">
              Message
            </div>
            <div className="mt-3 rounded-xl border border-white/6 bg-white/2 p-4 text-[14px] leading-relaxed text-foreground-muted">
              {lead.message}
            </div>
          </div>

          <div className="mt-7">
            <label
              htmlFor="notes"
              className="text-[10.5px] uppercase tracking-[0.16em] text-foreground-subtle"
            >
              Internal notes
            </label>
            <textarea
              id="notes"
              value={lead.notes ?? ""}
              onChange={(e) => onNotesChange(e.target.value)}
              placeholder="Add a note for the team…"
              className="mt-3 min-h-32 w-full resize-y rounded-xl border border-white/10 bg-white/3 p-3.5 text-[14px] leading-relaxed text-foreground placeholder:text-foreground-subtle transition hover:border-white/20 focus:border-accent/60 focus:bg-white/5 focus:outline-none focus:ring-4 focus:ring-accent/10"
            />
          </div>
        </div>

        <div className="border-t border-white/6 p-4">
          <a
            href={`mailto:${lead.email}?subject=Re: your inquiry`}
            className="group inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white text-sm font-medium text-black shadow-[0_1px_0_rgba(255,255,255,0.6)_inset,0_10px_28px_-10px_rgba(255,255,255,0.4)] transition hover:bg-zinc-100"
          >
            <Mail className="h-4 w-4" />
            Reply via email
          </a>
        </div>
      </aside>
    </div>
  );
}

function DetailCell({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/6 bg-white/2 p-3.5">
      <div className="text-[10px] uppercase tracking-[0.16em] text-foreground-subtle">
        {label}
      </div>
      <div className="mt-1.5 text-[13.5px] text-white">{children}</div>
    </div>
  );
}
