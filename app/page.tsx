import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Pricing } from "@/components/pricing"
import { Services } from "@/components/services"
import { ProblemSection } from "@/components/problem-section"
import { HowItWorks } from "@/components/how-it-works"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Testimonials } from "@/components/testimonials"
import { WhoYoureTalkingTo } from "@/components/who-youre-talking-to"
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
      <Pricing />
      <Services />
      <ProblemSection />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <WhoYoureTalkingTo />
      <DemoSection />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  )
}
