export const SITE_URL = "https://agenciadeia.tech";
export const SITE_NAME = "nohumans";

export const EMAIL = "contato@lucasmoraes.ai";
export const INSTAGRAM = "https://www.instagram.com/lucasmoraes.ai/";
export const INSTAGRAM_HANDLE = "@lucasmoraes.ai";
export const LINKEDIN = "https://www.linkedin.com/in/lucasmoraesai/";
export const PHOTO_PROFILE = "/photos/perfil.jpg";

export const HERO_WORDS = ["IA", "Automação", "Vibe Coding", "Claude Code"] as const;

export const AVULSOS = [
  {
    id: "marketing",
    title: "Marketing",
    body: "Campanha, conteúdo, criativo e canais.",
  },
  {
    id: "vendas",
    title: "Vendas",
    body: "CRM, follow-up, proposta e closer.",
  },
  {
    id: "atendimento",
    title: "Atendimento",
    body: "WhatsApp, ticket, FAQ e handoff.",
  },
  {
    id: "financeiro",
    title: "Financeiro",
    body: "Relatório, conciliação, cobrança e dashboard.",
  },
  {
    id: "operacoes",
    title: "Operações",
    body: "Processo, integração e agente no dia a dia.",
  },
  {
    id: "rh",
    title: "RH",
    body: "Admissão, onboarding, vaga e rotina de people.",
  },
  {
    id: "produto",
    title: "Produto",
    body: "Roadmap, spec, protótipo e vibe coding.",
  },
  {
    id: "tecnologia",
    title: "Tecnologia",
    body: "Automação interna, Claude Code e stack.",
  },
  {
    id: "juridico",
    title: "Jurídico",
    body: "Contrato, cláusula, revisão e minuta.",
  },
  {
    id: "dados",
    title: "Dados",
    body: "Painel, extração, BI e relatório recorrente.",
  },
] as const;

export const AVULSO_PRICE = "R$ 3.000";
export const AVULSO_PERIOD = "/mês por departamento";

export const PLANS = [
  {
    id: "departamento",
    name: "Departamento",
    price: "R$ 3.000",
    period: "/mês",
    quota: "1 departamento",
    featured: false,
    includes: [
      "Grupo no WhatsApp",
      "1 departamento à sua escolha",
      "1 demanda ativa por vez",
      "Fila o mês todo",
      "Pausa ou cancela quando quiser",
    ],
  },
  {
    id: "dupla",
    name: "Dupla",
    price: "R$ 5.000",
    period: "/mês",
    quota: "2 departamentos",
    featured: false,
    includes: [
      "Grupo no WhatsApp",
      "2 departamentos à sua escolha",
      "1 demanda ativa por vez",
      "Fila o mês todo nos dois",
      "Pausa ou cancela quando quiser",
    ],
  },
  {
    id: "ilimitado",
    name: "Ilimitado",
    price: "R$ 7.000",
    period: "/mês",
    quota: "Todos os departamentos",
    featured: true,
    includes: [
      "Grupo no WhatsApp",
      "Todos os departamentos",
      "2 demandas em paralelo",
      "Fila o mês todo",
      "Pausa ou cancela quando quiser",
    ],
  },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "Escolhe o plano",
    body: "Um departamento, dois, ou todos. Mensal. Pausa ou cancela quando quiser.",
  },
  {
    n: "02",
    title: "Entra no WhatsApp",
    body: "A gente abre o grupo. É por ali que o trabalho entra e sai.",
  },
  {
    n: "03",
    title: "Manda a demanda",
    body: "Uma ativa por vez. Quando fecha, puxa a próxima da fila.",
  },
] as const;
