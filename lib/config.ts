export const SITE_URL = "https://agenciadeia.tech";
export const SITE_NAME = "Agência de IA";

export const EMAIL = "contato@lucasmoraes.ai";
export const INSTAGRAM = "https://www.instagram.com/lucasmoraes.ai/";
export const INSTAGRAM_HANDLE = "@lucasmoraes.ai";
export const LINKEDIN = "https://www.linkedin.com/in/lucasmoraesai/";
export const PHOTO_PROFILE = "/photos/perfil.jpg";

export const HERO_WORDS = ["IA", "Automação", "Vibe Coding", "Claude Code"] as const;

export const SERVICES = [
  {
    id: "ia",
    title: "IA",
    body: "Agentes, copilots e operação que o time usa no dia seguinte. Produção, não piloto.",
  },
  {
    id: "automacao",
    title: "Automação",
    body: "Workflows, CRM, follow-up e relatórios rodando sozinhos. Menos clique, mais decisão.",
  },
  {
    id: "vibe-coding",
    title: "Vibe Coding",
    body: "Do brief ao deploy. Produto no ar — não demo que some.",
  },
  {
    id: "claude-code",
    title: "Claude Code",
    body: "Repos, skills e pipelines para o time shippar com Claude, não só conversar com ele.",
  },
] as const;

export const STEPS = [
  {
    n: "01",
    title: "Contrata o plano",
    body: "Start, Produção ou Empresa. Mensal, cancela quando quiser.",
  },
  {
    n: "02",
    title: "Entra no grupo",
    body: "A gente abre um WhatsApp só da sua empresa, no mesmo dia.",
  },
  {
    n: "03",
    title: "Manda. A gente faz.",
    body: "Cada pedido no grupo é uma solicitação. Entrega no ar, dentro do plano.",
  },
] as const;

export const PLANS = [
  {
    id: "start",
    name: "Start",
    price: "R$ 4.900",
    period: "/mês",
    quota: "8 solicitações",
    who: "Para começar a automatizar",
    featured: false,
    includes: [
      "Grupo no WhatsApp",
      "8 solicitações por mês",
      "1 demanda por vez",
      "IA, automação, vibe coding ou Claude Code",
      "Prazo: até 3 dias úteis",
    ],
  },
  {
    id: "producao",
    name: "Produção",
    price: "R$ 9.900",
    period: "/mês",
    quota: "20 solicitações",
    who: "Operação no automático",
    featured: true,
    includes: [
      "Grupo no WhatsApp",
      "20 solicitações por mês",
      "2 demandas em paralelo",
      "Todas as frentes",
      "Prazo: até 2 dias úteis",
    ],
  },
  {
    id: "empresa",
    name: "Empresa",
    price: "R$ 19.900",
    period: "/mês",
    quota: "Fila contínua",
    who: "Manda à vontade, a gente fila",
    featured: false,
    includes: [
      "Grupo no WhatsApp + call quinzenal",
      "Solicitações ilimitadas, 2 em paralelo",
      "Prioridade na fila",
      "Conselho de IA incluso",
      "Prazo: até 1 dia útil",
    ],
  },
] as const;

export const PLAN_NOTES = [
  {
    q: "O que conta como 1 solicitação?",
    a: "Um pedido, uma entrega. Trocar um fluxo, subir uma página, criar um agente, ligar um CRM. Se for maior que um dia de trabalho, a gente quebra em partes — e cada parte conta.",
  },
  {
    q: "Por que não vender hora?",
    a: "Hora obriga o cliente a adivinhar esforço. Solicitação é o que entra no WhatsApp: você manda, a gente entrega. Mais fácil de comprar e de operar.",
  },
  {
    q: "Sobra no fim do mês?",
    a: "Não acumula. O plano é capacidade do mês, não banco de horas. Pausa ou cancela quando quiser.",
  },
] as const;
