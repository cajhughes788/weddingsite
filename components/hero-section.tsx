"use client"

import { Button } from "@/components/ui/button"
import { DecorativeFrame, GoldDivider, FloralAccent } from "@/components/decorative-frame"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
      </div>
      
      {/* Floral accents */}
      <FloralAccent position="top-left" />
      <FloralAccent position="top-right" />
      <FloralAccent position="bottom-left" />
      <FloralAccent position="bottom-right" />
      
      {/* Main invitation card */}
      <div className="relative w-full max-w-xl bg-card shadow-2xl shadow-gold/10">
        <DecorativeFrame>
          <div className="text-center space-y-6">
            {/* Location badge */}
            <p className="text-sm text-gold uppercase tracking-widest font-sans">
              Post Falls &bull; Coeur d&apos;Alene &bull; Hayden
            </p>
            
            <GoldDivider />
            
            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="font-serif text-4xl md:text-5xl text-foreground tracking-wide leading-tight">
                North Idaho Marriage Signing
              </h1>
              <p className="text-lg text-muted-foreground font-sans leading-relaxed">
                Get your marriage license signed quickly and professionally in North Idaho.
              </p>
            </div>
            
            <GoldDivider />
            
            {/* Supporting info */}
            <p className="text-muted-foreground font-sans italic text-base">
              Declaration of intent included. No ceremony required.
            </p>
            
            {/* Price */}
            <div className="py-2">
              <p className="text-sm text-muted-foreground font-sans uppercase tracking-widest mb-2">
                Flat Fee
              </p>
              <p className="font-serif text-5xl text-gold-dark">$125</p>
            </div>
            
            <GoldDivider />
            
            {/* CTAs */}
            <div className="flex items-center justify-center pt-2">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-dark text-card font-sans uppercase tracking-widest text-sm px-8 py-6 rounded-none border border-gold-dark"
              >
                <a href="#request-time">Request a Time</a>
              </Button>
            </div>
          </div>
        </DecorativeFrame>
      </div>
    </section>
  )
}
