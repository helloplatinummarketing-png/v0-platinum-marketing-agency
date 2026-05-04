'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const BOOKING = 'https://cal.com/platinummarketingagency/15min';

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let W = 0, H = 0;

    interface P { x: number; y: number; vx: number; vy: number; r: number }
    const pts: P[] = [];

    function resize() {
      W = canvas!.width = canvas!.offsetWidth;
      H = canvas!.height = canvas!.offsetHeight;
    }
    function init() {
      pts.length = 0;
      for (let i = 0; i < 50; i++) {
        pts.push({ x: Math.random() * W, y: Math.random() * H, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, r: Math.random() * 1.2 + 0.4 });
      }
    }
    function draw() {
      ctx!.clearRect(0, 0, W, H);
      for (const p of pts) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        ctx!.beginPath(); ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = 'rgba(212,175,55,0.4)'; ctx!.fill();
      }
      animId = requestAnimationFrame(draw);
    }
    const ro = new ResizeObserver(() => { resize(); init(); });
    ro.observe(canvas);
    resize(); init(); draw();
    return () => { cancelAnimationFrame(animId); ro.disconnect(); };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" />
  );
}

export default function FinalCTA() {
  return (
    <section
      id="contact"
      className="relative section-pad overflow-hidden"
      style={{ background: '#07071a' }}
    >
      {/* Gold gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(212,175,55,0.06) 0%, transparent 70%)',
        }}
      />

      <ParticleCanvas />

      <div className="relative z-10 max-w-3xl mx-auto px-5 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'var(--font-heading)', color: '#e8e8f0' }}
          >
            Ready to Stop{' '}
            <span style={{ color: '#d4af37' }}>Losing Jobs</span> Online?
          </h2>

          <p
            className="text-lg mb-10"
            style={{ color: '#6b6b8a', fontFamily: 'var(--font-body)' }}
          >
            Book a free 15-minute demo. We&apos;ll show you exactly what your business is missing and how to fix it.
          </p>

          <a
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn inline-flex items-center justify-center px-10 py-5 rounded-xl font-bold text-lg transition-all duration-200 hover:scale-105 animate-glow-pulse mb-6"
            style={{
              background: '#d4af37',
              color: '#07071a',
              fontFamily: 'var(--font-body)',
            }}
          >
            Book Free Demo Today
          </a>

          <p
            className="text-sm mb-8"
            style={{ color: '#6b6b8a', fontFamily: 'var(--font-body)' }}
          >
            No obligation. No hard sell. Just straight advice.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm"
            style={{ color: '#6b6b8a', fontFamily: 'var(--font-body)' }}
          >
            <a href="tel:07594217753" className="hover:text-[#d4af37] transition-colors">
              07594 217753
            </a>
            <span className="hidden sm:block" style={{ color: '#1e1e42' }}>·</span>
            <a href="mailto:helloplatinummarketing@gmail.com" className="hover:text-[#d4af37] transition-colors">
              helloplatinummarketing@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
