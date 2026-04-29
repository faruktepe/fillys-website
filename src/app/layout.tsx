import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Filly's — Şekersiz. Aromalı.",
  description: "5 aromada şekersiz sıvı kahve kreması. Kahveni şımartmanın tek doğru yolu.",
  openGraph: {
    title: "Filly's — Şekersiz. Aromalı.",
    description: "5 aromada şekersiz sıvı kahve kreması.",
    url: "https://fillys.com.tr",
    siteName: "Filly's",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F5EDD6] text-[#3D1A2E]">
        {children}
      </body>
    </html>
  );
}
