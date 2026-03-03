const problems = [
  {
    headline: "Missed calls = lost revenue.",
    stat: "3+ calls missed per day",
    detail:
      "The average tradesperson misses 3 calls per day. If someone can't reach you, they call the next company on the list.",
  },
  {
    headline: "Slow response time kills conversions.",
    stat: "78% go to the first responder",
    detail:
      "78% of leads go to the first business that responds. Even a 10-minute delay can cost you the job.",
  },
  {
    headline: "Manual admin wastes time.",
    stat: "15+ hours lost per week",
    detail:
      "Chasing leads, confirming appointments and sending quotes manually can eat up 15+ hours every week that should be spent on the tools.",
  },
]

export function ProblemSection() {
  return (
    <section className="bg-surface-elevated py-24">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          Where Most Revenue Gets Lost
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map((problem) => (
            <div
              key={problem.headline}
              className="rounded-xl border border-border bg-card p-8"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                {problem.stat}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-foreground">
                {problem.headline}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {problem.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
