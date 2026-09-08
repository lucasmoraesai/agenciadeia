import { Avulsos } from "@/components/avulsos";
import { Brands } from "@/components/brands";
import { Feature254 } from "@/components/feature254";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { HyperspeedSection } from "@/components/hyperspeed-section";
import { JsonLd } from "@/components/json-ld";
import { Manifesto } from "@/components/manifesto";
import { Plans } from "@/components/plans";
import { Services } from "@/components/services";
import { Vertentes } from "@/components/vertentes";
import { AgencySection } from "@/components/agency-section";
import {
  AutomacaoIalogo,
  GrowthLogo,
  SoftwareUxLogo,
} from "@/components/agency-logos";
import { AGENCIES } from "@/lib/agencies";
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
          name: "nohumans — Agência por assinatura",
          description:
            "Assinatura mensal única da nohumans: automação e IA, marketing e software, tudo incluso. Horas ilimitadas, 1 demanda por vez, prazo de até 48h e entrega via WhatsApp.",
          offers: [
            {
              name: "nohumans",
              plan: "ilimitado",
              price: 6000,
              description:
                "Tudo incluso: todas as agências e departamentos, reunião semanal.",
            },
          ],
        })}
      />
      <JsonLd data={offerCatalogSchema()} />
      <JsonLd data={faqSchema(HOME_FAQ)} />
      <Hero />
      <Plans />
      <HowItWorks />
      <Vertentes />
      <AgencySection
        id="automacao-ia"
        agency={AGENCIES[0]}
        logo={<AutomacaoIalogo className="h-7 w-7" />}
      />
      <AgencySection
        id="growth"
        agency={AGENCIES[1]}
        logo={<GrowthLogo className="h-7 w-7" />}
      />
      <AgencySection
        id="software-ux"
        agency={AGENCIES[2]}
        logo={<SoftwareUxLogo className="h-7 w-7" />}
      />
      <Brands />
      <Services />
      <Feature254 />
      <Avulsos />
      <Manifesto />
      <HyperspeedSection />
    </>
  );
}
