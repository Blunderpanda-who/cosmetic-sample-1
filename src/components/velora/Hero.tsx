import heroSilk from "@/assets/hero-silk.jpg";
import productPerfume from "@/assets/product-perfume.jpg";

export function Hero() {
  return (
    <section id="top" className="relative h-[100svh] min-h-[720px] w-full overflow-hidden">
      {/* Background image with cinematic reveal */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroSilk}
          alt="Silk draped over white marble in dawn light"
          width={1920}
          height={1280}
          className="w-full h-full object-cover animate-image-reveal"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ivory/30 via-ivory/10 to-ivory/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ivory/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <span className="block text-[10px] md:text-[11px] uppercase tracking-luxe text-ink/70 font-medium animate-luxe-up [animation-delay:120ms]">
          Beauty Beyond Perfection
        </span>

        <h1 className="mt-8 font-serif text-5xl sm:text-6xl md:text-8xl lg:text-[110px] leading-[0.92] text-ink text-balance max-w-[15ch] animate-luxe-up [animation-delay:240ms]">
          Discover The <em className="italic font-light text-[color:var(--gold)]">Future</em>
          <br /> Of Luxury Beauty
        </h1>

        <p className="mt-8 max-w-xl text-base md:text-lg text-ink/65 font-light leading-relaxed text-pretty animate-luxe-up [animation-delay:380ms]">
          Crafted for those who demand perfection in every detail. A symphony of rare botanicals and modern molecular science.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-luxe-up [animation-delay:520ms]">
          <a
            href="#collection"
            className="px-10 py-4 bg-ink text-ivory text-[10px] uppercase tracking-luxe font-medium hover:bg-[color:var(--gold)] hover:text-ink transition-all duration-700"
          >
            Explore Collection
          </a>
          <a
            href="#story"
            className="group relative px-10 py-4 border border-ink/25 text-ink text-[10px] uppercase tracking-luxe font-medium hover:border-ink transition-colors duration-500"
          >
            Our Story
            <span className="absolute left-10 right-10 bottom-3 h-px bg-[color:var(--gold)] origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 transition-transform duration-700" />
          </a>
        </div>
      </div>

      {/* Floating product showcase */}
      <div className="hidden lg:block absolute bottom-12 right-12 z-10 animate-luxe-fade [animation-delay:800ms]">
        <div className="w-64 p-4 glass border border-ink/10 shadow-luxe">
          <div className="aspect-[4/5] overflow-hidden bg-cream">
            <img
              src={productPerfume}
              alt="L'Absolu Parfum"
              width={400}
              height={500}
              loading="lazy"
              className="w-full h-full object-cover animate-float-slow"
            />
          </div>
          <div className="pt-4 flex items-end justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-editorial text-ink/50">N° 001</p>
              <p className="font-serif text-lg text-ink mt-1">L'Absolu Parfum</p>
            </div>
            <span className="text-[10px] uppercase tracking-luxe text-[color:var(--gold)]">New</span>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10 animate-luxe-fade [animation-delay:1000ms]">
        <span className="text-[9px] uppercase tracking-luxe text-ink/40">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-ink/40 to-transparent" />
      </div>
    </section>
  );
}
