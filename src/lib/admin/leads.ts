export const leadStatuses = [
  "new",
  "contacted",
  "qualified",
  "closed",
  "archived",
] as const;

export type LeadStatus = (typeof leadStatuses)[number];

export type Lead = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  service: string;
  budget: string | null;
  message: string;
  status: LeadStatus;
  notes: string | null;
  source: string;
  created_at: string;
};

export function isLeadStatus(value: unknown): value is LeadStatus {
  return (
    typeof value === "string" &&
    (leadStatuses as readonly string[]).includes(value)
  );
}

const csvHeaders = [
  "name",
  "email",
  "company",
  "service",
  "budget",
  "message",
  "status",
  "notes",
  "created_at",
] as const;

type CsvColumn = (typeof csvHeaders)[number];

function escapeCell(value: string | null | undefined): string {
  if (value == null) return "";
  const s = String(value);
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

export function leadsToCsv(leads: Lead[]): string {
  const rows = leads.map((lead) =>
    csvHeaders
      .map((col: CsvColumn) => escapeCell(lead[col] as string | null))
      .join(",")
  );
  return [csvHeaders.join(","), ...rows].join("\r\n");
}
