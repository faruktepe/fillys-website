import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "filly's — Flavoured. Not sweetened.",
  description: "5 aromada şekersiz sıvı kahve kreması. Kapsül formatı. Türkiye'de ilk.",
  openGraph: {
    title: "filly's — Flavoured. Not sweetened.",
    description: "5 aromada şekersiz sıvı kahve kreması.",
    url: "https://fillys.com.tr",
    siteName: "filly's",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr" className="h-full">
      <head>
        <link rel="preload" href="/fonts/ApfelGrotezk-Satt.woff2"   as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/ApfelGrotezk-Fett.woff2"   as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/ApfelGrotezk-Mittel.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/ApfelGrotezk-Regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
