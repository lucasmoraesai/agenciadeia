import { Avulsos } from "@/components/avulsos";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Plans } from "@/components/plans";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Plans />
      <Avulsos />
      <Contact />
    </>
  );
}
