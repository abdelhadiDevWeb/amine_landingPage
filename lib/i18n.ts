export const locales = ["fr", "en", "ar"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export const localeMeta: Record<
  Locale,
  { label: string; short: string; dir: "ltr" | "rtl" }
> = {
  fr: { label: "Français", short: "FR", dir: "ltr" },
  en: { label: "English", short: "EN", dir: "ltr" },
  ar: { label: "العربية", short: "ع", dir: "rtl" },
};
