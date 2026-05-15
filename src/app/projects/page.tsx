import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A selection of production websites, dashboards, lead engines, and AI automations engineered and shipped by Avoy Das.",
  openGraph: {
    title: "Projects · Avoy Das",
    description:
      "Production websites, dashboards, lead engines, and AI automations.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Section spacing="lg" className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 grid-bg mask-[radial-gradient(ellipse_50%_40%_at_50%_30%,black,transparent_75%)] opacity-30"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-130 w-130 -translate-x-1/2 animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(109,140,255,0.22),transparent_60%)] blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute top-10 right-[12%] -z-10 h-80 w-80 animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.16),transparent_60%)] blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
        <Container>
          <div className="max-w-3xl">
            <Badge tone="brand" size="md" dot>
              Case studies
            </Badge>
            <h1 className="mt-6 text-balance text-[40px] font-semibold leading-[1.02] tracking-[-0.034em] text-gradient sm:text-[56px] lg:text-[72px]">
              Production work,
              <br />
              <span className="text-gradient-brand">opinionated outcomes.</span>
            </h1>
            <p className="mt-6 text-pretty text-[15px] leading-relaxed text-foreground-muted sm:text-[18px]">
              Each of these is a real, deployed system built end-to-end —
              strategy, design, engineering, deploy, and hand-off. Click any
              one for the full story.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-foreground-muted">
              <span className="tabular font-mono text-[11px] uppercase tracking-[0.18em] text-foreground-subtle">
                {projects.length.toString().padStart(2, "0")} projects
              </span>
              <span className="h-1 w-1 rounded-full bg-foreground-subtle/60" />
              <span className="text-foreground-subtle">2024 — 2026</span>
              <span className="h-1 w-1 rounded-full bg-foreground-subtle/60" />
              <span className="text-foreground-subtle">8 industries</span>
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="sm">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:gap-6">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 2) * 0.06}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block h-full"
                >
                  <article className="glass-card relative h-full overflow-hidden rounded-3xl transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/15 hover:shadow-[0_30px_80px_-30px_rgba(109,140,255,0.4),0_10px_30px_-10px_rgba(0,0,0,0.5)]">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -inset-px rounded-3xl bg-[radial-gradient(120%_60%_at_50%_-10%,rgba(109,140,255,0.22),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                    <div
                      className={cn(
                        "relative aspect-16/10 overflow-hidden bg-linear-to-br",
                        project.cover
                      )}
                    >
                      {project.thumbnail ? (
                        <Image
                          src={project.thumbnail.src}
                          alt={project.thumbnail.alt}
                          fill
                          sizes="(min-width: 768px) 50vw, 100vw"
                          className="object-cover transition duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 grid-bg opacity-30" />
                      )}
                      <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/15 to-transparent" />
                      <div className="absolute left-5 top-5 flex flex-wrap items-center gap-2">
                        <Badge tone="neutral" size="sm">
                          {project.industry}
                        </Badge>
                        {project.status === "live" && (
                          <Badge tone="success" size="sm" dot>
                            Live
                          </Badge>
                        )}
                      </div>
                      <div className="absolute right-5 top-5">
                        <span className="tabular font-mono text-[10.5px] uppercase tracking-[0.18em] text-white/60">
                          {project.year}
                        </span>
                      </div>
                      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-3">
                        <div>
                          <div className="text-[10.5px] uppercase tracking-[0.16em] text-white/60">
                            {project.client}
                          </div>
                          <h3 className="mt-1.5 text-[20px] font-semibold leading-tight tracking-[-0.015em] text-white sm:text-[22px]">
                            {project.title}
                          </h3>
                        </div>
                        <span className="flex h-10 w-10 shrink-0 -rotate-12 items-center justify-center rounded-full bg-white text-black opacity-0 shadow-[0_10px_24px_-10px_rgba(255,255,255,0.5)] transition-all duration-500 group-hover:rotate-0 group-hover:opacity-100">
                          <ArrowUpRight className="h-4 w-4" />
                        </span>
                      </div>
                    </div>
                    <div className="relative p-6 sm:p-7">
                      <p className="text-[15px] leading-relaxed text-foreground-muted">
                        {project.tagline}
                      </p>
                      <div className="mt-7 grid grid-cols-2 gap-4 border-t border-white/6 pt-6 sm:grid-cols-4">
                        {project.metrics.map((m) => (
                          <div key={m.label}>
                            <div className="tabular text-[18px] font-semibold tracking-[-0.02em] text-white">
                              {m.value}
                            </div>
                            <div className="mt-0.5 text-[10px] uppercase tracking-[0.14em] text-foreground-subtle">
                              {m.label}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 flex flex-wrap gap-1.5">
                        {project.stack.slice(0, 6).map((s) => (
                          <span
                            key={s}
                            className="rounded-full border border-white/10 bg-white/3 px-2.5 py-1 text-[11px] text-foreground-muted"
                          >
                            {s}
                          </span>
                        ))}
                        {project.stack.length > 6 && (
                          <span className="rounded-full border border-white/10 bg-white/3 px-2.5 py-1 text-[11px] text-foreground-subtle">
                            +{project.stack.length - 6}
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
