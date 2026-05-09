"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const faqs = [
  {
    q: "How quickly will my website be live?",
    a: "Most websites are live within 5 working days of receiving your content and approval.",
  },
  {
    q: "Do I need to sign a long-term contract?",
    a: "No. Everything is month to month. Cancel anytime with 30 days notice.",
  },
  {
    q: "What do I need to provide?",
    a: "Your logo, photos if you have them, and your list of services. We handle everything.",
  },
  {
    q: "Will my website show up on Google?",
    a: "Yes. Every site includes local SEO setup targeting your trade and city specifically.",
  },
  {
    q: "What happens if something breaks?",
    a: "We monitor everything. Issues are fixed as part of your monthly fee. No extra charges.",
  },
  {
    q: "Can I see examples of your work?",
    a: "Yes — bristol-spark-electrical.vercel.app is a live demo built for a Bristol electrician.",
  },
  {
    q: "How does the automation actually work?",
    a: "When someone contacts you our system responds automatically in 30–60 seconds with a personalised message. You get notified instantly so you can follow up.",
  },
  {
    q: "Do you work outside Bristol?",
    a: "We started in Bristol but work with trades businesses across the UK. Get in touch and we will let you know.",
  },
];

function FAQItem({
  q,
  a,
  isOpen,
  onToggle,
  index,
  shouldReduce,
}: {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
  shouldReduce: boolean | null;
}) {
  return (
    <motion.div
      initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
      style={{ borderTop: "1px solid rgba(212,175,55,0.1)" }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-6 py-6 text-left cursor-pointer bg-transparent border-none"
      >
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "18px",
            color: isOpen ? "#f8fafc" : "#94a3b8",
            lineHeight: 1.4,
            transition: "color 0.2s ease",
            flex: 1,
          }}
        >
          {q}
        </span>

        {/* Plus / minus */}
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "20px",
            color: "#d4af37",
            lineHeight: 1,
            flexShrink: 0,
            width: "20px",
            textAlign: "center",
            transition: "transform 0.25s ease",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            display: "inline-block",
          }}
        >
          +
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "15px",
                color: "#64748b",
                lineHeight: 1.8,
                paddingBottom: "24px",
                maxWidth: "680px",
              }}
            >
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const shouldReduce = useReducedMotion();

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="faq"
      style={{ background: "#0a0f1e", padding: "120px 0" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Label */}
        <motion.p
          className="gold-label mb-6"
          initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          FAQ
        </motion.p>

        {/* Headline */}
        <motion.h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 300,
            fontSize: "clamp(40px, 5vw, 64px)",
            lineHeight: 1.0,
            color: "#f8fafc",
            marginBottom: "72px",
          }}
          initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          Common Questions.
        </motion.h2>

        {/* FAQ list */}
        <div className="max-w-[860px]">
          {/* Bottom border on last item */}
          <div style={{ borderBottom: "1px solid rgba(212,175,55,0.1)" }}>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                q={faq.q}
                a={faq.a}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
                index={i}
                shouldReduce={shouldReduce}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
