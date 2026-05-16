"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CircleCheck, LoaderCircle, TriangleAlert } from "lucide-react";
import { Field, Input, Select, Textarea } from "@/components/ui/Input";
import {
  budgetOptions,
  contactSchema,
  serviceOptions,
  type ContactInput,
} from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

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
      <div className="glass-card rounded-3xl p-10 text-center sm:p-12">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-success/30 bg-success/10 text-success">
          <CircleCheck className="h-7 w-7" />
        </div>
        <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">
          Message received.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[14.5px] leading-relaxed text-foreground-muted">
          I read every inbound personally. I&apos;ll get back to you soon.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-7 text-[13.5px] text-foreground-muted underline-offset-4 transition hover:text-white hover:underline"
        >
          Send another →
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="glass-card rounded-3xl p-6 sm:p-8 lg:p-10"
    >
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("website")}
      />

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
        <Field
          label="Company"
          htmlFor="company"
          error={errors.company?.message}
        >
          <Input
            id="company"
            placeholder="Optional"
            autoComplete="organization"
            {...register("company")}
          />
        </Field>
        <Field
          label="Service"
          required
          htmlFor="service"
          error={errors.service?.message}
        >
          <Select id="service" defaultValue="" {...register("service")}>
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
            <Select id="budget" defaultValue="" {...register("budget")}>
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
              {...register("message")}
            />
          </Field>
        </div>
      </div>

      {submitError && (
        <div
          role="alert"
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
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-medium text-black shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_8px_24px_-10px_rgba(255,255,255,0.4)] transition hover:bg-zinc-100 sm:w-auto",
            isSubmitting && "opacity-70"
          )}
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
        </button>
      </div>
    </form>
  );
}
