import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "İletişim — Filly's",
};

export default function IletisimPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-6xl mx-auto px-6 pt-36 pb-24">
        <h1 className="text-5xl font-semibold text-[#3D1A2E] mb-16">İletişim</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <p className="text-xs text-[#3D1A2E]/40 uppercase tracking-widest mb-2">E-posta</p>
              <a href="mailto:info@fillys.com.tr" className="text-[#3D1A2E] hover:text-[#3D1A2E]/60 transition-colors">
                info@fillys.com.tr
              </a>
            </div>
            <div>
              <p className="text-xs text-[#3D1A2E]/40 uppercase tracking-widest mb-2">Instagram</p>
              <a href="https://instagram.com/fillys.co" target="_blank" rel="noopener noreferrer" className="text-[#3D1A2E] hover:text-[#3D1A2E]/60 transition-colors">
                @fillys.co
              </a>
            </div>
          </div>

          <div>
            <p className="text-[#3D1A2E]/50 text-sm leading-relaxed">
              Toplu sipariş, bayi ve HoReCa işbirliği için iletişime geçin.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
