import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Database,
  FileSpreadsheet,
  KeyRound,
  Layers,
  LockKeyhole,
  Server,
  ShieldCheck,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProofDemo } from "@/components/proof/ProofDemo";

export const metadata: Metadata = {
  title: "Proof of Work",
  description:
    "A practical look at the systems, workflows, architecture, and deployed features behind this portfolio — including a safe public demo of the lead management workflow.",
  openGraph: {
    title: "Proof of Work · Aboy Chandra Das",
    description:
      "A practical look at the systems, workflows, architecture, and deployed features behind this portfolio.",
  },
};

type ArchCard = {
  icon: LucideIcon;
  title: string;
  body: string;
  tags: string[];
};

const architecture: ArchCard[] = [
  {
    icon: Layers,
    title: "Frontend",
    body: "Typed, component-driven UI with a responsive dark design system and subtle motion.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "shadcn/ui"],
  },
  {
    icon: Server,
    title: "Backend",
    body: "Next.js API routes handle form submission and admin actions, with schema validation on every input.",
    tags: ["API routes", "Zod validation", "Server-side"],
  },
  {
    icon: Database,
    title: "Database",
    body: "Leads are stored in a Supabase Postgres table that backs both the contact form and the admin pipeline.",
    tags: ["Supabase", "Postgres", "Leads table"],
  },
  {
    icon: LockKeyhole,
    title: "Admin",
    body: "A protected admin dashboard gated by a bearer token, with a status and notes workflow per lead.",
    tags: ["Protected route", "Bearer token", "Status & notes"],
  },
  {
    icon: FileSpreadsheet,
    title: "Export",
    body: "A CSV export workflow turns the filtered lead set into a clean file for hand-off to other tools.",
    tags: ["CSV export", "Filtered data", "Hand-off"],
  },
  {
    icon: Workflow,
    title: "Automation Audit",
    body: "The audit tool captures workflow inputs, returns a recommendation, and saves the request to the lead flow.",
    tags: ["Workflow input", "Recommendation", "Saved lead"],
  },
];

const securityNotes: string[] = [
  "The Supabase service role key is server-only and never reaches the browser.",
  "Admin API routes verify a bearer token before returning any lead data.",
  "Environment secrets live in .env.local, which is not committed to the repo.",
  "Every user input is validated with Zod schemas before it is stored.",
  "This public demo uses mock data only — it never touches the admin API or Supabase.",
  "Real leads are protected behind admin access and are never exposed publicly.",
];

type Evidence = {
  title: string;
  problem: string;
  proof: string;
  value: string;
  href: string;
  linkLabel: string;
};

const evidence: Evidence[] = [
  {
    title: "ServicePro Lead Engine",
    problem:
      "Service businesses lose inquiries in a personal inbox with no structured place to track follow-ups.",
    proof:
      "Full-stack Next.js app: Zod-validated contact form, Supabase leads table, token-protected admin dashboard with status, notes, and CSV export.",
    value:
      "Every inbound lead lands in one searchable source of truth with a clear status workflow.",
    href: "/projects/servicepro-lead-engine",
    linkLabel: "Read case study",
  },
  {
    title: "Business Expense & Sales Dashboard",
    problem:
      "Owners track sales and expenses in disconnected spreadsheets and recalculate profit by hand at month end.",
    proof:
      "Responsive dashboard with server-side aggregation that turns daily entries into live KPI cards, trend charts, and exportable reports.",
    value:
      "Profit becomes visible day-to-day, so pricing and spending decisions stop lagging the numbers.",
    href: "/projects/business-expense-sales-dashboard",
    linkLabel: "Read case study",
  },
  {
    title: "AI Lead Tracker CRM",
    problem:
      "Freelancers and small teams scatter prospects across notes, chats, and spreadsheets, so follow-ups slip.",
    proof:
      "Focused CRM dashboard with a status pipeline, per-lead notes, and client-side search — backed by Sheets or a database.",
    value:
      "A lightweight pipeline that gives solo operators a professional follow-up system without a heavy CRM.",
    href: "/projects/ai-lead-tracker-crm",
    linkLabel: "Read case study",
  },
  {
    title: "Automation Audit Tool",
    problem:
      "Small businesses know they waste time on manual work but can't see which workflows are worth automating.",
    proof:
      "Interactive, rule-based audit that scores workflow inputs, recommends a system, and saves the request into the lead flow.",
    value:
      "Turns a vague 'we should automate something' into a concrete, prioritised recommendation in minutes.",
    href: "/automation-audit",
    linkLabel: "Try the audit",
  },
];

