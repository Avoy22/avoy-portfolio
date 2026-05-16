import { NextResponse } from "next/server";
import { z } from "zod";
import { verifyAdminRequest } from "@/lib/admin/auth";
import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { leadStatuses, type Lead } from "@/lib/admin/leads";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const statusValues = leadStatuses as unknown as readonly [string, ...string[]];

const updateSchema = z
  .object({
    status: z.enum(statusValues).optional(),
    notes: z.string().max(5000).nullable().optional(),
  })
  .refine((v) => v.status !== undefined || v.notes !== undefined, {
    message: "Provide status or notes to update.",
  });

const idSchema = z.uuid();

export async function PATCH(
  request: Request,
  ctx: { params: Promise<{ id: string }> }
) {
  const auth = verifyAdminRequest(request);
  if (!auth.ok) {
    return NextResponse.json(
      { ok: false, error: auth.error },
      { status: auth.status }
    );
  }

  const { id } = await ctx.params;
  const idCheck = idSchema.safeParse(id);
  if (!idCheck.success) {
    return NextResponse.json(
      { ok: false, error: "Invalid lead id." },
      { status: 400 }
    );
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body." },
      { status: 400 }
    );
  }

  const parsed = updateSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "Validation failed." },
      { status: 400 }
    );
  }

  const update: Record<string, string | null> = {};
  if (parsed.data.status !== undefined) update.status = parsed.data.status;
  if (parsed.data.notes !== undefined) {
    update.notes =
      parsed.data.notes === null
        ? null
        : parsed.data.notes.trim() === ""
          ? null
          : parsed.data.notes.trim();
  }

  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("leads")
      .update(update)
      .eq("id", id)
      .select(
        "id, name, email, company, service, budget, message, status, notes, source, created_at"
      )
      .single();

    if (error) {
      console.error("[admin/leads/:id] update failed:", error.message);
      return NextResponse.json(
        { ok: false, error: "Could not update lead." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true, lead: data as Lead });
  } catch (err) {
    console.error("[admin/leads/:id] unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Could not update lead." },
      { status: 500 }
    );
  }
}
