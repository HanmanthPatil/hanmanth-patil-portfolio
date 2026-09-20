import React from "react";
import { personalInfo } from "@/lib/content";

export function HeroTypography() {
  return (
    <div className="relative z-10 flex flex-col justify-center h-full max-w-2xl px-6 md:px-12 pointer-events-none select-none">
      {/* Editorial Identity Badge */}
      <div className="mb-6 flex items-center gap-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-pill bg-surface-secondary/70 backdrop-blur-sm border border-border-subtle text-[11px] font-mono tracking-widest text-accent-cyan">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
          <span>{personalInfo.role}</span>
        </div>
      </div>

      {/* Main Single H1 Headline */}
      <h1 className="font-display font-semibold tracking-tight text-text-primary text-[clamp(2.5rem,5.5vw,5.2rem)] leading-[0.96] mb-6">
        <span className="block">Think Deeper.</span>
        <span className="block text-text-secondary/90">Build Smarter.</span>
        <span className="block">Go Further.</span>
      </h1>

      {/* Restrained Supporting Thesis */}
      <p className="font-sans text-text-primary/80 text-sm md:text-base leading-relaxed max-w-lg mb-8">
        🧠 I build intelligence that thinks, 🤖 machines that move, and 🚀 ideas that become real.
      </p>

      {/* Hero CTA System */}
      <div className="flex flex-wrap items-center gap-3.5 mb-6 pointer-events-auto">
        <a
          href="#work"
          className="inline-flex items-center justify-center px-6 py-3 rounded-pill bg-text-primary text-background font-mono text-xs font-semibold tracking-wider hover:bg-accent-soft hover:shadow-[0_0_24px_rgba(0,194,255,0.30)] transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
        >
          EXPLORE WORK
        </a>

        <a
          href="#contact"
          className="inline-flex items-center justify-center px-6 py-3 rounded-pill bg-surface-secondary/70 backdrop-blur-sm border border-border-subtle hover:border-accent-cyan/40 hover:text-accent-soft text-text-primary font-mono text-xs font-semibold tracking-wider transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
        >
          LET&apos;S TALK
        </a>
      </div>

      {/* Bottom Academic Metadata */}
      <div className="inline-flex items-center gap-2 text-xs font-mono text-text-primary/75">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/80 animate-ping" />
        <span>B.E. AI&amp;ML · 7th Semester · Kalaburagi</span>
      </div>
    </div>
  );
}
