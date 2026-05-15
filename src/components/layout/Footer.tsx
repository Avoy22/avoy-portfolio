import Link from "next/link";
import { Mail, ArrowUpRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/ui/BrandIcons";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-white/[0.06] bg-background-soft/40">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(109,140,255,0.1),transparent_60%)] blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-[10%] h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.08),transparent_60%)] blur-3xl"
      />
      <Container className="relative py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href="/" className="group inline-flex items-center gap-2.5">
              <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-accent via-accent-2 to-accent-3 text-black shadow-[0_8px_24px_-8px_rgba(109,140,255,0.5)] transition-transform duration-300 group-hover:scale-105">
                <Sparkles className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="text-[15px] font-semibold tracking-[-0.01em] text-white">
                {site.name}
              </span>
            </Link>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-foreground-muted">
              {site.subheadline}
            </p>
            <div className="mt-7 flex items-center gap-2">
              <SocialLink href={site.social.github} label="GitHub">
                <GithubIcon size={15} />
              </SocialLink>
              <SocialLink href={site.social.linkedin} label="LinkedIn">
                <LinkedinIcon size={15} />
              </SocialLink>
              <SocialLink href={site.social.x} label="X / Twitter">
                <XIcon size={14} />
              </SocialLink>
              <SocialLink href={site.social.email} label="Email">
                <Mail className="h-4 w-4" />
              </SocialLink>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-subtle">
              Site
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="group inline-flex items-center text-sm text-foreground-muted transition hover:text-white"
                  >
                    <span className="relative">
                      {item.label}
                      <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-subtle">
              Engage
            </h4>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <Link
                  href="/services"
                  className="group inline-flex items-center text-sm text-foreground-muted transition hover:text-white"
                >
                  <span className="relative">
                    Services
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="group inline-flex items-center text-sm text-foreground-muted transition hover:text-white"
                >
                  <span className="relative">
                    Case studies
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="group inline-flex items-center text-sm text-foreground-muted transition hover:text-white"
                >
                  <span className="relative">
                    Book a call
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-subtle">
              Get in touch
            </h4>
            <a
              href={site.social.email}
              className="group mt-5 inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              {site.email}
              <ArrowUpRight className="h-3.5 w-3.5 text-foreground-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
            </a>
            <p className="mt-3 text-xs leading-relaxed text-foreground-subtle">
              {site.location}
            </p>
            <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-success/20 bg-success/[0.06] px-2.5 py-1 text-[11px] text-foreground-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
              </span>
              {site.availability}
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/[0.06] pt-7 sm:flex-row sm:items-center">
          <p className="text-xs text-foreground-subtle">
            © {new Date().getFullYear()} {site.name}. Crafted with Next.js,
            TypeScript &amp; Tailwind.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground-subtle">
            Built for founders who actually ship
          </p>
        </div>
      </Container>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-foreground-muted transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_8px_20px_-8px_rgba(109,140,255,0.45)]"
    >
      {children}
    </a>
  );
}
