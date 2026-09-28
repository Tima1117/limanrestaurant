"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

const PHOTOS = [
  {
    src: "https://limanrestaurant.ge/images/content/about_header_background.jpg",
    tab: 0,
    ratio: "56.25%",
  },
  {
    src: "https://limanrestaurant.ge/images/content/WhatsApp_Image_2023-04-28_at_19.28.50.jpeg",
    tab: 2,
    ratio: "75%",
  },
  {
    src: "https://limanrestaurant.ge/images/content/about_header_background.jpg",
    tab: 1,
    ratio: "66.66%",
  },
  {
    src: "https://limanrestaurant.ge/images/content/WhatsApp_Image_2023-04-28_at_19.28.50.jpeg",
    tab: 0,
    ratio: "75%",
  },
  {
    src: "https://limanrestaurant.ge/images/content/about_header_background.jpg",
    tab: 2,
    ratio: "66.66%",
  },
  {
    src: "https://limanrestaurant.ge/images/content/WhatsApp_Image_2023-04-28_at_19.28.50.jpeg",
    tab: 1,
    ratio: "75%",
  },
];

const slide = (delay = 0) => ({
  initial: { y: 24 },
  whileInView: { y: 0 },
  viewport: { once: true, amount: 0 } as const,
  transition: { duration: 0.6, delay },
});

export default function Gallery() {
  const { t } = useLang();
  const g = t.gallery;
  const [activeTab, setActiveTab] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const visible = PHOTOS.filter((p) => p.tab === activeTab);

  return (
    <section id="gallery" className="py-16 md:py-28 bg-[#181818]">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <motion.p {...slide(0)} className="text-[#c5a86a] text-xs tracking-[0.35em] uppercase mb-3">{g.subtitle}</motion.p>
          <motion.h2 {...slide(0.05)} className="text-3xl md:text-5xl font-light text-[#e8e0d6] mb-6" style={{ fontFamily: "var(--font-serif)" }}>{g.title}</motion.h2>
          <div className="divider mx-auto mb-8" />

          {/* Tabs */}
          <div className="flex items-center justify-center gap-1">
            {g.tabs.map((tab, i) => (
              <button
                key={i}
                onClick={() => setActiveTab(i)}
                style={{ touchAction: "manipulation", fontFamily: "var(--font-sans)" }}
                className={`px-5 py-2.5 min-h-[40px] text-xs tracking-widest uppercase transition-all duration-200 ${
                  activeTab === i
                    ? "bg-[#c5a86a] text-[#0c0c0c] font-semibold"
                    : "text-[#e8e0d6]/50 border border-[#e8e0d6]/10 hover:text-[#c5a86a] hover:border-[#c5a86a]/40"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery grid */}
        <div key={activeTab} className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {visible.map((photo, i) => (
            <motion.div
              key={i}
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.07 }}
              className="group cursor-pointer overflow-hidden relative"
              style={{ position: "relative", paddingBottom: photo.ratio, height: 0 }}
              onClick={() => setLightbox(photo.src)}
            >
              <img
                src={photo.src}
                alt=""
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-colors duration-300 flex items-center justify-center">
                <svg className="text-white opacity-0 group-hover:opacity-80 transition-opacity" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <img src={lightbox} alt="" className="max-w-full max-h-full object-contain" />
          <button className="absolute top-5 right-5 text-white/70 hover:text-white text-3xl" onClick={() => setLightbox(null)}>×</button>
        </div>
      )}
    </section>
  );
}
