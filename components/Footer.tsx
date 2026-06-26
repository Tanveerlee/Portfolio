import { Mail, Heart } from "lucide-react";
import { LinkedInIcon, GitHubIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="bg-[var(--section-bg-1)] border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center font-bold text-xs text-white">
              TH
            </div>
            <div>
              <p className="text-white font-semibold text-sm">Tanveer Hussain</p>
              <p className="text-slate-500 text-xs">Senior QA Automation Engineer</p>
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-6 text-xs text-slate-500">
            {["About", "Skills", "Experience", "Achievements", "Education", "Contact"].map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="hover:text-cyan-400 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>

          {/* Socials */}
          <nav aria-label="Social links" className="flex items-center gap-3">
            {[
              { icon: <LinkedInIcon size={16} aria-hidden="true" />, href: "https://linkedin.com/in/tanveer-hussain-sqa", label: "LinkedIn profile" },
              { icon: <GitHubIcon size={16} aria-hidden="true" />, href: "https://github.com/Tanveerlee", label: "GitHub profile" },
              { icon: <Mail size={16} aria-hidden="true" />, href: "mailto:tanveerashraf02@gmail.com", label: "Send email" },
            ].map(({ icon, href, label }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg bg-slate-800/60 border border-slate-700/40 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
              >
                {icon}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 text-center">
          <p className="text-slate-600 text-xs flex items-center justify-center gap-1.5">
            © {new Date().getFullYear()} Tanveer Hussain. Crafted with{" "}
            <Heart size={11} aria-hidden="true" className="text-red-500 fill-red-500" />{" "}
            and Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}