import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/site/page-hero";
import { Card, CardContent } from "@/components/ui/card";
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
    title: dict.blog.metaTitle,
    description: dict.blog.metaDescription,
  };
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const t = dict.blog;

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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {t.posts.map((post) => (
              <Card
                key={post.title}
                className="cursor-pointer transition-all duration-200 hover:border-signal/30 hover:shadow-md"
              >
                <CardContent className="p-7">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {post.meta}
                  </p>
                  <h2 className="mt-3 text-xl font-semibold text-foreground">{post.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{post.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="mt-12 text-sm text-muted-foreground">
            {t.footerPrompt}{" "}
            <Link
              href={localePath(locale, "/contact")}
              className="cursor-pointer font-semibold text-signal hover:underline"
            >
              {t.footerLink}
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
