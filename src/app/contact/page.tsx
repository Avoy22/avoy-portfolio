import type { Metadata } from "next";
import { Calendar, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { PortfolioQrCard } from "@/components/ui/PortfolioQrCard";
import { ContactForm } from "@/components/contact/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell me about your project. I read every inbound personally and reply within a day or two.",
  openGraph: {
    title: "Contact · Avoy Das",
    description:
      "Tell me about your project. I read every inbound personally.",
  },
};

export default function ContactPage() {
  return (
    <Section spacing="lg">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Badge tone="brand" size="md" dot>
              Get in touch
            </Badge>
            <h1 className="mt-6 text-balance text-[36px] font-semibold leading-[1.04] tracking-[-0.03em] text-gradient sm:text-[48px] lg:text-[56px]">
              Let&apos;s talk about your project.
            </h1>
            <p className="mt-6 text-pretty text-[15px] leading-relaxed text-foreground-muted sm:text-[17px]">
              Tell me what you&apos;re building and what&apos;s in the way.
              I&apos;ll come back with an honest read on whether I&apos;m a
              good fit.
            </p>

            <div className="mt-9 space-y-3">
              <a
                href={site.social.email}
                className="glass-card group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-white transition group-hover:border-accent/30 group-hover:bg-accent/10 group-hover:text-accent">
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
              </a>
              <div className="glass-card flex items-center gap-4 rounded-2xl p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/4 text-white">
                  <Calendar className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10.5px] uppercase tracking-[0.16em] text-foreground-subtle">
                    Location
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-white">
                    {site.location}
                  </div>
                </div>
              </div>
              <PortfolioQrCard />
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
