"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/lib/LangContext";

const slide = (delay = 0) => ({
  initial: { y: 24 },
  whileInView: { y: 0 },
  viewport: { once: true, amount: 0 } as const,
  transition: { duration: 0.6, delay },
});

export default function Booking() {
  const { t } = useLang();
  const b = t.booking;
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", guests: "2", comment: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
  };

  return (
    <section
      id="booking"
      className="relative py-20 md:py-32"
      style={{
        backgroundImage: "url(https://limanrestaurant.ge/images/content/about_header_background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[#0c0c0c]/90" />
      <div className="relative z-10 max-w-2xl mx-auto px-5">
        <div className="text-center mb-10">
          <motion.p {...slide(0)} className="text-[#c5a86a] text-xs tracking-[0.35em] uppercase mb-3">{b.subtitle}</motion.p>
          <motion.h2 {...slide(0.05)} className="text-3xl md:text-5xl font-light text-[#e8e0d6] mb-5" style={{ fontFamily: "var(--font-serif)" }}>{b.title}</motion.h2>
          <div className="divider mx-auto" />
        </div>

        {success ? (
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            initial={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="glass border border-[#c5a86a]/30 p-10 text-center"
          >
            <div className="text-4xl mb-4">✓</div>
            <p className="text-[#c5a86a] text-lg">{b.success}</p>
          </motion.div>
        ) : (
          <motion.form
            {...slide(0.1)}
            onSubmit={handleSubmit}
            className="glass border border-[#c5a86a]/15 p-8 md:p-10 flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[#e8e0d6]/50 text-xs tracking-widest uppercase">{b.name}</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-transparent border-b border-[#e8e0d6]/15 text-[#e8e0d6] py-2 text-sm focus:outline-none focus:border-[#c5a86a]/60 transition-colors"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#e8e0d6]/50 text-xs tracking-widest uppercase">{b.phone}</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="bg-transparent border-b border-[#e8e0d6]/15 text-[#e8e0d6] py-2 text-sm focus:outline-none focus:border-[#c5a86a]/60 transition-colors"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[#e8e0d6]/50 text-xs tracking-widest uppercase">{b.date}</label>
                <input
                  type="date"
                  required
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="bg-transparent border-b border-[#e8e0d6]/15 text-[#e8e0d6] py-2 text-sm focus:outline-none focus:border-[#c5a86a]/60 transition-colors"
                  style={{ colorScheme: "dark" }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#e8e0d6]/50 text-xs tracking-widest uppercase">{b.time}</label>
                <input
                  type="time"
                  required
                  value={form.time}
                  onChange={(e) => setForm({ ...form, time: e.target.value })}
                  className="bg-transparent border-b border-[#e8e0d6]/15 text-[#e8e0d6] py-2 text-sm focus:outline-none focus:border-[#c5a86a]/60 transition-colors"
                  style={{ colorScheme: "dark" }}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[#e8e0d6]/50 text-xs tracking-widest uppercase">{b.guests}</label>
                <select
                  value={form.guests}
                  onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  className="bg-transparent border-b border-[#e8e0d6]/15 text-[#e8e0d6] py-2 text-sm focus:outline-none focus:border-[#c5a86a]/60 transition-colors"
                  style={{ colorScheme: "dark" }}
                >
                  {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                    <option key={n} value={n} style={{ background: "#181818" }}>{n}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[#e8e0d6]/50 text-xs tracking-widest uppercase">{b.comment}</label>
              <textarea
                rows={2}
                value={form.comment}
                onChange={(e) => setForm({ ...form, comment: e.target.value })}
                className="bg-transparent border-b border-[#e8e0d6]/15 text-[#e8e0d6] py-2 text-sm focus:outline-none focus:border-[#c5a86a]/60 transition-colors resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-2 w-full py-4 bg-[#c5a86a] text-[#0c0c0c] font-semibold text-sm tracking-widest uppercase hover:bg-[#d4b87a] transition-colors duration-200"
              style={{ fontFamily: "var(--font-sans)", touchAction: "manipulation" }}
            >
              {b.submit}
            </motion.button>
          </motion.form>
        )}
      </div>
    </section>
  );
}
