const testimonials = [
  {
    quote:
      "We were losing 5-6 calls a week without even knowing. Now every missed call triggers an instant follow-up. We booked 23 extra jobs last quarter.",
    name: "Mark D.",
    role: "Plumbing Business Owner, Bath",
    result: "+23 jobs in one quarter",
  },
  {
    quote:
      "The setup was painless and within days we could see every lead flowing into one place. Our response time went from hours to under a minute.",
    name: "Sarah L.",
    role: "Electrical Contractor, Bristol",
    result: "Response time under 60 seconds",
  },
  {
    quote:
      "Appointment no-shows dropped by over 40% once the automated reminders kicked in. The system genuinely pays for itself.",
    name: "Chris W.",
    role: "Roofing Company Director, Cardiff",
    result: "40% fewer no-shows",
  },
]

function StarRow() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path
            d="M7 1l1.76 3.57 3.94.57-2.85 2.78.67 3.93L7 10.07l-3.52 1.78.67-3.93L1.3 5.14l3.94-.57L7 1z"
            fill="#c0c6d0"
          />
        </svg>
      ))}
    </div>
  )
}

export function Testimonials() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          What Our Clients Say
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-xl border border-border bg-card p-8"
            >
              <div>
                <StarRow />
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">
                  {`"${t.quote}"`}
                </blockquote>
              </div>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
                <p className="mt-2 inline-block rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-primary">
                  {t.result}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
