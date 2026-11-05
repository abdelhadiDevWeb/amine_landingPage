"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Icon } from "@/components/icons";
import { LogoMark } from "@/components/sign-art";
import type { Dictionary } from "@/lib/dictionaries";
import { localeMeta, locales, type Locale } from "@/lib/i18n";
import { navIds, site } from "@/lib/site";

function subscribeToScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

function useScrolled(threshold = 12) {
  return useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > threshold,
    () => false,
  );
}

function useActiveSection() {
  const [active, setActive] = useState<string>(navIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    for (const id of navIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return active;
}

export function Logo({
  lang,
  subtitle,
  homeLabel,
  tone = "dark",
}: {
  lang: Locale;
  subtitle: string;
  homeLabel: string;
  tone?: "light" | "dark";
}) {
  return (
    <Link
      href={`/${lang}`}
      className="flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500"
      aria-label={`${site.name} — ${homeLabel}`}
    >
      <LogoMark className="size-10" />
      <span className="flex flex-col leading-none">
        <span
          className={`text-lg font-bold tracking-tight ${
            tone === "dark" ? "text-ink" : "text-white"
          }`}
        >
          {site.name}
        </span>
        <span
          className={`mt-1 text-xs font-medium ${
            tone === "dark" ? "text-slate-500" : "text-slate-400"
          }`}
        >
          {subtitle}
        </span>
      </span>
    </Link>
  );
}

function LanguageSwitcher({
  lang,
  label,
  overlay = false,
}: {
  lang: Locale;
  label: string;
  overlay?: boolean;
}) {
  return (
    <nav aria-label={label}>
      <ul
        className={`flex items-center gap-0.5 rounded-full p-1 ${
          overlay ? "bg-white/15 backdrop-blur" : "bg-slate-100"
        }`}
      >
        {locales.map((code) => {
          const active = code === lang;
          return (
            <li key={code}>
              <Link
                href={`/${code}`}
                hrefLang={code}
                lang={code}
                aria-current={active ? "page" : undefined}
                title={localeMeta[code].label}
                className={`flex h-8 min-w-9 items-center justify-center rounded-full px-2.5 text-xs font-bold transition-all ${
                  active
                    ? "bg-white text-primary-700 shadow-sm"
                    : overlay
                      ? "text-white/80 hover:text-white"
                      : "text-slate-500 hover:text-ink"
                }`}
              >
                {localeMeta[code].short}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function Header({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Pick<Dictionary, "nav" | "header" | "site">;
}) {
  const scrolled = useScrolled();
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const { nav, header } = dict;

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        solid
          ? "border-b border-slate-200/70 bg-white/85 shadow-[0_10px_30px_-20px_rgb(11_22_48/0.3)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Logo
          lang={lang}
          subtitle={dict.site.logoSubtitle}
          homeLabel={header.homeLabel}
          tone={solid ? "dark" : "light"}
        />

        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {navIds.map((id) => {
              const isActive = active === id;
              return (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "location" : undefined}
                    className={`block rounded-full px-4 py-2 text-[0.95rem] font-medium whitespace-nowrap transition-colors ${
                      solid
                        ? isActive
                          ? "bg-primary-50 text-primary-700"
                          : "text-slate-600 hover:bg-slate-100 hover:text-ink"
                        : isActive
                          ? "bg-white/15 text-white backdrop-blur"
                          : "text-white/80 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {nav[id]}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher
              lang={lang}
              label={header.language}
              overlay={!solid}
            />
          </div>
          <a
            href="#contact"
            className="hidden h-11 items-center gap-2 rounded-full bg-primary-600 px-5 text-sm font-semibold whitespace-nowrap text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-700 md:inline-flex"
          >
            {header.requestQuote}
            <Icon name="arrowRight" className="size-4" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? header.closeMenu : header.openMenu}
            className={`flex size-11 items-center justify-center rounded-full border transition-colors xl:hidden ${
              solid
                ? "border-slate-200 bg-white text-ink hover:bg-slate-50"
                : "border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20"
            }`}
          >
            <Icon name={open ? "close" : "menu"} className="size-5" />
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`grid transition-[grid-template-rows] duration-300 xl:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
        inert={!open}
      >
        <div className="overflow-hidden">
          <nav
            aria-label="Mobile"
            className="mx-5 mb-5 rounded-3xl border border-slate-200 bg-white p-3 shadow-xl sm:mx-8"
          >
            <ul className="flex flex-col">
              {navIds.map((id) => {
                const isActive = active === id;
                return (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "location" : undefined}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium ${
                        isActive
                          ? "bg-primary-50 text-primary-700"
                          : "text-ink hover:bg-slate-50"
                      }`}
                    >
                      {nav[id]}
                      <Icon name="chevronRight" className="size-4 opacity-40" />
                    </a>
                  </li>
                );
              })}
            </ul>
            <div className="mt-3 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 px-2 pt-4">
              <a
                href={site.phoneHref}
                dir="ltr"
                className="flex items-center gap-2 text-sm font-medium text-slate-600"
              >
                <Icon name="phone" className="size-4 text-primary-600" />
                {site.phone}
              </a>
              <div className="sm:hidden">
                <LanguageSwitcher lang={lang} label={header.language} />
              </div>
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 flex h-12 items-center justify-center gap-2 rounded-full bg-primary-600 font-semibold text-white"
            >
              {header.requestQuote}
              <Icon name="arrowRight" className="size-4" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
