import LenisProvider from '@/components/lenis-provider';
import ScrollProgress from '@/components/scroll-progress';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import SocialProofBar from '@/components/social-proof-bar';
import Stats from '@/components/stats';
import OurWork from '@/components/our-work';
import Services from '@/components/services';
import Pricing from '@/components/pricing';
import HowItWorks from '@/components/how-it-works';
import WhyPlatinum from '@/components/why-platinum';
import FAQ from '@/components/faq';
import FinalCTA from '@/components/final-cta';
import Footer from '@/components/footer';
import FloatingCTA from '@/components/floating-cta';

export default function Home() {
  return (
    <main style={{ background: '#07071a', color: '#e8e8f0', overflowX: 'hidden' }}>
      <LenisProvider />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <SocialProofBar />
      <Stats />
      <OurWork />
      <Services />
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
