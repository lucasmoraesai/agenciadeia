import type { Metadata } from "next";
import { AgencyPage, Icons } from "@/components/agency-page";
import { Hero239 } from "@/components/hero239";

export const metadata: Metadata = {
  title: "Agência de UX",
  description:
    "Agência de UX: interfaces bonitas e funcionais, do protótipo ao produto final — desenhadas com IA.",
};

export default function UxuiPage() {
  return (
    <AgencyPage
      hero={<Hero239 />}
      title="Agência de UX"
      subtitle="Interfaces bonitas e funcionais, desenhadas com IA — do protótipo ao produto final."
      whatsappMessage="Quero uma agência de UX para o meu produto."
      servicesEyebrow="O que fazemos"
      servicesTitle="Design que converte e encanta."
      servicesSubtitle="Do rabisco ao produto final — interfaces que vendem e são fáceis de usar."
      services={[
        {
          id: "interface",
          title: "Design de interface",
          body: "Telas, apps e sites desenhados sob medida.",
          icon: Icons.layout,
        },
        {
          id: "design-system",
          title: "Design system",
          body: "Componentes e tokens reutilizáveis.",
          icon: Icons.layers,
        },
        {
          id: "prototipos",
          title: "Protótipos rápidos",
          body: "Do rabisco ao protótipo clicável em dias.",
          icon: Icons.rocket,
        },
        {
          id: "landing",
          title: "Landing pages",
          body: "Páginas rápidas, feitas pra converter.",
          icon: Icons.zap,
        },
        {
          id: "branding",
          title: "Branding & identidade",
          body: "Marca, cores e tipografia consistentes.",
          icon: Icons.sparkles,
        },
        {
          id: "pesquisa",
          title: "Pesquisa & UX",
          body: "Entenda o usuário antes de desenhar.",
          icon: Icons.search,
        },
        {
          id: "testes",
          title: "Testes de usabilidade",
          body: "Valide a experiência antes de lançar.",
          icon: Icons.shield,
        },
        {
          id: "produto",
          title: "Design de produto",
          body: "Estratégia visual de ponta a ponta.",
          icon: Icons.compass,
        },
      ]}
      firingsTitle="Chega de interface feia."
      firings={[
        "Demita o layout que ninguém entende.",
        "Demita o design que trava a conversão.",
        "Demita o freelancer que atrasa o pixel.",
      ]}
    />
  );
}
