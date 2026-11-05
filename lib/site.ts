export const site = {
  name: "SignalPro",
  phone: "+1 (555) 014-2290",
  phoneHref: "tel:+15550142290",
  email: "contact@signalpro.example",
} as const;

export const navIds = [
  "home",
  "services",
  "projects",
  "about",
  "contact",
] as const;

export type NavId = (typeof navIds)[number];
