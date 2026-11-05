import { Icon, type IconName } from "@/components/icons";
import { Logo } from "@/components/header";
import { Container, Eyebrow } from "@/components/ui";
import { certificationCodes, serviceIds } from "@/lib/data";
import type { Dictionary } from "@/lib/dictionaries";
import type { Locale } from "@/lib/i18n";
import { navIds, site } from "@/lib/site";

async function CurrentYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export function Footer({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const { footer } = dict;

  const contactItems: {
    icon: IconName;
    label: string;
    value: string;
    href?: string;
    ltr?: boolean;
  }[] = [
    {
      icon: "phone",
      label: footer.callUs,
      value: site.phone,
      href: site.phoneHref,
      ltr: true,
    },
    {
      icon: "mail",
      label: footer.emailUs,
      value: site.email,
      href: `mailto:${site.email}`,
    },
    { icon: "mapPin", label: footer.headOffice, value: dict.site.address },
    { icon: "clock", label: footer.workingHours, value: dict.site.hours },
  ];

  return (
    <footer>
      <section
        id="contact"
        aria-labelledby="contact-title"
        className="relative isolate overflow-hidden bg-gradient-to-b from-white to-primary-50/60 py-24 sm:py-32"
      >
        <div
          className="bg-dot-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,#000,transparent_70%)]"
          aria-hidden="true"
        />
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <Eyebrow>{footer.contactEyebrow}</Eyebrow>
              <h2
                id="contact-title"
                className="mt-5 text-4xl font-bold tracking-tight text-balance text-ink sm:text-5xl"
              >
                {footer.contactTitle}
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                {footer.contactText}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href={`mailto:${site.email}?subject=${encodeURIComponent(footer.quoteSubject)}`}
                  className="inline-flex h-12 items-center gap-2 rounded-full bg-primary-600 px-6 font-semibold text-white shadow-lg shadow-primary-600/25 transition-colors hover:bg-primary-700"
                >
                  {footer.requestQuote}
                  <Icon name="arrowRight" className="size-4" />
                </a>
                <a
                  href={site.phoneHref}
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-slate-200 bg-white px-6 font-semibold text-ink shadow-sm transition-colors hover:border-primary-200 hover:bg-primary-50"
                >
                  <Icon name="phone" className="size-4 text-primary-600" />
                  {footer.callNow}
                </a>
              </div>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {contactItems.map((item) => {
                const body = (
                  <>
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 ring-1 ring-primary-100">
                      <Icon name={item.icon} className="size-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm text-slate-500">
                        {item.label}
                      </span>
                      <span
                        dir={item.ltr ? "ltr" : undefined}
                        className="mt-1 block font-semibold break-words text-ink rtl:text-right"
                      >
                        {item.value}
                      </span>
                    </span>
                  </>
                );
                const classes =
                  "flex h-full items-start gap-4 rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all";
                return (
                  <li key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className={`${classes} hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-lg`}
                      >
                        {body}
                      </a>
                    ) : (
                      <div className={classes}>{body}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </Container>
      </section>

      <div className="bg-ink text-slate-400">
        <Container>
          <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.3fr_1.1fr]">
            <div>
              <Logo
                lang={lang}
                subtitle={dict.site.logoSubtitle}
                homeLabel={dict.header.homeLabel}
                tone="light"
              />
              <p className="mt-6 max-w-sm leading-relaxed">
                {dict.site.description}
              </p>
            </div>

            <nav aria-label={footer.company}>
              <h3 className="text-sm font-semibold text-white">
                {footer.company}
              </h3>
              <ul className="mt-5 space-y-3">
                {navIds.map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="transition-colors hover:text-white"
                    >
                      {dict.nav[id]}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h3 className="text-sm font-semibold text-white">
                {footer.ourServices}
              </h3>
              <ul className="mt-5 space-y-3">
                {serviceIds.map((id) => (
                  <li key={id}>
                    <a
                      href={`#${id}`}
                      className="transition-colors hover:text-white"
                    >
                      {dict.services[id].title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-white">
                {footer.certifications}
              </h3>
              <ul className="mt-5 space-y-4">
                {certificationCodes.map((code, i) => (
                  <li key={code} className="flex items-start gap-3">
                    <Icon
                      name="shield"
                      className="mt-0.5 size-4 shrink-0 text-primary-400"
                    />
                    <span>
                      <span className="block font-semibold text-white" dir="ltr">
                        {code}
                      </span>
                      <span className="block text-sm">
                        {dict.certifications[i]}
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
            <p>
              © <CurrentYear /> {site.name}. {footer.rights}
            </p>
            <p className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-400" />
              {dict.site.emergency}
            </p>
          </div>
        </Container>
      </div>
    </footer>
  );
}
