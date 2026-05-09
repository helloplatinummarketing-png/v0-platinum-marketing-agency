"use client";

import Image from "next/image";

const servicesLinks = [
  { label: "Visibility Package", href: "#pricing" },
  { label: "Lead Machine", href: "#pricing" },
  { label: "Reputation Builder", href: "#pricing" },
  { label: "Full System", href: "#pricing" },
];

const companyLinks = [
  { label: "Our Work", href: "#work" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  const isAnchor = href.startsWith("#");
  const handleClick = (e: React.MouseEvent) => {
    if (!isAnchor) return;
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      style={{
        fontFamily: "var(--font-body)",
        fontSize: "14px",
        color: "#64748b",
        textDecoration: "none",
        display: "block",
        transition: "color 0.2s ease",
      }}
      className="hover:text-[#d4af37]"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer
      style={{
        background: "#010410",
        borderTop: "1px solid rgba(212,175,55,0.08)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-20 pb-12">
        {/* Four-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Col 1 — Brand */}
          <div>
            <Image
              src="/platinum-logo.png"
              alt="Platinum Marketing Agency"
              width={120}
              height={36}
              style={{ height: "36px", width: "auto", marginBottom: "16px" }}
            />
            <p
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 300,
                fontStyle: "italic",
                fontSize: "20px",
                color: "#64748b",
                marginBottom: "8px",
                lineHeight: 1.3,
              }}
            >
              We Build, You Work.
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.18em",
                color: "#64748b",
              }}
            >
              BRISTOL, UK
            </p>
          </div>

          {/* Col 2 — Services */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.2em",
                color: "#d4af37",
                marginBottom: "20px",
              }}
            >
              SERVICES
            </p>
            <div className="flex flex-col gap-3">
              {servicesLinks.map((l) => (
                <NavLink key={l.label} href={l.href}>
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Col 3 — Company */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.2em",
                color: "#d4af37",
                marginBottom: "20px",
              }}
            >
              COMPANY
            </p>
            <div className="flex flex-col gap-3">
              {companyLinks.map((l) => (
                <NavLink key={l.label} href={l.href}>
                  {l.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Col 4 — Get In Touch */}
          <div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "10px",
                letterSpacing: "0.2em",
                color: "#d4af37",
                marginBottom: "20px",
              }}
            >
              GET IN TOUCH
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="tel:07594217753"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "#64748b",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                className="hover:text-[#d4af37]"
              >
                07594 217753
              </a>
              <a
                href="mailto:helloplatinummarketing@gmail.com"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "#64748b",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                  wordBreak: "break-word",
                }}
                className="hover:text-[#d4af37]"
              >
                helloplatinummarketing@gmail.com
              </a>
              <a
                href="https://www.platinummarketingagency.co.uk"
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: "14px",
                  color: "#64748b",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
                className="hover:text-[#d4af37]"
              >
                platinummarketingagency.co.uk
              </a>
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div
          style={{
            height: "1px",
            background: "rgba(212,175,55,0.06)",
            marginBottom: "24px",
          }}
        />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.1em",
              color: "#64748b",
            }}
          >
            © 2026 Platinum Marketing Agency
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "11px",
              letterSpacing: "0.1em",
              color: "#64748b",
            }}
          >
            <a
              href="/privacy"
              style={{ color: "#64748b", textDecoration: "none" }}
              className="hover:text-[#d4af37] transition-colors duration-200"
            >
              Privacy Policy
            </a>
            {" · "}
            <a
              href="/terms"
              style={{ color: "#64748b", textDecoration: "none" }}
              className="hover:text-[#d4af37] transition-colors duration-200"
            >
              Terms
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
