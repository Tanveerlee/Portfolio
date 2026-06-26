"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { useTheme } from "@/context/ThemeContext";

const categories = [
  { title: "Automation Testing", emoji: "🤖", color: "cyan",    skills: ["Playwright (POM)", "Cypress", "Katalon Studio"] },
  { title: "API Testing",         emoji: "🔌", color: "violet",  skills: ["Postman", "Bruno", "Swagger", "REST APIs"] },
  { title: "Performance Testing", emoji: "⚡", color: "amber",   skills: ["Apache JMeter", "Load Testing", "Stress Testing"] },
  { title: "Security Testing",    emoji: "🛡️", color: "red",     skills: ["Burp Suite", "OWASP Top 10", "Vulnerability Scanning"] },
  { title: "Database Testing",    emoji: "🗃️", color: "emerald", skills: ["MySQL", "SQL Queries", "Data Validation"] },
  { title: "Test Management",     emoji: "📋", color: "indigo",  skills: ["JIRA", "TestRail", "Linear", "Asana", "Trello"] },
  { title: "DevOps & CI/CD",      emoji: "🔧", color: "slate",   skills: ["Git", "GitHub", "CI/CD", "Virtual Machines"] },
  { title: "Methodologies",       emoji: "🔄", color: "teal",    skills: ["Agile / Scrum", "STLC", "SDLC", "Sprint Planning", "Cross-browser"] },
];

type ColorCfg = { card: string; badge: string; accent: string; iconBg: string; glow: string; divider: string; meta: string; hoverBorder: string; };

