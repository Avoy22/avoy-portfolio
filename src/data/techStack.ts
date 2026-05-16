import type { TechItem } from "@/types";

export const techStack: TechItem[] = [
  { name: "Next.js", category: "Frontend", level: "Core" },
  { name: "React", category: "Frontend", level: "Core" },
  { name: "TypeScript", category: "Frontend", level: "Core" },
  { name: "Tailwind CSS", category: "Frontend", level: "Core" },

  { name: "Supabase", category: "Backend & Database", level: "Core" },
  { name: "Firebase", category: "Backend & Database", level: "Daily" },
  { name: "PostgreSQL", category: "Backend & Database", level: "Core" },

  { name: "Google Sheets", category: "Automation & Tools", level: "Daily" },
  { name: "Google Apps Script", category: "Automation & Tools", level: "Daily" },
  { name: "Resend", category: "Automation & Tools", level: "Core" },
  { name: "Zod", category: "Automation & Tools", level: "Core" },

  { name: "Vercel", category: "Deployment", level: "Core" },
  { name: "GitHub", category: "Deployment", level: "Daily" },
];

export const techCategories: TechItem["category"][] = [
  "Frontend",
  "Backend & Database",
  "Automation & Tools",
  "Deployment",
];

export function groupTechByCategory() {
  return techCategories.map((category) => ({
    category,
    items: techStack.filter((t) => t.category === category),
  }));
}
