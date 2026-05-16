import { NextResponse } from "next/server";
import { verifyAdminRequest } from "@/lib/admin/auth";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { leadsToCsv, type Lead } from "@/lib/admin/leads";

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
      .limit(5000);

    if (error) {
      console.error("[admin/leads/export] select failed:", error.message);
      return NextResponse.json(
        { ok: false, error: "Could not export leads." },
        { status: 500 }
      );
    }

    const csv = leadsToCsv((data ?? []) as Lead[]);
    // UTF-8 BOM so Excel opens special characters cleanly.
    const body = "﻿" + csv;

    const stamp = new Date().toISOString().slice(0, 10);

    return new NextResponse(body, {
      status: 200,
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="leads-${stamp}.csv"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("[admin/leads/export] unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Could not export leads." },
      { status: 500 }
    );
  }
}
