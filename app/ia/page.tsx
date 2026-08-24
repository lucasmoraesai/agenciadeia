import type { Metadata } from "next";
import { AgencyPage, Icons } from "@/components/agency-page";
import { IA_FAQ } from "@/lib/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Agência de IA | Agentes 24/7 desde R$ 3.000/mês",
  description:
    "Agência de IA: agentes de IA 24/7, automações inteligentes, vibe coding, chatbots, análise de dados e consultoria em IA para empresas. Assinatura mensal com horas ilimitadas e prazo de 48h.",
  path: "/ia/",
});

export default function IaPage() {
  return (
    <AgencyPage
      title="Agência de IA"
      subtitle="Agentes e automações que trabalham por você, 24/7, no piloto automático."
      whatsappMessage="Quero automatizar minha empresa com IA."
      servicesEyebrow="O que fazemos"
      servicesTitle="Agentes de IA que trabalham por você."
      servicesSubtitle="Automação inteligente, agentes e vibe coding — integrados ao seu dia a dia."
      services={[
        {
          id: "agentes",
          title: "Agentes de IA",
          body: "Agentes que executam tarefas de ponta a ponta.",
          icon: Icons.bot,
        },
        {
          id: "automacoes",
          title: "Automações inteligentes",
          body: "Fluxos que decidem e agem sozinhos.",
          icon: Icons.sparkles,
        },
        {
          id: "vibe-coding",
          title: "Vibe coding",
          body: "Produtos e features construídos com IA.",
          icon: Icons.zap,
        },
        {
          id: "chatbots",
          title: "Chatbots & atendimento",
          body: "Atendimento 24/7 que resolve de verdade.",
          icon: Icons.chat,
        },
        {
          id: "dados",
          title: "Análise de dados",
          body: "Insights automáticos dos seus dados.",
          icon: Icons.cpu,
        },
        {
          id: "integracoes",
          title: "Integrações",
          body: "IA conectada ao seu CRM, ERP e WhatsApp.",
          icon: Icons.plug,
        },
        {
          id: "consultoria",
          title: "Consultoria em IA",
          body: "Onde aplicar IA no seu negócio, com plano.",
          icon: Icons.compass,
        },
        {
          id: "infra",
          title: "Modelos & infra",
          body: "Setup de modelos, prompts e infraestrutura.",
          icon: Icons.cpu,
        },
      ]}
      firingsTitle="Chega de IA que só faz teste."
      firings={[
        "Demita a consultoria cara de IA.",
        "Demita o piloto que nunca sai do papel.",
        "Demita o estagiário de prompts.",
      ]}
      faq={IA_FAQ}
    />
  );
}
