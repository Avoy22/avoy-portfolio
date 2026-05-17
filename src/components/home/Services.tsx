import Link from "next/link";
import {
  Magnet,
  LayoutDashboard,
  Globe,
  Workflow,
  ArrowUpRight,
  Gauge,
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
  Workflow,
} as const;

export function Services() {
  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Services"
          title="What I build"
          description="Focused engagements for small businesses and service providers."
        />

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:gap-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] ?? Globe;
            return (
              <Reveal key={service.slug} delay={(index % 2) * 0.06}>
                <Link href="/services" className="group block h-full">
                  <article className="glass-card relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/5 sm:p-7">
                    <div className="relative flex items-start justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-white transition group-hover:border-accent/30 group-hover:bg-accent/10 group-hover:text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-foreground-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                    </div>
                    <h3 className="mt-6 text-[17px] font-semibold tracking-[-0.015em] text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed text-foreground-muted">
                      {service.tagline}
                    </p>
                  </article>
                </Link>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-10 flex justify-center sm:mt-12">
            <Link
              href="/automation-audit"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-5 py-2.5 text-[13.5px] text-foreground-muted backdrop-blur transition hover:border-white/25 hover:bg-white/6 hover:text-white"
            >
              <Gauge className="h-4 w-4" />
              Not sure which fits? Run the Automation Audit
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
