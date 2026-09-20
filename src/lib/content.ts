/**
 * Verified single source of truth for Hanmanth Patil's portfolio content.
 * Extracted directly from reference/master-profile.md.
 * No data invented, exaggerated, or inferred.
 */

export const personalInfo = {
  name: "Hanmanth Patil",
  headline: "Think Deeper. Build Smarter. Go Further.",
  profileHeadline:
    "Building AI that thinks. Systems that move. Products that matter.",
  profileIntro:
    "I’m a B.E. student in AI&ML, building practical systems across AI, software, robotics, and digital product design.",
  role: "AI/ML Undergrad & Product Builder",
  location: "Kalaburagi, Karnataka, India",
  education: {
    degree: "B.E. in Artificial Intelligence & Machine Learning",
    institution: "Shetty Institute of Technology, Kalaburagi, 585105",
    currentStatus: "7th Semester",
    standing:
      "2nd/3rd consecutive topper of the college for the last six semesters, with an average of 9 CGPA",
    graduationYear: "2027",
  },
  contactHeadline:
    "Got a problem worth solving? Let’s solve it and engineer the intelligence behind it.",
  contactIntro: "Open to building in AI, robotics, research, and software.",
  contact: {
    email: "hanmanthpatil453@gmail.com",
    phone: "8904331655",
    github: "https://github.com/HanmanthPatil",
    linkedin: "https://linkedin.com/in/hanmanthpatil",
    instagram: "https://instagram.com/hanmanth_patil._",
    instagramHandle: "hanmanth_patil._",
  },
} as const;

export const coreDomains = [
  {
    label: "Machine Learning & AI",
    detail:
      "Machine learning, NLP, predictive modeling, and applied AI systems.",
  },
  {
    label: "Software Engineering",
    detail:
      "Web applications, APIs, development workflows, and containerized systems.",
  },
  {
    label: "Autonomous Robotics",
    detail:
      "Competitive robotics, sensor-driven systems, line followers, and soccer bots.",
  },
  {
    label: "UI/UX & Product Design",
    detail:
      "Figma-based interfaces, prototyping, design systems, and human-centered product design.",
  },
] as const;

export interface ProjectItem {
  id: string;
  ordinal: string;
  name: string;
  category: string;
  group: "software" | "hardware" | "robotics";
  description?: string;
  mark: import("@/components/ui/project-mark").ProjectMarkName;
  featured?: boolean;
  tag?: string;
}

export const projectCategories = [
  {
    id: "software",
    ordinal: "01",
    label: "SOFTWARE / AI / ML / WEB",
  },
  {
    id: "hardware",
    ordinal: "02",
    label: "HARDWARE / IoT / EMBEDDED / SUSTAINABLE ENGINEERING",
  },
  {
    id: "robotics",
    ordinal: "03",
    label: "ROBOTICS",
  },
] as const;

export const projects: readonly ProjectItem[] = [
  // CATEGORY 01: SOFTWARE / AI / ML / WEB
  {
    id: "phishguard",
    ordinal: "01",
    name: "PHISHGUARD 2.0",
    category: "AI + Cybersecurity + Web",
    group: "software",
    description:
      "An AI-powered cybersecurity platform that analyzes URLs, messages, files, and images to detect phishing and malicious content and generate a centralized risk assessment.",
    mark: "phishguard",
  },
  {
    id: "equiplease",
    ordinal: "02",
    name: "EquipLease",
    category: "Industrial Equipment Rental",
    group: "software",
    description:
      "An industrial equipment rental platform that connects equipment owners with renters, enabling equipment discovery, rental management, and direct transactions.",
    mark: "equiplease",
  },
  {
    id: "roadresq",
    ordinal: "03",
    name: "RoadResQ",
    category: "Intelligent Roadside Assistance",
    group: "software",
    description:
      "An intelligent roadside assistance platform that connects vehicle owners with the right mechanic based on expertise, equipment, availability, and real-time assistance needs.",
    mark: "roadresq",
  },
  {
    id: "agri-sahayak",
    ordinal: "04",
    name: "Agri Sahayak",
    category: "AI + Agricultural Assistance",
    group: "software",
    description:
      "An AI-powered agricultural platform combining plant disease diagnosis with a smart farming assistant to help farmers make informed crop, treatment, and farming decisions.",
    mark: "agri-sahayak",
  },
  {
    id: "nearbynest",
    ordinal: "05",
    name: "NearByNest (NBN)",
    category: "Local Buyers Marketplace",
    group: "software",
    description:
      "A nearby buyers marketplace that connects farmers and local sellers with verified buyers, enabling direct communication and better access to local markets.",
    mark: "nearbynest",
  },
  {
    id: "phishguard-web",
    ordinal: "06",
    name: "PHISHGUARD Web/Browser Security Architecture",
    category: "Web & Browser Security Architecture",
    group: "software",
    description:
      "A web-based security architecture for PHISHGUARD that integrates multiple threat-analysis modules into a unified interface for real-time phishing and risk assessment.",
    mark: "phishguard-web",
  },

  // CATEGORY 02: HARDWARE / IoT / EMBEDDED / SUSTAINABLE ENGINEERING
  {
    id: "smart-dustbin",
    ordinal: "07",
    name: "Smart Dustbin",
    category: "IoT + Waste Management",
    group: "hardware",
    description:
      "An IoT-enabled waste-management system designed to monitor waste levels and support smarter, more efficient waste collection.",
    mark: "smart-dustbin",
  },
  {
    id: "yatratrack",
    ordinal: "08",
    name: "YatraTrack",
    category: "Transit Tracking & Mobility",
    group: "hardware",
    description:
      "A rural and urban bus-tracking system designed to provide real-time bus location and tracking information for more efficient and accessible public transportation; selected for NAIN.",
    mark: "yatratrack",
    tag: "Selected for NAIN",
  },

  // CATEGORY 03: ROBOTICS
  {
    id: "roborace",
    ordinal: "09",
    name: "RoboRace",
    category: "Robotics",
    group: "robotics",
    mark: "roborace",
  },
  {
    id: "robosoccer",
    ordinal: "10",
    name: "RoboSoccer",
    category: "Robotics",
    group: "robotics",
    mark: "robosoccer",
  },
  {
    id: "line-follower",
    ordinal: "11",
    name: "Line Following Robot",
    category: "Robotics",
    group: "robotics",
    mark: "line-follower",
  },
  {
    id: "maze-solver",
    ordinal: "12",
    name: "Maze Solver",
    category: "Robotics",
    group: "robotics",
    mark: "maze-solver",
  },
  {
    id: "robosumo",
    ordinal: "13",
    name: "RoboSumo",
    category: "Robotics",
    group: "robotics",
    mark: "robosumo",
  },
  {
    id: "robowar",
    ordinal: "14",
    name: "RoboWar",
    category: "Robotics",
    group: "robotics",
    mark: "robowar",
  },
  {
    id: "obstacle-avoider",
    ordinal: "15",
    name: "Obstacle Avoider",
    category: "Robotics",
    group: "robotics",
    mark: "obstacle-avoider",
  },
  {
    id: "drones",
    ordinal: "16",
    name: "Drones",
    category: "Robotics",
    group: "robotics",
    mark: "drones",
  },
] as const;

