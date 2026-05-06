"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

const leftLinks = [
  { label: "Ürünler", href: "/urunler" },
  { label: "Tarifler", href: "/tarifler" },
];

const rightLinks = [
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Etki", href: "/etki" },
];

export default function Navbar({ theme = "light" }: { theme?: "light" | "dark" }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);
  const lastY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      const isMobile = window.innerWidth < 768;
      setAtTop(current < 8);
      if (isMobile) {
        setVisible(true); // Mobilde navbar hiç kaybolmaz
      } else if (current < lastY.current || current < 80) {
        setVisible(true);
      } else if (current > lastY.current + 6) {
        setVisible(false);
      }
      lastY.current = current;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Desktop navbar ── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block ${
          visible ? "translate-y-0" : "-translate-y-full"
        } ${!atTop ? "border-b border-white/10" : ""}`}
        style={{
          backgroundColor: atTop ? "transparent" : "rgba(83,40,78,0.96)",
          backdropFilter: atTop ? "none" : "blur(12px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-[76px] flex items-center">
          <div className="grid grid-cols-3 w-full items-center">

            {/* Left nav */}
            <div className="flex items-center gap-9">
              {leftLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`relative group type-nav transition-colors duration-200 ${atTop && theme === "light" ? "text-[#53284E]/75 hover:text-[#53284E]" : "text-white/75 hover:text-white"}`}
                  style={{ fontSize: "0.78rem" }}
                >
                  {label.toUpperCase()}
                  <span className={`absolute left-0 -bottom-0.5 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 ${atTop && theme === "light" ? "bg-[#53284E]" : "bg-white"}`} />
                </Link>
              ))}
            </div>

            {/* Center: Logo */}
            <div className="flex justify-center">
              <Link href="/" aria-label="filly's anasayfa">
                <Image
                  src={atTop && theme === "light" ? "/logo-plum.svg" : "/logo-warm.svg"}
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
                  className={`relative group type-nav transition-colors duration-200 ${atTop && theme === "light" ? "text-[#53284E]/75 hover:text-[#53284E]" : "text-white/75 hover:text-white"}`}
                  style={{ fontSize: "0.78rem" }}
                >
                  {label.toUpperCase()}
                  <span className={`absolute left-0 -bottom-0.5 h-[1.5px] w-0 group-hover:w-full transition-all duration-300 ${atTop && theme === "light" ? "bg-[#53284E]" : "bg-white"}`} />
                </Link>
              ))}
              <Link
                href="/iletisim"
                className={`type-nav border px-4 py-[7px] transition-colors duration-200 ${atTop && theme === "light" ? "text-[#53284E]/75 border-[#53284E]/30 hover:bg-[#53284E] hover:text-white hover:border-[#53284E]" : "text-white/70 border-white/30 hover:bg-white hover:text-[#3A1F2B] hover:border-white"}`}
                style={{ fontSize: "0.7rem" }}
              >
                GİRİŞ YAP
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Mobil navbar — her zaman görünür, beyaz arka plan, deep plum ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 md:hidden border-b border-[#53284E]/8"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="h-[64px] px-5 flex items-center justify-between">

          {/* Sol: Search ikonu */}
          <button
            aria-label="Ara"
            className="w-10 h-10 flex items-center justify-center text-[#53284E]"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <circle cx="8.5" cy="8.5" r="5.5" stroke="#53284E" strokeWidth="1.5"/>
              <path d="M13 13L17 17" stroke="#53284E" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>

          {/* Orta: Logo */}
          <Link href="/" aria-label="filly's" className="absolute left-1/2 -translate-x-1/2">
            <Image src="/logo-plum.svg" alt="filly's" width={90} height={36} priority />
          </Link>

          {/* Sağ: Hamburger */}
          <button
            className="w-10 h-10 flex flex-col justify-center items-center gap-[5px]"
            onClick={() => setOpen(true)}
            aria-label="Menüyü Aç"
          >
            <span className="block w-5 h-[1.5px] bg-[#53284E]" />
            <span className="block w-3.5 h-[1.5px] bg-[#53284E]" />
            <span className="block w-5 h-[1.5px] bg-[#53284E]" />
          </button>
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
        <div className="flex items-center justify-between px-6 h-[64px] border-b border-[#D6D1C3]/8">
          <Image src="/logo-warm.svg" alt="filly's" width={90} height={36} />
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
