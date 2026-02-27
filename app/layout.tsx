import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agence Location Voiture Laayoune Pas Cher | EUNCARS Laayoune',
  description: 'Réservez votre voiture à Laayoune avec EUN CARS. Agence de location de voitures au Maroc proposant une large gamme de véhicules (citadines, SUV, berlines) à prix compétitifs.',
  keywords: 'location de voiture laayoune, location voiture laayoune, louer voiture laayoune, location auto maroc, EUN CARS',
  authors: [{ name: 'EUN CARS' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Agence Location Voiture Laayoune Pas Cher | EUNCARS Laayoune',
    description: 'Location de voitures à Laayoune, Maroc. Large gamme de véhicules: citadines, SUV, berlines. Réservation facile.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
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