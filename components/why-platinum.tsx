"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Zap, Clock, Shield } from "lucide-react";

const items = [
  {
    Icon: MapPin,
    label: "BRISTOL BASED",
    body: "We're local. We understand your market, your competition, and your customers.",
  },
  {
    Icon: Zap,
    label: "AI POWERED",
    body: "We use the latest AI tools to build faster and smarter than any agency.",
  },
  {
    Icon: Clock,
    label: "LIVE IN 5 DAYS",
    body: "Not weeks. Not months. 5 working days from brief to live website.",
  },
  {
    Icon: Shield,
    label: "NO CONTRACTS",
    body: "Month to month. If we're not delivering results, you walk away. Simple.",
  },
];

export default function WhyPlatinum() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="why-platinum"
      style={{ background: "#020617", padding: "120px 0" }}
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
          WHY US
        </motion.p>

        {/* Headline */}
        <motion.h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 300,
            fontSize: "clamp(40px, 5vw, 72px)",
            lineHeight: 1.0,
            color: "#f8fafc",
            marginBottom: "80px",
          }}
          initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          Built Different.
        </motion.h2>

        {/* Four items — horizontal row on desktop, 2×2 tablet, stacked mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {items.map((item, i) => {
            const Icon = item.Icon;
            return (
              <motion.div
                key={item.label}
                initial={shouldReduce ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: "easeOut" }}
                className="relative flex flex-col gap-4 py-10 px-8"
              >
                {/* Gold vertical divider — between items only */}
                {i > 0 && (
                  <span
                    className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2"
                    style={{
                      width: "1px",
                      height: "80px",
                      background: "rgba(212,175,55,0.15)",
                    }}
                    aria-hidden
                  />
                )}

                {/* Icon */}
                <Icon size={24} color="#d4af37" strokeWidth={1.5} />

                {/* Label */}
                <p
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "12px",
                    letterSpacing: "0.18em",
                    color: "#d4af37",
                  }}
                >
                  {item.label}
                </p>

                {/* Body */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    color: "#64748b",
                    lineHeight: 1.7,
                  }}
                >
                  {item.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
