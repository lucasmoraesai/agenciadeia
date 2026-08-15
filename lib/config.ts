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
    body: "Do brief ao deploy em semanas. Produto no ar — não demo que some.",
  },
  {
    id: "claude-code",
    title: "Claude Code",
    body: "Repos, skills e pipelines para o time shippar com Claude, não só conversar com ele.",
  },
] as const;

export const PLANS = [
  {
    id: "start",
    name: "Start",
    price: "Sob consulta",
    period: "por projeto",
    who: "Primeiro sistema em produção",
    featured: false,
    includes: [
      "1 frente: IA, automação, vibe coding ou Claude Code",
      "Sprint de 2 a 4 semanas",
      "Entrega no ar, no seu stack",
      "Handoff com o time",
    ],
  },
  {
    id: "producao",
    name: "Produção",
    price: "Sob consulta",
    period: "por mês",
    who: "Operação contínua",
    featured: true,
    includes: [
      "Automação + Claude Code no dia a dia",
      "Iteração semanal no que já está no ar",
      "Canal direto com a agência",
      "Prioridade de correção e evolução",
    ],
  },
  {
    id: "empresa",
    name: "Empresa",
    price: "Sob consulta",
    period: "squad",
    who: "Time dedicado na sua stack",
    featured: false,
    includes: [
      "Todas as frentes sob uma direção",
      "Squad alocado no seu repo",
      "Conselho de IA incluso",
      "SLA e cadência com C-level",
    ],
  },
] as const;
