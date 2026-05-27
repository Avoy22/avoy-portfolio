import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

type Tone = "neutral" | "success" | "warning" | "danger" | "brand" | "info";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof badgeVariants> & {
  tone?: Tone;
  size?: "sm" | "md";
  dot?: boolean;
};

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border font-medium tracking-tight backdrop-blur transition-colors focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
  {
    variants: {
      variant: {
        neutral: "border-white/10 bg-white/4 text-foreground-muted",
        brand: "border-accent/25 bg-accent/10 text-accent",
        success: "border-success/25 bg-success/10 text-success",
        warning: "border-warning/25 bg-warning/10 text-warning",
        danger: "border-danger/25 bg-danger/10 text-danger",
        info: "border-accent-3/25 bg-accent-3/10 text-accent-3",
      },
      size: {
        sm: "px-2.5 py-0.5 text-[11px]",
        md: "px-3 py-1 text-xs",
      },
    },
    defaultVariants: {
      variant: "neutral",
      size: "sm",
    },
  }
);

const dotColor: Record<Tone, string> = {
  neutral: "bg-foreground-muted",
  brand: "bg-accent",
  success: "bg-success",
  warning: "bg-warning",
  danger: "bg-danger",
  info: "bg-accent-3",
};

export function Badge({
  tone = "neutral",
  variant,
  size = "sm",
  dot = false,
  className,
  children,
  ...rest
}: BadgeProps) {
  const selectedTone = (variant ?? tone) as Tone;

  return (
    <span
      data-slot="badge"
      className={cn(badgeVariants({ variant: selectedTone, size, className }))}
      {...rest}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          {(selectedTone === "success" || selectedTone === "brand") && (
            <span
              className={cn(
                "absolute inline-flex h-full w-full rounded-full opacity-60 animate-pulse-soft",
                dotColor[selectedTone]
              )}
            />
          )}
          <span
            className={cn(
              "relative inline-flex h-1.5 w-1.5 rounded-full",
              dotColor[selectedTone]
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
}

export { badgeVariants };
