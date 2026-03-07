"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Is this complicated to set up?",
    answer:
      "Not at all. We handle all the technical implementation for you. You do not need to learn any new software or spend hours configuring systems. We set everything up, test it thoroughly, and train you on the basics. Most clients are fully operational within a week, and ongoing support is included if you ever have questions.",
  },
  {
    question: "Do I need new software?",
    answer:
      "We work with what you already have where possible. If you are using a CRM, scheduling tool, or any other business software, we integrate with it. If you do not have systems in place yet, we recommend and set up the right tools for your business. Either way, you will not be forced to learn complex new platforms.",
  },
  {
    question: "How quickly can this be live?",
    answer:
      "Most setups are completed within 5-7 business days. This includes the initial discovery call, system design, implementation, testing, and your training session. More complex setups with multiple integrations may take slightly longer, but we will give you a clear timeline during our first call.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No. We offer monthly agreements with no long-term lock-ins. We believe our value should keep you as a client, not a contract. You can cancel anytime with 30 days notice. That said, most clients stay because the systems pay for themselves many times over.",
  },
  {
    question: "Will this work for my trade?",
    answer:
      "If your business relies on phone calls, enquiries, and appointments, then yes. We have worked with roofers, plumbers, electricians, landscapers, builders, window fitters, and many other trades. The specific setup varies, but the principles of capturing leads and automating follow-ups apply across all home service businesses.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="bg-surface-elevated py-24">
      <div className="mx-auto max-w-3xl px-6">
        <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-12 flex flex-col divide-y divide-border">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <div key={faq.question} className="py-5">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-foreground pr-4">
                    {faq.question}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className={`shrink-0 text-muted-foreground transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    <path
                      d="M10 4v12M4 10h12"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "mt-3 max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
