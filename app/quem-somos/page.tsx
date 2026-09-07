import type { Metadata } from "next";
import { About6 } from "@/components/about6";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Quem somos",
  description:
    "Somos a agência que executa automação, IA, marketing, software e UX em uma assinatura. IA-first, do kickoff à entrega, com prazo de até 48h e entrega via WhatsApp.",
  path: "/quem-somos/",
});

export default function QuemSomosPage() {
  return <About6 />;
}
