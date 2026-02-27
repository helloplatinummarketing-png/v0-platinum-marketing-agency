const demoPoints = [
  "Review your current lead handling",
  "Show live automation example",
  "Identify revenue gaps",
  "Outline next steps",
]

export function DemoSection() {
  return (
    <section id="book-demo" className="bg-background py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
          What Happens During the 15-Minute Demo?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
          {"We'll walk you through how the systems work, review your current process, and show you where automation can immediately increase revenue."}
        </p>
        <ul className="mx-auto mt-10 flex max-w-md flex-col gap-4 text-left">
          {demoPoints.map((point) => (
            <li key={point} className="flex items-center gap-3">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-secondary">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-primary">
                  <path d="M3 6l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="text-sm text-foreground">{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <a
            href="#book-demo"
            className="inline-block rounded-lg bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
          >
            Book a Free 15-Minute Demo
          </a>
        </div>
      </div>
    </section>
  )
}
