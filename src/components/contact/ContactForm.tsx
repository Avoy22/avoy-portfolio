"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CircleCheck, LoaderCircle, TriangleAlert } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Field, Input, Select, Textarea } from "@/components/ui/Input";
import {
  budgetOptions,
  contactSchema,
  serviceOptions,
  type ContactInput,
} from "@/lib/validations/contact";

type ApiResponse = {
  ok: boolean;
  error?: string;
  fieldErrors?: Record<string, string[] | undefined>;
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      service: undefined,
      budget: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(values: ContactInput) {
    setSubmitError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = (await res.json().catch(() => ({}))) as ApiResponse;

      if (!res.ok || !data.ok) {
        if (data.fieldErrors) {
          for (const [field, messages] of Object.entries(data.fieldErrors)) {
            if (messages && messages.length > 0) {
              setError(field as keyof ContactInput, {
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

      setSubmitted(true);
      reset();
    } catch {
      setSubmitError(
        "Network error — check your connection and try again."
      );
    }
  }

  if (submitted) {
    return (
      <Card className="glass-card rounded-2xl border-white/8 bg-transparent p-10 text-center shadow-[0_24px_70px_-45px_rgba(52,211,153,0.45)] sm:p-12" role="status" aria-live="polite">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-success/30 bg-success/10 text-success">
          <CircleCheck className="h-7 w-7" />
        </div>
        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
          Message received.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[14.5px] leading-relaxed text-foreground-muted">
          I read every inbound personally. I&apos;ll get back to you soon.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          type="button"
          variant="link"
          className="mx-auto mt-7 text-[13.5px]"
        >
          Send another →
        </Button>
      </Card>
    );
  }

  return (
    <Card
      asChild
      className="glass-card rounded-2xl border-white/8 bg-transparent p-6 transition-colors duration-300 focus-within:border-accent/30 sm:p-8 lg:p-10"
    >
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
      {/* Honeypot — hidden from real users */}
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
          Project inquiry
        </h2>
        <p className="mt-2 text-[13.5px] leading-relaxed text-foreground-muted">
          Share the goal, current tools, and where the workflow is getting
          stuck.
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
            aria-invalid={!!errors.name}
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
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </Field>
        <Field
          label="Company"
          htmlFor="company"
          error={errors.company?.message}
        >
          <Input
            id="company"
            placeholder="Optional"
            autoComplete="organization"
            aria-invalid={!!errors.company}
            {...register("company")}
          />
        </Field>
        <Field
          label="Service"
          required
          htmlFor="service"
          error={errors.service?.message}
        >
          <Select
            id="service"
            defaultValue=""
            aria-invalid={!!errors.service}
            {...register("service")}
          >
            <option value="" disabled>
              Pick one…
            </option>
            {serviceOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </Select>
        </Field>
        <div className="sm:col-span-2">
          <Field
            label="Budget"
            htmlFor="budget"
            error={errors.budget?.message}
            hint="Optional — helps me scope the right approach."
          >
            <Select
              id="budget"
              defaultValue=""
              aria-invalid={!!errors.budget}
              {...register("budget")}
            >
              <option value="">No preference</option>
              {budgetOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </Select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field
            label="What are you trying to build?"
            required
            htmlFor="message"
            error={errors.message?.message}
            hint="A few sentences about your project is enough to start."
          >
            <Textarea
              id="message"
              rows={6}
              placeholder="I'm building a small business website / lead system / dashboard and need help with…"
              aria-invalid={!!errors.message}
              {...register("message")}
            />
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
          By submitting, you agree to be contacted about your inquiry.
        </p>
        <Button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          aria-label="Send project inquiry"
          size="lg"
          className="w-full sm:w-auto"
        >
          {isSubmitting ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Sending…
            </>
          ) : (
            <>
              Send message
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </>
          )}
        </Button>
      </div>
      </form>
    </Card>
  );
}
