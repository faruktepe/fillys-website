import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#D6D1C3] overflow-hidden" style={{ fontFamily: "'Apfel Grotezk', system-ui, sans-serif" }}>

      {/* ── Upper: Logo + tagline + social ── */}
      <div className="border-b border-[#53284E]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-14 flex flex-col items-center md:flex-row md:items-end md:justify-between gap-10">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo-plum.svg"
              alt="filly's"
              width={200}
              height={78}
              className="mb-5 opacity-90"
            />
            <p
              className="type-display text-[#53284E] text-center md:text-left"
              style={{ fontSize: "clamp(1.2rem, 2.8vw, 2.2rem)" }}
            >
              #HerLezzetteBirİz
            </p>

            {/* Mobilde tagline'ın hemen altı */}
            <a
              href="https://instagram.com/fillys.co"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden inline-flex items-center gap-3 group border border-[#53284E] bg-[#53284E] px-6 py-3 hover:bg-[#53284E]/85 transition-colors mt-6"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#D6D1C3]">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <span className="type-label text-[#D6D1C3]" style={{ fontSize: "0.52rem", letterSpacing: "0.25em" }}>@FILLYS.CO</span>
            </a>
          </div>

          {/* Desktop'ta sağda */}
          <a
            href="https://instagram.com/fillys.co"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-3 group border border-[#53284E] bg-[#53284E] px-6 py-3 hover:bg-[#53284E]/85 transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#D6D1C3]">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            <span className="type-label text-[#D6D1C3]" style={{ fontSize: "0.52rem", letterSpacing: "0.25em" }}>@FILLYS.CO</span>
          </a>
        </div>
      </div>

      {/* ── Link columns ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">

          {/* Keşfedin */}
          <div>
            <p
              className="type-label text-[#53284E]/25 mb-6"
              style={{ fontSize: "0.48rem", letterSpacing: "0.35em" }}
            >
              KEŞFEDİN
            </p>
            <div className="flex flex-col gap-3.5">
              {[
                ["Ürünler", "/urunler"],
                ["Hakkımızda", "/hakkimizda"],
                ["İletişim", "/iletisim"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="type-body text-[#53284E]/45 hover:text-[#53284E]/80 transition-colors"
                  style={{ fontSize: "0.82rem", fontFamily: "'Apfel Grotezk', system-ui, sans-serif" }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Aromalar */}
          <div>
            <p
              className="type-label text-[#53284E]/25 mb-6"
              style={{ fontSize: "0.48rem", letterSpacing: "0.35em" }}
            >
              AROMALAR
            </p>
            <div className="flex flex-col gap-3.5">
              {[
                ["Vanilya", "/urunler/vanilya"],
                ["Pistachio", "/urunler/pistachio"],
                ["Beyaz Çikolata", "/urunler/beyaz-cikolata"],
                ["Karamel", "/urunler/karamel"],
                ["Matcha", "/urunler/matcha"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="type-body text-[#53284E]/45 hover:text-[#53284E]/80 transition-colors"
                  style={{ fontSize: "0.82rem", fontFamily: "'Apfel Grotezk', system-ui, sans-serif" }}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Sosyal */}
          <div>
            <p
              className="type-label text-[#53284E]/25 mb-6"
              style={{ fontSize: "0.48rem", letterSpacing: "0.35em" }}
            >
              TAKİP EDİN
            </p>
            <div className="flex flex-col gap-3.5">
              <a
                href="https://instagram.com/fillys.co"
                target="_blank"
                rel="noopener noreferrer"
                className="type-body text-[#53284E]/45 hover:text-[#53284E]/80 transition-colors"
                style={{ fontSize: "0.82rem", fontFamily: "'Apfel Grotezk', system-ui, sans-serif" }}
              >
                Instagram
              </a>
            </div>
          </div>

          {/* İletişim */}
          <div>
            <p
              className="type-label text-[#53284E]/25 mb-6"
              style={{ fontSize: "0.48rem", letterSpacing: "0.35em" }}
            >
              İLETİŞİM
            </p>
            <div className="flex flex-col gap-3.5">
              <p
                className="type-body text-[#53284E]/40"
                style={{ fontSize: "0.82rem", fontFamily: "'Apfel Grotezk', system-ui, sans-serif" }}
              >
                info@fillys.com.tr
              </p>
              <p
                className="type-body text-[#53284E]/25"
                style={{ fontSize: "0.82rem", fontFamily: "'Apfel Grotezk', system-ui, sans-serif" }}
              >
                Türkiye&apos;de Üretildi
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom strip ── */}
      <div className="border-t border-[#53284E]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="type-label text-[#53284E]/25"
            style={{ fontSize: "0.46rem", letterSpacing: "0.22em" }}
          >
            © {new Date().getFullYear()} FILLY&apos;S — TÜM HAKLARI SAKLIDIR
          </p>
          <div className="flex gap-6">
            {[
              ["GİZLİLİK", "/iletisim"],
              ["KULLANIM KOŞULLARI", "/iletisim"],
            ].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="type-label text-[#53284E]/25 hover:text-[#53284E]/50 transition-colors"
                style={{ fontSize: "0.46rem", letterSpacing: "0.18em" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
