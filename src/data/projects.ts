import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "servicepro-lead-engine",
    title: "ServicePro Lead Engine",
    tagline: "An end-to-end lead intake, routing, and follow-up system for service businesses.",
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
      "Captured every single inbound lead in one place — zero leakage in the first 60 days.",
      "Cut average first-response time from 14 hours to under 25 minutes.",
      "Gave the founder a real-time pipeline view by status, source, and value.",
      "Removed three manual hand-offs between marketing, ops, and sales.",
    ],
    metrics: [
      { label: "First-response time", value: "−97%" },
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
    role: "Sole engineer — strategy, design system, frontend, backend, deploy",
    duration: "3 weeks (concept → production)",
    links: { live: "#", repo: undefined },
    gallery: [
      { caption: "Marketing hero with primary CTA", placeholder: "from-indigo-500/40 to-violet-500/30" },
      { caption: "Admin leads dashboard", placeholder: "from-violet-500/30 to-cyan-500/30" },
      { caption: "Lead detail with notes & status", placeholder: "from-cyan-500/30 to-indigo-500/30" },
    ],
    featured: true,
  },
  {
    slug: "business-expense-sales-dashboard",
    title: "Business Expense & Sales Dashboard",
    tagline: "A founder-friendly dashboard that turns scattered spreadsheets into a single financial source of truth.",
    client: "Independent retail & service operator",
    industry: "Retail / Operations",
    year: 2025,
    status: "live",
    cover: "from-emerald-500/30 via-teal-500/20 to-cyan-500/20",
    accent: "#34d399",
    summary:
      "An internal dashboard that ingests daily sales and expenses, calculates margins in real time, and surfaces the trends a founder actually needs to make decisions — without opening a single spreadsheet.",
    problem:
      "The owner was tracking sales in one spreadsheet, expenses in another, and margins were calculated by hand at the end of the month — too late to act on. Decisions were lagging the data by 30+ days.",
    solution:
      "A typed, role-based dashboard with daily entry, automatic category breakdowns, cash-flow charts, and weekly summaries. Built mobile-first so the team can log expenses from the field.",
    outcomes: [
      "Replaced 4 disconnected spreadsheets with a single live system.",
      "Reduced bookkeeping time from ~6 hours/week to ~45 minutes.",
      "Surfaced an underperforming product line that was eating 22% of margin.",
      "Gave the owner weekly automated summaries by email.",
    ],
    metrics: [
      { label: "Bookkeeping time saved", value: "−87%" },
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
    role: "Lead engineer — data model, dashboard UI, auth, deploy",
    duration: "4 weeks",
    links: { live: "#", repo: undefined },
    gallery: [
      { caption: "Owner overview with KPIs", placeholder: "from-emerald-500/40 to-teal-500/30" },
      { caption: "Expense entry flow", placeholder: "from-teal-500/30 to-cyan-500/30" },
      { caption: "Weekly summary email", placeholder: "from-cyan-500/30 to-emerald-500/30" },
    ],
    featured: true,
  },
  {
    slug: "restaurant-catering-website",
    title: "Restaurant Catering Website with Order Inquiry System",
    tagline: "A premium catering site that turns browsers into qualified, kitchen-ready inquiries.",
    client: "Independent catering kitchen",
    industry: "Hospitality / F&B",
    year: 2025,
    status: "live",
    cover: "from-amber-500/30 via-orange-500/20 to-rose-500/20",
    accent: "#fbbf24",
    summary:
      "A modern catering website with a structured order inquiry flow that captures event size, menu preferences, dietary needs, and date — then routes it to the kitchen with everything they need to quote in one pass.",
    problem:
      "The kitchen was getting catering inquiries through Instagram DMs, phone calls, and a basic contact form. Most were missing critical details (head count, dietary restrictions, date), so every quote required 2–3 rounds of back-and-forth before anything could be priced.",
    solution:
      "A premium-feeling marketing site paired with a multi-step order inquiry that collects everything the kitchen needs upfront. Inquiries land in a dashboard with status (new → quoted → confirmed → delivered), and an automated email confirms receipt to the customer instantly.",
    outcomes: [
      "Cut average inquiry-to-quote turnaround from 3 days to under 24 hours.",
      "Reduced back-and-forth messages by ~70% per booking.",
      "Increased qualified inquiries from the website by 2.4×.",
      "Gave the kitchen a single dashboard for all upcoming events.",
    ],
    metrics: [
      { label: "Quote turnaround", value: "−72%" },
      { label: "Qualified inquiries", value: "2.4×" },
      { label: "Back-and-forth", value: "−70%" },
      { label: "Kitchen visibility", value: "Unified" },
    ],
    features: [
      "Premium hero with menu highlights and gallery",
      "Multi-step inquiry: event details → menu → dietary → contact",
      "Auto-confirmation email to the customer",
      "Internal kitchen dashboard with event status workflow",
      "Calendar view of upcoming bookings",
      "Mobile-first design optimized for thumb-zone interaction",
    ],
    stack: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Supabase",
      "Resend",
      "Zod",
      "Vercel",
    ],
    role: "Sole designer & engineer",
    duration: "3 weeks",
    links: { live: "#", repo: undefined },
    gallery: [
      { caption: "Hero with menu highlights", placeholder: "from-amber-500/40 to-orange-500/30" },
      { caption: "Multi-step inquiry flow", placeholder: "from-orange-500/30 to-rose-500/30" },
      { caption: "Kitchen booking dashboard", placeholder: "from-rose-500/30 to-amber-500/30" },
    ],
    featured: true,
  },
  {
    slug: "shiplu-metal-workshop",
    title: "Shiplu Metal Workshop Website",
    tagline: "A trust-building website for a fabrication workshop that turns walk-in interest into qualified quote requests.",
    client: "Shiplu Metal Workshop",
    industry: "Manufacturing / Fabrication",
    year: 2025,
    status: "live",
    cover: "from-zinc-400/30 via-slate-400/20 to-blue-500/20",
    accent: "#a78bfa",
    summary:
      "A clean, industrial-feeling website that showcases the workshop's capabilities, displays a portfolio of past work, and routes quote requests through a structured form so the team can respond with accurate pricing fast.",
    problem:
      "The workshop had no online presence. New customers had no way to see capabilities or past work, and quote requests came in through unreliable channels with no consistency.",
    solution:
      "A mobile-first website that feels industrial but premium: capability sections, project gallery, a structured quote-request form, and clear contact pathways. Designed to build trust with both individual customers and B2B buyers.",
    outcomes: [
      "Brought the workshop online with a credible, professional brand presence.",
      "Standardized quote requests through a structured form.",
      "Surfaced past work in a portfolio that doubles as social proof.",
      "Optimized for fast load on low-bandwidth mobile connections.",
    ],
    metrics: [
      { label: "Time to first byte", value: "< 200ms" },
      { label: "Lighthouse performance", value: "98" },
      { label: "Quote-form completion", value: "Standardized" },
      { label: "Mobile usability", value: "100%" },
    ],
    features: [
      "Capability and services overview",
      "Visual portfolio of past fabrication work",
      "Structured quote-request form with project details",
      "Contact section with map and direct call CTA",
      "Mobile-first, low-bandwidth optimized",
      "SEO-ready with structured metadata",
    ],
    stack: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Zod",
      "Vercel",
    ],
    role: "Sole designer & engineer",
    duration: "2 weeks",
    links: { live: "#", repo: undefined },
    gallery: [
      { caption: "Workshop hero", placeholder: "from-zinc-400/40 to-slate-400/30" },
      { caption: "Portfolio of past work", placeholder: "from-slate-400/30 to-blue-500/30" },
      { caption: "Quote request flow", placeholder: "from-blue-500/30 to-zinc-400/30" },
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
