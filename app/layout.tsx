import React from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'EUN CARS - Location de Voiture à Laâyoune | كراء السيارات العيون',
    template: '%s | EUN CARS'
  },
  description: 'Location de voiture à Laâyoune. كراء السيارات في العيون. Flotte moderne, tarifs compétitifs, service 24/7. Réservez en ligne ou appelez +212 657-821410. Livraison gratuite, GPS inclus.',
  keywords: [
    // French Keywords
    'location voiture laâyoune',
    'location de voiture à laâyoune',
    'agence location voiture laâyoune',
    'louer une voiture laâyoune',
    'location voiture pas cher laâyoune',
    'location auto laâyoune',
    'louer voiture laâyoune',
    'location voiture maroc',
    'EUN CARS',
    'location voiture aéroport laâyoune',
    'voiture de location laâyoune',
    'location voiture 24h laâyoune',
    'location voiture avec chauffeur laâyoune',
    'location voiture économique laâyoune',
    'location voiture premium laâyoune',
    
    // Arabic Keywords
    'كراء السيارات العيون',
    'كراء سيارة في العيون',
    'وكالة كراء سيارات العيون',
    'كراء السيارات الرخيصة العيون',
    'كراء السيارات العيون المغرب',
    'كراء سيارة العيون',
    'كراء السيارات العيون 24 ساعة',
    'كراء السيارات العيون مطار',
    'كراء السيارات العيون رخيص',
    'كراء السيارات العيون مع سائق',
    'كراء السيارات العيون اون لاين'
  ],
  authors: [{ name: 'EUN CARS' }],
  creator: 'EUN CARS',
  publisher: 'EUN CARS',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://euncars.ma'),
  alternates: {
    canonical: '/',
    languages: {
      'fr': '/',
      'ar': '/ar',
    },
  },
  openGraph: {
    title: 'EUN CARS - Location de Voiture à Laâyoune | كراء السيارات العيون',
    description: 'Location de voiture à Laâyoune. كراء السيارات في العيون. Flotte moderne, tarifs compétitifs, service 24/7. Réservez en ligne ou appelez +212 657-821410.',
    url: 'https://euncars.ma',
    siteName: 'EUN CARS',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: '/images/Logo/second-logo.png',
        width: 1200,
        height: 630,
        alt: 'EUN CARS - Location de Voiture à Laâyoune | كراء السيارات العيون',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EUN CARS - Location de Voiture à Laâyoune | كراء السيارات العيون',
    description: 'Location de voiture à Laâyoune. كراء السيارات في العيون. Flotte moderne, tarifs compétitifs, service 24/7.',
    images: ['/images/Logo/second-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" dir="ltr">
      <head>
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CarRental",
              "name": "EUN CARS",
              "alternateName": "كراء السيارات العيون",
              "description": "Location de voiture à Laâyoune. كراء السيارات في العيون. Flotte moderne, tarifs compétitifs, service 24/7.",
              "url": "https://euncars.ma",
              "telephone": "+212657821410",
              "email": "contact@euncars.ma",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "AV Mekka 69",
                "addressLocality": "Laâyoune",
                "addressRegion": "Laâyoune-Sakia El Hamra",
                "addressCountry": "MA",
                "postalCode": "70000"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 27.1537,
                "longitude": -13.2033
              },
              "openingHours": "Mo-Sa 08:00-20:00",
              "priceRange": "$$",
              "currenciesAccepted": "MAD",
              "paymentAccepted": "Cash, Credit Card",
              "sameAs": [
                "https://www.facebook.com/euncars",
                "https://www.instagram.com/euncars"
              ],
              "areaServed": {
                "@type": "City",
                "name": "Laâyoune"
              },
              "serviceArea": {
                "@type": "City",
                "name": "Laâyoune"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Flotte de Véhicules",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Car",
                      "name": "RENAULT CLIO 4",
                      "description": "Voiture citadine économique"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Car",
                      "name": "DACIA DUSTER",
                      "description": "SUV tout-terrain"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "reviewCount": "127"
              }
            })
          }}
        />
        
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS Prefetch for performance */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Favicon links for better browser support */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
} 