"use client";

import { motion } from "framer-motion";

const categories = [
  {
    title: "Automation Testing",
    emoji: "🤖",
    color: "cyan",
    skills: ["Playwright (POM)", "Cypress", "Katalon Studio"],
  },
  {
    title: "API Testing",
    emoji: "🔌",
    color: "violet",
    skills: ["Postman", "Bruno", "Swagger", "REST APIs"],
  },
  {
    title: "Performance Testing",
    emoji: "⚡",
    color: "amber",
    skills: ["Apache JMeter", "Load Testing", "Stress Testing"],
  },
  {
    title: "Security Testing",
    emoji: "🛡️",
    color: "red",
    skills: ["Burp Suite", "OWASP Top 10", "Vulnerability Scanning"],
  },
  {
    title: "Database Testing",
    emoji: "🗃️",
    color: "emerald",
    skills: ["MySQL", "SQL Queries", "Data Validation"],
  },
  {
    title: "Test Management",
    emoji: "📋",
    color: "indigo",
    skills: ["JIRA", "TestRail", "Linear", "Asana", "Trello"],
  },
  {
    title: "DevOps & CI/CD",
    emoji: "🔧",
    color: "slate",
    skills: ["Git", "GitHub", "CI/CD", "Virtual Machines"],
  },
  {
    title: "Methodologies",
    emoji: "🔄",
    color: "teal",
    skills: ["Agile / Scrum", "STLC", "SDLC", "Sprint Planning", "Cross-browser"],
  },
];

