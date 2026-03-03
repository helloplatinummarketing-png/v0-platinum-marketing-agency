import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { TrustStrip } from "@/components/trust-strip"
import { Services } from "@/components/services"
import { ProblemSection } from "@/components/problem-section"
import { HowItWorks } from "@/components/how-it-works"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { DemoSection } from "@/components/demo-section"
import { FAQ } from "@/components/faq"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { StickyMobileCTA } from "@/components/sticky-mobile-cta"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustStrip />
      <Services />
      <ProblemSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <DemoSection />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  )
}
