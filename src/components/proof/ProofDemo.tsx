"use client";

import { useMemo, useState } from "react";
import { Download, Info, Search } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input, Select, Textarea } from "@/components/ui/Input";
import { cn } from "@/lib/utils";
import {
  leadStatuses,
  leadsToCsv,
  type Lead,
  type LeadStatus,
} from "@/lib/admin/leads";

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

// Sample data only — no real leads, no database, no admin API. The records
// below are fictional and live entirely in client-side React state.
const SAMPLE_LEADS: Lead[] = [
  {
    id: "demo-1",
    name: "Jordan Avery",
    email: "jordan@brightclean.example",
    company: "BrightClean Services",
    service: "Lead capture system",
    budget: "$2k–$5k",
    message: "Need a contact form that drops inquiries into one dashboard.",
    status: "new",
    notes: null,
    source: "Contact form",
    created_at: "2026-05-26T09:15:00.000Z",
  },
  {
    id: "demo-2",
    name: "Priya Nair",
    email: "priya@nairdental.example",
    company: "Nair Family Dental",
    service: "Admin dashboard",
    budget: "$5k+",
    message: "Want to track patient enquiries and follow-up status.",
    status: "contacted",
    notes: "Sent intro call link, awaiting reply.",
    source: "Automation audit",
    created_at: "2026-05-24T14:40:00.000Z",
  },
  {
    id: "demo-3",
    name: "Marcus Webb",
    email: "marcus@webbplumbing.example",
    company: "Webb Plumbing Co.",
    service: "CRM workflow",
    budget: "$2k–$5k",
    message: "Leads come from three places and keep getting lost.",
    status: "qualified",
    notes: "Good fit — scoping a Sheets-backed pipeline.",
    source: "Referral",
    created_at: "2026-05-22T08:05:00.000Z",
  },
  {
    id: "demo-4",
    name: "Elena Fischer",
    email: "elena@fischerstudio.example",
    company: "Fischer Design Studio",
    service: "Business dashboard",
    budget: "Under $2k",
    message: "Sales and expenses are split across two spreadsheets.",
    status: "new",
    notes: null,
    source: "Contact form",
    created_at: "2026-05-21T17:30:00.000Z",
  },
  {
    id: "demo-5",
    name: "Tomas Reyes",
    email: "tomas@reyeslogistics.example",
    company: "Reyes Logistics",
    service: "Workflow automation",
    budget: "$5k+",
    message: "Manual order entry is eating two hours a day.",
    status: "contacted",
    notes: "Demoed CSV export flow, very interested.",
    source: "Automation audit",
    created_at: "2026-05-19T11:20:00.000Z",
  },
  {
    id: "demo-6",
    name: "Hana Sato",
    email: "hana@satobakery.example",
    company: "Sato Bakery",
    service: "Lead capture system",
    budget: "Under $2k",
    message: "Catering requests get missed during busy hours.",
    status: "closed",
    notes: "Launched — handed off and following up next quarter.",
    source: "Referral",
    created_at: "2026-05-15T07:50:00.000Z",
  },
  {
    id: "demo-7",
    name: "Daniel Okoro",
    email: "daniel@okorofitness.example",
    company: "Okoro Fitness",
    service: "CRM workflow",
    budget: "$2k–$5k",
    message: "Trial sign-ups never get a structured follow-up.",
    status: "archived",
    notes: "Paused — revisit after their busy season.",
    source: "Contact form",
    created_at: "2026-05-10T19:05:00.000Z",
  },
];

