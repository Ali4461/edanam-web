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
    title: dict.services.erp.metaTitle,
    description: dict.services.erp.metaDescription,
  };
}

export default async function ErpConsultingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const t = dict.services.erp;
  const excel = dict.nav.servicesItems[1];
  const digital = dict.nav.servicesItems[2];

  return (
    <>
      <PageHero
        eyebrow={dict.services.label}
        title={t.title}
        lead={t.lead}
        crumbs={[
          { label: dict.nav.home, href: localePath(locale, "/") },
          { label: dict.services.label },
          { label: dict.nav.servicesItems[0].title },
        ]}
      />
      <section className="py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
          <div className="space-y-10 lg:col-span-7">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">{t.deliverTitle}</h2>
              <ul className="mt-6 space-y-4 text-muted-foreground">
                {t.deliverables.map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-signal" />
                    <span>
                      <strong className="text-foreground">{item.title}</strong> — {item.body}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground">{t.methodTitle}</h2>
              <ol className="mt-6 space-y-5">
                {t.method.map((step) => (
                  <li key={step.n} className="flex gap-4">
                    <span className="font-display w-8 text-xl text-signal/80">{step.n}</span>
                    <div>
                      <p className="font-semibold text-foreground">{step.title}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <aside className="lg:col-span-5">
            <Card className="sticky top-28 shadow-md">
              <CardHeader>
                <CardTitle>{t.bestFit}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {t.fitItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Button
                  nativeButton={false}
                  variant="signal"
                  className="mt-8 w-full"
                  render={<Link href={localePath(locale, "/contact")} />}
                >
                  {t.cta}
                </Button>
                <p className="mt-4 text-center text-xs text-muted-foreground">
                  {t.alsoSee}{" "}
                  <Link
                    href={localePath(locale, excel.href)}
                    className="cursor-pointer text-signal hover:underline"
                  >
                    {excel.title}
                  </Link>{" "}
                  {t.and}{" "}
                  <Link
                    href={localePath(locale, digital.href)}
                    className="cursor-pointer text-signal hover:underline"
                  >
                    {digital.title}
                  </Link>
                  .
                </p>
              </CardContent>
            </Card>
          </aside>
        </div>
      </section>
    </>
  );
}
