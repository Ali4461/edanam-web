"use client";

/**
 * Purpose: Trust/authority outcome metric with panel framing and accent rail.
 * Props: value, label, detail, className, delay.
 * Reusability: Case-study strips, about page, any board-ready metric row.
 */

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function MetricStat({
  value,
  label,
  detail,
  className,
  delay = 0,
}: {
  value: string;
  label: string;
  detail: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 sm:p-7",
        className
      )}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      <span
        className="absolute left-0 top-0 h-full w-1 bg-sky-400/80"
        aria-hidden="true"
      />
      <p className="font-display text-5xl tracking-tight text-white sm:text-6xl">{value}</p>
      <p className="mt-3 text-sm font-semibold text-sky-200">{label}</p>
      <p className="mt-1 text-sm text-slate-400">{detail}</p>
    </motion.div>
  );
}
