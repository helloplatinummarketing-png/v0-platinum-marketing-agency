import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Platinum Marketing Agency | Premium Websites & Automation for UK Trades | Bristol",
  description:
    "We build premium animated websites and automation systems for UK trades businesses. Live in 5 days. Missed call recovery, lead follow-up, review collection. Based in Bristol.",
  metadataBase: new URL("https://www.platinummarketingagency.co.uk"),
  alternates: {
    canonical: "https://www.platinummarketingagency.co.uk",
  },
  openGraph: {
    title: "Platinum Marketing Agency | Premium Websites & Automation for UK Trades",
    description:
      "Premium animated websites and automation for UK trades businesses. Live in 5 days. Missed call recovery, lead follow-up, review collection.",
    url: "https://www.platinummarketingagency.co.uk",
    siteName: "Platinum Marketing Agency",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Platinum Marketing Agency | We Build, You Work.",
    description:
      "Premium websites and automation for UK trades businesses — live in 5 days, running 24/7 from day one.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Platinum Marketing Agency",
  description:
    "Premium websites and automation systems for UK trades businesses.",
  url: "https://www.platinummarketingagency.co.uk",
  email: "helloplatinummarketing@gmail.com",
  telephone: "+447594217753",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bristol",
    addressCountry: "GB",
  },
  areaServed: "United Kingdom",
  priceRange: "££",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">{children}</body>
    </html>
  );
}
