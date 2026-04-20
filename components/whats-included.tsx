import { GoldDivider } from "@/components/decorative-frame"

const inclusions = [
  "Declaration of Intent (legally required)",
  "Marriage license signing",
  "Quick and professional process",
  "Calm, private experience",
]

export function WhatsIncluded() {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-sm text-gold uppercase tracking-widest font-sans mb-4">
          Services
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">
          What&apos;s Included
        </h2>
        
        <GoldDivider />
        
        <ul className="space-y-4 mt-8">
          {inclusions.map((item, index) => (
            <li 
              key={index}
              className="flex items-center justify-center gap-3 text-muted-foreground font-sans text-lg"
            >
              <svg className="w-5 h-5 text-gold flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
