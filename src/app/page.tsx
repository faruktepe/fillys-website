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
          HERO — Full-bleed, text bottom-left
      ══════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden"
        style={{ minHeight: "100svh" }}
      >

        {/* Tam ekran fotoğraf */}
        <Image
          src="/media/hero-beyaz-cikolata-6.png"
          alt="filly's beyaz çikolata kahve kreması"
          fill
          className="object-cover hero-img-position"
          sizes="100vw"
          quality={95}
          priority
        />

        {/* Sol alt gradient — sadece metin alanı için, fotoğrafı öldürmez */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(83,40,78,0.45) 0%, rgba(83,40,78,0.15) 35%, transparent 60%)",
          }}
        />

        {/* Metin — mobilde orta, desktop sol alt */}
        <div className="absolute bottom-0 left-0 right-0 px-8 md:px-14 lg:px-20 pb-8 lg:pb-10">
          <div className="max-w-2xl mx-auto md:mx-0 text-center md:text-left">

            {/* Başlık */}
            <h1
              className="anim-fadeup"
              style={{
                fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.6rem, 6.5vw, 7.5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                color: "#fff",
              }}
            >
              Aynı ritüel,<br />
              yepyeni bir deneyim.
            </h1>

            {/* CTA butonu */}
            <div className="mt-6 anim-fadeup-2 flex justify-center md:justify-start">
              <Link
                href="/urunler"
                className="inline-flex items-center gap-2 bg-[#53284E] text-white px-8 py-4 hover:bg-[#3A1F2B] transition-colors duration-300 type-nav"
                style={{ fontSize: "0.68rem", borderRadius: "2px" }}
              >
                DAHA FAZLA →
              </Link>
            </div>

          </div>
        </div>

        {/* Scroll hint — sağ alt */}
        <div className="hidden lg:flex absolute bottom-8 right-10 items-center gap-3 opacity-40">
          <div className="w-px h-10 bg-white/60 overflow-hidden relative flex-shrink-0">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white anim-scroll-bar" />
          </div>
          <span
            className="type-label text-white"
            style={{ fontSize: "0.46rem", letterSpacing: "0.28em" }}
          >
            SCROLL
          </span>
        </div>

      </section>

      {/* ══════════════════════════════════════════
          5 AROMA GRID
      ══════════════════════════════════════════ */}
      <section className="bg-[#C0A4B8] py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Başlık satırı */}
          <div className="flex items-end justify-between mb-12 pb-6 border-b border-[#53284E]/20">
            <div>
              <p
                className="type-label mb-3"
                style={{ fontSize: "0.5rem", letterSpacing: "0.35em", color: "#C0A4B8" }}
              >
                AROMALAR
              </p>
              <p
                className="type-display text-[#53284E]"
                style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
              >
                5 Aroma.
              </p>
            </div>
            <Link
              href="/urunler"
              className="type-nav border border-[#53284E] text-[#53284E] px-5 py-2.5 hover:bg-[#53284E] hover:text-[#C0A4B8] transition-colors duration-300 mb-1"
              style={{ fontSize: "0.63rem" }}
            >
              TÜMÜNÜ GÖR →
            </Link>
          </div>

          {/* Ürün grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
            {products.map((product, i) => (
              <Link key={product.slug} href={`/urunler/${product.slug}`} className="group flex flex-col">
                {/* Görsel — w-[75%] inner box ile boyut normalizasyonu */}
                <div className="relative aspect-square overflow-hidden mb-5 flex items-center justify-center">
                  <div className="relative w-[75%] h-[75%] group-hover:scale-[1.07] transition-transform duration-500">
                    <Image
                      src={product.image}
                      alt={`filly's ${product.name}`}
                      fill
                      className="object-contain object-center"
                      sizes="(max-width: 768px) 40vw, (max-width: 1024px) 27vw, 16vw"
                    />
                  </div>
                </div>

                {/* Metin */}
                <div className="border-t border-[#53284E]/15 pt-4">
                  <p
                    className="type-label mb-2"
                    style={{ fontSize: "0.42rem", letterSpacing: "0.22em", color: "#C0A4B8" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p
                    className="type-product text-[0.88rem] transition-opacity duration-300 group-hover:opacity-60"
                    style={{ color: "#53284E" }}
                  >
                    {product.name.toUpperCase()}
                  </p>
                  <p
                    className="type-body text-[0.75rem] italic mt-1"
                    style={{ color: "#C0A4B8", opacity: 0.7 }}
                  >
                    {product.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════
          MANİFESTO (#C1DDE9)
      ══════════════════════════════════════════ */}
      <section className="bg-[#C1D8E4] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[75vh]">

          {/* Sol — metin */}
          <div className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-20 lg:py-28">
            <h2
              style={{
                fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.2rem, 4.5vw, 5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                color: "#53284E",
              }}
            >
              ceremony,<br />
              <span
                style={{
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#53284E",
                }}
              >
                but faster.
              </span>
            </h2>
            <p className="type-body text-[#53284E]/55 mt-8 max-w-sm leading-relaxed" style={{ fontSize: "0.95rem" }}>
              Matcha kapsülünü aç, kahvene dök — ritüelin tadı, hazırlığın derdi olmadan.
            </p>
            <div className="mt-8">
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-2 type-nav px-6 py-3 border border-[#53284E] text-[#53284E] bg-white hover:bg-[#53284E] hover:text-white transition-colors duration-300"
                style={{ fontSize: "0.65rem" }}
              >
                HİKAYEMİZ →
              </Link>
            </div>
          </div>

          {/* Sağ — görsel tam sütun */}
          <div className="relative min-h-[60vw] lg:min-h-0 bg-[#C1D8E4]">
            <Image
              src="/media/matcha-site-2.png"
              alt="filly's matcha kahve kreması"
              fill
              className="object-contain object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
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
