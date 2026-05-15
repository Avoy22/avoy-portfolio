import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { getFeaturedProjects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <Section id="projects">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Selected work"
            title={
              <>
                Production systems,
                <br className="hidden sm:block" /> not concept decks.
              </>
            }
            description="A selection of recent client projects where I owned the strategy, design, engineering, and deploy. Every one is shipped, used daily, and measurable."
          />
          <Link
            href="/projects"
            className="group hidden shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/3 px-5 py-2.5 text-sm text-white backdrop-blur transition hover:border-white/25 hover:bg-white/6 sm:inline-flex"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}>
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
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    >
                      <div className="absolute -inset-1 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_60%)]" />
                    </div>
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
                        <h3 className="text-[20px] font-semibold leading-tight tracking-[-0.015em] text-white sm:text-[22px]">
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
                    <div className="mt-6 grid grid-cols-3 gap-x-4 gap-y-3 border-t border-white/6 pt-6">
                      {project.metrics.slice(0, 3).map((m) => (
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
                      {project.stack.slice(0, 5).map((s) => (
                        <span
                          key={s}
                          className="rounded-full border border-white/10 bg-white/3 px-2.5 py-1 text-[11px] text-foreground-muted"
                        >
                          {s}
                        </span>
                      ))}
                      {project.stack.length > 5 && (
                        <span className="rounded-full border border-white/10 bg-white/3 px-2.5 py-1 text-[11px] text-foreground-subtle">
                          +{project.stack.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </Link>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:hidden">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-5 py-2.5 text-sm text-white transition hover:border-white/25 hover:bg-white/6"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
