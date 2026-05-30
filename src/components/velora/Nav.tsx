import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeProvider";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-700 ease-out ${
        scrolled ? "py-4 glass border-b border-ink/5" : "py-7 bg-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 grid grid-cols-3 items-center">
        <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-luxe font-medium text-ink/70">
          <a href="#collection" className="hover:text-ink transition-colors">Collection</a>
          <a href="#story" className="hover:text-ink transition-colors">Atelier</a>
          <a href="#ingredients" className="hover:text-ink transition-colors">Ingredients</a>
        </div>
        <div className="md:hidden text-[10px] uppercase tracking-luxe font-medium text-ink/60">Est. 2024</div>
        <a href="#top" className="text-center font-serif text-2xl md:text-[26px] tracking-[0.18em] font-normal text-ink">
          VELORA
        </a>
        <div className="hidden md:flex items-center justify-end gap-8 text-[10px] uppercase tracking-luxe font-medium text-ink/70">
          <a href="#journal" className="hover:text-ink transition-colors">Journal</a>
          <a href="#press" className="hover:text-ink transition-colors">Press</a>
          <a href="#newsletter" className="hover:text-ink transition-colors">Concierge</a>
          <ThemeToggle />
        </div>
        <div className="md:hidden flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

