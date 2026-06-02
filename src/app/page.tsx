import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmailForm from "@/components/EmailForm";
import AromaGrid from "@/components/AromaGrid";
import HeroCarousel from "@/components/HeroCarousel";

const igImages = [
  { src: "/media/matcha-site-2.png",         alt: "filly's matcha" },
  { src: "/media/instagram/branded.png",     alt: "filly's" },
  { src: "/media/instagram/matcha-3.jpg",    alt: "filly's matcha atmosfer" },
  { src: "/media/lavender-tum-kapsul.png",   alt: "filly's kapsül kahve kreması" },
  { src: "/media/yeni-lavender.png",         alt: "filly's pistachio servis" },
  { src: "/media/matcha-serum.png",          alt: "filly's matcha" },
  { src: "/media/hover-1.png",               alt: "filly's" },
  { src: "/media/hover-2.jpg",               alt: "filly's" },
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

      <HeroCarousel />

      {/* ══════════════════════════════════════════
          5 AROMA GRID
      ══════════════════════════════════════════ */}
      <section className="bg-white py-10 md:py-20 lg:py-28 relative overflow-hidden">


        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Başlık satırı */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between mb-12 pb-6 border-b border-[#53284E]/20">
            <div>
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

          <AromaGrid />

        </div>
      </section>

      {/* ══════════════════════════════════════════
          MANİFESTO (#C1DDE9)
      ══════════════════════════════════════════ */}
      <section className="bg-[#C2D4E4] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[75vh]">

          {/* Sol — görsel sola yaslı, orijinal boyut */}
          <div className="relative min-h-[78vw] lg:min-h-0 bg-[#C2D4E4] order-1">
            <Image
              src="/media/stick-matcha.png"
              alt="filly's matcha kahve kreması"
              fill
              className="object-cover object-top lg:object-contain lg:object-left"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Sağ — metin */}
          <div className="flex flex-col justify-center px-6 md:px-16 lg:px-28 py-10 md:py-20 lg:py-28 order-2">
            <h2
              style={{
                fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(2.6rem, 5.2vw, 6rem)",
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
            <p className="type-body text-[#53284E]/55 mt-8 max-w-sm leading-relaxed" style={{ fontSize: "1.05rem" }}>
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

        </div>
      </section>

      {/* ══════════════════════════════════════════
          TAGLINE STRIP (Lavender Silk)
      ══════════════════════════════════════════ */}
      <section className="bg-[#C0A4B8] py-14 overflow-x-hidden border-y border-[#53284E]/8">
        <div className="marquee-wrap">
          <div className="flex items-center gap-14 marquee-track py-2">
            {[...taglines, ...taglines, ...taglines, ...taglines].map((t, i) => (
              <span
                key={i}
                className="type-display text-[#53284E]/50 whitespace-nowrap flex-shrink-0"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3.2rem)", lineHeight: 1.15 }}
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
      <section className="bg-white py-20 overflow-hidden relative">

        {/* ── Abstract Flow curves — @fillys.co sütununa özel ── */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.11]"
          viewBox="0 0 1400 900"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          aria-hidden="true"
        >
          {/* ANA DALGA — header alanında tam genişlikte, metnin üstünden süpürür */}
          <path
            d="M-120 60 C 180 -40, 500 200, 760 60 C 1020 -80, 1260 180, 1520 40"
            stroke="#53284E" strokeWidth="42" strokeLinecap="round" strokeLinejoin="round"
          />
          {/* İKİNCİ DALGA — metnin hemen altından geçen, biraz daha içeride */}
          <path
            d="M-100 175 C 220 80, 520 280, 800 160 C 1080 40, 1320 240, 1520 140"
            stroke="#53284E" strokeWidth="38" strokeLinecap="round" strokeLinejoin="round"
          />
          {/* SOL KÖPRÜ — header'dan sol kenar boyunca görsel şeritlerinin arkasına dalar */}
          <path
            d="M180 -40 C 80 80, -60 200, -100 400"
            stroke="#53284E" strokeWidth="34" strokeLinecap="round" strokeLinejoin="round"
          />
          {/* SAĞ KÖPRÜ — sağ taraftan görsel şeritlerinin arkasına dalar */}
          <path
            d="M1260 180 C 1380 300, 1520 380, 1500 540"
            stroke="#53284E" strokeWidth="34" strokeLinecap="round" strokeLinejoin="round"
          />
          {/* ALT ÇIKIŞ DALGASI — görsel şeritlerinin altından çıkar, alt padding'de belirginleşir */}
          <path
            d="M-120 820 C 220 710, 520 900, 820 790 C 1100 680, 1320 860, 1520 780"
            stroke="#53284E" strokeWidth="42" strokeLinecap="round" strokeLinejoin="round"
          />
          {/* SOL-ALTTA BAĞLANTI — sol köprüyü alt dalgayla birleştirir */}
          <path
            d="M-100 400 C -80 580, -60 700, -120 820"
            stroke="#53284E" strokeWidth="30" strokeLinecap="round" strokeLinejoin="round"
          />
        </svg>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-8 sm:mb-12 relative">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <p className="type-display text-[#53284E]" style={{ fontSize: "clamp(2.5rem, 5vw, 5.5rem)" }}>
              @fillys.co
            </p>
            <a
              href="https://instagram.com/fillys.co"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 flex items-center gap-2.5 bg-[#53284E] text-[#D6D1C3] rounded-full px-5 py-3 hover:bg-[#3A1F2B] transition-colors duration-300"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="opacity-80">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <span className="type-nav" style={{ fontSize: "0.65rem" }}>TAKİP ET</span>
            </a>
          </div>
        </div>

        <div className="overflow-hidden mb-2 marquee-wrap">
          <div className="flex gap-2 marquee-track">
            {[...igImages, ...igImages, ...igImages].map((img, i) => (
              <div key={i} className="relative flex-shrink-0 w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, 288px" quality={95} />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden marquee-wrap">
          <div className="flex gap-2 marquee-track-reverse">
            {[...[...igImages].reverse(), ...[...igImages].reverse(), ...[...igImages].reverse()].map((img, i) => (
              <div key={i} className="relative flex-shrink-0 w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 overflow-hidden">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, 288px" quality={95} />
              </div>
            ))}
          </div>
        </div>
      </section>

{/* ══════════════════════════════════════════
          KAYIT OL
      ══════════════════════════════════════════ */}
      <section className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden" style={{ minHeight: "80vh" }}>

        {/* Sol — görsel */}
        <div className="relative order-1 lg:min-h-0" style={{ backgroundColor: "#C4B5D4", minHeight: "clamp(320px, 85vw, 600px)" }}>
          <div className="absolute inset-0 px-8 py-6 lg:p-0">
            <div className="relative w-full h-full">
              <Image
                src="/media/yeni-kayit-ol2.png"
                alt="filly's kapsül kahve kreması"
                fill
                className="object-cover object-center lg:object-cover"
                style={{ borderRadius: "4px" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* Sağ — metin + form */}
        <div className="order-2 relative flex flex-col justify-between px-6 md:px-14 lg:px-16 pt-10 md:pt-16 lg:pt-20 pb-6 lg:pb-8 bg-white">

          {/* ── Abstract Flow curves — sağ kolona gömülü, soldan sağa ── */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.11]"
            viewBox="0 0 700 800"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M-60 110 C 120 20, 340 210, 560 100 C 680 40, 760 160, 800 90"
              stroke="#53284E" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round"
            />
            <path
              d="M-60 300 C 140 200, 360 400, 580 280 C 700 210, 780 340, 800 270"
              stroke="#53284E" strokeWidth="36" strokeLinecap="round" strokeLinejoin="round"
            />
            <path
              d="M-60 500 C 160 400, 380 590, 600 470 C 720 400, 790 510, 800 460"
              stroke="#53284E" strokeWidth="36" strokeLinecap="round" strokeLinejoin="round"
            />
            <path
              d="M-60 700 C 140 610, 360 790, 580 680 C 700 620, 780 730, 800 670"
              stroke="#53284E" strokeWidth="40" strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>

          {/* İçerik — SVG'nin önünde */}
          <div className="relative z-[1]">
            <h2 className="type-display" style={{ fontSize: "clamp(3rem, 8.5vw, 10.5rem)", lineHeight: 0.82, color: "#93945C" }}>
              Deneyime
              <br />
              ortak
              <br />
              ol.
            </h2>

            <div className="mt-9">
              <p className="type-display text-[#C0A4B8]" style={{ fontSize: "clamp(1.35rem, 2.6vw, 2.8rem)", lineHeight: 1.1 }}>
                Yeni aromalar,
              </p>
              <p className="type-display text-[#C0A4B8]/85" style={{ fontSize: "clamp(1.35rem, 2.6vw, 2.8rem)", lineHeight: 1.1 }}>
                sürpriz kampanyalar,
              </p>
              <p className="type-display text-[#C0A4B8]/70" style={{ fontSize: "clamp(1.35rem, 2.6vw, 2.8rem)", lineHeight: 1.1 }}>
                yeni deneyimler.
              </p>
            </div>

            <EmailForm />
          </div>

          {/* Alt köşe — logo */}
          <Image src="/logo-plum.svg" alt="filly's" width={120} height={47} className="opacity-75 mt-10 relative z-[1] hidden md:block" />

        </div>

      </section>

      <div className="relative py-12 md:py-20 bg-white overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 1440 160"
          preserveAspectRatio="none"
          fill="none"
          aria-hidden="true"
        >
          <path d="M-40 40 C 200 10, 500 80, 800 35 C 1060 0, 1280 60, 1480 30" stroke="#53284E" strokeWidth="28" strokeLinecap="round" opacity="0.07" />
          <path d="M-40 90 C 180 55, 460 120, 760 80 C 1040 45, 1280 110, 1480 75" stroke="#53284E" strokeWidth="22" strokeLinecap="round" opacity="0.05" />
          <path d="M-40 135 C 220 100, 520 158, 820 118 C 1080 85, 1300 148, 1480 115" stroke="#53284E" strokeWidth="18" strokeLinecap="round" opacity="0.04" />
        </svg>
      </div>

      {/* ══════════════════════════════════════════
          CTA (Yakında arka plan)
      ══════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 lg:py-40 px-6 overflow-hidden">
        {/* Arka plan görseli */}
        <Image
          src="/media/lavender-tum-kapsul.png"
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
          quality={100}
        />

        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <p className="type-display text-white" style={{ fontSize: "clamp(4rem, 11vw, 13rem)" }}>
            Yakında.
          </p>
          <p className="type-display text-white" style={{ fontSize: "clamp(1rem, 1.6vw, 1.4rem)", fontWeight: 400, fontStyle: "italic", marginTop: "1.5rem", marginBottom: "3.5rem", textShadow: "0 1px 12px rgba(0,0,0,0.55)" }}>
            Satış kanalları çok yakında açılıyor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/iletisim"
              className="type-nav bg-white text-[#53284E] px-10 py-4 hover:bg-[#D6D1C3] transition-colors"
              style={{ fontSize: "0.68rem" }}
            >
              HABERDAR OL
            </Link>
            <Link
              href="/urunler"
              className="type-nav border border-white/50 text-white px-10 py-4 hover:bg-white/10 transition-colors"
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
