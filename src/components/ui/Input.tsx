import { forwardRef } from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const baseField =
  "w-full rounded-xl border border-white/10 bg-white/3 px-4 py-3 text-[14.5px] text-foreground placeholder:text-foreground-subtle shadow-xs outline-none transition-all duration-200 hover:border-white/20 hover:bg-white/4 focus:border-accent/60 focus:bg-white/5 focus:ring-4 focus:ring-accent/15 focus:shadow-[0_0_0_1px_rgba(109,140,255,0.12)_inset] disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-danger/60 aria-invalid:ring-danger/20";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ className, ...props }, ref) {
    return (
      <input
        ref={ref}
        data-slot="input"
        className={cn(baseField, className)}
        {...props}
      />
    );
  }
);

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ className, ...props }, ref) {
    return (
      <textarea
        ref={ref}
        data-slot="textarea"
        className={cn(baseField, "min-h-32 resize-y leading-relaxed", className)}
        {...props}
      />
    );
  }
);

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select({ className, children, ...props }, ref) {
    return (
      <div className="relative">
        <select
          ref={ref}
          data-slot="select"
          className={cn(
            baseField,
            "appearance-none pr-10 [&>option]:bg-background [&>option]:text-foreground",
            className
          )}
          {...props}
        >
          {children}
        </select>
        <ChevronDown
          aria-hidden
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-foreground-subtle"
        />
      </div>
    );
  }
);

type FieldProps = {
  label: string;
  hint?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
  htmlFor?: string;
};

export function Field({
  label,
  hint,
  error,
  required,
  children,
  htmlFor,
}: FieldProps) {
  return (
    <label htmlFor={htmlFor} className="flex flex-col gap-2">
      <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground-muted">
        {label}
        {required && <span className="ml-1 text-accent">*</span>}
      </span>
      {children}
      {hint && !error && (
        <span className="text-[12px] text-foreground-subtle">{hint}</span>
      )}
      {error && <span className="text-[12px] text-danger">{error}</span>}
    </label>
  );
}
