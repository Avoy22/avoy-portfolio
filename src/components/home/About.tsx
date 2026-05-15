import { CircleCheck, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { site } from "@/data/site";

const principles = [
  {
    title: "Outcomes over output",
    body: "I optimize for the metric your business actually cares about — leads, revenue, time saved — not lines of code shipped.",
  },
  {
    title: "Production from day one",
    body: "Everything I build runs on real infrastructure (Vercel, Supabase, Resend) from week one. No staging-forever projects.",
  },
  {
    title: "Founder-friendly architecture",
    body: "Typed end-to-end, documented, and built so your next hire (or me, six months from now) can extend it without rewriting.",
  },
  {
    title: "Tight feedback loops",
    body: "Weekly shipped increments, async-friendly Loom updates, and a real URL you can use after week one.",
  },
];

export function About() {
  return (
    <Section>
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Badge tone="brand" size="md" dot>
              About Avoy
            </Badge>
            <h2 className="mt-5 text-balance text-[28px] font-semibold leading-[1.06] tracking-[-0.025em] text-gradient sm:text-[36px] lg:text-[44px] xl:text-[48px]">
              An engineer who treats your business like a product.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-foreground-muted sm:text-[17px]">
              I&apos;m {site.name}. I build AI-powered web systems for service
              businesses, agencies, and founders — the kind of work that ends in
              a deployed URL, a real database, and a metric the business can
              point at and say &quot;this moved.&quot;
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground-muted sm:text-[17px]">
              My background sits at the intersection of full-stack engineering
              and applied AI. I care about clean architecture, fast iteration,
              and shipping the smallest correct version first.
            </p>

            <div className="mt-8 flex flex-col gap-3 text-sm text-foreground-muted sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[12.5px]">
                <MapPin className="h-3.5 w-3.5 text-foreground-subtle" />
                {site.location}
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-success/20 bg-success/[0.06] px-3 py-1.5 text-[12.5px]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                </span>
                {site.availability}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2 lg:gap-5">
              {principles.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.06}>
                  <div className="glass-card group h-full rounded-2xl p-6 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/15 sm:p-7">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent transition group-hover:border-accent/40 group-hover:bg-accent/15">
                      <CircleCheck className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-[15.5px] font-semibold tracking-[-0.015em] text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[14px] leading-relaxed text-foreground-muted">
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
