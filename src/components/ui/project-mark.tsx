import React from "react";

export type ProjectMarkName =
  | "phishguard"
  | "equiplease"
  | "roadresq"
  | "agri-sahayak"
  | "nearbynest"
  | "phishguard-web"
  | "smart-dustbin"
  | "yatratrack"
  | "roborace"
  | "robosoccer"
  | "line-follower"
  | "maze-solver"
  | "robosumo"
  | "robowar"
  | "obstacle-avoider"
  | "drones";

interface ProjectMarkProps {
  name: ProjectMarkName;
  size?: number;
  className?: string;
}

/**
 * Distinct Geometric Project Marks for Hanmanth Patil's Portfolio.
 *
 * Each mark features a clearly differentiated dominant silhouette:
 * 1. PHISHGUARD 2.0: Medieval pointed defense shield + radar scan
 * 2. EquipLease: Hexagonal industrial gear / interlocking platform
 * 3. RoadResQ: Triangular perspective highway convergence + emergency beacon
 * 4. Agri Sahayak: Organic botanical leaf silhouette + AI neural venation
 * 5. NearByNest: Interconnected 3-node marketplace network cluster
 * 6. PHISHGUARD Web: Desktop browser window frame with tab bar + security lock
 * 7. Smart Dustbin: Tapered receptacle bin + top handle + ultrasonic level wave
 * 8. YatraTrack: Transit railway corridor + vehicle cabin + telemetry ping
 * 9. RoboRace: Aerodynamic wedge racing chassis + wide spoiler + speed streaks
 * 10. RoboSoccer: Horseshoe kicking-bay chassis + forward target soccer ball
 * 11. Line Following: S-curving optical path line + dual-sensor tracking robot
 * 12. Maze Solver: Concentric square labyrinth walls + solved navigation corridor
 * 13. RoboSumo: Circular Dohyo ring + colliding opposing combat wedges
 * 14. RoboWar: Faceted octagonal armor plate + sloped deflector cross-brace
 * 15. Obstacle Avoider: Rover base + forward 60° radar arcs detecting solid block
 * 16. Drones: Quadcopter X-frame + 4 corner rotor rings + heading vector
 *
 * Visual family: Crisp 1.5–1.8px stroke discipline, off-white primary forms,
 * restrained cyan technical accents, aria-hidden, zero dependencies.
 */
