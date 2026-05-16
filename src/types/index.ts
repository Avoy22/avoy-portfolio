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
  thumbnail?: {
    src: string;
    alt: string;
  };
  fullPageScreenshot?: {
    src: string;
    alt: string;
    caption: string;
    width: number;
    height: number;
  };
  gallery?: {
    caption: string;
    placeholder?: string;
    src?: string;
    alt?: string;
    width?: number;
    height?: number;
  }[];
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

export type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  message: string;
};
