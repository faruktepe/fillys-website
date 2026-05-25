"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type Slug = "vanilya" | "pistachio" | "beyaz-cikolata" | "karamel" | "matcha";

const products = [
  { slug: "vanilya" as Slug,          name: "Vanilya",        accent: "#C49A30", tagline: "Soft start.",              capsule: "/media/kapsul/vanilya-4.png" },
  { slug: "pistachio" as Slug,        name: "Pistachio",      accent: "#4E8A38", tagline: "Weird is working.",         capsule: "/media/kapsul/pistachio-4.png" },
  { slug: "beyaz-cikolata" as Slug,   name: "Beyaz Çikolata", accent: "#C07840", tagline: "Guilty? Never.",            capsule: "/media/kapsul/beyaz-cikolata-4.png" },
  { slug: "karamel" as Slug,          name: "Karamel",        accent: "#A04820", tagline: "İkinci fincana gerek yok.", capsule: "/media/kapsul/karamel-4.png" },
  { slug: "matcha" as Slug,           name: "Matcha",         accent: "#2E6040", tagline: "Dingin. Güçlü.",            capsule: "/media/kapsul/matcha-4.png" },
];

export default function AromaGrid() {
  const [active, setActive] = useState<Slug | null>(null);

  return (
    <div
      className="relative pt-20 pb-14 md:pt-44 md:pb-44"
      onMouseLeave={() => setActive(null)}
    >
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-24 md:gap-y-16">
        {products.map((p) => {
          const isActive = active === p.slug;
          const hasActive = active !== null;
          const curveOpacity = hasActive ? (isActive ? 0.55 : 0) : 0.18;

          return (
            <div key={p.slug} className="relative">

              {/* Üst SVG — mobil */}
              <svg aria-hidden="true" className="absolute pointer-events-none block md:hidden"
                style={{ top: "-52px", left: "50%", transform: "translateX(-50%)", width: "90px", height: "44px", opacity: 0.22, zIndex: 5 }}
                viewBox="0 0 140 72" fill="none">
                <path d="M10 58 C 30 20, 60 8, 80 28 C 100 48, 118 18, 134 36" stroke={p.accent} strokeWidth="10" strokeLinecap="round" />
                <path d="M4 42 C 22 14, 52 4, 72 22 C 92 40, 112 12, 130 28" stroke={p.accent} strokeWidth="6" strokeLinecap="round" strokeOpacity="0.55" />
              </svg>

              {/* Üst SVG — desktop, hover-interactive */}
              <svg aria-hidden="true" className="absolute pointer-events-none hidden md:block"
                style={{ top: "-88px", left: "50%", transform: "translateX(-50%)", width: "140px", height: "72px", opacity: curveOpacity, transition: "opacity 0.5s ease", zIndex: 5 }}
                viewBox="0 0 140 72" fill="none">
                <path d="M10 58 C 30 20, 60 8, 80 28 C 100 48, 118 18, 134 36" stroke={p.accent} strokeWidth="8" strokeLinecap="round" />
                <path d="M4 42 C 22 14, 52 4, 72 22 C 92 40, 112 12, 130 28" stroke={p.accent} strokeWidth="5" strokeLinecap="round" strokeOpacity="0.55" />
              </svg>

              {/* Alt SVG — mobil */}
              <svg aria-hidden="true" className="absolute pointer-events-none block md:hidden"
                style={{ bottom: "-48px", left: "50%", transform: "translateX(-50%)", width: "90px", height: "40px", opacity: 0.22, zIndex: 5 }}
                viewBox="0 0 140 60" fill="none">
                <path d="M6 18 C 28 48, 58 58, 80 38 C 102 18, 118 50, 136 32" stroke={p.accent} strokeWidth="10" strokeLinecap="round" />
                <path d="M10 30 C 32 56, 62 64, 84 46 C 106 28, 122 56, 138 42" stroke={p.accent} strokeWidth="6" strokeLinecap="round" strokeOpacity="0.55" />
              </svg>

              {/* Alt SVG — desktop */}
              <svg aria-hidden="true" className="absolute pointer-events-none hidden md:block"
                style={{ bottom: "-72px", left: "50%", transform: "translateX(-50%)", width: "140px", height: "60px", opacity: curveOpacity, transition: "opacity 0.5s ease", zIndex: 5 }}
                viewBox="0 0 140 60" fill="none">
                <path d="M6 18 C 28 48, 58 58, 80 38 C 102 18, 118 50, 136 32" stroke={p.accent} strokeWidth="8" strokeLinecap="round" />
                <path d="M10 30 C 32 56, 62 64, 84 46 C 106 28, 122 56, 138 42" stroke={p.accent} strokeWidth="5" strokeLinecap="round" strokeOpacity="0.55" />
              </svg>

              <Link
                href={`/urunler/${p.slug}`}
                className="group flex flex-col items-center text-center"
                onMouseEnter={() => setActive(p.slug)}
              >
                <div className="relative w-full" style={{ height: "clamp(170px, 18vw, 250px)" }}>
                  <Image
                    src={p.capsule}
                    alt={`filly's ${p.name}`}
                    fill
                    className="object-contain drop-shadow-lg transition-all duration-500 group-hover:scale-[1.07] group-hover:-rotate-3"
                    sizes="(max-width: 768px) 42vw, (max-width: 1024px) 28vw, 16vw"
                  />
                </div>
                <p className="type-display text-[#53284E] leading-none mt-4" style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)" }}>
                  {p.name}
                </p>
                <p className="type-body italic mt-1.5" style={{ fontSize: "0.76rem", color: p.accent }}>
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
