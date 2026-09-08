import { Pricing105 } from "./pricing105";
import { whatsappHref } from "@/lib/whatsapp";

export function Plans() {
  return (
    <div id="planos" className="border-b border-border">
      <Pricing105
        className="py-24"
        heading="Um preço. Tudo incluso."
        description="Sem tier, sem pacote, sem letra miúda. Uma assinatura, todas as agências — você pede, a gente entrega em até 48h."
        plan={{
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
            url: whatsappHref(
              "Quero assinar o plano de R$ 6.000/mês da nohumans.",
            ),
          },
          secondaryButton: {
            text: "Agendar reunião",
            url: "https://cal.com/lucas-moraes-zxcwn7/nohumans",
          },
        }}
      />
    </div>
  );
}
