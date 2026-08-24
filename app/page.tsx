import { Avulsos } from "@/components/avulsos";
import { Brands } from "@/components/brands";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { HyperspeedSection } from "@/components/hyperspeed-section";
import { Firings, Manifesto } from "@/components/manifesto";
import { Plans } from "@/components/plans";
import { Services } from "@/components/services";
import { Vertentes } from "@/components/vertentes";

export default function Home() {
  return (
    <>
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
