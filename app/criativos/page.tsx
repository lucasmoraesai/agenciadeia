import type { Metadata } from "next";

import { Criativos } from "@/components/criativos";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Criativos para social e Ads",
  description:
    "Gere peças editáveis para social media e anúncios no estilo nohumans. Edite os textos, baixe em PNG e copie o prompt para gerar imagens com IA.",
  path: "/criativos/",
});

export default function CriativosPage() {
  return <Criativos />;
}
