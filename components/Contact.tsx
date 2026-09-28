"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLang } from "@/lib/LangContext";

const slide = (delay = 0) => ({
  initial: { y: 24 },
  whileInView: { y: 0 },
  viewport: { once: true, amount: 0 } as const,
  transition: { duration: 0.6, delay },
});

const IconPin = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/><circle cx="12" cy="10" r="3"/></svg>);
const IconPhone = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 12 19.79 19.79 0 0 1 1 3.18 2 2 0 0 1 3 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);
const IconClock = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>);
const IconMail = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>);
const IconFacebook = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>);
const IconWhatsApp = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>);

export default function Contact() {
  const { t } = useLang();
  const c = t.contact;
  const [showMap, setShowMap] = useState(false);
  useEffect(() => { const timer = window.setTimeout(() => setShowMap(true), 300); return () => window.clearTimeout(timer); }, []);

  return (
    <section id="contact" className="py-16 md:py-28 bg-[#171b31]">
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <motion.div {...slide(0)} className="mb-14">
          <p className="text-[#b9afff] text-xs tracking-[0.35em] uppercase mb-3">{c.subtitle}</p>
          <h2 className="text-3xl md:text-5xl font-light text-[#f2f0fb] mb-5" style={{ fontFamily: "var(--font-serif)" }}>{c.title}</h2>
          <div className="divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-10">
          {/* Info cards */}
          <motion.div {...slide(0.05)} className="flex flex-col gap-0.5">
            <div className="glass p-6 flex gap-5 items-start">
              <div className="text-[#b9afff] mt-0.5 shrink-0"><IconPin /></div>
              <div>
                <p className="text-[#b9afff] text-xs tracking-[0.25em] uppercase mb-2">{c.addressNote}</p>
                <p className="text-[#f2f0fb]/75 text-sm leading-relaxed whitespace-pre-line">{c.address}</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Liman+Restaurant+Gogebashvili+3+Batumi"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 mt-3 text-[#b9afff] hover:text-[#d1caff] text-xs tracking-widest uppercase transition-colors"
                >
                  Google Maps →
                </a>
              </div>
            </div>

            <div className="glass p-6 flex gap-5 items-start">
              <div className="text-[#b9afff] mt-0.5 shrink-0"><IconPhone /></div>
              <div className="flex-1">
                <p className="text-[#b9afff] text-xs tracking-[0.25em] uppercase mb-2">Phone</p>
                <a href={`tel:${c.phone}`} className="block text-[#f2f0fb]/80 text-xl font-light hover:text-[#b9afff] transition-colors mb-3">{c.phone}</a>
                <a href="https://wa.me/995577096609" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-[#25d366]/10 border border-[#25d366]/25 text-[#25d366]/80 hover:bg-[#25d366]/20 hover:text-[#25d366] text-xs tracking-widest uppercase transition-all">
                  <IconWhatsApp /> WhatsApp
                </a>
              </div>
            </div>

            <div className="glass p-6 flex gap-5 items-start">
              <div className="text-[#b9afff] mt-0.5 shrink-0"><IconMail /></div>
              <div>
                <p className="text-[#b9afff] text-xs tracking-[0.25em] uppercase mb-2">Email</p>
                <a href={`mailto:${c.email}`} className="text-[#f2f0fb]/65 text-sm hover:text-[#b9afff] transition-colors">{c.email}</a>
              </div>
            </div>

            <div className="glass p-6 flex gap-5 items-start">
              <div className="text-[#b9afff] mt-0.5 shrink-0"><IconClock /></div>
              <div>
                <p className="text-[#b9afff] text-xs tracking-[0.25em] uppercase mb-2">{c.hours.title}</p>
                <p className="text-[#f2f0fb]/75 text-base font-light">{c.hours.value}</p>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ x: 28 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="overflow-hidden border border-[#b9afff]/12 min-h-[380px]"
          >
            {showMap && <iframe
              src="https://www.google.com/maps?q=41.652133,41.643812&z=16&output=embed"
              width={800} height={500}
              style={{ border: 0, width: "100%", height: "100%", minHeight: "380px" }}
              allowFullScreen loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Liman Restaurant"
            />}
          </motion.div>
        </div>

        {/* Social + footer */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <a href="https://www.facebook.com/Limanrestaurant" target="_blank" rel="noopener noreferrer" className="glass w-11 h-11 flex items-center justify-center text-[#f2f0fb] hover:text-[#b9afff] border border-transparent hover:border-[#b9afff]/30 transition-all duration-200">
              <IconFacebook />
            </a>
            <a href="https://wa.me/995577096609" target="_blank" rel="noopener noreferrer" className="glass w-11 h-11 flex items-center justify-center text-[#f2f0fb] hover:text-[#25d366] border border-transparent hover:border-[#25d366]/30 transition-all duration-200">
              <IconWhatsApp />
            </a>
          </div>
          <p className="text-[#f2f0fb]/80 text-sm tracking-widest">© 2021 Liman Restaurant · Batumi, Georgia</p>
        </div>
      </div>
    </section>
  );
}
