import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { LangProvider } from "@/lib/LangContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Liman Restaurant — Turkish & Georgian Cuisine in Batumi",
  description:
    "Restaurant at Batumi seaport. Turkish and Georgian cuisine, sea-view terrace, open 24/7. Gogebashvili St. 3, Batumi.",
  openGraph: {
    title: "Liman Restaurant",
    description: "Turkish & Georgian Cuisine · Sea View Terrace · Batumi Port",
    images: ["https://limanrestaurant.ge/images/content/about_header_background.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${inter.variable} antialiased`}>
        <LangProvider>{children}</LangProvider>
      </body>
    </html>
  );
}
