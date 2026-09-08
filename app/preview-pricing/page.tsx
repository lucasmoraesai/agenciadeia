import type { Metadata } from "next";
import { Pricing100 } from "@/components/pricing100";
import { Pricing105 } from "@/components/pricing105";
import { Pricing106 } from "@/components/pricing106";
import { whatsappHref } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Preview de pricing",
  robots: { index: false, follow: false },
};

const PLAN = {
  name: "nohumans",
  description:
    "Sua agência por assinatura — todas as agências e departamentos, horas ilimitadas.",
  monthlyPrice: "R$ 6.000",
  yearlyPrice: "R$ 50.400",
  period: { monthly: "/mês", yearly: "/ano" },
  featureListLabel: "O que está incluso",
  features: [
    "Automação de processos",
    "Agentes de IA",
    "Marketing no piloto automático",
    "Software sob medida",
    "Horas ilimitadas, 1 demanda por vez",
    "Entrega em até 48h",
  ],
  button: {
    text: "Falar no WhatsApp",
    url: whatsappHref("Quero assinar o plano de R$ 6.000/mês da nohumans."),
  },
  secondaryButton: {
    text: "Agendar reunião",
    url: whatsappHref("Quero agendar uma reunião sobre o plano da nohumans."),
  },
  priceNote: "Sem fidelidade. Pausa ou cancela quando quiser.",
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

export default function PreviewPricingPage() {
  return (
    <>
      <div className="border-b border-border py-16 text-center">
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          Preview — branch novo-pricing
        </p>
        <h1 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
          Escolha uma das 3 opções de pricing.
        </h1>
        <p className="mt-3 text-muted">
          Depois de escolher, eu adapto pro tom do site e ligo na seção Planos.
        </p>
      </div>

      <Option label="Opção A — pricing105 · painel único">
        <Pricing105
          className="py-16"
          heading="Um preço. Tudo incluso."
          description="Sem tier, sem pacote, sem letra miúda. Uma assinatura, todas as agências."
          plan={PLAN}
        />
      </Option>

      <Option label="Opção B — pricing100 · card central + toggle mensal/anual">
        <Pricing100
          className="py-16"
          heading="Um preço. Tudo incluso."
          description="Sem tier, sem pacote, sem letra miúda. Uma assinatura, todas as agências."
          discount="-30%"
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
