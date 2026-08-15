import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Outfit } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { SITE_NAME, SITE_URL } from "@/lib/config";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK", "opsz"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const ibm = IBM_Plex_Mono({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Claude Code, vibe coding e automação`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "Agência de IA, Claude Code, vibe coding, marketing com IA e automação. Sistemas em produção, não piloto.",
  openGraph: {
    title: SITE_NAME,
    description:
      "Agência de IA, Claude Code, vibe coding, marketing com IA e automação.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/photos/perfil.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description:
      "Agência de IA, Claude Code, vibe coding, marketing com IA e automação.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${outfit.variable} ${ibm.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">
        <div className="grain" aria-hidden="true" />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
