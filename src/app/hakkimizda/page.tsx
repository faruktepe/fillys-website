import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hakkımızda — Filly's",
  description: "Türkiye'de ilk aromalı şekersiz sıvı kahve kreması. Filly's hikayesi.",
};

export default function HakkimizdaPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-36 pb-24">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-semibold text-[#3D1A2E] mb-16 leading-tight">
            Kahvene bir iz bırakmak için.
          </h1>

          <div className="space-y-8 text-[#3D1A2E]/70 leading-relaxed text-lg">
            <p>
              Filly&apos;s, kahve kremasını yeniden tanımlamak için kuruldu.
              Piyasadaki kremalara baktık: ya şeker, ya yapay aroma, ya da her ikisi.
              Hiçbiri yeterli değildi.
            </p>
            <p>
              Biz 5 aromada, ilave şekersiz, kapsül formatında sıvı kahve kreması ürettik.
              Türkiye&apos;de bir ilk.
            </p>
            <p>
              Üretim Konya&apos;da, ENKA Süt tesislerinde gerçekleşiyor.
              Kapsüller Avrupa&apos;da üretiliyor.
            </p>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-8 border-t border-[#3D1A2E]/10 pt-12">
            <div>
              <p className="text-3xl font-semibold text-[#3D1A2E]">5</p>
              <p className="text-sm text-[#3D1A2E]/40 mt-1">Aroma</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[#3D1A2E]">0g</p>
              <p className="text-sm text-[#3D1A2E]/40 mt-1">İlave Şeker</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-[#3D1A2E]">15ml</p>
              <p className="text-sm text-[#3D1A2E]/40 mt-1">Kapsül</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
