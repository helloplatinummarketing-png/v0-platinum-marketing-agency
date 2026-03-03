export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-background pt-20">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:py-0">
        {/* Left content */}
        <div className="flex flex-col justify-center">
          {/* Trust counter */}
          <div className="mb-6 flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-sm font-medium text-muted-foreground">
              Trusted by 50+ UK home service businesses
            </span>
          </div>

          <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Stop Losing Revenue from Missed Calls and Slow Responses.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            We help UK home service businesses capture more jobs automatically
            using smart automation systems built around your existing process.
          </p>

          {/* Micro-testimonial */}
          <div className="mt-6 flex items-start gap-3 rounded-lg border border-border bg-card px-5 py-4 max-w-lg">
            <div className="flex shrink-0 gap-0.5 pt-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M7 1l1.76 3.57 3.94.57-2.85 2.78.67 3.93L7 10.07l-3.52 1.78.67-3.93L1.3 5.14l3.94-.57L7 1z"
                    fill="#c0c6d0"
                  />
                </svg>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-foreground">
              {'"Recovered 12 missed leads in our first month. The system paid for itself in week one."'}
              <span className="mt-1 block text-xs text-muted-foreground">
                -- James T., Roofing Contractor, Bristol
              </span>
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex flex-col items-start gap-1.5 sm:items-center">
              <a
                href="https://calendly.com/helloplatinummarketing/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-primary px-7 py-3.5 text-center text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
              >
                Book a Free 15-Minute Demo
              </a>
              <span className="text-xs text-muted-foreground">Takes 30 seconds to book</span>
            </div>
            <a
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              How It Works &darr;
            </a>
          </div>

          {/* Value subline */}
          <p className="mt-4 text-xs text-muted-foreground">
            Invest in Growth. Simple Setup + Monthly Support. No contracts.
          </p>
        </div>

        {/* Right mock UI panel */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="w-full max-w-sm rounded-xl border border-border bg-card p-6">
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary">
                  <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
                Live Activity
              </span>
            </div>

            {/* Mock notification items */}
            <div className="flex flex-col gap-4">
              <MockNotification
                time="Just now"
                label="Incoming Lead"
                detail="New enquiry from Google Ads"
                status="new"
              />
              <MockNotification
                time="2s ago"
                label="Auto Response Sent"
                detail="SMS confirmation delivered"
                status="sent"
              />
              <MockNotification
                time="5s ago"
                label="Appointment Booked"
                detail="Tomorrow at 10:00 AM"
                status="booked"
              />
            </div>

            <div className="mt-5 border-t border-border pt-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Response time</span>
                <span className="text-xs font-medium text-foreground">{'< 30 seconds'}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MockNotification({
  time,
  label,
  detail,
  status,
}: {
  time: string
  label: string
  detail: string
  status: "new" | "sent" | "booked"
}) {
  const dotColor =
    status === "new"
      ? "bg-blue-400"
      : status === "sent"
        ? "bg-amber-400"
        : "bg-emerald-400"

  return (
    <div className="rounded-lg border border-border bg-secondary/50 p-4">
      <div className="mb-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`block h-2 w-2 rounded-full ${dotColor}`} />
          <span className="text-sm font-medium text-foreground">{label}</span>
        </div>
        <span className="text-xs text-muted-foreground">{time}</span>
      </div>
      <p className="text-xs text-muted-foreground">{detail}</p>
    </div>
  )
}
