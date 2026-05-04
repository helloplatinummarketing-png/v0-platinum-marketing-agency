'use client';

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useEffect, useRef } from 'react';

function MorphingNumber({
  target,
  prefix = '',
  suffix = '',
}: {
  target: number;
  prefix?: string;
  suffix?: string;
}) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(spanRef, { once: true, margin: '-80px' });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { damping: 20, stiffness: 50 });
  const display = useTransform(spring, (v) => `${prefix}${Math.round(v).toLocaleString()}${suffix}`);

  useEffect(() => {
    if (inView) raw.set(target);
  }, [inView, raw, target]);

  return <motion.span ref={spanRef}>{display}</motion.span>;
}

const stats = [
  {
    value: 91,
    prefix: '',
    suffix: '%',
    label: 'of customers search online before calling a tradesperson',
  },
  {
    value: 78,
    prefix: '',
    suffix: '%',
    label: 'of jobs go to whoever responds first',
  },
  {
    value: 2400,
    prefix: '£',
    suffix: '',
    label: 'lost every month from missed calls and cold quotes',
  },
];

export default function Stats() {
  return (
    <section className="section-pad" style={{ background: '#0d0d24' }}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-5 leading-tight"
            style={{ fontFamily: 'var(--font-heading)', color: '#e8e8f0' }}
          >
            Most Trades Businesses Are{' '}
            <span style={{ color: '#d4af37' }}>Invisible Online.</span>
            <br />
            Here&apos;s What That Costs.
          </h2>
        </motion.div>

        {/* Stat cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.15 }}
              className="platinum-card p-8"
              style={{ borderLeft: '4px solid #d4af37' }}
            >
              <div
                className="counter-number text-6xl md:text-7xl mb-4"
                style={{ color: '#d4af37' }}
              >
                <MorphingNumber
                  target={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <p
                className="text-base leading-snug"
                style={{ color: '#6b6b8a', fontFamily: 'var(--font-body)' }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
