export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <rect width="40" height="40" rx="11" fill="var(--color-primary-600)" />
      <path d="M15 31 18.4 9h3.2L25 31Z" fill="#ffffff" />
      <path
        d="M20 12.5v3M20 19v3.5M20 26.5V29"
        stroke="var(--color-primary-600)"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <circle cx="30.5" cy="9.5" r="3.5" fill="var(--color-ink)" />
    </svg>
  );
}
