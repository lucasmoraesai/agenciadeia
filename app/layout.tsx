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
    default: `${SITE_NAME} — Agência de IA e Automação | a partir de R$ 3.000/mês`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "Agência de IA e automação para empresas brasileiras: automação de processos, agentes de IA, marketing, software e UX. Assinatura mensal com horas ilimitadas, prazo de 48h e entrega via WhatsApp. PIX, Bitcoin e Ethereum.",
  keywords: [
    "agência de IA",
    "agência de automação",
    "automação de processos",
    "agentes de IA",
    "agência de marketing com IA",
    "agência de software",
    "agência de UX",
    "automação com IA Brasil",
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
    title: `${SITE_NAME} — Agência de IA e Automação | a partir de R$ 3.000/mês`,
    description:
      "Agência de IA e automação: automação de processos, agentes de IA, marketing, software e UX. Horas ilimitadas, prazo de 48h, entrega via WhatsApp.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "nohumans — Agência de IA e Automação",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Agência de IA e Automação | a partir de R$ 3.000/mês`,
    description:
      "Agência de IA e automação: automação de processos, agentes de IA, marketing, software e UX. Horas ilimitadas, prazo de 48h.",
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
