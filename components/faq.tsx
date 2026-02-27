"use client"

import { useState } from "react"

const faqs = [
  {
    question: "Is this complicated to set up?",
    answer: "No. We handle implementation and keep it simple.",
  },
  {
    question: "Do I need new software?",
    answer: "We integrate with what you already use where possible.",
  },
  {
    question: "How quickly can this be live?",
    answer: "Most setups are completed within days.",
  },
  {
    question: "Is there a long-term contract?",
    answer: "No long-term lock-ins.",
  },
  {
    question: "Will this work for my trade?",
    answer:
      "If you rely on phone calls and enquiries, it applies to your business.",
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
                    isOpen ? "mt-3 max-h-40 opacity-100" : "max-h-0 opacity-0"
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
