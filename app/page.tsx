import React from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import ServicesSection from '@/components/ServicesSection'
import VehiclesSection from '@/components/VehiclesSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <VehiclesSection />
      <TestimonialsSection />
      <Footer />
    </main>
  )
} 