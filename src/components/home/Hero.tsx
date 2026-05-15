"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, CircleCheck, Sparkles, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { site } from "@/data/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent_75%)] opacity-40"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[720px] w-[720px] -translate-x-1/2 animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(109,140,255,0.24),transparent_60%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-[8%] -z-10 h-[420px] w-[420px] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(167,139,250,0.2),transparent_60%)] blur-3xl"
        style={{ animationDelay: "-8s" }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/3 -left-20 -z-10 h-[360px] w-[360px] animate-aurora rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.14),transparent_60%)] blur-3xl"
        style={{ animationDelay: "-4s" }}
      />

      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge tone="brand" size="md" dot>
              {site.availability}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-7 max-w-4xl text-balance text-[38px] font-semibold leading-[1.02] tracking-[-0.034em] sm:text-[58px] lg:text-[80px]"
          >
            <span className="text-gradient">AI-powered web systems,</span>{" "}
            <span className="animate-shine bg-[linear-gradient(90deg,#6d8cff,#a78bfa,#22d3ee,#6d8cff)] bg-clip-text text-transparent">
              engineered to ship.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-2xl text-pretty text-[15.5px] leading-relaxed text-foreground-muted sm:mt-7 sm:text-[18px]"
          >
            I&apos;m {site.name} — a full-stack engineer who builds production-grade
            websites, dashboards, lead engines, and AI automations for service
            businesses, agencies, and founders who need real outcomes, not
            decks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-9 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center"
          >
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
                className="pointer-events-none absolute inset-y-0 left-0 z-0 w-[40%] -translate-x-full bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:translate-x-[260%] group-hover:opacity-100"
              />
            </Link>
            <Link
              href="/projects"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/[0.06]"
            >
              View case studies
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-foreground-subtle"
          >
            <span className="inline-flex items-center gap-1.5">
              <CircleCheck className="h-3.5 w-3.5 text-success" />
              Production from day one
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-foreground-subtle/60 sm:inline-block" />
            <span className="inline-flex items-center gap-1.5">
              <CircleCheck className="h-3.5 w-3.5 text-success" />
              Weekly shipped increments
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-foreground-subtle/60 sm:inline-block" />
            <span className="inline-flex items-center gap-1.5">
              <CircleCheck className="h-3.5 w-3.5 text-success" />
              You own the code
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4"
          >
            {site.stats.map((s) => (
              <div
                key={s.label}
                className="glass-card group relative overflow-hidden rounded-2xl p-4 text-left transition-all duration-500 hover:-translate-y-0.5 hover:border-white/15 sm:p-5"
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute -inset-px rounded-2xl bg-[radial-gradient(120%_70%_at_50%_-10%,rgba(109,140,255,0.18),transparent_55%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="tabular relative text-[22px] font-semibold tracking-[-0.02em] text-white sm:text-[26px]">
                  {s.value}
                </div>
                <div className="relative mt-1 text-[10.5px] uppercase tracking-[0.14em] text-foreground-subtle sm:text-[11px]">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.36 }}
            className="mt-20 w-full sm:mt-24"
          >
            <HeroProductPreview />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="relative mt-16 w-full overflow-hidden sm:mt-20"
          >
            <div className="mb-5 text-center text-[10.5px] font-medium uppercase tracking-[0.2em] text-foreground-subtle">
              The stack I ship with
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent sm:w-28" />
              <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent sm:w-28" />
              <div className="flex w-max animate-marquee gap-3">
                {[...PROOF, ...PROOF].map((p, i) => (
                  <span
                    key={`${p}-${i}`}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-foreground-muted backdrop-blur"
                  >
                    <span className="h-1 w-1 rounded-full bg-accent/70" />
                    {p}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

const PROOF = [
  "Next.js 16",
  "TypeScript",
  "Supabase",
  "Resend",
  "Tailwind v4",
  "Framer Motion",
  "Vercel",
  "Claude API",
  "Stripe",
  "PostgreSQL",
  "Zod",
  "React Hook Form",
];

function HeroProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-5xl">
      <div className="absolute -inset-x-8 -top-12 -bottom-12 -z-10 rounded-[40px] bg-[radial-gradient(ellipse_at_center,rgba(109,140,255,0.22),transparent_70%)] blur-3xl" />
      <div className="glass-strong ring-glow overflow-hidden rounded-2xl">
        <div className="flex items-center gap-2 border-b border-white/[0.06] bg-white/[0.02] px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </div>
          <div className="ml-3 flex h-6 flex-1 items-center gap-2 truncate rounded-md bg-white/[0.04] px-3 text-[11px] text-foreground-subtle">
            <span className="opacity-60">https://</span>
            avoydas.com
            <span className="opacity-50">/</span>
            admin
            <span className="opacity-50">/</span>
            <span className="text-white/80">leads</span>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-0">
          <aside className="col-span-3 hidden border-r border-white/[0.06] bg-white/[0.015] p-4 text-xs text-foreground-muted md:block">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span className="text-[10.5px] uppercase tracking-[0.14em] text-foreground-subtle">
                Lead Engine
              </span>
            </div>
            <ul className="space-y-1">
              {["Overview", "Leads", "Pipeline", "Inbox", "Settings"].map(
                (item, i) => (
                  <li
                    key={item}
                    className={`rounded-md px-2 py-1.5 transition ${
                      i === 1
                        ? "bg-white/[0.06] text-white"
                        : "hover:bg-white/[0.03]"
                    }`}
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </aside>
          <div className="col-span-12 p-4 md:col-span-9 md:p-6">
            <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-[10.5px] uppercase tracking-[0.14em] text-foreground-subtle">
                  Last 7 days
                </div>
                <div className="tabular mt-0.5 text-lg font-semibold tracking-tight text-white">
                  47 new leads
                </div>
              </div>
              <Badge tone="success" dot>
                <Zap className="mr-1 h-3 w-3" />
                Pipeline live
              </Badge>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { l: "New", v: "12", t: "info" as const, color: "text-accent-3" },
                { l: "Qualified", v: "8", t: "brand" as const, color: "text-accent" },
                { l: "Won", v: "3", t: "success" as const, color: "text-success" },
              ].map((k) => (
                <div
                  key={k.l}
                  className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-3"
                >
                  <div className="text-[10.5px] uppercase tracking-[0.14em] text-foreground-subtle">
                    {k.l}
                  </div>
                  <div className={`tabular mt-1 text-2xl font-semibold ${k.color}`}>
                    {k.v}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 space-y-2">
              {[
                { n: "Marcus Reid", c: "Reid Fabrication Co.", s: "contacted" },
                { n: "Aiko Tanaka", c: "Kuromi Ramen", s: "qualified" },
                { n: "Daniel Okafor", c: "NorthRoute Logistics", s: "won" },
              ].map((row) => (
                <div
                  key={row.n}
                  className="flex items-center justify-between rounded-xl border border-white/[0.05] bg-white/[0.015] px-3 py-2.5 text-xs transition hover:bg-white/[0.03]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-accent/40 to-accent-2/40 text-[10px] font-semibold text-white ring-1 ring-white/10">
                      {row.n
                        .split(" ")
                        .map((p) => p[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-medium text-white">{row.n}</div>
                      <div className="text-foreground-subtle">{row.c}</div>
                    </div>
                  </div>
                  <Badge
                    tone={
                      row.s === "won"
                        ? "success"
                        : row.s === "qualified"
                        ? "brand"
                        : "info"
                    }
                    dot
                  >
                    {row.s}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
