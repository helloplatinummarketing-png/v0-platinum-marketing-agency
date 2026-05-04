'use client';

import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = ['Work', 'Services', 'Pricing', 'FAQ', 'Contact'];

export default function Footer() {
  return (
    <footer style={{ background: '#050514', borderTop: '1px solid #1e1e42' }}>
      <div className="max-w-6xl mx-auto px-5 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Image
              src="/platinum-logo.png"
              alt="Platinum Marketing Agency"
              width={120}
              height={40}
              style={{ height: 40, width: 'auto', marginBottom: 12 }}
            />
            <p
              className="text-sm italic"
              style={{ color: '#6b6b8a', fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}
            >
              &ldquo;We Build, You Work.&rdquo;
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: '#d4af37', fontFamily: 'var(--font-body)' }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm hover:text-[#d4af37] transition-colors"
                    style={{ color: '#6b6b8a', fontFamily: 'var(--font-body)' }}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-bold uppercase tracking-widest mb-4"
              style={{ color: '#d4af37', fontFamily: 'var(--font-body)' }}
            >
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:07594217753"
                  className="flex items-center gap-2 text-sm hover:text-[#d4af37] transition-colors"
                  style={{ color: '#6b6b8a', fontFamily: 'var(--font-body)' }}
                >
                  <Phone size={14} style={{ color: '#d4af37', flexShrink: 0 }} />
                  07594 217753
                </a>
              </li>
              <li>
                <a
                  href="mailto:helloplatinummarketing@gmail.com"
                  className="flex items-center gap-2 text-sm hover:text-[#d4af37] transition-colors"
                  style={{ color: '#6b6b8a', fontFamily: 'var(--font-body)' }}
                >
                  <Mail size={14} style={{ color: '#d4af37', flexShrink: 0 }} />
                  helloplatinummarketing@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm" style={{ color: '#6b6b8a', fontFamily: 'var(--font-body)' }}>
                <MapPin size={14} style={{ color: '#d4af37', flexShrink: 0 }} />
                Bristol, UK
              </li>
              <li>
                <a
                  href="https://www.platinummarketingagency.co.uk"
                  className="flex items-center gap-2 text-sm hover:text-[#d4af37] transition-colors"
                  style={{ color: '#6b6b8a', fontFamily: 'var(--font-body)' }}
                >
                  platinummarketingagency.co.uk
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: '1px solid #1e1e42', color: '#6b6b8a', fontFamily: 'var(--font-body)' }}
        >
          <p>© 2026 Platinum Marketing Agency. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-[#d4af37] transition-colors">Privacy Policy</a>
            <span style={{ color: '#1e1e42' }}>·</span>
            <a href="/terms" className="hover:text-[#d4af37] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
