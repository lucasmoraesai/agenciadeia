import type { Metadata } from "next";
import { ProgramPage } from "@/components/program-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Quero ser uma Franquia",
  description:
    "Opere uma unidade da No Humans na sua região: modelo da marca, execução por IA e horas ilimitadas. Sem treinamento, mediante aprovação.",
  path: "/franquia/",
});

export default function FranquiaPage() {
  return (
    <ProgramPage
      eyebrow="Programa de Franquia"
      title="Quero ser uma Franquia"
      intro="Você opera uma unidade da No Humans na sua região, com o modelo da marca e a execução por IA — sem precisar montar agência ou contratar time."
      steps={[
        {
          n: "01",
          title: "Você tem uma região para operar",
          body: "Você quer levar a marca No Humans para o seu território e já tem presença local ou rede de contatos.",
        },
        {
          n: "02",
          title: "A No Humans aprova a sua candidatura",
          body: "Sem treinamento. A proposta é analisada mediante aprovação da No Humans antes de liberar a franquia.",
        },
        {
          n: "03",
          title: "Você conduz, a No Humans executa",
          body: "Você lidera a operação local; a marca fornece os agentes, as automações e a execução por IA.",
        },
        {
          n: "04",
          title: "Você cresce com a marca",
          body: "Unidade operando com o modelo da No Humans, reuniões de acompanhamento e resultados compartilhados.",
        },
      ]}
      gains={[
        "Opere a marca No Humans na sua região.",
        "Modelo de negócio com execução por IA e horas ilimitadas.",
        "Agentes e automações prontos para vender no seu território.",
        "Sem treinamento: você entra mediante aprovação da No Humans.",
      ]}
      whatsappMessage="Quero ser uma franquia da No Humans."
    />
  );
}
