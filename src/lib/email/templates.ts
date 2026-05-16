import type { ContactInput } from "@/lib/validations/contact";

export function teamNotificationEmail(input: ContactInput) {
  const lines = [
    "New message via avoydas.com",
    "──────────────────────────",
    `Name:    ${input.name}`,
    `Email:   ${input.email}`,
    `Company: ${input.company || "—"}`,
    "",
    "Message:",
    input.message,
  ];
  return {
    subject: `New message — ${input.name}${input.company ? ` (${input.company})` : ""}`,
    text: lines.join("\n"),
  };
}

export function customerAutoReplyEmail(input: ContactInput) {
  return {
    subject: "Got your message — Avoy Das",
    text: [
      `Hi ${input.name.split(" ")[0]},`,
      "",
      "Thanks for reaching out — your message landed safely. I read every inbound personally and will get back to you soon.",
      "",
      "If it's urgent, just reply to this email.",
      "",
      "— Avoy",
    ].join("\n"),
  };
}
