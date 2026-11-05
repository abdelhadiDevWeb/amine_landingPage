import Image from "next/image";
import { notFound } from "next/navigation";
import { Icon } from "@/components/icons";
import { ProjectsGrid } from "@/components/projects-grid";
import {
  ButtonLink,
  Container,
  Eyebrow,
  SectionHeading,
} from "@/components/ui";
import {
  advantageIcons,
  certificationCodes,
  images,
  milestoneYears,
  processIcons,
  projectIds,
  projectMeta,
  serviceIds,
  serviceMeta,
  statIcons,
  teamMembers,
  testimonialAuthors,
  valueIcons,
} from "@/lib/data";
import { getDictionary, type Dictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n";

type Props = { dict: Dictionary };

function Stars({ label }: { label: string }) {
  return (
    <div className="flex gap-0.5 text-amber-400" role="img" aria-label={label}>
      {Array.from({ length: 5 }, (_, s) => (
        <Icon key={s} name="star" className="size-4 fill-current" />
      ))}
    </div>
  );
}

function Hero({ dict }: Props) {
  const { hero } = dict;
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-ink pt-32 pb-16 lg:pt-40"
    >
      <Image
        src={images.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="motion-safe:animate-ken-burns -z-20 object-cover"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/65 to-ink/25 rtl:bg-gradient-to-l"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-ink/60 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-72 bg-gradient-to-t from-ink/80 to-transparent"
        aria-hidden="true"
      />

      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div className="motion-safe:animate-fade-up max-w-2xl">
            <Eyebrow tone="dark">{hero.badge}</Eyebrow>
            <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-balance text-white sm:text-5xl lg:text-[4rem] lg:leading-[1.08]">
              {hero.titleStart}{" "}
              <span className="bg-gradient-to-r from-primary-400 to-primary-300 bg-clip-text text-transparent">
                {hero.titleHighlight}
              </span>{" "}
              {hero.titleEnd}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-slate-200">
              {hero.text}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="#contact" arrow>
                {hero.ctaPrimary}
              </ButtonLink>
              <ButtonLink href="#services" variant="ghostLight">
                {hero.ctaSecondary}
              </ButtonLink>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {teamMembers.map((member) => (
                  <span
                    key={member.initials}
                    className="flex size-11 items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-xs font-bold text-white ring-[3px] ring-ink"
                  >
                    {member.initials}
                  </span>
                ))}
              </div>
              <div>
                <Stars label={dict.testimonials.stars} />
                <p className="mt-1 text-sm text-slate-300">
                  <span className="font-bold text-white">{dict.stats[3].value}</span>{" "}
                  {dict.stats[3].label}
                </p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="motion-safe:animate-fade-up ms-auto max-w-sm rounded-3xl border border-white/70 bg-white/90 p-7 shadow-[0_30px_60px_-25px_rgb(11_22_48/0.35)] backdrop-blur-xl [animation-delay:200ms]">
              <p className="text-xs font-semibold tracking-wide text-primary-600 uppercase">
                {hero.trackRecord}
              </p>
              <p className="mt-1.5 text-lg font-bold text-ink">{hero.trackTitle}</p>
              <dl className="mt-6 grid grid-cols-2 gap-3">
                {dict.stats.map((stat, i) => (
                  <div key={stat.label} className="rounded-2xl bg-slate-50 p-4">
                    <Icon name={statIcons[i]} className="size-5 text-primary-600" />
                    <dd className="mt-3 text-2xl font-extrabold text-ink">
                      {stat.value}
                    </dd>
                    <dt className="mt-0.5 text-xs text-slate-500">{stat.label}</dt>
                  </div>
                ))}
              </dl>
              <div className="mt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-600">{hero.onTime}</span>
                  <span className="font-bold text-primary-600">98%</span>
                </div>
                <div className="mt-2 h-2 overflow-hidden rounded-full bg-primary-100">
                  <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-primary-500 to-primary-700" />
                </div>
              </div>
            </div>
            <div className="motion-safe:animate-float absolute -start-6 -bottom-6 flex items-center gap-3 rounded-2xl bg-white p-3.5 pe-5 shadow-xl ring-1 ring-slate-100">
              <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
                <Icon name="shield" className="size-5" />
              </span>
              <span className="text-sm font-bold text-ink" dir="ltr">
                ISO 9001 · ISO 45001
              </span>
            </div>
          </div>
        </div>

        <ul className="mt-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {dict.advantages.map((item, i) => (
            <li
              key={item.title}
              className="reveal group rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                <Icon name={advantageIcons[i]} className="size-5" />
              </span>
              <h3 className="mt-5 font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {item.text}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Sectors({ dict }: Props) {
  return (
    <section className="border-y border-slate-100 bg-white py-12">
      <Container>
        <p className="text-center text-sm font-medium text-slate-500">
          {dict.testimonials.sectorsTitle}
        </p>
        <ul className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4">
          {dict.testimonials.sectors.map((sector) => (
            <li
              key={sector}
              className="flex items-center gap-2 text-base font-semibold text-slate-400"
            >
              <Icon name="building" className="size-4 text-primary-300" />
              {sector}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Services({ dict }: Props) {
  const section = dict.servicesSection;
  return (
    <section id="services" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow={section.eyebrow}
            title={section.title}
            text={section.text}
          />
          <ButtonLink href="#contact" variant="secondary" arrow>
            {section.cta}
          </ButtonLink>
        </div>

        <ul className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceIds.map((id, i) => {
            const service = dict.services[id];
            const meta = serviceMeta[id];
            return (
              <li key={id} id={id} className="reveal scroll-mt-28">
                <article className="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_24px_50px_-24px_rgb(227_90_12/0.35)]">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100">
                    <Image
                      src={meta.image}
                      alt={service.title}
                      fill
                      sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="absolute end-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-primary-700 backdrop-blur">
                      0{i + 1}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col px-4 pt-6 pb-4">
                    <div className="flex items-center gap-3">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                        <Icon name={meta.icon} className="size-5" />
                      </span>
                      <h3 className="text-lg font-bold text-ink">{service.title}</h3>
                    </div>
                    <p className="mt-4 leading-relaxed text-slate-600">
                      {service.summary}
                    </p>
                    <ul className="mt-5 flex-1 space-y-2.5 border-t border-slate-100 pt-5">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2.5 text-sm text-slate-700"
                        >
                          <span className="mt-0.5 flex size-4.5 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                            <Icon name="check" className="size-3" />
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary-700 hover:text-primary-800"
                    >
                      {section.request}
                      <Icon name="arrowRight" className="size-4" />
                    </a>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

function StatsBand({ dict }: Props) {
  return (
    <section className="relative isolate overflow-hidden bg-primary-700 py-16 text-white">
      <Image
        src={images.statsBand}
        alt=""
        fill
        sizes="100vw"
        className="-z-20 object-cover opacity-15 mix-blend-luminosity"
      />
      <div className="bg-dot-grid-light absolute inset-0 -z-10" aria-hidden="true" />
      <Container>
        <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/15">
          {dict.stats.map((stat, i) => (
            <div key={stat.label} className="reveal text-center lg:px-6">
              <Icon
                name={statIcons[i]}
                className="mx-auto size-7 text-primary-200"
              />
              <dd className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                {stat.value}
              </dd>
              <dt className="mt-2 text-primary-100">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}

function Projects({ dict }: Props) {
  const section = dict.projectsSection;
  const projects = projectIds.map((id) => ({
    id,
    ...dict.projects[id],
    ...projectMeta[id],
    categoryLabel: section.categories[projectMeta[id].category],
  }));

  return (
    <section id="projects" className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={section.eyebrow}
          title={section.title}
          text={section.text}
          align="center"
        />
        <div className="mt-12">
          <ProjectsGrid projects={projects} labels={section} />
        </div>
      </Container>
    </section>
  );
}

function About({ dict }: Props) {
  const { about } = dict;
  return (
    <section id="about" className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="reveal relative">
            <div className="relative aspect-[4/3.4] overflow-hidden rounded-[2rem] shadow-[0_30px_60px_-30px_rgb(11_22_48/0.45)]">
              <Image
                src={images.about}
                alt={about.imageAlt}
                fill
                sizes="(min-width: 1024px) 600px, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -end-3 -bottom-8 rounded-3xl bg-white p-6 shadow-xl ring-1 ring-slate-100 sm:-end-6">
              <p className="text-5xl font-extrabold text-primary-600">
                {dict.stats[0].value}
              </p>
              <p className="mt-1 text-sm font-medium text-slate-600">
                {about.badgeLine1}
                <br />
                {about.badgeLine2}
              </p>
            </div>
            <div className="motion-safe:animate-float absolute -start-3 top-8 flex items-center gap-3 rounded-2xl bg-white p-3.5 pe-5 shadow-xl ring-1 ring-slate-100 sm:-start-6">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary-600 text-white">
                <Icon name="hardHat" className="size-5" />
              </span>
              <span className="max-w-40 text-sm leading-snug font-semibold text-ink">
                {about.highlights[0]}
              </span>
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow={about.eyebrow}
              title={about.title}
              text={about.text}
            />
            <ul className="reveal mt-8 grid gap-3.5 sm:grid-cols-2">
              {about.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white">
                    <Icon name="check" className="size-3" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="reveal mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Icon name="target" className="size-5" />
                </span>
                <h3 className="mt-4 font-bold text-ink">{about.missionTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {about.missionText}
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                  <Icon name="eye" className="size-5" />
                </span>
                <h3 className="mt-4 font-bold text-ink">{about.visionTitle}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {about.visionText}
                </p>
              </div>
            </div>
          </div>
        </div>

        <ul className="mt-28 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {dict.values.map((value, i) => (
            <li
              key={value.title}
              className="reveal group rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-primary-200"
            >
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-600 group-hover:text-white">
                <Icon name={valueIcons[i]} className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-ink">{value.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-600">{value.text}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function Process({ dict }: Props) {
  const { process } = dict;
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={process.eyebrow}
          title={process.title}
          align="center"
        />
        <ol className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {process.steps.map((step, i) => (
            <li
              key={step.title}
              className="reveal relative rounded-3xl border border-slate-200/80 bg-white p-7 transition-all duration-300 hover:border-primary-200 hover:shadow-xl"
            >
              <span className="absolute end-6 top-5 text-5xl font-extrabold text-primary-50">
                0{i + 1}
              </span>
              <span className="relative flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg shadow-primary-600/25">
                <Icon name={processIcons[i]} className="size-5" />
              </span>
              <h3 className="relative mt-6 text-lg font-bold text-ink">
                {step.title}
              </h3>
              <p className="relative mt-2 leading-relaxed text-slate-600">
                {step.text}
              </p>
              {i < process.steps.length - 1 && (
                <span
                  className="absolute top-1/2 -end-4 z-10 hidden size-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary-600 shadow ring-1 ring-slate-200 lg:flex"
                  aria-hidden="true"
                >
                  <Icon name="chevronRight" className="size-4" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function Journey({ dict }: Props) {
  const { journey } = dict;
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.25fr]">
          <div>
            <SectionHeading eyebrow={journey.eyebrow} title={journey.title} />
            <ol className="reveal mt-10 space-y-7 border-s-2 border-primary-100 ps-8">
              {journey.milestones.map((m, i) => (
                <li key={milestoneYears[i]} className="relative">
                  <span
                    className={`absolute -start-[41px] top-1 size-5 rounded-full border-4 border-slate-50 ${
                      i === journey.milestones.length - 1
                        ? "bg-primary-600 ring-4 ring-primary-100"
                        : "bg-primary-300"
                    }`}
                    aria-hidden="true"
                  />
                  <p className="text-sm font-bold text-primary-600">
                    {milestoneYears[i]}
                  </p>
                  <h3 className="mt-1 font-bold text-ink">{m.title}</h3>
                  <p className="mt-1 text-slate-600">{m.text}</p>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <SectionHeading
              eyebrow={journey.leadershipEyebrow}
              title={journey.leadershipTitle}
            />
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {teamMembers.map((member, i) => (
                <li
                  key={member.name}
                  className="reveal flex items-center gap-4 rounded-3xl bg-white p-5 shadow-sm ring-1 ring-slate-200/80 transition-shadow hover:shadow-lg"
                >
                  <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-700 text-lg font-bold text-white">
                    {member.initials}
                  </span>
                  <span>
                    <span className="block font-bold text-ink">{member.name}</span>
                    <span className="block text-sm text-primary-700">
                      {journey.roles[i]}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {certificationCodes.map((code, i) => (
                <li
                  key={code}
                  className="reveal flex items-center gap-4 rounded-3xl border border-dashed border-primary-200 bg-primary-50/50 p-5"
                >
                  <Icon name="award" className="size-6 shrink-0 text-primary-600" />
                  <span>
                    <span className="block font-bold text-ink" dir="ltr">
                      {code}
                    </span>
                    <span className="block text-sm text-slate-600">
                      {dict.certifications[i]}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Testimonials({ dict }: Props) {
  const { testimonials } = dict;
  return (
    <section className="bg-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow={testimonials.eyebrow}
          title={testimonials.title}
          align="center"
        />
        <ul className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.items.map((t, i) => {
            const name = testimonialAuthors[i];
            return (
              <li
                key={name}
                className={`reveal flex flex-col rounded-3xl p-8 ${
                  i === 1
                    ? "bg-primary-600 text-white shadow-[0_30px_60px_-25px_rgb(227_90_12/0.6)]"
                    : "bg-slate-50 ring-1 ring-slate-200/80"
                }`}
              >
                <div className="flex items-center justify-between">
                  <Stars label={testimonials.stars} />
                  <Icon
                    name="quote"
                    className={`size-8 ${i === 1 ? "text-primary-400" : "text-primary-200"}`}
                  />
                </div>
                <blockquote
                  className={`mt-6 flex-1 text-lg leading-relaxed ${
                    i === 1 ? "text-white" : "text-slate-700"
                  }`}
                >
                  “{t.quote}”
                </blockquote>
                <div
                  className={`mt-8 flex items-center gap-4 border-t pt-6 ${
                    i === 1 ? "border-white/20" : "border-slate-200"
                  }`}
                >
                  <span
                    className={`flex size-12 items-center justify-center rounded-full font-bold ${
                      i === 1 ? "bg-white text-primary-700" : "bg-primary-600 text-white"
                    }`}
                  >
                    {name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                  <span>
                    <span
                      className={`block font-bold ${i === 1 ? "text-white" : "text-ink"}`}
                    >
                      {name}
                    </span>
                    <span
                      className={`block text-sm ${
                        i === 1 ? "text-primary-100" : "text-slate-500"
                      }`}
                    >
                      {t.role}
                    </span>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}

function Faq({ dict }: Props) {
  const { faq } = dict;
  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow={faq.eyebrow} title={faq.title} text={faq.text} />
            <ButtonLink href="#contact" className="mt-8" arrow>
              {faq.cta}
            </ButtonLink>
          </div>
          <div className="space-y-3">
            {faq.items.map((item, i) => (
              <details
                key={item.q}
                open={i === 0}
                className="group rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200/80 transition-shadow open:shadow-lg open:ring-primary-200 sm:p-7"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-semibold text-ink [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition-all duration-300 group-open:rotate-45 group-open:bg-primary-600 group-open:text-white">
                    <Icon name="plus" className="size-4" />
                  </span>
                </summary>
                <p className="mt-4 leading-relaxed text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function CallToAction({ dict }: Props) {
  const { cta } = dict;
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="reveal relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary-600 to-primary-800 px-8 py-14 text-white shadow-[0_40px_80px_-40px_rgb(227_90_12/0.7)] sm:px-14 sm:py-16">
          <Image
            src={images.cta}
            alt=""
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="-z-20 object-cover opacity-20 mix-blend-luminosity"
          />
          <div className="bg-dot-grid-light absolute inset-0 -z-10" aria-hidden="true" />
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
                {cta.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-primary-100">
                {cta.text}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="#contact" variant="white" arrow>
                {cta.primary}
              </ButtonLink>
              <ButtonLink href="#projects" variant="ghostLight">
                {cta.secondary}
              </ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default async function HomePage({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = getDictionary(lang);

  return (
    <>
      <Hero dict={dict} />
      <Sectors dict={dict} />
      <Services dict={dict} />
      <StatsBand dict={dict} />
      <Projects dict={dict} />
      <About dict={dict} />
      <Process dict={dict} />
      <Journey dict={dict} />
      <Testimonials dict={dict} />
      <Faq dict={dict} />
      <CallToAction dict={dict} />
    </>
  );
}
