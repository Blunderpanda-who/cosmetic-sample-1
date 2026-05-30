import { useEffect, useState } from "react";

const LETTERS = ["V", "E", "L", "O", "R", "A"];

export function LoadingScreen() {
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setDone(true), 1800);
    const t2 = setTimeout(() => setMounted(false), 2800);
    document.body.style.overflow = "hidden";
    const t3 = setTimeout(() => { document.body.style.overflow = ""; }, 1800);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); document.body.style.overflow = ""; };
  }, []);

  if (!mounted) return null;

  return (
    <div className={`velora-loader ${done ? "is-done" : ""}`} aria-hidden={done}>
      <div className="velora-loader__word" aria-label="Velora">
        {LETTERS.map((l, i) => (
          <span key={i} style={{ animationDelay: `${i * 90}ms` }}>{l}</span>
        ))}
      </div>
      <div className="velora-loader__line" />
      <div className="velora-loader__meta">Maison de Beauté · Est. MMXVIII</div>
    </div>
  );
}
