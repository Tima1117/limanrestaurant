"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useLang } from "@/lib/LangContext";

const albums = [
  [
    { src: "/images/liman-lounge.jpg", alt: "Liman restaurant lounge" },
    { src: "/images/liman-room.jpg", alt: "Liman dining room" },
    { src: "/images/liman-dining.jpg", alt: "Liman dining area" },
    { src: "/images/liman-booths.jpg", alt: "Liman restaurant seating" },
  ],
  [
    { src: "/images/liman-terrace-dining.jpg", alt: "Guests dining on Liman's sea-view terrace" },
    { src: "/images/liman-terrace-coffee.jpg", alt: "Coffee with a view of the sea" },
    { src: "/images/liman-terrace-seating.jpg", alt: "Colourful terrace seating" },
    { src: "/images/liman-terrace-sea.jpg", alt: "Black Sea view from the terrace" },
  ],
  [
    { src: "/images/liman-breakfast.jpg", alt: "Breakfast served at Liman" },
    { src: "/images/liman-soup.jpg", alt: "Turkish soup" },
    { src: "/images/liman-fish.jpg", alt: "Fish served at Liman" },
    { src: "/images/liman-pide.jpg", alt: "Fresh Turkish pide" },
  ],
];

export default function Gallery() {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState(0);
  const [lightbox, setLightbox] = useState<number | null>(null);
  const photos = albums[activeTab];

  useEffect(() => {
    const gallery = document.getElementById("gallery");
    if (!gallery) return;
    const preload = () => albums.flat().forEach((photo) => { const img = new window.Image(); img.src = photo.src; });
    if (!("IntersectionObserver" in window)) { preload(); return; }
    const observer = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) { preload(); observer.disconnect(); }
    }, { rootMargin: "600px" });
    observer.observe(gallery);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightbox(null);
      if (event.key === "ArrowRight") setLightbox((i) => i === null ? null : (i + 1) % photos.length);
      if (event.key === "ArrowLeft") setLightbox((i) => i === null ? null : (i + photos.length - 1) % photos.length);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox, photos.length]);

  return (
    <section id="gallery" className="section-pad bg-[#171b31]">
      <div className="section-shell">
        <div className="section-heading text-center">
          <p className="eyebrow">{t.gallery.subtitle}</p>
          <h2>{t.gallery.title}</h2>
          <div className="divider mx-auto" />
        </div>
        <div className="flex flex-wrap justify-center gap-2 mb-8" role="tablist" aria-label={t.gallery.title}>
          {t.gallery.tabs.map((tab, i) => (
            <button key={tab} type="button" role="tab" aria-selected={activeTab === i}
              onClick={() => { setActiveTab(i); setLightbox(null); }}
              className={`gallery-tab ${activeTab === i ? "gallery-tab-active" : ""}`}>{tab}</button>
          ))}
        </div>
        <div key={activeTab} className={`gallery-grid gallery-count-${photos.length}`} role="tabpanel">
          {photos.map((photo, i) => (
            <button key={photo.src} type="button" className="gallery-tile group"
              onClick={() => setLightbox(i)} aria-label={`${t.gallery.title}: ${i + 1}`}>
              <Image src={photo.src} alt={photo.alt} fill unoptimized loading="lazy" sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
              <span className="gallery-zoom" aria-hidden="true">＋</span>
            </button>
          ))}
        </div>
      </div>
      {lightbox !== null && (
        <div className="fixed inset-0 z-[100] bg-[#080b15]/95 flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label={photos[lightbox].alt} onClick={() => setLightbox(null)}>
          <button type="button" className="absolute top-4 right-4 z-10 w-12 h-12 text-white text-3xl" aria-label="Close" onClick={() => setLightbox(null)}>×</button>
          <button type="button" className="absolute left-2 md:left-5 z-10 w-12 h-12 text-white text-3xl" aria-label="Previous" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + photos.length - 1) % photos.length); }}>‹</button>
          <div className="relative w-full max-w-5xl h-[75vh]" onClick={(e) => e.stopPropagation()}>
            <Image src={photos[lightbox].src} alt={photos[lightbox].alt} fill sizes="100vw" className="object-contain" />
          </div>
          <button type="button" className="absolute right-2 md:right-5 z-10 w-12 h-12 text-white text-3xl" aria-label="Next" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length); }}>›</button>
        </div>
      )}
    </section>
  );
}
