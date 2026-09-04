import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  lead,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  crumbs: { label: string; href?: string }[];
}) {
  return (
    <section className="page-hero border-b border-border pt-32 pb-16 sm:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-xs font-medium text-muted-foreground">
          {crumbs.map((c, i) => (
            <span key={`${c.label}-${i}`}>
              {i > 0 && <span className="mx-2 text-border">/</span>}
              {c.href ? (
                <Link href={c.href} className="cursor-pointer transition-colors duration-200 hover:text-foreground">
                  {c.label}
                </Link>
              ) : (
                <span className="text-foreground">{c.label}</span>
              )}
            </span>
          ))}
        </p>
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-signal">{eyebrow}</p>
        <h1 className="font-display max-w-3xl text-4xl tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">{lead}</p>
      </div>
    </section>
  );
}
