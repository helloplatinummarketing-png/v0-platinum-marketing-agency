"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface MagneticButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function MagneticButton({
  href,
  onClick,
  children,
  className = "",
  external = false,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const shouldReduce = useReducedMotion();

  const handleMouseMove = (e: React.MouseEvent) => {
    if (shouldReduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({
      x: (e.clientX - cx) * 0.35,
      y: (e.clientY - cy) * 0.35,
    });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const sharedStyle: React.CSSProperties = {
    background: "#d4af37",
    padding: "14px 36px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    userSelect: "none",
  };

  const inner = (
    <motion.div
      ref={ref}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={sharedStyle}
      className={className}
    >
      {children}
    </motion.div>
  );

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      );
    }
    // Scroll to anchor
    return (
      <a
        href={href}
        onClick={(e) => {
          e.preventDefault();
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {inner}
      </a>
    );
  }

  return (
    <button onClick={onClick} style={{ background: "none", border: "none", padding: 0 }}>
      {inner}
    </button>
  );
}
