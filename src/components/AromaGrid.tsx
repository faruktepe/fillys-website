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
  },
  {
    slug: "pistachio" as Slug,
    name: "Pistachio",
    accent: "#4E8A38",
    tagline: "Weird is working.",
    capsule: "/media/kapsul/pistachio-4.png",
  },
  {
    slug: "beyaz-cikolata" as Slug,
    name: "Beyaz Çikolata",
    accent: "#C07840",
    tagline: "Guilty? Never.",
    capsule: "/media/kapsul/beyaz-cikolata-4.png",
  },
  {
    slug: "karamel" as Slug,
    name: "Karamel",
    accent: "#A04820",
    tagline: "İkinci fincana gerek yok.",
    capsule: "/media/kapsul/karamel-4.png",
  },
  {
    slug: "matcha" as Slug,
    name: "Matcha",
    accent: "#2E6040",
    tagline: "Dingin. Güçlü.",
    capsule: "/media/kapsul/matcha-4.png",
  },
];

const illos = [
  {
    slug: "vanilya" as Slug,
    src: "/media/sb1-vanilya.png",
    desktopPos: { top: "-20px", left: "-3%" },
    desktopW: 260,
    mobilePos: { top: "3%", left: "-10px" },
    mobileW: 130,
    rot: "-7deg",
  },
  {
    slug: "beyaz-cikolata" as Slug,
    src: "/media/sb1-beyaz-cikolata.png",
    desktopPos: { top: "-14px", right: "-2%" },
    desktopW: 290,
    mobilePos: { top: "29%", right: "-10px" },
    mobileW: 210,
    rot: "5deg",
  },
  {
    slug: "karamel" as Slug,
    src: "/media/sb1-caramel.png",
    desktopPos: { bottom: "-16px", left: "-2%" },
    desktopW: 255,
    mobilePos: { top: "46%", left: "-10px" },
    mobileW: 128,
    rot: "-5deg",
  },
  {
    slug: "pistachio" as Slug,
    src: "/media/sb1-pistachio.png",
    desktopPos: { bottom: "-14px", right: "-3%" },
    desktopW: 270,
    mobilePos: { top: "52%", right: "-10px" },
    mobileW: 135,
    rot: "6deg",
  },
  {
    slug: "matcha" as Slug,
    src: "/media/sb1-matcha.png",
    desktopPos: { bottom: "-18px", left: "calc(50% - 120px)" },
    desktopW: 240,
    mobilePos: { bottom: "3%", left: "calc(50% - 60px)" },
    mobileW: 120,
    rot: "-3deg",
  },
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
      {/* Mobile illustrations — static, fixed opacity, smaller */}
      {illos.map(({ slug, src, mobilePos, mobileW, rot }) => (
        <div
          key={`mob-illo-${slug}`}
          aria-hidden="true"
          className="absolute block md:hidden pointer-events-none"
          style={{
            ...(mobilePos as React.CSSProperties),
            width: `${mobileW}px`,
            zIndex: 5,
            opacity: 0.2,
            transform: `rotate(${rot})`,
          }}
        >
          <Image
            src={src}
            alt=""
            width={mobileW}
            height={Math.round((mobileW * 4) / 3)}
            className="object-contain"
          />
        </div>
      ))}

      {/* Desktop illustrations — hover-interactive */}
      {illos.map(({ slug, src, desktopPos, desktopW, rot }) => (
        <div
          key={`desk-illo-${slug}`}
          aria-hidden="true"
          className="absolute hidden md:block pointer-events-none"
          style={{
            ...(desktopPos as React.CSSProperties),
            width: `${desktopW}px`,
            zIndex: 5,
            opacity: illoOpacity(slug, active),
            transform: illoTransform(slug, active, rot),
            transition: "opacity 0.5s ease, transform 0.55s ease",
          }}
        >
          <Image
            src={src}
            alt=""
            width={desktopW}
            height={Math.round((desktopW * 4) / 3)}
            className="object-contain"
          />
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
            <div
              className="relative w-full rounded-xl"
              style={{ height: "clamp(170px, 18vw, 250px)" }}
            >
              <Image
                src={p.capsule}
                alt={`filly's ${p.name}`}
                fill
                className="object-contain drop-shadow-lg transition-all duration-500 group-hover:scale-[1.07] group-hover:-rotate-3"
                sizes="(max-width: 768px) 42vw, (max-width: 1024px) 28vw, 16vw"
              />
            </div>
            <p
              className="type-display text-[#53284E] leading-none"
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
        ))}
      </div>
    </div>
  );
}
