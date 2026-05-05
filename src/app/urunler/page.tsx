import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

export const metadata = {
  title: "5 Aroma — filly's",
  description: "Vanilya, Pistachio, Beyaz Çikolata, Karamel, Matcha. 5 aromada şekersiz sıvı kahve kreması.",
};

const sb1Map: Record<string, string> = {};

const sb1WidthMap: Record<string, string> = {
  "beyaz-cikolata": "350%",
};

const sb1OpacityMap: Record<string, { mobile: number; desktop: number }> = {
  "beyaz-cikolata": { mobile: 0.55, desktop: 0.38 },
};

const rowBgMap: Record<string, string> = {
  vanilya:          "#CCD9EE",
  pistachio:        "#ffffff",
  "beyaz-cikolata": "#CCD9EE",
  karamel:          "#ffffff",
  matcha:           "#CCD9EE",
};

const capsuleIlloMap: Record<string, { il1: string; il2: string }> = {
  vanilya: {
    il1: "/media/vanilya-il1.png",
    il2: "/media/vanilya-il2.png",
  },
  pistachio: {
    il1: "/media/pistachio-il1.png",
    il2: "/media/pistachio-il2.png",
  },
  "beyaz-cikolata": {
    il1: "/media/beyaz-il1.png",
    il2: "/media/beyaz-il2.png",
  },
  karamel: {
    il1: "/media/karamel-il1.png",
    il2: "/media/karamel-il2.png",
  },
  matcha: {
    il1: "/media/matcha-il1.png",
    il2: "/media/matcha-il2.png",
  },
};

