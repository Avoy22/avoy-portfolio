import { z } from "zod";

// Supabase table this writes to. Create it with:
//
//   create table if not exists public.automation_audits (
//     id uuid primary key default gen_random_uuid(),
//     name text not null,
//     email text not null,
//     business_type text not null,
//     current_workflow text not null,
//     main_bottleneck text not null,
//     current_tools text not null,
//     monthly_volume text not null,
//     desired_outcome text not null,
//     score int not null,
//     recommended_system text not null,
//     complexity text not null,
//     features jsonb not null default '[]'::jsonb,
//     source text not null default 'portfolio',
//     created_at timestamptz not null default now()
//   );
//   alter table public.automation_audits enable row level security;

export const businessTypeOptions = [
  { value: "ecommerce", label: "E-commerce / online store" },
  { value: "agency", label: "Agency / consultancy" },
  { value: "service-business", label: "Local service business" },
  { value: "saas", label: "SaaS / software product" },
  { value: "real-estate", label: "Real estate / property" },
  { value: "restaurant", label: "Restaurant / hospitality" },
  { value: "healthcare", label: "Healthcare / wellness" },
  { value: "education", label: "Education / coaching" },
  { value: "other", label: "Something else" },
] as const;

export const bottleneckOptions = [
  { value: "lead-followup", label: "Following up on leads" },
  { value: "data-entry", label: "Manual data entry / spreadsheets" },
  { value: "customer-support", label: "Customer support / inbox triage" },
  { value: "order-processing", label: "Order or booking processing" },
  { value: "reporting", label: "Reporting & analytics" },
  { value: "scheduling", label: "Scheduling & coordination" },
  { value: "content-generation", label: "Content / proposal generation" },
  { value: "other", label: "Other" },
] as const;

export const volumeOptions = [
  { value: "under-50", label: "Under 50 / month" },
  { value: "50-200", label: "50 – 200 / month" },
  { value: "200-1000", label: "200 – 1,000 / month" },
  { value: "1000-5000", label: "1,000 – 5,000 / month" },
  { value: "5000-plus", label: "5,000+ / month" },
] as const;

export const outcomeOptions = [
  { value: "save-time", label: "Save time on busywork" },
  { value: "reduce-errors", label: "Reduce mistakes & missed work" },
  { value: "increase-revenue", label: "Capture more revenue" },
  { value: "scale-team", label: "Scale without more headcount" },
  { value: "improve-cx", label: "Improve customer experience" },
] as const;

const enumOf = <T extends readonly { value: string }[]>(opts: T) =>
  opts.map((o) => o.value) as unknown as readonly [string, ...string[]];

export const auditSchema = z.object({
  name: z.string().min(2, "Tell me your name").max(80, "That looks too long"),
  email: z.email("Use a valid email address"),
  business_type: z.enum(enumOf(businessTypeOptions), {
    message: "Pick the option that fits best",
  }),
  current_workflow: z
    .string()
    .min(20, "A sentence or two about your current process helps me score this.")
    .max(2000, "Keep it under 2000 characters"),
  main_bottleneck: z.enum(enumOf(bottleneckOptions), {
    message: "Pick your biggest bottleneck",
  }),
  current_tools: z
    .string()
    .min(2, "List at least one tool you use today")
    .max(500, "Keep tools under 500 characters"),
  monthly_volume: z.enum(enumOf(volumeOptions), {
    message: "Pick a rough volume range",
  }),
  desired_outcome: z.enum(enumOf(outcomeOptions), {
    message: "Pick the outcome that matters most",
  }),
  // Honeypot — should always be empty.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type AuditInput = z.infer<typeof auditSchema>;

export type BusinessType = (typeof businessTypeOptions)[number]["value"];
export type Bottleneck = (typeof bottleneckOptions)[number]["value"];
export type Volume = (typeof volumeOptions)[number]["value"];
export type Outcome = (typeof outcomeOptions)[number]["value"];
