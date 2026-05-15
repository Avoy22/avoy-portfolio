import { z } from "zod";

export const leadStatusEnum = z.enum([
  "new",
  "contacted",
  "qualified",
  "won",
  "lost",
]);

export const leadSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  name: z.string(),
  email: z.string().email(),
  company: z.string().optional(),
  budget: z.string().optional(),
  service: z.string().optional(),
  message: z.string(),
  status: leadStatusEnum,
  source: z.string().optional(),
  notes: z.string().optional(),
});

export type LeadInput = z.infer<typeof leadSchema>;
