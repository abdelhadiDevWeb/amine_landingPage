import type { IconName } from "@/components/icons";

const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg`;

export const images = {
  hero: pexels(4744733),
  about: pexels(38763816),
  statsBand: pexels(117025),
  cta: pexels(34806519),
};

export const serviceIds = [
  "traffic-signs",
  "road-markings",
  "safety-equipment",
  "work-zone",
  "smart-traffic",
  "audit-maintenance",
] as const;

export type ServiceId = (typeof serviceIds)[number];

export const serviceMeta: Record<ServiceId, { icon: IconName; image: string }> =
  {
    "traffic-signs": { icon: "signpost", image: pexels(32565840) },
    "road-markings": { icon: "roller", image: pexels(5319519) },
    "safety-equipment": { icon: "barrier", image: pexels(39492586) },
    "work-zone": { icon: "cone", image: pexels(31778820) },
    "smart-traffic": { icon: "trafficLight", image: pexels(39375806) },
    "audit-maintenance": { icon: "wrench", image: pexels(35748439) },
  };

export const projectCategories = [
  "highways",
  "urban",
  "industrial",
  "workZones",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projectIds = [
  "coastal-highway",
  "school-zones",
  "logistics-park",
  "ring-road",
  "city-wayfinding",
  "mountain-pass",
] as const;

export type ProjectId = (typeof projectIds)[number];

export const projectMeta: Record<
  ProjectId,
  { year: string; category: ProjectCategory; image: string }
> = {
  "coastal-highway": { year: "2025", category: "highways", image: pexels(15772227) },
  "school-zones": { year: "2025", category: "urban", image: pexels(5487409) },
  "logistics-park": { year: "2024", category: "industrial", image: pexels(11924297) },
  "ring-road": { year: "2024", category: "workZones", image: pexels(33484882) },
  "city-wayfinding": { year: "2023", category: "urban", image: pexels(37086514) },
  "mountain-pass": { year: "2023", category: "highways", image: pexels(11726358) },
};

export const statIcons: IconName[] = ["award", "signpost", "roller", "users"];

export const advantageIcons: IconName[] = ["shield", "eye", "zap", "clock"];

export const valueIcons: IconName[] = ["shield", "target", "users", "leaf"];

export const processIcons: IconName[] = [
  "clipboard",
  "layers",
  "factory",
  "hardHat",
];

export const milestoneYears = ["2010", "2014", "2018", "2022", "2026"];

export const teamMembers = [
  { initials: "RM", name: "Rachid M." },
  { initials: "LR", name: "Leila R." },
  { initials: "OB", name: "Omar B." },
  { initials: "NK", name: "Nadia K." },
];

export const testimonialAuthors = ["Karim B.", "Sofia M.", "Youssef A."];

export const certificationCodes = ["ISO 9001", "ISO 45001", "EN 12899", "EN 1436"];
