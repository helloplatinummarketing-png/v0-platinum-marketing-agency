'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

export default function OurWork() {
  return (
    <section id="work" className="section-pad" style={{ background: '#07071a' }}>
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
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)', color: '#e8e8f0' }}
          >
            Built By <span style={{ color: '#d4af37' }}>Platinum</span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto"
            style={{ color: '#6b6b8a', fontFamily: 'var(--font-body)' }}
          >
            Every demo below was built in under 5 days using our system.
          </p>
        </motion.div>

        {/* Featured demo card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65 }}
          className="relative rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-[1.01]"
          style={{
            background: '#11112e',
            borderColor: '#1e1e42',
          }}
          whileHover={{
            boxShadow: '0 0 60px rgba(212,175,55,0.2), 0 0 120px rgba(212,175,55,0.08)',
            borderColor: 'rgba(212,175,55,0.4)',
          }}
        >
          {/* Preview placeholder */}
          <div
            className="w-full h-64 md:h-80 flex items-center justify-center"
            style={{
              background: 'linear-gradient(135deg, #0d0d24 0%, #11112e 50%, #07071a 100%)',
            }}
          >
            <div className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ fontFamily: 'var(--font-heading)', color: '#d4af37' }}
              >
                Bristol Spark
              </div>
              <div
                className="text-lg font-medium mb-4"
                style={{ color: '#6b6b8a', fontFamily: 'var(--font-body)' }}
              >
                Electrical
              </div>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                {['NICEIC Approved', '24/7 Booking', 'AI Lead Response'].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: 'rgba(212,175,55,0.1)',
                      border: '1px solid rgba(212,175,55,0.25)',
                      color: '#d4af37',
                      fontFamily: 'var(--font-body)',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Info row */}
          <div
            className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
            style={{ borderTop: '1px solid #1e1e42' }}
          >
            <div>
              <h3
                className="text-2xl font-bold mb-1"
                style={{ fontFamily: 'var(--font-heading)', color: '#e8e8f0' }}
              >
                Bristol Spark Electrical
              </h3>
              <p
                className="text-sm"
                style={{ color: '#6b6b8a', fontFamily: 'var(--font-body)' }}
              >
                Built in 4 days for a Bristol electrician. NICEIC approved, 24/7 booking, automated lead response.
              </p>
            </div>
            <a
              href="https://bristol-spark-electrical.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-btn shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:scale-105"
              style={{
                background: '#d4af37',
                color: '#07071a',
                fontFamily: 'var(--font-body)',
              }}
            >
              View Live Site <ExternalLink size={14} />
            </a>
          </div>
        </motion.div>

        {/* Teaser */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p
            className="text-lg font-medium mb-3"
            style={{ color: '#e8e8f0', fontFamily: 'var(--font-body)' }}
          >
            Your business could be next.
          </p>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 hover:gap-3"
            style={{ color: '#d4af37', fontFamily: 'var(--font-body)' }}
          >
            See pricing <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
