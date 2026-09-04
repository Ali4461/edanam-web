import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardContent } from "@/components/ui/card";
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
    title: dict.caseStudies.metaTitle,
    description: dict.caseStudies.metaDescription,
  };
}

export default async function CaseStudiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const t = dict.caseStudies;

  return (
    <>
      <PageHero
        eyebrow={t.eyebrow}
        title={t.title}
        lead={t.lead}
        crumbs={[
          { label: dict.nav.home, href: localePath(locale, "/") },
          { label: t.eyebrow },
        ]}
      />
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6 lg:px-8">
          {t.items.map((item) => (
            <Card key={item.title} className="transition-shadow duration-200 hover:shadow-md">
              <CardContent className="p-8 sm:p-10">
                <p className="text-xs font-semibold uppercase tracking-wider text-signal">{item.tag}</p>
                <h2 className="mt-3 text-2xl font-semibold text-foreground">{item.title}</h2>
                <p className="mt-3 max-w-3xl leading-relaxed text-muted-foreground">{item.body}</p>
                <dl className="mt-6 flex flex-wrap gap-8 text-sm">
                  {item.stats.map((s) => (
                    <div key={s.label}>
                      <dt className="text-muted-foreground">{s.label}</dt>
                      <dd className="mt-1 font-semibold text-foreground">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </CardContent>
            </Card>
          ))}
          <div className="pt-8">
            <Button
              nativeButton={false}
              variant="signal"
              size="lg"
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
