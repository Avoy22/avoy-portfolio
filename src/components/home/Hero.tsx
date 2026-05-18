"use client";

import { ArrowRight, ArrowUpRight, Gauge, Mail, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-14 pb-18 sm:pt-18 sm:pb-24 lg:pt-24 lg:pb-30">
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
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/4 px-3 py-1.5 text-[12px] font-medium text-foreground-muted backdrop-blur"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Available for dashboards, lead systems, and automation builds
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl text-balance text-[38px] font-semibold leading-[1.05] tracking-[-0.03em] sm:text-[56px] lg:text-[68px]"
          >
            <span className="text-gradient">
              Practical web apps for lead capture, dashboards, and automation
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-6 max-w-2xl text-pretty text-[15.5px] leading-relaxed text-foreground-muted sm:mt-7 sm:text-[18px]"
          >
            I&apos;m a full-stack developer building clean business systems with
            Next.js, TypeScript, Supabase, and automation-friendly workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.14 }}
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
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="mt-6 max-w-xl text-[12.5px] leading-relaxed text-foreground-subtle"
          >
            No inflated metrics, no fake testimonials, just deployed work,
            readable case studies, and working contact/admin flows.
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
