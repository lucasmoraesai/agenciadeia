"use client";

import { Calendar, CircleCheck, MessageCircle } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

import { cn } from "@/lib/utils";

interface PricingSinglePlan {
  name: string;
  description: string;
  monthlyPrice: string;
  yearlyPrice: string;
  period?: { monthly: string; yearly: string };
  features: string[];
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
  discount?: string;
  className?: string;
}

interface Pricing100Props extends PricingSingleProps {}
type Props = Partial<Pricing100Props>;

const defaultProps: Pricing100Props = {
  heading: "Our Pricing",
  description: "One plan with the tools you need to ship interfaces faster.",
  discount: "-20%",
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

const Pricing100 = (props: Props) => {
  const { heading, description, plan, discount, className } = {
    ...defaultProps,
    ...props,
  };
  const [isYearly, setIsYearly] = useState(false);
  const periodMonthly = plan.period?.monthly ?? "/month";
  const periodYearly = plan.period?.yearly ?? "/year";

  return (
    <section className={cn("py-32", className)}>
      <div className="container">
        <div className="mx-auto mb-10 max-w-5xl text-center">
          <h2 className="mb-4 text-4xl font-semibold tracking-tight text-pretty lg:text-5xl">
            {heading}
          </h2>
          <p className="text-muted-foreground lg:text-lg">{description}</p>
        </div>
        <div className="mx-auto flex max-w-lg flex-col items-center gap-8">
          <div className="flex items-center gap-4 text-sm font-semibold">
            <span>Mensal</span>
            <Switch
              className="scale-125"
              checked={isYearly}
              onCheckedChange={() => setIsYearly((v) => !v)}
            />
            <span className="inline-flex items-center gap-2">
              Anual
              {discount ? (
                <span className="rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary">
                  {discount}
                </span>
              ) : null}
            </span>
          </div>
          <Card className="w-full border border-border shadow-none">
            <CardHeader className="gap-0">
              <CardTitle className="flex flex-wrap items-center gap-2 text-lg font-semibold">
                {plan.name}
              </CardTitle>
              <div className="mt-2 flex flex-wrap items-end gap-x-1.5 lg:mt-3">
                <span className="text-5xl font-semibold tracking-tight lg:text-6xl">
                  {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="pb-1 text-base text-muted-foreground lg:pb-1.5 lg:text-lg">
                  {isYearly ? periodYearly : periodMonthly}
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground lg:mt-5">
                {plan.description}
              </p>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              {plan.featureListLabel ? (
                <p className="mb-3 text-sm font-semibold">
                  {plan.featureListLabel}
                </p>
              ) : null}
              <ul className="flex flex-col gap-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <CircleCheck className="mt-0.5 size-4 shrink-0" />
                    <span className="min-w-0 text-pretty">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex-col gap-2 sm:flex-row">
              <Button className="w-full" variant="default" asChild>
                <a href={plan.button.url} target="_blank" rel="noreferrer">
                  <MessageCircle data-icon="inline-start" />
                  {plan.button.text}
                </a>
              </Button>
              {plan.secondaryButton ? (
                <Button variant="outline" className="w-full" asChild>
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
            </CardFooter>
          </Card>
          {plan.priceNote ? (
            <p className="text-center text-xs text-muted-foreground">
              {plan.priceNote}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export { Pricing100 };
