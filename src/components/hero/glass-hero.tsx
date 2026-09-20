"use client";

import React from "react";
import { usePointerReveal } from "@/hooks/use-pointer-reveal";
import { HeroTypography } from "./hero-typography";

export function GlassHero() {
  // Attach pointer reveal hook
  const containerRef = usePointerReveal({
    desktopRadius: 175,
    mobileRadius: 115,
    posLerp: 0.14,
    radiusLerp: 0.12,
  });

  return (
    <section
      id="hero"
      ref={containerRef}
      aria-label="Hero Section"
      className="relative w-full h-[100dvh] min-h-[640px] overflow-hidden bg-background select-none cursor-default touch-pan-y isolate flex items-center"
      style={
        {
          "--reveal-x": "-999px",
          "--reveal-y": "-999px",
          "--reveal-radius": "0px",
        } as React.CSSProperties
      }
    >
      {/* LAYER 1: BASE PORTRAIT */}
      <picture className="absolute inset-0 w-full h-full pointer-events-none select-none animate-hero-fade">
        <source
          media="(max-width: 767px)"
          srcSet="/images/Base_image_mobile.png"
        />
        <img
          src="/images/Base_image_desktop.png"
          alt="Hanmanth Patil — Base Portrait"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="sync"
        />
      </picture>

      {/* LAYER 2: LIQUID-GLASS REVEAL PORTRAIT WITH CSS RADIAL MASK */}
      <picture
        className="absolute inset-0 w-full h-full pointer-events-none select-none reveal-mask animate-hero-fade"
        aria-hidden="true"
      >
        <source
          media="(max-width: 767px)"
          srcSet="/images/Reveal_image_mobile.png"
        />
        <img
          src="/images/Reveal_image_desktop.png"
          alt=""
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="sync"
        />
      </picture>

      {/* LAYER 3: SPECULAR LENS RIM HIGHLIGHT (Subtle refractive glass edge) */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none select-none reveal-lens-rim"
        aria-hidden="true"
      />

      {/* LAYER 4: EDITORIAL VIGNETTE & CONTRAST GRADIENTS */}
      {/* Left-side typography contrast gradient */}
      <div
        className="absolute inset-0 w-full h-full pointer-events-none bg-gradient-to-r from-background/90 via-background/40 to-transparent md:w-[60%]"
        aria-hidden="true"
      />
      {/* Bottom section blend gradient */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none bg-gradient-to-t from-background via-background/60 to-transparent"
        aria-hidden="true"
      />
      {/* Top subtle masthead protection */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none bg-gradient-to-b from-background/80 to-transparent"
        aria-hidden="true"
      />

      {/* LAYER 5: EDITORIAL TYPOGRAPHY & HERO CONTENT */}
      <div className="relative w-full max-w-7xl mx-auto h-full flex items-center">
        <HeroTypography />
      </div>

      {/* LAYER 6: MINIMAL INTERACTION HINT (Subtle technical indicator) */}
      <div className="absolute bottom-8 right-8 md:right-12 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-pill bg-surface-secondary/70 backdrop-blur-md border border-border-subtle text-[11px] font-mono text-text-secondary pointer-events-none">
        <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
        <span className="tracking-wider">EXPLORE PORTRAIT [CURSOR / TOUCH]</span>
      </div>
    </section>
  );
}
