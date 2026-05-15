import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CircleCheck,
  Magnet,
  LayoutDashboard,
  Globe,
  CalendarCheck,
  Workflow,
  Cpu,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { services } from "@/data/services";
import { processSteps } from "@/data/process";

const iconMap: Record<string, LucideIcon> = {
  Magnet,
  LayoutDashboard,
  Globe,
  CalendarCheck,
  Workflow,
  Cpu,
};

export const metadata: Metadata = {
  title: "Services",
  description:
    "Engagement options for shipping AI-powered websites, dashboards, lead engines, booking systems, and automations.",
  openGraph: {
    title: "Services · Avoy Das",
    description:
      "Engagement options for shipping AI-powered websites, dashboards, lead engines, and automations.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <Section spacing="lg" className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 grid-bg mask-[radial-gradient(ellipse_50%_40%_at_50%_30%,black,transparent_75%)] opacity-30"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-130 w-130 -translate-x-1/2 animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.2),transparent_60%)] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-20 right-[8%] -z-10 h-85 w-85 animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.14),transparent_60%)] blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
        <Container>
          <div className="max-w-3xl">
            <Badge tone="brand" size="md" dot>
              Services
            </Badge>
            <h1 className="mt-6 text-balance text-[40px] font-semibold leading-[1.02] tracking-[-0.034em] text-gradient sm:text-[56px] lg:text-[72px]">
              Engagements that
              <br />
              <span className="text-gradient-brand">ship working software.</span>
            </h1>
            <p className="mt-6 text-pretty text-[15px] leading-relaxed text-foreground-muted sm:text-[18px]">
              Six clear ways to work together — from a single high-converting
              site to a full lead engine with admin dashboard, or an embedded
              fractional engineer for your AI roadmap.
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
                  <article className="glass-card group relative h-full overflow-hidden rounded-3xl p-7 transition-all duration-500 hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_24px_60px_-24px_rgba(109,140,255,0.4)] sm:p-8">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-px rounded-3xl bg-[radial-gradient(120%_60%_at_50%_-10%,rgba(109,140,255,0.18),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div className="relative flex items-start justify-between gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-linear-to-br from-white/6 to-white/2 text-white shadow-[0_1px_0_rgba(255,255,255,0.06)_inset] transition-all duration-500 group-hover:border-accent/30 group-hover:from-accent/15 group-hover:text-accent">
                        <Icon className="h-5 w-5" />
                      </div>
                      {service.startingAt && (
                        <Badge tone="neutral">{service.startingAt}</Badge>
                      )}
                    </div>
                    <h2 className="relative mt-7 text-[22px] font-semibold tracking-[-0.02em] text-white sm:text-[24px]">
                      {service.title}
                    </h2>
                    <p className="relative mt-3 text-[14.5px] leading-relaxed text-foreground-muted">
                      {service.description}
                    </p>

                    <div className="relative mt-7">
                      <div className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-foreground-subtle">
                        Deliverables
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

                    <div className="relative mt-7 rounded-xl border border-white/6 bg-white/2 p-4 transition group-hover:border-white/15 group-hover:bg-white/4">
                      <div className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-foreground-subtle">
                        Ideal for
                      </div>
                      <p className="mt-1.5 text-[13.5px] text-foreground-muted">
                        {service.ideal}
                      </p>
                    </div>

                    <Link
                      href="/contact"
                      className="group/cta relative mt-7 inline-flex items-center gap-2 text-sm font-medium text-white"
                    >
                      Start a conversation
                      <ArrowRight className="h-4 w-4 transition group-hover/cta:translate-x-0.5" />
                    </Link>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      <Section spacing="md">
        <Container>
          <SectionHeader
            eyebrow="How we'll work"
            title="A four-stage engagement that respects your time."
            description="Most engagements ship to production in 2–6 weeks depending on scope. Every stage produces an artifact you can use immediately."
          />
          <div className="relative mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-6 top-10.5 -z-10 hidden h-px bg-linear-to-r from-transparent via-white/15 to-transparent lg:block"
            />
            {processSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.06}>
                <div className="glass-card h-full rounded-2xl p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/15 sm:p-7">
                  <div className="tabular font-mono text-[11px] text-accent">
                    {step.step}
                  </div>
                  <h3 className="mt-3 text-[15.5px] font-semibold tracking-[-0.015em] text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-foreground-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="md">
        <Container>
          <div className="glass-strong relative overflow-hidden rounded-3xl p-10 sm:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 right-0 h-90 w-90 animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(109,140,255,0.2),transparent_60%)] blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 left-[5%] h-75 w-75 animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.16),transparent_60%)] blur-3xl"
              style={{ animationDelay: "-6s" }}
            />
            <div className="relative grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
              <div>
                <Badge tone="brand" dot>
                  Free 30-min strategy call
                </Badge>
                <h2 className="mt-6 text-balance text-[30px] font-semibold leading-[1.05] tracking-tight text-gradient sm:text-[40px]">
                  Not sure which engagement fits?
                </h2>
                <p className="mt-5 text-[15px] leading-relaxed text-foreground-muted sm:text-[16px]">
                  Tell me about the problem in 30 minutes. You leave with a
                  written, opinionated direction — even if we don&apos;t end up
                  working together.
                </p>
              </div>
              <div className="flex justify-start md:justify-end">
                <Link
                  href="/contact"
                  className="group relative inline-flex h-12 items-center gap-2 overflow-hidden rounded-full bg-white px-7 text-sm font-medium text-black shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_12px_36px_-10px_rgba(255,255,255,0.45)] transition hover:bg-zinc-100 active:translate-y-px"
                >
                  <span className="relative z-10 inline-flex items-center gap-2">
                    Book the call
                    <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                  <span
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-0 w-[40%] -translate-x-full bg-linear-to-r from-transparent via-white/55 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:translate-x-[260%] group-hover:opacity-100"
                  />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
