"use client";

import dynamic from "next/dynamic";
import { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

// Three.js canvas — loaded client-side only to avoid SSR issues
const KineticBackground = dynamic(
  () => import("@/components/KineticBackground"),
  { ssr: false }
);

const BOOKING = "https://cal.com/platinummarketingagency/15min";

/* ── Gold underline SVG ── */
function GoldUnderline({ visible }: { visible: boolean }) {
  return (
    <svg
      viewBox="0 0 60 4"
      className="absolute -bottom-2 right-0"
      style={{ width: "60px", height: "4px", overflow: "visible" }}
      aria-hidden
    >
      <motion.line
        x1="0"
        y1="2"
        x2="60"
        y2="2"
        stroke="#d4af37"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={visible ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      />
    </svg>
  );
}

/* ── Notification cards ── */
const cards = [
  {
    dot: "#d4af37",
    title: "Lead Captured",
    body: "Bristol electrician replied in 47 seconds",
    floatDelay: 0,
  },
  {
    dot: "#22c55e",
    title: "Site Live",
    body: "Bristol Spark deployed in 4 days",
    floatDelay: 0.5,
  },
  {
    dot: "#3b82f6",
    title: "Job Won",
    body: "Roofer booked 3 new jobs this week",
    floatDelay: 1.0,
  },
];

function NotifCard({
  card,
  index,
}: {
  card: (typeof cards)[0];
  index: number;
}) {
  const shouldReduce = useReducedMotion();
  return (
    <motion.div
      initial={shouldReduce ? {} : { x: 80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{
        delay: 1.8 + index * 0.15,
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.div
        animate={shouldReduce ? {} : { y: [0, -6, 0] }}
        transition={{
          duration: 3,
          delay: card.floatDelay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: "rgba(15,23,41,0.85)",
          border: "1px solid rgba(212,175,55,0.15)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderRadius: "8px",
          padding: "12px 16px",
        }}
        className="flex items-start gap-3 min-w-[220px]"
      >
        <span
          className="mt-1 w-2 h-2 rounded-full shrink-0 animate-pulse-dot"
          style={{
            background: card.dot,
            boxShadow: `0 0 6px ${card.dot}`,
          }}
        />
        <div>
          <p
            className="text-[11px] tracking-[0.1em] mb-0.5 text-[#f8fafc]"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {card.title}
          </p>
          <p
            className="text-[13px] leading-snug text-[#64748b]"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {card.body}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Hero ── */
export default function Hero() {
  const shouldReduce = useReducedMotion();
  const [underlineVisible, setUnderlineVisible] = useState(false);

  // Show underline after the headline animation finishes (~1.6s)
  useEffect(() => {
    const t = setTimeout(() => setUnderlineVisible(true), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{
        background: "#020617",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Three.js kinetic grid background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <KineticBackground opacityScale={1} packetCount={80} />
      </div>

      {/* Radial vignette so text stays readable */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, rgba(2,6,23,0.6) 100%)",
        }}
        aria-hidden
      />

      {/* Main content — left aligned, vertically centred */}
      <div className="relative z-10 flex-1 flex flex-col justify-center max-w-[1400px] mx-auto w-full px-6 lg:px-12 pt-28 pb-24">

        {/* Gold label */}
        <motion.p
          className="gold-label mb-8"
          initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          PLATINUM MARKETING AGENCY / BRISTOL
        </motion.p>

        {/* Lock-in headline */}
        <div className="flex flex-col md:flex-row md:items-end gap-0 md:gap-6 mb-8">
          {/* Line 1 — slides from left */}
          <motion.div
            className="relative"
            initial={shouldReduce ? {} : { x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <h1
              className="text-[#f8fafc] whitespace-nowrap"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 300,
                fontSize: "clamp(52px, 8vw, 96px)",
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
              }}
            >
              WE BUILD.
            </h1>
          </motion.div>

          {/* Line 2 — slides from right */}
          <motion.div
            className="relative"
            initial={shouldReduce ? {} : { x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          >
            <h1
              className="text-[#f8fafc] whitespace-nowrap relative inline-block"
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 300,
                fontSize: "clamp(52px, 8vw, 96px)",
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
              }}
            >
              YOU WORK.
              <GoldUnderline visible={underlineVisible} />
            </h1>
          </motion.div>
        </div>

        {/* Subheadline */}
        <motion.p
          className="text-[#64748b] mb-12 max-w-[480px]"
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "17px",
            lineHeight: 1.7,
          }}
          initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.2 }}
        >
          Premium websites and automation for UK trades businesses — live in 5
          days, running 24/7 from day one.
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-col sm:flex-row items-start gap-4 mb-20"
          initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.4 }}
        >
          {/* Primary */}
          <MagneticButton href="#work">
            <span
              className="text-[#020617] text-[11px] tracking-[0.25em]"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              SEE OUR WORK →
            </span>
          </MagneticButton>

          {/* Secondary — text only */}
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-[#d4af37] text-[13px] py-3"
            style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.15em" }}
          >
            BOOK FREE DEMO
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>

        {/* Notification cards */}
        <div className="flex flex-wrap gap-3">
          {cards.map((card, i) => (
            <NotifCard key={i} card={card} index={i} />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        initial={shouldReduce ? {} : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.2 }}
      >
        <span
          className="text-[9px] tracking-[0.3em] text-[#f8fafc]/30"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          SCROLL
        </span>
        <ChevronDown
          size={14}
          className="text-[#f8fafc]/30 animate-bounce-slow"
        />
      </motion.div>

      {/* Bristol coordinates footer */}
      <div className="absolute bottom-4 left-0 right-0 px-6 lg:px-12 flex justify-between z-10 pointer-events-none">
        <span
          className="text-[9px] tracking-[0.15em]"
          style={{ fontFamily: "var(--font-mono)", color: "rgba(248,250,252,0.2)" }}
        >
          LOC: BRISTOL_HQ / CRD: 51.4545 N, 2.5879 W
        </span>
        <span
          className="text-[9px] tracking-[0.15em] hidden sm:block"
          style={{ fontFamily: "var(--font-mono)", color: "rgba(248,250,252,0.2)" }}
        >
          CORE: KINETIC_V2 / THREAD: STABLE_ACTIVE
        </span>
      </div>
    </section>
  );
}
