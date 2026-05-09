"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "WORK", href: "#work" },
  { label: "SERVICES", href: "#services" },
  { label: "PRICING", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          backdropFilter: scrolled ? "blur(24px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
          background: scrolled ? "rgba(2,6,23,0.92)" : "transparent",
          borderBottom: scrolled
            ? "1px solid rgba(212,175,55,0.12)"
            : "1px solid transparent",
        }}
        initial={shouldReduce ? {} : { y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center flex-shrink-0">
            <Image
              src="/platinum-logo.png"
              alt="Platinum Marketing Agency"
              width={120}
              height={40}
              style={{ height: "40px", width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="text-[11px] tracking-[0.2em] text-[#64748b] hover:text-[#d4af37] transition-colors duration-200 cursor-pointer bg-transparent border-none"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="https://cal.com/platinummarketingagency/15min"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] tracking-[0.2em] text-[#d4af37] border border-[#d4af37] px-5 py-2.5 hover:bg-[#d4af37] hover:text-[#020617] transition-all duration-300"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              BOOK FREE DEMO
            </a>
          </div>

          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 relative z-60 bg-transparent border-none cursor-pointer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              className="block w-6 h-px bg-[#f8fafc]"
              animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="block w-6 h-px bg-[#f8fafc]"
              animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.2 }}
            />
            <motion.span
              className="block w-6 h-px bg-[#f8fafc]"
              animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[#020617] flex flex-col items-center justify-center"
            initial={shouldReduce ? {} : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            {/* Corner coords */}
            <p
              className="absolute top-8 left-6 text-[9px] tracking-[0.2em] text-[#f8fafc]/20"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              LOC: BRISTOL_HQ
            </p>

            <nav className="flex flex-col items-center gap-10">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="text-[13px] tracking-[0.3em] text-[#f8fafc] hover:text-[#d4af37] transition-colors duration-200 cursor-pointer bg-transparent border-none"
                  style={{ fontFamily: "var(--font-mono)" }}
                  initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                href="https://cal.com/platinummarketingagency/15min"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-[12px] tracking-[0.25em] text-[#020617] bg-[#d4af37] px-8 py-4"
                style={{ fontFamily: "var(--font-mono)" }}
                initial={shouldReduce ? {} : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.32, duration: 0.4 }}
                onClick={() => setMenuOpen(false)}
              >
                BOOK FREE DEMO
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
