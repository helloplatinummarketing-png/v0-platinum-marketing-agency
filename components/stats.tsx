"use client";

import { motion, useReducedMotion } from "framer-motion";

const stats = [
  { number: "91%", label: "Customers search online first" },
  { number: "5 Days", label: "Average site delivery" },
  { number: "24/7", label: "Automation uptime" },
  { number: "£0", label: "Cost to book a demo" },
  { number: "30 Days", label: "Notice to cancel" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.55, ease: "easeOut" as const },
  },
};

export default function Stats() {
  const shouldReduce = useReducedMotion();

  return (
    <section
      style={{
        background: "rgba(212,175,55,0.03)",
        borderTop: "1px solid rgba(212,175,55,0.1)",
        borderBottom: "1px solid rgba(212,175,55,0.1)",
        padding: "40px 0",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between"
          variants={shouldReduce ? {} : containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={shouldReduce ? {} : itemVariants}
              className="flex flex-col items-center text-center py-6 md:py-0 w-full md:w-auto relative"
            >
              {/* Gold vertical divider — only between items */}
              {i > 0 && (
                <span
                  className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2"
                  style={{
                    width: "1px",
                    height: "60px",
                    background: "rgba(212,175,55,0.15)",
                  }}
                  aria-hidden
                />
              )}

              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 300,
                  fontSize: "52px",
                  lineHeight: 1,
                  color: "#d4af37",
                }}
              >
                {stat.number}
              </span>
              <span
                className="mt-2 text-[10px] tracking-[0.18em] text-[#64748b] uppercase"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