const colorConfig: Record<string, {
  card: string;
  badge: string;
  accent: string;
  iconBg: string;
  glow: string;
  divider: string;
  meta: string;
  hoverBorder: string;
}> = {
  cyan: {
    card: "border-cyan-500/20 bg-gradient-to-br from-cyan-950/50 via-slate-900/60 to-slate-900/80",
    badge: "bg-cyan-500/15 text-cyan-300 border border-cyan-500/25 hover:bg-cyan-500/30 hover:text-cyan-100",
    accent: "from-cyan-300 via-cyan-400 to-cyan-600",
    iconBg: "bg-cyan-500/20 border border-cyan-500/35",
    glow: "from-cyan-500/8 via-transparent to-transparent",
    divider: "from-transparent via-cyan-500/35 to-transparent",
    meta: "text-cyan-400/65",
    hoverBorder: "group-hover:border-cyan-500/45",
  },
  violet: {
    card: "border-violet-500/20 bg-gradient-to-br from-violet-950/50 via-slate-900/60 to-slate-900/80",
    badge: "bg-violet-500/15 text-violet-300 border border-violet-500/25 hover:bg-violet-500/30 hover:text-violet-100",
    accent: "from-violet-300 via-violet-400 to-violet-600",
    iconBg: "bg-violet-500/20 border border-violet-500/35",
    glow: "from-violet-500/8 via-transparent to-transparent",
    divider: "from-transparent via-violet-500/35 to-transparent",
    meta: "text-violet-400/65",
    hoverBorder: "group-hover:border-violet-500/45",
  },
  amber: {
    card: "border-amber-500/20 bg-gradient-to-br from-amber-950/50 via-slate-900/60 to-slate-900/80",
    badge: "bg-amber-500/15 text-amber-300 border border-amber-500/25 hover:bg-amber-500/30 hover:text-amber-100",
    accent: "from-amber-300 via-amber-400 to-orange-500",
    iconBg: "bg-amber-500/20 border border-amber-500/35",
    glow: "from-amber-500/8 via-transparent to-transparent",
    divider: "from-transparent via-amber-500/35 to-transparent",
    meta: "text-amber-400/65",
    hoverBorder: "group-hover:border-amber-500/45",
  },
  red: {
    card: "border-red-500/20 bg-gradient-to-br from-red-950/50 via-slate-900/60 to-slate-900/80",
    badge: "bg-red-500/15 text-red-300 border border-red-500/25 hover:bg-red-500/30 hover:text-red-100",
    accent: "from-red-300 via-red-400 to-red-600",
    iconBg: "bg-red-500/20 border border-red-500/35",
    glow: "from-red-500/8 via-transparent to-transparent",
    divider: "from-transparent via-red-500/35 to-transparent",
    meta: "text-red-400/65",
    hoverBorder: "group-hover:border-red-500/45",
  },
  emerald: {
    card: "border-emerald-500/20 bg-gradient-to-br from-emerald-950/50 via-slate-900/60 to-slate-900/80",
    badge: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/25 hover:bg-emerald-500/30 hover:text-emerald-100",
    accent: "from-emerald-300 via-emerald-400 to-emerald-600",
    iconBg: "bg-emerald-500/20 border border-emerald-500/35",
    glow: "from-emerald-500/8 via-transparent to-transparent",
    divider: "from-transparent via-emerald-500/35 to-transparent",
    meta: "text-emerald-400/65",
    hoverBorder: "group-hover:border-emerald-500/45",
  },
  indigo: {
    card: "border-indigo-500/20 bg-gradient-to-br from-indigo-950/50 via-slate-900/60 to-slate-900/80",
    badge: "bg-indigo-500/15 text-indigo-300 border border-indigo-500/25 hover:bg-indigo-500/30 hover:text-indigo-100",
    accent: "from-indigo-300 via-indigo-400 to-indigo-600",
    iconBg: "bg-indigo-500/20 border border-indigo-500/35",
    glow: "from-indigo-500/8 via-transparent to-transparent",
    divider: "from-transparent via-indigo-500/35 to-transparent",
    meta: "text-indigo-400/65",
    hoverBorder: "group-hover:border-indigo-500/45",
  },
  slate: {
    card: "border-slate-500/25 bg-gradient-to-br from-slate-800/60 via-slate-900/60 to-slate-900/80",
    badge: "bg-slate-500/15 text-slate-300 border border-slate-500/25 hover:bg-slate-500/30 hover:text-slate-100",
    accent: "from-slate-300 via-slate-400 to-slate-500",
    iconBg: "bg-slate-500/20 border border-slate-500/35",
    glow: "from-slate-500/8 via-transparent to-transparent",
    divider: "from-transparent via-slate-500/35 to-transparent",
    meta: "text-slate-400/65",
    hoverBorder: "group-hover:border-slate-500/50",
  },
  teal: {
    card: "border-teal-500/20 bg-gradient-to-br from-teal-950/50 via-slate-900/60 to-slate-900/80",
    badge: "bg-teal-500/15 text-teal-300 border border-teal-500/25 hover:bg-teal-500/30 hover:text-teal-100",
    accent: "from-teal-300 via-teal-400 to-teal-600",
    iconBg: "bg-teal-500/20 border border-teal-500/35",
    glow: "from-teal-500/8 via-transparent to-transparent",
    divider: "from-transparent via-teal-500/35 to-transparent",
    meta: "text-teal-400/65",
    hoverBorder: "group-hover:border-teal-500/45",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-[var(--section-bg-2)] relative">
      <div
        className="orb w-[500px] h-[500px] top-[-100px] right-[-200px] animate-float-slow"
        style={{
          background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)",
          position: "absolute",
          borderRadius: "50%",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat, i) => {
            const cfg = colorConfig[cat.color];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.22, ease: "easeOut" } }}
                className={`relative overflow-hidden rounded-2xl border ${cfg.card} ${cfg.hoverBorder} backdrop-blur-sm p-6 flex flex-col gap-4 cursor-default group transition-colors duration-300`}
              >
                {/* Top gradient accent bar — 3px thick */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${cfg.accent}`} />

                {/* Shimmer sweep on hover */}
                <div className="card-shimmer" />

                {/* Inner glow on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl bg-gradient-to-br ${cfg.glow} pointer-events-none`}
                />

                {/* Icon box + title */}
                <div className="flex items-center gap-3 pt-1 relative z-10">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 ${cfg.iconBg} group-hover:scale-110 transition-transform duration-200`}
                  >
                    {cat.emoji}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base leading-tight">{cat.title}</h3>
                    <p className={`text-xs font-medium mt-0.5 ${cfg.meta}`}>
                      {cat.skills.length} tools
                    </p>
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
    </section>
  );
}
