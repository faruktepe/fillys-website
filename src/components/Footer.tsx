import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#3D1A2E]/10 px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        <div>
          <p className="text-[#3D1A2E] font-semibold text-lg">Filly&apos;s</p>
          <p className="text-[#3D1A2E]/50 text-sm mt-1">Şekersiz. Aromalı.</p>
        </div>
        <div className="flex gap-12 text-sm text-[#3D1A2E]/60">
          <div className="flex flex-col gap-2">
            <Link href="/urunler" className="hover:text-[#3D1A2E] transition-colors">Ürünler</Link>
            <Link href="/hakkimizda" className="hover:text-[#3D1A2E] transition-colors">Hakkımızda</Link>
            <Link href="/iletisim" className="hover:text-[#3D1A2E] transition-colors">İletişim</Link>
          </div>
          <div className="flex flex-col gap-2">
            <a href="https://instagram.com/fillys.co" target="_blank" rel="noopener noreferrer" className="hover:text-[#3D1A2E] transition-colors">Instagram</a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-[#3D1A2E]/10 text-xs text-[#3D1A2E]/40">
        © {new Date().getFullYear()} Filly&apos;s. Tüm hakları saklıdır.
      </div>
    </footer>
  );
}
