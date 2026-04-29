import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#F5EDD6]/90 backdrop-blur-sm">
      <Link href="/" className="text-[#3D1A2E] text-xl font-semibold tracking-tight">
        Filly&apos;s
      </Link>
      <div className="flex items-center gap-8 text-sm text-[#3D1A2E]/70">
        <Link href="/urunler" className="hover:text-[#3D1A2E] transition-colors">Ürünler</Link>
        <Link href="/hakkimizda" className="hover:text-[#3D1A2E] transition-colors">Hakkımızda</Link>
        <Link href="/iletisim" className="hover:text-[#3D1A2E] transition-colors">İletişim</Link>
      </div>
    </nav>
  );
}
