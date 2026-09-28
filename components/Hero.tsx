"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

const BG_IMAGES = [
  "/images/liman-waterfront.jpg",
  "/images/liman-lounge.jpg",
  "/images/liman-exterior.jpg",
];

export default function Hero() {
  const { t } = useLang();
  const [slide, setSlide] = useState(0);
  const [taglineIdx, setTaglineIdx] = useState(0);

  useEffect(() => {
    const bgTimer = setInterval(() => setSlide((s) => (s + 1) % BG_IMAGES.length), 5000);
    const textTimer = setInterval(() => setTaglineIdx((i) => (i + 1) % t.hero.taglines.length), 3200);
    return () => { clearInterval(bgTimer); clearInterval(textTimer); };
  }, [t.hero.taglines.length]);

  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background slides */}
      {BG_IMAGES.map((src, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${src})`,
            opacity: slide === i ? 1 : 0,
          }}
        />
      ))}

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/85" />
      <div className="absolute inset-0 bg-[#101425]/30" />

      {/* Wave decorative line */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#101425] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
        <motion.p
          initial={{ y: 12 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[#b9afff] text-xs tracking-[0.4em] uppercase mb-6"
        >
          {t.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mb-4"
        >
          <img
            src="/images/liman-logo-intro.png"
            alt="Liman"
            className="h-28 md:h-40 object-contain mx-auto"
            style={{ filter: "brightness(1.2) drop-shadow(0 4px 24px rgba(197,168,106,0.4))" }}
          />
        </motion.div>

        {/* Rotating tagline */}
        <div className="h-10 flex items-center justify-center mb-8 overflow-hidden">
          <motion.p
            key={taglineIdx}
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            exit={{ y: -12 }}
            transition={{ duration: 0.4 }}
            className="text-[#f2f0fb]/75 text-base md:text-lg tracking-widest font-light"
          >
            {t.hero.taglines[taglineIdx]}
          </motion.p>
        </div>

        <motion.div
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          <a
            href="#booking"
            className="px-8 py-3.5 bg-[#b9afff] text-[#101425] font-semibold text-sm tracking-widest uppercase hover:bg-[#d1caff] transition-colors duration-200"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {t.hero.cta}
          </a>
          <a
            href="https://limanrestaurant.ofoodo.com/#/catalog/2a1c03aa-3c1d-e22a-9cc4-2ad152f4c997"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3.5 border border-[#b9afff] bg-[#101425]/85 text-[#f2f0fb] text-sm tracking-widest uppercase hover:border-[#b9afff] hover:bg-[#b9afff]/10 transition-all duration-200"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {t.hero.menuBtn}
          </a>
        </motion.div>
      </div>

      {/* Slide dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {BG_IMAGES.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              slide === i ? "bg-[#b9afff] w-6" : "bg-white/30"
            }`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-6 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[10px] tracking-[0.3em] uppercase text-[#f2f0fb] rotate-90 origin-center">scroll</span>
      </div>
    </section>
  );
}
