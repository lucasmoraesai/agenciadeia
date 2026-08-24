import type { Metadata } from "next";
import { AgencyPage, Icons } from "@/components/agency-page";
import { MARKETING_FAQ } from "@/lib/faq";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Agência de Marketing com IA | R$ 3.000/mês",
  description:
    "Agência de marketing com IA: campanhas de performance, conteúdo, criativos, SEO, social media, funil e CRM automatizados. Assinatura mensal com horas ilimitadas e prazo de 48h.",
  path: "/marketing/",
});

export default function MarketingPage() {
  return (
    <AgencyPage
      title="Agência de Marketing"
      subtitle="Campanhas, conteúdo, criativo e canais — tudo com IA, sem time caro."
      whatsappMessage="Quero uma agência de marketing com IA para minha empresa."
      servicesEyebrow="O que entregamos"
      servicesTitle="Marketing que roda no piloto automático."
      servicesSubtitle="Estratégia, execução e otimização — criados, publicados e ajustados por IA."
      services={[
        {
          id: "campanhas",
          title: "Campanhas de performance",
          body: "Tráfego pago, segmentação e otimização contínua.",
          icon: Icons.target,
        },
        {
          id: "conteudo",
          title: "Conteúdo & copy",
          body: "Posts, roteiros, e-mails e landing pages prontos.",
          icon: Icons.pen,
        },
        {
          id: "criativos",
          title: "Criativos & anúncios",
          body: "Criativos que param o feed, em escala.",
          icon: Icons.megaphone,
        },
        {
          id: "seo",
          title: "SEO & autoridade",
          body: "Conteúdo que ranqueia e posiciona sua marca.",
          icon: Icons.search,
        },
        {
          id: "social",
          title: "Social media",
          body: "Calendário, publicação e engajamento no automático.",
          icon: Icons.globe,
        },
        {
          id: "funil",
          title: "Funil & CRM",
          body: "Lead, follow-up e proposta automatizados.",
          icon: Icons.funnel,
        },
        {
          id: "email",
          title: "E-mail & automação",
          body: "Sequências que nutrem e vendem sozinhas.",
          icon: Icons.mail,
        },
        {
          id: "metricas",
          title: "Relatórios & métricas",
          body: "Painel em tempo real do que está convertendo.",
          icon: Icons.chart,
        },
      ]}
      firingsTitle="Chega de agência que não entrega."
      firings={[
        "Demita sua agência de marketing lenta.",
        "Demita o freelancer que some.",
        "Demita o tráfego que não converte.",
      ]}
      faq={MARKETING_FAQ}
    />
  );
}
