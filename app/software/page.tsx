import type { Metadata } from "next";
import { AgencyPage, Icons } from "@/components/agency-page";
import { SOFTWARE_FAQ } from "@/lib/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Agência de Software | Sistemas sob medida em dias",
  description:
    "Agência de software com IA: sistemas sob medida, aplicações web, integrações, dashboards e MVPs entregues em dias com vibe coding. Assinatura mensal com horas ilimitadas e prazo de 48h.",
  path: "/software/",
});

export default function SoftwarePage() {
  return (
    <AgencyPage
      title="Agência de Software"
      subtitle="Sistemas, apps e integrações sob medida — construídos em dias, com vibe coding."
      whatsappMessage="Quero construir um software com a agência de software."
      servicesEyebrow="O que construímos"
      servicesTitle="Software sob medida, entregue em dias."
      servicesSubtitle="Do zero ou evoluindo o que já existe — com qualidade de produto, não de gambiarra."
      services={[
        {
          id: "apps",
          title: "Aplicações web",
          body: "Sistemas e apps completos, prontos para produção.",
          icon: Icons.code,
        },
        {
          id: "sob-medida",
          title: "Sistemas sob medida",
          body: "Feitos para o seu processo, não o contrário.",
          icon: Icons.layers,
        },
        {
          id: "integracoes",
          title: "Integrações & APIs",
          body: "Conectamos seus sistemas: ERPs, CRMs e APIs.",
          icon: Icons.plug,
        },
        {
          id: "dashboards",
          title: "Dashboards",
          body: "Painéis com seus números em tempo real.",
          icon: Icons.gauge,
        },
        {
          id: "landing",
          title: "Landing pages",
          body: "Páginas rápidas, feitas pra converter.",
          icon: Icons.layout,
        },
        {
          id: "automacoes",
          title: "Automações",
          body: "Processos que rodam sozinhos, ponta a ponta.",
          icon: Icons.workflow,
        },
        {
          id: "manutencao",
          title: "Manutenção & evolução",
          body: "Acompanhamento contínuo, melhorias e suporte.",
          icon: Icons.shield,
        },
        {
          id: "mvp",
          title: "MVP em dias",
          body: "Valide sua ideia antes de investir pesado.",
          icon: Icons.rocket,
        },
      ]}
      firingsTitle="Chega de projeto que nunca fica pronto."
      firings={[
        "Demita seus devs caros.",
        "Demita o sistema legado que trava.",
        "Demita o prazo de 6 meses pra um MVP.",
      ]}
      faq={SOFTWARE_FAQ}
    />
  );
}
