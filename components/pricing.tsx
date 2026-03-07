const plans = [
  {
    name: "Starter",
    price: "£497",
    period: "/month",
    description: "For businesses just getting started with automation.",
    features: [
      "Lead capture system",
      "Missed call recovery",
      "Basic CRM setup",
      "Email support",
      "Monthly check-in",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Growth",
    price: "£997",
    period: "/month",
    description: "For businesses ready to scale their lead generation.",
    features: [
      "Everything in Starter",
      "Appointment automation",
      "SMS & email sequences",
      "Performance dashboard",
      "Priority support",
      "Weekly check-ins",
    ],
    cta: "Most Popular",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "For established businesses with complex needs.",
    features: [
      "Everything in Growth",
      "Custom integrations",
      "Multi-location support",
      "Dedicated account manager",
      "24/7 support",
      "Strategic consulting",
    ],
    cta: "Contact Us",
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="bg-surface-elevated py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl border p-8 transition-all duration-300 ${
                plan.featured
                  ? "border-primary bg-card shadow-lg shadow-primary/5"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-medium text-primary-foreground">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-semibold text-foreground">{plan.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              <div className="mt-6 flex items-baseline">
                <span className="font-serif text-4xl font-bold text-foreground">{plan.price}</span>
                {plan.period && (
                  <span className="ml-1 text-sm text-muted-foreground">{plan.period}</span>
                )}
              </div>
              <ul className="mt-8 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className="mt-0.5 shrink-0 text-primary"
                    >
                      <path
                        d="M6 10l3 3 5-6"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://calendly.com/helloplatinummarketing/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 block rounded-lg py-3 text-center text-sm font-medium transition-all duration-200 ${
                  plan.featured
                    ? "bg-primary text-primary-foreground hover:bg-accent hover:text-accent-foreground"
                    : "border border-border bg-transparent text-foreground hover:border-primary/50 hover:bg-secondary"
                }`}
              >
                {plan.cta === "Most Popular" ? "Get Started" : plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
