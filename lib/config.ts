export const SITE_URL = "https://agenciadeia.tech";
export const SITE_NAME = "nohumans";

export const EMAIL = "contato@lucasmoraes.ai";
export const WHATSAPP = "5511983507618";
export const WHATSAPP_DISPLAY = "+55 11 98350-7618";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP}`;
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
  {
    id: "compras",
    title: "Compras",
    body: "Cotação, fornecedor, pedido e follow-up.",
  },
  {
    id: "sucesso",
    title: "Sucesso do cliente",
    body: "Onboarding, retenção, NPS e expansão.",
  },
] as const;

export const AVULSO_PRICE = "R$ 3.000";
export const AVULSO_AMOUNT = 3000;
export const AVULSO_PERIOD = "/mês por departamento";
export const ILIMITADO_AMOUNT = 6000;

export const PLANS = [
  {
    id: "departamento",
    name: "Por departamento",
    price: "R$ 3.000",
    period: "/mês",
    quota: "1 departamento",
    featured: false,
    href: "#avulsos",
    cta: "Escolher departamento",
    includes: [
      "Kickoff após o pagamento",
      "Grupo no WhatsApp",
      "1 departamento à sua escolha",
      "Reunião mensal",
      "CS dedicado",
      "Suporte VIP",
      "Horas ilimitadas, 1 demanda, prazo 48h",
    ],
  },
  {
    id: "ilimitado",
    name: "Ilimitado",
    price: "R$ 6.000",
    period: "/mês",
    quota: "Todos os departamentos",
    featured: true,
    href: "/checkout/?plan=ilimitado",
    cta: "Assinar Ilimitado",
    includes: [
      "Kickoff após o pagamento",
      "Grupo no WhatsApp",
      "Todos os departamentos",
      "Reunião semanal",
      "CS dedicado",
      "Suporte VIP",
      "Horas ilimitadas, 1 demanda, prazo 48h",
    ],
  },
] as const;

/**
 * Chaves de RECEBER do Nubank (nunca seed / senha / private key).
 * - PIX: chave aleatória
 * - BTC / ETH: endereço de depósito do Nubank Cripto
 */
export const PAYMENT = {
  pixKey: "cead9a0f-04b2-42f7-a80b-be7674ec8671",
  pixName: "Lucas Moraes",
  /** Cidade do recebedor no BR Code PIX (máx. 15 chars, sem acento). */
  pixCity: "SAO PAULO",
  btcAddress: "bc1q98zg40swsnhvrgalwezswzrfj88qtgjq7km0c6",
  ethAddress: "0x7F8379cb62fB9C6DB9dCBc0716D4976665e80628",
};

export const STEPS = [
  {
    n: "01",
    title: "Contrata",
    body: "Plano ou departamento. Mensal. Pausa ou cancela quando quiser.",
  },
  {
    n: "02",
    title: "Criamos o grupo",
    body: "Depois do pagamento, kickoff: configuramos o WhatsApp e entendemos a demanda.",
  },
  {
    n: "03",
    title: "Você pede",
    body: "Manda no grupo. Uma demanda ativa por vez. CS dedicado e suporte VIP.",
  },
  {
    n: "04",
    title: "Entregamos",
    body: "Prazo de até 48h. Reunião mensal no departamento, semanal no Ilimitado.",
  },
] as const;
