"use client";

import { useState } from "react";
import Image from "next/image";

const aromas = [
  {
    slug: "vanilya",
    name: "Vanilya",
    accent: "#C49A30",
    capsule: "/media/kapsul/vanilya-4.png",
    tagline: "Sabahın en yumuşak hali.",
    sub: "Gün başlamadan önce — bir an sadece sen.",
    steps: [
      "Kapsülü aç",
      "Sıcak kahvene ya da sütüne döktür",
      "Karıştır, sabahı hisset",
    ],
    tip: "Soğuk servis: buz üstüne döküp süt köpüğü ekle.",
  },
  {
    slug: "pistachio",
    name: "Pistachio",
    accent: "#4E8A38",
    capsule: "/media/kapsul/pistachio-4.png",
    tagline: "Weird is working.",
    sub: "Kimse fıstığın bu kadar iyi olacağını bilmiyordu.",
    steps: [
      "Kapsülü aç",
      "Cold brew ya da espresso'ya ekle",
      "Yeşilin tadına var",
    ],
    tip: "Hindistancevizi sütüyle inanılmaz gidiyor.",
  },
  {
    slug: "beyaz-cikolata",
    name: "Beyaz Çikolata",
    accent: "#C07840",
    capsule: "/media/kapsul/beyaz-cikolata-4.png",
    tagline: "Guilty? Never.",
    sub: "Şımarmanın şeker olmadan da tadı çıkar.",
    steps: [
      "Kapsülü aç",
      "Latte ya da hot chocolate'a karıştır",
      "Kendini şımartmanın vakti",
    ],
    tip: "Bir tutam deniz tuzu — sonraki seviyeye geç.",
  },
  {
    slug: "karamel",
    name: "Karamel",
    accent: "#A04820",
    capsule: "/media/kapsul/karamel-4.png",
    tagline: "Nostaljik ama modern.",
    sub: "Klasiği sev — ama onun kurallarıyla oynama.",
    steps: [
      "Kapsülü aç",
      "Espresso ya da Americano'ya ekle",
      "Klasiği yeniden yaz",
    ],
    tip: "Bir tutam fleur de sel — tuzlu karamel versiyonu.",
  },
  {
    slug: "matcha",
    name: "Matcha",
    accent: "#2E6040",
    capsule: "/media/kapsul/matcha-4.png",
    tagline: "Dingin. Güçlü.",
    sub: "Hız çağında yavaşlamanın tadı bu.",
    steps: [
      "Kapsülü aç",
      "Sıcak süt ya da matcha çayına ekle",
      "Nefes al. Yudum al.",
    ],
    tip: "Oat milk + matcha + filly's = barista seviyesi.",
  },
];

