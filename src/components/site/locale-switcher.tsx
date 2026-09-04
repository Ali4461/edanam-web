"use client";

/**
 * Purpose: Toggle between EN and TR while preserving the current path.
 * Props: locale.
 * Reusability: Header (and optionally footer).
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, switchLocalePath, type Locale } from "@/i18n/config";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({
  locale,
  label,
}: {
  locale: Locale;
  label: string;
}) {
  const pathname = usePathname() || "/";

  return (
    <div
      className="inline-flex items-center rounded-lg border border-border bg-background p-0.5 text-xs font-semibold"
      role="group"
      aria-label={label}
    >
      {locales.map((code) => {
        const active = code === locale;
        return (
          <Link
            key={code}
            href={switchLocalePath(pathname, code)}
            hrefLang={code}
            className={cn(
              "cursor-pointer rounded-md px-2 py-1 transition-colors duration-200",
              active
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
            aria-current={active ? "page" : undefined}
          >
            {code.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
