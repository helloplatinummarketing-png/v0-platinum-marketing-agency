"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useReducedMotion } from "framer-motion";

const BOOKING = "https://cal.com/platinummarketingagency/15min";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);
  const { scrollY } = useScroll();
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    return scrollY.on("change", (y) => {
      setVisible(y > 400);
    });
  }, [scrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={BOOKING}
          target="_blank"
          rel="noopener noreferrer"
          initial={shouldReduce ? {} : { y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="fixed bottom-6 right-6 z-50 animate-glow-pulse"
          style={{
            background: "#d4af37",
            padding: "14px 24px",
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            boxShadow: "0 0 20px rgba(212,175,55,0.4)",
          }}
        >
          <span style={{ fontSize: "14px" }}>⚡</span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "10px",
              letterSpacing: "0.25em",
              color: "#020617",
            }}
          >
            BOOK FREE DEMO
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
