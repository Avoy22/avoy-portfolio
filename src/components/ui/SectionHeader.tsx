import { cn } from "@/lib/utils";
import { Badge } from "./Badge";

type SectionHeaderProps = {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      {eyebrow && (
        <Badge tone="brand" size="md" dot>
          {eyebrow}
        </Badge>
      )}
      <h2 className="max-w-3xl text-balance text-[28px] font-semibold leading-[1.06] tracking-[-0.025em] text-gradient sm:text-[36px] lg:text-[44px] xl:text-[48px]">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "max-w-2xl text-pretty text-[15px] leading-relaxed text-foreground-muted sm:text-[17px]",
            align === "center" && "mx-auto"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
