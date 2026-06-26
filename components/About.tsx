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
    <section id="about" className="py-28 bg-[var(--section-bg-1)] relative">
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
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Building Reliable Software
              <br />
              <span className="gradient-text">Through Quality Engineering</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I&apos;m a <span className="text-white font-semibold">Senior QA Automation Engineer</span> based
                in Lahore, Pakistan, with over 6 years of experience ensuring software ships without defects.
                I specialize in building automation frameworks that scale and finding bugs that matter.
              </p>
              <p>
                At <span className="text-cyan-400 font-semibold">Conovo Technologies</span>, I architected a
                Playwright automation framework from scratch using Page Object Model architecture — reducing
                regression testing effort by <span className="text-emerald-400 font-semibold">30–40%</span> and
                increasing overall test coverage by <span className="text-emerald-400 font-semibold">25%</span>.
              </p>
              <p>
                I believe quality is a team sport. I embed QA early in the development cycle, collaborate closely
                with developers, and mentor junior engineers to build a culture of quality from the ground up.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
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
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`p-6 rounded-2xl border bg-gradient-to-br ${colorMap[h.color]} glass-card cursor-default`}
              >
                <div aria-hidden="true" className={`mb-3 ${colorMap[h.color].split(" ").pop()}`}>{h.icon}</div>
                <h3 className="text-white font-semibold mb-2 text-base">{h.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}