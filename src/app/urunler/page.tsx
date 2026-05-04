import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

export const metadata = {
  title: "5 Aroma — filly's",
  description: "Vanilya, Pistachio, Beyaz Çikolata, Karamel, Matcha. 5 aromada şekersiz sıvı kahve kreması.",
};

const sb1Map: Record<string, string> = {
  vanilya:        "/media/sb1-vanilya.png",
  pistachio:      "/media/sb1-pistachio.png",
  "beyaz-cikolata": "/media/sb1-beyaz-cikolata.png",
  karamel:        "/media/sb1-caramel.png",
  matcha:         "/media/sb1-matcha.png",
};

export default function UrunlerPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#D6D1C3]">

        {/* ── HEADER ── */}
        <section className="relative overflow-hidden pt-36 pb-16 px-6 md:px-16 lg:px-24">
          <div className="absolute right-[-4%] top-0 bottom-0 w-[55%] pointer-events-none select-none">
            <Image
              src="/media/kapsul/tum-kapsul.png"
              alt=""
              fill
              className="object-contain object-right"
              style={{ opacity: 0.06 }}
              sizes="55vw"
            />
          </div>

          <p
            className="type-label text-[#53284E]/30 mb-8"
            style={{ fontSize: "0.52rem", letterSpacing: "0.38em" }}
          >
            ÜRÜNLER
          </p>
          <h1
            className="type-display text-[#53284E]"
            style={{ fontSize: "clamp(4.5rem, 14vw, 16rem)", lineHeight: 0.82 }}
          >
            5<br />Aroma.
          </h1>
          <p
            className="type-body italic text-[#53284E]/35 mt-8"
            style={{ fontSize: "clamp(0.95rem, 1.6vw, 1.3rem)" }}
          >
            Flavoured. Not sweetened.
          </p>

          <div className="mt-20 border-t border-[#53284E]/12" />
        </section>

        {/* ── ÜRÜN SATIRLARI ── */}
        {products.map((product, i) => {
          const isEven = i % 2 === 0;
          const illoSrc = sb1Map[product.slug];

          return (
            <Link
              key={product.slug}
              href={`/urunler/${product.slug}`}
              className="group block border-b border-[#53284E]/10 hover:bg-[#53284E]/[0.03] transition-colors duration-500"
            >
              <div
                className={`relative overflow-hidden flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                style={{ minHeight: "clamp(440px, 52vw, 700px)" }}
              >

                {/* sb1 arka plan illustration */}
                {illoSrc && (
                  <div
                    className="absolute pointer-events-none select-none"
                    style={{
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: isEven ? "flex-end" : "flex-start",
                    }}
                  >
                    <div className="relative w-[55%] h-full" style={{ opacity: 0.1 }}>
                      <Image
                        src={illoSrc}
                        alt=""
                        fill
                        className="object-contain"
                        style={{ objectPosition: isEven ? "right center" : "left center" }}
                        sizes="55vw"
                      />
                    </div>
                  </div>
                )}

                {/* Büyük faded numara */}
                <span
                  className="absolute pointer-events-none select-none type-display text-[#53284E]"
                  style={{
                    fontSize: "clamp(10rem, 22vw, 28rem)",
                    lineHeight: 1,
                    top: "-0.1em",
                    [isEven ? "right" : "left"]: "-0.05em",
                    opacity: 0.04,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Kapsül görsel tarafı */}
                <div className="relative flex-1 flex items-center justify-center p-10 md:p-16 lg:p-20">
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
                  <p
                    className="type-label text-[#53284E]/25 mb-6"
                    style={{ fontSize: "0.48rem", letterSpacing: "0.35em" }}
                  >
                    AROMA {String(i + 1).padStart(2, "0")} / 05
                  </p>

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
            className="type-display text-[#53284E]/15 text-center"
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
