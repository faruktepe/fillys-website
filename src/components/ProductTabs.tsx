"use client";

import { useState } from "react";

type TabData = {
  ingredients: { base: string; aroma: string };
  howToUse: string[];
};

const tabData: Record<string, TabData> = {
  vanilya: {
    ingredients: { base: "Süt yağı, su, doğal vanilya aroması, sodyum fosfat, tuz.", aroma: "vanilya" },
    howToUse: ["Kapsülü aç.", "Sıcak kahvenin üstüne dök.", "Saat kaç olursa olsun — bu kadar sabah gerekiyor."],
  },
  pistachio: {
    ingredients: { base: "Süt yağı, su, doğal pistachio aroması, sodyum fosfat, tuz.", aroma: "pistachio" },
    howToUse: ["Kapsülü aç.", "Sıcak veya soğuk kahveye ekle.", "Herkes Americano içerken."],
  },
  "beyaz-cikolata": {
    ingredients: { base: "Süt yağı, su, doğal beyaz çikolata aroması, sodyum fosfat, tuz.", aroma: "beyaz çikolata" },
    howToUse: ["Kapsülü aç.", "Kahvene, lattene veya sıcak sütüne ekle.", "Hafta sonu olması gerekmiyor."],
  },
  karamel: {
    ingredients: { base: "Süt yağı, su, doğal karamel aroması, sodyum fosfat, tuz.", aroma: "karamel" },
    howToUse: ["Kapsülü aç.", "Sıcak kahvenin içine yavaşça dök.", "Geç oldu. İyi karar bitmedi."],
  },
  matcha: {
    ingredients: { base: "Süt yağı, su, doğal matcha aroması, sodyum fosfat, tuz.", aroma: "matcha" },
    howToUse: ["Kapsülü aç.", "Matcha veya sıcak içeceğe ekle.", "Bu kadar."],
  },
};

const TABS = ["İÇİNDEKİLER", "BESİN DEĞERLERİ", "NASIL KULLANILIR"] as const;
type Tab = typeof TABS[number];

export default function ProductTabs({ slug, accent }: { slug: string; accent: string }) {
  const [active, setActive] = useState<Tab>("İÇİNDEKİLER");
  const data = tabData[slug];
  if (!data) return null;

  return (
    <div className="mt-12 border-t border-[#53284E]/10 pt-8">

      {/* Tab bar */}
      <div className="flex gap-0 border-b border-[#53284E]/10 mb-8">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className="type-label pb-3 mr-7 transition-all duration-200 border-b-[1.5px]"
            style={{
              fontSize: "0.48rem",
              letterSpacing: "0.22em",
              color: active === tab ? "#53284E" : "rgba(83,40,78,0.3)",
              borderBottomColor: active === tab ? accent : "transparent",
              borderBottomWidth: "1.5px",
              marginBottom: "-1px",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* İçindekiler */}
      {active === "İÇİNDEKİLER" && (
        <div>
          <p className="type-body text-[#53284E]/65 mb-4 leading-relaxed" style={{ fontSize: "0.88rem" }}>
            {data.ingredients.base}
          </p>
          <p className="type-body text-[#53284E]/30 italic" style={{ fontSize: "0.78rem" }}>
            İnek sütü içerir.
          </p>
          <p className="type-body mt-6 font-medium" style={{ fontSize: "0.82rem", color: accent }}>
            Şeker bulamayacaksın. Zaten koymadık.
          </p>
        </div>
      )}

      {/* Besin değerleri */}
      {active === "BESİN DEĞERLERİ" && (
        <div>
          <p className="type-label text-[#53284E]/30 mb-5" style={{ fontSize: "0.46rem", letterSpacing: "0.24em" }}>
            100ML BAŞINA YAKLAŞIK DEĞERLER
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              ["ENERJİ", "—"],
              ["YAĞ", "—"],
              ["PROTEİN", "—"],
              ["KARBONHİDRAT", "—"],
              ["ŞEKER", "0g"],
              ["TUZ", "—"],
            ].map(([label, val]) => (
              <div key={label} className="border-b border-[#53284E]/8 pb-3">
                <p className="type-label text-[#53284E]/25 mb-1" style={{ fontSize: "0.44rem", letterSpacing: "0.22em" }}>{label}</p>
                <p className="type-body text-[#53284E]/60 text-sm">{val}</p>
              </div>
            ))}
          </div>
          <p className="type-body italic" style={{ fontSize: "0.78rem", color: accent }}>
            Resmi analiz geliyor. Şekerin sıfır olduğunu şimdiden söyleyelim.
          </p>
        </div>
      )}

      {/* Nasıl kullanılır */}
      {active === "NASIL KULLANILIR" && (
        <div>
          <ol className="space-y-4">
            {data.howToUse.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span
                  className="type-display flex-shrink-0"
                  style={{ fontSize: "1.2rem", color: accent, lineHeight: 1.1, width: "1.4rem" }}
                >
                  {i + 1}
                </span>
                <p className="type-body text-[#53284E]/65 leading-relaxed" style={{ fontSize: "0.9rem" }}>
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </div>
      )}

    </div>
  );
}
