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
    steps: ["Kapsülü aç", "Sıcak kahvene ya da sütüne döktür", "Karıştır, sabahı hisset"],
    tip: "Soğuk servis: buz üstüne döküp süt köpüğü ekle.",
    ils: [
      { src: "/media/vanilya-il1.png",  w: 110, pos: { top: "8%",    left: "5%"   }, d: "0s,6.4s"   },
      { src: "/media/vanilya-il2.png",  w: 85,  pos: { bottom: "9%", right: "5%"  }, d: "1.3s,7.8s" },
      { src: "/media/vanilya-il3.png",  w: 68,  pos: { top: "10%",   right: "8%"  }, d: "2.2s,5.9s" },
    ],
  },
  {
    slug: "pistachio",
    name: "Pistachio",
    accent: "#4E8A38",
    capsule: "/media/kapsul/pistachio-4.png",
    tagline: "Weird is working.",
    sub: "Kimse fıstığın bu kadar iyi olacağını bilmiyordu.",
    steps: ["Kapsülü aç", "Cold brew ya da espresso'ya ekle", "Yeşilin tadına var"],
    tip: "Hindistancevizi sütüyle inanılmaz gidiyor.",
    ils: [
      { src: "/media/pistachio-il2.png", w: 104, pos: { top: "6%",    left: "4%"  }, d: "0.5s,7.1s" },
      { src: "/media/pistachio-il1.png", w: 78,  pos: { bottom: "7%", right: "4%" }, d: "1.8s,6.6s" },
      { src: "/media/pistachio-il3.png", w: 64,  pos: { top: "11%",   right: "7%" }, d: "0.9s,6.2s" },
    ],
  },
  {
    slug: "beyaz-cikolata",
    name: "Beyaz Çikolata",
    accent: "#C07840",
    capsule: "/media/kapsul/beyaz-cikolata-4.png",
    tagline: "Guilty? Never.",
    sub: "Şımarmanın şeker olmadan da tadı çıkar.",
    steps: ["Kapsülü aç", "Latte ya da hot chocolate'a karıştır", "Kendini şımartmanın vakti"],
    tip: "Bir tutam deniz tuzu — sonraki seviyeye geç.",
    ils: [
      { src: "/media/beyaz-il1.png",          w: 94,  pos: { top: "7%",    left: "4%"  }, d: "0.2s,6.9s" },
      { src: "/media/beyaz-il2.png",           w: 86,  pos: { bottom: "8%", right: "4%" }, d: "1.6s,7.3s" },
      { src: "/media/beyaz-cikolata-il3.png",  w: 64,  pos: { top: "12%",   right: "7%" }, d: "0.8s,6.0s" },
    ],
  },
  {
    slug: "karamel",
    name: "Karamel",
    accent: "#A04820",
    capsule: "/media/kapsul/karamel-4.png",
    tagline: "Nostaljik ama modern.",
    sub: "Klasiği sev — ama onun kurallarıyla oynama.",
    steps: ["Kapsülü aç", "Espresso ya da Americano'ya ekle", "Klasiği yeniden yaz"],
    tip: "Fleur de sel ekle — tuzlu karamel versiyonu.",
    ils: [
      { src: "/media/karamel-il1.png", w: 80,  pos: { top: "8%",    left: "5%"  }, d: "0.4s,7.0s" },
      { src: "/media/karamel-il2.png", w: 98,  pos: { bottom: "7%", right: "4%" }, d: "1.7s,6.5s" },
      { src: "/media/karamel-il3.png", w: 66,  pos: { top: "11%",   right: "7%" }, d: "2.5s,7.2s" },
    ],
  },
  {
    slug: "matcha",
    name: "Matcha",
    accent: "#2E6040",
    capsule: "/media/kapsul/matcha-4.png",
    tagline: "Dingin. Güçlü.",
    sub: "Hız çağında yavaşlamanın tadı bu.",
    steps: ["Kapsülü aç", "Sıcak süt ya da matcha çayına ekle", "Nefes al. Yudum al."],
    tip: "Oat milk + matcha + filly's = barista seviyesi.",
    ils: [
      { src: "/media/matcha-il1.png", w: 88,  pos: { top: "7%",    left: "4%"  }, d: "0.6s,6.3s" },
      { src: "/media/matcha-il2.png", w: 100, pos: { bottom: "8%", right: "4%" }, d: "2.0s,7.6s" },
      { src: "/media/matcha-il3.png", w: 62,  pos: { top: "12%",   right: "6%" }, d: "0.3s,5.8s" },
    ],
  },
];

