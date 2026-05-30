const stats = [
  { n: "12", label: "International Awards" },
  { n: "47", label: "Press Features" },
  { n: "8", label: "Patented Formulas" },
  { n: "38", label: "Countries" },
];

const press = ["VOGUE", "HARPER'S BAZAAR", "ELLE", "WWD", "PORTER", "L'OFFICIEL", "ALLURE", "FT HOW TO SPEND IT"];

export function Awards() {
  return (
    <section id="press" className="py-32 md:py-44 px-6 md:px-10 max-w-[1500px] mx-auto">
      <div className="text-center mb-20 reveal">
        <span className="block text-[10px] uppercase tracking-luxe text-[color:var(--gold)] font-semibold mb-6">— Recognition</span>
        <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] text-balance max-w-3xl mx-auto">
          Celebrated by the <em className="italic font-light">world's</em> most demanding critics.
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 mb-24 border-y border-ink/8 py-16 reveal">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-serif text-6xl md:text-7xl text-ink">
              {s.n}
              <span className="text-[color:var(--gold)]">.</span>
            </p>
            <p className="mt-4 text-[10px] uppercase tracking-luxe text-ink/50">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Marquee */}
      <div className="relative overflow-hidden">
        <div className="flex gap-16 animate-marquee whitespace-nowrap">
          {[...press, ...press, ...press].map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="font-serif italic text-3xl md:text-4xl text-ink/30 tracking-wide"
            >
              {p}
            </span>
          ))}
        </div>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ivory to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ivory to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
