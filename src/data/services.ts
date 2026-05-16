import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "business-websites",
    title: "Business Website Development",
    icon: "Globe",
    tagline:
      "Clean, fast marketing sites for small businesses and service providers.",
    description:
      "Modern, mobile-first websites built with Next.js and TypeScript. Designed to look professional, load quickly, and turn visitors into inquiries.",
    deliverables: [
      "Custom design tailored to your brand",
      "Mobile-first responsive layout",
      "SEO and Open Graph metadata",
      "Contact and inquiry forms",
      "Vercel deployment",
    ],
    ideal:
      "Small businesses and service providers who need a real online presence.",
  },
  {
    slug: "lead-systems",
    title: "Lead Management Systems",
    icon: "Magnet",
    tagline:
      "Capture, organize, and follow up on every inquiry in one place.",
    description:
      "End-to-end lead intake systems with a typed contact API, a database for storing inquiries, email notifications, and an internal view to manage status and notes.",
    deliverables: [
      "Conversion-focused inquiry form",
      "Type-safe API with validation",
      "Lead database with status workflow",
      "Email notifications for new leads",
      "Internal view for the team",
    ],
    ideal:
      "Service businesses losing leads in cluttered inboxes.",
  },
  {
    slug: "business-dashboards",
    title: "Business Dashboards",
    icon: "LayoutDashboard",
    tagline:
      "Single dashboards that replace scattered spreadsheets.",
    description:
      "Internal dashboards for sales, expenses, operations, or inventory. Built with role-based access and clean, readable charts so the team can act on the data.",
    deliverables: [
      "Data model and database schema",
      "Role-based authentication",
      "Live KPI cards and charts",
      "Daily entry and edit flows",
      "CSV export",
    ],
    ideal:
      "Founders and operators tired of stitching Google Sheets together.",
  },
  {
    slug: "workflow-automation",
    title: "Workflow Automation",
    icon: "Workflow",
    tagline:
      "Replace manual, repetitive work with simple automation.",
    description:
      "Automation workflows that connect your tools and remove the busywork between them — from inquiry routing to email handoffs and recurring data tasks.",
    deliverables: [
      "Workflow audit and design",
      "Webhooks and event triggers",
      "Email and notification automation",
      "Integration with your existing tools",
      "Documentation and handoff",
    ],
    ideal:
      "Teams with repetitive, manual processes that should be automated.",
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
