import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, getProduct } from "@/data/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — filly's`,
    description: product.description,
  };
}

export default async function UrunDetayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const index = products.findIndex((p) => p.slug === product.slug);

  return (
    <>
      <Navbar />
      <main className="bg-[#D6D1C3] min-h-screen">
        {/* Back nav */}
        <div className="max-w-7xl mx-auto px-6 pt-28 pb-0">
          <Link
            href="/urunler"
            className="type-label text-[#53284E]/30 hover:text-[#53284E] transition-colors"
            style={{ fontSize: "0.55rem", letterSpacing: "0.25em" }}
          >
            ← TÜM AROMALAR
          </Link>
        </div>

        {/* Hero: image left / info right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
          {/* Product image panel */}
          <div
            className="relative flex items-center justify-center overflow-hidden"
            style={{ backgroundColor: product.imageBg, minHeight: "55vw" }}
          >
            {/* Index number watermark */}
            <span
              className="absolute top-8 left-8 type-display text-white/10 select-none pointer-events-none"
              style={{ fontSize: "clamp(6rem, 15vw, 18rem)", lineHeight: 1 }}
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            {/* Capsule image — trim edilmiş şeffaf PNG, minimal padding */}
            <div className="relative w-full h-full" style={{ minHeight: "55vw" }}>
              <Image
                src={product.image}
                alt={`filly's ${product.name} kahve kreması kapsülü`}
                fill
                className="object-contain object-center anim-float"
                style={{ padding: "8%" }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Bottom label */}
            <div className="absolute bottom-6 left-8 right-8 flex items-end justify-between">
              <span
                className="type-label text-white/20"
                style={{ fontSize: "0.5rem", letterSpacing: "0.25em" }}
              >
                filly&apos;s
              </span>
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: product.accent }} />
            </div>
          </div>

          {/* Info panel */}
          <div className="flex flex-col justify-center px-10 py-16 lg:px-20 lg:py-24 bg-[#D6D1C3]">
            {/* Aroma number */}
            <p
              className="type-label text-[#53284E]/20 mb-6"
              style={{ fontSize: "0.55rem", letterSpacing: "0.3em" }}
            >
              AROMA {String(index + 1).padStart(2, "0")} / 05
            </p>

            {/* Product name */}
            <h1
              className="type-display text-[#53284E] mb-3"
              style={{ fontSize: "clamp(3rem, 6vw, 7rem)" }}
            >
              {product.name.toUpperCase()}
            </h1>

            {/* Tagline */}
            <p className="type-body text-[#53284E]/45 text-xl italic mb-12">
              {product.tagline}
            </p>

            {/* Description */}
            <p className="type-body text-[#53284E]/70 text-base leading-relaxed mb-12 max-w-sm">
              {product.description}
            </p>

            {/* Specs */}
            <div className="border-t border-[#53284E]/10 pt-8 mb-12 grid grid-cols-2 gap-8">
              <div>
                <p
                  className="type-label text-[#53284E]/30 mb-2"
                  style={{ fontSize: "0.5rem", letterSpacing: "0.25em" }}
                >
                  FORMAT
                </p>
                <p className="type-body text-[#53284E]/65 text-sm">20ml kapsül</p>
              </div>
              <div>
                <p
                  className="type-label text-[#53284E]/30 mb-2"
                  style={{ fontSize: "0.5rem", letterSpacing: "0.25em" }}
                >
                  ŞEKER
                </p>
                <p className="type-body text-[#53284E]/65 text-sm">İlave şeker yok</p>
              </div>
              <div>
                <p
                  className="type-label text-[#53284E]/30 mb-2"
                  style={{ fontSize: "0.5rem", letterSpacing: "0.25em" }}
                >
                  İÇERİK
                </p>
                <p className="type-body text-[#53284E]/65 text-sm">Laktozsuz · Glutensiz</p>
              </div>
              <div>
                <p
                  className="type-label text-[#53284E]/30 mb-2"
                  style={{ fontSize: "0.5rem", letterSpacing: "0.25em" }}
                >
                  AROMA
                </p>
                <p className="type-body text-[#53284E]/65 text-sm">Doğal Aromalı</p>
              </div>
            </div>

            {/* CTA */}
            <div className="border border-[#53284E]/15 px-8 py-5 flex items-center justify-between">
              <p
                className="type-label text-[#53284E]/30"
                style={{ fontSize: "0.5rem", letterSpacing: "0.2em" }}
              >
                SATIŞ YAKINDA
              </p>
              <div className="w-1.5 h-1.5 rounded-full bg-[#53284E]/20" />
            </div>
          </div>
        </div>

        {/* Diğer aromalar */}
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-32">
          <p
            className="type-label text-[#53284E]/25 mb-10"
            style={{ fontSize: "0.55rem", letterSpacing: "0.3em" }}
          >
            DİĞER AROMALAR
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[#53284E]/10">
            {products
              .filter((p) => p.slug !== product.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/urunler/${p.slug}`}
                  className="group bg-[#D6D1C3] hover:bg-[#53284E] transition-colors duration-500 flex flex-col overflow-hidden"
                >
                  {/* Mini image */}
                  <div
                    className="relative overflow-hidden"
                    style={{ aspectRatio: "1/1", backgroundColor: p.imageBg }}
                  >
                    <Image
                      src={p.image}
                      alt={`filly's ${p.name}`}
                      fill
                      className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    style={{ padding: "6%" }}
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  {/* Name */}
                  <div className="p-5">
                    <p
                      className="type-product text-[#53284E] group-hover:text-[#D6D1C3] transition-colors text-xs"
                    >
                      {p.name.toUpperCase()}
                    </p>
                    <p
                      className="type-body text-[#53284E]/40 group-hover:text-[#D6D1C3]/40 transition-colors text-xs italic mt-1"
                    >
                      {p.tagline}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
