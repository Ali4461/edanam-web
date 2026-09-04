import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localePath, type Locale } from "@/i18n/config";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = (isLocale(raw) ? raw : "en") as Locale;
  const dict = await getDictionary(locale);
  return {
    title: dict.services.digital.metaTitle,
    description: dict.services.digital.metaDescription,
  };
}

export default async function DigitalProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const t = dict.services.digital;

  return (
    <>
      <PageHero
        eyebrow={dict.services.label}
        title={t.title}
        lead={t.lead}
        crumbs={[
          { label: dict.nav.home, href: localePath(locale, "/") },
          { label: dict.services.label },
          { label: dict.nav.servicesItems[2].title },
        ]}
      />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-12 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {t.items.map((item) => (
              <article key={item.title} className="border-t border-border pt-6">
                <h2 className="text-xl font-semibold text-foreground">{item.title}</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">{item.body}</p>
              </article>
            ))}
          </div>
          <div className="rounded-2xl bg-primary p-8 text-primary-foreground sm:p-10">
            <h2 className="font-display text-3xl tracking-tight">{t.bandTitle}</h2>
            <p className="mt-4 max-w-xl leading-relaxed text-slate-300">{t.bandBody}</p>
            <Button
              nativeButton={false}
              variant="signal"
              className="mt-8"
              render={<Link href={localePath(locale, "/contact")} />}
            >
              {t.cta}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
