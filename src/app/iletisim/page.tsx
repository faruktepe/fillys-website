import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "İletişim — filly's",
};

export default function IletisimPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#D6D1C3] min-h-screen">
        <div className="max-w-6xl mx-auto px-6 pt-36 pb-24">
          <p className="text-xs text-[#53284E]/40 uppercase tracking-[0.3em] mb-4">İletişim</p>
          <h1 className="heading-display text-5xl md:text-6xl text-[#53284E] mb-16">
            Konuşalım.
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 bg-[#53284E]/10">
            <div className="bg-[#D6D1C3] p-12 space-y-10">
              <div>
                <p className="text-xs text-[#53284E]/40 uppercase tracking-widest mb-3">E-posta</p>
                <a
                  href="mailto:info@fillys.com.tr"
                  className="text-[#53284E] text-lg hover:text-[#53284E]/60 transition-colors"
                >
                  info@fillys.com.tr
                </a>
              </div>
              <div>
                <p className="text-xs text-[#53284E]/40 uppercase tracking-widest mb-3">Instagram</p>
                <a
                  href="https://instagram.com/fillys.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#53284E] text-lg hover:text-[#53284E]/60 transition-colors"
                >
                  @fillys.co
                </a>
              </div>
            </div>

            <div className="bg-[#53284E] p-12 flex flex-col justify-between">
              <div>
                <p className="text-[#C0A4B8] text-xs uppercase tracking-widest mb-4">İşbirliği</p>
                <p className="text-[#D6D1C3]/80 text-base leading-relaxed">
                  Toplu sipariş, bayi ve HoReCa işbirliği için iletişime geçin.
                </p>
              </div>
              <p className="text-[#D6D1C3]/20 heading-display text-6xl mt-12">
                filly&apos;s
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
