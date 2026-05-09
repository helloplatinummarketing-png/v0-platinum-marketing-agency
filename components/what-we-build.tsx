"use client";

import { useRef, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Monitor, Zap, TrendingUp } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ── GSAP wire thread SVG ── */
function WireThread() {
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const path = pathRef.current;
    const container = containerRef.current;
    if (!path || !container || shouldReduce) return;

    const length = path.getTotalLength();
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    const tween = gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1.5,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [shouldReduce]);

  return (
    <div
      ref={containerRef}
      className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 pointer-events-none hidden lg:block"
      style={{ width: "120px" }}
      aria-hidden
    >
      <svg
        viewBox="0 0 120 900"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "100%" }}
        fill="none"
      >
        {/* Main vertical thread with branches at each pillar */}
        <path
          ref={pathRef}
          d="
            M60 0
            L60 220
            L20 260
            L60 300
            L60 500
            L100 540
            L60 580
            L60 780
            L20 820
            L60 860
            L60 900
          "
          stroke="#d4af37"
          strokeWidth="1"
          strokeOpacity="0.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* Branch dots at each pillar junction */}
        <circle cx="60" cy="300" r="3" fill="#d4af37" fillOpacity="0.6" />
        <circle cx="60" cy="580" r="3" fill="#d4af37" fillOpacity="0.6" />
        <circle cx="60" cy="860" r="3" fill="#d4af37" fillOpacity="0.6" />
      </svg>
    </div>
  );
}

/* ── Pillars ── */
const pillars = [
  {
    tag: "DAYS 1–5",
    Icon: Monitor,
    headline: "Built to Convert",
    body: "A premium animated website that looks better than any competitor in your area. Local SEO built in. Live in 5 working days.",
  },
  {
    tag: "DAY 5 ONWARDS",
    Icon: Zap,
    headline: "Runs While You Work",
    body: "Missed calls texted back in 30 seconds. Leads followed up in 60 seconds. Reviews collected after every job. All automatic.",
  },
  {
    tag: "MONTH 1 ONWARDS",
    Icon: TrendingUp,
    headline: "Compounds Over Time",
    body: "More reviews means higher Google ranking. Higher ranking means more calls. More calls means more jobs. All growing in the background.",
  },
];

export default function WhatWeBuild() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="services"
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
          THE SOLUTION
        </motion.p>

        {/* Headline */}
        <motion.h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 300,
            fontSize: "clamp(40px, 5vw, 72px)",
            lineHeight: 1.0,
            color: "#f8fafc",
            maxWidth: "640px",
            marginBottom: "100px",
          }}
          initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          One System.
          <br />
          Every Lead Captured.
        </motion.h2>

        {/* Pillars + wire thread */}
        <div className="relative">
          <WireThread />

          <div className="flex flex-col gap-0">
            {pillars.map((pillar, i) => {
              const Icon = pillar.Icon;
              const isRight = i % 2 === 1;

              return (
                <motion.div
                  key={i}
                  initial={shouldReduce ? {} : { opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.65,
                    delay: 0.1,
                    ease: "easeOut",
                  }}
                  className={`flex ${isRight ? "justify-end" : "justify-start"} py-16`}
                >
                  <div
                    style={{
                      maxWidth: "480px",
                      width: "100%",
                    }}
                    className={isRight ? "lg:pr-24" : "lg:pl-24"}
                  >
                    {/* Tag */}
                    <p
                      className="gold-label mb-4"
                      style={{ fontSize: "10px" }}
                    >
                      {pillar.tag}
                    </p>

                    {/* Icon */}
                    <div className="mb-5">
                      <Icon size={32} color="#d4af37" strokeWidth={1.5} />
                    </div>

                    {/* Headline */}
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 300,
                        fontSize: "40px",
                        lineHeight: 1.05,
                        color: "#f8fafc",
                        marginBottom: "16px",
                      }}
                    >
                      {pillar.headline}
                    </h3>

                    {/* Body */}
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "16px",
                        color: "#64748b",
                        lineHeight: 1.75,
                      }}
                    >
                      {pillar.body}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
