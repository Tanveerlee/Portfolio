"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, CalendarDays, Building2 } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-28 bg-[var(--section-bg-1)]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="section-label">Background</p>
          <h2 className="text-4xl font-bold text-white">
            Education &{" "}
            <span className="gradient-text">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="gradient-border-card p-7"
          >
            <div className="flex items-center gap-4 mb-6">
              <div aria-hidden="true" className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/10 border border-cyan-500/20 flex items-center justify-center">
                <GraduationCap size={26} className="text-cyan-400" />
              </div>
              <div>
                <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest">Education</span>
                <h3 className="text-white font-bold text-lg">Bachelor of Science</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-white font-semibold text-lg mb-1">Computer Science</h4>
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                  <Building2 size={13} aria-hidden="true" />
                  <span>University of Agriculture, Faisalabad</span>
                </div>
              </div>

              <div className="h-px bg-slate-800" />

              <div className="space-y-2">
                {["Software Engineering", "Data Structures & Algorithms", "Database Management", "Computer Networks"].map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-slate-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Certification */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="gradient-border-card p-7"
          >
            <div className="flex items-center gap-4 mb-6">
              <div aria-hidden="true" className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500/20 to-violet-600/10 border border-violet-500/20 flex items-center justify-center">
                <Award size={26} className="text-violet-400" />
              </div>
              <div>
                <span className="text-xs font-semibold text-violet-400 uppercase tracking-widest">Certification</span>
                <h3 className="text-white font-bold text-lg">HCIA-AI</h3>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-white font-semibold">Huawei HCIA-AI</span>
                  <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                    Verified
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm mb-1">
                  <Building2 size={13} aria-hidden="true" />
                  <span>Huawei Technologies</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 text-xs">
                  <CalendarDays size={12} aria-hidden="true" />
                  <span>Issued: 2023</span>
                </div>
              </div>

              <div className="h-px bg-slate-800" />

              <div>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">
                  Comprehensive AI certification covering:
                </p>
                <div className="space-y-2">
                  {[
                    "Machine Learning Lifecycle",
                    "Neural Networks & Deep Learning",
                    "Python for AI Development",
                    "Cloud AI with Huawei ModelArts",
                  ].map((s) => (
                    <div key={s} className="flex items-center gap-2 text-sm text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0" />
                      {s}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Continuous learning note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-8 glass-card p-6 text-center"
        >
          <p className="text-slate-400 text-sm">
            🚀 Continuously expanding skills in{" "}
            <span className="text-cyan-400 font-semibold">AI-powered testing</span>,{" "}
            <span className="text-violet-400 font-semibold">cloud infrastructure</span>, and{" "}
            <span className="text-emerald-400 font-semibold">advanced automation frameworks</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
}