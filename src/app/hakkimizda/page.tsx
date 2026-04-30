import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Hakkımızda — filly's",
  description: "Türkiye'de ilk aromalı şekersiz sıvı kahve kreması. filly's hikayesi.",
};

export default function HakkimizdaPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#D6D1C3] min-h-screen">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 pt-36 pb-24">
          <p className="text-xs text-[#53284E]/40 uppercase tracking-[0.3em] mb-6">Hakkımızda</p>
          <h1 className="heading-display text-5xl md:text-7xl text-[#53284E] mb-20 max-w-3xl leading-[0.9]">
            Kahvene<br />bir iz<br />bırakmak için.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div className="space-y-7">
              <p className="type-body text-[#53284E]/65 text-base">
                filly&apos;s, kahve kremasını yeniden tanımlamak için kuruldu.
                Piyasadaki kremalara baktık: ya şeker, ya yapay aroma, ya da her ikisi.
                Hiçbiri yeterli değildi.
              </p>
              <p className="type-body text-[#53284E]/65 text-base">
                Biz 5 aromada, ilave şekersiz, kapsül formatında sıvı kahve kreması ürettik.
                Türkiye&apos;de bir ilk.
              </p>
              <p className="type-body text-[#53284E]/65 text-base">
                Üretim Konya&apos;da, ENKA Süt tesislerinde gerçekleşiyor.
                Kapsüller Avrupa&apos;da üretiliyor.
              </p>
            </div>

            {/* Rakamlar */}
            <div className="grid grid-cols-3 gap-px bg-[#53284E]/10">
              {[
                { value: "5", label: "Aroma" },
                { value: "0g", label: "İlave Şeker" },
                { value: "15ml", label: "Kapsül" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#D6D1C3] p-8">
                  <p className="heading-display text-4xl text-[#53284E]">{stat.value}</p>
                  <p className="text-xs text-[#53284E]/40 uppercase tracking-widest mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Misyon */}
        <section className="bg-[#53284E] py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <p className="type-label text-[#C0A4B8] mb-8" style={{ fontSize: "0.6rem", letterSpacing: "0.3em" }}>MİSYON</p>
            <p className="type-display text-[#D6D1C3] max-w-3xl" style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}>
              Türkiye&apos;ye Avrupa ve Amerika&apos;nın niş gıda ürünlerini getirmek.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
