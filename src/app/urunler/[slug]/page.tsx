import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, getProduct } from "@/data/products";

const rowBgMap: Record<string, string> = {
  vanilya:          "#CCD9EE",
  pistachio:        "#ffffff",
  "beyaz-cikolata": "#CCD9EE",
  karamel:          "#ffffff",
  matcha:           "#CCD9EE",
};

const capsuleIlloMap: Record<string, { il1: string; il2: string }> = {
  vanilya:          { il1: "/media/vanilya-il1.png",   il2: "/media/vanilya-il2.png" },
  pistachio:        { il1: "/media/pistachio-il1.png", il2: "/media/pistachio-il2.png" },
  "beyaz-cikolata": { il1: "/media/beyaz-il1.png",     il2: "/media/beyaz-il2.png" },
  karamel:          { il1: "/media/karamel-il1.png",   il2: "/media/karamel-il2.png" },
  matcha:           { il1: "/media/matcha-il1.png",    il2: "/media/matcha-il2.png" },
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

  const capsuleIllos = capsuleIlloMap[product.slug];
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
            {/* İllüstrasyonlar */}
            {capsuleIllos && (
              <>
                <div
                  className="absolute top-4 left-4 md:top-8 md:left-8 pointer-events-none select-none"
                  style={{ width: "clamp(120px, 18vw, 240px)", opacity: 0.88 }}
                >
                  <Image
                    src={capsuleIllos.il1}
                    alt=""
                    width={240}
                    height={240}
                    className="object-contain drop-shadow-md"
                  />
                </div>
                <div
                  className="absolute bottom-4 right-4 md:bottom-8 md:right-8 pointer-events-none select-none"
                  style={{ width: "clamp(120px, 18vw, 240px)", opacity: 0.88 }}
                >
                  <Image
                    src={capsuleIllos.il2}
                    alt=""
                    width={240}
                    height={240}
                    className="object-contain drop-shadow-md"
                  />
                </div>
              </>
            )}

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
                ["FORMAT",  "20ml kapsül"],
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

            {/* CTA */}
            <div className="border border-[#53284E]/15 px-8 py-5 flex items-center justify-between">
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
