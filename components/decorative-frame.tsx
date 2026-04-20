"use client"

export function DecorativeFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {/* Outer gold border */}
      <div className="absolute inset-0 border-2 border-gold rounded-sm" />
      
      {/* Inner decorative border */}
      <div className="absolute inset-3 border border-gold/50 rounded-sm" />
      
      {/* Corner flourishes */}
      <svg className="absolute top-2 left-2 w-12 h-12 text-gold" viewBox="0 0 100 100" fill="none">
        <path d="M0 100 Q0 0 100 0" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M20 80 Q20 20 80 20" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="10" cy="90" r="4" fill="currentColor" />
        <circle cx="90" cy="10" r="4" fill="currentColor" />
      </svg>
      
      <svg className="absolute top-2 right-2 w-12 h-12 text-gold rotate-90" viewBox="0 0 100 100" fill="none">
        <path d="M0 100 Q0 0 100 0" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M20 80 Q20 20 80 20" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="10" cy="90" r="4" fill="currentColor" />
        <circle cx="90" cy="10" r="4" fill="currentColor" />
      </svg>
      
      <svg className="absolute bottom-2 right-2 w-12 h-12 text-gold rotate-180" viewBox="0 0 100 100" fill="none">
        <path d="M0 100 Q0 0 100 0" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M20 80 Q20 20 80 20" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="10" cy="90" r="4" fill="currentColor" />
        <circle cx="90" cy="10" r="4" fill="currentColor" />
      </svg>
      
      <svg className="absolute bottom-2 left-2 w-12 h-12 text-gold -rotate-90" viewBox="0 0 100 100" fill="none">
        <path d="M0 100 Q0 0 100 0" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M20 80 Q20 20 80 20" stroke="currentColor" strokeWidth="1" fill="none" />
        <circle cx="10" cy="90" r="4" fill="currentColor" />
        <circle cx="90" cy="10" r="4" fill="currentColor" />
      </svg>
      
      {/* Content */}
      <div className="relative px-12 py-16">
        {children}
      </div>
    </div>
  )
}

export function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold" />
      <svg className="w-6 h-6 text-gold" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L14.09 8.26L21 9.27L16 14.14L17.18 21.02L12 17.77L6.82 21.02L8 14.14L3 9.27L9.91 8.26L12 2Z" />
      </svg>
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold" />
    </div>
  )
}

export function FloralAccent({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0 -scale-x-100',
    'bottom-left': 'bottom-0 left-0 -scale-y-100',
    'bottom-right': 'bottom-0 right-0 -scale-x-100 -scale-y-100',
  }
  
  return (
    <svg 
      className={`absolute ${positionClasses[position]} w-32 h-32 text-gold/30`} 
      viewBox="0 0 100 100" 
      fill="none"
    >
      <path 
        d="M0 0 Q30 10 40 40 Q50 30 60 35 Q55 25 70 15 Q50 20 40 5 Q30 15 20 10 Q10 20 0 0" 
        stroke="currentColor" 
        strokeWidth="1" 
        fill="none"
      />
      <circle cx="40" cy="40" r="8" stroke="currentColor" strokeWidth="1" fill="none" />
      <circle cx="40" cy="40" r="3" fill="currentColor" />
      <path d="M35 45 Q30 60 20 70" stroke="currentColor" strokeWidth="1" fill="none" />
      <path d="M45 45 Q55 55 65 55" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  )
}
