const badges = [
  {
    label: "Google Partner",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
        <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.17l-4.77 2.55.91-5.33L2.27 6.62l5.34-.78L10 1z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Verified Automation Partner",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
        <circle cx="10" cy="10" r="8.5" stroke="currentColor" strokeWidth="1.2" />
        <path d="M6.5 10l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "UK Home Services Specialist",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
        <path d="M10 2l6 5v9a1 1 0 01-1 1H5a1 1 0 01-1-1V7l6-5z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        <rect x="8" y="12" width="4" height="5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    label: "5-Star Rated",
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-primary">
        <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.17l-4.77 2.55.91-5.33L2.27 6.62l5.34-.78L10 1z" fill="currentColor" />
      </svg>
    ),
  },
]

export function TrustStrip() {
  return (
    <section className="border-y border-border bg-surface-elevated py-6">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {badges.map((badge) => (
            <div key={badge.label} className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                {badge.icon}
              </span>
              <span className="text-xs font-medium tracking-wide text-muted-foreground">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
