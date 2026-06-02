import Link from "next/link";
import Image from "next/image";

const aromaColors = ["#C49A30", "#4E8A38", "#C07840", "#A04820", "#2E6040"];

export default function Footer() {
  return (
    <footer
      className="bg-[#D6D1C3] overflow-hidden"
      style={{ fontFamily: "'Apfel Grotezk', system-ui, sans-serif" }}
    >

      {/* ── Aroma renk şeridi ── */}
      <div className="flex h-[3px]">
        {aromaColors.map((color) => (
          <div key={color} className="flex-1" style={{ backgroundColor: color }} />
        ))}
      </div>

      {/* ── Üst: Tagline + Instagram ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 pb-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">

          {/* Logo + tagline */}
          <div>
            <Image
              src="/logo-plum.svg"
              alt="filly's"
              width={130}
              height={50}
              className="mb-6 opacity-85"
            />
            <p
              className="type-display text-[#53284E]"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 4.2rem)",
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
              }}
            >
              #HerLezzette
              <br />
              <span style={{ fontStyle: "italic", fontWeight: 400 }}>BirİZ.</span>
            </p>
          </div>

          {/* Sağ: sosyal butonlar */}
          <div className="flex flex-row md:flex-col gap-3 md:items-end pb-1">
            <a
              href="https://instagram.com/fillys.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-[#53284E] bg-[#53284E] px-5 py-2.5 hover:bg-[#53284E]/85 transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="text-[#D6D1C3]">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
              <span className="type-label text-[#D6D1C3]" style={{ fontSize: "0.5rem", letterSpacing: "0.24em" }}>
                @FILLYS.CO
              </span>
            </a>

            <a
              href="https://tiktok.com/@fillys.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 border border-[#53284E]/40 px-5 py-2.5 hover:border-[#53284E] hover:bg-[#53284E]/6 transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" className="text-[#53284E]/60">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.27 8.27 0 0 0 4.83 1.54V6.78a4.85 4.85 0 0 1-1.06-.09z" />
              </svg>
              <span className="type-label text-[#53284E]/60" style={{ fontSize: "0.5rem", letterSpacing: "0.24em" }}>
                @FILLYS.CO
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* ── Link kolonları ── */}
      <div className="border-t border-[#53284E]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">

            <div>
              <p className="type-label text-[#53284E]/30 mb-5" style={{ fontSize: "0.46rem", letterSpacing: "0.32em" }}>
                KEŞFEDİN
              </p>
              <div className="flex flex-col gap-3">
                {[
                  ["Ürünler", "/urunler"],
                  ["Hakkımızda", "/hakkimizda"],
                  ["Tarifler", "/tarifler"],
                  ["İletişim", "/iletisim"],
                ].map(([label, href]) => (
                  <Link
                    key={href}
                    href={href}
                    className="type-body text-[#53284E]/50 hover:text-[#53284E] transition-colors"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="type-label text-[#53284E]/30 mb-5" style={{ fontSize: "0.46rem", letterSpacing: "0.32em" }}>
                AROMALAR
              </p>
              <div className="flex flex-col gap-3">
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
                    className="type-body text-[#53284E]/50 hover:text-[#53284E] transition-colors"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <p className="type-label text-[#53284E]/30 mb-5" style={{ fontSize: "0.46rem", letterSpacing: "0.32em" }}>
                TAKİP EDİN
              </p>
              <div className="flex flex-col gap-3">
                {[
                  ["Instagram", "https://instagram.com/fillys.co"],
                  ["TikTok", "https://tiktok.com/@fillys.co"],
                ].map(([label, href]) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="type-body text-[#53284E]/50 hover:text-[#53284E] transition-colors"
                    style={{ fontSize: "0.8rem" }}
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="type-label text-[#53284E]/30 mb-5" style={{ fontSize: "0.46rem", letterSpacing: "0.32em" }}>
                İLETİŞİM
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="mailto:info@fillys.com.tr"
                  className="type-body text-[#53284E]/50 hover:text-[#53284E] transition-colors"
                  style={{ fontSize: "0.8rem" }}
                >
                  info@fillys.com.tr
                </a>
                <p className="type-body text-[#53284E]/30" style={{ fontSize: "0.8rem" }}>
                  Türkiye&apos;de Üretildi
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── Alt şerit ── */}
      <div className="border-t border-[#53284E]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="type-label text-[#53284E]/25" style={{ fontSize: "0.44rem", letterSpacing: "0.2em" }}>
            © {new Date().getFullYear()} FILLY&apos;S — TÜM HAKLARI SAKLIDIR
          </p>
          <div className="flex gap-6">
            {[["GİZLİLİK", "/iletisim"], ["KULLANIM KOŞULLARI", "/iletisim"]].map(([label, href]) => (
              <Link
                key={label}
                href={href}
                className="type-label text-[#53284E]/25 hover:text-[#53284E]/50 transition-colors"
                style={{ fontSize: "0.44rem", letterSpacing: "0.18em" }}
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
