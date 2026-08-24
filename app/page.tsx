import { Avulsos } from "@/components/avulsos";
import { Brands } from "@/components/brands";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { HyperspeedSection } from "@/components/hyperspeed-section";
import { JsonLd } from "@/components/json-ld";
import { Firings, Manifesto } from "@/components/manifesto";
import { Plans } from "@/components/plans";
import { Services } from "@/components/services";
import { Vertentes } from "@/components/vertentes";
import { HOME_FAQ } from "@/lib/faq";
import {
  faqSchema,
  offerCatalogSchema,
  serviceSchema,
} from "@/lib/seo";

export default function Home() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Agência de IA e Automação",
          description:
            "Assinatura mensal de agência de IA e automação: automação de processos, agentes de IA, marketing, software e UX para empresas brasileiras. Horas ilimitadas, 1 demanda por vez, prazo de até 48h e entrega via WhatsApp.",
          offers: [
            {
              name: "Por agência",
              price: 3000,
              description: "1 agência + 1 departamento, reunião mensal.",
            },
            {
              name: "Ilimitado",
              price: 6000,
              description: "Todas as agências e departamentos, reunião semanal.",
            },
          ],
        })}
      />
      <JsonLd data={offerCatalogSchema()} />
      <JsonLd data={faqSchema(HOME_FAQ)} />
      <Hero />
      <Vertentes />
      <Brands />
      <HowItWorks />
      <Plans />
      <Firings />
      <Avulsos />
      <Manifesto />
      <Services />
      <HyperspeedSection />
    </>
  );
}
