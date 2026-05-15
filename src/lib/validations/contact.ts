import { z } from "zod";

export const budgetOptions = [
  "Not sure yet",
  "Under $2k",
  "$2k–$5k",
  "$5k–$10k",
  "$10k+",
] as const;

export const serviceOptions = [
  "Lead Generation Engine",
  "Internal Dashboard",
  "Premium Business Website",
  "Booking & Inquiry System",
  "AI & Automation",
  "Fractional AI Engineering",
  "Something else",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Tell me your name")
    .max(80, "That looks too long"),
  email: z.string().email("Use a valid email address"),
  company: z.string().max(120).optional().or(z.literal("")),
  budget: z.enum(budgetOptions).optional(),
  service: z.enum(serviceOptions).optional(),
  message: z
    .string()
    .min(20, "Give me at least a sentence or two — what are you trying to ship?")
    .max(2000, "That's a lot — keep it under 2000 characters"),
  // Honeypot — should always be empty.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
