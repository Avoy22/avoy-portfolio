"use client";

import { useState } from "react";
import { ArrowRight, LoaderCircle, Lock, TriangleAlert } from "lucide-react";
import { Field, Input } from "@/components/ui/Input";
import { cn } from "@/lib/utils";

type Props = {
  onUnlock: (token: string) => Promise<void> | void;
};

export function AdminGate({ onUnlock }: Props) {
  const [token, setToken] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (token.trim().length === 0 || busy) return;
    setError(null);
    setBusy(true);

    try {
      const res = await fetch("/api/admin/leads", {
        headers: { Authorization: `Bearer ${token.trim()}` },
        cache: "no-store",
      });

      if (res.status === 401) {
        setError("That token didn't work. Try again.");
        return;
      }
      if (!res.ok) {
        setError("Server error verifying token. Try again in a moment.");
        return;
      }

      await onUnlock(token.trim());
    } catch {
      setError("Network error — check your connection.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mx-auto w-full max-w-md">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="glass-card rounded-3xl p-6 sm:p-8"
      >
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/4 text-white">
          <Lock className="h-4 w-4" />
        </div>
        <h1 className="mt-5 text-xl font-semibold tracking-tight text-white">
          Admin access
        </h1>
        <p className="mt-2 text-[13.5px] leading-relaxed text-foreground-muted">
          Enter your admin token to view leads. Your token is kept in this
          browser tab&apos;s session only.
        </p>

        <div className="mt-6">
          <Field label="Admin token" required htmlFor="admin-token">
            <Input
              id="admin-token"
              type="password"
              autoComplete="off"
              autoFocus
              placeholder="••••••••••••"
              value={token}
              onChange={(e) => setToken(e.target.value)}
            />
          </Field>
        </div>

        {error && (
          <div
            role="alert"
            className="mt-4 flex items-start gap-3 rounded-2xl border border-danger/30 bg-danger/10 p-3 text-[13px] text-danger"
          >
            <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={busy || token.trim().length === 0}
          className={cn(
            "group mt-6 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-black transition hover:bg-zinc-100",
            (busy || token.trim().length === 0) && "opacity-60"
          )}
        >
          {busy ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Checking…
            </>
          ) : (
            <>
              Unlock
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
