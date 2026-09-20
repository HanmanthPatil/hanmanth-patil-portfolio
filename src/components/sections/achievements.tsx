"use client";

import React from "react";
import { majorAchievements } from "@/lib/content";
import { useInView } from "@/hooks/use-in-view";

export function Achievements() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="relative scroll-mt-24 py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-border-subtle/60"
    >
      <div
        ref={ref}
        className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase">
            03 — ACHIEVEMENTS
          </span>
          <div className="h-[1px] w-12 bg-border-subtle" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <h2
            id="achievements-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary tracking-tight"
          >
            Competitive Engineering &amp; Honors
          </h2>
          <span className="font-mono text-xs text-text-muted">
            [ VERIFIED NATIONAL RECOGNITIONS ]
          </span>
        </div>

        {/* Editorial Structured Ledger */}
        <div className="divide-y divide-border-subtle border-y border-border-subtle">
          {majorAchievements.map((item, idx) => (
            <div
              key={item.ordinal}
              className={`group py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 px-4 -mx-4 rounded-lg transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-surface-secondary/50 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
              }`}
              style={{
                transitionDelay: isInView ? `${idx * 60 + 80}ms` : "0ms",
              }}
            >
              <div className="flex items-start md:items-center gap-6 md:gap-10">
                <span className="font-mono text-sm md:text-base text-accent-cyan/80 group-hover:text-accent-cyan group-hover:translate-x-1 transition-all duration-300">
                  [{item.ordinal}]
                </span>

                <div>
                  <h3 className="font-display text-xl md:text-2xl font-medium text-text-primary group-hover:text-accent-soft group-hover:translate-x-0.5 transition-all duration-300 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-text-secondary group-hover:text-text-primary/85 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8 pl-12 md:pl-0">
                <div className="text-left md:text-right transition-transform duration-300 group-hover:-translate-x-0.5">
                  <span className="font-mono text-xs text-text-primary block font-medium">
                    {item.venue}
                  </span>
                  <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider block">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
