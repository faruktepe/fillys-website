"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    desktop:    "/media/hero-pistachio1.png",
    mobile:     "/media/hero-pistachio1-mobil.png",
    alt:        "filly's pistachio kahve kreması",
    label:      "Doğal Aromalı",
    labelColor: "#53284E",
    headline:   ["Kahvende", "bir şey eksik!"],
  },
  {
    desktop:    "/media/hero-yeni2.png",
    mobile:     "/media/hero-mobil-yeni2.png",
    alt:        "filly's kahve kreması",
    label:      "Şeker İlavesiz",
    labelColor: "#ffffff",
    headline:   ["Ritüel aynı,", "deneyim farklı."],
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden" style={{ minHeight: "115svh" }}>

      {slides.map((slide, i) => (
        <div
          key={slide.desktop}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          {/* Mobil görsel */}
          <Image
            src={slide.mobile}
            alt={slide.alt}
            fill
            className="object-cover object-center block md:hidden"
            sizes="100vw"
            quality={95}
            priority={i === 0}
          />
          {/* Desktop görsel */}
          <Image
            src={slide.desktop}
            alt={slide.alt}
            fill
            className="object-cover object-center hidden md:block"
            sizes="100vw"
            quality={95}
            priority={i === 0}
          />

          {/* Gradient */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.52) 0%, rgba(0,0,0,0.10) 45%, transparent 100%)",
            }}
          />

          {/* Metin — sol alt */}
          <div className="absolute left-0 bottom-0 px-8 md:px-14 lg:px-20 pb-16 md:pb-16 z-20">
            <span
              style={{
                fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(0.85rem, 1.3vw, 1.2rem)",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: slide.labelColor,
                display: "block",
                marginBottom: "0.6em",
              }}
            >
              {slide.label}
            </span>
            {slide.headline.map((line) => (
              <span
                key={line}
                style={{
                  fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                  fontWeight: 500,
                  fontStyle: "italic",
                  fontSize: "clamp(2.8rem, 4.6vw, 6.2rem)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.025em",
                  color: "#fff",
                  display: "block",
                }}
              >
                {line}
              </span>
            ))}
          </div>
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 right-8 md:right-14 lg:right-20 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slayt ${i + 1}`}
            className="transition-all duration-300"
            style={{
              width: i === current ? "24px" : "8px",
              height: "8px",
              borderRadius: "4px",
              backgroundColor: i === current ? "#fff" : "rgba(255,255,255,0.4)",
              border: "none",
              cursor: "pointer",
            }}
          />
        ))}
      </div>

    </section>
  );
}
