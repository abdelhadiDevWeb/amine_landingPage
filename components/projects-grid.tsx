"use client";

import { useState } from "react";
import { ProjectCard, type ProjectView } from "@/components/ui";
import { projectCategories, type ProjectCategory } from "@/lib/data";
import type { Dictionary } from "@/lib/dictionaries";

type Filter = "all" | ProjectCategory;

export function ProjectsGrid({
  projects,
  labels,
}: {
  projects: (ProjectView & { category: ProjectCategory })[];
  labels: Dictionary["projectsSection"];
}) {
  const [filter, setFilter] = useState<Filter>("all");
  const visible =
    filter === "all" ? projects : projects.filter((p) => p.category === filter);

  const filters: { key: Filter; label: string; count: number }[] = [
    { key: "all", label: labels.all, count: projects.length },
    ...projectCategories.map((category) => ({
      key: category,
      label: labels.categories[category],
      count: projects.filter((p) => p.category === category).length,
    })),
  ];

  return (
    <div>
      <div
        role="group"
        aria-label={labels.filterLabel}
        className="flex flex-wrap justify-center gap-2"
      >
        {filters.map(({ key, label, count }) => {
          const active = filter === key;
          return (
            <button
              key={key}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(key)}
              className={`inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-all ${
                active
                  ? "border-primary-600 bg-primary-600 text-white shadow-lg shadow-primary-600/25"
                  : "border-slate-200 bg-white text-slate-600 hover:border-primary-200 hover:text-primary-700"
              }`}
            >
              {label}
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                  active ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {labels.showing.replace("{count}", String(visible.length))}
      </p>

      <ul className="mt-12 grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((project) => (
          <li key={project.id} className="motion-safe:animate-fade-up">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
