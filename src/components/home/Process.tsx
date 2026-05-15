import { Compass, PenTool, Hammer, Rocket, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/data/process";

const iconMap: Record<string, LucideIcon> = {
  Compass,
  PenTool,
  Hammer,
  Rocket,
};

export function Process() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Process"
          title="A weekly-shipping engagement, not a black box."
          description="No long discoveries that go nowhere. From day one you see direction, then weekly increments deployed to a real URL."
        />

        <div className="relative mt-12 grid gap-4 sm:mt-14 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-6 top-[58px] -z-10 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent lg:block"
          />
          {processSteps.map((step, i) => {
            const Icon = iconMap[step.icon] ?? Compass;
            return (
              <Reveal key={step.step} delay={i * 0.06}>
                <div className="glass-card group relative h-full rounded-2xl p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/15 sm:p-7">
                  <div className="flex items-center justify-between">
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] text-white shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] transition-all duration-500 group-hover:border-accent/30 group-hover:from-accent/15 group-hover:text-accent">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="tabular font-mono text-[11px] text-foreground-subtle">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="mt-6 text-[16px] font-semibold tracking-[-0.015em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-foreground-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
