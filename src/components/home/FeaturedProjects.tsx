import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { getFeaturedProjects } from "@/data/projects";
import { cn } from "@/lib/utils";

export function FeaturedProjects() {
  const projects = getFeaturedProjects();

  return (
    <Section id="projects">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeader
            eyebrow="Selected projects"
            title="Real systems I've built"
            description="Selected recent projects, with the problem, the build, and the outcome."
          />
          <Link
            href="/projects"
            className="group hidden shrink-0 items-center gap-2 rounded-full border border-white/10 bg-white/3 px-5 py-2.5 text-sm text-white backdrop-blur transition hover:border-white/25 hover:bg-white/6 sm:inline-flex"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {projects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}>
              <Link
                href={`/projects/${project.slug}`}
                className="group block h-full"
              >
                  <Card asChild className="glass-card relative h-full overflow-hidden rounded-2xl border-white/8 bg-transparent transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/5">
                    <article>
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
                        className="object-cover transition duration-500 group-hover:scale-[1.02]"
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
                    <div className="absolute bottom-5 left-5 right-5">
                      <h3 className="text-[20px] font-semibold leading-tight tracking-[-0.015em] text-white sm:text-[22px]">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                    <div className="relative flex min-h-52 flex-col p-6 sm:p-7">
                      <p className="text-[14.5px] leading-relaxed text-foreground-muted">
                        {project.tagline}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
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
                  </Card>
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