export function ProjectMark({
  name,
  size = 22,
  className = "",
}: ProjectMarkProps) {
  switch (name) {
    // 01. PHISHGUARD 2.0 (Dominant silhouette: Pointed Defense Shield)
    case "phishguard":
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
          {/* Pointed Shield Perimeter */}
          <path
            d="M12 2.5L20.5 5.5V11.5C20.5 16.5 12 21.5 12 21.5C12 21.5 3.5 16.5 3.5 11.5V5.5L12 2.5Z"
            className="stroke-text-primary"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Concentric Threat Radar Arc */}
          <path
            d="M7.5 10C9.5 8 14.5 8 16.5 10"
            className="stroke-accent-cyan"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Vertical Interception Needle & Central Core */}
          <line
            x1="12"
            y1="5.5"
            x2="12"
            y2="12.5"
            className="stroke-accent-cyan"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <circle cx="12" cy="13" r="1.6" className="fill-accent-cyan" />
        </svg>
      );

    // 02. EQUIPLEASE (Dominant silhouette: Hexagonal Industrial Gear / Modular Hub)
    case "equiplease":
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
          {/* Hexagonal Outer Perimeter */}
          <path
            d="M12 2.5L20.2 7.2V16.8L12 21.5L3.8 16.8V7.2L12 2.5Z"
            className="stroke-text-primary"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Tri-Radial Mechanical Spokes */}
          <line
            x1="12"
            y1="12"
            x2="12"
            y2="2.5"
            className="stroke-border-subtle"
            strokeWidth="1.5"
          />
          <line
            x1="12"
            y1="12"
            x2="20.2"
            y2="16.8"
            className="stroke-border-subtle"
            strokeWidth="1.5"
          />
          <line
            x1="12"
            y1="12"
            x2="3.8"
            y2="16.8"
            className="stroke-border-subtle"
            strokeWidth="1.5"
          />
          {/* Central Mechanical Hub & Technical Pivot */}
          <circle
            cx="12"
            cy="12"
            r="3"
            className="stroke-accent-cyan"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="12" r="1.2" className="fill-accent-cyan" />
        </svg>
      );

    // 03. ROADRESQ (Dominant silhouette: Triangular Highway Convergence + Emergency Beacon)
    case "roadresq":
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
          {/* Converging Perspective Highway Bounds */}
          <path
            d="M12 5.5L3 21.5H21L12 5.5Z"
            className="stroke-text-primary"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Dashed Center Guidance Corridor */}
          <line
            x1="12"
            y1="11"
            x2="12"
            y2="14"
            className="stroke-accent-cyan"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <line
            x1="12"
            y1="17"
            x2="12"
            y2="20.5"
            className="stroke-accent-cyan"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Emergency Apex Beacon / Assistance Signal */}
          <path
            d="M12 1.5L14 3.5L12 5.5L10 3.5Z"
            className="fill-accent-cyan stroke-accent-cyan"
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </svg>
      );

    // 04. AGRI SAHAYAK (Dominant silhouette: Organic Botanical Leaf + AI Venation)
    case "agri-sahayak":
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
          {/* Continuous Botanical Leaf Silhouette */}
          <path
            d="M12 2.5C18.5 6 20 14 12 21.5C4 14 5.5 6 12 2.5Z"
            className="stroke-text-primary"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Central Stem Axis */}
          <line
            x1="12"
            y1="5.5"
            x2="12"
            y2="19"
            className="stroke-accent-cyan"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Precision Sensor Venation */}
          <path
            d="M12 9.5L8.5 7.5M12 13L15.5 11M12 16L9 14.5"
            className="stroke-accent-cyan"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          {/* Apex Agronomic Sensor Node */}
          <circle cx="12" cy="4.5" r="1.2" className="fill-accent-cyan" />
        </svg>
      );

    // 05. NEARBYNEST (NBN) (Dominant silhouette: 3-Node Distributed Network Cluster)
    case "nearbynest":
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
          {/* Distributed Inter-Node Channels */}
          <line
            x1="12"
            y1="6.5"
            x2="5.5"
            y2="16.5"
            className="stroke-border-subtle"
            strokeWidth="1.5"
          />
          <line
            x1="12"
            y1="6.5"
            x2="18.5"
            y2="16.5"
            className="stroke-border-subtle"
            strokeWidth="1.5"
          />
          <line
            x1="5.5"
            y1="16.5"
            x2="18.5"
            y2="16.5"
            className="stroke-border-subtle"
            strokeWidth="1.5"
          />
          {/* Three Peripheral Marketplace Nodes */}
          <circle
            cx="12"
            cy="5"
            r="2.5"
            className="stroke-text-primary fill-surface-secondary"
            strokeWidth="1.8"
          />
          <circle
            cx="5"
            cy="17"
            r="2.5"
            className="stroke-text-primary fill-surface-secondary"
            strokeWidth="1.8"
          />
          <circle
            cx="19"
            cy="17"
            r="2.5"
            className="stroke-text-primary fill-surface-secondary"
            strokeWidth="1.8"
          />
          {/* Central Exchange Nexus */}
          <circle cx="12" cy="13" r="1.6" className="fill-accent-cyan" />
        </svg>
      );

    // 06. PHISHGUARD WEB/BROWSER (Dominant silhouette: Desktop Browser Window + Lock)
    case "phishguard-web":
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
          {/* Wide Desktop Browser Outer Window */}
          <rect
            x="2.5"
            y="4"
            width="19"
            height="16"
            rx="2.5"
            className="stroke-text-primary"
            strokeWidth="1.8"
          />
          {/* Browser Header Tab Bar Divider */}
          <line
            x1="2.5"
            y1="9"
            x2="21.5"
            y2="9"
            className="stroke-border-subtle"
            strokeWidth="1.5"
          />
          {/* Window Control Buttons */}
          <circle cx="5.5" cy="6.5" r="0.8" className="fill-text-secondary" />
          <circle cx="8" cy="6.5" r="0.8" className="fill-text-secondary" />
          <circle cx="10.5" cy="6.5" r="0.8" className="fill-text-secondary" />
          {/* Integrated Browser Security Shackle & Lock Matrix */}
          <path
            d="M10 13V11.5C10 10.4 10.9 9.5 12 9.5C13.1 9.5 14 10.4 14 11.5V13"
            className="stroke-accent-cyan"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <rect
            x="9"
            y="13"
            width="6"
            height="4.5"
            rx="1"
            className="stroke-accent-cyan fill-surface-secondary"
            strokeWidth="1.5"
          />
          <circle cx="12" cy="15.2" r="0.8" className="fill-accent-cyan" />
        </svg>
      );

    // 07. SMART DUSTBIN (Dominant silhouette: Tapered Receptacle Bin + Ultrasonic Waves)
    case "smart-dustbin":
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
          {/* Top Lid Handle & Upper Rim */}
          <path
            d="M9 4.5H15M3.5 6.5H20.5"
            className="stroke-text-primary"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Tapered Waste Container Body */}
          <path
            d="M5.5 6.5L7 20H17L18.5 6.5"
            className="stroke-text-primary"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Downward Ultrasonic Acoustic Waves */}
          <path
            d="M9 10C10 11 14 11 15 10"
            className="stroke-accent-cyan"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M8.5 14H15.5"
            className="stroke-accent-cyan"
            strokeWidth="1.5"
            strokeDasharray="1.5 2"
            strokeLinecap="round"
          />
          {/* IoT Telemetry Transceiver Core */}
          <circle cx="12" cy="8.5" r="1.2" className="fill-accent-cyan" />
        </svg>
      );

    // 08. YATRATRACK (Dominant silhouette: Transit Railway Corridor + Vehicle Cabin)
    case "yatratrack":
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
          {/* Perspective Transit Corridor Tracks */}
          <path
            d="M4.5 21.5L8.5 2.5M19.5 21.5L15.5 2.5"
            className="stroke-border-subtle"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <line
            x1="6.5"
            y1="16"
            x2="17.5"
            y2="16"
            className="stroke-border-subtle"
            strokeWidth="1.4"
          />
          {/* Streamlined Transit Cabin */}
          <rect
            x="8.5"
            y="6.5"
            width="7"
            height="10.5"
            rx="2"
            className="stroke-text-primary fill-surface-secondary"
            strokeWidth="1.8"
          />
          <line
            x1="10"
            y1="9.5"
            x2="14"
            y2="9.5"
            className="stroke-text-primary"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Active GPS/Telemetry Wave & Transponder */}
          <path
            d="M10 4C11 3.2 13 3.2 14 4"
            className="stroke-accent-cyan"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <circle cx="12" cy="5.2" r="1" className="fill-accent-cyan" />
        </svg>
      );

    // 09. ROBORACE (Dominant silhouette: Aerodynamic Wedge Racing Chassis + Spoiler)
    case "roborace":
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
          {/* Aerodynamic Speed Wedge Nose */}
          <path
            d="M12 2.5L15.5 13H8.5L12 2.5Z"
            className="stroke-text-primary fill-surface-secondary"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          {/* Wide Rear Wing / Downforce Spoiler */}
          <rect
            x="4"
            y="17"
            width="16"
            height="3.5"
            rx="1"
            className="stroke-text-primary"
            strokeWidth="1.6"
          />
          {/* Exposed Competition Outboard Wheels */}
          <rect
            x="3"
            y="10.5"
            width="2.5"
            height="5"
            rx="0.8"
            className="fill-text-secondary"
          />
          <rect
            x="18.5"
            y="10.5"
            width="2.5"
            height="5"
            rx="0.8"
            className="fill-text-secondary"
          />
          {/* Forward Speed Vector Line */}
          <line
            x1="12"
            y1="13"
            x2="12"
            y2="17"
            className="stroke-accent-cyan"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="7.5" r="1.2" className="fill-accent-cyan" />
        </svg>
      );

    // 10. ROBOSOCCER (Dominant silhouette: Horseshoe Kicking Bay + Ball Target)
    case "robosoccer":
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
          {/* Horseshoe Omni-Directional Chassis with Forward Striker Mouth */}
          <path
            d="M8 7C5 8.5 4.5 13 6 16.5C7.5 19.8 11.5 21 15 20.2C18.5 19.5 20 16 19.5 12.5C19 9 17 7 14.5 7"
            className="stroke-text-primary"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Forward Soccer Ball Target */}
          <circle
            cx="12.5"
            cy="5"
            r="3"
            className="stroke-accent-cyan"
            strokeWidth="1.6"
          />
          <circle cx="12.5" cy="5" r="1.2" className="fill-accent-cyan" />
          {/* Side Wheel Actuators */}
          <line
            x1="3.5"
            y1="11"
            x2="3.5"
            y2="15"
            className="stroke-border-subtle"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <line
            x1="20.5"
            y1="11"
            x2="20.5"
            y2="15"
            className="stroke-border-subtle"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
        </svg>
      );

    // 11. LINE FOLLOWING ROBOT (Dominant silhouette: S-Curving Path + Dual Sensor Carriage)
    case "line-follower":
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
          {/* Continuous Optical Trajectory Track (S-Curve) */}
          <path
            d="M4.5 21.5C4.5 16 19.5 16 19.5 8C19.5 3.5 15.5 2.5 12 2.5"
            className="stroke-border-subtle"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Autonomous Mobile Rover Carriage */}
          <rect
            x="8"
            y="9"
            width="8"
            height="8"
            rx="1.5"
            className="stroke-text-primary fill-surface-secondary"
            strokeWidth="1.8"
          />
          {/* Dual Infrared Photodiode Sensor Array */}
          <circle cx="9.5" cy="7.5" r="1.2" className="fill-accent-cyan" />
          <circle cx="14.5" cy="7.5" r="1.2" className="fill-accent-cyan" />
          <line
            x1="8"
            y1="13"
            x2="16"
            y2="13"
            className="stroke-accent-cyan"
            strokeWidth="1.4"
          />
        </svg>
      );

    // 12. MAZE SOLVER (Dominant silhouette: Concentric Square Labyrinth + Solved Route)
    case "maze-solver":
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
          {/* Outer Maze Perimeter Walls with Exit Portals */}
          <path
            d="M3 21H21V3H3V16"
            className="stroke-text-primary"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Internal Labyrinth Baffles */}
          <path
            d="M7 7H17V12H11V17H17"
            className="stroke-border-subtle"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 11V17"
            className="stroke-border-subtle"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Solved Navigation Trajectory in Cyan */}
          <path
            d="M3 18.5H5V9.5H13.5V14.5H15"
            className="stroke-accent-cyan"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="15" cy="14.5" r="1.2" className="fill-accent-cyan" />
        </svg>
      );

    // 13. ROBOSUMO (Dominant silhouette: Circular Dohyo Arena + Opposing Combat Wedges)
    case "robosumo":
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
          {/* Circular Dohyo Arena Perimeter */}
          <circle
            cx="12"
            cy="12"
            r="9.5"
            className="stroke-border-subtle"
            strokeWidth="1.6"
          />
          {/* Left Combatant Heavy Wedge */}
          <path
            d="M5.5 8L10.5 12L5.5 16Z"
            className="stroke-text-primary fill-surface-secondary"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          {/* Right Opposing Combatant Wedge */}
          <path
            d="M18.5 8L13.5 12L18.5 16Z"
            className="stroke-accent-cyan fill-accent-cyan/15"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
          {/* Tawara Center Clashing Line */}
          <line
            x1="12"
            y1="8.5"
            x2="12"
            y2="15.5"
            className="stroke-accent-cyan"
            strokeWidth="1.5"
            strokeDasharray="1.5 1.5"
          />
        </svg>
      );

    // 14. ROBOWAR (Dominant silhouette: Faceted Octagonal Armor Shell + X-Brace)
    case "robowar":
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
          {/* Heavy Armored Octagonal Chassis */}
          <path
            d="M12 2.5L20.5 7.5V16.5L12 21.5L3.5 16.5V7.5L12 2.5Z"
            className="stroke-text-primary"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Deflection Angle Cross-Bracing */}
          <line
            x1="6"
            y1="9.5"
            x2="18"
            y2="14.5"
            className="stroke-border-subtle"
            strokeWidth="1.4"
          />
          <line
            x1="6"
            y1="14.5"
            x2="18"
            y2="9.5"
            className="stroke-border-subtle"
            strokeWidth="1.4"
          />
          {/* Center Hardened Core Housing */}
          <rect
            x="9.5"
            y="9.5"
            width="5"
            height="5"
            rx="1"
            className="stroke-accent-cyan fill-accent-cyan/15"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="12" r="1.2" className="fill-accent-cyan" />
        </svg>
      );

    // 15. OBSTACLE AVOIDER (Dominant silhouette: Rover Base + 60° Diverging Radar Arcs + Ahead Block)
    case "obstacle-avoider":
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
          {/* Ahead Solid Obstacle Block */}
          <rect
            x="8.5"
            y="2.5"
            width="7"
            height="3.2"
            rx="0.8"
            className="fill-text-primary stroke-text-primary"
            strokeWidth="1.4"
          />
          {/* Mobile Rover Chassis at Base */}
          <rect
            x="7.5"
            y="15.5"
            width="9"
            height="5.5"
            rx="1.5"
            className="stroke-text-primary fill-surface-secondary"
            strokeWidth="1.8"
          />
          {/* Outboard Drive Wheels */}
          <rect
            x="5.5"
            y="16.5"
            width="1.6"
            height="3.5"
            rx="0.5"
            className="fill-text-secondary"
          />
          <rect
            x="16.9"
            y="16.5"
            width="1.6"
            height="3.5"
            rx="0.5"
            className="fill-text-secondary"
          />
          {/* Dual Ultrasonic Transceiver Eyes */}
          <circle cx="10" cy="14.5" r="1.2" className="fill-accent-cyan" />
          <circle cx="14" cy="14.5" r="1.2" className="fill-accent-cyan" />
          {/* Forward Range-Finding Radar Pulses */}
          <path
            d="M9 11C10.5 9.8 13.5 9.8 15 11"
            className="stroke-accent-cyan"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            d="M7.5 7.8C10 6.2 14 6.2 16.5 7.8"
            className="stroke-accent-cyan"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );

    // 16. DRONES (Dominant silhouette: Quadcopter X-Frame + 4 Corner Rotor Discs + Heading Vector)
    case "drones":
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
          {/* Quadcopter Structural Diagonal Cross-Arms (X-Frame) */}
          <line
            x1="5.5"
            y1="5.5"
            x2="18.5"
            y2="18.5"
            className="stroke-border-subtle"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <line
            x1="5.5"
            y1="18.5"
            x2="18.5"
            y2="5.5"
            className="stroke-border-subtle"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Four Corner Rotor/Propeller Rings */}
          <circle
            cx="5"
            cy="5"
            r="2.5"
            className="stroke-text-primary fill-surface-secondary"
            strokeWidth="1.6"
          />
          <circle
            cx="19"
            cy="5"
            r="2.5"
            className="stroke-text-primary fill-surface-secondary"
            strokeWidth="1.6"
          />
          <circle
            cx="5"
            cy="19"
            r="2.5"
            className="stroke-text-primary fill-surface-secondary"
            strokeWidth="1.6"
          />
          <circle
            cx="19"
            cy="19"
            r="2.5"
            className="stroke-text-primary fill-surface-secondary"
            strokeWidth="1.6"
          />
          {/* Central Avionics Hub */}
          <circle
            cx="12"
            cy="12"
            r="2.2"
            className="stroke-accent-cyan fill-surface-secondary"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="12" r="1.1" className="fill-accent-cyan" />
          {/* Forward Flight Heading Arrow */}
          <path
            d="M12 9.5V2.5M10 4.5L12 2.5L14 4.5"
            className="stroke-accent-cyan"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
