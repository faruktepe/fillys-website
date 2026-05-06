import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Hakkımızda — filly's",
  description: "Türkiye'de ilk aromalı şekersiz sıvı kahve kreması. filly's hikayesi.",
};

const moments = [
  { slug: "vanilya",          il: "/media/vanilya-il1.png",   moment: "Morning Ritual", tagline: "Soft start."                },
  { slug: "pistachio",        il: "/media/pistachio-il1.png", moment: "The Odd Hour",   tagline: "Weird is working."          },
  { slug: "beyaz-cikolata",   il: "/media/beyaz-il1.png",     moment: "Weekend Mode",   tagline: "Guilty? Never."             },
  { slug: "karamel",          il: "/media/karamel-il1.png",   moment: "Late Shift",     tagline: "İkinci fincana gerek yok." },
  { slug: "matcha",           il: "/media/matcha-il1.png",    moment: "Quiet Power",    tagline: "Dingin. Güçlü."             },
];

export default function HakkimizdaPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#D6D1C3]">

        {/* ── HERO ── */}
        <section className="relative overflow-hidden bg-[#53284E] pt-36 pb-24 px-6 md:px-16 lg:px-24">
          <div className="absolute inset-0 pointer-events-none select-none">
            <Image
              src="/media/kapsul/tum-kapsul.png"
              alt=""
              fill
              className="object-cover object-center"
              style={{ opacity: 0.05 }}
              sizes="100vw"
            />
          </div>
          <p
            className="type-label text-[#C0A4B8] relative z-10"
            style={{ fontSize: "0.52rem", letterSpacing: "0.38em" }}
          >
            HAKKIMIZDA
          </p>
          <h1
            className="type-display text-[#D6D1C3] relative z-10 mt-6"
            style={{ fontSize: "clamp(2.8rem, 9vw, 11rem)", lineHeight: 0.86 }}
          >
            Şeker koymadık.<br />Kaldı mı ki?
          </h1>
          <p
            className="type-body text-[#C0A4B8] relative z-10 mt-10 max-w-xl"
            style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.15rem)", lineHeight: 1.85 }}
          >
            Türkiye'de aromalı, şekersiz, kapsül formatında sıvı kahve kreması — bir ilk.
          </p>
        </section>

        {/* ── BRAND STORY + GÖRSEL ── */}
        <section className="grid grid-cols-1 lg:grid-cols-2 border-b border-[#53284E]/10">

          {/* Sol: metin + istatistikler */}
          <div className="px-8 md:px-16 py-20 border-b lg:border-b-0 lg:border-r border-[#53284E]/10 flex flex-col justify-center">
            <div className="grid grid-cols-3 border border-[#53284E]/10 mb-14">
              {[
                { v: "5",    l: "Aroma" },
                { v: "0g",   l: "İlave Şeker" },
                { v: "15ml", l: "Kapsül" },
              ].map((s, i) => (
                <div key={s.l} className={`p-6 md:p-8 text-center ${i < 2 ? "border-r border-[#53284E]/10" : ""}`}>
                  <p className="type-display text-[#53284E]" style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}>{s.v}</p>
                  <p className="type-label text-[#53284E]/30 mt-2" style={{ fontSize: "0.48rem", letterSpacing: "0.25em" }}>{s.l}</p>
                </div>
              ))}
            </div>

            <p
              className="type-body text-[#53284E]/60"
              style={{ fontSize: "clamp(0.88rem, 1.05vw, 1rem)", lineHeight: 1.9 }}
            >
              Filly's, kahve kremasının şeker olmadan da karakter sahibi olabileceğini kanıtlamak için doğdu. Türkiye'de bir ilk — five flavours, no sugar, no apology.
            </p>
            <p
              className="type-body text-[#53284E]/60 mt-6"
              style={{ fontSize: "clamp(0.88rem, 1.05vw, 1rem)", lineHeight: 1.9 }}
            >
              İsim "filizlenmek"ten geliyor: taze başlangıç, yenilenmiş deneyim. Filly's'i koyduğun her fincan senin anın — ritual değil, tercih.
            </p>
          </div>

          {/* Sağ: editorial görsel */}
          <div className="relative" style={{ minHeight: "clamp(300px, 55vw, 700px)" }}>
            <Image
              src="/media/editorial/impasto.png"
              alt="filly's"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </section>

        {/* ── MARKA DNA ── */}
        <section className="bg-[#53284E] px-8 md:px-16 lg:px-24 py-24">
          <p
            className="type-label text-[#C0A4B8]"
            style={{ fontSize: "0.5rem", letterSpacing: "0.38em" }}
          >
            MARKA KİMLİĞİ
          </p>
          <p
            className="type-display text-[#D6D1C3] mt-8"
            style={{ fontSize: "clamp(2.2rem, 7vw, 8.5rem)", lineHeight: 0.86 }}
          >
            FLAVOURED.<br />NOT SWEETENED.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 border-t border-[#C0A4B8]/20 pt-12">
            {["Creative", "Excited", "Hedonistic", "Versatile"].map((word) => (
              <div key={word}>
                <p
                  className="type-display text-[#C0A4B8]"
                  style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.8rem)" }}
                >
                  {word}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5 MOMENT ── */}
        <section className="px-8 md:px-16 lg:px-24 py-24 border-b border-[#53284E]/10">
          <p
            className="type-label text-[#53284E]/30 mb-16"
            style={{ fontSize: "0.5rem", letterSpacing: "0.38em" }}
          >
            5 AN · 5 AROMA
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
            {moments.map((m) => (
              <Link
                key={m.slug}
                href={`/urunler/${m.slug}`}
                className="group flex flex-col items-center text-center"
              >
                <div
                  className="relative mb-5 opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  style={{ width: "clamp(70px, 10vw, 100px)", height: "clamp(70px, 10vw, 100px)" }}
                >
                  <Image src={m.il} alt={m.moment} fill className="object-contain" />
                </div>
                <p
                  className="type-label text-[#53284E]/35"
                  style={{ fontSize: "0.44rem", letterSpacing: "0.22em" }}
                >
                  {m.moment}
                </p>
                <p
                  className="type-body text-[#53284E] italic mt-1.5"
                  style={{ fontSize: "0.82rem" }}
                >
                  {m.tagline}
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* ── EDİTORYAL FULL-BLEED ── */}
        <section className="relative overflow-hidden" style={{ height: "clamp(280px, 50vw, 680px)" }}>
          <Image
            src="/media/editorial/branded.png"
            alt="filly's"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to right, rgba(83,40,78,0.65) 0%, rgba(83,40,78,0.1) 65%, transparent 100%)" }}
          />
          <div className="absolute left-0 top-0 bottom-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
            <p
              className="type-display text-[#D6D1C3]"
              style={{ fontSize: "clamp(2rem, 6vw, 7rem)", lineHeight: 0.88 }}
            >
              Aroma,<br />şeker değil.
            </p>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-8 md:px-16 lg:px-24 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-t border-[#53284E]/10">
          <p
            className="type-display text-[#53284E]"
            style={{ fontSize: "clamp(1.4rem, 3.5vw, 3.2rem)", lineHeight: 0.9 }}
          >
            5 aromayı<br className="md:hidden" /> keşfetmeye hazır mısın?
          </p>
          <Link
            href="/urunler"
            className="inline-flex items-center gap-5 border border-[#53284E] px-10 py-4 hover:bg-[#53284E] hover:text-[#D6D1C3] text-[#53284E] transition-all duration-400 shrink-0"
          >
            <span className="type-label" style={{ fontSize: "0.52rem", letterSpacing: "0.28em" }}>AROMALAR</span>
            <span className="type-body" style={{ fontSize: "0.9rem" }}>→</span>
          </Link>
        </section>

      </main>
      <Footer />
    </>
  );
}
