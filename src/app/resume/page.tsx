import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  Code2,
  Download,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of Avoy Das, AI Automation & Full-Stack Web Developer building lead systems, dashboards, CRM tools, and workflow automation.",
  openGraph: {
    title: `Resume · ${site.name}`,
    description:
      "Resume of Avoy Das, AI Automation & Full-Stack Web Developer building lead systems, dashboards, CRM tools, and workflow automation.",
  },
};

const RESUME_PDF = "/resume/avoy-das-resume.pdf";
const GITHUB_URL = "https://github.com/dasavoy828";

const coreSkills = [
  "Lead management systems",
  "Admin dashboards",
  "Business dashboards",
  "CRM workflows",
  "Workflow automation",
  "Full-stack web application development",
  "Supabase / Firebase integration",
  "Google Sheets & Apps Script automation",
  "Responsive UI development",
  "Deployment & production workflows",
];

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: string[];
};

const technicalSkills: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Layers,
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend & Database",
    icon: Code2,
    items: ["Supabase", "Firebase", "PostgreSQL basics", "API Routes"],
  },
  {
    title: "Automation & Tools",
    icon: Wrench,
    items: [
      "Google Sheets",
      "Apps Script",
      "Resend",
      "Zod",
      "GitHub",
      "Vercel",
      "AI-assisted development",
    ],
  },
];

type ResumeProject = {
  title: string;
  role: string;
  description: string;
  bullets: string[];
  stack: string[];
};

const resumeProjects: ResumeProject[] = [
  {
    title: "ServicePro Lead Engine",
    role: "Full-Stack Developer",
    description:
      "Lead management system with contact form, Supabase database, protected admin dashboard, status tracking, notes, and CSV export.",
    bullets: [
      "Implemented contact form submission flow connected to Supabase.",
      "Built protected admin workflow for viewing and managing leads.",
      "Added status updates, notes, and CSV export for business follow-up.",
      "Deployed the application and documented the business use case.",
    ],
    stack: ["Next.js", "Supabase", "Resend", "TypeScript", "Vercel"],
  },
  {
    title: "Business Expense & Sales Dashboard",
    role: "Dashboard Developer",
    description:
      "Responsive dashboard for tracking sales, expenses, profit, and overall business performance.",
    bullets: [
      "Designed dashboard UI for clear business data visibility.",
      "Organized sales and expense information into summary views.",
      "Focused on practical reporting and decision support for small businesses.",
    ],
    stack: ["Next.js", "Supabase", "Tailwind CSS", "Vercel"],
  },
  {
    title: "AI Lead Tracker CRM",
    role: "Frontend / CRM Workflow Developer",
    description:
      "Lightweight CRM-style dashboard for organizing leads, outreach status, notes, and follow-up workflows.",
    bullets: [
      "Created lead tracking interface for managing potential clients.",
      "Added CRM-style workflow structure for status and follow-up organization.",
      "Designed responsive dashboard UI for everyday business use.",
    ],
    stack: ["React", "Tailwind CSS", "Google Sheets", "Apps Script", "Vercel"],
  },
  {
    title: "Automation Audit Tool",
    role: "Product / Automation Workflow Developer",
    description:
      "Interactive workflow audit tool that collects business workflow inputs and suggests practical automation opportunities.",
    bullets: [
      "Designed a form-driven audit workflow for business users.",
      "Connected audit submissions to the existing lead/admin workflow.",
      "Used honest rule-based recommendations without overclaiming AI capability.",
    ],
    stack: ["Next.js", "TypeScript", "Zod", "Supabase", "Tailwind CSS"],
  },
];

const availability = [
  "Freelance projects",
  "Remote junior developer roles",
  "Business automation projects",
  "Dashboard and lead system development",
];

