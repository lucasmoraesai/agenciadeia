import type { ReactNode } from "react";
import { Container } from "./container";
import { Brands } from "./brands";
import { HowItWorks } from "./how-it-works";
import { Plans } from "./plans";
import { JsonLd } from "./json-ld";
import { BentoCard, BentoGrid } from "./magicui/bento-grid";
import { BlurFade } from "./magicui/blur-fade";
import { whatsappHref } from "@/lib/whatsapp";
import { faqSchema, serviceSchema, type FaqItem } from "@/lib/seo";

type IconProps = {
  className?: string;
};

type ServiceItem = {
  id: string;
  title: string;
  body: string;
  className?: string;
  icon: (props: IconProps) => ReactNode;
};

function IconFrame({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      {children}
    </svg>
  );
}

const icon = (children: ReactNode) => (props: IconProps) => (
  <IconFrame {...props}>{children}</IconFrame>
);

export const Icons = {
  target: icon(
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  pen: icon(
    <>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </>
  ),
  megaphone: icon(
    <>
      <path d="M3 11l18-5v12L3 13v-2z" />
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
    </>
  ),
  search: icon(
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),
  globe: icon(
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </>
  ),
  funnel: icon(<path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />),
  mail: icon(
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  chart: icon(
    <>
      <path d="M3 3v18h18" />
      <path d="M7 16v-5M12 16V8M17 16v-8" />
    </>
  ),
  code: icon(
    <>
      <path d="m8 6-6 6 6 6" />
      <path d="m16 6 6 6-6 6" />
    </>
  ),
  layers: icon(
    <>
      <path d="m12 2 9 5-9 5-9-5 9-5z" />
      <path d="m3 13 9 5 9-5" />
      <path d="m3 17 9 5 9-5" />
    </>
  ),
  plug: icon(
    <>
      <path d="M9 2v6M15 2v6" />
      <path d="M6 8h12v4a6 6 0 0 1-12 0V8z" />
      <path d="M12 18v4" />
    </>
  ),
  gauge: icon(
    <>
      <path d="M12 14l4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  layout: icon(
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18" />
      <path d="M7 6.5h.01" />
    </>
  ),
  workflow: icon(
    <>
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1.5" />
      <path d="M10 6.5h3.5a3.5 3.5 0 0 1 3.5 3.5v4" />
    </>
  ),
  shield: icon(
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  rocket: icon(
    <>
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </>
  ),
  bot: icon(
    <>
      <rect x="4" y="8" width="16" height="12" rx="3" />
      <path d="M12 8V4" />
      <circle cx="12" cy="3" r="1" />
      <path d="M9 12.5h.01M15 12.5h.01" />
      <path d="M9 16.5h6" />
    </>
  ),
  sparkles: icon(
    <>
      <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
      <path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z" />
    </>
  ),
  zap: icon(<path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />),
  chat: icon(
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10z" />
  ),
  cpu: icon(
    <>
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <rect x="9" y="9" width="6" height="6" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </>
  ),
  compass: icon(
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
    </>
  ),
};

export function AgencyPage({
  title,
  subtitle,
  whatsappMessage,
  servicesEyebrow,
  servicesTitle,
  servicesSubtitle,
  services,
  firingsTitle,
  firings,
  faq,
  hero,
}: {
  title: string;
  subtitle: string;
  whatsappMessage: string;
  servicesEyebrow: string;
  servicesTitle: string;
  servicesSubtitle?: string;
  services: ServiceItem[];
  firingsTitle: string;
  firings: string[];
  /** FAQ apenas como schema FAQPage (JSON-LD) — invisível na página. */
  faq?: FaqItem[];
  hero?: ReactNode;
}) {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: title,
          description: subtitle,
          offers: [
            {
              name: "Por agência",
              price: 3000,
              description: `${title} + 1 departamento, reunião mensal.`,
            },
            {
              name: "Ilimitado",
              price: 6000,
              description: "Todas as agências e departamentos, reunião semanal.",
            },
          ],
        })}
      />
      {faq && faq.length > 0 && <JsonLd data={faqSchema(faq)} />}
      {/* Hero */}
      {hero ?? (
      <section className="relative overflow-hidden border-b border-border">
        <div className="grid-backdrop pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[860px] -translate-x-1/2 rounded-full bg-white/[0.05] blur-[120px]" />
        <Container className="relative py-28 sm:py-36">
          <h1 className="rise tracking-tighter-display max-w-4xl text-5xl font-semibold leading-[1.02] sm:text-7xl lg:text-[84px]">
            {title}
          </h1>
          <p
            className="rise mt-7 max-w-xl text-xl text-muted"
            style={{ animationDelay: "80ms" }}
          >
            {subtitle}
          </p>
          <div
            className="rise mt-10 flex flex-wrap gap-3"
            style={{ animationDelay: "140ms" }}
          >
            <a
              href="#planos"
              className="rounded-md bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity hover:opacity-85"
            >
              Ver planos
            </a>
            <a
              href={whatsappHref(whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-border-strong px-5 py-2.5 text-sm font-medium transition-colors hover:bg-surface-hover"
            >
              Falar no WhatsApp
            </a>
          </div>
        </Container>
      </section>
      )}

      {/* Services */}
      <section id="servicos" className="border-b border-border py-24">
        <Container>
          <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
            {servicesEyebrow}
          </p>
          <h2 className="tracking-tighter-display mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
            {servicesTitle}
          </h2>
          {servicesSubtitle && (
            <p className="mt-4 max-w-xl text-muted">{servicesSubtitle}</p>
          )}
          <BentoGrid className="mt-12">
            {services.map((service, i) => (
              <BlurFade
                key={service.id}
                className={service.className}
                delay={i * 0.06}
                inView
                inViewMargin="-80px"
              >
                <BentoCard
                  name={service.title}
                  description={service.body}
                  Icon={service.icon}
                />
              </BlurFade>
            ))}
          </BentoGrid>
        </Container>
      </section>

      <Brands />
      <HowItWorks />
      <Plans />

      {/* Firings */}
      <section className="border-b border-border py-28 sm:py-32">
        <Container>
          <p className="tracking-tighter-display max-w-4xl text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-[64px]">
            {firingsTitle}
          </p>
          <ul className="mt-12 space-y-5">
            {firings.map((line) => (
              <li
                key={line}
                className="tracking-tighter-display max-w-4xl text-3xl font-semibold leading-[1.1] text-muted sm:text-4xl"
              >
                {line}
              </li>
            ))}
          </ul>
        </Container>
      </section>

    </>
  );
}