// Backward-compatibility alias if referenced
export const coreProjects = projects;

export const majorAchievements = [
  {
    ordinal: "01",
    title: "1st Prize — National Robo Soccer",
    venue: "NIT Trichy",
    category: "Autonomous Robotics",
    description: "First place in national-level competitive robotics championship.",
  },
  {
    ordinal: "02",
    title: "1st Prize — UI/UX Design Challenge",
    venue: "TECH X / ComedKares",
    category: "Product Design",
    description: "First place for the design architecture of EquipLease with Team Tech Tribes.",
  },
  {
    ordinal: "03",
    title: "2nd Prize — Autonomous Line Following",
    venue: "NIT Karnataka (Surathkal)",
    category: "Autonomous Robotics",
    description: "Second place in national-level autonomous navigation robotics event.",
  },
  {
    ordinal: "04",
    title: "3rd Prize — Idea Pitching Competition",
    venue: "INEX – Tumkur",
    category: "Idea Pitching",
    description: "Third place recognition in idea pitching competition.",
  },
] as const;

export interface EventLedgerItem {
  event: string;
  institution: string;
  category: string;
  result: string;
  team?: string;
  project?: string;
  year?: string;
}

export const eventsLedger: readonly EventLedgerItem[] = [
  {
    event: "TECH X",
    institution: "ComedKares",
    category: "UI/UX Design Challenge",
    team: "Tech Tribes",
    project: "EquipLease",
    result: "1st Prize",
  },
  {
    event: "!!ENGINEER'24!!",
    institution: "NIT Karnataka, Surathkal",
    category: "Line Following Bot Competition",
    team: "Blue Beetles",
    result: "2nd Prize",
  },
  {
    event: "TechFusionn'24",
    institution: "Rajarajeshwari College of Engineering, Bengaluru",
    category: "Line Following Bot Competition",
    team: "Blue Beetles",
    result: "1st Prize",
  },
  {
    event: "TechFusionn'24",
    institution: "Rajarajeshwari College of Engineering, Bengaluru",
    category: "Line Following Bot Competition",
    team: "Robusta",
    result: "2nd Prize",
  },
  {
    event: "TechFusionn'24",
    institution: "Rajarajeshwari College of Engineering, Bengaluru",
    category: "RoboRace Bot Competition",
    team: "Blue Beetles",
    result: "3rd Prize",
  },
  {
    event: "Robo Soccer",
    institution: "NIT Trichy",
    category: "Robo Soccer",
    team: "Robotics Team",
    result: "1st Prize",
  },
  {
    event: "INEX – Tumkur",
    institution: "INEX – Tumkur",
    category: "Idea Pitching Competition",
    team: "Team / Project",
    result: "3rd Prize",
  },
  {
    event: "AVIRAT ’25",
    institution: "SBR College, Kalaburagi",
    category: "RoboRace",
    team: "Robotics Team",
    result: "2nd Prize",
  },
  {
    event: "SIH Internal Hackathon 2026",
    institution: "SIT, Kalaburagi",
    category: "Smart India Hackathon Internal Hackathon",
    team: "Team / Project",
    result: "1st Prize",
  },
] as const;
