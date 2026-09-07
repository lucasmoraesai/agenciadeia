import type { Metadata } from "next";
import { ProgramPage } from "@/components/program-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Quero ser um Parceiro",
  description:
    "Torne-se parceiro da No Humans: você traz o mercado e o relacionamento, a No Humans executa automação, IA, marketing, software e UX. Sem treinamento, mediante aprovação.",
  path: "/parceiro/",
});

export default function ParceiroPage() {
  return (
    <ProgramPage
      eyebrow="Programa de Parceria"
      title="Quero ser um Parceiro"
      intro="Você entra como parceiro da No Humans para atender o seu mercado junto com a gente. Você traz o relacionamento e o contexto; a No Humans traz a execução com IA."
      steps={[
        {
          n: "01",
          title: "Você conhece o seu mercado",
          body: "Você já tem relacionamento, região ou nicho e sabe a dor que os seus clientes têm.",
        },
        {
          n: "02",
          title: "A No Humans aprova o seu perfil",
          body: "Sem treinamento. A gente analisa a sua proposta e a sua expectativa antes de liberar a parceria.",
        },
        {
          n: "03",
          title: "Você indica, a gente entrega",
          body: "Você leva a demanda; a No Humans executa automação, IA, marketing, software e UX em até 48h.",
        },
        {
          n: "04",
          title: "Você evolui com a marca",
          body: "Parceria estável, com reunião de acompanhamento e um CS dedicado que dá suporte aos seus clientes.",
        },
      ]}
      gains={[
        "Atenda o seu mercado com a força de uma agência IA-first, sem montar time.",
        "Repasse sobre as assinaturas e demandas que você fecha.",
        "Entregas em até 48h, com horas ilimitadas e prazo garantido.",
        "Sem treinamento: você já opera; a No Humans complementa a execução.",
      ]}
      whatsappMessage="Quero ser um parceiro da No Humans."
    />
  );
}
