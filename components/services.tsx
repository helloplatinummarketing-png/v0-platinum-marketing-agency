const services = [
  {
    title: "Lead Capture Systems",
    description:
      "We connect your website, forms and ads directly into a structured CRM so every enquiry is captured, tracked and followed up properly. No more lost leads slipping through the cracks.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 9h18M9 9v12" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Missed Call Recovery",
    description:
      "When you miss a call, the system automatically sends a message, captures the enquiry and starts the follow-up process instantly. Turn missed calls into booked jobs.",
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
    title: "Appointment Automation",
    description:
      "Automated confirmations, reminders and follow-ups ensure more appointments show up and more quotes get accepted. Higher conversion rates with less manual work.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
        <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 16l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "SMS & Email Follow-ups",
    description:
      "Automated sequences that nurture leads and re-engage cold prospects. Stay top-of-mind without lifting a finger, and bring back leads that went quiet.",
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
    title: "Performance Dashboards",
    description:
      "See exactly where your leads come from, how fast they are responded to, and which campaigns are driving revenue. Real-time visibility into your growth metrics.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
        <path d="M18 20V10M12 20V4M6 20v-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "24/7 Support & Coaching",
    description:
      "You are not left alone after setup. We provide ongoing support, monthly check-ins, and strategic coaching to help you get the most out of your systems.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-primary">
        <path
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
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
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Six core systems designed specifically for home service businesses to capture, convert and retain more customers.
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
