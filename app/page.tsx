import dynamic from 'next/dynamic'
import { Suspense } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'EUN CARS - Location de Voitures au Maroc',
  description: 'Location de voitures au Maroc. Large gamme de véhicules: citadines, SUV, berlines. Réservation facile et prix compétitifs.',
}

// Dynamic imports for better performance
const HeroSection = dynamic(() => import('@/components/HeroSection'), {
  loading: () => <div className="h-screen bg-gradient-to-br from-luxury-blue to-luxury-gold animate-pulse" />
})

const ServicesSection = dynamic(() => import('@/components/ServicesSection'), {
  loading: () => <div className="py-20 bg-white animate-pulse" />
})

const VehiclesSection = dynamic(() => import('@/components/VehiclesSection'), {
  loading: () => <div className="py-20 bg-gray-100 animate-pulse" />
})

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  loading: () => <div className="py-20 bg-white animate-pulse" />
})

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div className="bg-luxury-blue h-64 animate-pulse" />
})

export default function Home() {
  return (
    <main className="min-h-screen">
      <Suspense fallback={<div className="h-screen bg-gradient-to-br from-luxury-blue to-luxury-gold animate-pulse" />}>
        <HeroSection />
      </Suspense>
      
      <Suspense fallback={<div className="py-20 bg-white animate-pulse" />}>
        <ServicesSection />
      </Suspense>
      
      <Suspense fallback={<div className="py-20 bg-gray-100 animate-pulse" />}>
        <VehiclesSection />
      </Suspense>
      
      <Suspense fallback={<div className="py-20 bg-white animate-pulse" />}>
        <TestimonialsSection />
      </Suspense>
      
      <Suspense fallback={<div className="bg-luxury-blue h-64 animate-pulse" />}>
        <Footer />
      </Suspense>
    </main>
  )
} 