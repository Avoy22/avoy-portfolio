import * as React from "react"
import Link from "next/link"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_8px_24px_-10px_rgba(255,255,255,0.4)] hover:bg-zinc-100",
        primary:
          "bg-white text-black shadow-[0_1px_0_rgba(255,255,255,0.7)_inset,0_8px_24px_-10px_rgba(255,255,255,0.4)] hover:bg-zinc-100",
        outline:
          "border-white/15 bg-white/4 text-white backdrop-blur hover:border-white/30 hover:bg-white/8 aria-expanded:border-white/25 aria-expanded:bg-white/8",
        secondary:
          "border-white/10 bg-white/8 text-white backdrop-blur hover:border-accent/30 hover:bg-accent/10 hover:text-white aria-expanded:bg-white/8",
        ghost:
          "text-foreground-muted hover:bg-white/6 hover:text-white aria-expanded:bg-white/8 aria-expanded:text-white",
        destructive:
          "border-danger/25 bg-danger/10 text-danger hover:bg-danger/20 focus-visible:border-danger/40 focus-visible:ring-danger/20",
        link: "h-auto rounded-none border-0 bg-transparent p-0 text-foreground-muted underline-offset-4 shadow-none hover:text-white hover:underline",
      },
      size: {
        default: "h-10 gap-2 px-4",
        xs: "h-7 gap-1.5 px-2.5 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-2 px-4 text-[13px] [&_svg:not([class*='size-'])]:size-3.5",
        md: "h-11 gap-2 px-5",
        lg: "h-12 gap-2 px-6",
        icon: "size-8",
        "icon-xs": "size-6 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-7",
        "icon-lg": "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

type ButtonProps = VariantProps<typeof buttonVariants> & {
  asChild?: boolean
  href?: string
} & Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement> &
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
    "href"
  >

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  href,
  ...props
}: ButtonProps) {
  const classNames = cn(buttonVariants({ variant, size, className }))

  if (asChild) {
    return (
      <Slot.Root
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={classNames}
        {...props}
      />
    )
  }

  if (href) {
    return (
      <Link
        href={href}
        data-slot="button"
        data-variant={variant}
        data-size={size}
        className={classNames}
        {...props}
      />
    )
  }

  return (
    <button
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={classNames}
      {...props}
    />
  )
}

export { Button, buttonVariants }
