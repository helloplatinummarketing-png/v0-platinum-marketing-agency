export function FinalCTA() {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
          {"If You're Missing Calls, You're Missing Revenue."}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {"Let's fix that."}
        </p>
        <div className="mt-10">
          <a
            href="https://calendly.com/helloplatinummarketing/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-primary px-10 py-4 text-sm font-medium text-primary-foreground transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
          >
            Book a Free 15-Minute Demo
          </a>
        </div>
      </div>
    </section>
  )
}
