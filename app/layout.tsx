import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { SITE_NAME, SITE_URL } from "@/lib/config";

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
    default: `${SITE_NAME} — Automatize sua empresa`,
    template: `%s · ${SITE_NAME}`,
  },
  description:
    "Agência de IA, automação, vibe coding e Claude Code. Automatize sua empresa.",
  openGraph: {
    title: SITE_NAME,
    description: "Automatize sua empresa com IA, automação, vibe coding e Claude Code.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/photos/perfil.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_NAME,
    description: "Automatize sua empresa com IA, automação, vibe coding e Claude Code.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
