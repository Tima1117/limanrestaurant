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
        <motion.p {...slide(0)} className="text-[#b9afff] text-xs tracking-[0.35em] uppercase mb-3">{m.subtitle}</motion.p>
        <motion.h2 {...slide(0.05)} className="text-3xl md:text-5xl font-light text-[#f2f0fb] mb-5" style={{ fontFamily: "var(--font-serif)" }}>{m.title}</motion.h2>
        <div className="divider mx-auto mb-6" />
        <motion.p {...slide(0.1)} className="text-[#f2f0fb]/60 max-w-xl mx-auto text-base">{m.text}</motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-12">
        {m.categories.map((cat, i) => (
          <motion.div
            key={i}
            {...slide(i * 0.07)}
            className="glass p-9 group hover:border-[#b9afff]/30 transition-all duration-300"
          >
            <div className="text-5xl mb-5">{ICONS[i]}</div>
            <h3 className="text-[#f2f0fb] text-lg font-light mb-2" style={{ fontFamily: "var(--font-serif)" }}>{cat.title}</h3>
            <div className="w-8 h-px bg-[#b9afff]/40 mb-3 group-hover:w-12 transition-all duration-300" />
            <p className="text-[#f2f0fb]/70 text-sm leading-relaxed">{cat.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div {...slide(0.2)} className="text-center">
        <a
          href="https://limanrestaurant.ofoodo.com/#/catalog/2a1c03aa-3c1d-e22a-9cc4-2ad152f4c997"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-4 bg-[#b9afff] text-[#101425] font-semibold text-sm tracking-widest uppercase hover:bg-[#d1caff] transition-colors duration-200"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          {m.btn}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </motion.div>
    </section>
  );
}
