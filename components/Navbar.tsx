"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Achievements", href: "#achievements" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (href: string) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const cardBg =
    theme === "light"
      ? "bg-white/90 backdrop-blur-xl border border-black/10 shadow-xl shadow-black/8"
      : scrolled
      ? "bg-[#0a0f1e]/95 backdrop-blur-xl border border-white/15 shadow-2xl shadow-black/60"
      : "bg-[#0a0f1e]/80 backdrop-blur-xl border border-white/10 shadow-xl shadow-black/40";

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6">
      <div
        className={`max-w-6xl mx-auto rounded-2xl overflow-hidden transition-all duration-300 ${cardBg}`}
      >
        <nav className="h-16 px-6 flex items-center justify-between" aria-label="Main navigation">

          {/* Logo */}
          <a href="#hero" aria-label="Tanveer Hussain – back to top" onClick={(e) => { e.preventDefault(); scrollTo("#hero"); }} className="flex items-center gap-3 group">
            <div
              aria-hidden="true"
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center font-bold text-sm text-white shadow-lg group-hover:shadow-cyan-500/40 transition-shadow"
            >
              TH
            </div>
            <span className="font-bold text-white hidden sm:block text-base tracking-wide">
              Tanveer
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8" role="list">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                role="listitem"
                aria-current={active === l.href.slice(1) ? "true" : undefined}
                onClick={(e) => { e.preventDefault(); scrollTo(l.href); }}
                className={`nav-link ${active === l.href.slice(1) ? "active" : ""}`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Right: theme toggle + Hire Me + mobile burger */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
              className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all duration-200 ${
                theme === "dark"
                  ? "border-slate-700/50 bg-slate-800/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40"
                  : "border-slate-300 bg-white/70 text-slate-500 hover:text-cyan-600 hover:border-cyan-400"
              }`}
            >
              {theme === "dark" ? <Sun size={16} aria-hidden="true" /> : <Moon size={16} aria-hidden="true" />}
            </button>

            <a
              href="#contact"
              onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-always-white text-sm font-bold tracking-wide transition-all hover:shadow-lg hover:shadow-cyan-500/30 hover:-translate-y-px active:translate-y-0"
            >
              Hire Me
            </a>

            <button
              className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
            >
              {menuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu — expands inside the card */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden border-t border-white/8 px-5 py-4"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(l.href); setMenuOpen(false); }}
                  className="text-slate-300 hover:text-cyan-400 py-2.5 px-3 rounded-xl hover:bg-white/5 transition-all text-base font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/50"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo("#contact"); setMenuOpen(false); }}
                className="mt-2 text-center py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-always-white text-sm font-bold"
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
