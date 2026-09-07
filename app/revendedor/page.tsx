import type { Metadata } from "next";
import { ProgramPage } from "@/components/program-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Quero ser um Revendedor",
  description:
    "Vire revendedor da No Humans: ganhe margem revendendo as assinaturas de automação, IA, marketing, software e UX. Sem treinamento, mediante aprovação.",
  path: "/revendedor/",
});

export default function RevendedorPage() {
  return (
    <ProgramPage
      eyebrow="Programa de Revenda"
      title="Quero ser um Revendedor"
      intro="Você revende as assinaturas da No Humans para os seus clientes e ganha margem por cada revenda ativa — sem montar time e sem estoque."
      steps={[
        {
          n: "01",
          title: "Você já vende para o seu público",
          body: "Você tem uma base de clientes ou parceiros que precisa de automação, IA, marketing, software e UX.",
        },
        {
          n: "02",
          title: "A No Humans aprova o seu perfil",
          body: "Sem treinamento. A gente valida o seu perfil de revenda antes de liberar o acesso ao catálogo.",
        },
        {
          n: "03",
          title: "Você fecha, a No Humans entrega",
          body: "Você vende a assinatura; a No Humans executa e dá suporte de verdade para os seus clientes.",
        },
        {
          n: "04",
          title: "Você recebe a sua margem",
          body: "Margem recorrente sobre cada assinatura ativa, com acompanhamento das suas revendas.",
        },
      ]}
      gains={[
        "Margem sobre cada assinatura ativa que você revende.",
        "Catálogo pronto: Automação, IA, Marketing, Software e UX.",
        "Entregas em até 48h e suporte feito pela No Humans.",
        "Sem treinamento e sem estoque: você só vende.",
      ]}
      whatsappMessage="Quero ser um revendedor da No Humans."
    />
  );
}
