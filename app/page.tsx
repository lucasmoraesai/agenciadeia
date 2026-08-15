import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Practices } from "@/components/practices";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Practices />
      <Contact />
    </>
  );
}
