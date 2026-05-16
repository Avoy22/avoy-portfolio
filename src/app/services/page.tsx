import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CircleCheck,
  Magnet,
  LayoutDashboard,
  Globe,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";

const iconMap: Record<string, LucideIcon> = {
  Magnet,
  LayoutDashboard,
  Globe,
  Workflow,
};

export const metadata: Metadata = {
  title: "Services",
  description:
    "Websites, lead management systems, dashboards, and workflow automation for small businesses and service providers.",
  openGraph: {
    title: "Services · Avoy Das",
    description:
      "Websites, lead management systems, dashboards, and workflow automation.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Section spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <Badge tone="brand" size="md" dot>
              Services
            </Badge>
            <h1 className="mt-6 text-balance text-[36px] font-semibold leading-[1.04] tracking-[-0.03em] text-gradient sm:text-[52px] lg:text-[64px]">
              What I build
            </h1>
            <p className="mt-6 text-pretty text-[15px] leading-relaxed text-foreground-muted sm:text-[17px]">
              Four focused engagement types for small businesses and service
              providers. Each one comes with strategy, working software, and a
              clean handoff.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="sm">
        <Container>
          <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
            {services.map((service, i) => {
              const Icon = iconMap[service.icon] ?? Globe;
              return (
                <Reveal key={service.slug} delay={(i % 2) * 0.06}>
                  <article className="glass-card relative h-full overflow-hidden rounded-3xl p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 sm:p-8">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-6 text-[22px] font-semibold tracking-[-0.02em] text-white sm:text-[24px]">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-[14.5px] leading-relaxed text-foreground-muted">
                      {service.description}
                    </p>

                    <div className="mt-7">
                      <div className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-foreground-subtle">
                        What&apos;s included
                      </div>
                      <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                        {service.deliverables.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2.5 text-[13.5px] text-foreground-muted"
                          >
                            <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-7 rounded-xl border border-white/6 bg-white/2 p-4">
                      <div className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-foreground-subtle">
                        Ideal for
                      </div>
                      <p className="mt-1.5 text-[13.5px] text-foreground-muted">
                        {service.ideal}
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-white"
                    >
                      Start a conversation
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
