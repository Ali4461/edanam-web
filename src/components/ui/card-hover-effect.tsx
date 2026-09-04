"use client";

/**
 * Purpose: Service feature cards with icon header, accent rail, and explore CTA.
 * Props: items, exploreLabel, className.
 * Reusability: Home services; services index.
 */

import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Boxes, FileSpreadsheet, Network } from "lucide-react";

const DEFAULT_ICONS: LucideIcon[] = [Network, FileSpreadsheet, Boxes];

export function HoverEffect({
  items,
  className,
  exploreLabel = "Explore",
  icons = DEFAULT_ICONS,
}: {
  items: { title: string; description: string; link: string }[];
  className?: string;
  exploreLabel?: string;
  icons?: LucideIcon[];
}) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const reduce = useReducedMotion();

  return (
    <div className={cn("grid grid-cols-1 gap-1 md:grid-cols-3 md:gap-0 md:py-2", className)}>
      {items.map((item, idx) => {
        const Icon = icons[idx % icons.length];
        return (
          <Link
            href={item.link}
            key={item.link}
            className="group relative block h-full w-full cursor-pointer p-2"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && !reduce && (
                <motion.span
                  className="absolute inset-0 block h-full w-full rounded-2xl bg-signal-soft/60"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.15 } }}
                  exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.08 } }}
                />
              )}
            </AnimatePresence>
            <div className="relative z-20 flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-200 group-hover:border-signal/35 group-hover:shadow-md">
              <div className="mb-5 flex items-start justify-between gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-soft text-signal ring-1 ring-signal/15">
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="font-display text-2xl leading-none text-muted-foreground/35">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-signal transition-colors duration-200 group-hover:text-signal-deep">
                {exploreLabel}
                <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
              <span
                className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-signal transition-transform duration-300 group-hover:scale-x-100"
                aria-hidden="true"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
