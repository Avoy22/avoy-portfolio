import { z } from "zod";

export const serviceOptions = [
  { value: "business-websites", label: "Business website" },
  { value: "lead-systems", label: "Lead management system" },
  { value: "business-dashboards", label: "Business dashboard" },
  { value: "workflow-automation", label: "Workflow automation" },
  { value: "other", label: "Something else / not sure" },
] as const;

export const budgetOptions = [
  { value: "under-2k", label: "Under $2k" },
  { value: "2k-5k", label: "$2k – $5k" },
  { value: "5k-10k", label: "$5k – $10k" },
  { value: "10k-plus", label: "$10k+" },
  { value: "unsure", label: "Not sure yet" },
] as const;

const serviceValues = serviceOptions.map((o) => o.value) as unknown as readonly [
  string,
  ...string[],
];

const budgetValues = budgetOptions.map((o) => o.value) as unknown as readonly [
  string,
  ...string[],
];

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Tell me your name")
    .max(80, "That looks too long"),
  email: z.email("Use a valid email address"),
  company: z.string().max(120).optional().or(z.literal("")),
  service: z.enum(serviceValues, {
    message: "Pick the service you're interested in",
  }),
  budget: z.enum(budgetValues).optional().or(z.literal("")),
  message: z
    .string()
    .min(20, "Give me at least a sentence or two about what you're building.")
    .max(2000, "That's a lot — keep it under 2000 characters"),
  // Honeypot — should always be empty.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
