import { GoldDivider } from "@/components/decorative-frame"

export function Footer() {
  return (
    <footer className="py-16 px-4 border-t border-gold/20">
      <div className="max-w-2xl mx-auto text-center">
        <p className="font-serif text-xl text-foreground mb-2">
          North Idaho Marriage Signing
        </p>
        <p className="text-sm text-gold uppercase tracking-widest font-sans mb-4">
          Licensed Wedding Officiant
        </p>
        
        <GoldDivider />
        
        <div className="space-y-2 text-muted-foreground font-sans text-sm mt-6">
          <p>Serving Post Falls, Coeur d&apos;Alene, Hayden &amp; North Idaho</p>
          <a 
            href="mailto:contact@example.com" 
            className="text-gold hover:text-gold-dark transition-colors"
          >
            contact@example.com
          </a>
        </div>
        
        <p className="text-xs text-muted-foreground/60 font-sans mt-8">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}
