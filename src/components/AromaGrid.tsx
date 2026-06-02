"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Slug = "vanilya" | "pistachio" | "beyaz-cikolata" | "karamel" | "matcha";

const products = [
  {
    slug: "vanilya" as Slug,
    name: "Vanilya",
    accent: "#C49A30",
    tagline: "Soft start.",
    capsule: "/media/kapsul/vanilya-4.png",
    charRelax: "/media/karakterler/vanilya-char.png",
    charClimb: "/media/karakterler/vanilya-climb.png",
    seed: 2,
    leftPos:  { bottom: "-5%",  left:  "-34%", rotate: -18, originX: "100%", tx: "-85%", ty: "65%" },
    rightPos: { top:    "-18%", right: "-22%", rotate:  14, originX: "0%",   tx:  "65%", ty: "-75%" },
  },
  {
    slug: "pistachio" as Slug,
    name: "Pistachio",
    accent: "#4E8A38",
    tagline: "Weird is working.",
    capsule: "/media/kapsul/pistachio-4.png",
    charRelax: "/media/karakterler/pistachio-char.png",
    charClimb: "/media/karakterler/pistachio-climb.png",
    seed: 7,
    leftPos:  { top:    "-18%", left:  "-30%", rotate: -20, originX: "100%", tx: "-72%", ty: "-65%" },
    rightPos: { bottom: "-8%",  right: "-24%", rotate:  22, originX: "0%",   tx:  "68%", ty:  "55%" },
  },
  {
    slug: "beyaz-cikolata" as Slug,
    name: "Beyaz Çikolata",
    accent: "#C07840",
    tagline: "Guilty? Never.",
    capsule: "/media/kapsul/beyaz-cikolata-4.png",
    charRelax: "/media/karakterler/beyaz-cikolata-char.png",
    charClimb: "/media/karakterler/beyaz-cikolata-climb.png",
    seed: 13,
    leftPos:  { bottom: "-10%", left:  "-36%", rotate: -22, originX: "100%", tx: "-78%", ty:  "68%" },
    rightPos: { top:    "-16%", right: "-20%", rotate:  10, originX: "0%",   tx:  "62%", ty: "-68%" },
  },
  {
    slug: "karamel" as Slug,
    name: "Karamel",
    accent: "#A04820",
    tagline: "İkinci fincana gerek yok.",
    capsule: "/media/kapsul/karamel-4.png",
    charRelax: "/media/karakterler/karamel-char.png",
    charClimb: "/media/karakterler/karamel-climb.png",
    seed: 5,
    leftPos:  { top:    "-12%", left:  "-28%", rotate: -16, originX: "100%", tx: "-70%", ty: "-58%" },
    rightPos: { bottom: "-6%",  right: "-26%", rotate:  18, originX: "0%",   tx:  "70%", ty:  "52%" },
  },
  {
    slug: "matcha" as Slug,
    name: "Matcha",
    accent: "#2E6040",
    tagline: "Dingin. Güçlü.",
    capsule: "/media/kapsul/matcha-4.png",
    charRelax: "/media/karakterler/matcha-char.png",
    charClimb: "/media/karakterler/matcha-climb.png",
    seed: 9,
    leftPos:  { bottom: "-8%",  left:  "-32%", rotate: -26, originX: "100%", tx: "-80%", ty:  "60%" },
    rightPos: { top:    "-20%", right: "-22%", rotate:  12, originX: "0%",   tx:  "65%", ty: "-70%" },
  },
];

type CharProps = {
  char: string;
  name: string;
  isActive: boolean;
  mirror?: boolean;
  pos: { top?: string; bottom?: string; left?: string; right?: string; rotate: number; originX: string; tx: string; ty: string };
  delay: number;
  size: number;
};

function FloatingChar({ char, name, isActive, mirror = false, pos, delay, size }: CharProps) {
  const { top, bottom, left, right, rotate, originX, tx, ty } = pos;

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top, bottom, left, right,
        width: `${size}%`,
        zIndex: 15,
        transform: isActive
          ? `rotate(${rotate}deg) scale(1)`
          : `rotate(${rotate}deg) translateX(${tx}) translateY(${ty}) scale(0.6)`,
        opacity: isActive ? 1 : 0,
        transition: `opacity 0.35s ease ${delay}ms, transform 0.5s cubic-bezier(0.34, 1.5, 0.64, 1) ${delay}ms`,
        transformOrigin: `${originX} 50%`,
      }}
    >
      <Image
        src={char}
        alt={name}
        width={200}
        height={200}
        className="w-full h-auto"
        style={{
          transform: mirror ? "scaleX(-1)" : "none",
          filter: "drop-shadow(0 6px 18px rgba(0,0,0,0.18))",
        }}
      />
    </div>
  );
}

