'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const BOOKING = 'https://cal.com/platinummarketingagency/15min';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed top-3 left-0 right-0 z-50 px-4"
      >
        <div
          className="max-w-6xl mx-auto px-5 h-[64px] flex items-center justify-between rounded-xl transition-all duration-300"
          style={{
            background: scrolled ? 'rgba(7,7,26,0.95)' : 'rgba(7,7,26,0.6)',
            backdropFilter: 'blur(16px)',
            borderBottom: scrolled ? '1px solid #d4af37' : '1px solid rgba(30,30,66,0.6)',
            boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
          }}
        >
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src="/platinum-logo.png"
              alt="Platinum Marketing Agency"
              width={135}
              height={45}
              style={{ height: 45, width: 'auto' }}
              priority
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-7">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold tracking-widest uppercase text-[#e8e8f0] hover:text-[#d4af37] transition-colors duration-200 relative group"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 right-0 h-px bg-[#d4af37] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:scale-105"
            style={{
              background: '#d4af37',
              color: '#07071a',
              fontFamily: 'var(--font-body)',
            }}
          >
            Book Free Demo
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#e8e8f0] p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ background: '#07071a' }}
          >
            <nav className="flex flex-col items-center gap-10">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="text-2xl font-semibold tracking-widest uppercase text-[#e8e8f0] hover:text-[#d4af37] transition-colors"
                  style={{ fontFamily: 'var(--font-heading)' }}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: links.length * 0.07 }}
                className="mt-4 px-8 py-3 rounded-lg font-semibold text-lg"
                style={{ background: '#d4af37', color: '#07071a', fontFamily: 'var(--font-body)' }}
                onClick={() => setMenuOpen(false)}
              >
                Book Free Demo
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
