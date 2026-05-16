import Link from "next/link";
import { Mail, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/6 bg-background-soft/40">
      <Container className="relative py-14 sm:py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="group inline-flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-accent via-accent-2 to-accent-3 text-black shadow-[0_8px_24px_-8px_rgba(109,140,255,0.5)]">
                <Sparkles className="h-4 w-4" strokeWidth={2.5} />
              </span>
              <span className="text-[15px] font-semibold tracking-[-0.01em] text-white">
                {site.name}
              </span>
            </Link>
            <p className="mt-5 text-[14.5px] leading-relaxed text-foreground-muted">
              {site.subheadline}
            </p>
          </div>

          <div className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-subtle">
                Site
              </h4>
              <ul className="mt-5 flex flex-col gap-3">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-foreground-muted transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground-subtle">
                Connect
              </h4>
              <div className="mt-5 flex items-center gap-2">
                <SocialLink href={site.social.github} label="GitHub">
                  <GithubIcon size={15} />
                </SocialLink>
                <SocialLink href={site.social.linkedin} label="LinkedIn">
                  <LinkedinIcon size={15} />
                </SocialLink>
                <SocialLink href={site.social.email} label="Email">
                  <Mail className="h-4 w-4" />
                </SocialLink>
              </div>
              <a
                href={site.social.email}
                className="mt-5 inline-flex text-sm font-medium text-white hover:underline"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-white/6 pt-7 sm:flex-row sm:items-center">
          <p className="text-xs text-foreground-subtle">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground-subtle">
            Built with Next.js &amp; Tailwind
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
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/3 text-foreground-muted transition hover:border-white/25 hover:bg-white/6 hover:text-white"
    >
      {children}
    </a>
  );
}
