import LenisProvider from "@/components/lenis-provider";
import ScrollProgress from "@/components/scroll-progress";
import FloatingCTA from "@/components/floating-cta";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Stats from "@/components/stats";
import Problem from "@/components/problem";
import WhatWeBuild from "@/components/what-we-build";
import OurWork from "@/components/our-work";
import Pricing from "@/components/pricing";
import HowItWorks from "@/components/how-it-works";
import WhyPlatinum from "@/components/why-platinum";
import FAQ from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="bg-[#020617] text-[#f8fafc] overflow-x-hidden">
      <LenisProvider />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Stats />
      <Problem />
      <WhatWeBuild />
      <OurWork />
      <Pricing />
      <HowItWorks />
      <WhyPlatinum />
      <FAQ />
      <FinalCTA />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
