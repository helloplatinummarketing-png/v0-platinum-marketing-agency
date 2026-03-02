export function CalendlyEmbed() {
  return (
    <section id="book-demo" className="bg-surface-elevated py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Book Your Free 30-Minute Demo
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Pick a time that works for you. We will walk through your current
            process and show you exactly where automation can increase your
            revenue.
          </p>
        </div>
        <div className="mt-12 overflow-hidden rounded-xl border border-border">
          <iframe
            src="https://calendly.com/helloplatinummarketing/30min?hide_gdpr_banner=1&background_color=0f1d32&text_color=e8eaef&primary_color=c0c6d0"
            width="100%"
            height="700"
            frameBorder="0"
            title="Schedule a 30-minute demo with Platinum Marketing"
            className="block w-full"
          />
        </div>
      </div>
    </section>
  )
}
