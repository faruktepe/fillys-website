"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const items = [
  {
    slug: "vanilya",
    name: "Vanilya",
    accent: "#D4A843",
    tagline: "Soft start.",
    image: "/media/kapsul/vanilya-4.png",
    sb1: "/media/sb1-vanilya.png",
    sb1Style: { top: "6%", right: "18%" },
    sb1Rotate: "-5deg",
  },
  {
    slug: "pistachio",
    name: "Pistachio",
    accent: "#6FA05A",
    tagline: "Weird is working.",
    image: "/media/kapsul/pistachio-4.png",
    sb1: "/media/sb1-pistachio.png",
    sb1Style: { bottom: "4%", left: "2%" },
    sb1Rotate: "4deg",
  },
  {
    slug: "beyaz-cikolata",
    name: "Beyaz Çikolata",
    accent: "#E8A87C",
    tagline: "Guilty? Never.",
    image: "/media/kapsul/beyaz-cikolata-4.png",
    sb1: "/media/sb1-beyaz-cikolata.png",
    sb1Style: { top: "3%", left: "4%" },
    sb1Rotate: "-3deg",
  },
  {
    slug: "karamel",
    name: "Karamel",
    accent: "#B86030",
    tagline: "İkinci fincana gerek yok.",
    image: "/media/kapsul/karamel-4.png",
    sb1: "/media/sb1-caramel.png",
    sb1Style: { bottom: "5%", right: "3%" },
    sb1Rotate: "6deg",
  },
  {
    slug: "matcha",
    name: "Matcha",
    accent: "#4A7C55",
    tagline: "Dingin. Güçlü.",
    image: "/media/kapsul/matcha-4.png",
    sb1: "/media/sb1-matcha.png",
    sb1Style: { bottom: "6%", left: "38%" },
    sb1Rotate: "-4deg",
  },
];

export default function AromaGrid() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="relative">

      {/* ── Scattered sb1 ikonları — sadece desktop, hover ile görünür ── */}
      {items.map((item) => (
        <div
          key={`sb1-${item.slug}`}
          aria-hidden="true"
          className="absolute pointer-events-none hidden md:block z-0 transition-all duration-500"
          style={{
            ...(item.sb1Style as React.CSSProperties),
            width: "175px",
            opacity: hovered === item.slug ? 1 : 0,
            transform: `rotate(${item.sb1Rotate}) scale(${hovered === item.slug ? 1 : 0.82})`,
          }}
        >
          <Image
            src={item.sb1}
            alt=""
            width={175}
            height={233}
            className="object-contain drop-shadow-2xl"
          />
        </div>
      ))}

      {/* ── Kapsül grid — her zaman görünür ── */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8">
        {items.map((item, i) => (
          <Link
            key={item.slug}
            href={`/urunler/${item.slug}`}
            className="group flex flex-col"
            onMouseEnter={() => setHovered(item.slug)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Kart */}
            <div
              className="relative aspect-[3/4] flex items-center justify-center overflow-hidden mb-4 transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ backgroundColor: item.accent, borderRadius: "12px" }}
            >
              <span
                className="absolute top-3 left-4 type-label text-white/50"
                style={{ fontSize: "0.42rem", letterSpacing: "0.3em" }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="absolute top-5 right-[-28px] type-label text-white/40 rotate-90 origin-right whitespace-nowrap"
                style={{ fontSize: "0.38rem", letterSpacing: "0.22em" }}
              >
                {item.tagline.toUpperCase()}
              </span>
              <div className="relative w-[72%] h-[72%] group-hover:scale-[1.08] group-hover:-rotate-3 transition-all duration-500 z-10">
                <Image
                  src={item.image}
                  alt={`filly's ${item.name}`}
                  fill
                  className="object-contain object-center drop-shadow-lg"
                  sizes="(max-width: 768px) 40vw, (max-width: 1024px) 27vw, 16vw"
                />
              </div>
            </div>

            {/* İsim + tagline */}
            <div className="px-1">
              <p
                className="type-display text-[#53284E] leading-none"
                style={{ fontSize: "clamp(1.15rem, 1.8vw, 1.45rem)" }}
              >
                {item.name}
              </p>
              <p
                className="type-body italic mt-1.5"
                style={{ fontSize: "0.78rem", color: item.accent, filter: "brightness(0.7)" }}
              >
                {item.tagline}
              </p>
            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}
