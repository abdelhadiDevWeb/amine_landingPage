import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "@/components/icons";

export type ProjectView = {
  id: string;
  categoryLabel: string;
  year: string;
  image: string;
  title: string;
  client: string;
  location: string;
  summary: string;
  metrics: { value: string; label: string }[];
};

export function cx(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-7xl px-5 sm:px-8", className)}>
      {children}
    </div>
  );
}

const buttonVariants = {
  primary:
    "bg-primary-600 text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700",
  secondary:
    "border border-slate-200 bg-white text-ink shadow-sm hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700",
  white: "bg-white text-primary-700 shadow-lg hover:bg-primary-50",
  ghostLight:
    "border border-white/40 text-white hover:border-white hover:bg-white/10",
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  arrow = false,
}: {
  href: string;
  children: ReactNode;
  variant?: keyof typeof buttonVariants;
  className?: string;
  arrow?: boolean;
}) {
  const classes = cx(
    "group inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500",
    buttonVariants[variant],
    className,
  );
  const content = (
    <>
      {children}
      {arrow && (
        <Icon
          name="arrowRight"
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5"
        />
      )}
    </>
  );

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }
  return (
    <a href={href} className={classes}>
      {content}
    </a>
  );
}

export function Eyebrow({
  children,
  tone = "light",
}: {
  children: ReactNode;
  tone?: "light" | "dark";
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide uppercase",
        tone === "dark"
          ? "bg-white/10 text-primary-100 ring-1 ring-white/20"
          : "bg-primary-50 text-primary-700 ring-1 ring-primary-100",
      )}
    >
      <span
        className={cx(
          "size-1.5 rounded-full",
          tone === "dark" ? "bg-primary-200" : "bg-primary-600",
        )}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "start",
  tone = "light",
}: {
  eyebrow: string;
  title: ReactNode;
  text?: string;
  align?: "start" | "center";
  tone?: "light" | "dark";
}) {
  return (
    <div
      className={cx(
        "reveal max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
      <h2
        className={cx(
          "mt-5 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]",
          tone === "dark" ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {text && (
        <p
          className={cx(
            "mt-5 text-lg leading-relaxed text-pretty",
            tone === "dark" ? "text-primary-100/80" : "text-slate-600",
          )}
        >
          {text}
        </p>
      )}
    </div>
  );
}

export function ProjectCard({ project }: { project: ProjectView }) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-3 transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-[0_24px_50px_-24px_rgb(227_90_12/0.35)]">
      <div className="relative aspect-[16/11] overflow-hidden rounded-2xl bg-slate-100">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <span className="absolute start-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-700 shadow-sm backdrop-blur">
          {project.categoryLabel}
        </span>
        <span className="absolute end-3 top-3 rounded-full bg-ink/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          {project.year}
        </span>
      </div>
      <div className="flex flex-1 flex-col px-4 pt-6 pb-4">
        <p className="flex items-center gap-1.5 text-sm text-slate-500">
          <Icon name="mapPin" className="size-4 text-primary-600" />
          {project.location}
        </p>
        <h3 className="mt-2 text-xl font-bold tracking-tight text-ink">
          {project.title}
        </h3>
        <p className="mt-1 text-sm font-medium text-primary-700">
          {project.client}
        </p>
        <p className="mt-3 flex-1 leading-relaxed text-slate-600">
          {project.summary}
        </p>
        <dl className="mt-6 grid grid-cols-2 gap-3">
          {project.metrics.map((m) => (
            <div key={m.label} className="rounded-xl bg-slate-50 px-4 py-3">
              <dd className="text-lg font-bold text-ink">{m.value}</dd>
              <dt className="text-xs text-slate-500">{m.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
