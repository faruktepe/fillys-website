"use client";

import { useState, useEffect } from "react";

const messages = [
  "ŞEKERSİZ. AROMALI. KAPSÜL. İLK KEZ.",
  "AROMA VAR. ŞEKER YOK. BU KADAR.",
  "BEŞ AROMA. İLK SEÇER. SONRA KARARSIZ KALIR.",
  "ŞEKER? SİLDİK. AROMASI? KOYDU.",
  "15ML. KAPSÜL. KAHVEN DEĞİŞİR.",
];

export default function AnnouncementBar() {
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setIdx((p) => (p + 1) % messages.length), 3800);
    return () => clearInterval(t);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] flex items-center justify-between select-none"
      style={{ height: "36px", backgroundColor: "#53284E" }}
    >
      {/* Cycling messages */}
      <div className="flex-1 relative flex items-center justify-center overflow-hidden" style={{ height: "36px" }}>
        {messages.map((msg, i) => (
          <span
            key={i}
            className="absolute type-label text-[#D6D1C3] pointer-events-none whitespace-nowrap transition-all duration-500"
            style={{
              fontSize: "0.52rem",
              letterSpacing: "0.22em",
              opacity: i === idx ? 1 : 0,
              transform: i === idx ? "translateY(0)" : "translateY(8px)",
            }}
          >
            {msg}
          </span>
        ))}
      </div>

      {/* Close */}
      <button
        onClick={() => setVisible(false)}
        className="flex-shrink-0 px-3 text-[#D6D1C3]/40 hover:text-[#D6D1C3] transition-colors"
        aria-label="Kapat"
        style={{ fontSize: "0.65rem" }}
      >
        ×
      </button>
    </div>
  );
}
