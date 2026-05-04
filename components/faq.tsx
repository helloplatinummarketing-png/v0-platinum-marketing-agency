'use client';

import { motion, AnimatePresence, useInView } from 'framer-motion';
import { useState, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'How quickly will my website be live?',
    a: 'Most websites are live within 5 working days of receiving your content and approval.',
  },
  {
    q: 'Do I need to sign a long-term contract?',
    a: 'No. Everything is month to month. Cancel anytime with 30 days notice.',
  },
  {
    q: 'What do I need to provide?',
    a: 'Just your logo, photos if you have them, and your list of services. We handle everything else.',
  },
  {
    q: 'Will my website show up on Google?',
    a: 'Yes. Every website we build includes local SEO setup targeting your trade and city specifically.',
  },
  {
    q: 'What happens if something breaks?',
    a: 'We monitor everything. If something breaks we fix it — included in your monthly fee.',
  },
  {
    q: 'Can I see examples of your work?',
    a: 'Yes — visit bristol-spark-electrical.vercel.app to see a live demo we built for a Bristol electrician.',
  },
  {
    q: 'How does the automation actually work?',
    a: 'When someone contacts you — by phone, website, or social — our system responds automatically within 30–60 seconds with a personalised message. You get notified instantly so you can follow up personally.',
  },
  {
    q: 'Do you work with businesses outside Bristol?',
    a: 'We started in Bristol but work with trades businesses across the UK. Get in touch and we will let you know if we can help.',
  },
];

function FAQItem({
  q, a, index, inView,
}: {
  q: string; a: string; index: number; inView: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="rounded-xl overflow-hidden"
      style={{ border: '1px solid #1e1e42' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left transition-colors gap-4"
        style={{ background: open ? '#11112e' : '#0d0d24' }}
      >
        <span
          className="font-medium text-sm md:text-base"
          style={{ color: '#e8e8f0', fontFamily: 'var(--font-body)' }}
        >
          {q}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown size={18} style={{ color: '#d4af37' }} />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div
              className="px-6 pb-5 pt-3 text-sm leading-relaxed"
              style={{
                borderTop: '1px solid #1e1e42',
                color: '#6b6b8a',
                fontFamily: 'var(--font-body)',
                background: '#11112e',
              }}
            >
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="faq" ref={ref} className="section-pad" style={{ background: '#0d0d24' }}>
      <div className="max-w-3xl mx-auto px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-heading)', color: '#e8e8f0' }}
          >
            Common <span style={{ color: '#d4af37' }}>Questions</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
