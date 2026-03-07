export function WhoYoureTalkingTo() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Photo placeholder */}
          <div className="relative">
            <div className="aspect-square w-full max-w-md mx-auto lg:mx-0 rounded-2xl border border-border bg-card overflow-hidden">
              <div className="flex h-full w-full items-center justify-center bg-secondary">
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 120 120"
                  fill="none"
                  className="text-muted-foreground/30"
                >
                  <circle cx="60" cy="45" r="20" stroke="currentColor" strokeWidth="2" />
                  <path
                    d="M30 95c0-16.569 13.431-30 30-30s30 13.431 30 30"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
              Who You're Talking To
            </h2>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-foreground">Victor Odhiambo</h3>
              <p className="mt-1 text-sm font-medium text-primary">Founder, Platinum Marketing</p>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                I started Platinum Marketing after seeing too many good tradespeople lose jobs to slower competitors. Not because their work was worse, but because they were too busy working to answer the phone or follow up on quotes.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                I have spent years helping home service businesses across the UK implement systems that capture leads automatically and turn enquiries into booked jobs without the manual chase.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                When you book a call with Platinum Marketing, you are speaking directly with me. No sales team, no account managers, just a straightforward conversation about whether we can help your business.
              </p>
              <div className="mt-8 flex flex-wrap gap-6">
                <div>
                  <p className="text-2xl font-bold text-foreground">50+</p>
                  <p className="text-sm text-muted-foreground">UK businesses helped</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">5+ years</p>
                  <p className="text-sm text-muted-foreground">in automation</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">Bristol</p>
                  <p className="text-sm text-muted-foreground">based</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
