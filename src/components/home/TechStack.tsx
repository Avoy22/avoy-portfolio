import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";
import { groupTechByCategory } from "@/data/techStack";
import { cn } from "@/lib/utils";

export function TechStack() {
  const groups = groupTechByCategory();

  return (
    <Section>
      <Container>
        <SectionHeader
          eyebrow="Tech stack"
          title="Modern, opinionated, production-tested."
          description="A focused stack chosen for shipping speed, type safety, and long-term maintainability — not novelty."
        />

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {groups.map((group, index) => (
            <Reveal key={group.category} delay={(index % 3) * 0.06}>
              <div className="glass-card group h-full rounded-2xl p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/15 sm:p-7">
                <div className="flex items-center justify-between">
                  <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-muted transition group-hover:text-white">
                    {group.category}
                  </h3>
                  <span className="tabular font-mono text-[11px] text-foreground-subtle">
                    {group.items.length.toString().padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-[12.5px] transition hover:-translate-y-px",
                        item.level === "Core" &&
                          "border-accent/30 bg-accent/10 text-white shadow-[0_0_0_1px_rgba(109,140,255,0.05)_inset]",
                        item.level === "Daily" &&
                          "border-white/10 bg-white/4 text-foreground-muted",
                        item.level === "Familiar" &&
                          "border-white/6 bg-white/2 text-foreground-subtle"
                      )}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
