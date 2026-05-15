import { cn } from "@/lib/utils";

type Tone = "neutral" | "success" | "warning" | "danger" | "brand" | "info";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: Tone;
  size?: "sm" | "md";
  dot?: boolean;
};

const tones: Record<Tone, string> = {
  neutral:
    "bg-white/4 text-foreground-muted border-white/10 backdrop-blur",
  brand: "bg-accent/10 text-accent border-accent/25 backdrop-blur",
  success: "bg-success/10 text-success border-success/25 backdrop-blur",
  warning: "bg-warning/10 text-warning border-warning/25 backdrop-blur",
  danger: "bg-danger/10 text-danger border-danger/25 backdrop-blur",
  info: "bg-accent-3/10 text-accent-3 border-accent-3/25 backdrop-blur",
};

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
  size = "sm",
  dot = false,
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border font-medium tracking-tight",
        size === "sm" ? "px-2.5 py-0.5 text-[11px]" : "px-3 py-1 text-xs",
        tones[tone],
        className
      )}
      {...rest}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          {(tone === "success" || tone === "brand") && (
            <span
              className={cn(
                "absolute inline-flex h-full w-full rounded-full opacity-60 animate-pulse-soft",
                dotColor[tone]
              )}
            />
          )}
          <span
            className={cn(
              "relative inline-flex h-1.5 w-1.5 rounded-full",
              dotColor[tone]
            )}
          />
        </span>
      )}
      {children}
    </span>
  );
}
