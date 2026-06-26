"use client";

import { useEffect, useState } from "react";
import { Mail, Download, ArrowRight, CheckCircle, AlertCircle, Loader } from "lucide-react";
import { motion } from "framer-motion";
import { LinkedInIcon, GitHubIcon } from "@/components/icons";
import CountUp from "@/components/CountUp";

const stats = [
  { value: "6+", label: "Years Experience", color: "from-cyan-400 to-cyan-600" },
  { value: "90+", label: "Releases Tested", color: "from-violet-400 to-violet-600" },
  { value: "300+", label: "Bugs Resolved", color: "from-emerald-400 to-emerald-600" },
  { value: "40%", label: "Regression Reduced", color: "from-amber-400 to-orange-500" },
];

const testLines = [
  { status: "pass", text: "Login flow validates correctly", time: "1.2s" },
  { status: "pass", text: "API returns 200 status codes", time: "0.4s" },
  { status: "pass", text: "Cross-browser compatibility", time: "3.1s" },
  { status: "pass", text: "Mobile responsive layout", time: "1.8s" },
  { status: "pass", text: "Form validation & error states", time: "0.9s" },
  { status: "running", text: "Performance benchmarks...", time: "–" },
];

const roles = [
  "Senior QA Automation Engineer",
  "Playwright Framework Architect",
  "API Testing Specialist",
  "Quality Assurance Leader",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIdx((i) => (i + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let count = 0;
    const timer = setInterval(() => {
      count++;
      setVisibleLines(count);
      if (count >= testLines.length) clearInterval(timer);
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center hero-bg grid-bg overflow-hidden pt-16">
      {/* Animated orbs */}
      <div className="orb w-[600px] h-[600px] top-[-200px] left-[-200px] animate-float"
        style={{ background: "radial-gradient(circle, rgba(34,211,238,0.15) 0%, transparent 70%)" }} />
      <div className="orb w-[500px] h-[500px] bottom-[-150px] right-[-100px] animate-float-slow"
        style={{ background: "radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 70%)" }} />
      <div className="orb w-[300px] h-[300px] top-[40%] right-[30%] animate-float-delay"
        style={{ background: "radial-gradient(circle, rgba(52,211,153,0.08) 0%, transparent 70%)" }} />

      <div className="max-w-6xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Available for new opportunities
              </span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <p className="text-slate-400 font-mono text-sm tracking-widest uppercase mb-3">
                Hello, I&apos;m
              </p>
              <h1 className="text-5xl sm:text-6xl font-black tracking-tight leading-none">
                <span className="gradient-text">Tanveer</span>
                <br />
                <span className="hero-surname">Hussain</span>
              </h1>
            </motion.div>

            {/* Role cycling */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-8 overflow-hidden"
              aria-live="polite"
              aria-atomic="true"
            >
              <motion.p
                key={roleIdx}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="text-xl font-semibold text-cyan-400 font-mono"
              >
                {roles[roleIdx]}
              </motion.p>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-slate-400 text-base leading-relaxed max-w-lg"
            >
              6+ years building robust automation frameworks and ensuring quality across 90+ production releases. Specializing in Playwright, Cypress, and API testing with a proven track record of reducing regression cycles by{" "}
              <span className="text-cyan-400 font-semibold">40%</span>.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact" className="btn-primary">
                Let&apos;s Talk
                <ArrowRight size={16} aria-hidden="true" />
              </a>
              <a
                href="/Tanveer_Hussain_QA_Automation_Engineer.pdf"
                download
                aria-label="Download CV (PDF)"
                className="btn-secondary"
              >
                <Download size={16} aria-hidden="true" />
                Download CV
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-5 pt-2"
            >
              {[
                { icon: <LinkedInIcon aria-hidden="true" />, href: "https://linkedin.com/in/tanveer-hussain-sqa", label: "LinkedIn profile (opens in new tab)" },
                { icon: <GitHubIcon aria-hidden="true" />, href: "https://github.com/Tanveerlee", label: "GitHub profile (opens in new tab)" },
                { icon: <Mail size={18} aria-hidden="true" />, href: "mailto:tanveerashraf02@gmail.com", label: "Send email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-200 hover:-translate-y-0.5"
                >
                  {s.icon}
                </a>
              ))}
              <div className="h-px w-8 bg-slate-700" />
              <span className="text-slate-500 text-xs font-medium">Lahore, Pakistan</span>
            </motion.div>
          </div>

          {/* Right: Test Suite Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
            role="img"
            aria-label="Playwright test suite demonstration showing 5 passed tests with 94% coverage"
          >
            <div className="gradient-border-card p-0 overflow-hidden shadow-2xl shadow-black/50">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[var(--terminal-header)] border-b border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <span className="text-xs text-slate-500 font-mono ml-2">playwright-suite.spec.ts</span>
              </div>

              {/* Test output */}
              <div className="p-5 bg-[var(--terminal-body)] font-mono text-sm space-y-1 min-h-[320px]">
                <p className="text-slate-500 text-xs mb-4">
                  $ npx playwright test --reporter=list
                </p>

                {testLines.map((line, i) => (
                  i < visibleLines ? (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3 py-0.5"
                    >
                      {line.status === "pass" ? (
                        <CheckCircle size={14} className="text-emerald-400 flex-shrink-0" />
                      ) : line.status === "running" ? (
                        <Loader size={14} className="text-cyan-400 flex-shrink-0 animate-spin" />
                      ) : (
                        <AlertCircle size={14} className="text-red-400 flex-shrink-0" />
                      )}
                      <span className={line.status === "pass" ? "text-slate-300" : "text-cyan-300"}>
                        {line.text}
                      </span>
                      <span className="ml-auto text-slate-600 text-xs">{line.time}</span>
                    </motion.div>
                  ) : null
                ))}

                {visibleLines >= testLines.length && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-5 pt-4 border-t border-slate-800"
                  >
                    <div className="flex items-center justify-between text-xs mb-3">
                      <span className="text-emerald-400 font-semibold">5 passed</span>
                      <span className="text-cyan-400">1 running</span>
                      <span className="text-slate-500">0 failed</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: "94%" }}
                        transition={{ duration: 1.5, delay: 0.5 }}
                      />
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-slate-500">
                      <span>Coverage: 94%</span>
                      <span>Duration: 7.4s</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Mini stat cards */}
            <div className="grid grid-cols-2 gap-3 mt-4">
              {[
                { icon: "🛡️", label: "Zero Critical Bugs Shipped", color: "emerald" },
                { icon: "⚡", label: "CI/CD Pipeline Integrated", color: "cyan" },
              ].map((card) => (
                <div key={card.label} className="glass-card p-3 flex items-center gap-3">
                  <span className="text-xl">{card.icon}</span>
                  <span className="text-xs text-slate-400 font-medium leading-tight">{card.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((s, i) => {
            const match = s.value.match(/^(\d+)(.*)$/);
            const num = match ? parseInt(match[1]) : 0;
            const suffix = match ? match[2] : s.value;
            return (
              <motion.div
                key={s.label}
                className="glass-card p-5 text-center"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className={`text-4xl font-black mb-1 bg-gradient-to-r ${s.color} bg-clip-text text-transparent`}>
                  <CountUp value={num} suffix={suffix} duration={1400 + i * 100} />
                </div>
                <div className="text-slate-400 text-xs font-medium">{s.label}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-slate-600 text-xs font-mono">scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent animate-pulse" />
      </div>
    </section>
  );
}