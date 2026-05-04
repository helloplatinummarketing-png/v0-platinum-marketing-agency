'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const BOOKING = 'https://cal.com/platinummarketingagency/15min';

/* ── Canvas particle background ── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let W = 0, H = 0;

    interface Particle {
      x: number; y: number;
      vx: number; vy: number;
      r: number;
    }

    const particles: Particle[] = [];
    const COUNT = 80;
    const CONNECT_DIST = 80;

    function resize() {
      W = canvas!.width = canvas!.offsetWidth;
      H = canvas!.height = canvas!.offsetHeight;
    }

    function init() {
      particles.length = 0;
      for (let i = 0; i < COUNT; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.5 + 0.5,
        });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, W, H);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        // Draw dot
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = 'rgba(212,175,55,0.55)';
        ctx!.fill();

        // Connect nearby
        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j];
          const dx = p.x - q.x, dy = p.y - q.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.15;
            ctx!.beginPath();
            ctx!.moveTo(p.x, p.y);
            ctx!.lineTo(q.x, q.y);
            ctx!.strokeStyle = `rgba(212,175,55,${alpha})`;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
          }
        }
      }
      animId = requestAnimationFrame(draw);
    }

    const ro = new ResizeObserver(() => {
      resize();
      init();
    });
    ro.observe(canvas);
    resize();
    init();
    draw();

    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  );
}

/* ── Word-by-word headline ── */
const headline = ['We', 'Build,', 'You', 'Work.'];

function AnimatedHeadline() {
  return (
    <h1
      className="font-bold leading-none tracking-tight mb-6 text-[#e8e8f0]"
      style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 'clamp(48px, 8vw, 96px)',
      }}
    >
      {headline.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 40, rotateX: 90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration: 0.55,
            delay: 0.3 + i * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block mr-[0.2em]"
          style={{ transformOrigin: 'bottom center', perspective: 400 }}
        >
          {i === 3 ? (
            <span style={{ color: '#d4af37' }}>{word}</span>
          ) : word}
        </motion.span>
      ))}
    </h1>
  );
}

/* ── Notification cards ── */
const notifications = [
  {
    dot: '#d4af37',
    text: 'New Lead Captured — Electrician in Bristol replied in 47 seconds',
  },
  {
    dot: '#10b981',
    text: 'Website Live — Bristol Spark Electrical deployed in 4 days',
  },
  {
    dot: '#4f46e5',
    text: 'Client Win — Roofer booked 3 new jobs this week',
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16">
      {/* Dark bg */}
      <div className="absolute inset-0" style={{ background: '#07071a' }} />

      {/* Radial gradient accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(212,175,55,0.04) 0%, transparent 70%)',
        }}
      />

      {/* Particle canvas */}
      <ParticleCanvas />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 w-full text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-10 px-5 py-2 rounded-full border text-sm font-medium"
          style={{
            background: 'rgba(212,175,55,0.08)',
            borderColor: 'rgba(212,175,55,0.25)',
            color: '#d4af37',
            fontFamily: 'var(--font-body)',
          }}
        >
          <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
          Premium Websites &amp; Automation for UK Trades
        </motion.div>

        {/* Headline */}
        <AnimatedHeadline />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.7 }}
          className="text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ color: '#6b6b8a', fontFamily: 'var(--font-body)' }}
        >
          Premium websites and automation for UK trades businesses —{' '}
          <span style={{ color: '#e8e8f0' }}>live in 5 days</span>,{' '}
          <span style={{ color: '#e8e8f0' }}>running 24/7</span> from day one.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.85 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="#work"
            className="magnetic-btn px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-105"
            style={{
              background: '#d4af37',
              color: '#07071a',
              fontFamily: 'var(--font-body)',
              boxShadow: '0 0 30px rgba(212,175,55,0.3)',
            }}
          >
            See Our Work
          </a>
          <a
            href={BOOKING}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn px-8 py-4 rounded-xl font-semibold text-base transition-all duration-200 hover:scale-105"
            style={{
              border: '1px solid rgba(212,175,55,0.4)',
              color: '#e8e8f0',
              background: 'transparent',
              fontFamily: 'var(--font-body)',
            }}
          >
            Book Free Demo
          </a>
        </motion.div>

        {/* Notification cards */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-4xl mx-auto">
          {notifications.map((n, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.0 + i * 0.15 }}
              className="notif-card flex-1 min-w-0"
            >
              <span
                className="w-2.5 h-2.5 rounded-full shrink-0"
                style={{ background: n.dot, boxShadow: `0 0 8px ${n.dot}` }}
              />
              <p
                className="text-sm leading-snug"
                style={{ color: '#e8e8f0', fontFamily: 'var(--font-body)' }}
              >
                {n.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #07071a, transparent)' }}
      />
    </section>
  );
}
