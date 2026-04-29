import { notFound } from "next/navigation";
import Link from "next/link";
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
    title: `${product.name} — Filly's`,
    description: product.description,
  };
}

export default async function UrunDetayPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <>
      <Navbar />
      <main
        className="min-h-screen max-w-6xl mx-auto px-6 pt-36 pb-24"
        style={{ "--accent": product.accent } as React.CSSProperties}
      >
        <Link href="/urunler" className="text-sm text-[#3D1A2E]/40 hover:text-[#3D1A2E] transition-colors mb-12 inline-block">
          ← Tüm Aromalar
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-8">
          {/* Görsel alanı — ileride ürün görseli gelecek */}
          <div
            className="aspect-square w-full flex items-center justify-center"
            style={{ backgroundColor: product.accent }}
          >
            <div className="text-[#3D1A2E]/20 text-sm text-center p-8">
              <p className="text-6xl mb-4">◯</p>
              <p>Ürün görseli yakında</p>
            </div>
          </div>

          {/* Ürün bilgisi */}
          <div className="flex flex-col">
            <p className="text-sm text-[#3D1A2E]/40 tracking-widest uppercase mb-4">Filly&apos;s</p>
            <h1 className="text-5xl font-semibold text-[#3D1A2E] mb-3">{product.name}</h1>
            <p className="text-xl text-[#3D1A2E]/50 italic mb-10">{product.tagline}</p>

            <p className="text-[#3D1A2E]/70 leading-relaxed text-lg mb-10">
              {product.description}
            </p>

            <div className="border-t border-[#3D1A2E]/10 pt-8 mb-10">
              <p className="text-xs text-[#3D1A2E]/40 uppercase tracking-widest mb-2">Format</p>
              <p className="text-sm text-[#3D1A2E]/60">{product.volume}</p>
            </div>

            <div className="border border-[#3D1A2E]/20 px-8 py-5 text-center text-sm text-[#3D1A2E]/40">
              Satış kanalları yakında açılıyor.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
