import type { Metadata } from "next";
import { Container } from "@/components/container";
import { Savings } from "@/components/savings";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Comparativo de custo",
  description:
    "Compare quanto custa contratar agências separadas ou um time interno versus a nohumans: uma assinatura única de R$ 6.000/mês com automação, IA, marketing e software inclusos.",
  path: "/comparativo/",
});

export default function ComparativoPage() {
  return (
    <>
      <Container className="pt-24 sm:pt-28">
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          Comparativo
        </p>
        <h1 className="tracking-tighter-display mt-3 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl">
          Quanto você economiza com a nohumans.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">
          Agências separadas, time interno ou uma assinatura só. A conta é
          simples — e a diferença aparece na hora.
        </p>
      </Container>
      <Savings />
    </>
  );
}
