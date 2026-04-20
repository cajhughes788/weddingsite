import { HeroSection } from "@/components/hero-section"
import { WhatsIncluded } from "@/components/whats-included"
import { HowItWorks } from "@/components/how-it-works"
import { BookingSection } from "@/components/booking-section"
import { AboutSection } from "@/components/about-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <WhatsIncluded />
      <HowItWorks />
      <BookingSection />
      <AboutSection />
      <Footer />
    </main>
  )
}
