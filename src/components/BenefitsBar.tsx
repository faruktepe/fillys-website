const benefits = [
  {
    stat: "0g",
    label: "Şeker",
    desc: "Sadece tatmin. Fazlası yok.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 20 L20 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    stat: "Süt",
    label: "Yağından",
    desc: "Bitkisel değil — gerçek süt bazlı üretim.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M14 4 C14 4 8 11 8 17 C8 20.3 10.7 23 14 23 C17.3 23 20 20.3 20 17 C20 11 14 4 14 4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    stat: "5",
    label: "Aroma",
    desc: "Vanilya'dan Matcha'ya, her sabah taze bir ritüel.",
    dots: ["#C49A30", "#4E8A38", "#C07840", "#A04820", "#2E6040"],
  },
];

export default function BenefitsBar() {
  return (
    <section className="bg-[#53284E]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {benefits.map((b, i) => (
            <div
              key={b.label}
              className="flex flex-col items-start px-0 md:px-10 py-10 md:py-0 first:pt-0 last:pb-0 md:first:pl-0 md:last:pr-0"
            >
              {/* Icon */}
              <div className="text-[#D6D1C3]/40 mb-5">
                {b.icon ?? (
                  <div className="flex gap-1.5 mt-1">
                    {b.dots!.map((color) => (
                      <span
                        key={color}
                        className="block w-3 h-3 rounded-full"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Stat + label */}
              <p
                style={{
                  fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                  fontSize: "clamp(3.5rem, 6vw, 6rem)",
                  fontWeight: 700,
                  lineHeight: 0.88,
                  letterSpacing: "-0.03em",
                  color: "#D6D1C3",
                }}
              >
                {b.stat}
              </p>
              <p
                style={{
                  fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                  fontSize: "clamp(1.1rem, 1.8vw, 1.5rem)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#D6D1C3",
                  opacity: 0.6,
                  marginTop: "0.25rem",
                }}
              >
                {b.label}
              </p>

              {/* Description */}
              <p
                className="mt-4 max-w-xs"
                style={{
                  fontFamily: "'Apfel Grotezk', system-ui, sans-serif",
                  fontSize: "0.88rem",
                  color: "#D6D1C3",
                  opacity: 0.45,
                  lineHeight: 1.6,
                }}
              >
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
