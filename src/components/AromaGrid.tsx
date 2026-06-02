"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Slug = "vanilya" | "pistachio" | "beyaz-cikolata" | "karamel" | "matcha";
type Product = { slug: Slug; name: string; accent: string; tagline: string; capsule: string; hoverCapsule: string; seed: number; illustrations: { src: string; alt: string; w: number; top: string; left: string; rotate: number; delay: number }[] };

const products = [
  {
    slug: "vanilya" as Slug,
    name: "Vanilya",
    accent: "#C49A30",
    tagline: "Soft start.",
    capsule: "/media/kapsul/vanilya-4.png",
    hoverCapsule: "/media/kapsul/vanilya-2.png",
    seed: 2,
    illustrations: [
      { src: "/media/vanilya-il1.png", alt: "vanilla flower", w: 90, top: "-18%", left: "-22%", rotate: -18, delay: 0 },
      { src: "/media/vanilya-il2.png", alt: "vanilla beans", w: 75, top: "52%",  left: "62%",  rotate: 14,  delay: 70 },
      { src: "/media/vanilya-il3.png", alt: "vanilla watercolor", w: 60, top: "-12%", left: "55%", rotate: 8, delay: 130 },
    ],
  },
  {
    slug: "pistachio" as Slug,
    name: "Pistachio",
    accent: "#4E8A38",
    tagline: "Weird is working.",
    capsule: "/media/kapsul/pistachio-4.png",
    hoverCapsule: "/media/kapsul/pistachio-2.png",
    seed: 7,
    illustrations: [
      { src: "/media/pistachio-il2.png", alt: "pistachio branch", w: 95, top: "-22%", left: "-28%", rotate: -12, delay: 0 },
      { src: "/media/pistachio-il1.png", alt: "pistachio nuts",   w: 65, top: "55%",  left: "58%",  rotate: 20,  delay: 70 },
      { src: "/media/pistachio-il3.png", alt: "pistachio watercolor", w: 55, top: "-10%", left: "60%", rotate: -6, delay: 130 },
    ],
  },
  {
    slug: "beyaz-cikolata" as Slug,
    name: "Beyaz Çikolata",
    accent: "#C07840",
    tagline: "Guilty? Never.",
    capsule: "/media/kapsul/beyaz-cikolata-4.png",
    hoverCapsule: "/media/kapsul/beyaz-cikolata-2.png",
    seed: 13,
    illustrations: [
      { src: "/media/beyaz-il1.png", alt: "white chocolate",  w: 85, top: "-20%", left: "-25%", rotate: -15, delay: 0 },
      { src: "/media/beyaz-il2.png", alt: "cacao pod",        w: 78, top: "50%",  left: "55%",  rotate: 16,  delay: 70 },
      { src: "/media/beyaz-cikolata-il3.png", alt: "chocolate watercolor", w: 58, top: "-8%", left: "58%", rotate: -4, delay: 130 },
    ],
  },
  {
    slug: "karamel" as Slug,
    name: "Karamel",
    accent: "#A04820",
    tagline: "İkinci fincana gerek yok.",
    capsule: "/media/kapsul/karamel-4.png",
    hoverCapsule: "/media/kapsul/karamel-2.png",
    seed: 5,
    illustrations: [
      { src: "/media/karamel-il1.png", alt: "caramel cube",  w: 70, top: "-18%", left: "-20%", rotate: -10, delay: 0 },
      { src: "/media/karamel-il2.png", alt: "sugar cane",    w: 88, top: "52%",  left: "52%",  rotate: 22,  delay: 70 },
      { src: "/media/karamel-il3.png", alt: "caramel watercolor", w: 62, top: "-14%", left: "54%", rotate: 7, delay: 130 },
    ],
  },
  {
    slug: "matcha" as Slug,
    name: "Matcha",
    accent: "#2E6040",
    tagline: "Dingin. Güçlü.",
    capsule: "/media/kapsul/matcha-4.png",
    hoverCapsule: "/media/kapsul/matcha-2.png",
    seed: 9,
    illustrations: [
      { src: "/media/matcha-il1.png", alt: "matcha whisk",   w: 78, top: "-22%", left: "-24%", rotate: -20, delay: 0 },
      { src: "/media/matcha-il2.png", alt: "matcha powder",  w: 88, top: "48%",  left: "56%",  rotate: 10,  delay: 70 },
      { src: "/media/matcha-il3.png", alt: "matcha watercolor", w: 58, top: "-10%", left: "58%", rotate: -8, delay: 130 },
    ],
  },
];

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
          const itemOpacity = hasActive && !isActive ? 0.38 : 1;

          return (
            <div
              key={p.slug}
              className="relative"
              style={{ opacity: itemOpacity, transition: "opacity 0.4s ease", zIndex: isActive ? 20 : 1 }}
            >
              <Link
                href={`/urunler/${p.slug}`}
                className="group flex flex-col items-center text-center"
                onMouseEnter={() => setActive(p.slug)}
              >
                {/* Kapsül + illüstrasyonlar */}
                <div
                  className="relative w-full"
                  style={{ height: "clamp(180px, 20vw, 255px)", overflow: "visible" }}
                >

                  {/* Suluboya leke — arka plan */}
                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    aria-hidden="true"
                  >
                    <svg
                      viewBox="0 0 260 260"
                      className="w-full h-full"
                      style={{ overflow: "visible" }}
                    >
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

                  {/* Dağınık illüstrasyonlar — hover'da açılır */}
                  {p.illustrations.map((il, i) => (
                    <div
                      key={i}
                      className="absolute pointer-events-none"
                      style={{
                        width: `${il.w}%`,
                        top: il.top,
                        left: il.left,
                        zIndex: 5,
                        transform: isActive
                          ? `rotate(${il.rotate}deg) scale(1)`
                          : `rotate(${il.rotate}deg) scale(0.72)`,
                        opacity: isActive ? 1 : 0,
                        transition: `opacity 0.42s ease ${il.delay}ms, transform 0.42s cubic-bezier(0.34,1.56,0.64,1) ${il.delay}ms`,
                      }}
                    >
                      <Image
                        src={il.src}
                        alt={il.alt}
                        width={300}
                        height={300}
                        className="w-full h-auto"
                        style={{ filter: "drop-shadow(0 4px 12px rgba(0,0,0,0.12))" }}
                      />
                    </div>
                  ))}

                  {/* Kapsül görseli — hover'da -2.png'ye geçer */}
                  <div className="absolute inset-0" style={{ zIndex: 10 }}>
                    <Image
                      src={p.capsule}
                      alt={`filly's ${p.name}`}
                      fill
                      className="object-contain drop-shadow-lg transition-all duration-500 group-hover:scale-[1.08] group-hover:-rotate-3"
                      style={{ opacity: isActive ? 0 : 1, transition: "opacity 0.4s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1)" }}
                      sizes="(max-width: 768px) 42vw, (max-width: 1024px) 28vw, 16vw"
                    />
                    <Image
                      src={p.hoverCapsule}
                      alt={`filly's ${p.name} alternatif`}
                      fill
                      className="object-contain drop-shadow-lg"
                      style={{ opacity: isActive ? 1 : 0, transform: isActive ? "scale(1.08) rotate(3deg)" : "scale(1)", transition: "opacity 0.4s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1)" }}
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
