export type Product = {
  slug: string;
  name: string;
  tagline: string;
  accent: string;       // CSS renk değeri
  accentName: string;   // Tailwind class için
  volume: string;
  description: string;
};

export const products: Product[] = [
  {
    slug: "vanilya",
    name: "Vanilya",
    tagline: "Soft start.",
    accent: "#F3E5C0",
    accentName: "vanilla",
    volume: "15ml kapsül · 5'li dış poşet · 1L Kremsos",
    description: "Yumuşak, sarmalayan bir başlangıç. Gün içindeki en iyi duraklamanın aroması.",
  },
  {
    slug: "pistachio",
    name: "Pistachio",
    tagline: "Weird is working.",
    accent: "#B5C9A1",
    accentName: "pistachio",
    volume: "15ml kapsül · 5'li dış poşet · 1L Kremsos",
    description: "Alışılmışın dışında, ama bir kez deneyen bir daha başkasını istemez.",
  },
  {
    slug: "beyaz-cikolata",
    name: "Beyaz Çikolata",
    tagline: "Guilty? Never.",
    accent: "#EDD9C0",
    accentName: "white-choc",
    volume: "15ml kapsül · 5'li dış poşet · 1L Kremsos",
    description: "Şeker olmadan bu kadar tatlı olunabilir mi? Olunur.",
  },
  {
    slug: "karamel",
    name: "Karamel",
    tagline: "İkinci fincana gerek yok.",
    accent: "#C4864A",
    accentName: "caramel",
    volume: "15ml kapsül · 5'li dış poşet · 1L Kremsos",
    description: "Hedonist ama şekersiz. İkisi bir arada olabileceğini biz kanıtladık.",
  },
  {
    slug: "matcha",
    name: "Matcha",
    tagline: "Dingin. Güçlü.",
    accent: "#8FA87A",
    accentName: "matcha",
    volume: "15ml kapsül · 5'li dış poşet · 1L Kremsos",
    description: "Kahvene Japonya'dan bir dokunuş. Sessiz ama çok şey söylüyor.",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
