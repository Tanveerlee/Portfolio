"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";

const jobs = [
  {
    role: "Senior Software Quality Assurance Engineer",
    company: "Conovo Technologies",
    period: "Dec 2022 – Present",
    duration: "2+ years",
    location: "Lahore, Pakistan",
    color: "cyan",
    badge: "Current",
    points: [
      "Architected a Playwright automation framework from scratch with Page Object Model, reusable components, and data-driven testing",
      "Decreased regression testing effort by 30–40% through strategic automation implementation",
      "Integrated automated test execution within CI/CD workflows for continuous quality assurance",
      "Validated APIs using Postman and Bruno — ensuring accurate data exchange and authentication compliance",
      "Performed functional, regression, smoke, sanity, integration, UAT testing across 90+ production releases",
      "Managed automation test scripts via GitHub and collaborated on code reviews with dev teams",
      "Increased test coverage by ~25% through automation and optimized test design",
      "Mentored junior QA engineers on testing methodologies, defect management, and automation best practices",
      "Collaborated closely with developers, product owners, and stakeholders across full Agile ceremonies",
    ],
    techStack: ["Playwright", "Postman", "Bruno", "GitHub", "JIRA", "Agile"],
  },
  {
    role: "Software Quality Assurance Engineer",
    company: "Devigital Systems",
    period: "Sep 2019 – Nov 2022",
    duration: "3+ years",
    location: "Lahore, Pakistan",
    color: "violet",
    badge: "Previous",
    points: [
      "Performed end-to-end testing for web, mobile, and desktop applications",
      "Built and maintained automation scripts using Katalon Studio",
      "Conducted API testing via Postman collections — validating status codes and response structures",
      "Performance tested with JMeter to identify system bottlenecks and support performance improvements",
      "Managed defects and workflows using JIRA, Asana, and Trello",
      "Developed detailed QA documentation including test plans, cases, and scenarios",
    ],
    techStack: ["Katalon Studio", "Postman", "JMeter", "JIRA", "Burp Suite", "SQL"],
  },
];

const colorConfig: Record<string, { ring: string; badge: string; dot: string; line: string; tech: string }> = {
  cyan: {
    ring: "border-cyan-500/40 bg-cyan-500/10",
    badge: "bg-cyan-500/20 text-cyan-400 border-cyan-500/30",
    dot: "bg-cyan-400 shadow-cyan-400/50",
    line: "from-cyan-400 via-violet-400",
    tech: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  },
  violet: {
    ring: "border-violet-500/40 bg-violet-500/10",
    badge: "bg-violet-500/20 text-violet-400 border-violet-500/30",
    dot: "bg-violet-400 shadow-violet-400/50",
    line: "from-violet-400 to-transparent",
    tech: "bg-violet-500/10 text-violet-300 border-violet-500/20",
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-[#030712] relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase mb-3">Career Journey</p>
          <h2 className="text-4xl font-bold text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-lg text-sm leading-relaxed">
            6+ years of delivering quality across diverse projects, from enterprise web apps to mobile applications.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-10">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400 via-violet-400 to-transparent opacity-30" />

          <div className="space-y-12">
            {jobs.map((job, i) => {
              const cfg = colorConfig[job.color];
              return (
                <motion.div
                  key={job.company}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div className={`absolute -left-[26px] w-4 h-4 rounded-full shadow-lg ${cfg.dot} border-2 border-[#030712] top-6`} />

                  <div className="glass-card p-7">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`text-xs font-semibold px-3 py-1 rounded-full border ${cfg.badge}`}>
                            {job.badge}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white">{job.role}</h3>
                        <div className="flex items-center gap-2 mt-1">
                          <Briefcase size={14} className="text-slate-500" />
                          <span className="text-cyan-400 font-semibold text-sm">{job.company}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 text-right sm:text-right">
                        <div className="flex items-center gap-2 text-slate-400 text-xs sm:justify-end">
                          <Calendar size={12} />
                          <span>{job.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-400 text-xs sm:justify-end">
                          <MapPin size={12} />
                          <span>{job.location}</span>
                        </div>
                        <span className={`text-xs font-medium px-2 py-0.5 rounded ${cfg.badge} border self-start sm:self-end`}>
                          {job.duration}
                        </span>
                      </div>
                    </div>

                    {/* Bullet points */}
                    <ul className="space-y-2.5 mb-5">
                      {job.points.map((p) => (
                        <li key={p} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed">
                          <CheckCircle2 size={14} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="border-t border-slate-800 pt-4">
                      <p className="text-xs text-slate-500 mb-2 font-medium uppercase tracking-wide">Key Tools</p>
                      <div className="flex flex-wrap gap-2">
                        {job.techStack.map((t) => (
                          <span key={t} className={`text-xs px-3 py-1 rounded-full border font-mono ${cfg.tech}`}>
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}