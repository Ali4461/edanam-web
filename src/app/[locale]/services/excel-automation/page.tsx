import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    title: dict.services.excel.metaTitle,
    description: dict.services.excel.metaDescription,
  };
}

export default async function ExcelAutomationPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const t = dict.services.excel;

  return (
    <>
      <PageHero
        eyebrow={dict.services.label}
        title={t.title}
        lead={t.lead}
        crumbs={[
          { label: dict.nav.home, href: localePath(locale, "/") },
          { label: dict.services.label },
          { label: dict.nav.servicesItems[1].title },
        ]}
      />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {t.cards.map((card) => (
              <Card key={card.title}>
                <CardHeader>
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="leading-relaxed text-muted-foreground">{card.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-16 max-w-3xl">
            <h2 className="text-2xl font-semibold text-foreground">{t.whenTitle}</h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t.whenBody}</p>
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
