import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ErpDiagram } from "@/components/site/erp-diagram";
import { MetricStat } from "@/components/site/metric-stat";
import { AudienceViz } from "@/components/site/audience-viz";
import { BrandMarks } from "@/components/site/brand-marks";
import { SectionReveal } from "@/components/site/section-reveal";
import { getDictionary } from "@/i18n/get-dictionary";
import { isLocale, localePath, type Locale } from "@/i18n/config";

const BRANDS = ["NordForge", "Helix Components", "Atlas Pack", "Meridian Foods", "Quanta Assembly"];

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const dict = await getDictionary(locale);
  const t = dict.home;
  const href = (p: string) => localePath(locale, p);

  const services = t.services.map((s) => ({
    title: s.title,
    description: s.description,
    link: href(s.link),
  }));

  return (
    <>
      <section className="hero-grid relative flex min-h-[100svh] flex-col justify-center overflow-hidden pt-28 pb-16">
        <Spotlight className="-top-40 left-0 opacity-50 md:-top-20 md:left-60" fill="#7DD3FC" />
        <BackgroundBeams className="opacity-20" />
        <ErpDiagram labels={dict.diagram} />
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl lg:max-w-2xl">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-signal/20 bg-signal-soft/80 px-3 py-1 text-xs font-semibold tracking-wide text-signal-deep shadow-sm backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
              {t.positioning}
            </p>
            <p className="font-display mb-5 text-4xl tracking-tight text-foreground sm:mb-7 sm:text-5xl md:text-6xl">
              Edanam
            </p>
            <TextGenerateEffect
              words={t.headline}
              className="text-2xl font-semibold leading-snug sm:text-3xl md:text-4xl"
            />
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground sm:mt-6 sm:text-lg">
              {t.subhead}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10">
              <Button
                nativeButton={false}
                variant="signal"
                size="lg"
                render={<Link href={href("/contact")} />}
              >
                {t.ctaPrimary}
              </Button>
              <Link
                href={href("/case-studies")}
                className="group inline-flex cursor-pointer items-center gap-2 text-base font-semibold text-foreground transition-colors duration-200 hover:text-signal"
              >
                {t.ctaSecondary}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-2" aria-label={t.chips.join(", ")}>
              {t.chips.map((chip) => (
                <li
                  key={chip}
                  className="rounded-lg border border-border/80 bg-card/80 px-2.5 py-1 text-xs font-semibold text-muted-foreground shadow-sm backdrop-blur-sm"
                >
                  {chip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40" aria-label={t.trustedAria}>
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <SectionReveal>
            <p className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {t.trustedBy}
            </p>
            <BrandMarks names={BRANDS} />
          </SectionReveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-card py-20 sm:py-28">
        <div
          className="pointer-events-none absolute -left-24 top-20 h-64 w-64 rounded-full bg-signal/10 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-signal">
              {t.servicesEyebrow}
            </p>
            <h2 className="font-display max-w-2xl text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {t.servicesTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t.servicesLead}</p>
          </SectionReveal>
          <HoverEffect items={services} className="mt-10" exploreLabel={dict.common.explore} />
        </div>
      </section>

      <section className="bg-muted/60 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <h2 className="font-display max-w-2xl text-3xl tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {t.audienceTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{t.audienceLead}</p>
          </SectionReveal>
          <BentoGrid className="mt-12 max-w-none">
            {t.audiences.map((item, i) => (
              <SectionReveal key={item.title} delay={i * 0.06} className="h-full">
                <BentoGridItem
                  title={item.title}
                  description={item.description}
                  className="md:col-span-1 h-full"
                  header={<AudienceViz variant={item.variant} />}
                />
              </SectionReveal>
            ))}
          </BentoGrid>
        </div>
      </section>

      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground sm:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-16 top-0 h-80 w-80 rounded-full bg-signal/25 blur-3xl"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionReveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-sky-300/90">
                {t.casesEyebrow}
              </p>
              <h2 className="font-display text-3xl tracking-tight sm:text-4xl md:text-5xl">
                {t.casesTitle}
              </h2>
            </SectionReveal>
            <Link
              href={href("/case-studies")}
              className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-sky-200 transition-colors duration-200 hover:text-white"
            >
              {t.casesLink} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <Separator className="mt-12 bg-white/10" />
          <div className="mt-12 grid gap-5 sm:grid-cols-3 sm:gap-6">
            {t.metrics.map((stat, i) => (
              <MetricStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                detail={stat.detail}
                delay={i * 0.08}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionReveal>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-signal">
                {t.blogEyebrow}
              </p>
              <h2 className="font-display text-3xl tracking-tight text-foreground sm:text-4xl">
                {t.blogTitle}
              </h2>
            </SectionReveal>
            <Link
              href={href("/blog")}
              className="inline-flex cursor-pointer items-center gap-1.5 text-sm font-semibold text-signal transition-colors duration-200 hover:text-signal-deep"
            >
              {t.blogLink} <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.posts.map((post, i) => (
              <SectionReveal key={post.title} delay={i * 0.06}>
                <Link href={href("/blog")} className="group block h-full cursor-pointer">
                  <Card className="h-full overflow-hidden transition-all duration-200 hover:border-signal/30 hover:shadow-md">
                    <div
                      className="h-24 bg-gradient-to-br from-signal-soft via-muted to-card p-4"
                      aria-hidden="true"
                    >
                      <span className="font-display text-4xl text-signal/35">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {post.meta}
                      </p>
                      <h3 className="mt-3 text-lg font-semibold text-foreground transition-colors duration-200 group-hover:text-signal">
                        {post.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {post.description}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-primary-foreground sm:px-12 sm:py-16">
              <div
                className="pointer-events-none absolute inset-0 opacity-30"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
                  backgroundSize: "40px 40px",
                }}
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-signal/25 blur-3xl"
                aria-hidden="true"
              />
              <div
                className="pointer-events-none absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-sky-400/15 blur-3xl"
                aria-hidden="true"
              />
              <div className="relative max-w-2xl">
                <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold tracking-wide text-sky-200">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-300" aria-hidden="true" />
                  {t.ctaBadge}
                </p>
                <h2 className="font-display text-3xl tracking-tight leading-tight sm:text-4xl md:text-5xl">
                  {t.ctaTitle}
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-300">{t.ctaLead}</p>
                <Button
                  nativeButton={false}
                  variant="signal"
                  size="lg"
                  className="mt-8"
                  render={<Link href={href("/contact")} />}
                >
                  {t.ctaButton}
                </Button>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
