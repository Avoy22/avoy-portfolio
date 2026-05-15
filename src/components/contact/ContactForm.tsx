"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, CircleCheck, LoaderCircle } from "lucide-react";
import { Field, Input, Select, Textarea } from "@/components/ui/Input";
import {
  budgetOptions,
  contactSchema,
  serviceOptions,
  type ContactInput,
} from "@/lib/validations/contact";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      message: "",
      website: "",
    },
  });

  async function onSubmit(values: ContactInput) {
    // TODO: wire to /api/contact (Resend + Supabase) in next phase.
    await new Promise((r) => setTimeout(r, 800));
    if (process.env.NODE_ENV !== "production") {
      console.log("Contact submission:", values);
    }
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div className="glass-card relative overflow-hidden rounded-3xl p-10 text-center sm:p-12">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 left-1/2 h-75 w-75 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.18),transparent_60%)] blur-3xl"
        />
        <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-success/30 bg-success/10 text-success">
          <CircleCheck className="h-7 w-7" />
        </div>
        <h3 className="relative mt-6 text-2xl font-semibold tracking-tight text-white">
          Message received.
        </h3>
        <p className="relative mx-auto mt-3 max-w-md text-[14.5px] leading-relaxed text-foreground-muted">
          I read every inbound personally. Expect a reply within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="relative mt-7 text-[13.5px] text-foreground-muted underline-offset-4 transition hover:text-white hover:underline"
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
        <Field label="Company" htmlFor="company" error={errors.company?.message}>
          <Input
            id="company"
            placeholder="Optional"
            autoComplete="organization"
            {...register("company")}
          />
        </Field>
        <Field label="Budget" htmlFor="budget" error={errors.budget?.message}>
          <Select id="budget" defaultValue="" {...register("budget")}>
            <option value="" disabled>
              Pick a range
            </option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>
                {b}
              </option>
            ))}
          </Select>
        </Field>
        <div className="sm:col-span-2">
          <Field
            label="What are you trying to build?"
            htmlFor="service"
            error={errors.service?.message}
          >
            <Select id="service" defaultValue="" {...register("service")}>
              <option value="" disabled>
                Pick the closest match
              </option>
              {serviceOptions.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </Select>
          </Field>
        </div>
        <div className="sm:col-span-2">
          <Field
            label="Tell me more"
            required
            htmlFor="message"
            error={errors.message?.message}
            hint="Where you are, what's broken, what success looks like."
          >
            <Textarea
              id="message"
              rows={6}
              placeholder="We're a 12-person agency. Our intake form goes to a Gmail nobody owns. We need…"
              {...register("message")}
            />
          </Field>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-stretch justify-between gap-4 border-t border-white/6 pt-7 sm:flex-row sm:items-center">
        <p className="text-[12px] leading-relaxed text-foreground-subtle">
          By submitting, you agree to be contacted about your inquiry.
          <br className="hidden sm:block" />
          No newsletters, no list-stuffing — ever.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className={cn(
            "group relative inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-6 text-sm font-medium text-black shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_10px_28px_-10px_rgba(255,255,255,0.45)] transition hover:bg-zinc-100 active:translate-y-px sm:w-auto",
            isSubmitting && "opacity-70"
          )}
        >
          <span className="relative z-10 inline-flex items-center gap-2">
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
          </span>
          {!isSubmitting && (
            <span
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-[40%] -translate-x-full bg-linear-to-r from-transparent via-white/55 to-transparent opacity-0 transition-all duration-700 ease-out group-hover:translate-x-[260%] group-hover:opacity-100"
            />
          )}
        </button>
      </div>
    </form>
  );
}
