import { NextResponse } from "next/server";
import { verifyAdminRequest } from "@/lib/admin/auth";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import type { Lead } from "@/lib/admin/leads";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const auth = verifyAdminRequest(request);
  if (!auth.ok) {
    return NextResponse.json(
      { ok: false, error: auth.error },
      { status: auth.status }
    );
  }

  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("leads")
      .select(
        "id, name, email, company, service, budget, message, status, notes, source, created_at"
      )
      .order("created_at", { ascending: false })
      .limit(500);

    if (error) {
      console.error("[admin/leads] select failed:", error.message);
      return NextResponse.json(
        { ok: false, error: "Could not load leads." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, leads: (data ?? []) as Lead[] });
  } catch (err) {
    console.error("[admin/leads] unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Could not load leads." },
      { status: 500 }
    );
  }
}
