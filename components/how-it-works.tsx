const steps = [
  {
    number: "01",
    title: "We analyse your current process",
    detail:
      "We review how enquiries are handled today and identify where revenue is leaking.",
  },
  {
    number: "02",
    title: "We install the automation systems",
    detail:
      "We implement structured workflows around calls, forms and follow-ups.",
  },
  {
    number: "03",
    title: "You capture more jobs automatically",
    detail:
      "Leads are responded to instantly and followed up consistently without manual chasing.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
          How It Works
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="relative">
              <span className="font-serif text-5xl font-bold text-border">
                {step.number}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-foreground">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
