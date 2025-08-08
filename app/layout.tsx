import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'EUN CARS - Location de Voitures au Maroc',
  description: 'Location de voitures au Maroc. Large gamme de véhicules: citadines, SUV, berlines. Réservation facile et prix compétitifs.',
  keywords: 'location voiture maroc, location auto maroc, voiture de location, EUN CARS',
  authors: [{ name: 'EUN CARS' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'EUN CARS - Location de Voitures au Maroc',
    description: 'Location de voitures au Maroc. Large gamme de véhicules: citadines, SUV, berlines.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/images/cars2/renault-express.jpg" as="image" />
        <link rel="preload" href="/images/cars2/jeep-compass.jpg" as="image" />
        <link rel="preload" href="/images/cars2/clio5.jpg" as="image" />
        
        {/* DNS prefetch for external domains */}
        <link rel="dns-prefetch" href="//wa.me" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 