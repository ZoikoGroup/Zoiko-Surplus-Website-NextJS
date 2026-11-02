import type { Metadata } from "next";
import { Hanken_Grotesk, Sora } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { siteConfig } from "@/lib/site";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
// Second typeface used by the About page.
const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken" });

export const metadata: Metadata = {
  title: {
    default: "Zoiko Surplus | Global Surplus Inventory Marketplace",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: { icon: [{ url: "/images/zoikosurplus-icon-svg.svg", type: "image/svg+xml" }] },
};

// Header and Footer live here, so every page added under app/ gets them automatically.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sora.variable} ${hanken.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
