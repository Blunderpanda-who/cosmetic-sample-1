export function Footer() {
  return (
    <footer className="bg-ivory text-ink py-20 md:py-24 px-6 md:px-10 border-t border-ink/8">
      <div className="max-w-[1500px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 md:gap-8 mb-20">
          <div className="col-span-2 md:col-span-4 max-w-sm">
            <div className="font-serif text-3xl tracking-[0.18em] mb-6">SWASTIK BEAUTY</div>
            <p className="text-sm text-ink/55 font-light leading-relaxed">
              Maison Swastik · Paris &amp; Tokyo<br />
              A modern apothecary of luxury beauty, crafted in micro-batches since two thousand eighteen.
            </p>
          </div>

          {[
            { title: "Collection", links: ["Face", "Lips", "Skincare", "Fragrance", "Limited Editions"] },
            { title: "Maison", links: ["The Atelier", "Sustainability", "Journal", "Careers"] },
            { title: "Concierge", links: ["Private Appointments", "Stockists", "Contact", "Press Inquiries"] },
          ].map((col) => (
            <div key={col.title} className="col-span-1 md:col-span-2">
              <h4 className="text-[10px] uppercase tracking-luxe text-ink font-semibold mb-6">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-ink/55 hover:text-ink transition-colors gold-underline">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-2">
            <h4 className="text-[10px] uppercase tracking-luxe text-ink font-semibold mb-6">Follow</h4>
            <ul className="space-y-4">
              {["Instagram", "TikTok", "Pinterest", "WeChat"].map((s) => (
                <li key={s}>
                  <a href="#" className="text-sm text-ink/55 hover:text-ink transition-colors gold-underline">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Giant wordmark */}
        <div className="overflow-hidden mb-10 border-t border-ink/8 pt-10">
          <div className="font-serif text-[18vw] leading-none tracking-[0.02em] text-ink/[0.08] text-center select-none">
            SWASTIK BEAUTY
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-ink/8 text-[10px] uppercase tracking-luxe text-ink/40">
          <p>© MMXXVI Swastik Beauty Cosmetics · All Rights Reserved</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-ink transition-colors">Privacy</a>
            <a href="#" className="hover:text-ink transition-colors">Terms</a>
            <a href="#" className="hover:text-ink transition-colors">Accessibility</a>
          </div>
          <p className="italic font-serif normal-case tracking-normal">Crafted in Paris &amp; Tokyo</p>
        </div>
      </div>
    </footer>
  );
}
