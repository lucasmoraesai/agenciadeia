import { type ComponentPropsWithoutRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-auto grid-cols-2 gap-4 md:auto-rows-[12rem] md:grid-cols-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string;
  description?: string;
  Icon?: React.ElementType;
  visual?: ReactNode;
  className?: string;
}

const BentoCard = ({
  name,
  description,
  Icon,
  visual,
  className,
  ...props
}: BentoCardProps) => (
  <div
    className={cn(
      "group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-border bg-background p-5 transition-colors hover:bg-surface",
      className
    )}
    {...props}
  >
    <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/[0.04] blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
    <div className="pointer-events-none relative z-10 flex transform-gpu flex-col gap-2.5 transition-transform duration-300 group-hover:-translate-y-1">
      {Icon && (
        <span className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground">
          <Icon className="h-4 w-4" />
        </span>
      )}
      <div>
        <h3 className="text-base font-medium tracking-tight">{name}</h3>
        {description && (
          <p className="mt-1.5 text-sm leading-relaxed text-muted">
            {description}
          </p>
        )}
      </div>
    </div>
    {visual && (
      <div className="relative z-0 mt-4 min-h-40 flex-1 md:min-h-0">{visual}</div>
    )}
  </div>
);

export { BentoCard, BentoGrid };
