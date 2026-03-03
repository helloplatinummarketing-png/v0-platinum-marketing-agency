const demoPoints = [
  "Review your current lead handling process",
  "See a live automation example in action",
  "Identify exactly where revenue is leaking",
  "Get a custom automation plan for your business",
  "Outline clear, actionable next steps",
]

const takeaways = [
  "A custom automation plan tailored to your trade",
  "A clear map of where you are losing leads today",
  "Specific recommendations you can act on immediately",
]

export function DemoSection() {
  return (
    <section id="book-demo" className="bg-background py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            What Happens During the 15-Minute Demo?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {"We'll walk you through how the systems work, review your current process, and show you where automation can immediately increase revenue."}
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          {/* Left: checklist + takeaways */}
          <div>
            <h3 className="text-base font-semibold text-foreground">
              {"What we'll cover:"}
            </h3>
            <ul className="mt-5 flex flex-col gap-3.5">
              {demoPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-primary">
                      <path d="M3 6l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm text-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-base font-semibold text-foreground">
              {"What you'll walk away with:"}
            </h3>
            <ul className="mt-5 flex flex-col gap-3.5">
              {takeaways.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/10">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-emerald-400">
                      <path d="M3 6l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            {/* Urgency + response time */}
            <div className="mt-8 flex flex-col gap-2">
              <p className="text-xs font-medium text-primary">
                Limited spots available this week
              </p>
              <p className="text-xs text-muted-foreground">
                We typically respond within 2 hours of booking.
              </p>
            </div>
          </div>

          {/* Right: Calendly embed */}
          <div>
            <p className="mb-4 text-center text-sm text-muted-foreground">
              Pick a time that works for you. No obligation, no pressure.
            </p>
            <div className="overflow-hidden rounded-xl border border-border">
              <iframe
                src="https://calendly.com/helloplatinummarketing/30min?hide_gdpr_banner=1&background_color=0f1d32&text_color=e8eaef&primary_color=c0c6d0"
                width="100%"
                height="660"
                frameBorder="0"
                title="Schedule a 15-minute demo with Platinum Marketing"
                className="block w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
