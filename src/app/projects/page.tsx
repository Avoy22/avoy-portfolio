import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { Card } from "@/components/ui/Card";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects: websites, dashboards, lead systems, and automation tools.",
  openGraph: {
    title: "Projects · Avoy Das",
    description:
      "Selected projects: websites, dashboards, lead systems, and automation tools.",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Section spacing="lg">
        <Container>
          <div className="max-w-3xl">
            <Badge tone="brand" size="md" dot>
              Projects
            </Badge>
            <h1 className="mt-6 text-balance text-[36px] font-semibold leading-[1.04] tracking-[-0.03em] text-gradient sm:text-[52px] lg:text-[64px]">
              Selected projects
            </h1>
            <p className="mt-6 text-pretty text-[15px] leading-relaxed text-foreground-muted sm:text-[17px]">
              Browse selected recent work. Click any project for the full
              write-up — the problem, the build, and the outcome.
            </p>
          </div>
        </Container>
      </Section>

      <Section spacing="sm">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {projects.map((project, index) => (
              <Reveal key={project.slug} delay={(index % 2) * 0.06}>
                <Link
                  href={`/projects/${project.slug}`}
                  className="group block h-full"
                >
                  <Card asChild className="glass-card interactive-card relative h-full overflow-hidden rounded-2xl border-white/8 bg-transparent">
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
                        <div className="text-[10.5px] uppercase tracking-[0.16em] text-white/60">
                          {project.client}
                        </div>
                        <h3 className="mt-1.5 text-[20px] font-semibold leading-tight tracking-[-0.015em] text-white sm:text-[22px]">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <div className="relative flex min-h-64 flex-col p-6 sm:p-7">
                      <p className="text-[14.5px] leading-relaxed text-foreground-muted">
                        {project.tagline}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
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
                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white">
                        Read case study
                        <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                    </article>
                  </Card>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