const darkColorConfig: Record<string, ColorCfg> = {
  cyan:    { card: "border-cyan-500/20 bg-gradient-to-br from-cyan-950/50 via-slate-900/60 to-slate-900/80",       badge: "bg-cyan-500/15 text-cyan-300 border border-cyan-500/25 hover:bg-cyan-500/30",          accent: "from-cyan-300 via-cyan-400 to-cyan-600",         iconBg: "bg-cyan-500/20 border border-cyan-500/35",    glow: "from-cyan-500/8 via-transparent to-transparent",    divider: "from-transparent via-cyan-500/35 to-transparent",    meta: "text-cyan-400/65",    hoverBorder: "group-hover:border-cyan-500/50" },
  violet:  { card: "border-violet-500/20 bg-gradient-to-br from-violet-950/50 via-slate-900/60 to-slate-900/80",   badge: "bg-violet-500/15 text-violet-300 border border-violet-500/25 hover:bg-violet-500/30",    accent: "from-violet-300 via-violet-400 to-violet-600",   iconBg: "bg-violet-500/20 border border-violet-500/35", glow: "from-violet-500/8 via-transparent to-transparent", divider: "from-transparent via-violet-500/35 to-transparent", meta: "text-violet-400/65",  hoverBorder: "group-hover:border-violet-500/50" },
  amber:   { card: "border-amber-500/20 bg-gradient-to-br from-amber-950/50 via-slate-900/60 to-slate-900/80",     badge: "bg-amber-500/15 text-amber-300 border border-amber-500/25 hover:bg-amber-500/30",       accent: "from-amber-300 via-amber-400 to-orange-500",     iconBg: "bg-amber-500/20 border border-amber-500/35",  glow: "from-amber-500/8 via-transparent to-transparent",  divider: "from-transparent via-amber-500/35 to-transparent",  meta: "text-amber-400/65",   hoverBorder: "group-hover:border-amber-500/50" },
  red:     { card: "border-red-500/20 bg-gradient-to-br from-red-950/50 via-slate-900/60 to-slate-900/80",         badge: "bg-red-500/15 text-red-300 border border-red-500/25 hover:bg-red-500/30",               accent: "from-red-300 via-red-400 to-red-600",            iconBg: "bg-red-500/20 border border-red-500/35",      glow: "from-red-500/8 via-transparent to-transparent",    divider: "from-transparent via-red-500/35 to-transparent",    meta: "text-red-400/65",     hoverBorder: "group-hover:border-red-500/50" },
  emerald: { card: "border-emerald-500/20 bg-gradient-to-br from-emerald-950/50 via-slate-900/60 to-slate-900/80", badge: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 hover:bg-emerald-500/30", accent: "from-emerald-300 via-emerald-400 to-emerald-600", iconBg: "bg-emerald-500/20 border border-emerald-500/35", glow: "from-emerald-500/8 via-transparent to-transparent", divider: "from-transparent via-emerald-500/35 to-transparent", meta: "text-emerald-400/65", hoverBorder: "group-hover:border-emerald-500/50" },
  indigo:  { card: "border-indigo-500/20 bg-gradient-to-br from-indigo-950/50 via-slate-900/60 to-slate-900/80",   badge: "bg-indigo-500/15 text-indigo-300 border border-indigo-500/25 hover:bg-indigo-500/30",    accent: "from-indigo-300 via-indigo-400 to-indigo-600",   iconBg: "bg-indigo-500/20 border border-indigo-500/35", glow: "from-indigo-500/8 via-transparent to-transparent", divider: "from-transparent via-indigo-500/35 to-transparent", meta: "text-indigo-400/65",  hoverBorder: "group-hover:border-indigo-500/50" },
  slate:   { card: "border-slate-500/25 bg-gradient-to-br from-slate-800/60 via-slate-900/60 to-slate-900/80",     badge: "bg-slate-500/15 text-slate-300 border border-slate-500/25 hover:bg-slate-500/30",       accent: "from-slate-300 via-slate-400 to-slate-500",      iconBg: "bg-slate-500/20 border border-slate-500/35",  glow: "from-slate-500/8 via-transparent to-transparent",  divider: "from-transparent via-slate-500/35 to-transparent",  meta: "text-slate-400/65",   hoverBorder: "group-hover:border-slate-400/50" },
  teal:    { card: "border-teal-500/20 bg-gradient-to-br from-teal-950/50 via-slate-900/60 to-slate-900/80",       badge: "bg-teal-500/15 text-teal-300 border border-teal-500/25 hover:bg-teal-500/30",          accent: "from-teal-300 via-teal-400 to-teal-600",         iconBg: "bg-teal-500/20 border border-teal-500/35",    glow: "from-teal-500/8 via-transparent to-transparent",    divider: "from-transparent via-teal-500/35 to-transparent",    meta: "text-teal-400/65",    hoverBorder: "group-hover:border-teal-500/50" },
};

const lightColorConfig: Record<string, ColorCfg> = {
  cyan:    { card: "border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-white shadow-sm",           badge: "bg-cyan-50 text-cyan-800 border border-cyan-200 hover:bg-cyan-100",         accent: "from-cyan-400 via-cyan-500 to-cyan-600",         iconBg: "bg-cyan-100 border border-cyan-200",    glow: "from-cyan-100/80 via-transparent to-transparent",    divider: "from-transparent via-cyan-200 to-transparent",    meta: "text-cyan-600",    hoverBorder: "group-hover:border-cyan-400" },
  violet:  { card: "border-violet-200 bg-gradient-to-br from-violet-50 via-white to-white shadow-sm",       badge: "bg-violet-50 text-violet-800 border border-violet-200 hover:bg-violet-100", accent: "from-violet-400 via-violet-500 to-violet-600",   iconBg: "bg-violet-100 border border-violet-200", glow: "from-violet-100/80 via-transparent to-transparent", divider: "from-transparent via-violet-200 to-transparent", meta: "text-violet-600",  hoverBorder: "group-hover:border-violet-400" },
  amber:   { card: "border-amber-200 bg-gradient-to-br from-amber-50 via-white to-white shadow-sm",         badge: "bg-amber-50 text-amber-800 border border-amber-200 hover:bg-amber-100",     accent: "from-amber-400 via-amber-500 to-orange-500",     iconBg: "bg-amber-100 border border-amber-200",  glow: "from-amber-100/80 via-transparent to-transparent",  divider: "from-transparent via-amber-200 to-transparent",  meta: "text-amber-700",   hoverBorder: "group-hover:border-amber-400" },
  red:     { card: "border-red-200 bg-gradient-to-br from-red-50 via-white to-white shadow-sm",             badge: "bg-red-50 text-red-800 border border-red-200 hover:bg-red-100",             accent: "from-red-400 via-red-500 to-red-600",            iconBg: "bg-red-100 border border-red-200",      glow: "from-red-100/80 via-transparent to-transparent",    divider: "from-transparent via-red-200 to-transparent",    meta: "text-red-600",     hoverBorder: "group-hover:border-red-400" },
  emerald: { card: "border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-white shadow-sm",     badge: "bg-emerald-50 text-emerald-800 border border-emerald-200 hover:bg-emerald-100", accent: "from-emerald-400 via-emerald-500 to-emerald-600", iconBg: "bg-emerald-100 border border-emerald-200", glow: "from-emerald-100/80 via-transparent to-transparent", divider: "from-transparent via-emerald-200 to-transparent", meta: "text-emerald-700", hoverBorder: "group-hover:border-emerald-400" },
  indigo:  { card: "border-indigo-200 bg-gradient-to-br from-indigo-50 via-white to-white shadow-sm",       badge: "bg-indigo-50 text-indigo-800 border border-indigo-200 hover:bg-indigo-100",   accent: "from-indigo-400 via-indigo-500 to-indigo-600",   iconBg: "bg-indigo-100 border border-indigo-200", glow: "from-indigo-100/80 via-transparent to-transparent", divider: "from-transparent via-indigo-200 to-transparent", meta: "text-indigo-600",  hoverBorder: "group-hover:border-indigo-400" },
  slate:   { card: "border-slate-200 bg-gradient-to-br from-slate-50 via-white to-white shadow-sm",         badge: "bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200",     accent: "from-slate-400 via-slate-500 to-slate-600",      iconBg: "bg-slate-100 border border-slate-200",  glow: "from-slate-100/80 via-transparent to-transparent",  divider: "from-transparent via-slate-200 to-transparent",  meta: "text-slate-500",   hoverBorder: "group-hover:border-slate-400" },
  teal:    { card: "border-teal-200 bg-gradient-to-br from-teal-50 via-white to-white shadow-sm",           badge: "bg-teal-50 text-teal-800 border border-teal-200 hover:bg-teal-100",         accent: "from-teal-400 via-teal-500 to-teal-600",         iconBg: "bg-teal-100 border border-teal-200",    glow: "from-teal-100/80 via-transparent to-transparent",    divider: "from-transparent via-teal-200 to-transparent",    meta: "text-teal-700",    hoverBorder: "group-hover:border-teal-400" },
};

const GAP = 20; // px between cards

export default function Skills() {
  const { theme } = useTheme();
  const colorConfig = theme === "light" ? lightColorConfig : darkColorConfig;

  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef   = useRef<HTMLDivElement>(null);
  const [cardW, setCardW]     = useState(261);
  const [isPaused, setIsPaused] = useState(false);

  // Measure card width so all cards exactly fill the visible window
  const measureCard = useCallback(() => {
    if (!wrapperRef.current) return;
    const containerW = wrapperRef.current.offsetWidth;
    const vw = window.innerWidth;
    const visible = vw >= 1024 ? 4 : vw >= 640 ? 2 : 1;
    const newW = Math.floor((containerW - GAP * (visible - 1)) / visible);
    setCardW(newW);
  }, []);

  useEffect(() => {
    measureCard();
    const ro = new ResizeObserver(measureCard);
    if (wrapperRef.current) ro.observe(wrapperRef.current);
    return () => ro.disconnect();
  }, [measureCard]);

  // Update the CSS variable that drives the @keyframes translation distance
  useEffect(() => {
    if (!trackRef.current) return;
    const dist = (cardW + GAP) * categories.length;
    trackRef.current.style.setProperty("--marquee-dist", `-${dist}px`);
  }, [cardW]);

  // Duplicate cards so the loop reset is invisible (position 0 = position N)
  const cards = [...categories, ...categories];

  return (
    <section id="skills" className="py-20 bg-[var(--section-bg-2)] relative overflow-hidden">
      <div
        className="orb w-[500px] h-[500px] top-[-100px] right-[-200px] animate-float-slow"
        style={{ background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)", position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="section-label">Technical Expertise</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Tech Arsenal</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-base leading-relaxed">
            Tools and technologies I use to deliver quality software — from automation frameworks
            to performance and security testing.
          </p>
        </motion.div>
      </div>

      {/* Full-width carousel with edge fades */}
      <div className="relative">
        {/* Left edge fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--section-bg-2), transparent)" }}
        />
        {/* Right edge fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--section-bg-2), transparent)" }}
        />

        {/* Overflow clip */}
        <div
          ref={wrapperRef}
          className="max-w-6xl mx-auto px-6 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Scrolling track — driven by CSS @keyframes */}
          <div
            ref={trackRef}
            className="skills-track flex"
            style={{
              gap: GAP,
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            {cards.map((cat, i) => {
              const cfg = colorConfig[cat.color];
              return (
                <motion.div
                  key={`${cat.title}-${i}`}
                  style={{ width: cardW, flexShrink: 0, minHeight: 260 }}
                  whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.22, ease: "easeOut" } }}
                  className={`relative overflow-hidden rounded-2xl border ${cfg.card} ${cfg.hoverBorder} backdrop-blur-sm p-6 flex flex-col gap-4 cursor-default group transition-colors duration-300`}
                >
                  {/* Top gradient accent bar */}
                  <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${cfg.accent}`} />

                  {/* Shimmer sweep */}
                  <div className="card-shimmer" />

                  {/* Inner glow on hover */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl bg-gradient-to-br ${cfg.glow} pointer-events-none`} />

                  {/* Icon box + title */}
                  <div className="flex items-center gap-3 pt-1 relative z-10">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${cfg.iconBg} group-hover:scale-110 transition-transform duration-200`}>
                      {cat.emoji}
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-base leading-tight">{cat.title}</h3>
                      <p className={`text-xs font-medium mt-0.5 ${cfg.meta}`}>{cat.skills.length} tools</p>
                    </div>
                  </div>

                  {/* Color-matched gradient divider */}
                  <div className={`h-px bg-gradient-to-r ${cfg.divider} relative z-10`} />

                  {/* Skill badges */}
                  <div className="flex flex-wrap gap-1.5 relative z-10">
                    {cat.skills.map((skill) => (
                      <span key={skill} className={`skill-badge ${cfg.badge}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Pause hint */}
      <p className="text-center text-slate-600 text-xs mt-6 tracking-wide">
        Hover to pause
      </p>
    </section>
  );
}
