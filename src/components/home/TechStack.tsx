import type { IconType } from "react-icons";
import {
  SiFirebase,
  SiGithub,
  SiGoogleappsscript,
  SiGooglesheets,
  SiNextdotjs,
  SiPostgresql,
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
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { groupTechByCategory } from "@/data/techStack";
import { cn } from "@/lib/utils";

const techIcons: Record<string, IconType> = {
  "Next.js": SiNextdotjs,
  React: SiReact,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  Supabase: SiSupabase,
  Firebase: SiFirebase,
  PostgreSQL: SiPostgresql,
  "Google Sheets": SiGooglesheets,
  "Google Apps Script": SiGoogleappsscript,
  Resend: SiResend,
  Zod: SiZod,
  Vercel: SiVercel,
  GitHub: SiGithub,
};

export function TechStack() {
  const groups = groupTechByCategory();

  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Tech stack"
          title="The tools I work with"
          description="A focused stack chosen for shipping speed, type safety, and long-term maintainability."
        />

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {groups.map((group, index) => (
            <Reveal key={group.category} delay={(index % 3) * 0.06}>
              <div className="glass-card interactive-card h-full rounded-2xl p-6 sm:p-7">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-muted">
                  {group.category}
                </h3>
                <ul className="mt-5 grid gap-2.5">
                  {group.items.map((item) => {
                    const Icon = techIcons[item.name];

                    return (
                      <li
                        key={item.name}
                        aria-label={`${item.name}, ${group.category}`}
                        className={cn(
                          "flex min-h-14 items-center gap-3 rounded-xl border px-3.5 py-3 text-left transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 motion-reduce:hover:translate-y-0",
                          item.level === "Core" &&
                            "border-accent/30 bg-accent/10 text-white",
                          item.level === "Daily" &&
                            "border-white/10 bg-white/4 text-foreground-muted",
                          item.level === "Familiar" &&
                            "border-white/6 bg-white/2 text-foreground-subtle"
                        )}
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-black/20 text-white">
                          <Icon aria-hidden="true" className="h-5 w-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block truncate text-[13px] font-medium leading-tight text-white">
                            {item.name}
                          </span>
                          <span className="mt-1 block text-[10px] uppercase leading-none tracking-[0.14em] text-foreground-subtle">
                            {group.category}
                          </span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
