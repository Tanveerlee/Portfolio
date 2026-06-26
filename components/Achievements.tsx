"use client";

import { motion } from "framer-motion";
import { TrendingUp, Bug, Shield, Layers } from "lucide-react";
import CountUp from "@/components/CountUp";

const metrics = [
  {
    icon: <TrendingUp size={24} />,
    value: "40%",
    label: "Regression Reduction",
    desc: "Reduced regression testing effort through automation",
    color: "cyan",
  },
  {
    icon: <Bug size={24} />,
    value: "300+",
    label: "Bugs Tracked & Resolved",
    desc: "Logged and drove resolution across multiple cycles",
    color: "emerald",
  },
  {
    icon: <Layers size={24} />,
    value: "25%",
    label: "Test Coverage Increase",
    desc: "Through strategic automation and optimized test design",
    color: "violet",
  },
  {
    icon: <Shield size={24} />,
    value: "90+",
    label: "Production Releases",
    desc: "Contributing to stable, defect-free deployments",
    color: "amber",
  },
];

const achievements = [
  {
    emoji: "🏗️",
    title: "Built Playwright Framework from Scratch",
    desc: "Established a scalable Playwright automation framework using Page Object Model architecture — improving test reliability and accelerating release validation cycles by 30–40%.",
    tags: ["Playwright", "POM", "TypeScript"],
    color: "cyan",
  },
  {
    emoji: "🎯",
    title: "Shifted Defect Detection Left",
    desc: "Embedded QA into requirement reviews and early development phases, resulting in fewer post-release hotfixes and significantly reduced rework effort across the team.",
    tags: ["Shift-Left Testing", "Requirements Review", "STLC"],
    color: "violet",
  },
  {
    emoji: "📈",
    title: "Increased Test Coverage by 25%",
    desc: "Through strategic automation initiatives and optimized test case design, reducing defect leakage and improving overall release quality across all product lines.",
    tags: ["Test Strategy", "Coverage Metrics", "Quality"],
    color: "emerald",
  },
  {
    emoji: "👨‍🏫",
    title: "Mentored Junior QA Engineers",
    desc: "Guided and upskilled junior QA engineers on automation practices, defect management, and quality assurance best practices — building a high-performing QA team.",
    tags: ["Leadership", "Mentorship", "Team Growth"],
    color: "amber",
  },
];

const colorConfig: Record<string, { icon: string; metric: string; tag: string; badge: string }> = {
  cyan: {
    icon: "text-cyan-400 bg-cyan-500/15",
    metric: "text-cyan-400",
    tag: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
    badge: "from-cyan-500/20 to-cyan-600/5 border-cyan-500/25",
  },
  emerald: {
    icon: "text-emerald-400 bg-emerald-500/15",
    metric: "text-emerald-400",
    tag: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
    badge: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/25",
  },
  violet: {
    icon: "text-violet-400 bg-violet-500/15",
    metric: "text-violet-400",
    tag: "bg-violet-500/10 text-violet-300 border-violet-500/20",
    badge: "from-violet-500/20 to-violet-600/5 border-violet-500/25",
  },
  amber: {
    icon: "text-amber-400 bg-amber-500/15",
    metric: "text-amber-400",
    tag: "bg-amber-500/10 text-amber-300 border-amber-500/20",
    badge: "from-amber-500/20 to-amber-600/5 border-amber-500/25",
  },
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-28 bg-[#060b18] relative overflow-hidden">
      <div className="orb w-[400px] h-[400px] bottom-[-100px] left-[-100px] animate-float"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)", position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none" }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="section-label">Impact & Results</p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Key <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-lg mx-auto leading-relaxed">
            Measurable results and milestones that demonstrate real-world impact on quality and team performance.
          </p>
        </motion.div>

        {/* Metric cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {metrics.map((m, i) => {
            const cfg = colorConfig[m.color];
            return (
              <motion.div
                key={m.value}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.03 }}
                transition={{ duration: 0.3, delay: i * 0.1 }}
                className="glass-card p-5 text-center group cursor-default"
              >
                <div className={`w-12 h-12 rounded-xl ${cfg.icon} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                  {m.icon}
                </div>
                <div className={`text-3xl font-black mb-1 ${cfg.metric}`}>
                  {(() => {
                    const match = m.value.match(/^(\d+)(.*)$/);
                    const num = match ? parseInt(match[1]) : 0;
                    const suf = match ? match[2] : m.value;
                    return <CountUp value={num} suffix={suf} duration={1500 + i * 150} />;
                  })()}
                </div>
                <div className="text-white text-xs font-semibold mb-1">{m.label}</div>
                <div className="text-slate-500 text-xs">{m.desc}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Achievement cards */}
        <div className="grid sm:grid-cols-2 gap-5">
          {achievements.map((a, i) => {
            const cfg = colorConfig[a.color];
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`rounded-2xl border bg-gradient-to-br ${cfg.badge} p-6 glass-card cursor-default`}
              >
                <div className="text-3xl mb-4">{a.emoji}</div>
                <h3 className="text-white font-bold text-lg mb-3">{a.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{a.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {a.tags.map((t) => (
                    <span key={t} className={`text-xs px-3 py-1 rounded-full border ${cfg.tag}`}>
                      {t}
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