"use client";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

const slide = (delay = 0) => ({
  initial: { y: 24 },
  whileInView: { y: 0 },
  viewport: { once: true, amount: 0 } as const,
  transition: { duration: 0.6, delay },
});

export default function About() {
  const { t } = useLang();
  const a = t.about;

  return (
    <section id="about" className="py-16 md:py-28 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Text */}
        <div>
          <motion.p {...slide(0)} className="text-[#c5a86a] text-xs tracking-[0.35em] uppercase mb-4">{a.subtitle}</motion.p>
          <motion.h2 {...slide(0.05)} className="text-3xl md:text-5xl font-light text-[#e8e0d6] mb-5" style={{ fontFamily: "var(--font-serif)" }}>{a.title}</motion.h2>
          <motion.div {...slide(0.1)} className="divider mb-8" />
          <motion.p {...slide(0.12)} className="text-[#e8e0d6]/65 leading-relaxed mb-5 text-base md:text-lg">{a.text1}</motion.p>
          <motion.p {...slide(0.15)} className="text-[#e8e0d6]/65 leading-relaxed mb-8 text-base md:text-lg">{a.text2}</motion.p>
          <motion.a
            {...slide(0.18)}
            href="https://limanrestaurant.ofoodo.com/#/catalog/2a1c03aa-3c1d-e22a-9cc4-2ad152f4c997"
            target="_blank" rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-[#c5a86a] text-[#0c0c0c] font-semibold text-sm tracking-widest uppercase hover:bg-[#d4b87a] transition-colors duration-200"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {a.menuBtn}
          </motion.a>
        </div>

        {/* Image */}
        <motion.div
          initial={{ x: 36 }}
          whileInView={{ x: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="overflow-hidden relative" style={{ position: "relative", paddingBottom: "125%", height: 0 }}>
            <img
              src="https://limanrestaurant.ge/images/content/about_header_background.jpg"
              alt="Liman Restaurant"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          {/* Sea decoration */}
          <div className="absolute -bottom-5 -right-5 glass p-4 hidden md:block">
            <div className="text-[#c5a86a] text-2xl font-serif mb-1">∿</div>
            <p className="text-[#e8e0d6]/60 text-xs tracking-widest uppercase">Sea View</p>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-px mt-14 border border-[#c5a86a]/10">
        {a.stats.map((val, i) => (
          <motion.div key={i} {...slide(i * 0.08)} className="glass p-6 md:p-10 text-center">
            <div className="text-2xl md:text-3xl font-light text-[#c5a86a] mb-2" style={{ fontFamily: "var(--font-serif)" }}>{val}</div>
            <div className="text-[#e8e0d6]/45 text-xs tracking-widest uppercase">{a.statsLabels[i]}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
