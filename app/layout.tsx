import type { Metadata } from 'next'
import { Playfair_Display, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const _playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
});
const _cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: 'North Idaho Marriage Signing | Post Falls, Coeur d\'Alene & Hayden',
  description: 'North Idaho Marriage Signing offers quick, simple marriage license signing in Post Falls, Coeur d\'Alene, Hayden, and surrounding North Idaho communities.',
  keywords: 'North Idaho Marriage Signing, marriage license signing, wedding officiant Post Falls, marriage officiant Coeur d\'Alene, Hayden marriage signing, Idaho wedding officiant, legal marriage signing North Idaho',
  openGraph: {
    title: 'North Idaho Marriage Signing | Post Falls, Coeur d\'Alene & Hayden',
    description: 'Simple, professional marriage license signing in Post Falls, Coeur d\'Alene, Hayden, and across North Idaho.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${_playfair.variable} ${_cormorant.variable}`}>
      <body className="font-serif antialiased">
        {children}
      </body>
    </html>
  )
}
