import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "İletişim — filly's",
  description: "filly's ile iletişime geç. E-posta, Instagram, B2B ve HoReCa işbirlikleri.",
};

export default function IletisimPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#D6D1C3]">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-[#D6D1C3] pt-40 pb-20 px-8 md:px-16 lg:px-24">
          <div className="absolute inset-0 pointer-events-none select-none">
            <Image
              src="/media/kapsul/tum-kapsul.png"
              alt=""
              fill
              className="object-cover object-center"
              style={{ opacity: 0.04 }}
              sizes="100vw"
            />
          </div>
          <p
            className="type-label text-[#53284E]/30 relative z-10"
            style={{ fontSize: "0.52rem", letterSpacing: "0.38em" }}
          >
            İLETİŞİM
          </p>
          <h1
            className="type-display text-[#53284E] relative z-10 mt-6"
            style={{ fontSize: "clamp(5rem, 18vw, 18rem)", lineHeight: 0.82 }}
          >
            Hi.
          </h1>
          <p
            className="type-body text-[#53284E]/50 relative z-10 mt-10 max-w-lg"
            style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)", lineHeight: 1.85 }}
          >
            Ürün soruları, işbirliği teklifleri, press talepleri veya sadece merhaba demek için buradayız.
          </p>
        </section>

        {/* ── CONTACT GRID ── */}
        <section className="border-t border-b border-[#53284E]/10">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#53284E]/10">

            {/* E-posta */}
            <div className="px-10 py-16 md:px-12 md:py-20 flex flex-col justify-between group">
              <div>
                <p
                  className="type-label text-[#53284E]/30 mb-10"
                  style={{ fontSize: "0.48rem", letterSpacing: "0.35em" }}
                >
                  01 — E-POSTA
                </p>
                <a
                  href="mailto:info@fillys.com.tr"
                  className="type-display text-[#53284E] hover:text-[#53284E]/60 transition-colors duration-300 block"
                  style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)" }}
                >
                  info@fillys.com.tr
                </a>
              </div>
              <p
                className="type-body text-[#53284E]/40 mt-10"
                style={{ fontSize: "0.85rem", lineHeight: 1.7 }}
              >
                Ürün, sipariş ve genel sorular için.
              </p>
            </div>

            {/* Instagram */}
            <div className="px-10 py-16 md:px-12 md:py-20 flex flex-col justify-between">
              <div>
                <p
                  className="type-label text-[#53284E]/30 mb-10"
                  style={{ fontSize: "0.48rem", letterSpacing: "0.35em" }}
                >
                  02 — INSTAGRAM
                </p>
                <a
                  href="https://instagram.com/fillys.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-display text-[#53284E] hover:text-[#53284E]/60 transition-colors duration-300 block"
                  style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)" }}
                >
                  @fillys.co
                </a>
              </div>
              <p
                className="type-body text-[#53284E]/40 mt-10"
                style={{ fontSize: "0.85rem", lineHeight: 1.7 }}
              >
                DM'den de yazabilirsin — hepsini okuyoruz.
              </p>
            </div>

            {/* B2B */}
            <div className="px-10 py-16 md:px-12 md:py-20 flex flex-col justify-between">
              <div>
                <p
                  className="type-label text-[#53284E]/30 mb-10"
                  style={{ fontSize: "0.48rem", letterSpacing: "0.35em" }}
                >
                  03 — B2B / HoReCa
                </p>
                <a
                  href="mailto:b2b@fillys.com.tr"
                  className="type-display text-[#53284E] hover:text-[#53284E]/60 transition-colors duration-300 block"
                  style={{ fontSize: "clamp(1.2rem, 2vw, 1.8rem)" }}
                >
                  b2b@fillys.com.tr
                </a>
              </div>
              <p
                className="type-body text-[#53284E]/40 mt-10"
                style={{ fontSize: "0.85rem", lineHeight: 1.7 }}
              >
                Kafe, otel, restoran ve toplu sipariş için.
              </p>
            </div>

          </div>
        </section>

        {/* ── B2B EDITORIAL BÖLÜM ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#53284E]/10">

          {/* Görsel */}
          <div className="relative order-2 lg:order-1" style={{ minHeight: "clamp(320px, 50vw, 680px)" }}>
            <Image
              src="/media/editorial/her-an.png"
              alt="filly's kahve kreması"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          {/* Metin */}
          <div className="order-1 lg:order-2 bg-[#53284E] px-10 py-20 md:px-16 md:py-24 flex flex-col justify-center">
            <p
              className="type-label text-[#C0A4B8]"
              style={{ fontSize: "0.48rem", letterSpacing: "0.38em" }}
            >
              KAFE & HORECA
            </p>
            <p
              className="type-display text-[#D6D1C3] mt-8"
              style={{ fontSize: "clamp(1.8rem, 4vw, 4.5rem)", lineHeight: 0.88 }}
            >
              Specialty kafeniz zaten doğru kahveyi biliyor.
            </p>
            <p
              className="type-body text-[#C0A4B8] mt-8 max-w-md"
              style={{ fontSize: "clamp(0.88rem, 1.1vw, 1rem)", lineHeight: 1.9 }}
            >
              Şimdi doğru kreması da var. Toplu sipariş, sabit tedarikat ve menü entegrasyonu için seçeneklerimizi konuşalım.
            </p>
            <p
              className="type-body text-[#C0A4B8]/50 mt-4 max-w-md"
              style={{ fontSize: "clamp(0.88rem, 1.1vw, 1rem)", lineHeight: 1.9 }}
            >
              Laktozsuz · Glutensiz · İlave şeker yok · 5 aroma seçeneği
            </p>
            <a
              href="mailto:b2b@fillys.com.tr"
              className="mt-12 inline-flex items-center gap-5 border border-[#C0A4B8]/30 px-10 py-4 text-[#D6D1C3] hover:bg-[#D6D1C3] hover:text-[#53284E] transition-all duration-400 self-start"
            >
              <span className="type-label" style={{ fontSize: "0.52rem", letterSpacing: "0.28em" }}>İLETİŞİME GEÇ</span>
              <span className="type-body" style={{ fontSize: "0.9rem" }}>→</span>
            </a>
          </div>

        </section>

        {/* ── PRESS ── */}
        <section className="px-8 md:px-16 lg:px-24 py-20 border-b border-[#53284E]/10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <p
                className="type-label text-[#53284E]/30 mb-5"
                style={{ fontSize: "0.48rem", letterSpacing: "0.35em" }}
              >
                BASIN & MEDYA
              </p>
              <p
                className="type-display text-[#53284E]"
                style={{ fontSize: "clamp(1.4rem, 3vw, 2.8rem)", lineHeight: 0.9 }}
              >
                Press kit ve görsel<br className="md:hidden" /> materyaller için.
              </p>
            </div>
            <a
              href="mailto:press@fillys.com.tr"
              className="inline-flex items-center gap-5 border border-[#53284E] px-10 py-4 hover:bg-[#53284E] hover:text-[#D6D1C3] text-[#53284E] transition-all duration-400 shrink-0"
            >
              <span className="type-label" style={{ fontSize: "0.52rem", letterSpacing: "0.28em" }}>press@fillys.com.tr</span>
              <span className="type-body" style={{ fontSize: "0.9rem" }}>→</span>
            </a>
          </div>
        </section>

        {/* ── ALT CTA ── */}
        <section className="px-8 md:px-16 lg:px-24 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <p
            className="type-display text-[#53284E]"
            style={{ fontSize: "clamp(1.4rem, 3.5vw, 3.2rem)", lineHeight: 0.9 }}
          >
            Önce aromayı<br className="md:hidden" /> dene.
          </p>
          <Link
            href="/urunler"
            className="inline-flex items-center gap-5 border border-[#53284E] px-10 py-4 hover:bg-[#53284E] hover:text-[#D6D1C3] text-[#53284E] transition-all duration-400 shrink-0"
          >
            <span className="type-label" style={{ fontSize: "0.52rem", letterSpacing: "0.28em" }}>5 AROMA</span>
            <span className="type-body" style={{ fontSize: "0.9rem" }}>→</span>
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
