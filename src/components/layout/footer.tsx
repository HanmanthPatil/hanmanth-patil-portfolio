import React from "react";
import { personalInfo } from "@/lib/content";
import { HPMark } from "@/components/ui/hp-mark";

export function Footer() {
  return (
    <footer className="border-t border-border-subtle/60 py-12 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 font-mono text-xs text-text-muted">
        {/* Identity with HP Mark */}
        <div className="flex items-center gap-3">
          <HPMark size={24} showDot={true} />
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
            <span className="text-text-primary font-medium">{personalInfo.name}</span>
            <span className="hidden sm:inline text-border-subtle">/</span>
            <span>{personalInfo.role}</span>
          </div>
        </div>

        {/* Location & Copyright */}
        <div className="flex items-center gap-4 text-[11px]">
          <span>{personalInfo.location}</span>
          <span className="text-border-subtle">/</span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
