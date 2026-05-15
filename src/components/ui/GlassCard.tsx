import { cn } from "@/lib/utils";

type GlassCardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: "default" | "strong" | "soft";
  interactive?: boolean;
  glow?: boolean;
};

export function GlassCard({
  variant = "default",
  interactive = false,
  glow = false,
  className,
  children,
  ...rest
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative rounded-2xl",
        variant === "default" && "glass-card",
        variant === "strong" && "glass-strong",
        variant === "soft" &&
          "border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm",
        interactive &&
          "transition-all duration-500 ease-out hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.05]",
        glow &&
          "before:pointer-events-none before:absolute before:-inset-px before:rounded-2xl before:bg-[radial-gradient(120%_80%_at_50%_-20%,rgba(109,140,255,0.18),transparent_60%)] before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
