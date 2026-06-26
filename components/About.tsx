"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Code2, Users } from "lucide-react";

const highlights = [
  {
    icon: <Shield size={22} />,
    title: "Quality Guardian",
    desc: "Ensuring every release meets the highest standards before reaching users.",
    color: "cyan",
  },
  {
    icon: <Zap size={22} />,
    title: "Automation First",
    desc: "Building scalable frameworks that catch bugs before they ship.",
    color: "violet",
  },
  {
    icon: <Code2 size={22} />,
    title: "Framework Architect",
    desc: "Designed Playwright POM frameworks from scratch for maximum maintainability.",
    color: "emerald",
  },
  {
    icon: <Users size={22} />,
    title: "Team Mentor",
    desc: "Upskilling junior QA engineers on best practices and modern tooling.",
    color: "amber",
  },
];

const colorMap: Record<string, string> = {
  cyan: "from-cyan-500/20 to-cyan-600/5 border-cyan-500/20 text-cyan-400",
  violet: "from-violet-500/20 to-violet-600/5 border-violet-500/20 text-violet-400",
  emerald: "from-emerald-500/20 to-emerald-600/5 border-emerald-500/20 text-emerald-400",
  amber: "from-amber-500/20 to-amber-600/5 border-amber-500/20 text-amber-400",
};

export default function About() {
  return (
    <section id="about" className="py-20 bg-[var(--section-bg-1)] relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">About Me</p>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
              Senior Software<br />
              <span className="gradient-text">QA Engineer</span>
            </h2>
            <p className="text-slate-400 leading-relaxed text-base">
              Senior Software QA Engineer with 6+ years of experience in Playwright automation, API testing,
              SQL validation, and performance testing. I help teams build reliable software through scalable
              automation and modern QA practices.
            </p>

            <div className="mt-5 flex flex-wrap gap-3">
              {["Lahore, Pakistan", "tanveerashraf02@gmail.com"].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-lg bg-slate-800/60 border border-slate-700/50 text-slate-300 text-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Right: highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4, scale: 1.02, transition: { duration: 0.2 } }}
                className={`relative overflow-hidden p-5 rounded-2xl border bg-gradient-to-br ${colorMap[h.color]} glass-card cursor-default`}
              >
                <div className="card-shimmer" />
                <div className="flex items-start gap-3 relative z-10">
                  <div aria-hidden="true" className={`mt-0.5 flex-shrink-0 ${colorMap[h.color].split(" ").pop()}`}>{h.icon}</div>
                  <div>
                    <h3 className="text-white font-semibold mb-1.5 text-base">{h.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}