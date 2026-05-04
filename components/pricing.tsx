'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const BOOKING = 'https://cal.com/platinummarketingagency/15min';

const packages = [
  {
    name: 'The Visibility Package',
    badge: { text: 'Most Popular Entry Point', color: '#d4af37' },
    build: '£750',
    monthly: '£79/month',
    features: [
      'Premium animated website',
      'Local SEO setup',
      'Google Business Profile optimised',
      'Contact form with instant notifications',
      'Hosting and maintenance',
      'Live in 5 working days',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'The Lead Machine',
    badge: { text: 'Best For Lead Generation', color: '#4f46e5' },
    build: '£1,200',
    monthly: '£247/month',
    features: [
      'Everything in Visibility',
      'AI chatbot on website',
      'Missed call text-back (30 seconds)',
      'Instant lead response (60 seconds)',
      'Review collection automation',
      'Lead tracking dashboard',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'The Reputation Builder',
    badge: null,
    build: '£400',
    monthly: '£79/month',
    features: [
      'Automated review request after every job',
      'Direct Google review link',
      '5-day follow-up reminder',
      'Review tracking dashboard',
      'Monthly report',
    ],
    cta: 'Get Started',
    featured: false,
  },
  {
    name: 'The Full System',
    badge: { text: 'Most Comprehensive', color: '#10b981' },
    build: '£2,000',
    monthly: '£497/month',
    features: [
      'Everything in Lead Machine',
      'Appointment reminders (48hr and 2hr)',
      'No-show recovery',
      'Quote follow-up sequence (Day 3, 7, 14)',
      'Invoice chase sequence',
      'Repeat business follow-up',
      'AI voice caller for quotes',
      'Monthly performance report',
      'Direct WhatsApp access to Platinum team',
    ],
    cta: 'Book Free Demo',
    featured: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-pad" style={{ background: '#07071a' }}>
      <div className="max-w-6xl mx-auto px-5">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: '#e8e8f0' }}
          >
            Simple Pricing.{' '}
            <span style={{ color: '#d4af37' }}>No Surprises.</span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: '#6b6b8a', fontFamily: 'var(--font-body)' }}
          >
            No long-term contracts. Cancel anytime. Most clients see ROI within the first month.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col ${pkg.featured ? 'pricing-featured' : 'platinum-card'}`}
              style={
                pkg.featured
                  ? { background: '#11112e', transform: 'scale(1.01)' }
                  : { background: '#11112e' }
              }
            >
              {/* Badge */}
              {pkg.badge && (
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 self-start"
                  style={{
                    background: `${pkg.badge.color}18`,
                    border: `1px solid ${pkg.badge.color}40`,
                    color: pkg.badge.color,
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {pkg.badge.text}
                </span>
              )}

              {/* Name */}
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: 'var(--font-heading)', color: '#e8e8f0' }}
              >
                {pkg.name}
              </h3>

              {/* Price */}
              <div className="flex items-baseline gap-2 mb-6">
                <span
                  className="text-4xl font-bold"
                  style={{ fontFamily: 'var(--font-heading)', color: '#d4af37' }}
                >
                  {pkg.build}
                </span>
                <span
                  className="text-base"
                  style={{ color: '#6b6b8a', fontFamily: 'var(--font-body)' }}
                >
                  build +{' '}
                </span>
                <span
                  className="text-lg font-semibold"
                  style={{ color: '#e8e8f0', fontFamily: 'var(--font-body)' }}
                >
                  {pkg.monthly}
                </span>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {pkg.features.map((f, fi) => (
                  <li
                    key={fi}
                    className="flex items-start gap-3 text-sm"
                    style={{ color: '#e8e8f0', fontFamily: 'var(--font-body)' }}
                  >
                    <Check
                      size={16}
                      className="shrink-0 mt-0.5"
                      style={{ color: '#d4af37' }}
                    />
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={BOOKING}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn w-full py-3.5 rounded-xl font-semibold text-sm text-center transition-all duration-200 hover:scale-[1.02]"
                style={
                  pkg.featured
                    ? { background: '#d4af37', color: '#07071a', fontFamily: 'var(--font-body)' }
                    : {
                        background: 'transparent',
                        border: '1px solid rgba(212,175,55,0.35)',
                        color: '#d4af37',
                        fontFamily: 'var(--font-body)',
                      }
                }
              >
                {pkg.cta}
              </a>
            </motion.div>
          ))}
        </div>

        {/* Footer note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10 text-sm"
          style={{ color: '#6b6b8a', fontFamily: 'var(--font-body)' }}
        >
          Not sure which package?{' '}
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#d4af37] transition-colors"
            style={{ color: '#e8e8f0' }}
          >
            Book a free 15-minute call
          </a>{' '}
          and we&apos;ll tell you exactly what your business needs.
        </motion.p>
      </div>
    </section>
  );
}
