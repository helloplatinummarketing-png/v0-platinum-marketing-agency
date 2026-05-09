"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function OurWork() {
  const shouldReduce = useReducedMotion();
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id="work"
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
          BUILT BY PLATINUM
        </motion.p>

        {/* Headline */}
        <motion.h2
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 300,
            fontSize: "clamp(40px, 5vw, 72px)",
            lineHeight: 1.0,
            color: "#f8fafc",
            marginBottom: "64px",
          }}
          initial={shouldReduce ? {} : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          See It Working.
        </motion.h2>

        {/* Featured project card */}
        <motion.div
          initial={shouldReduce ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <motion.a
            href="https://bristol-spark-electrical.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            animate={{
              borderColor: hovered
                ? "rgba(212,175,55,0.4)"
                : "rgba(212,175,55,0.15)",
              boxShadow: hovered
                ? "0 0 60px rgba(212,175,55,0.15), 0 0 120px rgba(212,175,55,0.06)"
                : "0 0 0px rgba(212,175,55,0)",
            }}
            transition={{ duration: 0.3 }}
            style={{
              display: "block",
              background: "#0f1729",
              border: "1px solid rgba(212,175,55,0.15)",
              padding: "48px",
              textDecoration: "none",
            }}
            className="block"
          >
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
              {/* Left — project info */}
              <div className="flex-1">
                <p
                  className="gold-label mb-4"
                  style={{ fontSize: "12px", letterSpacing: "0.2em" }}
                >
                  BRISTOL SPARK ELECTRICAL
                </p>

                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 300,
                    fontSize: "48px",
                    lineHeight: 1.0,
                    color: "#f8fafc",
                    marginBottom: "16px",
                  }}
                >
                  NICEIC Approved Electrician
                </h3>

                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "#64748b",
                    marginBottom: "4px",
                  }}
                >
                  Trade: Electrician · Bristol, UK
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "14px",
                    color: "#64748b",
                    marginBottom: "24px",
                  }}
                >
                  Built in 4 days
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {["WEBSITE", "AUTOMATION", "LOCAL SEO"].map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "10px",
                        letterSpacing: "0.15em",
                        color: "#d4af37",
                        border: "1px solid rgba(212,175,55,0.2)",
                        padding: "4px 10px",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — arrow CTA */}
              <div className="flex flex-col items-center lg:items-end gap-3 shrink-0">
                <motion.span
                  animate={{ x: hovered ? 8 : 0 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 300,
                    fontSize: "64px",
                    lineHeight: 1,
                    color: "#d4af37",
                  }}
                >
                  →
                </motion.span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: "11px",
                    letterSpacing: "0.2em",
                    color: "#d4af37",
                  }}
                >
                  VIEW LIVE SITE
                </span>
              </div>
            </div>
          </motion.a>
        </motion.div>

        {/* Teaser line */}
        <motion.div
          className="mt-16 text-center"
          initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(22px, 3vw, 32px)",
              color: "#64748b",
              marginBottom: "16px",
            }}
          >
            Your business could be next.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector("#pricing");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="cursor-pointer bg-transparent border-none"
            style={{ color: "#d4af37" }}
          >
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ display: "block", fontSize: "20px" }}
            >
              ↓
            </motion.span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
