import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 pt-24 pb-16 max-w-6xl mx-auto w-full">
        <p className="text-sm text-[#3D1A2E]/50 tracking-widest uppercase mb-6">
          Türkiye&apos;de İlk
        </p>
        <h1 className="text-6xl md:text-8xl font-semibold text-[#3D1A2E] leading-[0.95] mb-8 max-w-2xl">
          Şekersiz.<br />Aromalı.
        </h1>
        <p className="text-lg text-[#3D1A2E]/60 max-w-md mb-12 leading-relaxed">
          5 aromada sıvı kahve kreması. Kapsül formatı, ilave şeker yok.
          Kahveni şımartmanın tek doğru yolu.
        </p>
        <Link
          href="/urunler"
          className="inline-flex items-center gap-2 bg-[#3D1A2E] text-[#F5EDD6] px-8 py-4 text-sm tracking-wide hover:bg-[#3D1A2E]/80 transition-colors w-fit"
        >
          Aromalar →
        </Link>
      </section>

      {/* Ürün Grid */}
      <section className="px-6 py-24 bg-[#3D1A2E]">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#F5EDD6]/40 text-sm tracking-widest uppercase mb-12">5 Aroma</p>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-[#F5EDD6]/10">
            {products.map((product) => (
              <Link
                key={product.slug}
                href={`/urunler/${product.slug}`}
                className="group flex flex-col justify-between p-8 bg-[#3D1A2E] hover:bg-[#F5EDD6]/5 transition-colors min-h-64"
              >
                <div
                  className="w-8 h-8 rounded-full mb-auto"
                  style={{ backgroundColor: product.accent }}
                />
                <div>
                  <p className="text-[#F5EDD6] text-xl font-medium mb-1">{product.name}</p>
                  <p className="text-[#F5EDD6]/40 text-sm">{product.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="px-6 py-32 max-w-6xl mx-auto">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-semibold text-[#3D1A2E] leading-tight mb-8">
            Sugar? Deleted.
          </h2>
          <p className="text-[#3D1A2E]/60 leading-relaxed text-lg">
            Kahve kremasına şeker koymak bir alışkanlıktı. Biz o alışkanlığı
            bıraktık — lezzetten değil, şekerden. Flavoured. Not sweetened.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
