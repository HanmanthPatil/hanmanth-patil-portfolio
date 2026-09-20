"use client";

import React from "react";
import { eventsLedger } from "@/lib/content";
import { useInView } from "@/hooks/use-in-view";
import {
  AchievementIcon,
  getAchievementType,
} from "@/components/ui/achievement-icon";

export function EventsCompetitions() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="events"
      aria-labelledby="events-heading"
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
            04 — EVENTS &amp; COMPETITIONS
          </span>
          <div className="h-[1px] w-12 bg-border-subtle" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <h2
            id="events-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary tracking-tight"
          >
            Technical Arena Ledger
          </h2>
          <span className="font-mono text-xs text-text-muted">
            [ COMPETITIVE PARTICIPATION &amp; BENCHMARKS ]
          </span>
        </div>

        {/* Technical Ledger */}
        <div className="rounded-xl border border-border-subtle overflow-hidden bg-surface-secondary/20">
          {/* Header Row — Desktop Only */}
          <div className="hidden md:grid grid-cols-12 px-6 py-3.5 bg-surface-secondary/60 border-b border-border-subtle text-[11px] font-mono uppercase tracking-wider text-text-muted">
            <span className="col-span-5">Competition / Event</span>
            <span className="col-span-3">Host Institution</span>
            <span className="col-span-2">Category</span>
            <span className="col-span-2 text-right">Result</span>
          </div>

          {/* Ledger Items */}
          <div className="divide-y divide-border-subtle/50">
            {eventsLedger.map((row, idx) => (
              <div
                key={idx}
                className={`group p-4 sm:p-5 md:px-6 md:py-4 flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-0 md:items-center hover:bg-surface-secondary/60 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
                style={{
                  transitionDelay: isInView
                    ? `${Math.min(idx * 25 + 60, 260)}ms`
                    : "0ms",
                }}
              >
                {/* Event Name */}
                <div className="col-span-5 flex items-center gap-2.5 flex-wrap">
                  <span className="font-mono text-xs text-accent-cyan md:hidden">›</span>
                  <span className="font-sans text-sm font-medium text-text-primary break-words">
                    {row.event}
                  </span>
                  {row.team && (
                    <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle text-[10px] font-mono text-text-muted">
                      {row.team}
                    </span>
                  )}
                  {row.project && (
                    <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle text-[10px] font-mono text-text-muted">
                      {row.project}
                    </span>
                  )}
                  {row.year && (
                    <span className="px-1.5 py-0.5 rounded bg-surface-elevated border border-border-subtle text-[10px] font-mono text-text-muted">
                      {row.year}
                    </span>
                  )}
                </div>

                {/* Institution */}
                <div className="col-span-3 font-mono text-xs text-text-secondary pl-5 md:pl-0 break-words">
                  {row.institution}
                </div>

                {/* Category */}
                <div className="col-span-2 font-mono text-[11px] text-text-muted uppercase tracking-wide pl-5 md:pl-0">
                  {row.category}
                </div>

                {/* Result with Integrated Achievement Icon */}
                <div className="col-span-2 pl-5 md:pl-0 flex items-center md:justify-end gap-2 pt-1 md:pt-0">
                  <AchievementIcon
                    type={getAchievementType(row.result)}
                    size={20}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/20 text-xs font-mono font-medium text-accent-soft shrink-0">
                    {row.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
