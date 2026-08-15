import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Plans } from "@/components/plans";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <Services />
      <Plans />
      <Contact />
    </>
  );
}
