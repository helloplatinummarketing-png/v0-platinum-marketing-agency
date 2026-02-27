const reasons = [
  {
    title: "Built for trades and service businesses",
    detail: "Systems designed around how home service companies actually operate.",
  },
  {
    title: "Fast setup",
    detail: "Get up and running in days, not weeks.",
  },
  {
    title: "No long-term contracts",
    detail: "Stay because it works, not because you're locked in.",
  },
  {
    title: "Simple systems your team can use",
    detail: "No complex software. Just clear processes that deliver results.",
  },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-surface-elevated py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          Built for Home Service Businesses
        </h2>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-4 rounded-xl border border-border bg-card p-6"
            >
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="text-primary">
                  <path d="M3.5 7l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {reason.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
