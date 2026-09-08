import type { ReactNode } from "react";
import { Container } from "./container";
import { BentoCard, BentoGrid } from "./magicui/bento-grid";
import { BlurFade } from "./magicui/blur-fade";
import { SplineScene } from "./ui/splite";

type IconProps = {
  className?: string;
};

type ServiceItem = {
  id: string;
  title: string;
  body: string;
  className: string;
  visual?: ReactNode;
  icon: (props: IconProps) => ReactNode;
};

function IconFrame({ children, className }: { children: ReactNode; className?: string }) {
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

const SERVICES: ServiceItem[] = [
  {
    id: "automacao",
    title: "Automação de Processos",
    body: "Fluxos que rodam sozinhos, ponta a ponta.",
    className: "col-span-2 md:col-span-2 md:row-span-2",
    visual: (
      <SplineScene
        scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
        className="h-full w-full"
      />
    ),
    icon: (props: IconProps) => (
      <IconFrame {...props}>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" />
      </IconFrame>
    ),
  },
  {
    id: "agentes",
    title: "Agentes de IA",
    body: "Agentes que trabalham por você, 24/7.",
    className: "",
    icon: (props: IconProps) => (
      <IconFrame {...props}>
        <rect x="5" y="8" width="14" height="12" rx="3" />
        <path d="M12 8V4" />
        <circle cx="12" cy="3.5" r="1" />
        <path d="M9 12.5h.01M15 12.5h.01" />
        <path d="M9 16.5h6" />
      </IconFrame>
    ),
  },
  {
    id: "landing",
    title: "Criação de Landing Pages",
    body: "Páginas rápidas, feitas pra converter.",
    className: "",
    icon: (props: IconProps) => (
      <IconFrame {...props}>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18" />
        <path d="M7 13h4M7 17h7" />
      </IconFrame>
    ),
  },
  {
    id: "crm",
    title: "CRM",
    body: "Pipeline, follow-up e proposta automatizados.",
    className: "",
    icon: (props: IconProps) => (
      <IconFrame {...props}>
        <path d="M4 4h16l-5.5 7.5V20l-5-2.5v-6L4 4Z" />
      </IconFrame>
    ),
  },
  {
    id: "plataformas",
    title: "Plataformas",
    body: "Sistemas sob medida, integrados ao seu negócio.",
    className: "",
    icon: (props: IconProps) => (
      <IconFrame {...props}>
        <path d="m12 3 9 5-9 5-9-5 9-5Z" />
        <path d="m3 13 9 5 9-5" />
      </IconFrame>
    ),
  },
  {
    id: "dashboards",
    title: "Dashboards",
    body: "Seus números em tempo real, num painel.",
    className: "md:col-span-2",
    icon: (props: IconProps) => (
      <IconFrame {...props}>
        <path d="M4 20v-6M10 20V8M16 20v-10" />
        <path d="M2 20h20" />
      </IconFrame>
    ),
  },
  {
    id: "relatorios",
    title: "Relatórios",
    body: "Relatórios recorrentes, prontos e entregues.",
    className: "",
    icon: (props: IconProps) => (
      <IconFrame {...props}>
        <path d="M7 3h7l5 5v13H7V3Z" />
        <path d="M14 3v5h5" />
        <path d="M9 13h6M9 17h6" />
      </IconFrame>
    ),
  },
  {
    id: "integracoes",
    title: "Integrações",
    body: "Sistemas conectados: APIs, ERPs e WhatsApp.",
    className: "",
    icon: (props: IconProps) => (
      <IconFrame {...props}>
        <path d="M12 22v-5" />
        <path d="M9 8V2M15 8V2" />
        <path d="M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z" />
      </IconFrame>
    ),
  },
];

export function Services() {
  return (
    <section id="servicos" className="py-24">
      <Container>
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          Serviços
        </p>
        <h2 className="tracking-tighter-display mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">
          Automatizamos o que roda a sua empresa.
        </h2>
        <p className="mt-4 max-w-xl text-muted">
          Tudo que você faz hoje na mão, no piloto automático.
        </p>
        <BentoGrid className="mt-12">
          {SERVICES.map((service, i) => (
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
                visual={service.visual}
              />
            </BlurFade>
          ))}
        </BentoGrid>
      </Container>
    </section>
  );
}
