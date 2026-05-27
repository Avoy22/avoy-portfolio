"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ArrowRight,
  CircleCheck,
  Gauge,
  LoaderCircle,
  Sparkles,
  TriangleAlert,
  Wand2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Field, Input, Select, Textarea } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import {
  auditSchema,
  businessTypeOptions,
  bottleneckOptions,
  outcomeOptions,
  volumeOptions,
  type AuditInput,
} from "@/lib/validations/audit";
import type { AuditResult } from "@/lib/audit/score";

type ApiResponse = {
  ok: boolean;
  error?: string;
  fieldErrors?: Record<string, string[] | undefined>;
  result?: AuditResult;
};

const complexityTone: Record<
  AuditResult["complexity"],
  "success" | "warning" | "danger"
> = {
  Low: "success",
  Medium: "warning",
  High: "danger",
};

const bandTone: Record<AuditResult["band"], "info" | "brand" | "success"> = {
  Foundational: "info",
  Strong: "brand",
  Urgent: "success",
};

export function AuditForm() {
  const [result, setResult] = useState<AuditResult | null>(null);
  const [submittedName, setSubmittedName] = useState<string>("");
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<AuditInput>({
    resolver: zodResolver(auditSchema),
    defaultValues: {
      name: "",
      email: "",
      business_type: undefined,
      current_workflow: "",
      main_bottleneck: undefined,
      current_tools: "",
      monthly_volume: undefined,
      desired_outcome: undefined,
      website: "",
    },
  });

  async function onSubmit(values: AuditInput) {
    setSubmitError(null);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await res.json().catch(() => ({}))) as ApiResponse;

      if (!res.ok || !data.ok || !data.result) {
        if (data.fieldErrors) {
          for (const [field, messages] of Object.entries(data.fieldErrors)) {
            if (messages && messages.length > 0) {
              setError(field as keyof AuditInput, {
                type: "server",
                message: messages[0],
              });
            }
          }
        }
        setSubmitError(
          data.error ?? "Something went wrong. Please try again in a moment."
        );
        return;
      }

      setSubmittedName(values.name.trim().split(" ")[0]);
      setResult(data.result);
      reset();
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch {
      setSubmitError("Network error — check your connection and try again.");
    }
  }

  if (result) {
    return (
      <AuditResultCard
        result={result}
        name={submittedName}
        onReset={() => {
          setResult(null);
          setSubmittedName("");
        }}
      />
    );
  }

  return (
    <Card
      asChild
      className="glass-card rounded-2xl border-white/8 bg-transparent p-6 sm:p-8 lg:p-10"
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("website")}
      />

      <div className="mb-7 border-b border-white/6 pb-6">
        <h2 className="text-[22px] font-semibold tracking-[-0.02em] text-white">
          Tell me how the workflow works today
        </h2>
        <p className="mt-2 text-[13.5px] leading-relaxed text-foreground-muted">
          The result is generated from your answers using a transparent
          rule-based score.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Name"
          required
          htmlFor="name"
          error={errors.name?.message}
        >
          <Input
            id="name"
            placeholder="Your full name"
            autoComplete="name"
            {...register("name")}
          />
        </Field>
        <Field
          label="Email"
          required
          htmlFor="email"
          error={errors.email?.message}
        >
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            autoComplete="email"
            {...register("email")}
          />
        </Field>

        <div className="sm:col-span-2">
          <Field
            label="Business type"
            required
            htmlFor="business_type"
            error={errors.business_type?.message}
          >
            <Select
              id="business_type"
              defaultValue=""
              {...register("business_type")}
            >
              <option value="" disabled>
                Pick the closest fit…
              </option>
              {businessTypeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </Select>
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field
            label="Current manual workflow"
            required
            htmlFor="current_workflow"
            error={errors.current_workflow?.message}
            hint="What does the process look like today, step by step?"
          >
            <Textarea
              id="current_workflow"
              rows={5}
              placeholder="e.g. leads come in via Instagram DMs, we copy them into a Google Sheet, then send a quote email manually…"
              {...register("current_workflow")}
            />
          </Field>
        </div>

        <Field
          label="Main bottleneck"
          required
          htmlFor="main_bottleneck"
          error={errors.main_bottleneck?.message}
        >
          <Select
            id="main_bottleneck"
            defaultValue=""
            {...register("main_bottleneck")}
          >
            <option value="" disabled>
              Where does time leak most?
            </option>
            {bottleneckOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Select>
        </Field>

        <Field
          label="Approx. monthly volume"
          required
          htmlFor="monthly_volume"
          error={errors.monthly_volume?.message}
          hint="Leads, orders, tickets — whatever's the unit."
        >
          <Select
            id="monthly_volume"
            defaultValue=""
            {...register("monthly_volume")}
          >
            <option value="" disabled>
              Pick a range…
            </option>
            {volumeOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Select>
        </Field>

        <div className="sm:col-span-2">
          <Field
            label="Current tools"
            required
            htmlFor="current_tools"
            error={errors.current_tools?.message}
            hint="The actual stack you use today — be specific."
          >
            <Input
              id="current_tools"
              placeholder="Google Sheets, Gmail, Stripe, WhatsApp…"
              {...register("current_tools")}
            />
          </Field>
        </div>

        <div className="sm:col-span-2">
          <Field
            label="Desired outcome"
            required
            htmlFor="desired_outcome"
            error={errors.desired_outcome?.message}
          >
            <Select
              id="desired_outcome"
              defaultValue=""
              {...register("desired_outcome")}
            >
              <option value="" disabled>
                What would make this a win?
              </option>
              {outcomeOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </Select>
          </Field>
        </div>
      </div>

      {submitError && (
        <div
          role="alert"
          aria-live="polite"
          className="mt-6 flex items-start gap-3 rounded-2xl border border-danger/30 bg-danger/10 p-4 text-[13.5px] text-danger"
        >
          <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{submitError}</span>
        </div>
      )}

      <div className="mt-8 flex flex-col items-stretch justify-between gap-4 border-t border-white/6 pt-7 sm:flex-row sm:items-center">
        <p className="text-[12px] leading-relaxed text-foreground-subtle">
          Rule-based scoring — runs instantly, no AI tokens billed.
        </p>
        <Button
          type="submit"
          disabled={isSubmitting}
          aria-label="Run automation audit"
          size="lg"
          className="w-full sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Scoring…
            </>
          ) : (
            <>
              Run my audit
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </>
          )}
        </Button>
      </div>
      </form>
    </Card>
  );
}

