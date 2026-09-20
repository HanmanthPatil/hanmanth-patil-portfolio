"use client";

import React from "react";
import { projects } from "@/lib/content";
import { useInView } from "@/hooks/use-in-view";
import { ProjectMark } from "@/components/ui/project-mark";

interface ProjectCardProps {
  project: (typeof projects)[number];
  index: number;
  isInView: boolean;
  isCompact?: boolean;
}

function ProjectCard({
  project,
  index,
  isInView,
  isCompact = false,
}: ProjectCardProps) {
  const handlePointerMove = (e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType === "touch") return;
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty(
      "--mouse-x",
      `${e.clientX - rect.left}px`
    );
    e.currentTarget.style.setProperty(
      "--mouse-y",
      `${e.clientY - rect.top}px`
    );
  };

  return (
    <article
      className={`group relative overflow-hidden flex flex-col justify-between ${
        isCompact ? "p-4" : "p-5"
      } rounded-xl bg-surface-secondary/40 border border-border-subtle hover:border-accent-cyan/40 hover:bg-surface-hover/70 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.45)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
      }`}
      style={{
        transitionDelay: isInView ? `${Math.min(index * 35, 240)}ms` : "0ms",
      }}
      onPointerMove={handlePointerMove}
      aria-labelledby={`project-${project.id}-title`}
    >
      {/* Subtle Cursor-Position Spotlight */}
      <div
        className="card-spotlight pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out"
        style={{
          background:
            "radial-gradient(360px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(255, 255, 255, 0.035), rgba(0, 194, 255, 0.04) 40%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-2.5 transition-transform duration-300 group-hover:translate-x-0.5">
          <span className="font-mono text-xs text-accent-cyan tracking-wider">
            [{project.ordinal}]
          </span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
              {project.category}
            </span>
            {"tag" in project && project.tag && (
              <span className="px-2 py-0.5 rounded-pill bg-accent-cyan/10 border border-accent-cyan/30 text-[9px] font-mono text-accent-cyan tracking-wide uppercase">
                {project.tag}
              </span>
            )}
          </div>
        </div>

        {/* Title with Distinctive Project Mark */}
        <div className="flex items-center gap-2.5 mb-2.5">
          <ProjectMark
            name={project.mark}
            size={22}
            className="transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105 group-hover:translate-x-0.5"
          />
          <h3
            id={`project-${project.id}-title`}
            className={`font-display ${
              isCompact ? "text-base" : "text-lg"
            } font-semibold text-text-primary group-hover:text-accent-soft group-hover:translate-x-1 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]`}
          >
            {project.name}
          </h3>
        </div>

        {"description" in project && project.description && (
          <p className="font-sans text-xs md:text-sm text-text-secondary group-hover:text-text-primary/85 leading-relaxed transition-colors duration-300">
            {project.description}
          </p>
        )}
      </div>
    </article>
  );
}

export function ProjectsGrid() {
  const { ref, isInView } = useInView();

  const softwareProjects = projects.filter((p) => p.group === "software");
  const hardwareProjects = projects.filter((p) => p.group === "hardware");
  const roboticsProjects = projects.filter((p) => p.group === "robotics");

  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="relative scroll-mt-24 py-16 md:py-24 px-6 md:px-12 max-w-7xl mx-auto w-full border-t border-border-subtle/60"
    >
      <div
        ref={ref}
        className={`transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase">
            02 — SELECTED WORK
          </span>
          <div className="h-[1px] w-12 bg-border-subtle" />
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-4">
          <h2
            id="work-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-text-primary tracking-tight"
          >
            Engineering Systems &amp; Digital Products
          </h2>
          <span className="font-mono text-xs text-text-muted">
            [ 16 VERIFIED SYSTEMS · 3 DISCIPLINES ]
          </span>
        </div>

        {/* =======================================================
            CATEGORY 01 — SOFTWARE / AI / ML / WEB (3 × 2 Grid)
            ======================================================= */}
        <div className="flex items-center gap-3 mb-4">
          <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase">
            01 — SOFTWARE / AI / ML / WEB
          </span>
          <div className="h-[1px] flex-1 bg-border-subtle/60" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {softwareProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              isInView={isInView}
            />
          ))}
        </div>

        {/* =======================================================
            CATEGORY 02 — HARDWARE / IoT / EMBEDDED / SUSTAINABLE ENGINEERING (2 Columns)
            ======================================================= */}
        <div className="flex items-center gap-3 mt-10 md:mt-12 mb-4">
          <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase">
            02 — HARDWARE / IoT / EMBEDDED / SUSTAINABLE ENGINEERING
          </span>
          <div className="h-[1px] flex-1 bg-border-subtle/60" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
          {hardwareProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              isInView={isInView}
            />
          ))}
        </div>

        {/* =======================================================
            CATEGORY 03 — ROBOTICS (4 × 2 Grid)
            ======================================================= */}
        <div className="flex items-center gap-3 mt-10 md:mt-12 mb-4">
          <span className="font-mono text-xs text-accent-cyan tracking-widest uppercase">
            03 — ROBOTICS
          </span>
          <div className="h-[1px] flex-1 bg-border-subtle/60" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 md:gap-4">
          {roboticsProjects.map((project, idx) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              isInView={isInView}
              isCompact
            />
          ))}
        </div>
      </div>
    </section>
  );
}
