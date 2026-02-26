'use client'

import React, { useState, useEffect } from 'react'
import { Calendar, MapPin, Car, Search, Phone, Star, CheckCircle, MessageCircle } from 'lucide-react'
import Image from 'next/image'

interface FormErrors {
  location?: string
  pickupDate?: string
  returnDate?: string
}

interface BookingData {
  pickupDate: string
  returnDate: string
  location: string
}

const HeroSection = () => {
  const [pickupDate, setPickupDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [location, setLocation] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState<FormErrors>({})
  const [isMounted, setIsMounted] = useState(false)

  // Set mounted state
  useEffect(() => {
    setIsMounted(true)
  }, [])

  const locations = [
    'Bureau Central - Laayoune',
    'Aéroport Laayoune',
    'Gare Laayoune',
    'Centre-ville Laayoune'
  ]

  const validateForm = () => {
    const newErrors: FormErrors = {}

    if (!location) {
      newErrors.location = 'Veuillez sélectionner un bureau de retrait'
    }

    if (!pickupDate) {
      newErrors.pickupDate = 'Veuillez sélectionner une date de retrait'
    }

    if (!returnDate) {
      newErrors.returnDate = 'Veuillez sélectionner une date de retour'
    }

    if (pickupDate && returnDate && new Date(pickupDate) >= new Date(returnDate)) {
      newErrors.returnDate = 'La date de retour doit être après la date de retrait'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!isMounted) {
      console.error('Component not mounted yet')
      return
    }

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Create booking data
      const bookingData: BookingData = {
        pickupDate,
        returnDate,
        location
      }

      // Save to localStorage for vehicles section to access
      localStorage.setItem('bookingData', JSON.stringify(bookingData))

      // Dispatch custom event to notify VehiclesSection in the same window
      window.dispatchEvent(new Event('bookingDataUpdated'))

      console.log('Booking data saved:', bookingData)

      // Simulate processing time
      await new Promise(resolve => setTimeout(resolve, 500))

      setIsSubmitting(false)

      // Smooth scroll to vehicles section
      const vehiclesSection = document.getElementById('vehicles')
      if (vehiclesSection) {
        vehiclesSection.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      } else {
        console.error('Vehicles section not found')
        // Fallback: scroll to top of page
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    } catch (error) {
      console.error('Error in booking form:', error)
      setIsSubmitting(false)
    }
  }

  const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLocation(e.target.value)
    if (errors.location) {
      setErrors(prev => ({ ...prev, location: '' }))
    }
  }

  const handlePickupDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPickupDate(e.target.value)
    if (errors.pickupDate) {
      setErrors(prev => ({ ...prev, pickupDate: '' }))
    }
  }

  const handleReturnDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setReturnDate(e.target.value)
    if (errors.returnDate) {
      setErrors(prev => ({ ...prev, returnDate: '' }))
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent z-10"></div>
        <Image
          src="/images/Hero/laayoune.webp"
          alt="Laayoune city background"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      <div className="container-custom relative z-10 pt-16 md:pt-20 px-4 md:px-0">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 md:space-y-8">
            {/* Title and Description - Hidden on mobile */}
            <div className="hidden md:space-y-4">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Location de Voiture
                <span className="text-luxury-gold block">Premium</span>
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-gray-200 max-w-lg">
                Découvrez notre flotte de véhicules de luxe à Laayoune.
                Service premium, tarifs compétitifs.
              </p>
            </div>

            {/* Dynamic Price Speech Bubble */}
            <div className="relative">
              {/* Speech bubble with tail */}
              <div className="relative bg-luxury-gold rounded-2xl md:rounded-3xl p-4 md:p-6 text-luxury-blue shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                <div className="flex items-center justify-between">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold">195 Dhs</div>
                    <div className="text-xs md:text-sm">par jour</div>
                  </div>
                  <div className="text-xs md:text-sm">
                    <div className="font-semibold">À PARTIR DE</div>
                    <div className="text-gray-600">Tarifs TTC</div>
                  </div>
                </div>
                {/* Speech bubble tail */}
                <div className="absolute -bottom-2 left-8 w-4 h-4 bg-luxury-gold transform rotate-45"></div>
              </div>

              {/* Floating elements for visual interest */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-luxury-blue rounded-full flex items-center justify-center animate-bounce">
                <Star className="w-3 h-3 text-luxury-gold fill-current" />
              </div>
              <div className="absolute -bottom-4 left-4 w-5 h-5 bg-luxury-blue rounded-full flex items-center justify-center animate-pulse">
                <CheckCircle className="w-3 h-3 text-luxury-gold fill-current" />
              </div>
            </div>

            {/* Mobile Features - Show on mobile for engagement */}
            <div className="md:hidden grid grid-cols-2 gap-3">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                <span className="text-xs text-white">Livraison gratuite</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                <span className="text-xs text-white">GPS inclus</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                <span className="text-xs text-white">Assurance complète</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                <span className="text-xs text-white">Service 24/7</span>
              </div>
            </div>

            {/* Features - Hidden on mobile to reduce clutter */}
            <div className="hidden md:grid grid-cols-2 gap-3 md:gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                <span className="text-xs md:text-sm">Livraison gratuite</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                <span className="text-xs md:text-sm">GPS inclus</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                <span className="text-xs md:text-sm">Assurance complète</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                <span className="text-xs md:text-sm">Service 24/7</span>
              </div>
            </div>
          </div>

          {/* Search Form */}
          <div className="bg-white/95 backdrop-blur-sm rounded-xl md:rounded-2xl p-6 md:p-8 shadow-2xl relative mb-8">
            {/* Decorative elements */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-luxury-gold rounded-full"></div>
            <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-luxury-blue rounded-full"></div>

            <div className="space-y-4 md:space-y-6">
              <div className="text-center">
                <h3 className="text-xl md:text-2xl font-bold text-luxury-blue mb-2">
                  Réservez votre véhicule
                </h3>
                <p className="text-sm md:text-base text-gray-600">
                  Trouvez la voiture parfaite pour votre voyage
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Pickup Section */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 md:w-5 md:h-5 text-luxury-gold" />
                    <h4 className="font-semibold text-luxury-blue text-sm md:text-base">RETIRER</h4>
                  </div>

                  <select
                    value={location}
                    onChange={handleLocationChange}
                    className={`w-full p-3 md:p-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent text-sm md:text-base ${errors.location ? 'border-red-500' : 'border-gray-300'
                      }`}
                  >
                    <option value="">Choisissez un bureau</option>
                    {locations.map((loc) => (
                      <option key={loc} value={loc}>{loc}</option>
                    ))}
                  </select>
                  {errors.location && (
                    <p className="text-red-500 text-xs">{errors.location}</p>
                  )}
                </div>

                {/* Date Selection */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-medium text-gray-700">
                      Date du retrait
                    </label>
                    <div className="relative min-w-0">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                      <input
                        type="date"
                        value={pickupDate}
                        onChange={handlePickupDateChange}
                        className={`w-full max-w-full appearance-none pl-10 md:pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent text-sm md:text-base ${errors.pickupDate ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                    </div>
                    {errors.pickupDate && (
                      <p className="text-red-500 text-xs">{errors.pickupDate}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs md:text-sm font-medium text-gray-700">
                      Date de retour
                    </label>
                    <div className="relative min-w-0">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
                      <input
                        type="date"
                        value={returnDate}
                        onChange={handleReturnDateChange}
                        className={`w-full max-w-full appearance-none pl-10 md:pl-10 pr-3 py-3 border rounded-lg focus:ring-2 focus:ring-luxury-gold focus:border-transparent text-sm md:text-base ${errors.returnDate ? 'border-red-500' : 'border-gray-300'
                          }`}
                      />
                    </div>
                    {errors.returnDate && (
                      <p className="text-red-500 text-xs">{errors.returnDate}</p>
                    )}
                  </div>
                </div>

                {/* Search Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-luxury-gold text-luxury-blue font-bold py-4 px-6 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 text-sm md:text-base shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-luxury-blue"></div>
                      <span>Recherche en cours...</span>
                    </>
                  ) : (
                    <>
                      <Search className="w-4 h-4 md:w-5 md:h-5" />
                      <span>TROUVER UN VÉHICULE →</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection 