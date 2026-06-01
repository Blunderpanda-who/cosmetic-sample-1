import goldLeaf from "@/assets/gold-leaf.jpg";
import editorial4 from "@/assets/editorial-4.jpg";

export function Philosophy() {
  return (
    <section id="journal" className="py-32 md:py-44 px-6 md:px-10 max-w-[1500px] mx-auto">
      <div className="grid md:grid-cols-12 gap-10 items-center mb-24 reveal">
        <span className="md:col-span-2 text-[10px] uppercase tracking-luxe text-[color:var(--gold)] font-semibold">— No. IV</span>
        <h2 className="md:col-span-10 font-serif text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-balance">
          We believe in beauty that is <em className="italic font-light">felt</em> before it is seen — a quiet confidence carved from exceptional materials.
        </h2>
      </div>

      <div className="grid md:grid-cols-12 gap-10 md:gap-12">
        <figure className="md:col-span-7 reveal">
          <div className="aspect-[4/3] overflow-hidden bg-cream shadow-luxe">
            <img
              src={editorial4}
              alt="Swastik Beauty flat lay editorial"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <figcaption className="mt-4 text-[10px] uppercase tracking-luxe text-ink/40">
            Figure IV — Maison Swastik, Spring Campaign
          </figcaption>
        </figure>

        <div className="md:col-span-5 flex flex-col gap-10 reveal">
          <div className="aspect-[5/6] overflow-hidden bg-neutral-900">
            <img
              src={goldLeaf}
              alt="Macro of gold leaf in serum"
              width={900}
              height={1080}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <p className="font-serif text-2xl md:text-3xl leading-snug text-ink italic">
              "Every formula begins with restraint. We add nothing that does not earn its place."
            </p>
            <p className="mt-6 text-[10px] uppercase tracking-luxe text-ink/40">
              Master Perfumer · Yuki Aoyama
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
