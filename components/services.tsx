const services = [
  {
    title: "Missed Call Recovery",
    description:
      "Every missed call fires an instant automated text-back, capturing the lead before they call your competitor.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
        <path
          d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M15 3h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M21 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Instant Lead Response",
    description:
      "Website and social enquiries get a reply within 60 seconds — day or night. The first business to respond wins the job.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
        <path
          d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M22 6l-10 7L2 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Appointment & No-Show Automation",
    description:
      "Automated reminders and confirmation requests mean fewer empty slots and more jobs that actually show up.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 16l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Review Collection",
    description:
      "After every completed job, customers get a text asking for a Google review. More reviews means more inbound leads.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Quote & Invoice Follow-Up",
    description:
      "Automated sequences chase unanswered quotes and overdue invoices so you stop writing off revenue you've already earned.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
        <path d="M13 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M13 2v7h7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 15h6M9 11h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Custom Automation Systems",
    description:
      "Have a specific problem or workflow in mind? We build bespoke systems tailored to exactly how your business operates.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="19" cy="12" r="1" fill="currentColor" />
        <circle cx="5" cy="12" r="1" fill="currentColor" />
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          We Find Where Your Business Is Losing Money — Then We Fix It.
        </h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          Every home service business leaks revenue differently. We diagnose your specific gaps and install the right automation — whether that's one system or ten. Here are the most common problems we solve.
        </p>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
