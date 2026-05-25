# FILLY'S WEB SİTESİ — CLAUDE TALİMATI

Bu dosya her yeni konuşmada otomatik okunur. Web sitesinde anlık değişiklik yapabilmek için gereken tüm bağlam burada.

---

## TEMEL BİLGİ

- **Proje:** Filly's likit kahve kreması markasının tanıtım + e-ticaret hazırlık sitesi
- **Klasör:** `/Users/yikargecer/Desktop/fillys-website/`
- **Canlı site:** fillys.com.tr (Vercel üzerinden deploy)
- **Dev sunucusu:** `npm run dev` → http://localhost:3000

---

## STACK

| Katman | Teknoloji | Sürüm |
|--------|-----------|-------|
| Framework | Next.js (App Router) | 16.2.4 |
| UI Library | React | 19.2.4 |
| Dil | TypeScript | ^5 |
| CSS | Tailwind CSS | ^4 |
| Deploy | Vercel | — |

> **Önemli:** Bu Next.js 16 + React 19 + Tailwind 4 kombinasyonu — eski sürümlerden API farklılıkları var. `use client` direktifini interaktif bileşenlerde kullan.

---

## DOSYA YAPISI

```
src/
  app/
    page.tsx              ← Anasayfa
    layout.tsx            ← Root layout (font, meta)
    globals.css           ← Tüm brand token'lar + utility class'lar
    hakkimizda/page.tsx   ← Hakkımızda
    urunler/
      page.tsx            ← Ürün listesi (5 aroma)
      [slug]/page.tsx     ← Tekil ürün detay
    tarifler/page.tsx     ← Tarifler
    etki/page.tsx         ← Etki / sürdürülebilirlik
    iletisim/page.tsx     ← İletişim + email form
  components/
    Navbar.tsx            ← Fixed navbar (light/dark tema, scroll-hide, mobile overlay)
    Footer.tsx            ← Site footer
    HeroCarousel.tsx      ← Anasayfa hero slider (otomatik geçiş)
    AromaGrid.tsx         ← 5 aroma grid kartları
    EmailForm.tsx         ← E-posta kayıt formu
  data/
    products.ts           ← 5 ürün verisi (slug, name, tagline, accent renk, görsel)

public/
  fonts/                  ← Apfel Grotezk woff2 dosyaları
  logo-plum.svg           ← Koyu arka plan için logo (warm cream)
  logo-warm.svg           ← Açık arka plan için logo (deep plum)
  media/                  ← Tüm görseller (kapsul/, instagram/, editorial/ alt klasörleri)
```

---

## MARKA RENK PALETİ

```css
--deep-plum:    #53284E   /* Ana renk — başlıklar, border, CTA */
--warm-cream:   #D6D1C3   /* Arka plan */
--lavender-silk:#C0A4B8   /* Vurgu, pastel alan */

/* Aroma accent'ları */
--vanilla:      #E8D9B0 / #D4A843
--pistachio:    #B5C9A1 / #6FA05A
--matcha:       #7A9E6E / #4A7C55
--caramel:      #B8743C / #B86030
--white-choc:   #DDD0B8 / #E8A87C
```

Tailwind'de: `bg-plum`, `text-cream`, `bg-lavender` (v4 @theme ile tanımlı)

---

## TİPOGRAFİ SİSTEMİ

Tek font: **Apfel Grotezk** (woff2, /public/fonts/)

| Class | Kullanım | Ağırlık |
|-------|----------|---------|
| `.type-display` | Büyük başlıklar | 900 Satt, line-height 0.9 |
| `.type-nav` | Menü + buton metinleri | 900 uppercase, letter-spacing 0.12em |
| `.type-body` | Paragraf metni | 500 Mittel, line-height 1.7 |
| `.type-label` | Küçük etiketler | 500 uppercase, letter-spacing 0.22em |
| `.type-product` | Ürün isimleri | 700 uppercase, letter-spacing 0.08em |

Boyutlandırma hep `clamp()` ile: `style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}`

