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
          title="The tools I work with"
          description="A focused stack chosen for shipping speed, type safety, and long-term maintainability."
        />

        <div className="mt-12 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {groups.map((group, index) => (
            <Reveal key={group.category} delay={(index % 3) * 0.06}>
              <div className="glass-card h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 sm:p-7">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-muted">
                  {group.category}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li
                      key={item.name}
                      className={cn(
                        "rounded-full border px-3 py-1.5 text-[12.5px]",
                        item.level === "Core" &&
                          "border-accent/30 bg-accent/10 text-white",
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
