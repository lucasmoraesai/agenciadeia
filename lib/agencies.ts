export type AgencyFeature = { title: string; body: string; icon: string };

export type Agency = {
  id: "automacao-ia" | "growth" | "software-ux";
  name: string;
  eyebrow: string;
  headline: string;
  subtitle: string;
  features: AgencyFeature[];
};

export const AGENCIES: Agency[] = [
  {
    id: "automacao-ia",
    name: "Agência de Automação e IA",
    eyebrow: "Automação e IA",
    headline: "Sua operação no piloto automático.",
    subtitle:
      "Fluxos, robôs e agentes de IA que trabalham por você, 24/7 — do kickoff à entrega, sem depender de ninguém.",
    features: [
      { title: "Automação de processos", body: "Fluxos que rodam sozinhos, ponta a ponta.", icon: "workflow" },
      { title: "Integrações", body: "CRM, ERP, planilhas e APIs conectados.", icon: "plug" },
      { title: "Robôs (RPA)", body: "Tarefas repetitivas feitas por robôs, sem erro.", icon: "bot" },
      { title: "Agentes de IA", body: "Agentes que executam tarefas de ponta a ponta.", icon: "sparkles" },
      { title: "Vibe coding", body: "Produtos e features construídos com IA.", icon: "zap" },
      { title: "Chatbots & atendimento", body: "Atendimento 24/7 que resolve de verdade.", icon: "chat" },
      { title: "Análise de dados", body: "Insights automáticos dos seus dados.", icon: "cpu" },
      { title: "Dashboards", body: "Seus números em tempo real, num painel.", icon: "gauge" },
    ],
  },
  {
    id: "growth",
    name: "Agência de Growth",
    eyebrow: "Growth",
    headline: "Marketing que roda no piloto automático.",
    subtitle:
      "Estratégia, execução e otimização — campanhas, conteúdo e canais criados, publicados e ajustados por IA.",
    features: [
      { title: "Campanhas de performance", body: "Tráfego pago, segmentação e otimização contínua.", icon: "target" },
      { title: "Conteúdo & copy", body: "Posts, roteiros, e-mails e landing pages prontos.", icon: "pen" },
      { title: "Criativos & anúncios", body: "Criativos que param o feed, em escala.", icon: "megaphone" },
      { title: "SEO & autoridade", body: "Conteúdo que ranqueia e posiciona sua marca.", icon: "search" },
      { title: "Social media", body: "Calendário, publicação e engajamento no automático.", icon: "globe" },
      { title: "Funil & CRM", body: "Lead, follow-up e proposta automatizados.", icon: "funnel" },
      { title: "E-mail & automação", body: "Sequências que nutrem e vendem sozinhas.", icon: "mail" },
      { title: "Relatórios & métricas", body: "Painel em tempo real do que está convertendo.", icon: "chart" },
    ],
  },
  {
    id: "software-ux",
    name: "Agência de Software e UX",
    eyebrow: "Software e UX",
    headline: "Software sob medida, entregue em dias.",
    subtitle:
      "Sistemas, apps e interfaces construídos com vibe coding — com qualidade de produto, não de gambiarra.",
    features: [
      { title: "Aplicações web", body: "Sistemas e apps completos, prontos para produção.", icon: "code" },
      { title: "Sistemas sob medida", body: "Feitos para o seu processo, não o contrário.", icon: "layers" },
      { title: "Integrações & APIs", body: "Conectamos seus sistemas: ERPs, CRMs e APIs.", icon: "plug" },
      { title: "Dashboards", body: "Painéis com seus números em tempo real.", icon: "gauge" },
      { title: "Landing pages", body: "Páginas rápidas, feitas pra converter.", icon: "layout" },
      { title: "Design de interface", body: "Telas, apps e sites desenhados sob medida.", icon: "compass" },
      { title: "Manutenção & evolução", body: "Acompanhamento contínuo, melhorias e suporte.", icon: "shield" },
      { title: "MVP em dias", body: "Valide sua ideia antes de investir pesado.", icon: "rocket" },
    ],
  },
];
