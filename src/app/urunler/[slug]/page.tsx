import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, getProduct } from "@/data/products";
import ProductTabs from "@/components/ProductTabs";

const rowBgMap: Record<string, string> = {
  vanilya:          "#CCD9EE",
  pistachio:        "#ffffff",
  "beyaz-cikolata": "#CCD9EE",
  karamel:          "#ffffff",
  matcha:           "#CCD9EE",
};


export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — filly's`,
    description: product.description,
  };
}

export default async function UrunDetayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const rowBg = rowBgMap[product.slug] ?? "#D6D1C3";

  return (
    <>
      <Navbar />
      <main className="bg-[#D6D1C3] min-h-screen">

        {/* Back nav */}
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-0">
          <Link
            href="/urunler"
            className="type-label text-[#53284E]/30 hover:text-[#53284E] transition-colors"
            style={{ fontSize: "0.55rem", letterSpacing: "0.25em" }}
          >
            ← TÜM AROMALAR
          </Link>
        </div>

        {/* Hero: görsel sol / bilgi sağ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">

          {/* Görsel panel */}
          <div
            className="relative flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: rowBg, minHeight: "55vw" }}
          >
            {/* Abstract Flow curves — accent rengiyle */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 800 800"
              preserveAspectRatio="xMidYMid slice"
              fill="none"
              aria-hidden="true"
              style={{ opacity: 0.13 }}
            >
              <path
                d="M-60 120 C 100 40, 280 200, 460 100 C 580 40, 700 140, 860 80"
                stroke={product.accent} strokeWidth="52" strokeLinecap="round"
              />
              <path
                d="M-60 320 C 120 220, 320 420, 520 300 C 660 220, 760 340, 860 270"
                stroke={product.accent} strokeWidth="44" strokeLinecap="round"
              />
              <path
                d="M-60 620 C 140 520, 340 720, 560 600 C 700 520, 780 640, 860 580"
                stroke={product.accent} strokeWidth="44" strokeLinecap="round"
              />
              <path
                d="M-60 820 C 100 720, 300 900, 520 800 C 680 720, 780 840, 860 780"
                stroke={product.accent} strokeWidth="52" strokeLinecap="round"
              />
            </svg>

            {/* Kapsül görseli */}
            <div className="relative w-full h-full" style={{ minHeight: "55vw" }}>
              <Image
                src={product.image}
                alt={`filly's ${product.name} kahve kreması kapsülü`}
                fill
                className="object-contain object-center anim-float"
                style={{ padding: "8%" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Alt aksanlı şerit */}
            <div className="absolute bottom-6 left-8 right-8 flex items-end justify-between">
              <span
                className="type-label text-[#53284E]/20"
                style={{ fontSize: "0.5rem", letterSpacing: "0.25em" }}
              >
                filly&apos;s
              </span>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: product.accent }} />
            </div>
          </div>

          {/* Bilgi paneli */}
          <div className="flex flex-col justify-center px-10 py-16 lg:px-20 lg:py-24 bg-[#D6D1C3]">

            <h1
              className="type-display text-[#53284E]"
              style={{ fontSize: "clamp(3rem, 6vw, 7rem)", lineHeight: 0.88 }}
            >
              {product.name}
            </h1>

            <p
              className="type-body italic mt-5 mb-10"
              style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)", color: product.accent }}
            >
              {product.tagline}
            </p>

            <p
              className="type-body text-[#53284E]/60 mb-12 max-w-sm"
              style={{ fontSize: "clamp(0.88rem, 1.05vw, 1rem)", lineHeight: 1.85 }}
            >
              {product.description}
            </p>

            {/* Özellikler */}
            <div className="border-t border-[#53284E]/10 pt-8 mb-12 grid grid-cols-2 gap-8">
              {[
                ["FORMAT",  "15ml kapsül"],
                ["ŞEKER",   "İlave şeker yok"],
                ["İÇERİK",  "Laktozsuz · Glutensiz"],
                ["AROMA",   "Doğal Aromalı"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p
                    className="type-label text-[#53284E]/30 mb-2"
                    style={{ fontSize: "0.5rem", letterSpacing: "0.25em" }}
                  >
                    {label}
                  </p>
                  <p className="type-body text-[#53284E]/65 text-sm">{value}</p>
                </div>
              ))}
            </div>

            {/* Tab sistemi */}
            <ProductTabs slug={product.slug} accent={product.accent} />

            {/* CTA */}
            <div className="border border-[#53284E]/15 px-8 py-5 flex items-center justify-between mt-10">
              <p
                className="type-label text-[#53284E]/30"
                style={{ fontSize: "0.5rem", letterSpacing: "0.2em" }}
              >
                SATIŞ YAKINDA
              </p>
              <div className="w-1.5 h-1.5 rounded-full bg-[#53284E]/20" />
            </div>
          </div>
        </div>

        {/* Diğer aromalar */}
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-32">
          <p
            className="type-label text-[#53284E]/25 mb-10"
            style={{ fontSize: "0.55rem", letterSpacing: "0.3em" }}
          >
            DİĞER AROMALAR
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#53284E]/10">
            {products
              .filter((p) => p.slug !== product.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/urunler/${p.slug}`}
                  className="group bg-[#D6D1C3] hover:bg-[#53284E] transition-colors duration-500 flex flex-col overflow-hidden"
                >
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "1/1", backgroundColor: rowBgMap[p.slug] ?? "#D6D1C3" }}
                  >
                    <Image
                      src={p.image}
                      alt={`filly's ${p.name}`}
                      fill
                      className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                      style={{ padding: "6%" }}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="p-5">
                    <p
                      className="type-display text-[#53284E] group-hover:text-[#D6D1C3] transition-colors"
                      style={{ fontSize: "1rem" }}
                    >
                      {p.name}
                    </p>
                    <p className="type-body text-[#53284E]/40 group-hover:text-[#D6D1C3]/40 transition-colors text-xs italic mt-1">
                      {p.tagline}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>

      </main>
      <Footer />
    </>
  );
}
