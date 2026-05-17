import type { Metadata } from "next";
import { Activity, Gauge, Workflow } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { AuditForm } from "@/components/audit/AuditForm";

export const metadata: Metadata = {
  title: "AI Automation Audit",
  description:
    "Free rule-based AI automation audit for small businesses. Get an opportunity score, a recommended system, and a complexity read in under two minutes.",
  openGraph: {
    title: "AI Automation Audit · Avoy Das",
    description:
      "Free rule-based AI automation audit for small businesses. Score, recommended system, and complexity in under two minutes.",
  },
};

const signals: { icon: typeof Gauge; label: string; body: string }[] = [
  {
    icon: Gauge,
    label: "Opportunity score",
    body: "A 0–100 read on how much leverage automation gives your specific setup.",
  },
  {
    icon: Workflow,
    label: "Recommended system",
    body: "The shape of the build that fits your bottleneck — not a generic checklist.",
  },
  {
    icon: Activity,
    label: "Complexity & next step",
    body: "Honest read on effort, plus what to do first if you want to move on it.",
  },
];

export default function AutomationAuditPage() {
  return (
    <>
      <Section spacing="lg">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Badge tone="brand" size="md" dot>
                Automation audit
              </Badge>
              <h1 className="mt-6 text-balance text-[36px] font-semibold leading-[1.04] tracking-[-0.03em] text-gradient sm:text-[48px] lg:text-[56px]">
                Where would AI actually save you time?
              </h1>
              <p className="mt-6 text-pretty text-[15px] leading-relaxed text-foreground-muted sm:text-[17px]">
                Answer six questions about how your business runs today. I&apos;ll
                score the automation opportunity, recommend the right system, and
                give you an honest read on complexity — instantly, no AI tokens
                burned.
              </p>

              <div className="mt-9 space-y-3">
                {signals.map((s) => (
                  <div
                    key={s.label}
                    className="glass-card flex items-start gap-4 rounded-2xl p-5"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-white">
                      <s.icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="text-[10.5px] uppercase tracking-[0.16em] text-foreground-subtle">
                        {s.label}
                      </div>
                      <div className="mt-1 text-[13.5px] leading-relaxed text-foreground-muted">
                        {s.body}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <AuditForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
