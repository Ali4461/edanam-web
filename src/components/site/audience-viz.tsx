/**
 * Purpose: Compact visual headers for audience bento cards (manufacturing / ERP / SME).
 * Props: variant, className.
 * Reusability: Home audience section; any card needing a domain glyph strip.
 */

import { cn } from "@/lib/utils";
import { Factory, LayoutGrid, TrendingUp } from "lucide-react";

const VARIANTS = {
  manufacturing: {
    icon: Factory,
    bars: [36, 58, 44, 78, 52, 70],
    accent: "from-signal-soft via-signal-soft/70 to-transparent text-signal",
    ring: "ring-signal/20",
  },
  erp: {
    icon: LayoutGrid,
    bars: [48, 36, 66, 42, 82, 58],
    accent: "from-slate-200/90 via-slate-100 to-transparent text-primary",
    ring: "ring-primary/10",
  },
  sme: {
    icon: TrendingUp,
    bars: [28, 40, 52, 64, 78, 92],
    accent: "from-sky-100 via-signal/10 to-transparent text-signal-deep",
    ring: "ring-signal/15",
  },
} as const;

export function AudienceViz({
  variant,
  className,
}: {
  variant: keyof typeof VARIANTS;
  className?: string;
}) {
  const config = VARIANTS[variant];
  const Icon = config.icon;

  return (
    <div
      className={cn(
        "relative flex h-20 items-end justify-between gap-3 overflow-hidden rounded-xl bg-gradient-to-br p-3 ring-1",
        config.accent,
        config.ring,
        className
      )}
      aria-hidden="true"
    >
      <span className="mb-1 flex h-10 w-10 items-center justify-center rounded-xl bg-card/90 shadow-sm ring-1 ring-border/60">
        <Icon className="size-5" strokeWidth={1.75} />
      </span>
      <div className="flex h-12 flex-1 items-end justify-end gap-1 pr-1">
        {config.bars.map((h, i) => (
          <span
            key={i}
            className="w-1.5 rounded-full bg-current opacity-35 last:opacity-70"
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}
