import { useState } from "react";
import rose from "@/assets/ingredient-rose.jpg";
import pearl from "@/assets/ingredient-pearl.jpg";
import jasmine from "@/assets/ingredient-jasmine.jpg";
import saffron from "@/assets/ingredient-saffron.jpg";

const ingredients = [
  { name: "Damask Rose", origin: "Grasse, France", note: "Petals harvested at dawn for absolute oil. A signature of softness and hydration.", img: rose },
  { name: "Akoya Pearl", origin: "Mie, Japan", note: "Conchiolin protein extract that reinforces luminosity and skin barrier integrity.", img: pearl },
  { name: "Sambac Jasmine", origin: "Tamil Nadu, India", note: "Night-blooming flower distilled into a calming, regenerating active.", img: jasmine },
  { name: "Wild Saffron", origin: "Kashmir Valley", note: "Crocin-rich threads with rare antioxidant capacity. Brightens the complexion.", img: saffron },
];

export function Ingredients() {
  const [active, setActive] = useState(0);
  const current = ingredients[active];

  return (
    <section id="ingredients" className="relative bg-cream/60 py-32 md:py-44 overflow-hidden">
      <div className="max-w-[1500px] mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-y-10 md:gap-x-10 items-end mb-16 md:mb-24 reveal">
          <div className="md:col-span-7">
            <span className="block text-[10px] uppercase tracking-luxe text-[color:var(--gold)] font-semibold mb-6">— The Apothecary</span>
            <h2 className="font-serif text-5xl md:text-7xl leading-[1.02] text-balance">
              Signature <em className="italic font-light">Ingredients</em>
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-ink/60 font-light leading-relaxed text-pretty">
              Every Velora formula is composed from a private library of fewer than forty actives — chosen for provenance, traceability, and cellular efficacy.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-stretch reveal">
          {/* Spotlight image */}
          <div className="md:col-span-7 relative">
            <div className="relative aspect-[5/6] overflow-hidden bg-ivory shadow-luxe">
              {ingredients.map((ing, i) => (
                <img
                  key={ing.name}
                  src={ing.img}
                  alt={ing.name}
                  width={900}
                  height={1152}
                  loading="lazy"
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1400ms] ease-out ${
                    i === active ? "opacity-100 scale-100" : "opacity-0 scale-105"
                  }`}
                />
              ))}
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-ink/40 to-transparent text-ivory">
                <p className="text-[10px] uppercase tracking-luxe opacity-80">Origin · {current.origin}</p>
              </div>
            </div>
          </div>

          {/* List */}
          <div className="md:col-span-5 flex flex-col">
            <ul className="divide-y divide-ink/10 border-y border-ink/10">
              {ingredients.map((ing, i) => {
                const isActive = i === active;
                return (
                  <li key={ing.name}>
                    <button
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      className="w-full text-left py-6 group flex items-baseline justify-between gap-6"
                    >
                      <span className="flex items-baseline gap-6 min-w-0">
                        <span className="text-[10px] uppercase tracking-luxe text-[color:var(--gold)] font-semibold w-8">
                          0{i + 1}
                        </span>
                        <span
                          className={`font-serif text-2xl md:text-3xl truncate transition-colors duration-500 ${
                            isActive ? "text-ink" : "text-ink/40 group-hover:text-ink/70"
                          }`}
                        >
                          {ing.name}
                        </span>
                      </span>
                      <span
                        className={`h-px transition-all duration-700 ${
                          isActive ? "w-16 bg-[color:var(--gold)]" : "w-6 bg-ink/20"
                        }`}
                      />
                    </button>
                  </li>
                );
              })}
            </ul>
            <div className="mt-10 max-w-md">
              <p className="text-base text-ink/65 font-light leading-relaxed text-pretty">{current.note}</p>
              <a href="#" className="mt-8 inline-block text-[10px] uppercase tracking-luxe text-ink gold-underline">
                Read the dossier
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
