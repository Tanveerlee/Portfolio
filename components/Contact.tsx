"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, ExternalLink } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons";

// Get your free key at https://web3forms.com/ — add it to .env.local as NEXT_PUBLIC_WEB3FORMS_KEY
const WEB3FORMS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `Portfolio contact from ${form.name}`,
          from_name: form.name,
          email: form.email,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const contacts = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "tanveerashraf02@gmail.com",
      href: "mailto:tanveerashraf02@gmail.com",
      color: "cyan",
    },
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: "+92-333-739-1022",
      href: "tel:+923337391022",
      color: "emerald",
    },
    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: "Lahore, Pakistan",
      href: "https://maps.google.com/?q=Lahore,Pakistan",
      color: "violet",
    },
  ];

  const socials = [
    {
      icon: <LinkedInIcon />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/tanveer-hussain-sqa",
      color: "text-blue-400 hover:text-blue-300",
    },
    {
      icon: <GitHubIcon />,
      label: "GitHub",
      href: "https://github.com/Tanveerlee",
      color: "text-slate-400 hover:text-white",
    },
  ];

  const colorMap: Record<string, string> = {
    cyan: "bg-cyan-500/10 border-cyan-500/20 text-cyan-400",
    emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
    violet: "bg-violet-500/10 border-violet-500/20 text-violet-400",
  };

  return (
    <section id="contact" className="py-20 bg-[var(--section-bg-2)] relative overflow-hidden">
      {/* bg orb */}
      <div className="orb w-[500px] h-[500px] top-[50%] right-[-200px] animate-float-slow"
        style={{ background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 70%)", position: "absolute", borderRadius: "50%", filter: "blur(80px)", pointerEvents: "none", transform: "translateY(-50%)" }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="section-label">Get In Touch</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-slate-400 text-base max-w-lg mx-auto leading-relaxed">
            Ready to improve your team&apos;s software quality? I&apos;m open to new opportunities,
            collaborations, and conversations about QA automation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="gradient-border-card p-7">
              <h3 className="text-white font-bold text-xl mb-2">
                Available for hire
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                I&apos;m actively looking for senior QA engineering roles where I can bring my
                Playwright automation expertise and quality-first mindset to a great team.
              </p>

              <div className="space-y-3 mb-6">
                {contacts.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/40 hover:bg-slate-800/70 border border-slate-700/40 hover:border-slate-600/60 transition-all group"
                  >
                    <div aria-hidden="true" className={`w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0 ${colorMap[c.color]}`}>
                      {c.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-slate-500 text-xs mb-0.5">{c.label}</p>
                      <p className="text-white text-sm font-medium truncate">{c.value}</p>
                    </div>
                    <ExternalLink size={14} className="text-slate-600 group-hover:text-slate-400 ml-auto flex-shrink-0 transition-colors" />
                  </a>
                ))}
              </div>

              <div className="border-t border-slate-800 pt-5">
                <p className="text-slate-500 text-xs mb-3 font-medium uppercase tracking-wide">Find me on</p>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800/50 border border-slate-700/40 hover:border-slate-600 transition-all text-sm font-medium ${s.color}`}
                    >
                      {s.icon}
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-card p-7">
              <h3 className="text-white font-bold text-lg mb-5" id="contact-form-heading">Send a message</h3>
              <form onSubmit={handleSubmit} className="space-y-4" aria-labelledby="contact-form-heading" noValidate>
                <div>
                  <label htmlFor="contact-name" className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wide">
                    Your Name <span aria-hidden="true" className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    aria-required="true"
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="John Smith"
                    className="w-full bg-slate-800/50 border border-slate-700/60 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-800/80 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wide">
                    Email Address <span aria-hidden="true" className="text-cyan-400">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    aria-required="true"
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@company.com"
                    className="w-full bg-slate-800/50 border border-slate-700/60 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-800/80 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-slate-400 text-xs font-medium mb-2 uppercase tracking-wide">
                    Message <span aria-hidden="true" className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    aria-required="true"
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the role or project..."
                    className="w-full bg-slate-800/50 border border-slate-700/60 rounded-xl px-4 py-3 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-800/80 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  aria-live="polite"
                >
                  {status === "sending" && (
                    <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />Sending…</>
                  )}
                  {status === "success" && (
                    <><CheckCircle size={16} aria-hidden="true" />Message Sent!</>
                  )}
                  {status === "error" && (
                    <><AlertCircle size={16} aria-hidden="true" />Failed — try email directly</>
                  )}
                  {status === "idle" && (
                    <><Send size={16} aria-hidden="true" />Send Message</>
                  )}
                </button>
                {!WEB3FORMS_KEY && (
                  <p className="text-amber-400 text-xs text-center mt-2">
                    ⚠ Add <code className="font-mono">NEXT_PUBLIC_WEB3FORMS_KEY</code> in Vercel env vars to enable direct sending.
                  </p>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}