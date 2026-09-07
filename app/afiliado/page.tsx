import type { Metadata } from "next";
import { ProgramPage } from "@/components/program-page";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Quero ser um Afiliado",
  description:
    "Divulgue a No Humans para a sua audiência e ganhe comissão por cada assinatura fechada. Links e materiais prontos. Sem treinamento, mediante aprovação.",
  path: "/afiliado/",
});

export default function AfiliadoPage() {
  return (
    <ProgramPage
      eyebrow="Programa de Afiliados"
      title="Quero ser um Afiliado"
      intro="Você divulga a No Humans para a sua audiência e ganha comissão por cada assinatura que fechar — do seu jeito, sem montar nada."
      steps={[
        {
          n: "01",
          title: "Você tem audiência ou canal",
          body: "Você tem público, comunidade ou rede e quer transformar isso em comissão.",
        },
        {
          n: "02",
          title: "A No Humans aprova o seu perfil",
          body: "Sem treinamento. A gente valida o seu perfil de afiliado antes de liberar os seus links.",
        },
        {
          n: "03",
          title: "Você divulga a marca",
          body: "Você promove a No Humans com o seu link de indicação e materiais prontos.",
        },
        {
          n: "04",
          title: "Você recebe comissão",
          body: "Comissão por cada assinatura fechada a partir do seu link, com acompanhamento das suas indicações.",
        },
      ]}
      gains={[
        "Comissão por cada assinatura fechada.",
        "Links de indicação e materiais prontos para divulgar.",
        "Acompanhamento das suas indicações em tempo real.",
        "Sem treinamento: você já sabe divulgar.",
      ]}
      whatsappMessage="Quero ser um afiliado da No Humans."
    />
  );
}
