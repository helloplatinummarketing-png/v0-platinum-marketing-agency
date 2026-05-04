'use client';

import { motion } from 'framer-motion';
import { MapPin, Zap, Clock, Shield } from 'lucide-react';

const cards = [
  {
    icon: MapPin,
    title: 'Bristol Based',
    body: 'We\'re local. We understand Bristol trades, Bristol customers, and Bristol competition.',
  },
  {
    icon: Zap,
    title: 'Built With AI',
    body: 'We use the latest AI tools to build faster and smarter than any traditional agency.',
  },
  {
    icon: Clock,
    title: 'Live in 5 Days',
    body: 'Not weeks or months. Your website is live and working in 5 working days.',
  },
  {
    icon: Shield,
    title: 'No Contracts',
    body: 'Month to month. If we\'re not delivering results, you\'re free to walk away.',
  },
];

export default function WhyPlatinum() {
  return (
    <section className="section-pad" style={{ background: '#07071a' }}>
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
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'var(--font-heading)', color: '#e8e8f0' }}
          >
            Why Bristol Trades Choose{' '}
            <span style={{ color: '#d4af37' }}>Platinum</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                className="platinum-card p-8 flex items-start gap-5"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: 'rgba(212,175,55,0.1)',
                    border: '1px solid rgba(212,175,55,0.25)',
                  }}
                >
                  <Icon size={20} style={{ color: '#d4af37' }} />
                </div>
                <div>
                  <h3
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: 'var(--font-heading)', color: '#e8e8f0' }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#6b6b8a', fontFamily: 'var(--font-body)' }}
                  >
                    {card.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
