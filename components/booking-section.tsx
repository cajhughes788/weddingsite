"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { GoldDivider } from "@/components/decorative-frame"

export function BookingSection() {
  return (
    <section id="request-time" className="py-24 px-4 bg-secondary/30">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-gold uppercase tracking-widest font-sans mb-4">
            Schedule
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Request a Time
          </h2>
          
          <GoldDivider />
          
          <p className="text-muted-foreground font-sans mt-6">
            Send a request and I&apos;ll confirm availability
          </p>
        </div>
        
        <div className="bg-card p-8 border border-gold/30">
          <form
            action="https://formsubmit.co/cajetanhughes@gmail.com"
            method="POST"
            className="space-y-4"
          >
            <input
              type="hidden"
              name="_next"
              value="https://nimarriagesigning.com/thank-you/"
            />
            <input
              type="hidden"
              name="_subject"
              value="New request from North Idaho Marriage Signing"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <div>
              <label htmlFor="name" className="block text-sm font-sans text-muted-foreground mb-2 uppercase tracking-wider">
                Your Names
              </label>
              <Input 
                id="name"
                name="Names"
                type="text"
                autoComplete="name"
                required
                className="rounded-none border-gold/30 focus:border-gold bg-transparent font-sans"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-sans text-muted-foreground mb-2 uppercase tracking-wider">
                Email Address
              </label>
              <Input 
                id="email"
                name="Email"
                type="email"
                autoComplete="email"
                required
                className="rounded-none border-gold/30 focus:border-gold bg-transparent font-sans"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-sans text-muted-foreground mb-2 uppercase tracking-wider">
                Phone Number
              </label>
              <Input
                id="phone"
                name="Phone"
                type="tel"
                autoComplete="tel"
                required
                className="rounded-none border-gold/30 focus:border-gold bg-transparent font-sans"
              />
            </div>
            
            <div>
              <label htmlFor="date" className="block text-sm font-sans text-muted-foreground mb-2 uppercase tracking-wider">
                Preferred Date & Time
              </label>
              <Input 
                id="date"
                name="Preferred Date and Time"
                type="text"
                required
                className="rounded-none border-gold/30 focus:border-gold bg-transparent font-sans"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-sans text-muted-foreground mb-2 uppercase tracking-wider">
                Additional Notes <span className="normal-case tracking-normal">(Optional)</span>
              </label>
              <Textarea 
                id="message"
                name="Additional Notes"
                className="rounded-none border-gold/30 focus:border-gold bg-transparent font-sans min-h-[80px]"
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-gold hover:bg-gold-dark text-card font-sans uppercase tracking-widest text-sm py-6 rounded-none border border-gold-dark mt-4"
            >
              Send Request
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
