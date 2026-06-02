import Link from "next/link";
import Image from "next/image";

const tiles = [
  {
    key: "tarifler",
    title: "Dene. Farket.",
    sub: "Saat 08:00. Vanilya kapsülün var, kahven var. Geri kalanı aşağıda.",
    href: "/tarifler",
    cta: "Tariflere git",
    image: "/media/brand-universe/tile-nesne.webp",
    bg: "#53284E",
    textColor: "#D6D1C3",
  },
  {
    key: "hikaye",
    title: "Soru Sorarak Başladı.",
    sub: "Kahvene döktüğün kremada neden şeker var? Biz de sorduk.",
    href: "/hakkimizda",
    cta: "Hakkımızda",
    image: "/media/brand-universe/tile-doku.webp",
    bg: "#D6D1C3",
    textColor: "#53284E",
  },
  {
    key: "etki",
    title: "Az Şeker. Gerçekten.",
    sub: "Her kapsülde şeker sıfır. Günde birkaç kapsül. Hesabı sen yap.",
    href: "/etki",
    cta: "Etki",
    image: "/media/brand-universe/tile-kirilma.webp",
    bg: "#C0A4B8",
    textColor: "#53284E",
  },
  {
    key: "sosyal",
    title: "Kapsül Açtıktan Sonra.",
    sub: "@fillys.co — kahven ne oldu görmek için.",
    href: "https://instagram.com/fillys.co",
    cta: "@fillys.co",
    external: true,
    image: "/media/brand-universe/tile-cogaltma.webp",
    bg: "#3A1F2B",
    textColor: "#D6D1C3",
  },
];

export default function BrandUniverse() {
  return (
    <section className="bg-[#D6D1C3]">

      {/* Başlık */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2
            className="type-display text-[#53284E]"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 4.5rem)", lineHeight: 0.92 }}
          >
            The Moments.
          </h2>
          <p
            className="type-body text-[#53284E]/40 max-w-xs"
            style={{ fontSize: "0.82rem", lineHeight: 1.7 }}
          >
            Her kapsül bir ana kapı açıyor.
          </p>
        </div>
      </div>

      {/* 4-tile grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {tiles.map((tile) => (
          <div key={tile.key} className="group relative overflow-hidden" style={{ minHeight: "clamp(360px, 55vw, 560px)" }}>

            {/* Arka plan görsel veya renk */}
            {tile.image ? (
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            ) : (
              <div className="absolute inset-0" style={{ backgroundColor: tile.bg }} />
            )}

            {/* Overlay gradient */}
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.15) 55%, transparent 100%)",
              }}
            />

            {/* İçerik */}
            <div className="absolute inset-0 flex flex-col justify-end p-7 md:p-8">
              <h3
                className="type-display text-white mb-3 leading-none"
                style={{ fontSize: "clamp(1.4rem, 2.2vw, 2rem)" }}
              >
                {tile.title}
              </h3>
              <p
                className="type-body text-white/65 mb-6 max-w-[220px]"
                style={{ fontSize: "0.78rem", lineHeight: 1.6 }}
              >
                {tile.sub}
              </p>
              {tile.external ? (
                <a
                  href={tile.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="type-nav text-white border-b border-white/40 pb-0.5 inline-block w-fit hover:border-white transition-colors duration-300"
                  style={{ fontSize: "0.55rem", letterSpacing: "0.2em" }}
                >
                  {tile.cta} →
                </a>
              ) : (
                <Link
                  href={tile.href}
                  className="type-nav text-white border-b border-white/40 pb-0.5 inline-block w-fit hover:border-white transition-colors duration-300"
                  style={{ fontSize: "0.55rem", letterSpacing: "0.2em" }}
                >
                  {tile.cta} →
                </Link>
              )}
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}
