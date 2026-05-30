import editorial1 from "@/assets/editorial-1.jpg";
import editorial2 from "@/assets/editorial-2.jpg";
import editorial3 from "@/assets/editorial-3.jpg";
import lipstick from "@/assets/product-lipstick.jpg";

const stories = [
  { tag: "Most Loved", title: "Rouge Absolu", line: "Twelve hours of weightless pigment, kissed with botanical butters.", img: lipstick, ratio: "aspect-[3/4]" },
  { tag: "Heritage", title: "The Crème Rituelle", line: "An eighteen-ingredient cream perfected over four years of formulation.", img: editorial1, ratio: "aspect-[3/4]" },
  { tag: "Editor's Pick", title: "Lip Glaze N°7", line: "Featured in Vogue Paris, October 2025 — a single coat reshapes light.", img: editorial2, ratio: "aspect-[3/4]" },
  { tag: "New Arrival", title: "The Golden Hour", line: "A liquid highlighter inspired by Tuscan dusk and 24k leaf.", img: editorial3, ratio: "aspect-[3/4]" },
];

export function BestSellers() {
  return (
    <section className="py-32 md:py-44 px-6 md:px-10 max-w-[1500px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24 reveal">
        <div>
          <span className="block text-[10px] uppercase tracking-luxe text-[color:var(--gold)] font-semibold mb-6">— Best Sellers</span>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.02] text-balance max-w-[14ch]">
            The icons of the <em className="italic font-light">house</em>.
          </h2>
        </div>
        <a href="#" className="text-[10px] uppercase tracking-luxe text-ink gold-underline self-start md:self-end pb-2">
          View Complete Edit
        </a>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {stories.map((s, i) => (
          <article
            key={s.title}
            className="group reveal"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className={`relative ${s.ratio} overflow-hidden bg-cream mb-5`}>
              <img
                src={s.img}
                alt={s.title}
                width={1200}
                height={1500}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <span className="absolute top-4 left-4 bg-ivory/90 backdrop-blur px-3 py-1 text-[9px] uppercase tracking-luxe text-ink">
                {s.tag}
              </span>
            </div>
            <h3 className="font-serif text-xl md:text-2xl text-ink">{s.title}</h3>
            <p className="mt-2 text-sm font-light text-ink/55 leading-relaxed text-pretty">{s.line}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
