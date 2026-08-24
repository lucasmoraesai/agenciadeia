import type { Metadata } from "next";
import { AgencyPage, Icons } from "@/components/agency-page";

export const metadata: Metadata = {
  title: "Agência de Automação",
  description:
    "Agência de Automação: processos ponta a ponta, integrações e fluxos que rodam sozinhos — sem depender de ninguém.",
};

export default function AutomacaoPage() {
  return (
    <AgencyPage
      title="Agência de Automação"
      subtitle="Processos ponta a ponta — fluxos que rodam sozinhos, sem depender de ninguém."
      whatsappMessage="Quero automatizar os processos da minha empresa."
      servicesEyebrow="O que automatizamos"
      servicesTitle="Sua operação no piloto automático."
      servicesSubtitle="Do kickoff à entrega, tudo rodando sozinho — com menos erro e mais tempo pra você."
      services={[
        {
          id: "processos",
          title: "Automação de processos",
          body: "Fluxos que rodam sozinhos, ponta a ponta.",
          icon: Icons.workflow,
        },
        {
          id: "integracoes",
          title: "Integrações",
          body: "CRM, ERP, planilhas e APIs conectados.",
          icon: Icons.plug,
        },
        {
          id: "rpa",
          title: "Robôs (RPA)",
          body: "Tarefas repetitivas feitas por robôs, sem erro.",
          icon: Icons.bot,
        },
        {
          id: "vendas",
          title: "Automação de vendas",
          body: "Follow-up, proposta e CRM no automático.",
          icon: Icons.funnel,
        },
        {
          id: "atendimento",
          title: "Automação de atendimento",
          body: "WhatsApp e tickets respondidos na hora.",
          icon: Icons.chat,
        },
        {
          id: "marketing",
          title: "Automação de marketing",
          body: "Campanhas e nutrição rodando sozinhas.",
          icon: Icons.megaphone,
        },
        {
          id: "financeiro",
          title: "Automação financeira",
          body: "Cobrança, conciliação e relatórios automáticos.",
          icon: Icons.chart,
        },
        {
          id: "dashboards",
          title: "Dashboards",
          body: "Seus números em tempo real, sem planilha manual.",
          icon: Icons.gauge,
        },
      ]}
      firingsTitle="Chega de processo manual."
      firings={[
        "Demita a planilha que ninguém atualiza.",
        "Demita o retrabalho de digitar duas vezes.",
        "Demita o processo que depende de você.",
      ]}
    />
  );
}
