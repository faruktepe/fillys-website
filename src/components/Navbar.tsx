"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const leftLinks = [
  { label: "Ürünler", href: "/urunler" },
  { label: "Tarifler", href: "/tarifler" },
];

const rightLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Etki", href: "/etki" },
];

/* Navbar arka plan rengi: #EAE5C4 — marka Lavender Silk tonu */
const NAV_BG = "#C0A4B8";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-[#53284E]/10 shadow-[0_1px_0_rgba(83,40,78,0.06)]"
            : ""
        }`}
        style={{
          backgroundColor: scrolled ? NAV_BG : `${NAV_BG}e6`,
          backdropFilter: scrolled ? "none" : "blur(12px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[76px] flex items-center">

          {/* ── Desktop: 3-column centered layout ── */}
          <div className="hidden md:grid grid-cols-3 w-full items-center">

            {/* Left nav */}
            <div className="flex items-center gap-9">
              {leftLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="relative group type-nav text-[#53284E]/70 hover:text-[#53284E] transition-colors duration-200"
                  style={{ fontSize: "0.78rem" }}
                >
                  {label.toUpperCase()}
                  <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-[#53284E] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
            </div>

            {/* Center: Logo */}
            <div className="flex justify-center">
              <Link href="/" aria-label="filly's anasayfa">
                <Image
                  src="/logo-plum.svg"
                  alt="filly's"
                  width={110}
                  height={43}
                  priority
                  className="hover:opacity-60 transition-opacity duration-300"
                />
              </Link>
            </div>

            {/* Right nav */}
            <div className="flex items-center justify-end gap-9">
              {rightLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="relative group type-nav text-[#53284E]/70 hover:text-[#53284E] transition-colors duration-200"
                  style={{ fontSize: "0.78rem" }}
                >
                  {label.toUpperCase()}
                  <span className="absolute left-0 -bottom-0.5 h-[1.5px] w-0 bg-[#53284E] group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <Link
                href="/iletisim"
                className="type-nav text-[#53284E]/60 border border-[#53284E]/25 px-4 py-[7px] hover:bg-[#53284E] hover:text-[#EAE5C4] hover:border-[#53284E] transition-colors duration-200"
                style={{ fontSize: "0.7rem" }}
              >
                GİRİŞ YAP
              </Link>
            </div>
          </div>

          {/* ── Mobile: logo left + hamburger right ── */}
          <div className="flex md:hidden w-full items-center justify-between">
            <Link href="/" aria-label="filly's">
              <Image src="/logo-plum.svg" alt="filly's" width={96} height={38} priority />
            </Link>
            <button
              className="flex flex-col justify-center items-end gap-[6px] w-9 h-9"
              onClick={() => setOpen(true)}
              aria-label="Menüyü Aç"
            >
              <span className="block w-6 h-[1.5px] bg-[#53284E]" />
              <span className="block w-4 h-[1.5px] bg-[#53284E]" />
              <span className="block w-6 h-[1.5px] bg-[#53284E]" />
            </button>
          </div>

        </div>
      </nav>

      {/* ── Mobile full-screen overlay ── */}
      <div
        className={`fixed inset-0 z-[60] flex flex-col transition-all duration-500 ease-in-out ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
        style={{ backgroundColor: "#53284E" }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-6 h-[76px] border-b border-[#D6D1C3]/8"
        >
          <Image src="/logo-warm.svg" alt="filly's" width={96} height={38} />
          <button onClick={() => setOpen(false)} aria-label="Kapat" className="p-2">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="#D6D1C3" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col justify-center flex-1 px-8">
          {[...leftLinks, ...rightLinks, { label: "İletişim", href: "/iletisim" }].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="type-display text-[#D6D1C3] border-b border-[#D6D1C3]/8 py-7 hover:text-[#C0A4B8] transition-colors"
              style={{ fontSize: "clamp(1.9rem, 7vw, 3rem)" }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Footer handle */}
        <div className="px-8 pb-10">
          <a
            href="https://instagram.com/fillys.co"
            target="_blank"
            rel="noopener noreferrer"
            className="type-label text-[#D6D1C3]/25 hover:text-[#D6D1C3]/55 transition-colors"
            style={{ fontSize: "0.52rem" }}
          >
            @FILLYS.CO
          </a>
        </div>
      </div>
    </>
  );
}
