"use client";

import React from "react";
import { personalInfo, coreDomains } from "@/lib/content";
import { useInView } from "@/hooks/use-in-view";

export function AcademicsIntro() {
  const { ref, isInView } = useInView();

  const academicItems = [
    {
      id: "discipline",
      label: "DISCIPLINE",
      value: personalInfo.education.degree,
    },
    {
      id: "institution",
      label: "INSTITUTION",
      value: personalInfo.education.institution,
    },
    {
      id: "status",
      label: "CURRENT STATUS",
      value: personalInfo.education.currentStatus,
    },
    {
      id: "standing",
      label: "ACADEMIC STANDING",
      value: personalInfo.education.standing,
    },
    {
      id: "graduation",
      label: "EXPECTED GRADUATION",
      value: personalInfo.education.graduationYear,
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative scroll-mt-24 py-28 md:py-36 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-border-subtle/60"
    >
      <div
        ref={ref}
        className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase">
            01 — PROFILE
          </span>
          <div className="h-[1px] w-12 bg-border-subtle" />
        </div>

        {/* Large Editorial Thesis Statement & Introduction */}
        <div className="max-w-4xl mb-16 md:mb-20">
          <h2
            id="about-heading"
            className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] font-medium leading-[1.2] text-text-primary tracking-tight mb-8"
          >
            {personalInfo.profileHeadline}
          </h2>

          <p className="font-sans text-base md:text-lg text-text-secondary leading-relaxed max-w-3xl">
            {personalInfo.profileIntro}
          </p>
        </div>

        {/* Academic Profile Card System */}
        <div className="pt-10 border-t border-border-subtle">
          <div className="flex items-center gap-2 mb-6">
            <span className="font-mono text-[11px] text-accent-cyan uppercase tracking-widest">
              Academic Profile
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {academicItems.map((item, idx) => (
              <div
                key={item.id}
                className={`p-4 sm:p-5 md:px-5 md:py-4 rounded-lg bg-surface-secondary/40 border border-border-subtle hover:border-accent-cyan/30 hover:bg-surface-secondary/60 hover:-translate-y-0.5 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-start h-full ${
                  item.id === "graduation" ? "sm:col-span-2 lg:col-span-1" : ""
                } ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{
                  transitionDelay: isInView ? `${idx * 50 + 60}ms` : "0ms",
                }}
              >
                <span className="font-mono text-[11px] text-text-muted uppercase tracking-wider mb-2 block">
                  {item.label}
                </span>
                <p className="font-sans text-sm font-medium text-text-primary leading-relaxed">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Disciplines Grid */}
        <div className="mt-16 pt-10 border-t border-border-subtle/60">
          <div className="flex items-center gap-2 mb-6">
            <span className="font-mono text-[11px] text-accent-cyan uppercase tracking-widest">
              Core Disciplines
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreDomains.map((domain, idx) => (
              <div
                key={domain.label}
                className={`p-6 rounded-lg bg-surface-secondary/40 border border-border-subtle hover:border-accent-cyan/30 hover:bg-surface-secondary/60 hover:-translate-y-0.5 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
                }`}
                style={{
                  transitionDelay: isInView ? `${idx * 45 + 100}ms` : "0ms",
                }}
              >
                <h3 className="font-mono text-xs uppercase tracking-wider text-text-primary mb-2">
                  {domain.label}
                </h3>
                <p className="font-sans text-xs text-text-secondary leading-relaxed">
                  {domain.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
