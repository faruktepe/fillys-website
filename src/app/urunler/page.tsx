import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

export const metadata = {
  title: "5 Aroma — filly's",
  description: "Vanilya, Pistachio, Beyaz Çikolata, Karamel, Matcha. 5 aromada şekersiz sıvı kahve kreması.",
};

export default function UrunlerPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#D6D1C3] min-h-screen">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-6 pt-36 pb-16">
          <p className="type-label text-[#53284E]/35 mb-4" style={{ fontSize: "0.6rem", letterSpacing: "0.3em" }}>
            ÜRÜNLER
          </p>
          <h1 className="type-display text-[#53284E]" style={{ fontSize: "clamp(3.5rem, 8vw, 9rem)" }}>
            5 Aroma.
          </h1>
          <p className="type-body text-[#53284E]/45 text-base mt-4 italic">Flavoured. Not sweetened.</p>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto px-6 pb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#53284E]/10">
            {products.map((product, i) => (
              <Link key={product.slug} href={`/urunler/${product.slug}`}
                className="group bg-[#D6D1C3] flex flex-col overflow-hidden hover:bg-[#53284E] transition-colors duration-500">
                {/* Görsel */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3", backgroundColor: product.imageBg }}>
                  <Image
                    src={product.image}
                    alt={`filly's ${product.name} kahve kreması kapsülü`}
                    fill
                    className="object-contain object-center group-hover:scale-105 transition-transform duration-500"
                    style={{ padding: "6%" }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                {/* Info */}
                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <span className="type-label text-[#53284E]/20 group-hover:text-[#D6D1C3]/20 transition-colors"
                      style={{ fontSize: "0.55rem", letterSpacing: "0.2em" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-3 h-3 rounded-full mt-1" style={{ backgroundColor: product.accent }} />
                  </div>
                  <h2 className="type-product text-[#53284E] group-hover:text-[#D6D1C3] transition-colors text-xl mb-2">
                    {product.name.toUpperCase()}
                  </h2>
                  <p className="type-body text-[#53284E]/45 group-hover:text-[#D6D1C3]/45 transition-colors text-sm italic mb-5">
                    {product.tagline}
                  </p>
                  <p className="type-body text-[#53284E]/60 group-hover:text-[#D6D1C3]/60 transition-colors text-sm leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <p className="mt-6 type-label text-[#53284E]/25 group-hover:text-[#D6D1C3]/25 transition-colors"
                    style={{ fontSize: "0.55rem", letterSpacing: "0.15em" }}>
                    {product.volume}
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
