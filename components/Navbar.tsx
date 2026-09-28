"use client";
import { useState, useEffect } from "react";
import { useLang } from "@/lib/LangContext";
import { Lang } from "@/lib/i18n";

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "ge", label: "GE" },
  { code: "ru", label: "RU" },
  { code: "tr", label: "TR" },
];

export default function Navbar() {
  const { t, lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { key: "about", href: "#about" },
    { key: "gallery", href: "#gallery" },
    { key: "menu", href: "#menu" },
    { key: "booking", href: "#booking" },
    { key: "contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-dark shadow-lg shadow-black/50" : "bg-transparent"
      }`}
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/images/liman-logo.png"
            alt="Liman Restaurant"
            className="h-12 w-12 object-contain brightness-110"
            style={{ filter: "brightness(1.1) drop-shadow(0 0 8px rgba(197,168,106,0.3))" }}
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navItems.map((item) => (
            <a key={item.key} href={item.href} className="nav-link">
              {t.nav[item.key as keyof typeof t.nav]}
            </a>
          ))}
        </nav>

        {/* Lang + burger */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-0.5">
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => setLang(l.code)}
                style={{ touchAction: "manipulation" }}
                className={`text-xs px-2 py-2.5 min-w-[44px] min-h-[44px] transition-all duration-200 ${
                  lang === l.code
                    ? "text-[#b9afff] bg-[#b9afff]/10 border border-[#b9afff]/40"
                    : "text-[#f2f0fb]/45 hover:text-[#f2f0fb]"
                }`}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* Mobile burger */}
          <button
            className="lg:hidden flex flex-col items-center justify-center gap-1.5 min-w-[44px] min-h-[44px] ml-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="menu"
          >
            <span className={`block w-5 h-0.5 bg-[#f2f0fb]/70 transition-all duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#f2f0fb]/70 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-0.5 bg-[#f2f0fb]/70 transition-all duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav
        className="lg:hidden glass-dark border-t border-[#b9afff]/10 overflow-hidden transition-all duration-300"
        style={{ maxHeight: menuOpen ? "360px" : "0px", opacity: menuOpen ? 1 : 0 }}
      >
        <div className="px-6 py-5 flex flex-col gap-5">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="nav-link py-3"
              onClick={() => setMenuOpen(false)}
            >
              {t.nav[item.key as keyof typeof t.nav]}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
