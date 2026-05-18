import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline" | "gradient";
type Size = "sm" | "md" | "lg";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type AsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className" | "children">;

type AsButton = CommonProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

type ButtonProps = AsLink | AsButton;

const base =
  "group/btn relative isolate inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 ease-out focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed select-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary: cn(
    "bg-white text-black",
    "shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_-1px_0_rgba(0,0,0,0.06)_inset,0_10px_30px_-10px_rgba(255,255,255,0.35),0_4px_12px_-4px_rgba(0,0,0,0.4)]",
    "hover:bg-zinc-100 hover:shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_-1px_0_rgba(0,0,0,0.06)_inset,0_14px_40px_-12px_rgba(255,255,255,0.5),0_6px_18px_-6px_rgba(0,0,0,0.5)]",
    "active:translate-y-[0.5px]"
  ),
  secondary:
    "bg-white/5 text-white border border-white/12 hover:bg-white/8 hover:border-white/24 backdrop-blur shadow-[0_1px_0_rgba(255,255,255,0.04)_inset]",
  ghost:
    "bg-transparent text-foreground-muted hover:text-white hover:bg-white/5",
  outline:
    "border border-white/15 text-white bg-white/3 hover:border-white/30 hover:bg-white/7 backdrop-blur",
  gradient: cn(
    "text-white border border-white/10",
    "bg-[linear-gradient(135deg,rgba(109,140,255,0.95)_0%,rgba(167,139,250,0.95)_55%,rgba(34,211,238,0.95)_100%)]",
    "shadow-[0_1px_0_rgba(255,255,255,0.18)_inset,0_18px_42px_-14px_rgba(109,140,255,0.6),0_8px_20px_-8px_rgba(0,0,0,0.5)]",
    "hover:shadow-[0_1px_0_rgba(255,255,255,0.22)_inset,0_24px_56px_-16px_rgba(109,140,255,0.72),0_10px_24px_-10px_rgba(0,0,0,0.55)]",
    "active:translate-y-[0.5px]"
  ),
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-[13px]",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className, children } = props;
  const cls = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
      {(variant === "primary" || variant === "gradient") && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-full"
        >
          <span className="absolute inset-y-0 left-0 w-[40%] -translate-x-full bg-linear-to-r from-transparent via-white/35 to-transparent opacity-0 transition-all duration-700 ease-out group-hover/btn:translate-x-[260%] group-hover/btn:opacity-100" />
        </span>
      )}
    </>
  );

  if ("href" in props && props.href) {
    const { href, external, ...rest } = props;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cls}
          {...rest}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cls} {...rest}>
        {content}
      </Link>
    );
  }

  const { ...buttonRest } = props as AsButton;
  return (
    <button className={cls} {...buttonRest}>
      {content}
    </button>
  );
}