---

## ANİMASYON & PATTERN SİSTEMİ

```css
/* Animasyon class'ları */
.anim-fadeup   /* 0.9s fadeUp */
.anim-fadeup-2 /* 0.15s gecikme */
.anim-fadeup-3 /* 0.30s gecikme */
.anim-float    /* Yavaş yüzme — ürün görselleri için */

/* Marquee (sonsuz kayan şerit) */
.marquee-wrap + .marquee-track          /* soldan sağa, 28s */
.marquee-wrap + .marquee-track-reverse  /* sağdan sola, 35s */
/* Hover'da duruyor */

/* Görsel zoom hover */
.img-zoom   /* üstüne gelinince scale(1.04) */
```

**Abstract Flow SVG curves:** Her bölümde dekoratif SVG `<path>` elemanları var. `opacity-[0.11]` veya `0.05-0.12` arası. `pointer-events-none`, `aria-hidden="true"`.

---

## NAVBAR

- `theme="light"` (default) veya `theme="dark"` prop alır
- Scroll'da yukarı kaydırınca görünür, aşağı kaydırınca kaybolur
- Sayfa başındayken: transparan arka plan + plum metin
- Scroll'dan sonra: `rgba(83,40,78,0.96)` + blur + white metin
- Mobilde: her zaman görünür, beyaz arka plan, hamburger menü
- Mobile menü: full-screen deep-plum overlay

---

## ÜRÜN VERİSİ (5 AROMA)

`src/data/products.ts` → `products` array

| slug | name | tagline | accent |
|------|------|---------|--------|
| vanilya | Vanilya | "Soft start." | #D4A843 |
| pistachio | Pistachio | "Weird is working." | #6FA05A |
| beyaz-cikolata | Beyaz Çikolata | "Guilty? Never." | #E8A87C |
| karamel | Karamel | "İkinci fincana gerek yok." | #B86030 |
| matcha | Matcha | "Dingin. Güçlü." | #4A7C55 |

Kapsül görselleri: `/media/kapsul/{slug}-4.png`

---

## ANASAYFA BÖLÜM SIRASI

1. **HeroCarousel** — tam ekran, otomatik slider
2. **5 Aroma Grid** — beyaz bg, AromaGrid bileşeni
3. **Manifesto** — `#C1D8E4` arka plan, matcha görseli sol, "ceremony, but faster." sağ
4. **Tagline Marquee** — `#C0A4B8` şerit, 5 tagline kayan
5. **@fillys.co** — Instagram marquee, 2 şerit ters yön, SVG flow curves
6. **Kayıt Ol** — iki sütun, sol görsel, sağ EmailForm
7. **Yakında CTA** — full-width arka plan görseli, "Yakında." yazısı

---

## DEV NOTLARI

- **Image:** Her zaman Next.js `<Image>` kullan, `sizes` prop'u ekle
- **Link:** Next.js `<Link>` kullan, `<a>` değil (internal)
- **"use client":** useState/useEffect kullanan her component'te zorunlu
- **Renk:** Tailwind class yerine inline `style={{ color: "#53284E" }}` da kullanılıyor, ikisi birden ok
- **Responsive:** Mobile-first, `md:` ve `lg:` breakpoint'leri
- **Font:** globals.css yüklüyor, `<link>` veya Google Fonts yok — sadece local woff2

---

## DEPLOYMENT

- Platform: **Vercel**
- `git push` → otomatik deploy (main branch)
- Build: `npm run build`
- Lokal test: `npm run dev`

---

## BAĞLAM: KİM NE İSTİYOR

**Ömer** (kurucu, pazarlama) web sitesinde anlık değişiklik ister:
- Metin güncellemeleri (tagline, copy, bölüm başlıkları)
- Renk/görsel değişiklikleri
- Yeni bölüm ekleme / kaldırma
- Ürün verisi güncelleme

Her değişiklikten sonra `npm run build` ile hata kontrolü yap, sonra commit + push.
