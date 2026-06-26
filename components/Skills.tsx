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
    title: "DevOps & Version Control",
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

const colorConfig: Record<string, { card: string; badge: string; dot: string }> = {
  cyan: {
    card: "border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-transparent",
    badge: "bg-cyan-500/15 text-cyan-300 border border-cyan-500/20 hover:bg-cyan-500/25",
    dot: "bg-cyan-400",
  },
  violet: {
    card: "border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-transparent",
    badge: "bg-violet-500/15 text-violet-300 border border-violet-500/20 hover:bg-violet-500/25",
    dot: "bg-violet-400",
  },
  amber: {
    card: "border-amber-500/20 bg-gradient-to-br from-amber-500/10 to-transparent",
    badge: "bg-amber-500/15 text-amber-300 border border-amber-500/20 hover:bg-amber-500/25",
    dot: "bg-amber-400",
  },
  red: {
    card: "border-red-500/20 bg-gradient-to-br from-red-500/10 to-transparent",
    badge: "bg-red-500/15 text-red-300 border border-red-500/20 hover:bg-red-500/25",
    dot: "bg-red-400",
  },
  emerald: {
    card: "border-emerald-500/20 bg-gradient-to-br from-emerald-500/10 to-transparent",
    badge: "bg-emerald-500/15 text-emerald-300 border border-emerald-500/20 hover:bg-emerald-500/25",
    dot: "bg-emerald-400",
  },
  indigo: {
    card: "border-indigo-500/20 bg-gradient-to-br from-indigo-500/10 to-transparent",
    badge: "bg-indigo-500/15 text-indigo-300 border border-indigo-500/20 hover:bg-indigo-500/25",
    dot: "bg-indigo-400",
  },
  slate: {
    card: "border-slate-500/20 bg-gradient-to-br from-slate-500/10 to-transparent",
    badge: "bg-slate-500/15 text-slate-300 border border-slate-500/20 hover:bg-slate-500/25",
    dot: "bg-slate-400",
  },
  teal: {
    card: "border-teal-500/20 bg-gradient-to-br from-teal-500/10 to-transparent",
    badge: "bg-teal-500/15 text-teal-300 border border-teal-500/20 hover:bg-teal-500/25",
    dot: "bg-teal-400",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-[var(--section-bg-2)] relative">
      <div className="orb w-[500px] h-[500px] top-[-100px] right-[-200px] animate-float-slow"
        style={{ background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)", position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="section-label">Technical Expertise</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="gradient-text">Tech Arsenal</span>
          </h2>
          <p className="text-slate-400 max-w-lg mx-auto text-sm leading-relaxed">
            Tools and technologies I use to deliver quality software — from automation frameworks
            to performance and security testing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {categories.map((cat, i) => {
            const cfg = colorConfig[cat.color];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3, delay: i * 0.06 }}
                className={`rounded-2xl border p-5 ${cfg.card} backdrop-blur-sm transition-colors duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.emoji}</span>
                  <h3 className="text-white font-semibold text-sm leading-tight">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
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