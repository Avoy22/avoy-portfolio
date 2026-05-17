import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Briefcase,
  ChartBar,
  CheckCircle2,
  Code2,
  Cog,
  Download,
  FileSpreadsheet,
  GraduationCap,
  LayoutDashboard,
  Layers,
  Mail,
  MapPin,
  Monitor,
  Server,
  Sparkles,
  Terminal,
  Users,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiFirebase,
  SiGithub,
  SiGoogleappsscript,
  SiGooglesheets,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiResend,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiZod,
} from "react-icons/si";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { site } from "@/data/site";

type SkillIcon = LucideIcon | IconType;

const RESUME_NAME = "Aboy Chandra Das";
const RESUME_TITLE = "AI Automation & Full-Stack Web Developer";
const RESUME_LOCATION = "Dhaka, Bangladesh";
const RESUME_PDF = "/resume/avoy-das-resume.pdf";
const GITHUB_URL = "https://github.com/Avoy22";
const GITHUB_HANDLE = "github.com/Avoy22";
const LINKEDIN_URL = "https://linkedin.com/in/aboy-chandra-das-s22";
const LINKEDIN_HANDLE = "linkedin.com/in/aboy-chandra-das-s22";
const PORTFOLIO_URL = "https://avoy-portfolio.vercel.app";
const PORTFOLIO_HANDLE = "avoy-portfolio.vercel.app";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume of ${RESUME_NAME}, ${RESUME_TITLE} building lead systems, dashboards, CRM tools, and workflow automation.`,
  openGraph: {
    title: `Resume · ${RESUME_NAME}`,
    description: `Resume of ${RESUME_NAME}, ${RESUME_TITLE} building lead systems, dashboards, CRM tools, and workflow automation.`,
  },
};

type SkillItem = {
  name: string;
  icon: SkillIcon;
};

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  items: SkillItem[];
};

const technicalSkills: SkillGroup[] = [
  {
    title: "Languages",
    icon: Terminal,
    items: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
    ],
  },
  {
    title: "Frontend",
    icon: Layers,
    items: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React", icon: SiReact },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Responsive Design", icon: Monitor },
    ],
  },
  {
    title: "Backend & Database",
    icon: Server,
    items: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Supabase", icon: SiSupabase },
      { name: "Firebase", icon: SiFirebase },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "REST API Routes", icon: Server },
      { name: "Zod", icon: SiZod },
    ],
  },
  {
    title: "Automation & Tools",
    icon: Wrench,
    items: [
      { name: "Google Sheets", icon: SiGooglesheets },
      { name: "Google Apps Script", icon: SiGoogleappsscript },
      { name: "Resend", icon: SiResend },
      { name: "GitHub", icon: SiGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "AI-assisted development", icon: Bot },
    ],
  },
];

const businessSystems: SkillItem[] = [
  { name: "Lead Management", icon: Users },
  { name: "Admin Dashboards", icon: LayoutDashboard },
  { name: "CRM Workflows", icon: Workflow },
  { name: "Business Dashboards", icon: ChartBar },
  { name: "CSV Export", icon: FileSpreadsheet },
  { name: "Workflow Automation", icon: Cog },
];

type ResumeProject = {
  title: string;
  role: string;
  bullets: string[];
  stack: string[];
};

const resumeProjects: ResumeProject[] = [
  {
    title: "ServicePro Lead Engine",
    role: "Full-Stack Developer",
    bullets: [
      "Built a lead capture and management system enabling small service businesses to collect, track, and follow up on customer inquiries from one dashboard.",
      "Implemented Supabase backend with server-side form submission, Zod validation, and a protected admin dashboard featuring lead status workflow, notes, and CSV export.",
      "Added token-based access control on admin routes to restrict data to authorized users.",
      "Deployed end-to-end to Vercel with live contact form, admin login, and data pipeline.",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Vercel"],
  },
  {
    title: "Business Expense & Sales Dashboard",
    role: "Dashboard Developer",
    bullets: [
      "Built a responsive financial dashboard aggregating sales, expense, and profit data into clear summary views for quick decision-making.",
      "Connected API data sources to React components and structured records into filterable monthly and overall reports.",
      "Deployed to Vercel with a mobile-friendly layout suitable for daily business review.",
    ],
    stack: ["React", "Tailwind CSS", "API integration", "Vercel"],
  },
  {
    title: "AI Lead Tracker CRM",
    role: "Frontend / CRM Workflow Developer",
    bullets: [
      "Built a lightweight CRM dashboard for tracking leads, outreach status, notes, and follow-ups — designed for users who find full CRM platforms too heavy.",
      "Integrated Google Sheets and Apps Script as a low-cost backend so non-technical users can view and edit lead data in a familiar tool.",
      "Designed an opportunity tracking interface focused on speed and clarity.",
    ],
    stack: ["React", "Tailwind CSS", "Google Sheets", "Apps Script", "Vercel"],
  },
  {
    title: "Automation Audit Tool",
    role: "Product / Automation Workflow Developer",
    bullets: [
      "Built an interactive audit tool that captures business workflow inputs and surfaces practical automation opportunities based on the responses.",
      "Connected audit submissions to the lead/admin workflow so incoming requests can be reviewed and followed up from one dashboard.",
      "Used Zod schema validation to maintain data integrity from form submission through database storage.",
    ],
    stack: ["Next.js", "TypeScript", "Supabase", "Zod"],
  },
];

const technicalProof = [
  "Live portfolio deployed on Vercel with a working Supabase-backed contact form and protected admin leads dashboard.",
  "Implemented end-to-end CSV export workflow for clean lead data handoff and client follow-up.",
  "Built responsive case study pages, technology stack section, and service positioning aimed at freelance and small-business clients.",
];

const availability = [
  "Freelance projects",
  "Remote junior developer roles",
  "Contract work on dashboards & lead systems",
  "CRM tools & workflow automation builds",
];

export default function ResumePage() {
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
                {RESUME_NAME}
              </h1>
              <p className="mt-4 text-pretty text-[16px] font-medium leading-relaxed text-white sm:text-[18px]">
                {RESUME_TITLE}
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
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-white"
                >
                  <LinkedinIcon size={13} />
                  {LINKEDIN_HANDLE}
                </a>
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-white"
                >
                  <GithubIcon size={13} />
                  {GITHUB_HANDLE}
                </a>
                <a
                  href={PORTFOLIO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 transition hover:text-white"
                >
                  <ArrowUpRight className="h-3.5 w-3.5" />
                  {PORTFOLIO_HANDLE}
                </a>
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5" />
                  {RESUME_LOCATION}
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
                href={LINKEDIN_URL}
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
                  Full-stack web developer specializing in business automation,
                  lead management systems, and admin dashboards. Builds and
                  deploys production web applications using Next.js, TypeScript,
                  Node.js, and Supabase that help small businesses capture
                  leads, track operations, and reduce manual workflows.
                  Comfortable with end-to-end delivery from frontend UI through
                  backend data flow to production deployment on Vercel.
                </p>
              </article>
            </Reveal>

            <Reveal delay={0.05}>
              <article className="glass-card h-full rounded-3xl p-7 sm:p-8">
                <SectionTitle icon={GraduationCap}>Education</SectionTitle>
                <div className="mt-5">
                  <div className="text-[15px] font-semibold tracking-[-0.01em] text-white">
                    Student — Software Development
                  </div>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-foreground-muted">
                    Focused on AI-assisted engineering, data dashboards, and
                    business automation systems.
                  </p>
                  <p className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] text-foreground-subtle">
                    <MapPin className="h-3 w-3" />
                    Dhaka, Bangladesh
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Business Systems + Technical Skills */}
      <Section spacing="sm">
        <Container size="lg">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
            <Reveal>
              <article className="glass-card h-full rounded-3xl p-7 sm:p-8">
                <SectionTitle icon={Briefcase}>Business Systems</SectionTitle>
                <ul className="mt-6 grid gap-2 sm:grid-cols-2">
                  {businessSystems.map((skill) => (
                    <li key={skill.name}>
                      <SkillBadge item={skill} />
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
                            <SkillBadge key={item.name} item={item} />
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
                  <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/6 pt-4 text-[12px] text-foreground-subtle">
                    <Link
                      href="/projects"
                      className="inline-flex items-center gap-1.5 transition hover:text-white"
                    >
                      <ArrowUpRight className="h-3 w-3" />
                      Demo
                    </Link>
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 transition hover:text-white"
                    >
                      <GithubIcon size={12} />
                      {GITHUB_HANDLE}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Technical Proof */}
      <Section spacing="sm">
        <Container size="lg">
          <Reveal>
            <article className="glass-card rounded-3xl p-7 sm:p-8">
              <SectionTitle icon={CheckCircle2}>Technical Proof</SectionTitle>
              <ul className="mt-6 grid gap-2.5">
                {technicalProof.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-foreground-muted sm:text-[14px]"
                  >
                    <span
                      aria-hidden
                      className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        </Container>
      </Section>

      {/* Availability */}
      <Section spacing="sm">
        <Container size="lg">
          <Reveal>
            <article className="glass-card rounded-3xl p-7 sm:p-8">
              <SectionTitle icon={MapPin}>Availability</SectionTitle>
              <p className="mt-5 text-[14px] leading-relaxed text-foreground-muted">
                Open to freelance projects, remote junior developer roles, and
                contract work on dashboards, lead systems, CRM tools, and
                workflow automation — available worldwide for remote
                engagements.
              </p>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
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
                <span>Based in {RESUME_LOCATION}</span>
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

function SkillBadge({ item }: { item: SkillItem }) {
  const Icon = item.icon;
  return (
    <span className="group inline-flex w-full items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-[12.5px] text-foreground-muted backdrop-blur transition hover:border-white/20 hover:bg-white/8 hover:text-white sm:w-auto">
      <Icon
        aria-hidden
        className="h-3.5 w-3.5 shrink-0 text-foreground-subtle transition group-hover:text-white"
      />
      <span className="truncate">{item.name}</span>
    </span>
  );
}
