import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Etki — filly's",
  description: "filly's'in çevresel ve toplumsal etkisi.",
};

export default function EtkiPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#D6D1C3] min-h-screen flex items-center justify-center">
        <div className="text-center px-6">
          <p
            className="type-label text-[#53284E]/30 mb-6"
            style={{ fontSize: "0.55rem", letterSpacing: "0.35em" }}
          >
            ETKİ
          </p>
          <p
            className="type-display text-[#53284E]"
            style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}
          >
            Yakında.
          </p>
          <p className="type-body text-[#53284E]/45 text-base mt-6 italic">
            filly&apos;s&apos;in çevresel ve toplumsal etki raporu çok yakında burada.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
