"use client";

import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const KineticBackground = dynamic(
  () => import("@/components/KineticBackground"),
  { ssr: false }
);

const BOOKING = "https://cal.com/platinummarketingagency/15min";

function MagneticCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const shouldReduce = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({ x: (e.clientX - cx) * 0.3, y: (e.clientY - cy) * 0.3 });
  };

  return (
    <a
      href={BOOKING}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: "inline-block", textDecoration: "none" }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
    >
      <motion.div
        ref={ref}
        animate={{ x: pos.x, y: pos.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15 }}
        onMouseMove={handleMouseMove}
        className="animate-glow-pulse"
        style={{
          background: "#d4af37",
          padding: "18px 56px",
          cursor: "pointer",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "12px",
            letterSpacing: "0.25em",
            color: "#020617",
          }}
        >
          BOOK FREE DEMO TODAY
        </span>
      </motion.div>
    </a>
  );
}

export default function FinalCTA() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "#020617", padding: "160px 0" }}
    >
      {/* KineticBackground at 40% opacity — slower, more subtle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: 0.4 }}
        aria-hidden
      >
        <KineticBackground opacityScale={0.6} packetCount={40} />
      </div>

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 20%, rgba(2,6,23,0.7) 100%)",
        }}
        aria-hidden
      />

      {/* Content — centred */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        {/* Label */}
        <motion.p
          className="gold-label mb-8"
          initial={shouldReduce ? {} : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          GET STARTED
        </motion.p>

        {/* Headline */}
        <motion.h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 300,
            fontSize: "clamp(44px, 6vw, 80px)",
            lineHeight: 0.95,
            color: "#f8fafc",
            marginBottom: "32px",
            maxWidth: "700px",
          }}
          initial={shouldReduce ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Ready to Stop
          <br />
          Losing Jobs Online?
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "18px",
            color: "#64748b",
            lineHeight: 1.7,
            maxWidth: "560px",
            marginBottom: "56px",
          }}
          initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Book a free 15-minute demo. No obligation. No hard sell. Just straight
          advice on what your business is missing and how to fix it.
        </motion.p>

        {/* Magnetic CTA */}
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{ marginBottom: "24px" }}
        >
          <MagneticCTA />
        </motion.div>

        {/* Phone */}
        <motion.p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "11px",
            letterSpacing: "0.2em",
            color: "#64748b",
          }}
          initial={shouldReduce ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.45 }}
        >
          or call{" "}
          <a
            href="tel:07594217753"
            style={{ color: "#64748b", textDecoration: "none" }}
            className="hover:text-[#d4af37] transition-colors duration-200"
          >
            07594 217753
          </a>
        </motion.p>
      </div>
    </section>
  );
}
