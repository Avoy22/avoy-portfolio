import { NextResponse } from "next/server";
import { z } from "zod";
import { contactSchema } from "@/lib/validations/contact";
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
  source: string;
};

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

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors = z.flattenError(parsed.error).fieldErrors;
    return NextResponse.json(
      { ok: false, error: "Validation failed.", fieldErrors },
      { status: 400 }
    );
  }

  const data = parsed.data;

  // Honeypot — silently accept so bots don't probe further.
  if (data.website && data.website.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const payload: LeadInsert = {
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    company: data.company ? data.company.trim() : null,
    service: data.service,
    budget: data.budget ? data.budget : null,
    message: data.message.trim(),
    source: "portfolio",
  };

  try {
    const supabase = getSupabaseAdmin();
    const { error } = await supabase.from("leads").insert(payload);

    if (error) {
      console.error("[contact] supabase insert failed:", error.message);
      return NextResponse.json(
        { ok: false, error: "Could not save your message. Please try again." },
        { status: 500 }
      );
    }
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return NextResponse.json(
      { ok: false, error: "Could not save your message. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
