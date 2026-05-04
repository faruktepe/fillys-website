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
    pos: { top: "-20px", left: "-3%" },
    w: 260,
    rot: "-7deg",
  },
  {
    slug: "beyaz-cikolata" as Slug,
    src: "/media/sb1-beyaz-cikolata.png",
    pos: { top: "-14px", right: "-2%" },
    w: 290,
    rot: "5deg",
  },
  {
    slug: "karamel" as Slug,
    src: "/media/sb1-caramel.png",
    pos: { bottom: "-16px", left: "-2%" },
    w: 255,
    rot: "-5deg",
  },
  {
    slug: "pistachio" as Slug,
    src: "/media/sb1-pistachio.png",
    pos: { bottom: "-14px", right: "-3%" },
    w: 270,
    rot: "6deg",
  },
  {
    slug: "matcha" as Slug,
    src: "/media/sb1-matcha.png",
    pos: { bottom: "-18px", left: "calc(50% - 120px)" },
    w: 240,
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
      {/* Watercolor illustrations — edge-cropped, z-5 */}
      {illos.map(({ slug, src, pos, w, rot }) => (
        <div
          key={`illo-${slug}`}
          aria-hidden="true"
          className="absolute hidden md:block pointer-events-none"
          style={{
            ...(pos as React.CSSProperties),
            width: `${w}px`,
            zIndex: 5,
            opacity: illoOpacity(slug, active),
            transform: illoTransform(slug, active, rot),
            transition: "opacity 0.5s ease, transform 0.55s ease",
          }}
        >
          <Image
            src={src}
            alt=""
            width={w}
            height={Math.round((w * 4) / 3)}
            className="object-contain"
          />
        </div>
      ))}

      {/* Capsule grid — no colored backgrounds, z-10 */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-10">
        {products.map((p, i) => (
          <Link
            key={p.slug}
            href={`/urunler/${p.slug}`}
            className="group flex flex-col items-center text-center"
            onMouseEnter={() => setActive(p.slug)}
          >
            {/* Floating capsule — no card background */}
            <div
              className="relative w-full"
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

            {/* Index + name + tagline */}
            <p
              className="type-label text-[#53284E]/25 mt-4 mb-1"
              style={{ fontSize: "0.42rem", letterSpacing: "0.3em" }}
            >
              {String(i + 1).padStart(2, "0")}
            </p>
            <p
              className="type-display text-[#53284E] leading-none"
              style={{ fontSize: "clamp(1.1rem, 1.6vw, 1.4rem)" }}
            >
              {p.name}
            </p>
            <p
              className="type-body italic mt-1.5"
              style={{
                fontSize: "0.76rem",
                color: p.accent,
              }}
            >
              {p.tagline}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
