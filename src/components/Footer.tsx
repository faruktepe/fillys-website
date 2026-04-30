import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#53284E] overflow-hidden" style={{ fontFamily: "'Apfel Grotezk', system-ui, sans-serif" }}>

      {/* ── Upper: Logo + tagline + social ── */}
      <div className="border-b border-[#D6D1C3]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <Image
              src="/logo-warm.svg"
              alt="filly's"
              width={200}
              height={78}
              className="mb-5 opacity-90"
            />
            <p
              className="type-display text-[#D6D1C3]/10"
              style={{ fontSize: "clamp(1.2rem, 2.8vw, 2.2rem)" }}
            >
              Flavoured. Not sweetened.
            </p>
          </div>

          {/* Social pill */}
          <a
            href="https://instagram.com/fillys.co"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 group border border-[#D6D1C3]/15 px-6 py-3 hover:border-[#D6D1C3]/40 transition-colors self-start md:self-auto"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-[#D6D1C3]/35 group-hover:text-[#D6D1C3]/70 transition-colors"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            <span
              className="type-label text-[#D6D1C3]/35 group-hover:text-[#D6D1C3]/70 transition-colors"
              style={{ fontSize: "0.52rem", letterSpacing: "0.25em" }}
            >
              @FILLYS.CO
            </span>
          </a>
        </div>
      </div>

      {/* ── Link columns ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10">

          {/* Keşfedin */}
          <div>
            <p
              className="type-label text-[#D6D1C3]/20 mb-6"
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
                  className="type-body text-[#D6D1C3]/40 hover:text-[#D6D1C3]/75 transition-colors"
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
              className="type-label text-[#D6D1C3]/20 mb-6"
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
                  className="type-body text-[#D6D1C3]/40 hover:text-[#D6D1C3]/75 transition-colors"
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
              className="type-label text-[#D6D1C3]/20 mb-6"
              style={{ fontSize: "0.48rem", letterSpacing: "0.35em" }}
            >
              TAKİP EDİN
            </p>
            <div className="flex flex-col gap-3.5">
              <a
                href="https://instagram.com/fillys.co"
                target="_blank"
                rel="noopener noreferrer"
                className="type-body text-[#D6D1C3]/40 hover:text-[#D6D1C3]/75 transition-colors"
                style={{ fontSize: "0.82rem", fontFamily: "'Apfel Grotezk', system-ui, sans-serif" }}
              >
                Instagram
              </a>
            </div>
          </div>

          {/* İletişim */}
          <div>
            <p
              className="type-label text-[#D6D1C3]/20 mb-6"
              style={{ fontSize: "0.48rem", letterSpacing: "0.35em" }}
            >
              İLETİŞİM
            </p>
            <div className="flex flex-col gap-3.5">
              <p
                className="type-body text-[#D6D1C3]/35"
                style={{ fontSize: "0.82rem", fontFamily: "'Apfel Grotezk', system-ui, sans-serif" }}
              >
                info@fillys.com.tr
              </p>
              <p
                className="type-body text-[#D6D1C3]/25"
                style={{ fontSize: "0.82rem", fontFamily: "'Apfel Grotezk', system-ui, sans-serif" }}
              >
                Türkiye&apos;de Üretildi
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── Bottom strip ── */}
      <div className="border-t border-[#D6D1C3]/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            className="type-label text-[#D6D1C3]/20"
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
                className="type-label text-[#D6D1C3]/20 hover:text-[#D6D1C3]/45 transition-colors"
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
