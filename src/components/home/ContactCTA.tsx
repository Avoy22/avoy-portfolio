import Link from "next/link";
import { ArrowRight, Gauge, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";

export function ContactCTA() {
  return (
    <Section spacing="md">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/8 via-white/3 to-transparent p-10 sm:p-14 lg:p-16">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid-bg mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent_75%)] opacity-30"
          />
          <div className="relative flex flex-col items-center text-center">
            <h2 className="max-w-3xl text-balance text-[28px] font-semibold leading-[1.08] tracking-[-0.025em] text-gradient sm:text-[40px] lg:text-[48px]">
              Have a project in mind?
            </h2>
            <p className="mt-5 max-w-xl text-pretty text-[15px] leading-relaxed text-foreground-muted sm:text-[17px]">
              Tell me what you&apos;re building and I&apos;ll reply with an
              honest read on how I can help.
            </p>

            <div className="mt-9 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-black shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_8px_24px_-10px_rgba(255,255,255,0.4)] transition hover:bg-zinc-100"
              >
                Contact Me
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/automation-audit"
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/4 px-7 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/7"
              >
                <Gauge className="h-4 w-4" />
                Run Automation Audit
              </Link>
            </div>

            <a
              href={site.social.email}
              className="mt-5 inline-flex items-center gap-2 text-[13.5px] text-foreground-muted transition hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" />
              {site.email}
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}
