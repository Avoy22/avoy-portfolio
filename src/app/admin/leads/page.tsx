import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { LeadStats } from "@/components/admin/LeadStats";
import { LeadsTable } from "@/components/admin/LeadsTable";
import { mockLeads } from "@/data/leads";

export const metadata: Metadata = {
  title: "Leads",
  description: "Internal leads dashboard.",
  robots: { index: false, follow: false },
};

export default function LeadsPage() {
  // TODO: replace mockLeads with `await supabase.from('leads').select('*')`
  const leads = mockLeads;

  return (
    <Section spacing="sm">
      <Container>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-foreground-subtle">
              Pipeline
            </div>
            <h1 className="mt-2 text-balance text-[28px] font-semibold tracking-tight text-gradient sm:text-[34px]">
              Leads inbox
            </h1>
            <p className="mt-2 max-w-2xl text-[14.5px] leading-relaxed text-foreground-muted">
              Inbound inquiries from the marketing site. Search, filter, take
              notes, update status, export.
            </p>
          </div>
          <div className="inline-flex items-center gap-2 self-start rounded-full border border-white/[0.08] bg-white/[0.03] px-3.5 py-1.5 text-[11px] font-medium text-foreground-muted backdrop-blur sm:self-end">
            <span className="font-mono uppercase tracking-[0.18em] text-foreground-subtle">
              source
            </span>
            <span className="h-3 w-px bg-white/[0.08]" />
            <span className="text-white">Supabase</span>
            <span className="text-foreground-subtle">(placeholder)</span>
          </div>
        </div>

        <div className="mt-10">
          <LeadStats leads={leads} />
        </div>

        <div className="mt-6">
          <LeadsTable initialLeads={leads} />
        </div>
      </Container>
    </Section>
  );
}
