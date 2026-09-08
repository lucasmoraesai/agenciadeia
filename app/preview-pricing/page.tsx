import type { Metadata } from "next";
import { PricingPreview } from "@/components/pricing-preview";

export const metadata: Metadata = {
  title: "Preview de pricing",
  robots: { index: false, follow: false },
};

export default function PreviewPricingPage() {
  return (
    <>
      <div className="border-b border-border py-16 text-center">
        <p className="font-mono text-[11px] uppercase tracking-widest text-subtle">
          Preview — branch novo-pricing
        </p>
        <h1 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold tracking-tight">
          Escolha uma das 3 opções de pricing.
        </h1>
        <p className="mt-3 text-muted">
          Depois de escolher, eu adapto pro tom do site e ligo na seção Planos.
        </p>
      </div>
      <PricingPreview />
    </>
  );
}
