"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const [prevPath, setPrevPath] = useState(pathname);
  if (prevPath !== pathname) {
    setPrevPath(pathname);
    if (open) setOpen(false);
  }

  const isAdmin = pathname?.startsWith("/admin");

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/6 bg-background/75 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55"
          : "border-b border-transparent"
      )}
    >
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-px transition-opacity duration-300",
          scrolled ? "opacity-100" : "opacity-0",
          "bg-linear-to-r from-transparent via-white/10 to-transparent"
        )}
      />
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:h-18 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="group relative flex items-center gap-2.5"
          aria-label={`${site.name} home`}
        >
          <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-accent via-accent-2 to-accent-3 text-black shadow-[0_8px_24px_-8px_rgba(109,140,255,0.55),0_0_0_1px_rgba(255,255,255,0.08)_inset] transition-transform duration-300 group-hover:scale-105">
            <Sparkles className="h-4 w-4" strokeWidth={2.5} />
            <span
              aria-hidden
              className="absolute inset-0 rounded-xl bg-linear-to-tr from-white/30 to-transparent opacity-50"
            />
            <span
              aria-hidden
              className="absolute -inset-0.5 rounded-xl bg-linear-to-br from-accent/40 via-accent-2/40 to-accent-3/40 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100"
            />
          </span>
          <div className="leading-tight">
            <div className="text-[15px] font-semibold tracking-[-0.01em] text-white">
              {site.name}
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-foreground-subtle">
              AI · Web · Automation
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {site.nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-white"
                    : "text-foreground-muted hover:text-white"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-white/6 border border-white/8 shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {isAdmin ? (
            <Link
              href="/"
              className="text-sm text-foreground-muted hover:text-white transition"
            >
              ← Back to site
            </Link>
          ) : (
            <Link
              href="/contact"
              className="group relative inline-flex h-10 items-center gap-2 overflow-hidden rounded-full bg-white px-5 text-[13px] font-medium text-black shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_8px_24px_-8px_rgba(255,255,255,0.4)] transition hover:bg-zinc-100 hover:shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_12px_30px_-10px_rgba(255,255,255,0.5)]"
            >
              <span className="relative z-10 inline-flex items-center gap-2">
                Book a call
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
              <span
                aria-hidden
                className="pointer-events-none absolute inset-y-0 left-0 w-[40%] -translate-x-full bg-linear-to-r from-transparent via-white/55 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:translate-x-[260%] group-hover:opacity-100"
              />
            </Link>
          )}
        </div>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/4 text-white backdrop-blur transition hover:bg-white/8"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="md:hidden border-t border-white/6 bg-background/95 backdrop-blur-xl"
          >
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-1 px-5 py-5 sm:px-8">
              {site.nav.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium transition",
                      active
                        ? "bg-white/6 text-white border border-white/8"
                        : "text-foreground-muted hover:bg-white/4 hover:text-white"
                    )}
                  >
                    {item.label}
                    <ArrowUpRight className="h-4 w-4 opacity-40" />
                  </Link>
                );
              })}
              <Link
                href="/contact"
                className="mt-3 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white text-[15px] font-medium text-black shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_8px_24px_-8px_rgba(255,255,255,0.4)]"
              >
                Book a call
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
