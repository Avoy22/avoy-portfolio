import { NextResponse } from "next/server";
import { z } from "zod";
import {
  auditSchema,
  businessTypeOptions,
  bottleneckOptions,
  outcomeOptions,
  volumeOptions,
  type AuditInput,
} from "@/lib/validations/audit";
import { scoreAudit, type AuditResult } from "@/lib/audit/score";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type LeadInsert = {
  name: string;
  email: string;
  company: string | null;
  service: string;
  budget: string | null;
  message: string;
  status: string;
  source: string;
};

function labelFor<T extends readonly { value: string; label: string }[]>(
  opts: T,
  value: string
): string {
  return opts.find((o) => o.value === value)?.label ?? value;
}

function buildMessage(input: AuditInput, result: AuditResult): string {
  const lines = [
    "=== Automation Audit Submission ===",
    "",
    `Business type: ${labelFor(businessTypeOptions, input.business_type)}`,
    `Main bottleneck: ${labelFor(bottleneckOptions, input.main_bottleneck)}`,
    `Monthly volume: ${labelFor(volumeOptions, input.monthly_volume)}`,
    `Desired outcome: ${labelFor(outcomeOptions, input.desired_outcome)}`,
    "",
    "Current workflow:",
    input.current_workflow.trim(),
    "",
    `Current tools: ${input.current_tools.trim()}`,
    "",
    "=== Recommendation ===",
    `Score: ${result.score} (${result.band})`,
    `Recommended system: ${result.recommendedSystem}`,
    `Complexity: ${result.complexity}`,
    "",
    "Summary:",
    result.summary,
    "",
    "Suggested features:",
    ...result.features.map((f) => `• ${f}`),
  ];
  return lines.join("\n");
}

export async function POST(request: Request) {
  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const parsed = auditSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors = z.flattenError(parsed.error).fieldErrors;
    return NextResponse.json(
      { ok: false, error: "Validation failed.", fieldErrors },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Honeypot — silently accept with a stub result so bots don't probe further.
  if (data.website && data.website.length > 0) {
    const stub: AuditResult = {
      score: 0,
      band: "Foundational",
      recommendedSystem: "",
      recommendedSlug: "workflow-automation",
      features: [],
      complexity: "Low",
      summary: "",
    };
    return NextResponse.json({ ok: true, result: stub }, { status: 200 });
  }

  const result = scoreAudit(data);

  const payload: LeadInsert = {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    company: null,
    service: "Automation Audit",
    budget: null,
    message: buildMessage(data, result),
    status: "new",
    source: "automation-audit",
  };

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("leads").insert(payload);

    if (error) {
      console.error("[audit] supabase insert failed:", error.message);
      return NextResponse.json(
        { ok: false, error: "Could not save your audit. Please try again." },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("[audit] unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Could not save your audit. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, result }, { status: 200 });
}
