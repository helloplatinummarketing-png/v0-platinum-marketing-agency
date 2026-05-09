"use client";

import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Phone, Monitor, TrendingUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    number: "01",
    Icon: Phone,
    headline: "Book a Free Demo",
    body: "15 minutes. We look at your online presence and tell you exactly what's costing you jobs.",
  },
  {
    number: "02",
    Icon: Monitor,
    headline: "We Build It",
    body: "Your website and automation built, tested, and live in 5 working days.",
  },
  {
    number: "03",
    Icon: TrendingUp,
    headline: "You Grow",
    body: "Leads captured automatically while you focus on the work.",
  },
];

/* ── GSAP connecting line drawn left→right on scroll ── */
function ConnectingLine({ containerRef }: { containerRef: React.RefObject<HTMLElement | null> }) {
  const pathRef = useRef<SVGLineElement>(null);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const line = pathRef.current;
    const container = containerRef.current;
    if (!line || !container || shouldReduce) return;

    // SVG line total length approximation via getBBox
    const totalLength = 1000;
    gsap.set(line, { strokeDasharray: totalLength, strokeDashoffset: totalLength });

    const tween = gsap.to(line, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top 65%",
        end: "top 20%",
        scrub: 1,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [containerRef, shouldReduce]);

  return (
    <div
      className="hidden md:block absolute top-[52px] left-0 right-0 pointer-events-none"
      style={{ paddingLeft: "14%", paddingRight: "14%" }}
      aria-hidden
    >
      {/* Ghost track */}
      <svg
        viewBox="0 0 1000 4"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "4px", display: "block" }}
      >
        <line
          x1="0" y1="2" x2="1000" y2="2"
          stroke="#d4af37"
          strokeOpacity="0.08"
          strokeWidth="1"
        />
        {/* Animated gold line */}
        <line
          ref={pathRef}
          x1="0" y1="2" x2="1000" y2="2"
          stroke="#d4af37"
          strokeOpacity="0.5"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduce = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
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
          THE PROCESS
        </motion.p>

        {/* Headline */}
        <motion.h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 300,
            fontSize: "clamp(36px, 5vw, 72px)",
            lineHeight: 1.0,
            color: "#f8fafc",
            marginBottom: "100px",
          }}
          initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          From First Call to
          <br />
          First Client — 5 Days.
        </motion.h2>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
          <ConnectingLine containerRef={sectionRef} />

          {steps.map((step, i) => {
            const Icon = step.Icon;
            return (
              <motion.div
                key={step.number}
                initial={shouldReduce ? {} : { opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: "easeOut" }}
                className="flex flex-col items-start md:items-center text-left md:text-center"
              >
                {/* Step number + icon row */}
                <div className="flex md:flex-col items-center gap-4 md:gap-0 mb-6">
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "48px",
                      lineHeight: 1,
                      color: "#d4af37",
                      display: "block",
                    }}
                  >
                    {step.number}
                  </span>
                  <div className="hidden md:block" style={{ height: "16px" }} />
                  <Icon
                    size={28}
                    color="#d4af37"
                    strokeWidth={1.5}
                    className="md:hidden lg:hidden"
                  />
                </div>

                {/* Icon — desktop only, below number */}
                <div className="hidden md:flex items-center justify-center mb-6">
                  <Icon size={28} color="#d4af37" strokeWidth={1.5} />
                </div>

                {/* Headline */}
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 300,
                    fontSize: "28px",
                    lineHeight: 1.1,
                    color: "#f8fafc",
                    marginBottom: "12px",
                  }}
                >
                  {step.headline}
                </h3>

                {/* Body */}
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "15px",
                    color: "#64748b",
                    lineHeight: 1.7,
                    maxWidth: "280px",
                  }}
                >
                  {step.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
