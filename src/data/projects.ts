import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "servicepro-lead-engine",
    title: "ServicePro Lead Engine",
    tagline:
      "A full-stack lead capture and management system for service businesses — public contact form, Supabase-backed database, and a protected admin dashboard with status, notes, and CSV export.",
    client: "Portfolio project · home services use case",
    industry: "Lead Management / SaaS",
    year: 2025,
    status: "live",
    cover: "from-indigo-500/30 via-violet-500/20 to-cyan-500/20",
    accent: "#6d8cff",
    summary:
      "ServicePro Lead Engine is a deployed full-stack web application that handles the full lead lifecycle for a service business: a public marketing site and contact form, a Supabase database for storing leads, and a password-protected admin dashboard where leads can be searched, updated, annotated, and exported to CSV.",
    problem:
      "Service businesses often capture leads through generic contact forms that drop messages into a personal inbox. Without a structured place to store, track, and follow up on those leads, inquiries get missed, response times suffer, and there is no visibility into which leads are open, contacted, or won.",
    solution:
      "I built an end-to-end system around a typed Next.js App Router stack: a public contact form validated with Zod, a Supabase Postgres table for leads, transactional email via Resend, and a protected admin dashboard for managing the pipeline. The admin view supports search, filter, status updates, internal notes, and CSV export for hand-off to external tools.",
    outcomes: [
      "Centralizes every inbound lead in one source of truth instead of a personal inbox.",
      "Gives the team a structured status workflow (new, contacted, won, lost) with notes per lead.",
      "Provides CSV export so leads can be moved into spreadsheets, CRMs, or accounting tools.",
      "Removes manual triage by validating submissions and notifying the team automatically.",
    ],
    metrics: [
      { label: "Lead storage", value: "Supabase Postgres" },
      { label: "Admin access", value: "Protected route" },
      { label: "Export", value: "CSV" },
      { label: "Deployment", value: "Live on Vercel" },
    ],
    features: [
      "Public contact form with Zod validation and honeypot spam guard",
      "Supabase Postgres table for leads with row-level security",
      "Transactional email notifications via Resend on new submissions",
      "Password-protected admin dashboard for the lead pipeline",
      "Search, filter, status workflow, and per-lead notes",
      "CSV export endpoint for downstream tools",
      "Responsive UI tested on mobile and desktop",
    ],
    architecture: [
      "Next.js App Router with TypeScript end-to-end and server components for the admin views.",
      "Public form posts to a typed API route that runs Zod validation and a honeypot check before writing.",
      "Supabase Postgres stores leads; row-level security keeps reads scoped to the admin role.",
      "Resend sends transactional emails to the team when a new lead is captured.",
      "Admin dashboard is gated by a server-side auth check before any lead data is fetched.",
      "Deployed on Vercel with environment variables for Supabase keys and Resend credentials.",
    ],
    businessValue: [
      "Replaces an ad-hoc inbox-based workflow with a structured database the team can actually search.",
      "Cuts the chance of lost leads by capturing every submission in a single place with a clear status.",
      "Gives the owner a simple admin view to see what is open and what has been followed up on.",
      "Enables hand-off to other tools through CSV export, without locking the data into one platform.",
    ],
    learnings: [
      "Designing a Supabase schema with RLS up-front is faster than retrofitting auth later.",
      "Treating the admin dashboard as its own protected app — not a public route — kept the surface area small.",
      "Server-side validation with Zod combined with a honeypot field handled most spam without a third-party service.",
      "Keeping the contact form and admin dashboard in one Next.js project simplified deploy, env vars, and TypeScript types.",
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
    role: "Sole engineer — design, frontend, backend, database, and deploy",
    duration: "3 weeks (concept to production)",
    links: {
      live: "https://servicepro-lead-engine.vercel.app/",
      repo: "https://github.com/Avoy22/servicepro-lead-engine",
    },
    thumbnail: {
      src: "/screenshots/servicepro-dashboard.png",
      alt: "ServicePro Lead Engine admin dashboard showing lead records and status filters.",
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
        alt: "ServicePro Lead Engine admin dashboard showing lead records and status filters.",
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
      "A founder-friendly dashboard for tracking daily sales and expenses, visualising profit, and exporting reports — built so a small business can stop running its books out of disconnected spreadsheets.",
    client: "Portfolio project · small business operator use case",
    industry: "Business Analytics / Operations",
    year: 2025,
    status: "live",
    cover: "from-emerald-500/30 via-teal-500/20 to-cyan-500/20",
    accent: "#34d399",
    summary:
      "A deployed dashboard application that records daily sales and expenses, calculates profit and category breakdowns, and surfaces simple, decision-ready charts. Designed for a small business owner who wants real-time visibility without learning accounting software.",
    problem:
      "Small businesses often track sales in one spreadsheet and expenses in another. Margins are recalculated by hand at month end, so decisions about pricing, inventory, and spending lag the actual numbers. There is rarely a single place to see whether the business is profitable this week.",
    solution:
      "I built a focused dashboard that takes daily sales and expense entries and turns them into live KPI cards and trend charts. The data model is structured so categories, totals, and date ranges are queryable, and the UI is mobile-first so entries can be logged from the field.",
    outcomes: [
      "Brings sales, expenses, and profit into one live view instead of two separate spreadsheets.",
      "Surfaces category-level breakdowns so the owner can see which expense buckets are growing.",
      "Lets the team enter data from a phone, which removes the end-of-month spreadsheet cleanup.",
      "Provides export so the data can be shared with an accountant without re-keying anything.",
    ],
    metrics: [
      { label: "Data source", value: "Single dashboard" },
      { label: "View", value: "Real-time KPIs" },
      { label: "Reporting", value: "Charts + export" },
      { label: "Deployment", value: "Live on Vercel" },
    ],
    features: [
      "Daily sales and expense entry with category tagging",
      "Live KPI cards: revenue, expenses, gross profit",
      "Charts for revenue vs. expense trends and category breakdown",
      "Date-range filtering for weekly, monthly, and custom views",
      "Mobile-first responsive UI for field entry",
      "CSV-style export for accountant hand-off",
    ],
    architecture: [
      "Next.js App Router frontend rendering KPI cards and chart components from typed query results.",
      "Data layer designed around a sales table and an expenses table with category and date fields.",
      "Server-side aggregation calculates totals and trend buckets so the client only renders results.",
      "Role-aware UI surfaces — owner, manager, staff — read from the same underlying tables.",
      "Deployed on Vercel with environment variables holding the database credentials.",
    ],
    businessValue: [
      "Replaces multiple disconnected spreadsheets with one source of truth for revenue and spend.",
      "Makes profit visible day-to-day instead of waiting for a month-end reconciliation.",
      "Helps the owner spot expense categories that are eating into margin earlier than before.",
      "Supports faster decisions on pricing, inventory, and discretionary spend.",
    ],
    learnings: [
      "Doing the aggregation on the server kept the client UI fast even with months of entries.",
      "A simple category model is more useful than an over-engineered chart of accounts for a small operator.",
      "Mobile-first entry was the most important UX decision — desk-only data entry never gets done.",
      "Treating CSV export as a first-class feature made the dashboard fit into existing accountant workflows.",
    ],
    stack: [
      "Next.js App Router",
      "TypeScript",
      "Tailwind CSS",
      "Supabase (Postgres + RLS)",
      "Charting components",
      "Vercel",
    ],
    role: "Lead engineer — data model, dashboard UI, auth, and deploy",
    duration: "4 weeks",
    links: {
      live: "https://business-expense-sales-dashboard.vercel.app",
      repo: "https://github.com/Avoy22/business-expense-sales-dashboard",
    },
    thumbnail: {
      src: "/screenshots/business-dashboard-thumbnail.png",
      alt: "Business Expense and Sales Dashboard with KPI cards and charts.",
    },
    fullPageScreenshot: {
      src: "/screenshots/business-dashboard-full.png",
      alt: "Full-page screenshot of the Business Expense and Sales Dashboard.",
      caption: "Full dashboard screenshot",
      width: 750,
      height: 7980,
    },
    featured: true,
  },
  {
    slug: "ai-lead-tracker-crm",
    title: "AI Lead Tracker CRM",
    tagline:
      "A lightweight CRM dashboard for tracking leads, organising follow-ups, and managing the sales pipeline — built for freelancers and small teams who don't need a full Salesforce-style platform.",
    client: "Portfolio project · freelancer & small-business CRM use case",
    industry: "CRM / Sales Operations",
    year: 2025,
    status: "case-study",
    cover: "from-sky-500/30 via-emerald-500/20 to-amber-500/20",
    accent: "#38bdf8",
    summary:
      "AI Lead Tracker CRM is a focused CRM dashboard that lets a freelancer or small team capture leads, update their status across the sales pipeline, log notes, and search and filter records — all from one clean interface.",
    problem:
      "Freelancers and small businesses often track potential clients across notes apps, spreadsheets, messages, and inboxes. Without one place to see the pipeline, follow-ups slip and opportunities go cold. Existing CRMs are usually too heavy for a team of one or two people.",
    solution:
      "I built a streamlined CRM dashboard that focuses only on the core CRM workflow: add a lead, update its status, leave notes, and search the pipeline. The data structure is database-ready and can be backed by Google Sheets or a proper database depending on the user's setup.",
    outcomes: [
      "Gives users one place to see every active lead and its current status.",
      "Makes follow-ups easier to plan because notes and status live alongside the lead record.",
      "Reduces the chance of forgetting a prospect that came in through email or chat.",
      "Provides a more professional client-facing operation for solo operators and small teams.",
    ],
    metrics: [
      { label: "Workflow", value: "CRM pipeline" },
      { label: "Records", value: "Centralised" },
      { label: "Data layer", value: "Sheets or DB" },
      { label: "UI", value: "Responsive" },
    ],
    features: [
      "Lead capture and structured records",
      "CRM-style dashboard with pipeline view",
      "Lead status workflow across the sales stages",
      "Search and filtering by name, status, and source",
      "Per-lead notes for follow-up context",
      "Follow-up tracking so nothing goes cold",
      "Responsive UI for desktop and mobile",
      "Google Sheets or database-ready data structure",
    ],
    architecture: [
      "React + Tailwind CSS frontend for the dashboard and pipeline views.",
      "Data layer designed to plug into either Google Sheets (via Apps Script) or a Postgres-style database.",
      "Status workflow modelled as a small enum so pipeline stages stay consistent across views.",
      "Search and filter run client-side over the loaded lead set for snappy feedback.",
      "Deployed on Vercel with environment variables for the chosen data backend.",
    ],
    businessValue: [
      "Lets a freelancer manage the sales pipeline without paying for a full CRM platform.",
      "Reduces lost opportunities by giving every lead a status and notes in one place.",
      "Makes follow-ups easier to plan because the team can filter by status, not scroll through chats.",
      "Provides a starting point that scales from Google Sheets to a real database as the business grows.",
    ],
    learnings: [
      "Building around the CRM core (lead, status, note, follow-up) kept the scope small and the UI clean.",
      "Designing the data layer to support either Sheets or a database forced clean separation of concerns.",
      "Status enums beat free-text status fields — the pipeline view only works if everyone uses the same words.",
      "A responsive layout matters even for an internal tool, because most quick lookups happen on a phone.",
    ],
    stack: ["React", "Tailwind CSS", "Google Sheets", "Apps Script", "Vercel"],
    role: "Sole engineer — dashboard UI, lead workflow, data structure, and deploy",
    duration: "1 week",
    thumbnail: {
      src: "/screenshots/ai-lead-tracker-thumbnail.png",
      alt: "AI Lead Tracker CRM dashboard with lead records and status filters.",
    },
    fullPageScreenshot: {
      src: "/screenshots/ai-lead-tracker-full.png",
      alt: "Full-page screenshot of the AI Lead Tracker CRM dashboard.",
      caption: "Full CRM dashboard screenshot",
      width: 984,
      height: 7098,
    },
    featured: true,
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
