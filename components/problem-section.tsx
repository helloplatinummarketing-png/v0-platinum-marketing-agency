const problems = [
  {
    headline: "Missed calls = lost revenue.",
    detail: "If someone can't reach you, they call the next company.",
  },
  {
    headline: "Slow response time kills conversions.",
    detail: "The first business to reply usually wins the job.",
  },
  {
    headline: "Manual admin wastes time.",
    detail:
      "Chasing leads and confirming appointments shouldn't consume your day.",
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
              <h3 className="text-lg font-semibold text-foreground">
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
