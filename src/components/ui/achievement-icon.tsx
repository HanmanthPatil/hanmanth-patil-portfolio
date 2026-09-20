import React from "react";

export type AchievementType = "gold" | "silver" | "bronze" | "research";

interface AchievementIconProps {
  type: AchievementType;
  size?: number;
  className?: string;
}

/**
 * Maps event result strings to their corresponding achievement icon category.
 */
export function getAchievementType(result: string): AchievementType {
  const lower = result.toLowerCase();
  if (lower.includes("runner-up") || lower.includes("2nd")) return "silver";
  if (lower.includes("1st") || lower.includes("gold")) return "gold";
  if (lower.includes("3rd") || lower.includes("bronze")) return "bronze";
  return "research";
}

/**
 * Minimalist geometric achievement medal and research icon component.
 * Features restrained metallic tones (antique gold, technical silver, warm bronze)
 * and a clean document glyph for scholarly publications.
 */
export function AchievementIcon({
  type,
  size = 20,
  className = "",
}: AchievementIconProps) {
  switch (type) {
    case "gold":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block select-none shrink-0 ${className}`}
          aria-hidden="true"
        >
          {/* Medal Suspension Ribbon */}
          <path
            d="M7.5 3H16.5M8 3L10.5 9M16 3L13.5 9"
            stroke="#969CA6"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Circular Medal Body — Restrained Warm Gold */}
          <circle
            cx="12"
            cy="15"
            r="6"
            stroke="#D4AF37"
            strokeWidth="1.6"
            fill="rgba(212, 175, 55, 0.08)"
          />
          {/* Central 1st Place Glyph */}
          <path
            d="M11 13.2L12 12.4V17.5M10.5 17.5H13.5"
            stroke="#E5B869"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );

    case "silver":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block select-none shrink-0 ${className}`}
          aria-hidden="true"
        >
          {/* Medal Suspension Ribbon */}
          <path
            d="M7.5 3H16.5M8 3L10.5 9M16 3L13.5 9"
            stroke="#969CA6"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Circular Medal Body — Technical Silver */}
          <circle
            cx="12"
            cy="15"
            r="6"
            stroke="#BAC2CC"
            strokeWidth="1.6"
            fill="rgba(186, 194, 204, 0.08)"
          />
          {/* Central 2nd Place Dual Roman Glyph */}
          <path
            d="M10.5 13V17M13.5 13V17"
            stroke="#D0D6DF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case "bronze":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block select-none shrink-0 ${className}`}
          aria-hidden="true"
        >
          {/* Medal Suspension Ribbon */}
          <path
            d="M7.5 3H16.5M8 3L10.5 9M16 3L13.5 9"
            stroke="#969CA6"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Circular Medal Body — Antique Warm Bronze */}
          <circle
            cx="12"
            cy="15"
            r="6"
            stroke="#C88A58"
            strokeWidth="1.6"
            fill="rgba(200, 138, 88, 0.08)"
          />
          {/* Central 3rd Place Triple Roman Glyph */}
          <path
            d="M9.5 13V17M12 13V17M14.5 13V17"
            stroke="#DC9F6E"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );

    case "research":
    default:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`inline-block select-none shrink-0 ${className}`}
          aria-hidden="true"
        >
          {/* Research Document Sheet with Corner Fold */}
          <path
            d="M6 3.5H14L18 7.5V20.5H6V3.5Z"
            stroke="#969CA6"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="rgba(150, 156, 166, 0.06)"
          />
          <path
            d="M14 3.5V7.5H18"
            stroke="#969CA6"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Scholarly Content Lines with Soft Cyan Analytical Accent */}
          <path
            d="M9 11.5H15M9 14.5H15"
            stroke="#969CA6"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path
            d="M9 17.5H13"
            className="stroke-accent-cyan"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
  }
}
