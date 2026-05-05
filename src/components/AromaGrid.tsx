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

type IlloConfig = {
  il1: string; il2: string;
  il1Rot: string; il2Rot: string;
  il1Size: number; il2Size: number;
};

const illoConfig: Record<Slug, IlloConfig> = {
  vanilya:          { il1: "/media/vanilya-il1.png",   il2: "/media/vanilya-il2.png",   il1Rot: "-6deg",  il2Rot: "5deg",  il1Size: 155, il2Size: 138 },
  pistachio:        { il1: "/media/pistachio-il1.png", il2: "/media/pistachio-il2.png", il1Rot: "7deg",   il2Rot: "-4deg", il1Size: 160, il2Size: 140 },
  "beyaz-cikolata": { il1: "/media/beyaz-il1.png",     il2: "/media/beyaz-il2.png",     il1Rot: "5deg",   il2Rot: "-6deg", il1Size: 165, il2Size: 142 },
  karamel:          { il1: "/media/karamel-il1.png",   il2: "/media/karamel-il2.png",   il1Rot: "-7deg",  il2Rot: "4deg",  il1Size: 158, il2Size: 138 },
  matcha:           { il1: "/media/matcha-il1.png",    il2: "/media/matcha-il2.png",    il1Rot: "-4deg",  il2Rot: "6deg",  il1Size: 152, il2Size: 136 },
};

export default function AromaGrid() {
  const [active, setActive] = useState<Slug | null>(null);

  return (
    <div
      className="relative pt-40 pb-40 md:pt-48 md:pb-48"
      onMouseLeave={() => setActive(null)}
    >
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-16">
        {products.map((p) => {
          const cfg = illoConfig[p.slug];
          const isActive = active === p.slug;
          const hasActive = active !== null;
          const illoOpacity = hasActive ? (isActive ? 0.9 : 0) : 0.22;
          const half1 = Math.round(cfg.il1Size / 2);
          const half2 = Math.round(cfg.il2Size / 2);

          return (
            <div key={p.slug} className="relative">

              {/* il1 — sütunun üstünde */}
              <div
                aria-hidden="true"
                className="absolute pointer-events-none hidden md:block"
                style={{
                  top: "-120px",
                  left: "50%",
                  marginLeft: `-${half1}px`,
                  width: `${cfg.il1Size}px`,
                  opacity: illoOpacity,
                  transform: `rotate(${cfg.il1Rot})${isActive ? " scale(1.08) translateY(-6px)" : ""}`,
                  transition: "opacity 0.5s ease, transform 0.55s ease",
                  zIndex: 5,
                }}
              >
                <Image
                  src={cfg.il1}
                  alt=""
                  width={cfg.il1Size}
                  height={Math.round((cfg.il1Size * 4) / 3)}
                  className="object-contain"
                />
              </div>

              {/* il2 — sütunun altında */}
              <div
                aria-hidden="true"
                className="absolute pointer-events-none hidden md:block"
                style={{
                  bottom: "-100px",
                  left: "50%",
                  marginLeft: `-${half2}px`,
                  width: `${cfg.il2Size}px`,
                  opacity: illoOpacity,
                  transform: `rotate(${cfg.il2Rot})${isActive ? " scale(1.06) translateY(6px)" : ""}`,
                  transition: "opacity 0.5s ease, transform 0.55s ease",
                  zIndex: 5,
                }}
              >
                <Image
                  src={cfg.il2}
                  alt=""
                  width={cfg.il2Size}
                  height={Math.round((cfg.il2Size * 4) / 3)}
                  className="object-contain"
                />
              </div>

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
