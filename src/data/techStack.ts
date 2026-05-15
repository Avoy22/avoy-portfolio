import type { TechItem } from "@/types";

export const techStack: TechItem[] = [
  // Frontend
  { name: "Next.js 16", category: "Frontend", level: "Core" },
  { name: "React 19", category: "Frontend", level: "Core" },
  { name: "TypeScript", category: "Frontend", level: "Core" },
  { name: "Tailwind CSS v4", category: "Frontend", level: "Core" },
  { name: "Framer Motion", category: "Frontend", level: "Daily" },
  { name: "React Hook Form", category: "Frontend", level: "Daily" },
  { name: "Zod", category: "Frontend", level: "Core" },

  // Backend
  { name: "Node.js", category: "Backend", level: "Core" },
  { name: "Next.js API Routes", category: "Backend", level: "Core" },
  { name: "REST + Server Actions", category: "Backend", level: "Daily" },
  { name: "Webhooks", category: "Backend", level: "Daily" },

  // Database
  { name: "Supabase", category: "Database", level: "Core" },
  { name: "PostgreSQL", category: "Database", level: "Daily" },
  { name: "Row-Level Security", category: "Database", level: "Daily" },
  { name: "Prisma", category: "Database", level: "Familiar" },

  // AI & Automation
  { name: "Claude (Anthropic)", category: "AI & Automation", level: "Core" },
  { name: "Claude Agent SDK", category: "AI & Automation", level: "Daily" },
  { name: "Prompt Caching", category: "AI & Automation", level: "Daily" },
  { name: "Tool Use / Function Calling", category: "AI & Automation", level: "Daily" },
  { name: "OpenAI APIs", category: "AI & Automation", level: "Familiar" },

  // DevOps
  { name: "Vercel", category: "DevOps", level: "Core" },
  { name: "GitHub Actions", category: "DevOps", level: "Daily" },
  { name: "Sentry", category: "DevOps", level: "Daily" },
  { name: "Vercel Analytics", category: "DevOps", level: "Daily" },

  // Tooling
  { name: "Resend", category: "Tooling", level: "Core" },
  { name: "Stripe", category: "Tooling", level: "Daily" },
  { name: "Linear / Notion", category: "Tooling", level: "Daily" },
  { name: "Figma", category: "Tooling", level: "Daily" },
];

export const techCategories: TechItem["category"][] = [
  "Frontend",
  "Backend",
  "Database",
  "AI & Automation",
  "DevOps",
  "Tooling",
];

export function groupTechByCategory() {
  return techCategories.map((category) => ({
    category,
    items: techStack.filter((t) => t.category === category),
  }));
}
