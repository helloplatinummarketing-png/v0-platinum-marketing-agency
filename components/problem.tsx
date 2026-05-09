"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/* ── Slot machine morphing counter ── */
const CHARS = "0123456789";

function randomChar() {
  return CHARS[Math.floor(Math.random() * CHARS.length)];
}

function SlotCounter({
  target,
  suffix = "",
  prefix = "",
}: {
  target: string;
  suffix?: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [displayed, setDisplayed] = useState(target);
  const shouldReduce = useReducedMotion();
  const hasRun = useRef(false);

  useEffect(() => {
    if (!inView || hasRun.current || shouldReduce) return;
    hasRun.current = true;

    // Only morph the numeric characters
    const numericOnly = target.replace(/[^0-9]/g, "");
    if (!numericOnly) return;

    let count = 0;
    const total = 12;
    const interval = setInterval(() => {
      count++;
      if (count >= total) {
        setDisplayed(target);
        clearInterval(interval);
      } else {
        // Replace each digit with a random digit
        const morphed = target.replace(/[0-9]/g, () => randomChar());
        setDisplayed(morphed);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [inView, target, shouldReduce]);

  return (
    <span ref={ref}>
      {prefix}
      {displayed}
      {suffix}
    </span>
  );
}

/* ── Stat cards ── */
const statCards = [
  {
    number: "3-5",
    label: "missed calls every day on the tools",
  },
  {
    number: "78%",
    label: "of jobs go to whoever responds first",
  },
  {
    number: "£2,400",
    label: "lost monthly from missed leads",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function Problem() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="problem"
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
          THE PROBLEM
        </motion.p>

        {/* Headline */}
        <motion.h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 300,
            fontSize: "clamp(40px, 5vw, 72px)",
            lineHeight: 1.0,
            color: "#f8fafc",
            maxWidth: "720px",
            marginBottom: "24px",
          }}
          initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          Most Trades Businesses Are
          <br />
          Invisible Online.
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "18px",
            color: "#64748b",
            lineHeight: 1.7,
            maxWidth: "560px",
            marginBottom: "80px",
          }}
          initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          While you&apos;re on the tools, your customers are searching Google
          and calling whoever shows up first. That business is getting the job.
          You&apos;re missing work you never knew existed.
        </motion.p>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {statCards.map((card, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={shouldReduce ? {} : cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              style={{
                background: "#0f1729",
                borderLeft: "3px solid #d4af37",
                border: "1px solid rgba(212,175,55,0.12)",
                borderLeftWidth: "3px",
                borderLeftColor: "#d4af37",
                padding: "48px 40px",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 300,
                  fontSize: "80px",
                  lineHeight: 1,
                  color: "#d4af37",
                  marginBottom: "16px",
                }}
              >
                <SlotCounter target={card.number} />
              </div>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "15px",
                  color: "#64748b",
                  lineHeight: 1.6,
                }}
              >
                {card.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
