import type { ComponentType } from "react";
import Link from "next/link";
import {
  Inbox,
  LayoutDashboard,
  Gauge,
  Globe,
  ArrowRight,
  ArrowUpRight,
  Mail,
  FileText,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

type IconProps = {
  className?: string;
  "aria-hidden"?: boolean | "true" | "false";
};

type IconComponent = ComponentType<IconProps>;

type Offer = {
  icon: IconComponent;
  title: string;
  description: string;
};

const offers: Offer[] = [
  {
    icon: Inbox,
    title: "Lead Management Systems",
    description:
      "Contact forms, Supabase/Firebase database, admin dashboard, status tracking, notes, and CSV export.",
  },
  {
    icon: LayoutDashboard,
    title: "Business Dashboards",
    description:
      "Sales, expense, profit, and reporting dashboards with clean UI and useful business insights.",
  },
  {
    icon: Gauge,
    title: "Workflow Automation Audit",
    description:
      "Review manual workflows and suggest practical automation systems using forms, dashboards, databases, email, and Google Sheets.",
  },
  {
    icon: Globe,
    title: "Business Websites with Backend",
    description:
      "Modern business websites with lead capture, contact forms, admin workflows, and deployment.",
  },
];

export function WorkWithMe() {
  return (
    <Section id="work-with-me">
      <Container>
        <SectionHeader
          align="center"
          eyebrow="Work with me"
          title="Systems that turn manual work into clean software"
          description="I help small businesses, founders, and service teams replace spreadsheets and inbox chaos with dashboards, lead workflows, and lightweight automation that actually ships."
        />

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:gap-5">
          {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
              <Reveal key={offer.title} delay={(index % 2) * 0.06}>
                <article className="glass-card group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/5 sm:p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-white transition group-hover:border-accent/30 group-hover:bg-accent/10 group-hover:text-accent">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-[17px] font-semibold tracking-[-0.015em] text-white">
                    {offer.title}
                  </h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-foreground-muted">
                    {offer.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <div className="mt-10 flex w-full flex-col items-stretch gap-3 sm:mt-12 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <Link
              href="/automation-audit"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-black shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_8px_24px_-10px_rgba(255,255,255,0.4)] transition hover:bg-zinc-100"
            >
              <Gauge className="h-4 w-4" />
              Run Automation Audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/4 px-7 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/7"
            >
              <Mail className="h-4 w-4" />
              Contact Me
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/#case-studies"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/3 px-7 text-sm font-medium text-foreground-muted backdrop-blur transition hover:border-white/25 hover:bg-white/6 hover:text-white"
            >
              <FileText className="h-4 w-4" />
              View Case Studies
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
