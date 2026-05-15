import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "servicepro-lead-engine",
    title: "ServicePro Lead Engine",
    tagline:
      "An end-to-end lead intake, routing, and follow-up system for service businesses.",
    client: "ServicePro (multi-trade home services)",
    industry: "Home Services / SaaS",
    year: 2025,
    status: "live",
    cover: "from-indigo-500/30 via-violet-500/20 to-cyan-500/20",
    accent: "#6d8cff",
    summary:
      "A production lead engine that captures inquiries from a high-converting marketing site, validates them with Zod, stores them in Supabase, notifies the team via Resend, and exposes everything through a clean admin dashboard with status, notes, and CSV export.",
    problem:
      "ServicePro was bleeding leads. Inquiries came in through a generic contact form, landed in a personal Gmail inbox, and got lost between three different team members. There was no source of truth, no follow-up SLA, and no visibility into pipeline health.",
    solution:
      "I designed and shipped a single system that owns the entire lead lifecycle: a conversion-optimized marketing site, a typed contact API with spam protection, a Supabase-backed leads table with status workflow, instant Resend notifications, and an internal dashboard the team uses every day.",
    outcomes: [
      "Captured every single inbound lead in one place - zero leakage in the first 60 days.",
      "Cut average first-response time from 14 hours to under 25 minutes.",
      "Gave the founder a real-time pipeline view by status, source, and value.",
      "Removed three manual hand-offs between marketing, ops, and sales.",
    ],
    metrics: [
      { label: "First-response time", value: "-97%" },
      { label: "Lead capture rate", value: "+38%" },
      { label: "Manual hand-offs removed", value: "3" },
      { label: "Pipeline visibility", value: "Real-time" },
    ],
    features: [
      "Marketing site with conversion-tuned hero, services, and proof sections",
      "Type-safe contact API with Zod validation and honeypot spam guard",
      "Supabase schema with row-level security for leads, notes, and statuses",
      "Resend transactional emails to both team and prospect",
      "Admin dashboard with search, filter, status, notes, and CSV export",
      "Mobile-first responsive design tested across iOS and Android",
    ],
    stack: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Resend",
      "Zod",
      "React Hook Form",
      "Framer Motion",
      "Vercel",
    ],
    role: "Sole engineer - strategy, design system, frontend, backend, deploy",
    duration: "3 weeks (concept to production)",
    links: {
      live: "https://servicepro-lead-engine.vercel.app/",
      repo: "https://github.com/Avoy22/servicepro-lead-engine",
    },
    thumbnail: {
      src: "/screenshots/servicepro-dashboard.png",
      alt: "ServicePro Lead Engine admin dashboard showing lead metrics and recent inquiries.",
    },
    fullPageScreenshot: {
      src: "/screenshots/servicepro-home-full.png",
      alt: "Full-page screenshot of the ServicePro Lead Engine marketing homepage.",
      caption: "Full marketing homepage",
      width: 2880,
      height: 11616,
    },
    gallery: [
      {
        caption: "Marketing homepage",
        src: "/screenshots/servicepro-home-full.png",
        alt: "Full-page screenshot of the ServicePro Lead Engine marketing homepage.",
        width: 2880,
        height: 11616,
      },
      {
        caption: "Admin leads dashboard",
        src: "/screenshots/servicepro-dashboard.png",
        alt: "ServicePro Lead Engine admin dashboard showing lead metrics and recent inquiries.",
        width: 1901,
        height: 887,
      },
    ],
    featured: true,
  },
  {
    slug: "business-expense-sales-dashboard",
    title: "Business Expense & Sales Dashboard",
    tagline:
      "A founder-friendly dashboard that turns scattered spreadsheets into a single financial source of truth.",
    client: "Independent retail & service operator",
    industry: "Retail / Operations",
    year: 2025,
    status: "live",
    cover: "from-emerald-500/30 via-teal-500/20 to-cyan-500/20",
    accent: "#34d399",
    summary:
      "An internal dashboard that ingests daily sales and expenses, calculates margins in real time, and surfaces the trends a founder actually needs to make decisions - without opening a single spreadsheet.",
    problem:
      "The owner was tracking sales in one spreadsheet, expenses in another, and margins were calculated by hand at the end of the month - too late to act on. Decisions were lagging the data by 30+ days.",
    solution:
      "A typed, role-based dashboard with daily entry, automatic category breakdowns, cash-flow charts, and weekly summaries. Built mobile-first so the team can log expenses from the field.",
    outcomes: [
      "Replaced 4 disconnected spreadsheets with a single live system.",
      "Reduced bookkeeping time from ~6 hours/week to ~45 minutes.",
      "Surfaced an underperforming product line that was eating 22% of margin.",
      "Gave the owner weekly automated summaries by email.",
    ],
    metrics: [
      { label: "Bookkeeping time saved", value: "-87%" },
      { label: "Hidden margin recovered", value: "+22%" },
      { label: "Spreadsheets replaced", value: "4" },
      { label: "Decision latency", value: "Real-time" },
    ],
    features: [
      "Daily sales and expense entry with category tagging",
      "Live KPI cards: revenue, expenses, gross margin, runway",
      "Charts for revenue vs. expense trends and category breakdown",
      "Role-based access (owner, manager, staff)",
      "Weekly email digest with delta vs. prior week",
      "CSV export for accountant hand-off",
    ],
    stack: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Supabase (Postgres + RLS)",
      "Recharts-style data viz",
      "Resend (digests)",
      "Vercel",
    ],
    role: "Lead engineer - data model, dashboard UI, auth, deploy",
    duration: "4 weeks",
    links: {
      live: "https://business-expense-sales-dashboard.vercel.app",
      repo: "https://github.com/Avoy22/business-expense-sales-dashboard",
    },
    gallery: [
      {
        caption: "Owner overview with KPIs",
        placeholder: "from-emerald-500/40 to-teal-500/30",
      },
      {
        caption: "Expense entry flow",
        placeholder: "from-teal-500/30 to-cyan-500/30",
      },
      {
        caption: "Weekly summary email",
        placeholder: "from-cyan-500/30 to-emerald-500/30",
      },
    ],
    featured: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
