import portrait1 from "@/assets/portrait-1.jpg";
import portrait2 from "@/assets/portrait-2.jpg";
import portrait3 from "@/assets/portrait-3.jpg";

const quotes = [
  {
    text: "Swastik Beauty is the closest thing I have found to wearing nothing — except my own skin, perfected. A revelation in modern formulation.",
    name: "Camille Desjardins",
    role: "Editor-in-Chief, Maison Magazine",
    img: portrait1,
  },
  {
    text: "I have collected fragrances for forty years. L'Absolu now sits alongside the very few I consider essential.",
    name: "Margaux Lévy",
    role: "Perfume Historian, Paris",
    img: portrait2,
  },
  {
    text: "The Crème Rituelle changed my evening practice entirely. It is the rare luxury object that delivers more than its promise.",
    name: "Adaeze Okafor",
    role: "Creative Director",
    img: portrait3,
  },
];

export function Testimonials() {
  return (
    <section className="bg-cream/60 py-32 md:py-44 px-6 md:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20 reveal">
          <span className="block text-[10px] uppercase tracking-luxe text-[color:var(--gold)] font-semibold mb-6">— Maison Voices</span>
          <h2 className="font-serif text-5xl md:text-6xl leading-[1.05] text-balance">
            Loved by the <em className="italic font-light">discerning</em> few.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {quotes.map((q, i) => (
            <figure
              key={q.name}
              className="reveal bg-ivory border border-ink/8 p-10 flex flex-col"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="font-serif text-5xl text-[color:var(--gold)] leading-none">"</span>
              <blockquote className="mt-4 font-serif text-xl md:text-2xl text-ink/85 leading-snug text-pretty">
                {q.text}
              </blockquote>
              <figcaption className="mt-auto pt-10 flex items-center gap-4 border-t border-ink/10 mt-10">
                <img
                  src={q.img}
                  alt={q.name}
                  width={64}
                  height={64}
                  loading="lazy"
                  className="w-14 h-14 rounded-full object-cover grayscale"
                />
                <div>
                  <p className="font-serif text-base text-ink">{q.name}</p>
                  <p className="text-[10px] uppercase tracking-editorial text-ink/45 mt-1">{q.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
