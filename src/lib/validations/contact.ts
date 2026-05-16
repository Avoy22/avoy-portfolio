import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Tell me your name")
    .max(80, "That looks too long"),
  email: z.string().email("Use a valid email address"),
  company: z.string().max(120).optional().or(z.literal("")),
  message: z
    .string()
    .min(20, "Give me at least a sentence or two about what you're building.")
    .max(2000, "That's a lot — keep it under 2000 characters"),
  // Honeypot — should always be empty.
  website: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;
