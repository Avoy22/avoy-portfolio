import Link from "next/link";
import { ArrowRight, Calendar, Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { site } from "@/data/site";

export function ContactCTA() {
  return (
    <Section spacing="md">
      <Container>
        <div className="relative overflow-hidden rounded-[32px] border border-white/[0.1] bg-gradient-to-br from-white/[0.08] via-white/[0.025] to-transparent p-10 sm:p-16 lg:p-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent_75%)] opacity-40"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[480px] -translate-x-1/2 animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.26),transparent_60%)] blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 right-[5%] h-[380px] w-[380px] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.18),transparent_60%)] blur-3xl"
            style={{ animationDelay: "-6s" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-[8%] h-[280px] w-[280px] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(109,140,255,0.18),transparent_60%)] blur-3xl"
            style={{ animationDelay: "-3s" }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
          />
          <div className="relative flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-[12px] font-medium text-accent backdrop-blur">
              <Calendar className="h-3.5 w-3.5" />
              {site.availability}
            </div>
            <h2 className="mt-7 max-w-3xl text-balance text-[32px] font-semibold leading-[1.04] tracking-[-0.03em] text-gradient sm:text-[46px] lg:text-[58px]">
              Got a system to ship?
              <br />
              <span className="text-gradient-brand">Let&apos;s scope it in 30 minutes.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-pretty text-[15px] leading-relaxed text-foreground-muted sm:text-[17px]">
              Bring a problem, leave with a written, opinionated direction.
              Strategy calls are free and useful even if we don&apos;t end up
              working together.
            </p>

            <div className="mt-10 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-center">
              <Link
                href="/contact"
                className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-7 text-sm font-medium text-black shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_12px_36px_-10px_rgba(255,255,255,0.45),0_4px_12px_-4px_rgba(0,0,0,0.4)] transition hover:bg-zinc-100 hover:shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_18px_46px_-12px_rgba(255,255,255,0.55)] active:translate-y-px"
              >
                <span className="relative z-10 inline-flex items-center gap-2">
                  Book a strategy call
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 left-0 w-[40%] -translate-x-full bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:translate-x-[260%] group-hover:opacity-100"
                />
              </Link>
              <a
                href={site.social.email}
                className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/[0.07]"
              >
                <Mail className="h-4 w-4 transition-transform group-hover:-rotate-6" />
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
