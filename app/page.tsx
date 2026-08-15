import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Plans } from "@/components/plans";
import { Services } from "@/components/services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Plans />
      <Contact />
    </>
  );
}
