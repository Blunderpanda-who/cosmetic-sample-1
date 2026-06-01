import e1 from "@/assets/editorial-1.jpg";
import e2 from "@/assets/editorial-2.jpg";
import e3 from "@/assets/editorial-3.jpg";
import e4 from "@/assets/editorial-4.jpg";
import p1 from "@/assets/product-lipstick.jpg";
import p2 from "@/assets/product-perfume.jpg";

const tiles = [
  { src: e1, span: "row-span-2" },
  { src: p1, span: "" },
  { src: e2, span: "" },
  { src: e4, span: "row-span-2" },
  { src: p2, span: "" },
  { src: e3, span: "" },
];

export function Instagram() {
  return (
    <section className="py-32 md:py-44 px-6 md:px-10 max-w-[1600px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 reveal">
        <div>
          <span className="block text-[10px] uppercase tracking-luxe text-[color:var(--gold)] font-semibold mb-6">— @swastikbeauty</span>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] text-balance max-w-[18ch]">
            The Swastik Beauty <em className="italic font-light">diary</em>.
          </h2>
        </div>
        <a href="#" className="text-[10px] uppercase tracking-luxe text-ink gold-underline pb-2 self-start md:self-end">
          Follow Our Atelier
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[260px] reveal">
        {tiles.map((t, i) => (
          <a
            href="#"
            key={i}
            className={`group relative overflow-hidden bg-cream ${t.span}`}
          >
            <img
              src={t.src}
              alt="Swastik Beauty on Instagram"
              width={800}
              height={1000}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-500 flex items-center justify-center">
              <span className="font-serif text-2xl text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-500 italic">
                Swastik Beauty
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
