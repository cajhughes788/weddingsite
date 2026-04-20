import { GoldDivider } from "@/components/decorative-frame"

export function AboutSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm text-gold uppercase tracking-widest font-sans mb-4">
          About
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          Your Officiant
        </h2>
        
        <GoldDivider />
        
        <p className="text-muted-foreground font-sans text-lg leading-relaxed mt-8">
          Ordained minister providing simple, legal marriage signings 
          with professionalism and discretion. My focus is on creating 
          a calm, respectful experience so you can make your marriage 
          official without stress or ceremony.
        </p>
        
        <div className="flex items-center justify-center gap-8 mt-12">
          <div className="text-center">
            <p className="font-serif text-2xl text-gold-dark">Licensed</p>
            <p className="text-sm text-muted-foreground font-sans mt-1">Ordained Minister</p>
          </div>
          <div className="w-px h-12 bg-gold/30" />
          <div className="text-center">
            <p className="font-serif text-2xl text-gold-dark">Trusted</p>
            <p className="text-sm text-muted-foreground font-sans mt-1">Professional Service</p>
          </div>
          <div className="w-px h-12 bg-gold/30" />
          <div className="text-center">
            <p className="font-serif text-2xl text-gold-dark">Private</p>
            <p className="text-sm text-muted-foreground font-sans mt-1">Discreet Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}
