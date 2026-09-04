import type { Metadata } from "next";
import { Check } from "lucide-react";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { ContactForm } from "@/components/site/contact-form";
import { Separator } from "@/components/ui/separator";
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
    title: dict.contact.metaTitle,
    description: dict.contact.metaDescription,
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const t = dict.contact;

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
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="space-y-6">
            <ul className="space-y-3 text-muted-foreground">
              {t.bullets.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <Check className="h-4 w-4 shrink-0 text-signal" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <Separator />
            <div>
              <p className="text-sm text-muted-foreground">{t.emailLabel}</p>
              <a
                href="mailto:hello@edanam.com"
                className="cursor-pointer text-lg font-semibold text-foreground transition-colors duration-200 hover:text-signal"
              >
                hello@edanam.com
              </a>
            </div>
          </div>
          <ContactForm labels={t.form} />
        </div>
      </section>
    </>
  );
}
