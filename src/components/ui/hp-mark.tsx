import React from "react";

interface HPMarkProps {
  className?: string;
  size?: number;
  showDot?: boolean;
}

/**
 * Minimalist geometric monogram for Hanmanth Patil (HP).
 * Crafted with architectural precision, balanced stems, and an optional subtle cyan anchor dot.
 */
export function HPMark({ className = "", size = 28, showDot = true }: HPMarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none ${className}`}
      aria-hidden="true"
    >
      {/* Outer subtle containment box */}
      <rect
        x="1"
        y="1"
        width="30"
        height="30"
        rx="7"
        className="stroke-border-subtle"
        strokeWidth="1.2"
      />

      {/* Monogram geometry: Left H-stem, crossbar, shared stem, and P-bowl */}
      <g
        className="stroke-text-primary"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* H - Left Stem */}
        <path d="M8.5 8V24" />

        {/* H - Crossbar */}
        <path d="M8.5 16H16.5" />

        {/* P - Vertical Stem (anchors right side of H) */}
        <path d="M16.5 8V24" />

        {/* P - Geometric Upper Bowl */}
        <path d="M16.5 8H21C23.2 8 24.5 9.5 24.5 12C24.5 14.5 23.2 16 21 16H16.5" />
      </g>

      {/* Restrained Cyan Accent Anchor */}
      {showDot && (
        <circle
          cx="22.5"
          cy="21.5"
          r="1.5"
          className="fill-accent-cyan"
        />
      )}
    </svg>
  );
}
