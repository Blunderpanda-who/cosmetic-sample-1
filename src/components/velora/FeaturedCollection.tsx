import productLipstick from "@/assets/product-lipstick.jpg";
import productSerum from "@/assets/product-serum.jpg";
import productFoundation from "@/assets/product-foundation.jpg";
import productHighlighter from "@/assets/product-highlighter.jpg";
import productSkincare from "@/assets/product-skincare.jpg";
import productPerfume from "@/assets/product-perfume.jpg";

const products = [
  { name: "Rouge Absolu", category: "Velvet Matte Lip", img: productLipstick, no: "01" },
  { name: "Radiance Elixir", category: "Lifting Serum", img: productSerum, no: "02" },
  { name: "Liquid Silk", category: "Couture Foundation", img: productFoundation, no: "03" },
  { name: "Lumière Compact", category: "Champagne Highlighter", img: productHighlighter, no: "04" },
  { name: "Rituel Eternel", category: "Skincare Trilogy", img: productSkincare, no: "05" },
  { name: "L'Absolu", category: "Eau de Parfum", img: productPerfume, no: "06" },
];

export function FeaturedCollection() {
  return (
    <section id="collection" className="py-32 md:py-44 px-6 md:px-10 max-w-[1500px] mx-auto">
      <div className="grid md:grid-cols-12 gap-y-12 md:gap-x-12 mb-20 md:mb-28 items-end reveal">
        <div className="md:col-span-7">
          <span className="block text-[10px] uppercase tracking-luxe text-[color:var(--gold)] font-semibold mb-6">
            — Selection 01
          </span>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.02] text-balance">
            The Signature <em className="italic font-light">Edit</em>
          </h2>
        </div>
        <div className="md:col-span-5 md:pb-3">
          <p className="text-ink/60 font-light leading-relaxed text-pretty">
            A meditation on six essential rituals. Each formula is composed in our Paris atelier, finished by hand, and bottled in vessels designed to last a lifetime.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-20 md:gap-y-32">
        {products.map((p, i) => (
          <article
            key={p.name}
            className={`group reveal ${i % 3 === 1 ? "md:mt-24" : ""} ${i % 3 === 2 ? "md:mt-10" : ""}`}
            style={{ transitionDelay: `${(i % 3) * 120}ms` }}
          >
            <div className="relative overflow-hidden aspect-[4/5] bg-cream">
              <img
                src={p.img}
                alt={p.name}
                width={1024}
                height={1280}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <span className="absolute top-5 left-5 text-[10px] uppercase tracking-luxe text-ink/40 mix-blend-multiply">
                N° {p.no}
              </span>
              <div className="absolute inset-x-0 bottom-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-t from-ivory/85 via-ivory/40 to-transparent">
                <span className="inline-block text-[10px] uppercase tracking-luxe text-ink font-medium">
                  Discover →
                </span>
              </div>
            </div>
            <div className="pt-6 flex items-start justify-between gap-6">
              <div>
                <h3 className="font-serif text-2xl text-ink leading-tight">{p.name}</h3>
                <p className="mt-1 text-[11px] uppercase tracking-editorial text-ink/45">{p.category}</p>
              </div>
              <span className="text-[10px] uppercase tracking-luxe text-ink/30 pt-2">N°{p.no}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
