import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

export const metadata = {
  title: "Ürünler — Filly's",
  description: "5 aromada şekersiz sıvı kahve kreması. Vanilya, Pistachio, Beyaz Çikolata, Karamel, Matcha.",
};

export default function UrunlerPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-36 pb-24">
        <h1 className="text-5xl md:text-6xl font-semibold text-[#3D1A2E] mb-4">5 Aroma</h1>
        <p className="text-[#3D1A2E]/50 text-lg mb-16">Flavoured. Not sweetened.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/urunler/${product.slug}`}
              className="group flex flex-col p-10 border border-[#3D1A2E]/10 hover:border-[#3D1A2E]/30 transition-colors"
              style={{ backgroundColor: product.accent + "33" }}
            >
              <div
                className="w-12 h-12 rounded-full mb-10"
                style={{ backgroundColor: product.accent }}
              />
              <h2 className="text-2xl font-semibold text-[#3D1A2E] mb-2">{product.name}</h2>
              <p className="text-[#3D1A2E]/50 text-sm mb-6 italic">{product.tagline}</p>
              <p className="text-[#3D1A2E]/70 text-sm leading-relaxed flex-1">{product.description}</p>
              <p className="mt-8 text-xs text-[#3D1A2E]/40">{product.volume}</p>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
