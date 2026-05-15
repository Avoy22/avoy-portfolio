import type { Metadata } from "next";
import { Calendar, Clock, Globe, Mail, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell me about your project. I read every inbound personally and reply within 24 hours.",
  openGraph: {
    title: "Contact · Avoy Das",
    description:
      "Tell me about your project. I read every inbound personally and reply within 24 hours.",
  },
};

const guarantees = [
  {
    icon: Clock,
    title: "24-hour reply",
    body: "Every inbound message gets a real, personal response within one business day.",
  },
  {
    icon: ShieldCheck,
    title: "No-pitch strategy call",
    body: "If we hop on a call, you leave with a written direction — even if we don't work together.",
  },
  {
    icon: Globe,
    title: "Async-friendly",
    body: "Loom, Slack, Linear, email — I'll work in the channels your team already lives in.",
  },
];

export default function ContactPage() {
  return (
    <Section spacing="lg" className="overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_50%_40%_at_50%_30%,black,transparent_75%)] opacity-25"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[8%] -z-10 h-[520px] w-[520px] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(109,140,255,0.2),transparent_60%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -left-32 -z-10 h-[360px] w-[360px] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.14),transparent_60%)] blur-3xl"
        style={{ animationDelay: "-6s" }}
      />
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Badge tone="brand" size="md" dot>
              Get in touch
            </Badge>
            <h1 className="mt-6 text-balance text-[38px] font-semibold leading-[1.02] tracking-[-0.034em] text-gradient sm:text-[52px] lg:text-[60px]">
              Let&apos;s scope your
              <br />
              <span className="text-gradient-brand">next system.</span>
            </h1>
            <p className="mt-6 text-pretty text-[15.5px] leading-relaxed text-foreground-muted sm:text-[17px]">
              Tell me where you are, what&apos;s broken, and what success
              looks like. I&apos;ll come back with an honest read on whether
              I&apos;m the right fit and a recommended next step.
            </p>

            <div className="mt-9 space-y-3">
              <a
                href={site.social.email}
                className="glass-card group flex items-center justify-between rounded-2xl p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition group-hover:border-accent/30 group-hover:bg-accent/10 group-hover:text-accent">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[10.5px] uppercase tracking-[0.16em] text-foreground-subtle">
                      Email
                    </div>
                    <div className="mt-0.5 text-sm font-medium text-white">
                      {site.email}
                    </div>
                  </div>
                </div>
              </a>
              <div className="glass-card flex items-center gap-3 rounded-2xl p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white">
                  <Calendar className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10.5px] uppercase tracking-[0.16em] text-foreground-subtle">
                    Availability
                  </div>
                  <div className="mt-0.5 inline-flex items-center gap-1.5 text-sm font-medium text-white">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                    </span>
                    {site.availability}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 space-y-5">
              <div className="text-[10.5px] font-semibold uppercase tracking-[0.2em] text-foreground-subtle">
                What you can expect
              </div>
              {guarantees.map((g) => (
                <div key={g.title} className="group flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent transition group-hover:border-accent/40 group-hover:bg-accent/15">
                    <g.icon className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-[14.5px] font-semibold text-white">
                      {g.title}
                    </div>
                    <p className="mt-1 text-[13.5px] leading-relaxed text-foreground-muted">
                      {g.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  );
}
