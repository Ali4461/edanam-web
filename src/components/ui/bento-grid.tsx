import { cn } from "@/lib/utils";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[16rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoGridItem({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "group/bento row-span-1 flex flex-col justify-between space-y-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:border-signal/25 hover:shadow-md",
        className
      )}
    >
      {header}
      <div className="transition-colors duration-200">
        {icon}
        <div className="mt-2 mb-1 font-semibold text-foreground">{title}</div>
        <div className="text-sm text-muted-foreground leading-relaxed">{description}</div>
      </div>
    </div>
  );
}
