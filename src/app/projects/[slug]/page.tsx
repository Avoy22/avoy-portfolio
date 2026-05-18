import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  CircleCheck,
  ExternalLink,
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
  const galleryWithImages = project.gallery?.filter((g) => g.src) ?? [];

  return (
    <>
      <Section spacing="md">
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
                    Live
                  </Badge>
                )}
              </div>
              <h1 className="mt-7 text-balance text-[36px] font-semibold leading-[1.04] tracking-[-0.03em] text-gradient sm:text-[48px] lg:text-[60px]">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-[15.5px] leading-relaxed text-foreground-muted sm:text-[18px]">
                {project.tagline}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                {project.links?.live && project.links.live !== "#" && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-[13px] font-medium text-black shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_8px_24px_-10px_rgba(255,255,255,0.4)] transition hover:bg-zinc-100"
                  >
                    Visit live site
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
                {project.links?.repo && (
                  <a
                    href={project.links.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/3 px-5 text-[13px] font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/6"
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

      <Section spacing="sm" className="pt-0">
        <Container>
          <nav
            aria-label="Case study sections"
            className="glass-card flex flex-wrap gap-2 rounded-2xl p-3"
          >
            {[
              ["#overview", "Overview"],
              ["#problem", "Problem"],
              ["#solution", "Solution"],
              ["#features", "Core features"],
              ["#architecture", "Architecture"],
              ["#tech-stack", "Tech stack"],
              ["#screenshots", "Screenshots"],
              ["#business-value", "Business value"],
              ["#learnings", "What I learned"],
            ].map(([href, label]) => (
              <a
                key={href}
                href={href}
                className="rounded-full border border-white/8 bg-white/3 px-3 py-1.5 text-[12.5px] text-foreground-muted transition hover:border-white/20 hover:bg-white/6 hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
        </Container>
      </Section>

      {project.thumbnail && (
        <Section spacing="sm" className="pt-0">
          <Container>
            <div
              className={cn(
                "relative aspect-video overflow-hidden rounded-2xl border border-white/8 bg-linear-to-br shadow-[0_24px_70px_-32px_rgba(0,0,0,0.75)]",
                project.cover
              )}
            >
              <Image
                src={project.thumbnail.src}
                alt={project.thumbnail.alt}
                fill
                sizes="(min-width: 1024px) 1024px, 100vw"
                className="object-cover"
                priority
              />
            </div>
          </Container>
        </Section>
      )}

      <Section spacing="md">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="space-y-14">
                <CaseSection id="overview" eyebrow="Overview" title="Project summary">
                  {project.summary}
                </CaseSection>
                <CaseSection id="problem" eyebrow="Problem" title="What was broken">
                  {project.problem}
                </CaseSection>
                <CaseSection id="solution" eyebrow="Solution" title="What I built">
                  {project.solution}
                </CaseSection>

                <div id="features" className="scroll-mt-28">
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    Core features
                  </div>
                  <h2 className="mt-3 text-[24px] font-semibold tracking-[-0.02em] text-white sm:text-[30px]">
                    What shipped
                  </h2>
                  <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                    {project.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-3 rounded-xl border border-white/6 bg-white/2 p-4"
                      >
                        <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span className="text-[14px] leading-relaxed text-foreground-muted">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                    Outcomes
                  </div>
                  <h2 className="mt-3 text-[24px] font-semibold tracking-[-0.02em] text-white sm:text-[30px]">
                    What changed for the business
                  </h2>
                  <ul className="mt-7 space-y-3">
                    {project.outcomes.map((o) => (
                      <li
                        key={o}
                        className="flex items-start gap-3 rounded-xl border border-white/6 bg-white/2 p-4"
                      >
                        <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <span className="text-[14.5px] leading-relaxed text-foreground-muted">
                          {o}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.architecture && project.architecture.length > 0 && (
                  <div id="architecture" className="scroll-mt-28">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                      Architecture
                    </div>
                    <h2 className="mt-3 text-[24px] font-semibold tracking-[-0.02em] text-white sm:text-[30px]">
                      How it&apos;s built
                    </h2>
                    <ul className="mt-7 space-y-3">
                      {project.architecture.map((a) => (
                        <li
                          key={a}
                          className="flex items-start gap-3 rounded-xl border border-white/6 bg-white/2 p-4"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span className="text-[14.5px] leading-relaxed text-foreground-muted">
                            {a}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.businessValue && project.businessValue.length > 0 && (
                  <div id="business-value" className="scroll-mt-28">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                      Business value
                    </div>
                    <h2 className="mt-3 text-[24px] font-semibold tracking-[-0.02em] text-white sm:text-[30px]">
                      Why it matters
                    </h2>
                    <ul className="mt-7 space-y-3">
                      {project.businessValue.map((v) => (
                        <li
                          key={v}
                          className="flex items-start gap-3 rounded-xl border border-white/6 bg-white/2 p-4"
                        >
                          <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                          <span className="text-[14.5px] leading-relaxed text-foreground-muted">
                            {v}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.learnings && project.learnings.length > 0 && (
                  <div id="learnings" className="scroll-mt-28">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                      What I learned
                    </div>
                    <h2 className="mt-3 text-[24px] font-semibold tracking-[-0.02em] text-white sm:text-[30px]">
                      Takeaways from the build
                    </h2>
                    <ul className="mt-7 space-y-3">
                      {project.learnings.map((l) => (
                        <li
                          key={l}
                          className="flex items-start gap-3 rounded-xl border border-white/6 bg-white/2 p-4"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span className="text-[14.5px] leading-relaxed text-foreground-muted">
                            {l}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
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

                <div id="tech-stack" className="glass-card scroll-mt-28 rounded-2xl p-7">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-muted">
                    Stack
                  </h3>
                  <ul className="mt-6 flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-[12px] text-foreground-muted"
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

      {project.fullPageScreenshot && (
        <Section id="screenshots" spacing="sm">
          <Container>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Screenshots
            </div>
            <h2 className="mt-3 text-[24px] font-semibold tracking-[-0.02em] text-white sm:text-[30px]">
              Product in production
            </h2>

            <figure className="mt-9 overflow-hidden rounded-2xl border border-white/10 bg-white/3 shadow-[0_24px_70px_-32px_rgba(0,0,0,0.75)]">
              <div className="max-h-[760px] overflow-y-auto bg-background-soft">
                <Image
                  src={project.fullPageScreenshot.src}
                  alt={project.fullPageScreenshot.alt}
                  width={project.fullPageScreenshot.width}
                  height={project.fullPageScreenshot.height}
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="border-t border-white/6 px-5 py-3 text-[12.5px] text-foreground-muted">
                {project.fullPageScreenshot.caption}
              </figcaption>
            </figure>
          </Container>
        </Section>
      )}

      {galleryWithImages.length > 0 && (
        <Section spacing="sm">
          <Container>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
              Gallery
            </div>
            <h2 className="mt-3 text-[24px] font-semibold tracking-[-0.02em] text-white sm:text-[30px]">
              Inside the build
            </h2>
            <div className="mt-9 grid gap-4 md:grid-cols-3 lg:gap-5">
              {galleryWithImages.map((g, i) => (
                <Reveal key={g.caption} delay={i * 0.05}>
                  <div className="glass-card overflow-hidden rounded-2xl">
                    {g.src && g.alt && g.width && g.height && (
                      <div className="relative aspect-4/3 overflow-hidden bg-background-soft">
                        <Image
                          src={g.src}
                          alt={g.alt}
                          width={g.width}
                          height={g.height}
                          sizes="(min-width: 768px) 33vw, 100vw"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                    <div className="border-t border-white/6 bg-white/2 px-4 py-3 text-[12.5px] text-foreground-muted">
                      {g.caption}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      <Section spacing="md">
        <Container>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/7 via-white/2 to-transparent p-8 sm:p-12">
            <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <div className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-foreground-subtle">
                  Have a similar project?
                </div>
                <h3 className="mt-3 max-w-xl text-balance text-[22px] font-semibold leading-tight tracking-[-0.02em] text-gradient sm:text-[28px]">
                  Let&apos;s talk about your version of this.
                </h3>
              </div>
              <Link
                href="/contact"
                className="group inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-white px-6 text-[13px] font-medium text-black shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_8px_24px_-10px_rgba(255,255,255,0.4)] transition hover:bg-zinc-100"
              >
                Contact Me
                <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      {otherProjects.length > 0 && (
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
                  className="group glass-card relative overflow-hidden rounded-2xl p-7 transition hover:-translate-y-0.5 hover:border-white/15"
                >
                  <div className="relative">
                    <div className="text-[10.5px] uppercase tracking-[0.18em] text-foreground-subtle">
                      Next project
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
      )}
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
  id,
  eyebrow,
  title,
  children,
}: {
  id?: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div id={id} className="scroll-mt-28">
      <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
        {eyebrow}
      </div>
      <h2 className="mt-3 text-[24px] font-semibold tracking-[-0.02em] text-white sm:text-[30px]">
        {title}
      </h2>
      <p className="mt-5 text-[15.5px] leading-relaxed text-foreground-muted sm:text-[17px]">
        {children}
      </p>
    </div>
  );
}