const ANIMS = ["rf-fa", "rf-fb", "rf-fc"] as const;

export default function RecipeCards() {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);

  const pick = (idx: number) => {
    if (idx === active || fading) return;
    setFading(true);
    setTimeout(() => { setActive(idx); setFading(false); }, 190);
  };

  const a = aromas[active];

  return (
    <section className="relative overflow-hidden flex flex-col lg:flex-row" style={{ minHeight: "620px" }}>

      <style>{`
        @keyframes rf-fa {
          0%,100% { transform:translateY(0px) rotate(0deg); }
          40%     { transform:translateY(-11px) rotate(2.5deg); }
          72%     { transform:translateY(5px) rotate(-1deg); }
        }
        @keyframes rf-fb {
          0%,100% { transform:translateY(0px) rotate(0deg); }
          30%     { transform:translateY(-15px) rotate(-2deg); }
          65%     { transform:translateY(7px) rotate(1.5deg); }
        }
        @keyframes rf-fc {
          0%,100% { transform:translateY(0px) rotate(0deg); }
          50%     { transform:translateY(-9px) rotate(3deg); }
        }
        @keyframes rf-br {
          0%,100% { transform:scale(1) translateY(0px); }
          50%     { transform:scale(1.04) translateY(-7px); }
        }
        @media (prefers-reduced-motion:reduce) {
          .rf-il, .rf-cap { animation:none!important; }
        }
      `}</style>

      {/* ══ LEFT — Plum visual panel ══ */}
      <div
        className="relative lg:w-[44%] flex flex-col overflow-hidden"
        style={{ backgroundColor: "#53284E", minHeight: "380px" }}
      >
        {/* Section title */}
        <div className="px-8 md:px-10 lg:px-12 pt-12 lg:pt-14 relative z-20">
          <p
            style={{
              fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
              fontSize: "clamp(2rem, 3.8vw, 3.6rem)",
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: "-0.025em",
              color: "#F5EDE8",
            }}
          >
            Ritüelini Seç.
          </p>
        </div>

        {/* Visual stage */}
        <div
          className="relative flex-1 flex items-center justify-center"
          style={{ minHeight: "300px" }}
        >
          {/* Accent glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: `radial-gradient(ellipse 50% 50% at 50% 56%, ${a.accent}35 0%, transparent 68%)`,
              transition: "background 0.8s ease",
            }}
          />

          {/* Watermark */}
          <p
            className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden m-0"
            aria-hidden="true"
            style={{
              fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
              fontSize: "clamp(6rem, 16vw, 18rem)",
              fontWeight: 900,
              color: "#ffffff",
              opacity: 0.045,
              letterSpacing: "-0.04em",
              whiteSpace: "nowrap",
              lineHeight: 1,
            }}
          >
            {a.name}
          </p>

          {/* Floating illustrations */}
          <div
            style={{
              opacity: fading ? 0 : 1,
              transition: "opacity 0.19s ease",
            }}
          >
            {a.ils.map((il, i) => {
              const [delay, dur] = il.d.split(",");
              return (
                <div
                  key={`${a.slug}-${i}`}
                  className="rf-il absolute pointer-events-none"
                  style={{
                    ...il.pos,
                    animation: `${ANIMS[i]} ${dur} ease-in-out ${delay} infinite`,
                    willChange: "transform",
                  }}
                >
                  <Image
                    src={il.src}
                    alt=""
                    width={il.w}
                    height={il.w}
                    className="object-contain"
                    style={{ opacity: 0.88 }}
                    sizes={`${il.w}px`}
                  />
                </div>
              );
            })}
          </div>

          {/* Capsule — hero */}
          <div
            className="rf-cap relative z-10"
            style={{
              width: "clamp(140px, 11vw, 178px)",
              height: "clamp(200px, 16vw, 256px)",
              animation: "rf-br 5.5s ease-in-out infinite",
              willChange: "transform",
              opacity: fading ? 0 : 1,
              transition: "opacity 0.19s ease",
            }}
          >
            <Image
              src={a.capsule}
              alt={`filly's ${a.slug}`}
              fill
              className="object-contain"
              style={{
                filter: `drop-shadow(0 24px 48px rgba(0,0,0,0.35)) drop-shadow(0 6px 20px ${a.accent}50)`,
                transition: "filter 0.6s ease",
              }}
              sizes="178px"
              priority
            />
          </div>
        </div>

        {/* Bottom: 5-color aroma strip */}
        <div className="flex h-[3px] w-full flex-shrink-0">
          {aromas.map((ar) => (
            <div key={ar.slug} className="flex-1" style={{ backgroundColor: ar.accent }} />
          ))}
        </div>
      </div>

      {/* ══ RIGHT — White content panel ══ */}
      <div
        className="relative lg:w-[56%] flex flex-col justify-center bg-white"
      >
        {/* Aroma tab bar */}
        <div
          className="flex items-center border-b overflow-x-auto flex-shrink-0"
          style={{ borderColor: "#53284E10", scrollbarWidth: "none" }}
        >
          {aromas.map((ar, i) => (
            <button
              key={ar.slug}
              onClick={() => pick(i)}
              className="relative flex-shrink-0 px-5 lg:px-6 py-4 cursor-pointer"
            >
              <span
                style={{
                  fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                  fontSize: "0.63rem",
                  letterSpacing: "0.13em",
                  fontWeight: i === active ? 700 : 400,
                  color: i === active ? "#53284E" : "#53284E38",
                  transition: "color 0.25s ease",
                  display: "block",
                }}
              >
                {ar.name.toUpperCase()}
              </span>
              {/* Active underline */}
              <span
                className="absolute bottom-0 left-5 lg:left-6 right-5 lg:right-6 h-[2px] transition-transform duration-300 origin-left"
                style={{
                  backgroundColor: ar.accent,
                  transform: i === active ? "scaleX(1)" : "scaleX(0)",
                }}
              />
            </button>
          ))}
        </div>

        {/* Dynamic content */}
        <div
          className="flex-1 flex flex-col justify-center px-8 md:px-10 lg:px-14 xl:px-16 py-10 lg:py-14"
          style={{
            opacity: fading ? 0 : 1,
            transform: fading ? "translateY(8px)" : "translateY(0)",
            transition: "opacity 0.2s ease, transform 0.2s ease",
          }}
        >
          {/* Aroma color dot + label */}
          <div className="flex items-center gap-2.5 mb-5">
            <span
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: a.accent }}
            />
            <span
              style={{
                fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                fontSize: "0.57rem",
                letterSpacing: "0.2em",
                color: a.accent,
              }}
            >
              {a.name.toUpperCase()}
            </span>
          </div>

          {/* Tagline */}
          <p
            style={{
              fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
              fontSize: "clamp(2rem, 3.3vw, 3rem)",
              fontWeight: 700,
              lineHeight: 0.92,
              letterSpacing: "-0.025em",
              color: "#53284E",
              marginBottom: "0.6rem",
            }}
          >
            {a.tagline}
          </p>
          <p
            style={{
              fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
              fontSize: "0.86rem",
              color: "#53284E",
              opacity: 0.42,
              lineHeight: 1.6,
              marginBottom: "2.2rem",
            }}
          >
            {a.sub}
          </p>

          {/* Steps */}
          <div className="flex flex-col mb-8">
            {a.steps.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-5 py-3.5"
                style={{ borderBottom: `1px solid ${i < a.steps.length - 1 ? "#53284E0c" : "transparent"}` }}
              >
                <span
                  style={{
                    fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                    fontSize: "0.54rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    color: a.accent,
                    minWidth: "18px",
                    flexShrink: 0,
                    marginTop: "0.22rem",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  style={{
                    fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                    fontSize: "0.97rem",
                    fontWeight: 500,
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
            className="py-3.5 px-4"
            style={{
              backgroundColor: `${a.accent}0e`,
              borderLeft: `2px solid ${a.accent}`,
              transition: "border-color 0.6s ease, background-color 0.6s ease",
            }}
          >
            <p
              style={{
                fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                fontSize: "0.53rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                color: a.accent,
                marginBottom: "0.22rem",
              }}
            >
              PRO TIP
            </p>
            <p
              style={{
                fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                fontSize: "0.82rem",
                color: "#53284E",
                opacity: 0.5,
                fontStyle: "italic",
                lineHeight: 1.55,
              }}
            >
              {a.tip}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
