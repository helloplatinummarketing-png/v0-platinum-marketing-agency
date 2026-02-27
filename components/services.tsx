const services = [
  {
    title: "Lead Capture & CRM Integration",
    description:
      "We connect your website, forms and ads directly into a structured CRM so every enquiry is captured, tracked and followed up properly.",
    outcome: "No more lost leads. Full visibility.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9h18M9 9v12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Missed Call Recovery System",
    description:
      "When you miss a call, the system automatically sends a message, captures the enquiry and starts the follow-up process instantly.",
    outcome: "Missed calls turn into booked jobs.",
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
    title: "Appointment & Follow-Up Automation",
    description:
      "Automated confirmations, reminders and follow-ups ensure more appointments show up and more quotes get accepted.",
    outcome: "Higher conversion rates with less manual work.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 16l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

export function Services() {
  return (
    <section id="services" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          How We Help You Capture More Revenue
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
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
              <p className="mt-4 text-sm font-medium text-primary">
                {service.outcome}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
