"use client";

import { FormEvent, useState } from "react";
import { useLang } from "@/lib/LangContext";

const hints = {
  en: "Your request opens in WhatsApp so the restaurant can confirm it directly.",
  ge: "მოთხოვნა გაიხსნება WhatsApp-ში, სადაც რესტორანი პირდაპირ დაგიდასტურებთ.",
  ru: "Заявка откроется в WhatsApp, где ресторан сможет подтвердить бронь.",
  tr: "Talebiniz WhatsApp'ta açılır; restoran rezervasyonunuzu doğrudan onaylar.",
};

export default function Booking() {
  const { t, lang } = useLang();
  const b = t.booking;
  const [form, setForm] = useState({ name: "", phone: "", date: "", time: "", guests: "2", comment: "" });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const message = [
      "Liman Restaurant — reservation request",
      `${b.name}: ${form.name}`,
      `${b.phone}: ${form.phone}`,
      `${b.date}: ${form.date}`,
      `${b.time}: ${form.time}`,
      `${b.guests}: ${form.guests}`,
      form.comment && `${b.comment}: ${form.comment}`,
    ].filter(Boolean).join("\n");
    window.open(`https://wa.me/995577096609?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  };

  const inputClass = "booking-input";
  return (
    <section id="booking" className="booking-section section-pad">
      <div className="booking-shade" />
      <div className="relative z-10 section-shell">
        <div className="section-heading text-center">
          <p className="eyebrow">{b.subtitle}</p>
          <h2>{b.title}</h2>
          <div className="divider mx-auto" />
        </div>
        <form onSubmit={handleSubmit} className="booking-card">
          <div className="grid md:grid-cols-2 gap-5">
            <label className="booking-field"><span>{b.name}</span><input className={inputClass} type="text" autoComplete="name" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} /></label>
            <label className="booking-field"><span>{b.phone}</span><input className={inputClass} type="tel" autoComplete="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} /></label>
            <label className="booking-field"><span>{b.date}</span><input className={inputClass} type="date" required min={new Date().toISOString().slice(0, 10)} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} /></label>
            <label className="booking-field"><span>{b.time}</span><input className={inputClass} type="time" required value={form.time} onChange={(e) => setForm({ ...form, time: e.target.value })} /></label>
            <label className="booking-field"><span>{b.guests}</span><select className={inputClass} value={form.guests} onChange={(e) => setForm({ ...form, guests: e.target.value })}>{Array.from({ length: 12 }, (_, i) => i + 1).map(n => <option key={n} value={n}>{n}</option>)}</select></label>
            <label className="booking-field"><span>{b.comment}</span><input className={inputClass} value={form.comment} onChange={(e) => setForm({ ...form, comment: e.target.value })} /></label>
          </div>
          <div className="booking-actions">
            <p>{hints[lang]}</p>
            <button type="submit" className="primary-button">{b.submit} <span aria-hidden="true">↗</span></button>
          </div>
        </form>
      </div>
    </section>
  );
}
