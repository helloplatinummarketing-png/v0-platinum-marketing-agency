import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
    title:
      "Platinum Marketing Agency | Premium Websites & Automation for UK Trades | Bristol",
    description:
      "We build premium animated websites and automation systems for UK trades businesses. Live in 5 days. Missed call recovery, lead follow-up, review collection. Based in Bristol.",
    url: "https://www.platinummarketingagency.co.uk",
    siteName: "Platinum Marketing Agency",
    locale: "en_GB",
    type: "website",
    images: [{ url: "/platinum-logo.png" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MarketingAgency",
  name: "Platinum Marketing Agency",
  url: "https://www.platinummarketingagency.co.uk",
  telephone: "07594217753",
  email: "helloplatinummarketing@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bristol",
    addressCountry: "GB",
  },
  description: "Premium websites and automation systems for UK trades businesses.",
  areaServed: "United Kingdom",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${dmMono.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased bg-[#020617] text-[#f8fafc] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
