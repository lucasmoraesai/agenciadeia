import type { Metadata } from "next";
import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { Talk } from "@/components/talk";
import { SITE_NAME, SITE_URL } from "@/lib/config";

const instrument = Instrument_Sans({
  variable: "--font-instrument",
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
    "Agência de IA: Claude Code, vibe coding, marketing e automação rodando como um sistema só. Produção, não piloto.",
  openGraph: {
    title: SITE_NAME,
    description:
      "Claude Code, vibe coding, marketing e automação. Um sistema só.",
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
      "Claude Code, vibe coding, marketing e automação. Um sistema só.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${instrument.variable} ${ibm.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <Talk />
      </body>
    </html>
  );
}
