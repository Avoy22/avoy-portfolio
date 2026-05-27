"use client";

import { ArrowRight, ArrowUpRight, Gauge, Mail, FileText } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const entrance = (delay = 0, y = 12) => ({
    initial: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: prefersReducedMotion ? 0 : 0.55,
      delay: prefersReducedMotion ? 0 : delay,
      ease: [0.21, 0.47, 0.32, 0.98] as const,
    },
  });

  return (
    <section className="relative overflow-hidden pt-14 pb-18 sm:pt-18 sm:pb-24 lg:pt-24 lg:pb-30">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 grid-bg mask-[radial-gradient(ellipse_62%_50%_at_50%_30%,black,transparent_76%)] opacity-30 motion-reduce:animate-none"
      />
      <div
        aria-hidden
        className="hero-ambient pointer-events-none absolute -top-48 left-1/2 -z-10 h-180 w-[min(92vw,900px)] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(109,140,255,0.20),rgba(167,139,250,0.10)_38%,transparent_68%)] blur-3xl motion-reduce:animate-none"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-36 bg-[linear-gradient(to_top,var(--background),transparent)]"
      />

      <Container>
        <div className="flex flex-col items-center text-center">
          <motion.div
            {...entrance(0, 8)}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-[12px] font-medium text-foreground-muted backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-success shadow-[0_0_18px_rgba(52,211,153,0.7)]" />
            Available for dashboards, lead systems, and automation builds
          </motion.div>

          <motion.h1
            {...entrance(0.06)}
            className="max-w-4xl text-balance text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[56px] lg:text-[68px]"
          >
            <span className="text-gradient">
              Full-stack web apps for lead management, dashboards, CRM
              workflows, and automation.
            </span>
          </motion.h1>

          <motion.p
            {...entrance(0.12)}
            className="mt-6 max-w-2xl text-pretty text-[15.5px] leading-relaxed text-foreground-muted sm:mt-7 sm:text-[18px]"
          >
            I design and build deployed business systems with Next.js, React,
            TypeScript, Supabase, admin dashboards, CSV export, and clean user
            workflows.
          </motion.p>

          <motion.div
            {...entrance(0.18)}
            className="mt-9 grid w-full max-w-2xl grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 lg:flex lg:max-w-none lg:flex-wrap lg:items-center lg:justify-center"
          >
            <Button
              href="/projects"
              variant="primary"
              size="lg"
              className="w-full lg:w-auto"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              href="/resume"
              variant="outline"
              size="lg"
              className="w-full lg:w-auto"
            >
              <FileText className="h-4 w-4" />
              View Resume
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button
              href="/automation-audit"
              variant="secondary"
              size="lg"
              className="w-full lg:w-auto"
            >
              <Gauge className="h-4 w-4" />
              Run Automation Audit
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="w-full lg:w-auto"
            >
              <Mail className="h-4 w-4" />
              Contact Me
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Button>
          </motion.div>

          <motion.p
            {...entrance(0.26, 8)}
            className="mt-6 max-w-xl text-[12.5px] leading-relaxed text-foreground-subtle"
          >
            Explore real project workflows with database integration, protected
            admin routes, API handling, and deployed user interfaces.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
