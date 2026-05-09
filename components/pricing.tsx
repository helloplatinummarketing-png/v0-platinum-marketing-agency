"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

const BOOKING = "https://cal.com/platinummarketingagency/15min";

const packages = [
  {
    tag: "ENTRY POINT",
    tagColor: "#d4af37",
    name: "Visibility Package",
    price: "£750",
    monthly: "+ £79/month",
    features: [
      "Premium animated website",
      "Local SEO setup",
      "Google Business Profile optimised",
      "Contact form + instant notifications",
      "Hosting and maintenance",
      "Live in 5 working days",
    ],
    cta: "GET STARTED →",
    ctaStyle: "text",
    featured: false,
  },
  {
    tag: "BEST FOR LEADS",
    tagColor: "#d4af37",
    name: "Lead Machine",
    price: "£1,200",
    monthly: "+ £247/month",
    features: [
      "Everything in Visibility",
      "AI chatbot on website",
      "Missed call text-back (30 seconds)",
      "Instant lead response (60 seconds)",
      "Review collection automation",
      "Lead tracking dashboard",
    ],
    cta: "GET STARTED →",
    ctaStyle: "text",
    featured: false,
  },
  {
    tag: "QUICK WIN",
    tagColor: "#d4af37",
    name: "Reputation Builder",
    price: "£400",
    monthly: "+ £79/month",
    features: [
      "Automated review requests after every job",
      "Direct Google review link",
      "5-day follow-up reminder",
      "Review tracking dashboard",
      "Monthly report",
    ],
    cta: "GET STARTED →",
    ctaStyle: "text",
    featured: false,
  },
  {
    tag: "MOST COMPLETE",
    tagColor: "#22c55e",
    name: "Full System",
    price: "£2,000",
    monthly: "+ £497/month",
    features: [
      "Everything in Lead Machine",
      "Appointment reminders (48hr + 2hr)",
      "No-show recovery",
      "Quote follow-up (Day 3, 7, 14)",
      "Invoice chase sequence",
      "Repeat business follow-up",
      "AI voice caller for quotes",
      "Monthly performance report",
      "Direct WhatsApp access to Platinum",
    ],
    cta: "BOOK FREE DEMO →",
    ctaStyle: "filled",
    featured: true,
  },
];

function PricingCard({
  pkg,
  index,
  shouldReduce,
}: {
  pkg: (typeof packages)[0];
  index: number;
  shouldReduce: boolean | null;
}) {
  return (
    <motion.div
      initial={shouldReduce ? {} : { opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      style={{
        background: "#0f1729",
        border: pkg.featured
          ? "1px solid rgba(212,175,55,0.4)"
          : "1px solid rgba(212,175,55,0.12)",
        padding: "40px",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        transition: "border-color 0.3s ease",
      }}
      className={pkg.featured ? "animate-border-glow" : ""}
    >
      {/* Tag */}
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          letterSpacing: "0.18em",
          color: pkg.tagColor,
          marginBottom: "20px",
        }}
      >
        {pkg.tag}
      </p>

      {/* Package name */}
      <h3
        style={{
          fontFamily: "var(--font-heading)",
          fontWeight: 300,
          fontSize: "24px",
          color: "#f8fafc",
          marginBottom: "16px",
          lineHeight: 1.1,
        }}
      >
        {pkg.name}
      </h3>

      {/* Price */}
      <div style={{ marginBottom: "8px" }}>
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 300,
            fontSize: "64px",
            lineHeight: 1,
            color: "#d4af37",
          }}
        >
          {pkg.price}
        </span>
      </div>
      <p
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "14px",
          color: "#64748b",
          marginBottom: "28px",
        }}
      >
        {pkg.monthly}
      </p>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: "rgba(212,175,55,0.1)",
          marginBottom: "24px",
        }}
      />

      {/* Features */}
      <ul className="flex flex-col gap-3 flex-1" style={{ marginBottom: "32px" }}>
        {pkg.features.map((f, fi) => (
          <li
            key={fi}
            className="flex items-start gap-3"
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "14px",
              color: "#f8fafc",
              lineHeight: 1.5,
            }}
          >
            <Check
              size={14}
              className="shrink-0 mt-0.5"
              style={{ color: "#d4af37" }}
            />
            {f}
          </li>
        ))}
      </ul>

      {/* CTA */}
      {pkg.ctaStyle === "filled" ? (
        <a
          href={BOOKING}
          target="_blank"
          rel="noopener noreferrer"
          className="text-center animate-glow-pulse"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.2em",
            background: "#d4af37",
            color: "#020617",
            padding: "16px 24px",
            display: "block",
            textDecoration: "none",
            transition: "opacity 0.2s ease",
          }}
        >
          {pkg.cta}
        </a>
      ) : (
        <a
          href={BOOKING}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "#d4af37",
            textDecoration: "none",
            display: "block",
            paddingTop: "8px",
          }}
        >
          {pkg.cta}
        </a>
      )}
    </motion.div>
  );
}

export default function Pricing() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="pricing"
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
          INVESTMENT
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
          Simple Pricing.
          <br />
          No Surprises.
        </motion.h2>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {packages.map((pkg, i) => (
            <PricingCard
              key={pkg.name}
              pkg={pkg}
              index={i}
              shouldReduce={shouldReduce}
            />
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          className="text-center mt-16"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "16px",
            color: "#64748b",
            lineHeight: 1.7,
          }}
          initial={shouldReduce ? {} : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Not sure which package? Book a free 15-minute call and we&apos;ll tell
          you exactly what your business needs.
          <br />
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            style={{ color: "#d4af37", textDecoration: "none" }}
          >
            Book free call →
          </a>
        </motion.p>
      </div>
    </section>
  );
}