export default function UrunlerPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#D6D1C3]">

        {/* ── HEADER ── */}
        <section className="relative overflow-hidden pt-36 pb-16 px-6 md:px-16 lg:px-24 bg-white">
          {/* tum-kapsul — tam section alanını kaplar */}
          <div className="absolute inset-0 pointer-events-none select-none">
            <Image
              src="/media/kapsul/tum-kapsul.png"
              alt=""
              fill
              className="object-cover object-center"
              style={{ opacity: 0.06 }}
              sizes="100vw"
            />
          </div>

          <h1 className="relative z-10" style={{ lineHeight: 0.88 }}>
            <span
              className="type-display text-[#53284E] block"
              style={{ fontSize: "clamp(2.4rem, 7vw, 8.5rem)", fontWeight: 700 }}
            >
              Kahve Kremaları
            </span>
            <span
              className="type-body text-[#53284E]/50 block"
              style={{ fontSize: "clamp(1.3rem, 3.8vw, 4.6rem)", fontStyle: "italic", fontWeight: 500, marginTop: "0.08em" }}
            >
              Coffee Creamer
            </span>
          </h1>

          <div className="relative z-10 mt-16 border-t border-[#53284E]/12" />
        </section>

        {/* ── ÜRÜN SATIRLARI ── */}
        {products.map((product, i) => {
          const isEven = i % 2 === 0;
          const illoSrc = sb1Map[product.slug];

          const capsuleIllos = capsuleIlloMap[product.slug];
          const rowBg = rowBgMap[product.slug];

          return (
            <Link
              key={product.slug}
              href={`/urunler/${product.slug}`}
              className="group block border-b border-[#53284E]/10 hover:bg-[#53284E]/[0.03] transition-colors duration-500"
              style={rowBg ? { backgroundColor: rowBg } : undefined}
            >
              <div
                className={`relative overflow-hidden flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                style={{ minHeight: "clamp(440px, 52vw, 700px)" }}
              >

                {/* sb1 arka plan illustration */}
                {illoSrc && (
                  <div
                    className="absolute inset-0 pointer-events-none select-none flex items-center"
                    style={{ justifyContent: isEven ? "flex-end" : "flex-start" }}
                  >
                    <div
                      className="relative h-full"
                      style={{
                        width: sb1WidthMap[product.slug] ?? "75%",
                        opacity: sb1OpacityMap[product.slug]?.desktop ?? 0.15,
                      }}
                    >
                      <Image
                        src={illoSrc}
                        alt=""
                        fill
                        className="object-contain"
                        style={{ objectPosition: isEven ? "right center" : "left center" }}
                        sizes="(max-width: 768px) 75vw, 55vw"
                      />
                    </div>
                  </div>
                )}

                {/* Kapsül görsel tarafı */}
                <div className="relative flex-1 flex items-center justify-center p-10 md:p-16 lg:p-20">
                  {/* Kapsüle özgü illüstrasyonlar — sol üst + sağ alt */}
                  {capsuleIllos && (
                    <>
                      <div className="absolute top-4 left-4 md:top-8 md:left-8 pointer-events-none" style={{ width: "clamp(140px, 20vw, 260px)", opacity: 0.88 }}>
                        <Image src={capsuleIllos.il1} alt="" width={260} height={260} className="object-contain drop-shadow-md" />
                      </div>
                      <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 pointer-events-none" style={{ width: "clamp(140px, 20vw, 260px)", opacity: 0.88 }}>
                        <Image src={capsuleIllos.il2} alt="" width={260} height={260} className="object-contain drop-shadow-md" />
                      </div>
                    </>
                  )}
                  <div
                    className="relative group-hover:scale-[1.04] group-hover:-rotate-2 transition-all duration-700"
                    style={{ width: "clamp(200px, 28vw, 380px)", aspectRatio: "3/4" }}
                  >
                    <Image
                      src={product.image}
                      alt={`filly's ${product.name} kahve kreması`}
                      fill
                      className="object-contain drop-shadow-2xl"
                      sizes="(max-width: 768px) 60vw, 30vw"
                    />
                  </div>
                </div>

                {/* Metin tarafı */}
                <div className="relative flex-1 flex flex-col justify-center px-8 md:px-14 lg:px-20 py-12 lg:py-0 z-10">
                  <h2
                    className="type-display text-[#53284E]"
                    style={{ fontSize: "clamp(3rem, 6vw, 8rem)", lineHeight: 0.85 }}
                  >
                    {product.name}
                  </h2>

                  <p
                    className="type-body italic mt-5"
                    style={{
                      fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
                      color: product.accent,
                      filter: "brightness(0.75)",
                    }}
                  >
                    {product.tagline}
                  </p>

                  <p
                    className="type-body text-[#53284E]/50 mt-5"
                    style={{
                      fontSize: "clamp(0.85rem, 1vw, 0.98rem)",
                      maxWidth: "36ch",
                      lineHeight: 1.75,
                    }}
                  >
                    {product.description}
                  </p>

                  <p
                    className="type-label text-[#53284E]/18 mt-8"
                    style={{ fontSize: "0.45rem", letterSpacing: "0.18em" }}
                  >
                    {product.volume}
                  </p>

                  {/* CTA ok */}
                  <div className="mt-10 flex items-center gap-3">
                    <span
                      className="type-nav text-[#53284E]"
                      style={{ fontSize: "0.6rem", letterSpacing: "0.2em" }}
                    >
                      İNCELE
                    </span>
                    <span
                      className="block h-px bg-[#53284E] transition-all duration-400 group-hover:w-12"
                      style={{ width: "28px" }}
                    />
                    <span
                      className="type-nav text-[#53284E] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      style={{ fontSize: "0.7rem" }}
                    >
                      →
                    </span>
                  </div>
                </div>

              </div>
            </Link>
          );
        })}

        {/* ── ALT NOT ── */}
        <div className="px-6 md:px-16 py-20 border-t border-[#53284E]/10">
          <p
            className="type-display text-[#53284E] text-center"
            style={{ fontSize: "clamp(1.2rem, 2.5vw, 2.2rem)" }}
          >
            Hepsi şekersiz. Hepsi doğal aromalı.
          </p>
        </div>

      </main>
      <Footer />
    </>
  );
}
