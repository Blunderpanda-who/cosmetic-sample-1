import musePortrait from "@/assets/muse-portrait.jpg";
import goldLeaf from "@/assets/gold-leaf.jpg";

const timeline = [
  { year: "MMXVIII", title: "Origin", text: "Founded in Paris between an apothecary and an atelier." },
  { year: "MMXX", title: "The Laboratory", text: "Opened our biotechnology wing in Kyoto, Japan." },
  { year: "MMXXII", title: "Recognition", text: "Awarded the Prix d'Excellence by the French Academy of Cosmetic Arts." },
  { year: "MMXXV", title: "Today", text: "Distributed to thirty-eight private maisons across the globe." },
];

export function Story() {
  return (
    <section id="story" className="relative bg-ink text-ivory py-40 md:py-56 overflow-hidden">
      {/* Floating wordmark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="font-serif text-[28vw] md:text-[22vw] tracking-[0.05em] text-ivory/[0.025] leading-none">
          VELORA
        </span>
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative reveal">
            <div className="overflow-hidden aspect-[4/5] bg-neutral-900 shadow-luxe">
              <img
                src={musePortrait}
                alt="Velora muse — editorial portrait"
                width={1280}
                height={1600}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:block absolute -bottom-12 -right-12 w-56 h-56 border border-[color:var(--gold)]/30 p-3 glass-dark">
              <img
                src={goldLeaf}
                alt="Liquid gold leaf"
                width={400}
                height={400}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="reveal">
            <span className="block text-[10px] uppercase tracking-luxe text-[color:var(--gold)] font-semibold mb-8">
              — The House
            </span>
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.02] mb-10 text-balance">
              Where Art <em className="italic font-light opacity-70">Meets</em>
              <br />
              Alchemy
            </h2>
            <p className="text-ivory/65 text-base md:text-lg font-light leading-relaxed mb-6 max-w-xl text-pretty">
              At the heart of Velora lies a devotion to craft. Each formulation is the work of master perfumers, biochemists, and artisans — a quiet rebellion against the disposable, the synthetic, the ordinary.
            </p>
            <p className="text-ivory/45 text-sm font-light leading-relaxed mb-12 max-w-xl text-pretty italic font-serif">
              "True luxury is felt before it is seen." — Eloise Marchand, Founder
            </p>

            <div className="grid grid-cols-2 gap-10 pt-8 border-t border-ivory/10 mb-12">
              <div>
                <p className="font-serif text-4xl text-ivory">98<span className="text-[color:var(--gold)]">%</span></p>
                <p className="mt-2 text-[10px] uppercase tracking-luxe text-ivory/40">Natural Origin</p>
              </div>
              <div>
                <p className="font-serif text-4xl text-ivory">38</p>
                <p className="mt-2 text-[10px] uppercase tracking-luxe text-ivory/40">Private Maisons</p>
              </div>
            </div>

            <a href="#ingredients" className="group inline-flex items-center gap-5 text-[10px] uppercase tracking-luxe text-[color:var(--gold)]">
              Discover Our Process
              <span className="block w-10 h-px bg-[color:var(--gold)] transition-all duration-500 group-hover:w-16" />
            </a>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-32 md:mt-44 reveal">
          <div className="grid md:grid-cols-4 gap-12 md:gap-8 border-t border-ivory/10 pt-16">
            {timeline.map((t) => (
              <div key={t.year} className="relative pl-6 md:pl-0 md:pt-8">
                <span className="absolute md:relative md:block left-0 top-0 md:top-auto text-[10px] uppercase tracking-luxe text-[color:var(--gold)] font-semibold">
                  {t.year}
                </span>
                <h4 className="font-serif text-2xl mt-1 md:mt-4 text-ivory">{t.title}</h4>
                <p className="mt-3 text-sm font-light text-ivory/55 leading-relaxed max-w-[28ch]">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
