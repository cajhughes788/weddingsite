import Link from "next/link"

import { DecorativeFrame, FloralAccent, GoldDivider } from "@/components/decorative-frame"
import { Button } from "@/components/ui/button"

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <FloralAccent position="top-left" />
        <FloralAccent position="top-right" />
        <FloralAccent position="bottom-left" />
        <FloralAccent position="bottom-right" />

        <div className="relative w-full max-w-2xl bg-card shadow-2xl shadow-gold/10">
          <DecorativeFrame>
            <div className="text-center space-y-6">
              <p className="text-sm text-gold uppercase tracking-widest font-sans">
                North Idaho Marriage Signing
              </p>

              <GoldDivider />

              <div className="space-y-4">
                <h1 className="font-serif text-4xl md:text-5xl text-foreground tracking-wide leading-tight">
                  Thank You
                </h1>
                <p className="text-lg text-muted-foreground font-sans leading-relaxed max-w-xl mx-auto">
                  We have received your message and will be reaching out to you shortly.
                </p>
              </div>

              <GoldDivider />

              <div className="flex items-center justify-center pt-2">
                <Button
                  asChild
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-card font-sans uppercase tracking-widest text-sm px-8 py-6 rounded-none border border-gold-dark"
                >
                  <Link href="/">Back To Home</Link>
                </Button>
              </div>
            </div>
          </DecorativeFrame>
        </div>
      </section>
    </main>
  )
}
