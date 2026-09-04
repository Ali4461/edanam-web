"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { LocaleSwitcher } from "@/components/site/locale-switcher";
import { cn } from "@/lib/utils";
import { localePath, stripLocale, type Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/get-dictionary";

export function SiteHeader({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const pathname = usePathname() || "/";
  const path = stripLocale(pathname);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const t = dict.nav;
  const href = (p: string) => localePath(locale, p);

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl border border-border/80 bg-card/80 px-4 py-3 shadow-sm backdrop-blur-md sm:px-5"
        aria-label={t.primaryAria}
      >
        <Link href={href("/")} className="flex items-center gap-2.5 cursor-pointer" aria-label={t.homeAria}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground" aria-hidden="true">
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 7h16M4 12h10M4 17h7" strokeLinecap="round" />
            </svg>
          </span>
          <span className="text-[15px] font-semibold tracking-tight">Edanam</span>
        </Link>

        <div className="hidden lg:flex">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href={href("/")}
                  active={path === "/"}
                  render={<Link href={href("/")} />}
                  className={cn(navigationMenuTriggerStyle(), path === "/" && "bg-muted text-foreground")}
                >
                  {t.home}
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(path.startsWith("/services") && "bg-muted text-foreground")}
                >
                  {t.services}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[320px] gap-1 p-2">
                    {t.servicesItems.map((item) => (
                      <li key={item.href}>
                        <NavigationMenuLink
                          href={href(item.href)}
                          closeOnClick
                          render={<Link href={href(item.href)} />}
                          className="block cursor-pointer rounded-lg p-3 transition-colors duration-200 hover:bg-muted"
                        >
                          <div className="text-sm font-semibold text-foreground">{item.title}</div>
                          <p className="mt-0.5 text-xs text-muted-foreground">{item.description}</p>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href={href("/case-studies")}
                  active={path === "/case-studies"}
                  render={<Link href={href("/case-studies")} />}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    path === "/case-studies" && "bg-muted text-foreground"
                  )}
                >
                  {t.caseStudies}
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href={href("/blog")}
                  active={path === "/blog"}
                  render={<Link href={href("/blog")} />}
                  className={cn(navigationMenuTriggerStyle(), path === "/blog" && "bg-muted text-foreground")}
                >
                  {t.blog}
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href={href("/contact")}
                  active={path === "/contact"}
                  render={<Link href={href("/contact")} />}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    path === "/contact" && "bg-muted text-foreground"
                  )}
                >
                  {t.contact}
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <LocaleSwitcher locale={locale} label={dict.language.label} />
          <Button
            nativeButton={false}
            className="hidden sm:inline-flex"
            render={<Link href={href("/contact")} />}
          >
            {t.bookCall}
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.closeMenu : t.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </nav>

      {open && (
        <div
          id="mobile-nav"
          className="mx-auto mt-2 max-w-6xl rounded-2xl border border-border bg-card p-3 shadow-md lg:hidden"
        >
          <div className="flex flex-col gap-1 text-sm font-medium text-muted-foreground">
            <Link href={href("/")} className="rounded-lg px-3 py-2.5 hover:bg-muted cursor-pointer" onClick={() => setOpen(false)}>
              {t.home}
            </Link>
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-between rounded-lg px-3 py-2.5 hover:bg-muted"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              {t.services}
              <span className="text-xs">{servicesOpen ? "−" : "+"}</span>
            </button>
            {servicesOpen && (
              <div className="space-y-1 pb-1 pl-3">
                {t.servicesItems.map((s) => (
                  <Link
                    key={s.href}
                    href={href(s.href)}
                    className="block rounded-lg px-3 py-2 hover:bg-muted cursor-pointer"
                    onClick={() => setOpen(false)}
                  >
                    {s.title}
                  </Link>
                ))}
              </div>
            )}
            <Link href={href("/case-studies")} className="rounded-lg px-3 py-2.5 hover:bg-muted cursor-pointer" onClick={() => setOpen(false)}>
              {t.caseStudies}
            </Link>
            <Link href={href("/blog")} className="rounded-lg px-3 py-2.5 hover:bg-muted cursor-pointer" onClick={() => setOpen(false)}>
              {t.blog}
            </Link>
            <Link href={href("/contact")} className="rounded-lg px-3 py-2.5 hover:bg-muted cursor-pointer" onClick={() => setOpen(false)}>
              {t.contact}
            </Link>
            <Button
              nativeButton={false}
              className="mt-2"
              render={<Link href={href("/contact")} onClick={() => setOpen(false)} />}
            >
              {t.bookCall}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