export default function AromaGrid() {
  const [active, setActive] = useState<Slug | null>(null);

  return (
    <div
      className="relative pt-10 pb-10 md:pt-16 md:pb-16"
      onMouseLeave={() => setActive(null)}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-20 md:gap-y-14">
        {products.map((p) => {
          const isActive = active === p.slug;
          const hasActive = active !== null;

          return (
            <div
              key={p.slug}
              className="relative"
              style={{
                opacity: hasActive && !isActive ? 0.38 : 1,
                transition: "opacity 0.4s ease",
                zIndex: isActive ? 20 : 1,
              }}
            >
              <Link
                href={`/urunler/${p.slug}`}
                className="group flex flex-col items-center text-center"
                onMouseEnter={() => setActive(p.slug)}
              >
                <div
                  className="relative w-full"
                  style={{ height: "clamp(180px, 20vw, 255px)", overflow: "visible" }}
                >
                  {/* Suluboya leke */}
                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 260 260" className="w-full h-full" style={{ overflow: "visible" }}>
                      <defs>
                        <filter id={`wc-${p.slug}`} x="-55%" y="-55%" width="210%" height="210%">
                          <feTurbulence type="fractalNoise" baseFrequency="0.026 0.031" numOctaves="5" seed={p.seed} result="noise" />
                          <feDisplacementMap in="SourceGraphic" in2="noise" scale="32" result="displaced" />
                          <feGaussianBlur in="displaced" stdDeviation="4" />
                        </filter>
                      </defs>
                      <ellipse cx="130" cy="132" rx="105" ry="110" fill={p.accent} opacity={isActive ? 0.14 : 0.08} filter={`url(#wc-${p.slug})`} style={{ transition: "opacity 0.5s ease" }} />
                      <ellipse cx="130" cy="130" rx="84"  ry="90"  fill={p.accent} opacity={isActive ? 0.42 : 0.30} filter={`url(#wc-${p.slug})`} style={{ transition: "opacity 0.5s ease" }} />
                      <ellipse cx="127" cy="126" rx="64"  ry="70"  fill={p.accent} opacity={isActive ? 0.28 : 0.18} filter={`url(#wc-${p.slug})`} style={{ transition: "opacity 0.5s ease" }} />
                      <ellipse cx="112" cy="110" rx="34"  ry="30"  fill={p.accent} opacity={isActive ? 0.20 : 0.12} filter={`url(#wc-${p.slug})`} style={{ transition: "opacity 0.5s ease" }} />
                    </svg>
                  </div>

                  {/* Sol karakter — tırmanıyor */}
                  <FloatingChar
                    char={p.charClimb}
                    name={p.name}
                    isActive={isActive}
                    mirror={true}
                    pos={p.leftPos}
                    delay={0}
                    size={58}
                  />

                  {/* Sağ karakter — dinleniyor */}
                  <FloatingChar
                    char={p.charRelax}
                    name={p.name}
                    isActive={isActive}
                    mirror={false}
                    pos={p.rightPos}
                    delay={60}
                    size={52}
                  />

                  {/* Kapsül */}
                  <div className="absolute inset-0" style={{ zIndex: 10 }}>
                    <Image
                      src={p.capsule}
                      alt={`filly's ${p.name}`}
                      fill
                      className="object-contain"
                      style={{
                        transform: isActive ? "scale(1.10) rotate(-3deg)" : "scale(1) rotate(0deg)",
                        transition: "transform 0.55s cubic-bezier(0.16,1,0.3,1)",
                        filter: isActive
                          ? "drop-shadow(0 12px 28px rgba(0,0,0,0.22))"
                          : "drop-shadow(0 4px 12px rgba(0,0,0,0.10))",
                      }}
                      sizes="(max-width: 768px) 42vw, (max-width: 1024px) 28vw, 16vw"
                    />
                  </div>
                </div>

                {/* Metin */}
                <p
                  className="type-display text-[#53284E] leading-none mt-5"
                  style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)" }}
                >
                  {p.name}
                </p>
                <p
                  className="type-body italic mt-1.5"
                  style={{ fontSize: "0.76rem", color: p.accent }}
                >
                  {p.tagline}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
