import Link from "next/link";
import {
  Magnet,
  LayoutDashboard,
  Globe,
  CalendarCheck,
  Workflow,
  Cpu,
  ArrowUpRight,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

const iconMap = {
  Magnet,
  LayoutDashboard,
  Globe,
  CalendarCheck,
  Workflow,
  Cpu,
} as const;

export function Services() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="What I build"
          title="Six engagement types. One outcome — systems that ship."
          description="Pick the engagement that matches where you are. Every one comes with strategy, a designed system, working software, and a real hand-off."
        />

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Globe;
            return (
              <Reveal key={service.slug} delay={(index % 3) * 0.06}>
                <Link href="/services" className="group block h-full">
                  <article className="glass-card relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05] hover:shadow-[0_24px_60px_-24px_rgba(109,140,255,0.4)] sm:p-7">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(120%_60%_at_50%_-10%,rgba(109,140,255,0.18),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="relative flex items-start justify-between">
                      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] text-white shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] transition-all duration-500 group-hover:border-accent/30 group-hover:from-accent/15 group-hover:text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <ArrowUpRight className="h-4 w-4 -translate-y-1 translate-x-1 text-foreground-subtle opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-white group-hover:opacity-100" />
                    </div>
                    <h3 className="relative mt-6 text-[17px] font-semibold tracking-[-0.015em] text-white">
                      {service.title}
                    </h3>
                    <p className="relative mt-2 text-[14.5px] leading-relaxed text-foreground-muted">
                      {service.tagline}
                    </p>
                    {service.startingAt && (
                      <div className="relative mt-6 inline-flex items-center gap-2 text-xs text-foreground-subtle">
                        <span className="h-1 w-1 rounded-full bg-foreground-subtle" />
                        {service.startingAt}
                      </div>
                    )}
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
