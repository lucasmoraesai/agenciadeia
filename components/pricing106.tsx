"use client";

import { Check } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

interface Pricing106Props extends PricingSingleProps {}
type Props = Partial<Pricing106Props>;

const defaultProps: Pricing106Props = {
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

const Pricing106 = (props: Props) => {
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
        <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
          <div>
            <h2 className="mb-4 text-4xl font-semibold tracking-tight text-pretty lg:text-5xl">
              {heading}
            </h2>
            <p className="mb-8 text-muted-foreground lg:text-lg">
              {description}
            </p>
            <div className="inline-flex items-center gap-3 rounded-full border bg-background px-4 py-2 text-sm font-medium">
              <span>Mensal</span>
              <Switch checked={isYearly} onCheckedChange={setIsYearly} />
              <span>
                Anual
                {discount ? (
                  <span className="ml-2 text-xs text-primary">{discount}</span>
                ) : null}
              </span>
            </div>
          </div>
          <Card className="border border-border shadow-none">
            <CardHeader className="gap-1">
              <CardTitle className="text-lg font-semibold">
                {plan.name}
              </CardTitle>
              <p className="text-3xl font-semibold tracking-tight lg:text-4xl">
                {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                <span className="text-base font-normal text-muted-foreground">
                  {isYearly ? periodYearly : periodMonthly}
                </span>
              </p>
              <p className="text-sm text-muted-foreground">
                {plan.description}
              </p>
            </CardHeader>
            <CardContent>
              <Separator className="mb-6" />
              <ul className="mb-8 flex flex-col gap-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0" />
                    <span className="min-w-0 text-pretty">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-2">
                <Button className="w-full" asChild>
                  <a href={plan.button.url} target="_blank" rel="noreferrer">
                    {plan.button.text}
                  </a>
                </Button>
                {plan.secondaryButton ? (
                  <Button variant="ghost" className="w-full" asChild>
                    <a
                      href={plan.secondaryButton.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {plan.secondaryButton.text}
                    </a>
                  </Button>
                ) : null}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export { Pricing106 };
