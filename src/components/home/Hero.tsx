"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Gauge } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28 lg:pt-28 lg:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-bg mask-[radial-gradient(ellipse_60%_50%_at_50%_30%,black,transparent_75%)] opacity-30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-180 w-180 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(109,140,255,0.18),transparent_60%)] blur-3xl"
      />

      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl text-balance text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[56px] lg:text-[72px]"
          >
            <span className="text-gradient">
              AI Automation &amp; Full-Stack Web Developer
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-6 max-w-2xl text-pretty text-[15.5px] leading-relaxed text-foreground-muted sm:mt-7 sm:text-[18px]"
          >
            I build business websites, dashboards, lead systems, and automation
            tools for small businesses and service providers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14 }}
            className="mt-9 flex w-full flex-col items-stretch gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center"
          >
            <Link
              href="/projects"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm font-medium text-black shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_8px_24px_-10px_rgba(255,255,255,0.4)] transition hover:bg-zinc-100"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/resume"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/3 px-7 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/6"
            >
              View Resume
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/contact"
              className="group inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/3 px-7 text-sm font-medium text-white backdrop-blur transition hover:border-white/30 hover:bg-white/6"
            >
              Contact Me
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-6 sm:mt-7"
          >
            <Link
              href="/automation-audit"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/3 px-4 py-2 text-[13px] text-foreground-muted backdrop-blur transition hover:border-white/25 hover:bg-white/6 hover:text-white"
            >
              <Gauge className="h-3.5 w-3.5" />
              Not sure where to start? Find Automation Opportunities
              <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
