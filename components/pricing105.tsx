import { Calendar, Check, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { cn } from "@/lib/utils";

interface PricingSinglePlan {
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  period?: { monthly: string; yearly: string };
  features: string[];
  agencies?: { name: string; items: string[] }[];
  button: { text: string; url: string };
  secondaryButton?: { text: string; url: string };
  featureListLabel?: string;
  image?: string;
  badge?: string;
  priceNote?: string;
}

interface PricingSingleProps {
  heading: string;
  description: string;
  plan: PricingSinglePlan;
  className?: string;
}

interface Pricing105Props extends PricingSingleProps {}
type Props = Partial<Pricing105Props>;

const defaultProps: Pricing105Props = {
  heading: "Our Pricing",
  description: "One plan with the tools you need to ship interfaces faster.",
  plan: {
    name: "Pro",
    image: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/placeholder/pricing-plans/plan2.svg",
    description:
      "For individual developers and side projects shipping real interfaces.",
    monthlyPrice: "$49",
    yearlyPrice: "$129",
    period: { monthly: "/month", yearly: "/year" },
    badge: "Most popular",
    featureListLabel: "Includes",
    features: [
      "Up to 5 team members",
      "Advanced components library",
      "Priority support",
      "2GB storage space",
      "Team collaboration",
      "Custom branding",
    ],
    button: {
      text: "Get started",
      url: "#",
    },
    secondaryButton: {
      text: "Talk to sales",
      url: "#",
    },
  },
};

const Pricing105 = (props: Props) => {
  const { heading, description, plan, className } = {
    ...defaultProps,
    ...props,
  };
  const periodMonthly = plan.period?.monthly ?? "/month";

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 max-w-2xl">
            <h2 className="mb-4 text-4xl font-semibold tracking-tight text-pretty lg:text-5xl">
              {heading}
            </h2>
            <p className="text-muted-foreground lg:text-lg">{description}</p>
          </div>
          <div className="rounded-xl border border-border bg-surface p-8 md:p-10">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
              <div className="max-w-md">
                <p className="text-sm font-medium text-muted-foreground">
                  {plan.name}
                </p>
                <p className="mt-1 text-4xl font-semibold tracking-tight lg:text-5xl">
                  {plan.monthlyPrice}
                  <span className="text-lg font-normal text-muted-foreground">
                    {periodMonthly}
                  </span>
                </p>
                <p className="mt-4 text-muted-foreground">{plan.description}</p>
              </div>
              <div className="flex-1 lg:max-w-md">
                <Separator className="mb-6 lg:hidden" />
                {plan.featureListLabel ? (
                  <p className="mb-3 text-sm font-semibold">
                    {plan.featureListLabel}
                  </p>
                ) : null}
                {plan.agencies ? (
                  <div className="mb-1">
                    <div className="flex flex-col gap-2.5">
                      <p className="flex items-start gap-2 text-sm">
                        <Check className="mt-0.5 size-4 shrink-0" />
                        <span className="text-pretty">Todas as Agências</span>
                      </p>
                      {plan.agencies.map((agency) => (
                        <details key={agency.name} className="group">
                          <summary className="flex cursor-pointer list-none items-start gap-1.5 text-sm [&::-webkit-details-marker]:hidden">
                            <Check className="mt-0.5 size-4 shrink-0" />
                            <span className="text-pretty">{agency.name}</span>
                            <ChevronDown className="mt-0.5 size-4 shrink-0 text-subtle transition-transform duration-200 group-open:rotate-180" />
                          </summary>
                          <ul className="flex flex-col gap-1.5 pb-1 pl-6 pt-2">
                            {agency.items.map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2 text-sm text-muted"
                              >
                                <span className="min-w-0 text-pretty">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </details>
                      ))}
                    </div>
                  </div>
                ) : null}
                <ul className="flex flex-col gap-2.5">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Check className="mt-0.5 size-4 shrink-0" />
                      <span className="min-w-0 text-pretty">{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.secondaryButton ? (
                  <Button
                    className="mt-8 h-11 w-full px-6 text-sm sm:h-9 sm:w-auto sm:px-4"
                    asChild
                  >
                    <a
                      href={plan.secondaryButton.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Calendar data-icon="inline-start" />
                      {plan.secondaryButton.text}
                    </a>
                  </Button>
                ) : null}
                {plan.priceNote ? (
                  <p className="mt-4 text-xs text-muted-foreground">
                    {plan.priceNote}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Pricing105 };