function AuditResultCard({
  result,
  name,
  onReset,
}: {
  result: AuditResult;
  name: string;
  onReset: () => void;
}) {
  const pct = Math.max(0, Math.min(100, result.score));
  return (
    <Card className="glass-card rounded-2xl border-white/8 bg-transparent p-6 sm:p-8 lg:p-10" role="status" aria-live="polite">
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone={bandTone[result.band]} size="md" dot>
          {result.band} opportunity
        </Badge>
        <Badge tone={complexityTone[result.complexity]} size="md">
          {result.complexity} complexity
        </Badge>
      </div>

      <h2 className="mt-5 text-balance text-[28px] font-semibold leading-[1.1] tracking-[-0.02em] text-white sm:text-[34px]">
        {name ? `Here's your read, ${name}.` : "Here's your read."}
      </h2>
      <p className="mt-3 max-w-2xl text-[14.5px] leading-relaxed text-foreground-muted sm:text-[15.5px]">
        {result.summary}
      </p>

      <div className="mt-8 grid gap-5 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="rounded-2xl border border-white/8 bg-white/2 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-foreground-subtle">
              <Gauge className="h-3.5 w-3.5" />
              Automation opportunity score
            </div>
            <div className="mt-3 flex items-baseline gap-2">
              <span className="text-[56px] font-semibold leading-none tracking-[-0.04em] text-gradient">
                {pct}
              </span>
              <span className="text-sm text-foreground-subtle">/ 100</span>
            </div>
            <div className="mt-4 h-2 w-full overflow-hidden rounded-full border border-white/8 bg-white/4">
              <div
                aria-hidden
                className="h-full rounded-full bg-[linear-gradient(90deg,rgba(109,140,255,0.95)_0%,rgba(167,139,250,0.95)_55%,rgba(34,211,238,0.95)_100%)] transition-all duration-700"
                style={{ width: `${pct}%` }}
              />
            </div>
            <p className="mt-4 text-[12.5px] leading-relaxed text-foreground-subtle">
              Calculated from your bottleneck, volume, desired outcome, and
              business type. Higher = more leverage from automating now.
            </p>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="rounded-2xl border border-white/8 bg-white/2 p-5 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-foreground-subtle">
              <Wand2 className="h-3.5 w-3.5" />
              Recommended system
            </div>
            <h3 className="mt-2 text-[20px] font-semibold tracking-[-0.01em] text-white sm:text-[22px]">
              {result.recommendedSystem}
            </h3>
            <div className="mt-5">
              <div className="flex items-center gap-2 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-foreground-subtle">
                <Sparkles className="h-3.5 w-3.5" />
                Suggested features
              </div>
              <ul className="mt-3 grid gap-2.5">
                {result.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-foreground-muted"
                  >
                    <CircleCheck className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-stretch justify-between gap-4 border-t border-white/6 pt-7 sm:flex-row sm:items-center">
        <div>
          <p className="text-[14.5px] font-medium text-white">
            Want a tailored plan?
          </p>
          <p className="mt-1 text-[12.5px] text-foreground-subtle">
            I review every audit personally and reply within a day or two.
          </p>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <Button
            type="button"
            onClick={onReset}
            aria-label="Run another automation audit"
            variant="outline"
            size="md"
          >
            Run another
          </Button>
          <Button asChild size="md">
            <Link href="/contact">
              Contact me
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