export default function RecipeCards() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const handleSelect = (idx: number) => {
    if (idx === active || fading) return;
    setFading(true);
    setTimeout(() => {
      setActive(idx);
      setFading(false);
    }, 180);
  };

  const a = aromas[active];

  return (
    <section className="relative overflow-hidden bg-[#FAFAF8] py-20 lg:py-28">
      {/* Subtle aroma bg glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 55% 75% at 78% 55%, ${a.accent}18 0%, transparent 68%)`,
          transition: "background 0.7s ease",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">

        {/* Section header */}
        <div className="mb-12 lg:mb-16">
          <p
            style={{
              fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
              fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              color: "#53284E",
            }}
          >
            Ritüelini Seç.
          </p>
          <p
            style={{
              fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
              fontSize: "0.85rem",
              color: "#53284E",
              opacity: 0.4,
              marginTop: "0.75rem",
              letterSpacing: "0.04em",
            }}
          >
            5 aroma. Bir filly&rsquo;s. Sonsuz kombinasyon.
          </p>
        </div>

        <div className="lg:grid lg:grid-cols-[300px_1fr] lg:gap-14 xl:gap-20 items-start">

          {/* ── LEFT: aroma selector ── */}
          <div>
            {/* Mobile: horizontal pill row */}
            <div
              className="flex lg:hidden gap-2.5 overflow-x-auto pb-2 -mx-2 px-2"
              style={{ scrollbarWidth: "none" }}
            >
              {aromas.map((ar, i) => (
                <button
                  key={ar.slug}
                  onClick={() => handleSelect(i)}
                  className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 cursor-pointer transition-all duration-300"
                  style={{
                    backgroundColor: i === active ? ar.accent : "transparent",
                    border: `1.5px solid ${i === active ? ar.accent : "#53284E28"}`,
                    color: i === active ? "#fff" : "#53284E80",
                    fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                    fontSize: "0.75rem",
                    fontWeight: i === active ? 700 : 400,
                    letterSpacing: "0.04em",
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{ backgroundColor: i === active ? "#fff" : ar.accent }}
                  />
                  {ar.name}
                </button>
              ))}
            </div>

            {/* Desktop: vertical list */}
            <div className="hidden lg:flex flex-col">
              {aromas.map((ar, i) => (
                <button
                  key={ar.slug}
                  onClick={() => handleSelect(i)}
                  className="group flex items-center gap-4 py-4 border-b text-left cursor-pointer transition-all duration-300"
                  style={{
                    borderColor: "#53284E10",
                    paddingLeft: i === active ? "8px" : "0px",
                  }}
                >
                  {/* Active bar */}
                  <div
                    className="flex-shrink-0 rounded-full transition-all duration-500"
                    style={{
                      width: "3px",
                      height: i === active ? "38px" : "10px",
                      backgroundColor: i === active ? ar.accent : "#53284E18",
                    }}
                  />

                  {/* Name + label */}
                  <div className="flex-1 min-w-0">
                    <p
                      style={{
                        fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                        fontSize: i === active ? "1.25rem" : "0.95rem",
                        fontWeight: i === active ? 700 : 400,
                        color: i === active ? "#53284E" : "#53284E50",
                        lineHeight: 1.2,
                        transition: "all 0.3s ease",
                      }}
                    >
                      {ar.name}
                    </p>
                    {i === active && (
                      <p
                        style={{
                          fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                          fontSize: "0.58rem",
                          color: ar.accent,
                          letterSpacing: "0.14em",
                          marginTop: "0.2rem",
                        }}
                      >
                        SEÇİLDİ
                      </p>
                    )}
                  </div>

                  {/* Arrow */}
                  <span
                    className="transition-all duration-300 flex-shrink-0"
                    style={{
                      opacity: i === active ? 1 : 0,
                      color: ar.accent,
                      fontSize: "1.1rem",
                      transform: i === active ? "translateX(0)" : "translateX(-6px)",
                    }}
                  >
                    →
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* ── RIGHT: dynamic content ── */}
          <div
            style={{
              opacity: fading ? 0 : 1,
              transform: fading ? "translateY(10px)" : "translateY(0)",
              transition: "opacity 0.2s ease, transform 0.2s ease",
            }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14">

              {/* Capsule image */}
              <div className="flex items-center justify-center lg:justify-start flex-shrink-0">
                <div className="relative w-36 h-52 lg:w-48 lg:h-64">
                  <Image
                    src={a.capsule}
                    alt={`filly's ${a.slug}`}
                    fill
                    className="object-contain"
                    style={{
                      filter: `drop-shadow(0 20px 40px ${a.accent}50)`,
                    }}
                    sizes="(max-width: 1024px) 144px, 192px"
                  />
                </div>
              </div>

              {/* Copy + Steps + Pro tip */}
              <div className="flex-1">
                {/* Tagline */}
                <p
                  style={{
                    fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                    fontSize: "clamp(1.8rem, 3.2vw, 2.8rem)",
                    fontWeight: 700,
                    lineHeight: 0.95,
                    letterSpacing: "-0.02em",
                    color: "#53284E",
                    marginBottom: "0.55rem",
                  }}
                >
                  {a.tagline}
                </p>
                <p
                  style={{
                    fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                    fontSize: "0.88rem",
                    color: "#53284E",
                    opacity: 0.42,
                    lineHeight: 1.55,
                    marginBottom: "1.75rem",
                  }}
                >
                  {a.sub}
                </p>

                {/* Steps */}
                <div className="flex flex-col gap-3.5 mb-7">
                  {a.steps.map((step, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span
                        style={{
                          fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                          fontSize: "0.6rem",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          color: a.accent,
                          marginTop: "0.25rem",
                          minWidth: "18px",
                          flexShrink: 0,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p
                        style={{
                          fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                          fontSize: "1rem",
                          color: "#53284E",
                          lineHeight: 1.45,
                        }}
                      >
                        {step}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Pro tip */}
                <div
                  className="flex items-start gap-3 py-3.5 px-4"
                  style={{
                    backgroundColor: `${a.accent}12`,
                    borderLeft: `3px solid ${a.accent}`,
                    transition: "border-color 0.5s ease, background-color 0.5s ease",
                  }}
                >
                  <div>
                    <p
                      style={{
                        fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                        fontSize: "0.56rem",
                        fontWeight: 700,
                        letterSpacing: "0.18em",
                        color: a.accent,
                        marginBottom: "0.25rem",
                      }}
                    >
                      PRO TIP
                    </p>
                    <p
                      style={{
                        fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                        fontSize: "0.83rem",
                        color: "#53284E",
                        opacity: 0.58,
                        fontStyle: "italic",
                        lineHeight: 1.5,
                      }}
                    >
                      {a.tip}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
