import { Pricing105 } from "./pricing105";
import { Pricing106 } from "./pricing106";
import { whatsappHref } from "@/lib/whatsapp";

const PLAN = {
  name: "nohumans",
  description:
    "Sua agência por assinatura — todas as agências e departamentos, horas ilimitadas.",
  monthlyPrice: "R$ 6.000",
  yearlyPrice: "R$ 4.200",
  period: { monthly: "/mês", yearly: "/mês" },
  featureListLabel: "O que está incluso",
  features: [
    "Todas as agências: Automação, IA, Marketing e Software",
    "Todos os departamentos",
    "Horas ilimitadas, 1 demanda por vez",
    "Entrega em até 48h",
    "Setup e kickoff gratuitos",
    "CS dedicado e suporte VIP",
  ],
  button: {
    text: "Falar no WhatsApp",
    url: whatsappHref("Quero assinar o plano de R$ 6.000/mês da nohumans."),
  },
  secondaryButton: {
    text: "Agendar reunião",
    url: whatsappHref("Quero agendar uma reunião sobre o plano da nohumans."),
  },
  priceNote:
    "No anual, R$ 4.200/mês equivalente (R$ 50.400/ano). Sem fidelidade — pausa ou cancela quando quiser.",
};

function Option({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-border">
      <p className="border-b border-border px-6 py-3 text-center font-mono text-[11px] uppercase tracking-widest text-subtle">
        {label}
      </p>
      {children}
    </div>
  );
}

export function PricingPreview() {
  return (
    <>
      <Option label="Opção A — pricing105 · painel único">
        <Pricing105
          className="py-16"
          heading="Um preço. Tudo incluso."
          description="Sem tier, sem pacote, sem letra miúda. Uma assinatura, todas as agências."
          plan={PLAN}
        />
      </Option>

      <Option label="Opção C — pricing106 · split com toggle mensal/anual">
        <Pricing106
          className="py-16"
          heading="Um preço. Tudo incluso."
          description="Sem tier, sem pacote, sem letra miúda. Uma assinatura, todas as agências."
          discount="-30%"
          plan={PLAN}
        />
      </Option>
    </>
  );
}
