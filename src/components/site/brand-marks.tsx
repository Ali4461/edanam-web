/**
 * Purpose: Trust-strip brand marks with monogram tiles (visual social proof).
 * Props: names, className.
 * Reusability: Home trusted-by band; about page partners.
 */

import { cn } from "@/lib/utils";

export function BrandMarks({
  names,
  className,
}: {
  names: string[];
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "flex flex-wrap items-center justify-center gap-3 sm:gap-4",
        className
      )}
    >
      {names.map((name) => {
        const initials = name
          .split(/\s+/)
          .map((w) => w[0])
          .join("")
          .slice(0, 2)
          .toUpperCase();
        return (
          <li
            key={name}
            className="flex items-center gap-2.5 rounded-xl border border-border/80 bg-background/80 px-3.5 py-2.5 shadow-sm"
          >
            <span
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-[11px] font-bold tracking-wide text-primary-foreground"
              aria-hidden="true"
            >
              {initials}
            </span>
            <span className="text-sm font-semibold tracking-wide text-foreground/80">{name}</span>
          </li>
        );
      })}
    </ul>
  );
}
