"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

const slide = (delay = 0) => ({
  initial: { y: 24 },
  whileInView: { y: 0 },
  viewport: { once: true, amount: 0 } as const,
  transition: { duration: 0.6, delay },
});

const ICONS = ["🍲", "🥙", "🧀", "🫓", "🍯", "☕"];

export default function MenuSection() {
  const { t } = useLang();
  const m = t.menu;

  return (
    <section id="menu" className="py-16 md:py-28 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-14">
        <motion.p {...slide(0)} className="text-[#c5a86a] text-xs tracking-[0.35em] uppercase mb-3">{m.subtitle}</motion.p>
        <motion.h2 {...slide(0.05)} className="text-3xl md:text-5xl font-light text-[#e8e0d6] mb-5" style={{ fontFamily: "var(--font-serif)" }}>{m.title}</motion.h2>
        <div className="divider mx-auto mb-6" />
        <motion.p {...slide(0.1)} className="text-[#e8e0d6]/60 max-w-xl mx-auto text-base">{m.text}</motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px border border-[#c5a86a]/08 mb-12">
        {m.categories.map((cat, i) => (
          <motion.div
            key={i}
            {...slide(i * 0.07)}
            className="glass p-7 group hover:border-[#c5a86a]/30 transition-all duration-300"
          >
            <div className="text-3xl mb-4">{ICONS[i]}</div>
            <h3 className="text-[#e8e0d6] text-lg font-light mb-2" style={{ fontFamily: "var(--font-serif)" }}>{cat.title}</h3>
            <div className="w-8 h-px bg-[#c5a86a]/40 mb-3 group-hover:w-12 transition-all duration-300" />
            <p className="text-[#e8e0d6]/50 text-sm leading-relaxed">{cat.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div {...slide(0.2)} className="text-center">
        <a
          href="https://limanrestaurant.ofoodo.com/#/catalog/2a1c03aa-3c1d-e22a-9cc4-2ad152f4c997"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 bg-[#c5a86a] text-[#0c0c0c] font-semibold text-sm tracking-widest uppercase hover:bg-[#d4b87a] transition-colors duration-200"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {m.btn}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </motion.div>
    </section>
  );
}
