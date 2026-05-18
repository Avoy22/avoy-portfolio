import type { ComponentType } from "react";
import {
  Rocket,
  Database,
  ShieldCheck,
  Inbox,
  FileSpreadsheet,
  Smartphone,
  FileText,
} from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

type IconProps = {
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
};

type IconComponent = ComponentType<IconProps>;

function GithubGlyph({ className }: IconProps) {
  return <SiGithub aria-hidden="true" focusable={false} className={className} />;
}

type Credibility = {
  icon: IconComponent;
  title: string;
  description: string;
};

const credibility: Credibility[] = [
  {
    icon: Rocket,
    title: "Live deployed projects",
    description:
      "Every featured project is deployed on Vercel and can be inspected beyond a screenshot.",
  },
  {
    icon: Database,
    title: "Supabase database integration",
    description:
      "Postgres-backed lead and dashboard projects with row-level security and typed access.",
  },
  {
    icon: ShieldCheck,
    title: "Protected admin dashboard",
    description:
      "Server-gated admin routes for managing leads, checked before private data is fetched.",
  },
  {
    icon: Inbox,
    title: "Contact form lead capture",
    description:
      "Zod-validated form posts to a typed API route, stores leads in Supabase, and triggers a Resend email.",
  },
  {
    icon: FileSpreadsheet,
    title: "CSV export workflow",
    description:
      "Admin dashboards include CSV export for spreadsheets, CRMs, and accountant handoff.",
  },
  {
    icon: Smartphone,
    title: "Responsive UI",
    description:
      "Mobile-first layouts for admin views, dashboards, and marketing pages.",
  },
  {
    icon: GithubGlyph,
    title: "GitHub source code",
    description:
      "Public repositories for the featured projects so the work can actually be inspected, not just demoed.",
  },
  {
    icon: FileText,
    title: "Case study documentation",
    description:
      "Each project page documents the problem, solution, architecture, business value, and what I learned.",
  },
];

export function CaseStudies() {
  return (
    <Section id="case-studies">
      <Container>
        <SectionHeader
          eyebrow="Case studies"
          title="Proof, not promises"
          description="Deployed work with business context, implementation notes, and clear tradeoffs."
        />

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {credibility.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={(index % 4) * 0.05}>
                <div className="glass-card group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-white transition group-hover:border-accent/30 group-hover:bg-accent/10 group-hover:text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-[16px] font-semibold tracking-[-0.015em] text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-foreground-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
