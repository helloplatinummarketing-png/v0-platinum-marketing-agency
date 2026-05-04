'use client';

import { motion } from 'framer-motion';
import { Globe, Zap, TrendingUp } from 'lucide-react';

const pillars = [
  {
    icon: Globe,
    iconColor: '#d4af37',
    title: 'THE WEBSITE',
    body: 'A premium animated website that looks better than any competitor in your area. Fast, mobile-first, local SEO built in. Live in 5 working days.',
  },
  {
    icon: Zap,
    iconColor: '#4f46e5',
    title: 'THE AUTOMATION',
    body: 'Every missed call gets a text back in 30 seconds. Every lead gets a personalised reply in 60 seconds. Every quote gets followed up automatically. All running while you\'re on the tools.',
  },
  {
    icon: TrendingUp,
    iconColor: '#10b981',
    title: 'THE GROWTH',
    body: 'Google reviews collected after every job. Appointments confirmed and reminded. Repeat customers brought back automatically. Your business grows in the background.',
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad" style={{ background: '#0d0d24' }}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: '#e8e8f0' }}
          >
            One System.{' '}
            <span style={{ color: '#d4af37' }}>Every Lead Captured.</span>
          </h2>
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: '#6b6b8a', fontFamily: 'var(--font-body)' }}
          >
            We build the website, connect the automation, and manage everything — you just focus on the job.
          </p>
        </motion.div>

        {/* Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.15 }}
                className="platinum-card p-8"
              >
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: `${p.iconColor}18`,
                    border: `1px solid ${p.iconColor}30`,
                  }}
                >
                  <Icon size={22} style={{ color: p.iconColor }} />
                </div>

                {/* Title */}
                <p
                  className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: p.iconColor, fontFamily: 'var(--font-body)' }}
                >
                  {p.title}
                </p>

                {/* Body */}
                <p
                  className="text-base leading-relaxed"
                  style={{ color: '#6b6b8a', fontFamily: 'var(--font-body)' }}
                >
                  {p.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
