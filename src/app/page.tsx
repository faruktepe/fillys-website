import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const igImages = [
  { src: "/media/instagram/matcha-1.jpg",   alt: "filly's matcha" },
  { src: "/media/instagram/matcha-2.jpg",   alt: "filly's matcha servis" },
  { src: "/media/instagram/branded.png",    alt: "filly's" },
  { src: "/media/instagram/matcha-3.jpg",   alt: "filly's matcha atmosfer" },
  { src: "/media/instagram/tum-kapsul.png", alt: "filly's 5 aroma" },
];

const taglines = [
  "Soft start.",
  "Weird is working.",
  "Guilty? Never.",
  "İkinci fincana gerek yok.",
  "Dingin. Güçlü.",
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ══════════════════════════════════════════
          HERO
      ══════════════════════════════════════════ */}
      <section className="relative min-h-screen grid grid-cols-1 lg:grid-cols-2 overflow-hidden">

        {/* Sol — Tipografi (Deep Plum) */}
        <div className="relative bg-[#53284E] flex flex-col justify-center px-8 md:px-14 lg:px-20 pt-28 pb-16 lg:py-0 order-2 lg:order-1">
          <div className="relative max-w-lg">
            <h1 className="type-display text-[#D6D1C3] anim-fadeup" style={{ fontSize: "clamp(3.5rem, 6vw, 7rem)" }}>
              FLAVOURED.
            </h1>
            <h2
              className="type-display anim-fadeup-2"
              style={{
                fontSize: "clamp(3.5rem, 6vw, 7rem)",
                WebkitTextStroke: "2px #D6D1C3",
                color: "transparent",
              }}
            >
              NOT SWEETENED.
            </h2>

            <p className="type-body text-[#C0A4B8]/70 text-base mt-8 mb-10 leading-relaxed anim-fadeup-3" style={{ maxWidth: "22rem" }}>
              5 aromada şekersiz sıvı kahve kreması.<br />Kapsül formatı. Türkiye&apos;de ilk.
            </p>

            <Link
              href="/urunler"
              className="inline-flex items-center gap-3 border border-[#D6D1C3]/30 text-[#D6D1C3] px-9 py-4 type-nav hover:bg-[#D6D1C3] hover:text-[#53284E] transition-colors anim-fadeup-3"
              style={{ fontSize: "0.68rem" }}
            >
              5 AROMAYA BAK →
            </Link>
          </div>
        </div>

        {/* Sağ — Ürün görseli (Lavender Silk) */}
        <div className="relative bg-[#C0A4B8] min-h-[60vw] lg:min-h-0 order-1 lg:order-2 flex items-center justify-center overflow-hidden">
          <Image
            src="/media/kapsul/vanilya.png"
            alt="filly's vanilya kahve kreması kapsülü"
            fill
            className="object-contain object-center anim-float"
            style={{ padding: "8%" }}
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      {/* ══════════════════════════════════════════
          5 AROMA GRID
      ══════════════════════════════════════════ */}
      <section className="bg-[#D6D1C3] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-baseline justify-between mb-14 border-b border-[#53284E]/10 pb-6">
            <p className="type-display text-[#53284E]" style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}>
              5 Aroma.
            </p>
            <Link
              href="/urunler"
              className="type-nav text-[#53284E]/35 hover:text-[#53284E] transition-colors"
              style={{ fontSize: "0.65rem" }}
            >
              TÜMÜNÜ GÖR →
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {products.map((product, i) => (
              <Link key={product.slug} href={`/urunler/${product.slug}`} className="group flex flex-col">
                <div
                  className="relative aspect-square overflow-hidden mb-4"
                  style={{ backgroundColor: product.imageBg }}
                >
                  <Image
                    src={product.image}
                    alt={`filly's ${product.name}`}
                    fill
                    className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    style={{ padding: "6%" }}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </div>
                <div>
                  <p className="type-label text-[#53284E]/25 text-[0.45rem] tracking-[0.2em] mb-1">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="type-product text-[#53284E] text-sm group-hover:text-[#53284E]/60 transition-colors">
                    {product.name.toUpperCase()}
                  </p>
                  <p className="type-body text-[#53284E]/40 text-xs italic mt-0.5">
                    {product.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          MANİFESTO (Deep Plum)
      ══════════════════════════════════════════ */}
      <section className="bg-[#53284E] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[75vh]">
          <div className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-24 lg:py-32">
            <p className="type-display text-[#D6D1C3]" style={{ fontSize: "clamp(3rem, 6vw, 6.5rem)" }}>
              Şeker
            </p>
            <p className="type-display text-[#D6D1C3]" style={{ fontSize: "clamp(3rem, 6vw, 6.5rem)" }}>
              koydular.
            </p>
            <p
              className="type-display mt-1"
              style={{
                fontSize: "clamp(3rem, 6vw, 6.5rem)",
                WebkitTextStroke: "2px #D6D1C3",
                color: "transparent",
              }}
            >
              Biz koymadık.
            </p>
            <p className="type-body text-[#D6D1C3]/50 mt-10 max-w-sm leading-relaxed" style={{ fontSize: "1rem" }}>
              Piyasadaki kremalara baktık: ya şeker, ya yapay aroma, ya da her ikisi.
              Hiçbiri yeterli değildi. Biz farklı bir yol seçtik.
            </p>
            <Link
              href="/hakkimizda"
              className="inline-flex items-center gap-2 mt-10 type-nav text-[#C0A4B8] border-b border-[#C0A4B8]/30 pb-1 w-fit hover:border-[#C0A4B8] transition-colors"
              style={{ fontSize: "0.65rem" }}
            >
              HİKAYEMİZ →
            </Link>
          </div>

          <div className="relative min-h-80 lg:min-h-0 overflow-hidden img-zoom">
            <Image
              src="/media/instagram/matcha-2.jpg"
              alt="filly's — her an bir aroma"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#53284E]/30 to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          TAGLINE STRIP (Lavender Silk)
      ══════════════════════════════════════════ */}
      <section className="bg-[#C0A4B8] py-14 overflow-hidden border-y border-[#53284E]/8">
        <div className="overflow-hidden marquee-wrap">
          <div className="flex items-center gap-14 marquee-track">
            {[...taglines, ...taglines, ...taglines, ...taglines].map((t, i) => (
              <span
                key={i}
                className="type-display text-[#53284E]/50 whitespace-nowrap flex-shrink-0"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)" }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          @FILLYS.CO — Instagram marquee (Cream)
      ══════════════════════════════════════════ */}
      <section className="bg-[#D6D1C3] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-12 flex items-baseline justify-between">
          <p className="type-display text-[#53284E]" style={{ fontSize: "clamp(2.5rem, 5vw, 5.5rem)" }}>
            @fillys.co
          </p>
          <a
            href="https://instagram.com/fillys.co"
            target="_blank"
            rel="noopener noreferrer"
            className="type-nav text-[#53284E]/35 hover:text-[#53284E] transition-colors"
            style={{ fontSize: "0.62rem" }}
          >
            TAKİP ET →
          </a>
        </div>

        <div className="overflow-hidden mb-2 marquee-wrap">
          <div className="flex gap-2 marquee-track">
            {[...igImages, ...igImages, ...igImages].map((img, i) => (
              <div key={i} className="relative flex-shrink-0 w-72 h-72 overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="288px" />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden marquee-wrap">
          <div className="flex gap-2 marquee-track-reverse">
            {[...[...igImages].reverse(), ...[...igImages].reverse(), ...[...igImages].reverse()].map((img, i) => (
              <div key={i} className="relative flex-shrink-0 w-72 h-72 overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="288px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          RAKAMLAR (Deep Plum)
      ══════════════════════════════════════════ */}
      <section className="bg-[#53284E]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#D6D1C3]/10">
            {[
              { value: "5",    label: "Aroma" },
              { value: "0g",   label: "Şeker" },
              { value: "20ml", label: "Kapsül" },
              { value: "1.",   label: "Türkiye'de ilk" },
            ].map((s) => (
              <div key={s.label} className="py-14 px-6 md:px-10">
                <p className="type-display text-[#D6D1C3]" style={{ fontSize: "clamp(2.5rem, 5vw, 6rem)" }}>
                  {s.value}
                </p>
                <p className="type-body text-[#C0A4B8]/60 mt-3 text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          CTA (Cream)
      ══════════════════════════════════════════ */}
      <section className="bg-[#D6D1C3] py-36 px-6 relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto text-center">
          <p className="type-display text-[#53284E]" style={{ fontSize: "clamp(4rem, 11vw, 13rem)" }}>
            Yakında.
          </p>
          <p className="type-body text-[#53284E]/45 mt-6 mb-14 text-lg italic">
            Satış kanalları çok yakında açılıyor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="type-nav bg-[#53284E] text-[#D6D1C3] px-10 py-4 hover:bg-[#53284E]/80 transition-colors"
              style={{ fontSize: "0.68rem" }}
            >
              HABERDAR OL
            </Link>
            <Link
              href="/urunler"
              className="type-nav border border-[#53284E]/30 text-[#53284E] px-10 py-4 hover:border-[#53284E] transition-colors"
              style={{ fontSize: "0.68rem" }}
            >
              AROMALARA BAK →
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
