"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
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

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-white/6 bg-background/75 backdrop-blur-xl supports-backdrop-filter:bg-background/55"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 sm:h-18 sm:px-8 lg:px-12">
        <Link
          href="/"
          className="group relative flex min-w-0 items-center gap-2.5"
          aria-label="Aboy Systems home"
        >
          <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl shadow-[0_10px_28px_-10px_rgba(34,211,238,0.7)] transition-transform duration-300 group-hover:scale-105 sm:h-10 sm:w-10">
            <Image
              src="/brand/automation-flow-icon.svg"
              alt="Aboy Systems automation flow icon"
              width={40}
              height={40}
              priority
              className="h-full w-full rounded-xl"
            />
          </span>
          <div className="min-w-0 leading-tight">
            <div className="text-[15px] font-semibold tracking-[-0.01em] text-white">
              Aboy Systems
            </div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-foreground-subtle">
              AI Automation &amp; Web Apps
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
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:ring-0",
                  active
                    ? "text-white"
                    : "text-foreground-muted hover:text-white"
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/7 shadow-[0_12px_30px_-20px_rgba(109,140,255,0.65)]"
                    transition={{ type: "spring", duration: 0.5, bounce: 0.2 }}
                  />
                )}
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/contact"
            aria-current={pathname === "/contact" ? "page" : undefined}
            className="group inline-flex h-10 items-center gap-2 rounded-full bg-white px-5 text-[13px] font-medium text-black shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_8px_24px_-8px_rgba(255,255,255,0.4)] transition hover:-translate-y-0.5 hover:bg-zinc-100 hover:shadow-[0_1px_0_rgba(255,255,255,0.85)_inset,0_14px_34px_-16px_rgba(255,255,255,0.65)] motion-reduce:hover:translate-y-0"
          >
            Contact
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
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
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-xl px-4 py-3.5 text-[15px] font-medium transition",
                      active
                        ? "border border-white/10 bg-white/7 text-white shadow-[0_14px_40px_-28px_rgba(109,140,255,0.7)]"
                        : "text-foreground-muted hover:bg-white/4 hover:text-white"
                    )}
                  >
                    {item.label}
                    <ArrowUpRight className="h-4 w-4 opacity-40" />
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
