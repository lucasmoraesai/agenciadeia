import type { FaqItem } from "./seo";

/**
 * Conteúdo de FAQ — otimizado para SEO (FAQPage schema) e GEO
 * (motores de IA citam respostas diretas, factuais e com números).
 * Mantenha as respostas completas: elas são o que o Google e
 * ChatGPT/Perplexity/AI Overviews extraem.
 */

export const HOME_FAQ: FaqItem[] = [
  {
    q: "O que é a nohumans?",
    a: "A nohumans (agenciadeia.tech) é uma agência de IA e automação para empresas brasileiras. Por assinatura mensal, ela assume frentes da sua empresa — automação de processos, IA, marketing, software e UX — com entrega via grupo de WhatsApp e prazo de até 48 horas por demanda.",
  },
  {
    q: "Quanto custa a nohumans?",
    a: "Os planos custam R$ 3.000/mês (1 agência + 1 departamento, por exemplo Agência de Automação + Marketing) ou R$ 6.000/mês no plano Ilimitado, que inclui todas as agências e todos os departamentos. Não há fidelidade: você pausa ou cancela quando quiser.",
  },
  {
    q: "O que está incluso na assinatura?",
    a: "Horas ilimitadas com 1 demanda ativa por vez, prazo de entrega de até 48h, grupo no WhatsApp com kickoff após o pagamento, reunião mensal (semanal no plano Ilimitado), CS dedicado e suporte VIP.",
  },
  {
    q: "Como funciona a entrega?",
    a: "Depois do pagamento, criamos um grupo no WhatsApp. Você envia a demanda, e entregamos em até 48 horas. O modelo permite 1 demanda ativa por vez para garantir qualidade e cumprimento de prazo.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "PIX (instantâneo), Bitcoin e Ethereum. O checkout gera o QR Code na hora, direto no site, com cotação automática de cripto.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim. A assinatura é mensal, sem fidelidade — você pode pausar ou cancelar quando quiser, direto pelo grupo ou com o CS dedicado.",
  },
  {
    q: "Para quem é a nohumans?",
    a: "Para PMEs, agências e empreendedores que querem automatizar operação, vendas, marketing, atendimento e financeiro sem contratar um time inteiro — usando IA no lugar de processos manuais e caros.",
  },
  {
    q: "O que é automação de processos com IA?",
    a: "É colocar fluxos de trabalho no piloto automático: follow-up de vendas, atendimento no WhatsApp, conciliação financeira, relatórios e integrações entre CRM, ERP e planilhas — tarefas repetitivas executadas por agentes de IA 24/7.",
  },
];

export const AUTOMACAO_FAQ: FaqItem[] = [
  {
    q: "O que é uma agência de automação?",
    a: "Uma agência de automação cria fluxos e robôs (RPA) que executam processos sozinhos, ponta a ponta — integrando CRM, ERP, planilhas, WhatsApp e APIs para a empresa rodar sem trabalho manual e sem depender de pessoas para tarefas repetitivas.",
  },
  {
    q: "Quais processos posso automatizar?",
    a: "Vendas (follow-up, proposta, CRM), atendimento (WhatsApp, tickets), marketing (campanhas, nutrição), financeiro (cobrança, conciliação, relatórios) e operações (integrações, dashboards e processos internos).",
  },
  {
    q: "Quanto custa automatizar minha empresa?",
    a: "A assinatura de automação custa R$ 3.000/mês (Agência de Automação + 1 departamento) ou R$ 6.000/mês no plano Ilimitado, com horas ilimitadas, prazo de até 48h por demanda e entrega via WhatsApp.",
  },
];

export const IA_FAQ: FaqItem[] = [
  {
    q: "O que é uma agência de IA?",
    a: "É uma agência que usa inteligência artificial para executar o trabalho de uma empresa: agentes de IA que atendem, vendem, analisam dados e constroem software, trabalhando 24/7 sem depender de um time humano.",
  },
  {
    q: "O que são agentes de IA?",
    a: "São IAs que executam tarefas de ponta a ponta com autonomia: decidem, agem e se corrigem — conectadas ao CRM, ERP e WhatsApp da empresa, com supervisão humana apenas quando necessário.",
  },
  {
    q: "Como usar IA na minha empresa?",
    a: "O caminho típico: mapear os processos repetitivos, escolher as automações de maior retorno, implementar agentes integrados às ferramentas que você já usa e acompanhar os resultados em dashboards em tempo real.",
  },
];

export const MARKETING_FAQ: FaqItem[] = [
  {
    q: "O que faz uma agência de marketing com IA?",
    a: "Cria e opera campanhas, conteúdo, criativos e canais com IA — produção mais rápida, testes constantes e otimização automática de performance, com relatórios em tempo real do que está convertendo.",
  },
  {
    q: "O que está incluso no plano de marketing?",
    a: "Campanhas de performance, conteúdo e copy, criativos e anúncios, SEO, social media, funil e CRM, e-mail marketing e relatórios — tudo dentro da assinatura mensal, com prazo de até 48h por demanda.",
  },
  {
    q: "Quanto custa uma agência de marketing?",
    a: "A assinatura custa R$ 3.000/mês (Agência de Marketing + 1 departamento) ou R$ 6.000/mês no Ilimitado — enquanto agências de marketing tradicionais cobram a partir de R$ 3.000 a R$ 10.000/mês, sem o mesmo volume de execução.",
  },
];

export const SOFTWARE_FAQ: FaqItem[] = [
  {
    q: "O que é uma agência de software?",
    a: "É uma agência que constrói sistemas, aplicações web, integrações e landing pages sob medida — com desenvolvimento acelerado por IA (vibe coding) e entrega em dias, não em meses.",
  },
  {
    q: "Quanto custa desenvolver um sistema sob medida?",
    a: "No modelo de assinatura, R$ 3.000/mês (1 agência + 1 departamento) ou R$ 6.000/mês no Ilimitado, com horas ilimitadas. No mercado tradicional, um sistema simples parte de R$ 10.000 a R$ 30.000 em projetos avulsos, sem manutenção inclusa.",
  },
  {
    q: "O que é vibe coding?",
    a: "É o desenvolvimento de software assistido por IA: o código é escrito e revisado com agentes de IA, o que reduz drasticamente o tempo de entrega e o custo, mantendo qualidade de produto quando há revisão humana especializada.",
  },
];

export const UXUI_FAQ: FaqItem[] = [
  {
    q: "O que é uma agência de UX?",
    a: "É uma agência especializada em interfaces bonitas e funcionais — do protótipo ao produto final — com foco em usabilidade, conversão e consistência visual, desenhadas com apoio de IA.",
  },
  {
    q: "O que está incluso em UX/UI?",
    a: "Design de interface, design system, protótipos rápidos, landing pages, branding e identidade, pesquisa com usuários, testes de usabilidade e design de produto — dentro da assinatura mensal.",
  },
  {
    q: "Quanto custa um projeto de UX/UI?",
    a: "Na assinatura, R$ 3.000/mês (Agência de UX + 1 departamento) ou R$ 6.000/mês no Ilimitado. Projetos avulsos de design de interface no mercado costumam custar de R$ 5.000 a R$ 20.000, dependendo do escopo.",
  },
];
