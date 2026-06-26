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

  const scrolledBg =
    theme === "light"
      ? "bg-white/90 backdrop-blur-xl border-b border-black/5 shadow-sm"
      : "bg-[#030712]/90 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/20";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? scrolledBg : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center font-bold text-sm text-white shadow-lg group-hover:shadow-cyan-500/30 transition-shadow">
            TH
          </div>
          <span className="font-semibold text-white hidden sm:block text-sm tracking-wide">
            Tanveer<span className="text-cyan-400">.</span>
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`nav-link ${active === l.href.slice(1) ? "active" : ""}`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Theme toggle + Hire Me CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-all duration-200 ${
              theme === "dark"
                ? "border-slate-700/50 bg-slate-800/50 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40"
                : "border-slate-300 bg-white/70 text-slate-500 hover:text-cyan-600 hover:border-cyan-400"
            }`}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 text-always-white text-sm font-semibold transition-all hover:shadow-lg hover:shadow-cyan-500/25 hover:-translate-y-px"
          >
            Hire Me
          </a>
          <button
            className="md:hidden text-slate-400 hover:text-white transition-colors p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f172a]/95 backdrop-blur-xl border-b border-white/5 px-6 py-4">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-slate-300 hover:text-cyan-400 py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center py-3 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-violet-500 text-always-white text-sm font-semibold"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
