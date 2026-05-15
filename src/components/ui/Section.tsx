import { cn } from "@/lib/utils";

type SectionProps = React.HTMLAttributes<HTMLElement> & {
  spacing?: "sm" | "md" | "lg" | "xl";
  as?: "section" | "div" | "header" | "footer";
  divider?: "top" | "bottom" | "both" | "none";
};

const spacings: Record<NonNullable<SectionProps["spacing"]>, string> = {
  sm: "py-16 sm:py-20 lg:py-24",
  md: "py-20 sm:py-24 lg:py-32",
  lg: "py-24 sm:py-32 lg:py-40",
  xl: "py-28 sm:py-36 lg:py-48",
};

export function Section({
  spacing = "md",
  as: Tag = "section",
  divider = "none",
  className,
  children,
  ...rest
}: SectionProps) {
  return (
    <Tag className={cn("relative", spacings[spacing], className)} {...rest}>
      {(divider === "top" || divider === "both") && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-full max-w-7xl section-divider"
        />
      )}
      {children}
      {(divider === "bottom" || divider === "both") && (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-px w-full max-w-7xl section-divider"
        />
      )}
    </Tag>
  );
}

export function SectionDivider({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "mx-auto h-px w-full max-w-7xl section-divider",
        className
      )}
    />
  );
}