export default function ProofPage() {
  return (
    <>
      {/* Hero */}
      <Section spacing="lg">
        <Container size="lg">
          <Reveal>
            <div className="max-w-3xl">
              <Badge tone="brand" size="md" dot>
                Proof
              </Badge>
              <h1 className="mt-6 text-balance text-[40px] font-semibold leading-[1.04] tracking-[-0.03em] text-gradient sm:text-[56px] lg:text-[64px]">
                Proof of Work
              </h1>
              <p className="mt-6 text-pretty text-[15px] leading-relaxed text-foreground-muted sm:text-[18px]">
                A practical look at the systems, workflows, architecture, and
                deployed features behind this portfolio.
              </p>

              <div className="mt-9 grid gap-3 sm:flex sm:flex-wrap sm:items-center">
                <Button asChild size="md">
                  <Link href="/projects">
                    View Projects
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="md">
                  <Link href="/automation-audit">
                    <Workflow className="h-4 w-4" />
                    Run Automation Audit
                  </Link>
                </Button>
                <Button asChild variant="outline" size="md">
                  <Link href="/contact">
                    Contact Me
                    <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Interactive Demo Workflow */}
      <Section spacing="sm">
        <Container size="lg">
          <Reveal>
            <SectionTitle icon={Workflow} eyebrow="Interactive demo">
              The lead workflow, running live
            </SectionTitle>
            <p className="mt-4 max-w-2xl text-[14px] leading-relaxed text-foreground-muted sm:text-[15px]">
              This mirrors the real admin dashboard — search, status workflow,
              notes, and CSV export — but runs entirely on safe sample data in
              your browser. No database, no admin API, no real leads.
            </p>
          </Reveal>
          <Reveal delay={0.05} className="mt-7">
            <ProofDemo />
          </Reveal>
        </Container>
      </Section>

      {/* Architecture Overview */}
      <Section spacing="sm">
        <Container size="lg">
          <Reveal>
            <SectionTitle icon={Layers} eyebrow="Architecture">
              How the system fits together
            </SectionTitle>
          </Reveal>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {architecture.map((card, i) => {
              const Icon = card.icon;
              return (
                <Reveal key={card.title} delay={(i % 3) * 0.05}>
                  <article className="glass-card interactive-card h-full rounded-2xl p-6 sm:p-7">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-white">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <h3 className="mt-4 text-[16px] font-semibold tracking-[-0.01em] text-white sm:text-[17px]">
                      {card.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-foreground-muted">
                      {card.body}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border border-white/8 bg-white/3 px-2.5 py-0.5 text-[11.5px] text-foreground-subtle"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Security Notes */}
      <Section spacing="sm">
        <Container size="lg">
          <Reveal>
            <article className="glass-card interactive-card rounded-2xl p-7 sm:p-8">
              <SectionTitle icon={ShieldCheck} eyebrow="Security">
                How the data stays protected
              </SectionTitle>
              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {securityNotes.map((note) => (
                  <li
                    key={note}
                    className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-foreground-muted sm:text-[14px]"
                  >
                    <KeyRound className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                    {note}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </Container>
      </Section>

      {/* Project Evidence */}
      <Section spacing="sm">
        <Container size="lg">
          <Reveal>
            <SectionTitle icon={CheckCircle2} eyebrow="Evidence">
              Shipped work behind the claims
            </SectionTitle>
          </Reveal>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {evidence.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.05}>
                <article className="glass-card interactive-card flex h-full flex-col rounded-2xl p-7 sm:p-8">
                  <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-white sm:text-[20px]">
                    {item.title}
                  </h3>
                  <dl className="mt-4 space-y-3.5">
                    <EvidenceRow label="Problem solved" value={item.problem} />
                    <EvidenceRow label="Technical proof" value={item.proof} />
                    <EvidenceRow label="Business value" value={item.value} />
                  </dl>
                  <div className="mt-auto border-t border-white/6 pt-4">
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-1.5 text-[13px] font-medium text-white transition hover:text-accent"
                    >
                      {item.linkLabel}
                      <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section spacing="md">
        <Container size="lg">
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/8 via-white/3 to-transparent p-8 sm:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 grid-bg mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent_75%)] opacity-25"
              />
              <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white sm:text-[28px]">
                    Want this kind of system for your business?
                  </h2>
                  <p className="mt-3 text-[14px] leading-relaxed text-foreground-muted sm:text-[15px]">
                    Run the automation audit for a quick recommendation, or
                    reach out directly to scope a build.
                  </p>
                </div>
                <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
                  <Button asChild size="md">
                    <Link href="/automation-audit">
                      <Workflow className="h-4 w-4" />
                      Run Automation Audit
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="md">
                    <Link href="/contact">
                      Contact Me
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

function SectionTitle({
  icon: Icon,
  eyebrow,
  children,
}: {
  icon: LucideIcon;
  eyebrow?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      {eyebrow && (
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-subtle">
          {eyebrow}
        </div>
      )}
      <div className="mt-2 flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-white">
          <Icon className="h-4 w-4" />
        </span>
        <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white sm:text-[26px]">
          {children}
        </h2>
      </div>
    </div>
  );
}

function EvidenceRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-foreground-subtle">
        {label}
      </dt>
      <dd className="mt-1 text-[13.5px] leading-relaxed text-foreground-muted">
        {value}
      </dd>
    </div>
  );
}
