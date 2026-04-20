import { GoldDivider } from "@/components/decorative-frame"

const steps = [
  {
    number: "I",
    title: "Submit Your Request",
    description: "Select a time or send a request through our form",
  },
  {
    number: "II",
    title: "Receive Confirmation",
    description: "I will confirm your appointment promptly",
  },
  {
    number: "III",
    title: "Make It Official",
    description: "We meet and complete your legal signing",
  },
]

export function HowItWorks() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-gold uppercase tracking-widest font-sans mb-4">
            The Process
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            How It Works
          </h2>
          
          <GoldDivider />
        </div>
        
        <div className="space-y-8">
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="flex items-start gap-6 group"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border-2 border-gold text-gold font-serif text-xl">
                {step.number}
              </div>
              <div className="pt-2">
                <h3 className="font-serif text-xl text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-sans">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden sm:block absolute left-6 top-12 w-px h-8 bg-gold/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
