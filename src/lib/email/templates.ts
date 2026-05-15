import type { ContactInput } from "@/lib/validations/contact";

/**
 * Plain-text email templates used by /api/contact.
 * Swap to react-email components in a later phase.
 */

export function teamNotificationEmail(input: ContactInput) {
  const lines = [
    "New lead via avoydas.com",
    "──────────────────────────",
    `Name:    ${input.name}`,
    `Email:   ${input.email}`,
    `Company: ${input.company || "—"}`,
    `Service: ${input.service || "—"}`,
    `Budget:  ${input.budget || "—"}`,
    "",
    "Message:",
    input.message,
  ];
  return {
    subject: `New lead — ${input.name}${input.company ? ` (${input.company})` : ""}`,
    text: lines.join("\n"),
  };
}

export function customerAutoReplyEmail(input: ContactInput) {
  return {
    subject: "Got your message — Avoy Das",
    text: [
      `Hi ${input.name.split(" ")[0]},`,
      "",
      "Thanks for reaching out — your message landed safely. I read every inbound personally and will get back to you within 24 hours.",
      "",
      "If it's urgent, just reply to this email.",
      "",
      "— Avoy",
    ].join("\n"),
  };
}
