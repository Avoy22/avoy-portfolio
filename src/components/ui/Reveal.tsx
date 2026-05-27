"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

type RevealProps = HTMLMotionProps<"div"> & {
  delay?: number;
  y?: number;
  once?: boolean;
};

export function Reveal({
  delay = 0,
  y = 16,
  once = true,
  className,
  children,
  ...rest
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.6,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay: prefersReducedMotion ? 0 : delay,
      }}
      className={cn(className)}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
