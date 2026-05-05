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

type Illo = {
  slug: Slug;
  src: string;
  desktopPos: Record<string, string>;
  desktopW: number;
  rot: string;
  mobilePos?: Record<string, string>;
  mobileW?: number;
};

const illos: Illo[] = [
  // ── Vanilya ──
  { slug: "vanilya",        src: "/media/vanilya-il1.png",   desktopPos: { top: "-20px", left: "-3%" },              desktopW: 245, rot: "-7deg",  mobilePos: { top: "2%",  left: "-10px" }, mobileW: 130 },
  { slug: "vanilya",        src: "/media/vanilya-il2.png",   desktopPos: { top: "8%",    left: "14%" },              desktopW: 200, rot: "4deg" },

  // ── Pistachio ──
  { slug: "pistachio",      src: "/media/pistachio-il1.png", desktopPos: { bottom: "-14px", right: "-3%" },          desktopW: 255, rot: "6deg",   mobilePos: { top: "28%", right: "-10px" }, mobileW: 130 },
  { slug: "pistachio",      src: "/media/pistachio-il2.png", desktopPos: { bottom: "12%",   right: "13%" },          desktopW: 195, rot: "-4deg" },

  // ── Beyaz Çikolata ──
  { slug: "beyaz-cikolata", src: "/media/beyaz-il1.png",     desktopPos: { top: "-14px",    right: "-2%" },          desktopW: 265, rot: "5deg",   mobilePos: { top: "53%", left: "-10px" }, mobileW: 130 },
  { slug: "beyaz-cikolata", src: "/media/beyaz-il2.png",     desktopPos: { top: "12%",      right: "15%" },          desktopW: 195, rot: "-3deg" },

  // ── Karamel ──
  { slug: "karamel",        src: "/media/karamel-il1.png",   desktopPos: { bottom: "-16px", left: "-2%" },           desktopW: 250, rot: "-5deg",  mobilePos: { top: "72%", right: "-10px" }, mobileW: 120 },
  { slug: "karamel",        src: "/media/karamel-il2.png",   desktopPos: { bottom: "12%",   left: "14%" },           desktopW: 195, rot: "3deg" },

  // ── Matcha ──
  { slug: "matcha",         src: "/media/matcha-il1.png",    desktopPos: { bottom: "-18px", left: "calc(50% - 125px)" }, desktopW: 235, rot: "-3deg", mobilePos: { bottom: "3%", left: "calc(50% - 60px)" }, mobileW: 120 },
  { slug: "matcha",         src: "/media/matcha-il2.png",    desktopPos: { bottom: "14%",   left: "calc(50% - 90px)" },  desktopW: 190, rot: "5deg" },
];

function illoOpacity(slug: Slug, active: Slug | null): number {
  if (active === null) return 0.22;
  return active === slug ? 0.9 : 0;
}

function illoTransform(slug: Slug, active: Slug | null, rot: string): string {
  const base = `rotate(${rot})`;
  if (active === slug) return `${base} scale(1.06) translateY(-8px)`;
  if (active !== null) return `${base} scale(0.96)`;
  return base;
}

export default function AromaGrid() {
  const [active, setActive] = useState<Slug | null>(null);

  return (
    <div
      className="relative pt-20 pb-24 md:pt-28 md:pb-32"
      onMouseLeave={() => setActive(null)}
    >
      {/* Mobile — il1 only, static opacity */}
      {illos.filter((il) => il.mobilePos).map((il, i) => (
        <div
          key={`mob-${il.slug}-${i}`}
          aria-hidden="true"
          className="absolute block md:hidden pointer-events-none"
          style={{
            ...(il.mobilePos as React.CSSProperties),
            width: `${il.mobileW}px`,
            zIndex: 5,
            opacity: 0.22,
            transform: `rotate(${il.rot})`,
          }}
        >
          <Image src={il.src} alt="" width={il.mobileW!} height={Math.round((il.mobileW! * 4) / 3)} className="object-contain" />
        </div>
      ))}

      {/* Desktop — both il1 + il2, hover-interactive */}
      {illos.map((il, i) => (
        <div
          key={`desk-${il.slug}-${i}`}
          aria-hidden="true"
          className="absolute hidden md:block pointer-events-none"
          style={{
            ...(il.desktopPos as React.CSSProperties),
            width: `${il.desktopW}px`,
            zIndex: 5,
            opacity: illoOpacity(il.slug, active),
            transform: illoTransform(il.slug, active, il.rot),
            transition: "opacity 0.5s ease, transform 0.55s ease",
          }}
        >
          <Image src={il.src} alt="" width={il.desktopW} height={Math.round((il.desktopW * 4) / 3)} className="object-contain" />
        </div>
      ))}

      {/* Capsule grid */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
        {products.map((p) => (
          <Link
            key={p.slug}
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
        ))}
      </div>
    </div>
  );
}
