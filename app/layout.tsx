import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Providers } from "@/components/providers";
import { JsonLd } from "@/components/json-ld";
import { SITE_NAME, SITE_URL } from "@/lib/config";
import {
  organizationSchema,
  personSchema,
  websiteSchema,
} from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `Agência de IA e Automação por assinatura | ${SITE_NAME}`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "Agência de IA e automação por assinatura para empresas brasileiras. Um plano único com tudo incluso: automação de processos, agentes de IA, marketing e software. Horas ilimitadas, entrega em até 48h. R$ 6.000/mês, sem fidelidade.",
  keywords: [
    "agência de IA",
    "agência de automação",
    "automação de processos",
    "agentes de IA",
    "agência de marketing com IA",
    "agência de software",
    "automação com IA Brasil",
    "agência de IA por assinatura",
    "automatizar empresa",
  ],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `Agência de IA e Automação por assinatura | ${SITE_NAME}`,
    description:
      "Agência de IA e automação por assinatura: um plano único com tudo incluso — automação de processos, agentes de IA, marketing e software. Horas ilimitadas, entrega em até 48h.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "nohumans — Agência de IA e Automação por assinatura",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Agência de IA e Automação por assinatura | ${SITE_NAME}`,
    description:
      "Agência de IA e automação por assinatura: um plano único com tudo incluso — automação de processos, agentes de IA, marketing e software. Horas ilimitadas, prazo de 48h.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Providers>
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
        <JsonLd data={organizationSchema()} />
        <JsonLd data={personSchema()} />
        <JsonLd data={websiteSchema()} />
      </body>
    </html>
  );
}
