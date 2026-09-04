import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

export function SiteFooter({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const href = (p: string) => localePath(locale, p);
  const t = dict.footer;
  const nav = dict.nav;

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <Link href={href("/")} className="flex items-center gap-2.5 cursor-pointer">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground" aria-hidden="true">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 7h16M4 12h10M4 17h7" strokeLinecap="round" />
                </svg>
              </span>
              <span className="text-[15px] font-semibold tracking-tight">Edanam</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">{t.blurb}</p>
          </div>
          <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
            <div>
              <p className="mb-3 font-semibold text-foreground">{t.services}</p>
              <ul className="space-y-2 text-muted-foreground">
                {nav.servicesItems.map((item) => (
                  <li key={item.href}>
                    <Link href={href(item.href)} className="cursor-pointer transition-colors duration-200 hover:text-foreground">
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold text-foreground">{t.company}</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <Link href={href("/case-studies")} className="cursor-pointer transition-colors duration-200 hover:text-foreground">
                    {nav.caseStudies}
                  </Link>
                </li>
                <li>
                  <Link href={href("/blog")} className="cursor-pointer transition-colors duration-200 hover:text-foreground">
                    {nav.blog}
                  </Link>
                </li>
                <li>
                  <Link href={href("/contact")} className="cursor-pointer transition-colors duration-200 hover:text-foreground">
                    {nav.contact}
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-3 font-semibold text-foreground">{t.contact}</p>
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <a href="mailto:hello@edanam.com" className="cursor-pointer transition-colors duration-200 hover:text-foreground">
                    hello@edanam.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border pt-8 text-xs text-muted-foreground">
          <p>{t.rights}</p>
        </div>
      </div>
    </footer>
  );
}
