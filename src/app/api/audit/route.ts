import { NextResponse } from "next/server";
import { z } from "zod";
import { auditSchema } from "@/lib/validations/audit";
import { scoreAudit, type AuditResult } from "@/lib/audit/score";
import { getSupabaseAdmin } from "@/lib/supabase/admin";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type AuditInsert = {
  name: string;
  email: string;
  business_type: string;
  current_workflow: string;
  main_bottleneck: string;
  current_tools: string;
  monthly_volume: string;
  desired_outcome: string;
  score: number;
  recommended_system: string;
  complexity: string;
  features: string[];
  source: string;
};

// Postgres error codes that mean "table missing" or "schema cache stale".
// In those cases the audit still returns a result to the visitor — the row
// just doesn't get persisted, and we log it loudly so it can be backfilled.
const MISSING_TABLE_CODES = new Set(["42P01", "PGRST205", "PGRST204"]);

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

  const payload: AuditInsert = {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    business_type: data.business_type,
    current_workflow: data.current_workflow.trim(),
    main_bottleneck: data.main_bottleneck,
    current_tools: data.current_tools.trim(),
    monthly_volume: data.monthly_volume,
    desired_outcome: data.desired_outcome,
    score: result.score,
    recommended_system: result.recommendedSystem,
    complexity: result.complexity,
    features: result.features,
    source: "portfolio-audit",
  };

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("automation_audits").insert(payload);

    if (error) {
      const code = (error as { code?: string }).code ?? "";
      if (MISSING_TABLE_CODES.has(code)) {
        console.error(
          "[audit] automation_audits table missing — returning result without persistence:",
          error.message
        );
        return NextResponse.json({ ok: true, result }, { status: 200 });
      }
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
