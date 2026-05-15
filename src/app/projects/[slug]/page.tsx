import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CircleCheck,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { getProject, projects } from "@/data/projects";
import { cn } from "@/lib/utils";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.tagline,
    openGraph: {
      title: `${project.title} · Avoy Das`,
      description: project.tagline,
      type: "article",
    },
  };
}

export default async function ProjectCaseStudyPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      {/* HERO */}
      <Section spacing="md" className="overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_50%_40%_at_50%_30%,black,transparent_75%)] opacity-25"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-0 -z-10 h-[480px] w-[480px] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(109,140,255,0.18),transparent_60%)] blur-3xl"
        />
        <Container>
          <Link
            href="/projects"
            className="group inline-flex items-center gap-2 text-sm text-foreground-muted transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
            All projects
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2">
                <Badge tone="neutral">{project.industry}</Badge>
                <Badge tone="info">{project.year}</Badge>
                {project.status === "live" && (
                  <Badge tone="success" dot>
                    Live in production
                  </Badge>
                )}
              </div>
              <h1 className="mt-7 text-balance text-[38px] font-semibold leading-[1.02] tracking-[-0.034em] text-gradient sm:text-[54px] lg:text-[68px]">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-[15.5px] leading-relaxed text-foreground-muted sm:text-[18px]">
                {project.tagline}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex h-11 items-center gap-2 overflow-hidden rounded-full bg-white px-5 text-[13px] font-medium text-black shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_10px_28px_-10px_rgba(255,255,255,0.45)] transition hover:bg-zinc-100"
                  >
                    <span className="relative z-10 inline-flex items-center gap-2">
                      Visit live site
                      <ExternalLink className="h-3.5 w-3.5" />
                    </span>
                    <span
                      aria-hidden
                      className="pointer-events-none absolute inset-y-0 left-0 w-[40%] -translate-x-full bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:translate-x-[260%] group-hover:opacity-100"
                    />
                  </a>
                )}
                {project.links?.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 text-[13px] font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/[0.06]"
                  >
                    <GithubIcon size={15} />
                    Repository
                  </a>
                )}
              </div>
            </div>

            <aside className="lg:col-span-4">
              <div className="glass-card rounded-2xl p-7">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-muted">
                  Project details
                </h3>
                <dl className="mt-6 space-y-4 text-sm">
                  <DetailRow label="Client" value={project.client} />
                  <DetailRow label="Role" value={project.role} />
                  <DetailRow label="Duration" value={project.duration} />
                  <DetailRow label="Industry" value={project.industry} />
                  <DetailRow label="Year" value={String(project.year)} />
                </dl>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* COVER */}
      <Section spacing="sm">
        <Container>
          <div
            className={cn(
              "relative aspect-[21/9] overflow-hidden rounded-3xl border border-white/[0.08] bg-gradient-to-br ring-glow",
              project.cover
            )}
          >
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-3 py-1.5 text-xs text-white backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Cover preview · {project.title}
            </div>
          </div>
        </Container>
      </Section>

      {/* METRICS */}
      <Section spacing="sm">
        <Container>
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-muted">
            By the numbers
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {project.metrics.map((m, i) => (
              <Reveal key={m.label} delay={i * 0.05}>
                <div className="glass-card group relative overflow-hidden rounded-2xl p-7 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/15">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -top-12 -right-12 h-28 w-28 rounded-full bg-[radial-gradient(circle_at_center,rgba(109,140,255,0.22),transparent_70%)] blur-2xl transition-opacity duration-500 group-hover:opacity-150"
                  />
                  <div className="tabular relative text-[34px] font-semibold tracking-[-0.034em] text-white sm:text-[40px]">
                    {m.value}
                  </div>
                  <div className="relative mt-2 text-[11px] uppercase tracking-[0.16em] text-foreground-muted">
                    {m.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* NARRATIVE + SIDEBAR */}
      <Section spacing="md">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="space-y-14">
                <CaseSection eyebrow="Overview" title="Project summary">
                  {project.summary}
                </CaseSection>
                <CaseSection eyebrow="The problem" title="What was broken">
                  {project.problem}
                </CaseSection>
                <CaseSection eyebrow="The solution" title="What I built">
                  {project.solution}
                </CaseSection>

                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    Outcomes
                  </div>
                  <h2 className="mt-3 text-[26px] font-semibold tracking-[-0.02em] text-white sm:text-[32px]">
                    What changed for the business
                  </h2>
                  <ul className="mt-7 space-y-3">
                    {project.outcomes.map((o) => (
                      <li
                        key={o}
                        className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition hover:border-white/15 hover:bg-white/[0.04]"
                      >
                        <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span className="text-[14.5px] leading-relaxed text-foreground-muted">
                          {o}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="space-y-5 lg:sticky lg:top-28">
                <div className="glass-card rounded-2xl p-7">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-muted">
                    Features shipped
                  </h3>
                  <ul className="mt-6 space-y-3.5">
                    {project.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 text-[14px] text-foreground-muted"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="glass-card rounded-2xl p-7">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-muted">
                    Stack
                  </h3>
                  <ul className="mt-6 flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[12px] text-foreground-muted"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      {/* GALLERY */}
      {project.gallery && project.gallery.length > 0 && (
        <Section spacing="sm">
          <Container>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Visual tour
            </div>
            <h2 className="mt-3 text-[26px] font-semibold tracking-[-0.02em] text-white sm:text-[32px]">
              Inside the build
            </h2>
            <div className="mt-9 grid gap-4 md:grid-cols-3 lg:gap-5">
              {project.gallery.map((g, i) => (
                <Reveal key={g.caption} delay={i * 0.05}>
                  <div className="glass-card group overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:border-white/15">
                    <div
                      className={cn(
                        "relative aspect-[4/3] overflow-hidden bg-gradient-to-br",
                        g.placeholder
                      )}
                    >
                      <div className="absolute inset-0 grid-bg opacity-30" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div
                        aria-hidden
                        className="pointer-events-none absolute -inset-1 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      >
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_60%)]" />
                      </div>
                    </div>
                    <div className="border-t border-white/[0.06] bg-white/[0.02] px-4 py-3 text-[12.5px] text-foreground-muted">
                      {g.caption}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* CTA */}
      <Section spacing="md">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.1] bg-gradient-to-br from-white/[0.07] via-white/[0.02] to-transparent p-8 sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-32 left-1/2 h-[300px] w-[600px] -translate-x-1/2 animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(109,140,255,0.2),transparent_60%)] blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 right-[10%] h-[280px] w-[280px] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.14),transparent_60%)] blur-3xl"
              style={{ animationDelay: "-6s" }}
            />
            <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-foreground-subtle">
                  Got a similar problem?
                </div>
                <h3 className="mt-3 max-w-xl text-balance text-[24px] font-semibold leading-tight tracking-[-0.02em] text-gradient sm:text-[30px]">
                  Let&apos;s scope your version of this in 30 minutes.
                </h3>
              </div>
              <Link
                href="/contact"
                className="group relative inline-flex h-12 shrink-0 items-center gap-2 overflow-hidden rounded-full bg-white px-6 text-[13px] font-medium text-black shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_10px_28px_-10px_rgba(255,255,255,0.45)] transition hover:bg-zinc-100"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  Book a strategy call
                  <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-[40%] -translate-x-full bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:translate-x-[260%] group-hover:opacity-100"
                />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {/* NEXT */}
      <Section spacing="md">
        <Container>
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-muted">
            Keep reading
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:gap-5">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group glass-card relative overflow-hidden rounded-2xl p-7 transition hover:-translate-y-1 hover:border-white/15"
              >
                <div
                  aria-hidden
                  className={cn(
                    "absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t opacity-30",
                    p.cover
                  )}
                />
                <div className="relative">
                  <div className="text-[10.5px] uppercase tracking-[0.18em] text-foreground-subtle">
                    Next case study
                  </div>
                  <div className="mt-3 flex items-center justify-between gap-3">
                    <h3 className="text-[18px] font-semibold tracking-tight text-white">
                      {p.title}
                    </h3>
                    <ArrowUpRight className="h-4 w-4 text-foreground-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                  </div>
                  <p className="mt-2 text-[14px] leading-relaxed text-foreground-muted">
                    {p.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <dt className="shrink-0 text-[11px] uppercase tracking-[0.16em] text-foreground-subtle">
        {label}
      </dt>
      <dd className="text-right text-[13.5px] text-white">{value}</dd>
    </div>
  );
}

function CaseSection({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-[26px] font-semibold tracking-[-0.02em] text-white sm:text-[32px]">
        {title}
      </h2>
      <p className="mt-5 text-[15.5px] leading-relaxed text-foreground-muted sm:text-[17px]">
        {children}
      </p>
    </div>
  );
}