export default function ResumePage() {
  const portfolioHost = site.url.replace(/^https?:\/\//, "");

  return (
    <>
      {/* Header */}
      <Section spacing="lg">
        <Container size="lg">
          <Reveal>
            <Badge tone="brand" size="md" dot>
              Resume
            </Badge>

            <div className="mt-6 max-w-3xl">
              <h1 className="text-balance text-[40px] font-semibold leading-[1.04] tracking-[-0.03em] text-gradient sm:text-[56px] lg:text-[64px]">
                {site.name}
              </h1>
              <p className="mt-4 text-pretty text-[16px] font-medium leading-relaxed text-white sm:text-[18px]">
                AI Automation &amp; Full-Stack Web Developer
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13.5px] text-foreground-muted">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-1.5 transition hover:text-white"
                >
                  <Mail className="h-3.5 w-3.5" />
                  {site.email}
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-white"
                >
                  <GithubIcon size={13} />
                  github.com/dasavoy828
                </a>
                <a
                  href={site.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-white"
                >
                  <LinkedinIcon size={13} />
                  LinkedIn
                </a>
                <a
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-white"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                  {portfolioHost}
                </a>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {site.location}
                </span>
              </div>
            </div>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href={RESUME_PDF}
                download
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-black shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_8px_24px_-10px_rgba(255,255,255,0.4)] transition hover:bg-zinc-100"
              >
                <Download className="h-4 w-4" />
                Download PDF
              </a>
              <Link
                href="/contact"
                className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/4 px-5 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/8"
              >
                <Mail className="h-4 w-4" />
                Contact Me
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/4 px-5 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/8"
              >
                <GithubIcon size={15} />
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={site.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/4 px-5 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/8"
              >
                <LinkedinIcon size={15} />
                LinkedIn
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Summary + Education */}
      <Section spacing="sm">
        <Container size="lg">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-8">
            <Reveal className="lg:col-span-2">
              <article className="glass-card h-full rounded-3xl p-7 sm:p-8">
                <SectionTitle icon={Sparkles}>Professional Summary</SectionTitle>
                <p className="mt-5 text-[14.5px] leading-relaxed text-foreground-muted sm:text-[15px]">
                  AI Automation &amp; Full-Stack Web Developer focused on
                  building practical business systems, dashboards, lead
                  management tools, CRM workflows, and automation solutions.
                  I build deployed web applications that help businesses
                  collect leads, manage data, reduce manual work, and improve
                  workflow visibility.
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="glass-card h-full rounded-3xl p-7 sm:p-8">
                <SectionTitle icon={GraduationCap}>Education</SectionTitle>
                <div className="mt-5">
                  <div className="text-[15px] font-semibold tracking-[-0.01em] text-white">
                    Student
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-foreground-muted">
                    Focused on software development, AI-assisted engineering,
                    data dashboards, and business automation systems.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Core Skills + Technical Skills */}
      <Section spacing="sm">
        <Container size="lg">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <Reveal>
              <article className="glass-card h-full rounded-3xl p-7 sm:p-8">
                <SectionTitle icon={Briefcase}>Core Skills</SectionTitle>
                <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                  {coreSkills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-foreground-muted"
                    >
                      <span
                        aria-hidden
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                      />
                      {skill}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="glass-card h-full rounded-3xl p-7 sm:p-8">
                <SectionTitle icon={Code2}>Technical Skills</SectionTitle>
                <div className="mt-6 flex flex-col gap-6">
                  {technicalSkills.map((group) => {
                    const Icon = group.icon;
                    return (
                      <div key={group.title}>
                        <div className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-foreground-subtle">
                          <Icon className="h-3.5 w-3.5" />
                          {group.title}
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {group.items.map((item) => (
                            <span
                              key={item}
                              className="inline-flex items-center rounded-full border border-white/10 bg-white/4 px-3 py-1 text-[12.5px] text-foreground-muted backdrop-blur"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </article>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Project Experience */}
      <Section spacing="sm">
        <Container size="lg">
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-[24px] font-semibold tracking-[-0.02em] text-white sm:text-[28px]">
                Project Experience
              </h2>
              <Link
                href="/projects"
                className="group hidden items-center gap-1.5 text-[13px] text-foreground-muted transition hover:text-white sm:inline-flex"
              >
                View case studies
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </Reveal>

          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:gap-6">
            {resumeProjects.map((project, i) => (
              <Reveal key={project.title} delay={(i % 2) * 0.05}>
                <article className="glass-card h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 sm:p-8">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="text-[18px] font-semibold tracking-[-0.01em] text-white sm:text-[20px]">
                      {project.title}
                    </h3>
                    <div className="text-[11.5px] font-medium uppercase tracking-[0.16em] text-foreground-subtle">
                      {project.role}
                    </div>
                  </div>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-foreground-muted sm:text-[14px]">
                    {project.description}
                  </p>
                  <ul className="mt-4 space-y-1.5">
                    {project.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-[13px] leading-relaxed text-foreground-muted"
                      >
                        <span
                          aria-hidden
                          className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent-2"
                        />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center rounded-full border border-white/8 bg-white/3 px-2.5 py-0.5 text-[11.5px] text-foreground-subtle"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Availability */}
      <Section spacing="sm">
        <Container size="lg">
          <Reveal>
            <article className="glass-card rounded-3xl p-7 sm:p-8">
              <SectionTitle icon={MapPin}>Availability</SectionTitle>
              <p className="mt-5 text-[14px] leading-relaxed text-foreground-muted">
                Open to:
              </p>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {availability.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-foreground-muted"
                  >
                    <span
                      aria-hidden
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-3"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-white/6 pt-5 text-[12px] text-foreground-subtle">
                <span>Last updated: 2026</span>
                <span aria-hidden className="text-foreground-subtle">·</span>
                <span>Available for remote work worldwide</span>
              </div>
            </article>
          </Reveal>
        </Container>
      </Section>

      {/* Bottom CTA */}
      <Section spacing="md">
        <Container size="lg">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/8 via-white/3 to-transparent p-8 sm:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 grid-bg mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent_75%)] opacity-25"
              />
              <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-xl">
                  <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white sm:text-[28px]">
                    Want a copy for your records?
                  </h2>
                  <p className="mt-3 text-[14px] leading-relaxed text-foreground-muted sm:text-[15px]">
                    Download the PDF version of this resume, or reach out
                    directly if you&apos;d like to discuss a project.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={RESUME_PDF}
                    download
                    className="group inline-flex h-11 items-center gap-2 rounded-full bg-white px-5 text-sm font-medium text-black shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_8px_24px_-10px_rgba(255,255,255,0.4)] transition hover:bg-zinc-100"
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                  <Link
                    href="/contact"
                    className="group inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/4 px-5 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/8"
                  >
                    Contact Me
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

function SectionTitle({
  icon: Icon,
  children,
}: {
  icon: LucideIcon;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-white">
        <Icon className="h-4 w-4" />
      </span>
      <h2 className="text-[18px] font-semibold tracking-[-0.01em] text-white sm:text-[20px]">
        {children}
      </h2>
    </div>
  );
}
