import { Resend } from "resend";

/**
 * Resend client — lazy-initialized so the app can build without
 * RESEND_API_KEY set. Only call `getResend()` from server runtimes.
 */
let cached: Resend | null = null;

export function getResend(): Resend {
  if (cached) return cached;
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    throw new Error("Missing RESEND_API_KEY in environment.");
  }
  cached = new Resend(key);
  return cached;
}

export const emailConfig = {
  from: process.env.RESEND_FROM ?? "Aboy Chandra Das <hello@avoydas.com>",
  replyTo: process.env.RESEND_REPLY_TO ?? "hello@avoydas.com",
  to: {
    notifications:
      process.env.RESEND_NOTIFY_TO ?? "hello@avoydas.com",
  },
};
