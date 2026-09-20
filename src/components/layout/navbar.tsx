import React from "react";
import { personalInfo } from "@/lib/content";
import { HPMark } from "@/components/ui/hp-mark";

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
      <div className="flex items-center justify-between px-6 md:px-12 py-4 md:py-5 max-w-7xl mx-auto w-full">
        {/* Brand Identity with Reusable Geometric HP Mark */}
        <a
          href="#hero"
          className="group pointer-events-auto flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
          aria-label="Hanmanth Patil — Back to top"
        >
          <HPMark
            size={32}
            className="transition-all duration-300 group-hover:border-accent-cyan/40"
          />
          <div className="flex flex-col">
            <span className="font-display text-sm font-medium tracking-tight text-text-primary group-hover:text-accent-soft transition-colors">
              {personalInfo.name}
            </span>
            <span className="font-mono text-[10px] tracking-widest text-text-muted uppercase hidden sm:inline-block">
              AIML Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Anchors */}
        <nav
          aria-label="Primary Navigation"
          className="pointer-events-auto hidden md:flex md:absolute md:left-1/2 md:-translate-x-1/2 items-center gap-8 px-6 py-2.5 rounded-pill bg-surface-secondary/85 backdrop-blur-md border border-border-subtle text-xs font-mono tracking-wider text-text-secondary shadow-lg shadow-black/20"
        >
          <a
            href="#about"
            className="hover:text-text-primary transition-colors rounded-sm focus-visible:text-accent-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
          >
            ABOUT
          </a>
          <a
            href="#work"
            className="hover:text-text-primary transition-colors rounded-sm focus-visible:text-accent-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
          >
            WORK
          </a>
          <a
            href="#achievements"
            className="hover:text-text-primary transition-colors rounded-sm focus-visible:text-accent-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
          >
            ACHIEVEMENTS
          </a>
          <a
            href="#contact"
            className="hover:text-text-primary transition-colors rounded-sm focus-visible:text-accent-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
          >
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
}