export function ProofDemo() {
  const [leads, setLeads] = useState<Lead[]>(SAMPLE_LEADS);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

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
        lead.message,
        lead.notes ?? "",
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [leads, query, statusFilter]);

  function updateStatus(id: string, status: LeadStatus) {
    setLeads((prev) =>
      prev.map((lead) => (lead.id === id ? { ...lead, status } : lead))
    );
  }

  function updateNotes(id: string, notes: string) {
    setLeads((prev) =>
      prev.map((lead) =>
        lead.id === id ? { ...lead, notes: notes === "" ? null : notes } : lead
      )
    );
  }

  function exportCsv() {
    const csv = leadsToCsv(filtered);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const stamp = new Date().toISOString().slice(0, 10);
    const link = document.createElement("a");
    link.href = url;
    link.download = `sample-leads-${stamp}.csv`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <div className="glass-card rounded-2xl border-white/8 p-5 sm:p-7">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-[17px] font-semibold tracking-[-0.01em] text-white sm:text-[19px]">
              Lead Manager
            </h3>
            <Badge tone="warning" size="sm">
              Public demo using sample data
            </Badge>
          </div>
          <p className="mt-2 text-[13px] text-foreground-muted">
            {counts.all} sample leads · {counts.new} new · {counts.contacted}{" "}
            contacted · {counts.qualified} qualified
          </p>
        </div>
        <Button
          onClick={exportCsv}
          variant="outline"
          size="sm"
          className="w-full sm:w-auto"
        >
          <Download className="h-3.5 w-3.5" />
          Export sample CSV
        </Button>
      </div>

      <div className="mt-3 flex items-start gap-2 rounded-xl border border-warning/25 bg-warning/10 p-3 text-[12.5px] leading-relaxed text-warning">
        <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
        <span>
          This is a safe, self-contained demo. Everything below uses fictional
          sample data held in your browser — it never calls the admin API,
          Supabase, or any real leads. Changes reset on refresh.
        </span>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-[1fr_auto]">
        <div className="relative">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-subtle" />
          <Input
            type="search"
            placeholder="Search name, company, service…"
            className="pl-10"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search sample leads"
          />
        </div>
        <Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as StatusFilter)}
          className="sm:w-56"
          aria-label="Filter by status"
        >
          <option value="all">All statuses ({counts.all})</option>
          {leadStatuses.map((status) => (
            <option key={status} value={status}>
              {statusLabel[status]} ({counts[status]})
            </option>
          ))}
        </Select>
      </div>

      <div className="mt-5 overflow-x-auto rounded-xl border border-white/8 bg-white/2">
        <table className="w-full min-w-[760px] caption-bottom text-sm">
          <thead>
            <tr className="border-b border-white/8 text-left">
              <th className="px-4 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-foreground-subtle">
                Lead
              </th>
              <th className="px-4 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-foreground-subtle">
                Service
              </th>
              <th className="w-44 px-4 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-foreground-subtle">
                Status
              </th>
              <th className="px-4 py-3 text-[11px] font-medium uppercase tracking-[0.14em] text-foreground-subtle">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-4 py-10 text-center text-[13.5px] text-foreground-muted"
                >
                  No sample leads match the current filters.
                </td>
              </tr>
            ) : (
              filtered.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-white/6 align-top transition-colors last:border-0 hover:bg-white/3"
                >
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="text-[13.5px] font-medium text-white">
                        {lead.name}
                      </span>
                      <Badge tone={statusTone[lead.status]} size="sm">
                        {statusLabel[lead.status]}
                      </Badge>
                    </div>
                    <div className="mt-0.5 text-[12px] text-foreground-subtle">
                      {lead.company}
                    </div>
                  </td>
                  <td className="px-4 py-3 text-[13px] text-foreground-muted">
                    {lead.service}
                  </td>
                  <td className="px-4 py-3">
                    <Select
                      value={lead.status}
                      onChange={(e) =>
                        updateStatus(lead.id, e.target.value as LeadStatus)
                      }
                      className="py-2 text-[13px]"
                      aria-label={`Update status for ${lead.name}`}
                    >
                      {leadStatuses.map((status) => (
                        <option key={status} value={status}>
                          {statusLabel[status]}
                        </option>
                      ))}
                    </Select>
                  </td>
                  <td className="px-4 py-3">
                    <Textarea
                      rows={2}
                      value={lead.notes ?? ""}
                      onChange={(e) => updateNotes(lead.id, e.target.value)}
                      placeholder="Add an internal note…"
                      className={cn(
                        "min-h-0 resize-y px-3 py-2 text-[13px]"
                      )}
                      aria-label={`Notes for ${lead.name}`}
                    />
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-[12px] text-foreground-subtle">
        Try it: search, filter by status, change a status, edit a note, then
        export the filtered set as CSV — the same workflow the real admin
        dashboard runs against Supabase.
      </p>
    </div>
  );
}
