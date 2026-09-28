"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

const slide = (delay = 0) => ({
  initial: { y: 24 },
  whileInView: { y: 0 },
  viewport: { once: true, amount: 0 } as const,
  transition: { duration: 0.6, delay },
});

export default function MenuSection() {
  const { t } = useLang();
  const m = t.menu;

  return (
    <section id="menu" className="section-pad bg-[#101425]">
      <div className="section-shell text-center">
        <motion.p {...slide(0)} className="eyebrow">{m.subtitle}</motion.p>
        <motion.h2 {...slide(0.05)} className="text-[#f2f0fb] text-4xl md:text-6xl leading-tight mb-6" style={{ fontFamily: "var(--font-serif)" }}>
          {m.title}
        </motion.h2>
        <div className="divider mx-auto mb-6" />
        <motion.p {...slide(0.1)} className="text-[#c9c4e6] max-w-xl mx-auto text-base md:text-lg leading-relaxed mb-10">
          {m.text}
        </motion.p>
        <motion.div {...slide(0.15)}>
          <a
            href="https://limanrestaurant.ofoodo.com/#/catalog/2a1c03aa-3c1d-e22a-9cc4-2ad152f4c997"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 min-h-[52px] px-10 py-4 bg-[#b9afff] text-[#101425] font-semibold text-sm tracking-widest uppercase hover:bg-[#d1caff] transition-colors duration-200"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {m.btn}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
