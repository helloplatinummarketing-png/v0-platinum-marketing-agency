'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Shield, Cpu, Wrench } from 'lucide-react';

const items = [
  { icon: MapPin, label: 'Bristol Based Agency' },
  { icon: Clock, label: 'Websites Live in 5 Days' },
  { icon: Shield, label: 'No Long Term Contracts' },
  { icon: Cpu, label: 'AI Powered Automation' },
  { icon: Wrench, label: 'Trades Specialists' },
];

export default function SocialProofBar() {
  return (
    <section
      className="py-6 border-y overflow-hidden"
      style={{
        background: '#0d0d24',
        borderColor: '#1e1e42',
      }}
    >
      <div className="max-w-6xl mx-auto px-5">
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="trust-item"
              >
                <Icon
                  size={16}
                  style={{ color: '#d4af37', flexShrink: 0 }}
                />
                <span style={{ fontFamily: 'var(--font-body)' }}>{item.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
