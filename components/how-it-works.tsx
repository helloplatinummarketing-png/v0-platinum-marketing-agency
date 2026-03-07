const steps = [
  {
    number: "01",
    title: "Discovery Call",
    detail:
      "We start with a free 15-minute call to understand your business, how you currently handle leads, and where the gaps are. No sales pitch, just an honest assessment.",
  },
  {
    number: "02",
    title: "Custom Setup",
    detail:
      "Based on what we learn, we design and build your automation systems tailored to your specific workflow. We handle all the technical work so you do not have to.",
  },
  {
    number: "03",
    title: "Training & Launch",
    detail:
      "We walk you through the system, make sure you are comfortable, and launch everything. You will know exactly how to use it and what to expect.",
  },
  {
    number: "04",
    title: "Optimization & Growth",
    detail:
      "We do not just set it and forget it. We monitor performance, make improvements, and meet with you regularly to ensure you are getting results.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
          How It Works
        </h2>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          A simple four-step process to get your automation systems live and working for you.
        </p>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <span className="font-serif text-5xl font-bold text-border">
                {step.number}
              </span>
              {index < steps.length - 1 && (
                <div className="absolute right-0 top-6 hidden h-px w-8 bg-border lg:block" />
              )}
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
