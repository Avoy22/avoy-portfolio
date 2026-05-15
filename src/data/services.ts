import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "lead-engines",
    title: "Lead Generation Engines",
    icon: "Magnet",
    tagline: "End-to-end lead intake systems that capture, route, and convert.",
    description:
      "I design and ship complete lead engines: a high-converting marketing site, a typed contact API, a Supabase-backed leads database, instant Resend notifications, and an admin dashboard your team will actually use.",
    deliverables: [
      "Conversion-optimized marketing site",
      "Type-safe lead intake API with spam protection",
      "Supabase schema with RLS and auth",
      "Transactional emails (team + customer)",
      "Admin dashboard with status, notes, export",
      "Docs + Loom walkthrough",
    ],
    ideal: "Service businesses, agencies, and operators losing leads in inboxes.",
    startingAt: "From $3,500",
  },
  {
    slug: "business-dashboards",
    title: "Internal Dashboards & Admin Panels",
    icon: "LayoutDashboard",
    tagline: "Single-source-of-truth dashboards that replace your spreadsheets.",
    description:
      "Custom dashboards for sales, expenses, operations, or inventory — built with role-based access, real-time KPIs, and clean, founder-friendly UX. Designed so the people closest to the work can act on the data.",
    deliverables: [
      "Data model and Supabase schema",
      "Role-based authentication",
      "Live KPI cards and charts",
      "Daily entry / mutation flows",
      "CSV export and weekly digests",
      "Mobile-first responsive UI",
    ],
    ideal: "Founders and operators tired of stitching Google Sheets together.",
    startingAt: "From $4,500",
  },
  {
    slug: "business-websites",
    title: "Premium Business Websites",
    icon: "Globe",
    tagline: "Marketing sites that look like a Series-A SaaS — for any industry.",
    description:
      "Premium, conversion-tuned marketing sites for service businesses, restaurants, workshops, and B2B operators. SEO-ready, mobile-first, and built on a stack you can extend without rewriting.",
    deliverables: [
      "Brand-aligned design system",
      "5–8 page marketing site",
      "SEO + Open Graph metadata",
      "Structured contact / inquiry form",
      "Analytics-ready",
      "Vercel deployment",
    ],
    ideal: "Businesses ready to graduate from a template to a real online presence.",
    startingAt: "From $2,500",
  },
  {
    slug: "booking-systems",
    title: "Booking & Inquiry Systems",
    icon: "CalendarCheck",
    tagline: "Structured booking flows that pre-qualify the request before it hits your inbox.",
    description:
      "Multi-step booking and inquiry flows tailored to your offering — events, catering, consultations, fabrications, services. Routes complete, kitchen-ready (or sales-ready) requests to your team.",
    deliverables: [
      "Multi-step inquiry / booking form",
      "Validation with Zod + React Hook Form",
      "Email confirmations to customer + team",
      "Status workflow in admin",
      "Calendar view of upcoming bookings",
      "Mobile-optimized UX",
    ],
    ideal: "Restaurants, caterers, workshops, consultants, and service providers.",
    startingAt: "From $3,000",
  },
  {
    slug: "ai-automation",
    title: "AI & Workflow Automation",
    icon: "Workflow",
    tagline: "AI-powered workflows that eliminate the busywork between tools.",
    description:
      "Custom automations that connect your stack: lead scoring, email drafting, document parsing, content generation, internal copilots. Built with the latest Claude models and your existing data.",
    deliverables: [
      "Workflow audit + automation design",
      "Claude API integration",
      "Custom prompt + tool design",
      "Webhooks and event triggers",
      "Cost monitoring + caching",
      "Internal docs + handoff",
    ],
    ideal: "Teams with repetitive, judgment-based work that's not yet automated.",
    startingAt: "From $4,000",
  },
  {
    slug: "fractional-engineering",
    title: "Fractional AI Engineering",
    icon: "Cpu",
    tagline: "An on-tap senior engineer for your AI and web product roadmap.",
    description:
      "Embedded part-time engineering for early-stage teams: shipping product, integrating AI, and unblocking your roadmap. Async-first, weekly syncs, monthly reviews.",
    deliverables: [
      "Weekly delivery cadence",
      "Roadmap + sprint planning",
      "Code reviews + mentoring",
      "Architecture + infra decisions",
      "Direct Slack / Linear access",
    ],
    ideal: "Pre-seed and seed-stage founders shipping AI-native products.",
    startingAt: "Monthly retainer",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
