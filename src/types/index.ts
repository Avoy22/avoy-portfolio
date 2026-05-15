export type ProjectStatus = "live" | "in-development" | "case-study";

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  client: string;
  industry: string;
  year: number;
  status: ProjectStatus;
  cover: string;
  accent: string;
  summary: string;
  problem: string;
  solution: string;
  outcomes: string[];
  metrics: { label: string; value: string }[];
  features: string[];
  stack: string[];
  role: string;
  duration: string;
  links?: { live?: string; repo?: string };
  gallery?: { caption: string; placeholder: string }[];
  featured: boolean;
};

export type Service = {
  slug: string;
  title: string;
  icon: string;
  tagline: string;
  description: string;
  deliverables: string[];
  ideal: string;
  startingAt?: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: string;
};

export type TechItem = {
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "AI & Automation"
    | "DevOps"
    | "Tooling";
  level: "Core" | "Daily" | "Familiar";
};

export type LeadStatus = "new" | "contacted" | "qualified" | "won" | "lost";

export type Lead = {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  company?: string;
  budget?: string;
  service?: string;
  message: string;
  status: LeadStatus;
  source?: string;
  notes?: string;
};

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  service?: string;
  message: string;
};
