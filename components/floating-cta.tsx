'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BOOKING = 'https://cal.com/platinummarketingagency/15min';

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={BOOKING}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300, damping: 22 }}
          className="fixed bottom-6 right-6 z-[150] flex items-center gap-2 font-bold text-sm px-5 py-3 rounded-full shadow-2xl animate-glow-pulse"
          style={{
            background: '#d4af37',
            color: '#07071a',
            fontFamily: 'var(--font-body)',
          }}
        >
          ⚡ Book Free Demo
        </motion.a>
      )}
    </AnimatePresence>
  );
}
