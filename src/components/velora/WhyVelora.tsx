const pillars = [
  { n: "01", title: "Dermatologist Tested", text: "Validated in independent European clinics over twelve-week protocols." },
  { n: "02", title: "Cruelty Free", text: "Certified by Leaping Bunny. We have never, and will never, test on animals." },
  { n: "03", title: "Sustainable", text: "Refillable vessels of hand-blown French glass and FSC-certified packaging." },
  { n: "04", title: "Vegan Composition", text: "Plant-derived actives replace conventional animal byproducts entirely." },
  { n: "05", title: "Rare Ingredients", text: "Sourced from Provence, Hokkaido, and the Atlas Mountains in micro-harvests." },
  { n: "06", title: "Global Standard", text: "Compliant with EU, FDA, and PMDA cosmetic safety regulations." },
];

export function WhyVelora() {
  return (
    <section className="py-32 md:py-44 px-6 md:px-10 max-w-[1500px] mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-20 md:mb-28 reveal">
        <span className="block text-[10px] uppercase tracking-luxe text-[color:var(--gold)] font-semibold mb-6">— The Velora Standard</span>
        <h2 className="font-serif text-5xl md:text-7xl leading-[1.02] text-balance">
          A discipline of <em className="italic font-light">refinement</em>.
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-ink/8">
        {pillars.map((p, i) => (
          <div
            key={p.n}
            className="reveal group p-10 md:p-12 border-b border-r border-ink/8 hover:bg-cream transition-colors duration-500"
            style={{ transitionDelay: `${(i % 3) * 90}ms` }}
          >
            <span className="block font-serif text-[color:var(--gold)] text-2xl mb-8">{p.n}</span>
            <h3 className="font-serif text-2xl md:text-3xl text-ink mb-4">{p.title}</h3>
            <p className="text-sm font-light text-ink/55 leading-relaxed max-w-[36ch]">{p.text}</p>
            <div className="mt-10 h-px w-12 bg-ink/15 group-hover:w-24 group-hover:bg-[color:var(--gold)] transition-all duration-700" />
          </div>
        ))}
      </div>
    </section>
  );
}
