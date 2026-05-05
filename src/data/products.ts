export type Product = {
  slug: string;
  name: string;
  tagline: string;
  accent: string;
  volume: string;
  description: string;
  image: string;
  imageBg: string;
};

export const products: Product[] = [
  {
    slug: "vanilya",
    name: "Vanilya",
    tagline: "Soft start.",
    accent: "#D4A843",
    imageBg: "transparent",
    volume: "20ml kapsül · Laktozsuz · Glutensiz · Doğal Aromalı",
    description: "Yumuşak, sarmalayan bir başlangıç. Gün içindeki en iyi duraklamanın aroması.",
    image: "/media/kapsul/vanilya-4.png",
  },
  {
    slug: "pistachio",
    name: "Pistachio",
    tagline: "Weird is working.",
    accent: "#6FA05A",
    imageBg: "transparent",
    volume: "20ml kapsül · Laktozsuz · Glutensiz · Doğal Aromalı",
    description: "Alışılmışın dışında, ama bir kez deneyen bir daha başkasını istemez.",
    image: "/media/kapsul/pistachio-4.png",
  },
  {
    slug: "beyaz-cikolata",
    name: "Beyaz Çikolata",
    tagline: "Guilty? Never.",
    accent: "#E8A87C",
    imageBg: "transparent",
    volume: "20ml kapsül · Laktozsuz · Glutensiz · Doğal Aromalı",
    description: "Şeker olmadan bu kadar tatlı olunabilir mi? Olunur.",
    image: "/media/kapsul/beyaz-cikolata-4.png",
  },
  {
    slug: "karamel",
    name: "Karamel",
    tagline: "İkinci fincana gerek yok.",
    accent: "#B86030",
    imageBg: "transparent",
    volume: "20ml kapsül · Laktozsuz · Glutensiz · Doğal Aromalı",
    description: "Şekersiz tatlı.",
    image: "/media/kapsul/karamel-4.png",
  },
  {
    slug: "matcha",
    name: "Matcha",
    tagline: "Dingin. Güçlü.",
    accent: "#4A7C55",
    imageBg: "transparent",
    volume: "20ml kapsül · Laktozsuz · Glutensiz · Doğal Aromalı",
    description: "Kahvene Japonya'dan bir dokunuş. Sessiz ama çok şey söylüyor.",
    image: "/media/kapsul/matcha-4.png",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
