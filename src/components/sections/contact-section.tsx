"use client";

import React from "react";
import { personalInfo } from "@/lib/content";
import { useInView } from "@/hooks/use-in-view";
import { BrandIcon } from "@/components/ui/brand-icon";

export function ContactSection() {
  const { ref, isInView } = useInView();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
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
            05 — CONTACT
          </span>
          <div className="h-[1px] w-12 bg-border-subtle" />
        </div>

        <div className="max-w-3xl mb-14">
          <h2
            id="contact-heading"
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-text-primary tracking-tight leading-[1.05] mb-6"
          >
            {personalInfo.contactHeadline}
          </h2>
          <p className="font-sans text-base md:text-lg text-text-secondary leading-relaxed">
            {personalInfo.contactIntro}
          </p>
        </div>

        {/* Action Channels Card */}
        <div className="p-8 md:p-12 rounded-2xl bg-surface-secondary/40 border border-border-subtle flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BrandIcon name="mail" size={15} className="text-accent-cyan" />
              <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
                Email
              </span>
            </div>

            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="font-display text-xl sm:text-2xl md:text-3xl font-medium text-text-primary hover:text-accent-cyan focus-visible:text-accent-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan rounded transition-colors break-all"
              aria-label={`Send email to ${personalInfo.contact.email}`}
            >
              {personalInfo.contact.email}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-pill bg-text-primary text-background font-mono text-xs font-semibold tracking-wider hover:bg-accent-soft hover:shadow-[0_0_24px_rgba(0,194,255,0.30)] transition-all active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan"
            >
              <BrandIcon name="mail" size={15} className="text-background" />
              <span>SEND DIRECT EMAIL</span>
            </a>
          </div>
        </div>

        {/* Verified Professional Channels Row with Authentic Marks */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Phone Channel */}
          <a
            href={`tel:${personalInfo.contact.phone}`}
            className="p-5 rounded-xl bg-surface-secondary/20 border border-border-subtle hover:border-accent-cyan/40 hover:bg-surface-secondary/50 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between group"
            aria-label={`Call Hanmanth Patil at ${personalInfo.contact.phone}`}
          >
            <div className="flex items-center gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-surface-secondary border border-border-subtle flex items-center justify-center text-text-secondary group-hover:text-accent-cyan group-hover:border-accent-cyan/40 transition-colors duration-300">
                <BrandIcon name="phone" size={17} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                  Phone
                </span>
                <span className="font-mono text-xs text-text-primary group-hover:text-accent-soft transition-colors duration-300">
                  {personalInfo.contact.phone}
                </span>
              </div>
            </div>
            <span className="font-mono text-xs text-text-muted group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
              ↗
            </span>
          </a>

          {/* GitHub Channel */}
          <a
            href={personalInfo.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-surface-secondary/20 border border-border-subtle hover:border-accent-cyan/40 hover:bg-surface-secondary/50 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between group"
            aria-label="Visit GitHub profile of Hanmanth Patil (opens in a new tab)"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-surface-secondary border border-border-subtle flex items-center justify-center text-text-secondary group-hover:text-accent-cyan group-hover:border-accent-cyan/40 transition-colors duration-300">
                <BrandIcon name="github" size={17} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                  GitHub
                </span>
                <span className="font-mono text-xs text-text-primary group-hover:text-accent-soft transition-colors duration-300">
                  HanmanthPatil
                </span>
              </div>
            </div>
            <span className="font-mono text-xs text-text-muted group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
              ↗
            </span>
          </a>

          {/* LinkedIn Channel */}
          <a
            href={personalInfo.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-surface-secondary/20 border border-border-subtle hover:border-accent-cyan/40 hover:bg-surface-secondary/50 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between group"
            aria-label="Visit LinkedIn profile of Hanmanth Patil (opens in a new tab)"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-surface-secondary border border-border-subtle flex items-center justify-center text-text-secondary group-hover:text-accent-cyan group-hover:border-accent-cyan/40 transition-colors duration-300">
                <BrandIcon name="linkedin" size={17} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                  LinkedIn
                </span>
                <span className="font-mono text-xs text-text-primary group-hover:text-accent-soft transition-colors duration-300">
                  hanmanthpatil
                </span>
              </div>
            </div>
            <span className="font-mono text-xs text-text-muted group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
              ↗
            </span>
          </a>

          {/* Instagram Channel */}
          <a
            href={personalInfo.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-xl bg-surface-secondary/20 border border-border-subtle hover:border-accent-cyan/40 hover:bg-surface-secondary/50 hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(0,0,0,0.3)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center justify-between group"
            aria-label="Visit Instagram profile of Hanmanth Patil (opens in a new tab)"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-8 h-8 rounded-lg bg-surface-secondary border border-border-subtle flex items-center justify-center text-text-secondary group-hover:text-accent-cyan group-hover:border-accent-cyan/40 transition-colors duration-300">
                <BrandIcon name="instagram" size={17} />
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-text-muted uppercase tracking-wider">
                  Instagram
                </span>
                <span className="font-mono text-xs text-text-primary group-hover:text-accent-soft transition-colors duration-300">
                  {personalInfo.contact.instagramHandle}
                </span>
              </div>
            </div>
            <span className="font-mono text-xs text-text-muted group-hover:text-accent-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
