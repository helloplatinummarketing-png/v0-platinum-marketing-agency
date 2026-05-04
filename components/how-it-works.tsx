'use client';

import { motion, useInView } from 'framer-motion';
import { Phone, Monitor, TrendingUp } from 'lucide-react';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    icon: Phone,
    title: 'Book a Free Demo',
    body: '15 minutes. We look at your current online presence and tell you exactly what\'s costing you jobs.',
  },
  {
    number: '02',
    icon: Monitor,
    title: 'We Build It',
    body: 'Your website and automation system built, tested, and ready in 5 working days.',
  },
  {
    number: '03',
    icon: TrendingUp,
    title: 'You Grow',
    body: 'Leads captured, calls recovered, reviews collected — all automatically while you focus on the work.',
  },
];

function ConnectingLine({ inView }: { inView: boolean }) {
  return (
    <div className="hidden md:block absolute top-10 left-0 right-0 px-[16%] pointer-events-none">
      <svg viewBox="0 0 1000 4" preserveAspectRatio="none" className="w-full" style={{ height: 4 }}>
        <line x1="0" y1="2" x2="1000" y2="2" stroke="#d4af37" strokeOpacity="0.12" strokeWidth="2" />
        <motion.line
          x1="0" y1="2" x2="1000" y2="2"
          stroke="#d4af37"
          strokeWidth="2"
          strokeOpacity="0.8"
          strokeLinecap="round"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.5, ease: 'easeInOut' }}
          style={{ transformOrigin: 'left center' }}
        />
        <motion.line
          x1="0" y1="2" x2="1000" y2="2"
          stroke="#d4af37"
          strokeWidth="6"
          strokeOpacity="0.12"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.4, delay: 0.5, ease: 'easeInOut' }}
          style={{ transformOrigin: 'left center' }}
        />
      </svg>
    </div>
  );
}

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section ref={ref} className="section-pad" style={{ background: '#0d0d24' }}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: '#e8e8f0' }}
          >
            From First Call to First Client —{' '}
            <span style={{ color: '#d4af37' }}>In 5 Days</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12">
          <ConnectingLine inView={inView} />
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                {/* Icon circle */}
                <div className="relative mb-6">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center"
                    style={{
                      background: 'rgba(212,175,55,0.08)',
                      border: '2px solid rgba(212,175,55,0.3)',
                    }}
                  >
                    <Icon size={28} style={{ color: '#d4af37' }} />
                  </div>
                  <span
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center"
                    style={{
                      background: '#d4af37',
                      color: '#07071a',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {step.number}
                  </span>
                </div>

                <h3
                  className="text-xl font-bold mb-3"
                  style={{ fontFamily: 'var(--font-heading)', color: '#e8e8f0' }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-sm leading-relaxed max-w-xs"
                  style={{ color: '#6b6b8a', fontFamily: 'var(--font-body)' }}
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
