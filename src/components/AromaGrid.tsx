import Link from "next/link";
import Image from "next/image";

const items = [
  {
    slug: "vanilya",
    name: "Vanilya",
    accent: "#D4A843",
    tagline: "Soft start.",
    image: "/media/kapsul/vanilya-4.png",
    sb1: "/media/sb1-vanilya.png",
    // Grid'in ÜSTÜNDE beyaz alanda — sol köşe
    sb1Pos: { top: "10px", left: "2%" },
    sb1Rotate: "-6deg",
    cardClass: "aroma-vanilya",
    iconClass: "aroma-sb1-vanilya",
  },
  {
    slug: "pistachio",
    name: "Pistachio",
    accent: "#6FA05A",
    tagline: "Weird is working.",
    image: "/media/kapsul/pistachio-4.png",
    sb1: "/media/sb1-pistachio.png",
    // Grid'in ALTINDA beyaz alanda — sol-orta
    sb1Pos: { bottom: "8px", left: "6%" },
    sb1Rotate: "4deg",
    cardClass: "aroma-pistachio",
    iconClass: "aroma-sb1-pistachio",
  },
  {
    slug: "beyaz-cikolata",
    name: "Beyaz Çikolata",
    accent: "#E8A87C",
    tagline: "Guilty? Never.",
    image: "/media/kapsul/beyaz-cikolata-4.png",
    sb1: "/media/sb1-beyaz-cikolata.png",
    // Grid'in ÜSTÜNDE — sağ taraf
    sb1Pos: { top: "14px", right: "5%" },
    sb1Rotate: "5deg",
    cardClass: "aroma-beyaz",
    iconClass: "aroma-sb1-beyaz",
  },
  {
    slug: "karamel",
    name: "Karamel",
    accent: "#B86030",
    tagline: "İkinci fincana gerek yok.",
    image: "/media/kapsul/karamel-4.png",
    sb1: "/media/sb1-caramel.png",
    // Grid'in ALTINDA — sağ köşe
    sb1Pos: { bottom: "6px", right: "3%" },
    sb1Rotate: "-5deg",
    cardClass: "aroma-karamel",
    iconClass: "aroma-sb1-karamel",
  },
  {
    slug: "matcha",
    name: "Matcha",
    accent: "#4A7C55",
    tagline: "Dingin. Güçlü.",
    image: "/media/kapsul/matcha-4.png",
    sb1: "/media/sb1-matcha.png",
    // Grid'in ALTINDA — orta
    sb1Pos: { bottom: "10px", left: "42%" },
    sb1Rotate: "-3deg",
    cardClass: "aroma-matcha",
    iconClass: "aroma-sb1-matcha",
  },
];

export default function AromaGrid() {
  return (
    /*
     * aroma-section: CSS :has() hedefi
     * pt-28 pb-20 (lg): grid üstünde ~112px, altında ~80px beyaz alan — ikonlar buraya
     */
    <div
      className="aroma-section relative pt-8 md:pt-16 lg:pt-28 pb-6 md:pb-12 lg:pb-20"
    >

      {/* ── Sb1 ikonları: grid'in üst/alt beyaz alanlarında dağınık, lg'de görünür ── */}
      {items.map((item) => (
        <div
          key={`sb1-${item.slug}`}
          aria-hidden="true"
          className={`aroma-sb1 ${item.iconClass} absolute hidden lg:block`}
          style={{
            ...(item.sb1Pos as React.CSSProperties),
            width: "150px",
            "--ar": item.sb1Rotate,
          } as React.CSSProperties}
        >
          <Image
            src={item.sb1}
            alt=""
            width={150}
            height={200}
            className="object-contain drop-shadow-2xl"
          />
        </div>
      ))}

      {/* ── Kapsül grid: her zaman görünür, z-10 (ikonların önünde) ── */}
      <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8">
        {items.map((item, i) => (
          <Link
            key={item.slug}
            href={`/urunler/${item.slug}`}
            className={`${item.cardClass} group flex flex-col`}
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
