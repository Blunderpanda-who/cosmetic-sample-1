import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section id="newsletter" className="relative bg-ink text-ivory py-32 md:py-44 px-6 md:px-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--gold)_15%,transparent),transparent_70%)]" />
        <div className="absolute -bottom-32 -left-32 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,color-mix(in_oklab,var(--rose)_18%,transparent),transparent_70%)]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center reveal">
        <span className="block text-[10px] uppercase tracking-luxe text-[color:var(--gold)] font-semibold mb-8">— The Inner Circle</span>
        <h2 className="font-serif text-5xl md:text-7xl leading-[1.02] text-balance mb-8">
          Private access, by <em className="italic font-light">invitation</em>.
        </h2>
        <p className="text-ivory/60 font-light text-lg leading-relaxed max-w-xl mx-auto mb-12 text-pretty">
          Receive first access to artisan drops, seasonal editions, and private events at our Paris and Tokyo ateliers.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email) setSent(true);
          }}
          className="max-w-md mx-auto"
        >
          <div className="relative border-b border-ivory/25 focus-within:border-[color:var(--gold)] transition-colors duration-500">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              className="w-full bg-transparent py-4 px-1 text-center text-base font-light text-ivory placeholder:text-ivory/30 outline-none"
            />
          </div>
          <button
            type="submit"
            className="mt-10 px-12 py-4 border border-ivory/30 text-[10px] uppercase tracking-luxe text-ivory hover:bg-[color:var(--gold)] hover:text-ink hover:border-[color:var(--gold)] transition-all duration-700"
          >
            {sent ? "Welcome To Swastik Beauty" : "Request Invitation"}
          </button>
        </form>
        <p className="mt-10 text-[10px] uppercase tracking-luxe text-ivory/30">
          Curated correspondence · Unsubscribe at any time
        </p>
      </div>
    </section>
  );
}
