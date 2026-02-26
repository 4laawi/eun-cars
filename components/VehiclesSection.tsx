'use client'

import React, { useState, useEffect } from 'react'
import { Users, Briefcase, Car, Star, Phone, MessageCircle, Calendar, MapPin, Clock, ChevronDown } from 'lucide-react'
import Image from 'next/image'

interface Vehicle {
  id: number
  name: string
  type: string
  fuel: string
  transmission?: string
  image: string
  seats: number
  bags: number
  doors: number
  price: number
  features: string[]
}

interface BookingData {
  pickupDate: string
  returnDate: string
  location: string
}

const VehiclesSection = () => {
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null)
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [bookingData, setBookingData] = useState<BookingData | null>(null)
  const [isMounted, setIsMounted] = useState(false)

  const vehicles: Vehicle[] = [
    {
      id: 1,
      name: "VW TOUAREG",
      type: "SUV PREMIUM",
      fuel: "DIESEL",
      image: "/images/cars2/Touareg.png",
      seats: 7,
      bags: 6,
      doors: 5,
      price: 600,
      features: ["Luxe", "4x4", "GPS", "Assurance Premium"]
    },
    {
      id: 2,
      name: "RENAULT EXPRESS",
      type: "UTILITAIRE",
      fuel: "DIESEL",
      transmission: "MANUELLE",
      image: "/images/cars2/renault-express.jpg",
      seats: 9,
      bags: 8,
      doors: 5,
      price: 450,
      features: ["Espace", "Transport", "GPS", "Assurance"]
    },
    {
      id: 3,
      name: "JEEP COMPASS",
      type: "SUV",
      fuel: "ESSENCE",
      transmission: "AUTOMATIQUE",
      image: "/images/cars2/jeep-compass.jpg",
      seats: 5,
      bags: 5,
      doors: 5,
      price: 500,
      features: ["4x4", "Américain", "GPS", "Assurance Premium"]
    },
    {
      id: 4,
      name: "RENAULT CLIO 5",
      type: "CITADINE",
      fuel: "ESSENCE",
      transmission: "MANUELLE",
      image: "/images/cars2/clio5.jpg",
      seats: 5,
      bags: 3,
      doors: 5,
      price: 320,
      features: ["Moderne", "GPS", "Assurance", "Économique"]
    },
    {
      id: 5,
      name: "FORD FIESTA",
      type: "CITADINE",
      fuel: "ESSENCE",
      transmission: "MANUELLE",
      image: "/images/cars2/ford-fiesta.png",
      seats: 5,
      bags: 3,
      doors: 5,
      price: 310,
      features: ["Fiable", "GPS", "Assurance", "Économique"]
    },
    {
      id: 6,
      name: "NISSAN QASHQAI",
      type: "SUV",
      fuel: "ESSENCE",
      transmission: "AUTOMATIQUE",
      image: "/images/cars2/Nissan-Qashqai.jpg",
      seats: 5,
      bags: 5,
      doors: 5,
      price: 480,
      features: ["Crossover", "Moderne", "GPS", "Assurance"]
    },
    {
      id: 7,
      name: "RENAULT MEGANE",
      type: "BERLINE",
      fuel: "ESSENCE",
      transmission: "MANUELLE",
      image: "/images/cars2/megan-sedan.jpg",
      seats: 5,
      bags: 4,
      doors: 4,
      price: 380,
      features: ["Confortable", "GPS", "Assurance", "Familiale"]
    },
    {
      id: 8,
      name: "RENAULT CLIO 4",
      type: "CITADINE",
      fuel: "ESSENCE",
      image: "/images/cars2/Clio-4.png",
      seats: 5,
      bags: 3,
      doors: 5,
      price: 300,
      features: ["Climatisation", "GPS", "Assurance", "Économique"]
    },
    {
      id: 9,
      name: "TOYOTA YARIS",
      type: "CITADINE",
      fuel: "ESSENCE",
      image: "/images/cars2/toyota-yaris.png",
      seats: 5,
      bags: 3,
      doors: 5,
      price: 300,
      features: ["Fiable", "GPS", "Assurance", "Économique"]
    },
    {
      id: 10,
      name: "DACIA DUSTER",
      type: "SUV",
      fuel: "ESSENCE",
      transmission: "MANUELLE",
      image: "/images/cars2/Dacia-Duster.png",
      seats: 5,
      bags: 5,
      doors: 5,
      price: 400,
      features: ["4x4", "GPS", "Assurance", "Tout-terrain"]
    },
    {
      id: 11,
      name: "PEUGEOT 208",
      type: "CITADINE",
      fuel: "ESSENCE",
      image: "/images/cars2/Peugot208.png",
      seats: 5,
      bags: 4,
      doors: 5,
      price: 400,
      features: ["Moderne", "GPS", "Assurance", "Confortable"]
    },
    {
      id: 12,
      name: "Dacia logan",
      type: "BERLINE",
      fuel: "ESSENCE",
      transmission: "AUTOMATIQUE",
      image: "/images/cars2/DACIA.png",
      seats: 5,
      bags: 5,
      doors: 5,
      price: 300,
      features: ["Confort", "Automatique", "GPS", "Économique"]
    }
  ]

  // Set mounted state and clear old booking data on initial load
  useEffect(() => {
    setIsMounted(true)

    // Clear any old booking data from previous sessions
    // This ensures the card only shows when user submits in current session
    try {
      localStorage.removeItem('bookingData')
    } catch (error) {
      console.error('Error clearing old booking data:', error)
    }
  }, [])

  // Load booking data from localStorage on component mount
  useEffect(() => {
    if (!isMounted) return

    const loadBookingData = () => {
      try {
        const savedBookingData = localStorage.getItem('bookingData')
        if (savedBookingData) {
          const parsedData = JSON.parse(savedBookingData)

          // Validate the parsed data
          if (parsedData.pickupDate && parsedData.returnDate && parsedData.location) {
            // Check if dates are valid
            const pickup = new Date(parsedData.pickupDate)
            const returnDate = new Date(parsedData.returnDate)

            if (!isNaN(pickup.getTime()) && !isNaN(returnDate.getTime())) {
              setBookingData(parsedData)
              console.log('Booking data loaded:', parsedData)
            } else {
              console.log('Invalid dates in booking data, clearing...')
              localStorage.removeItem('bookingData')
              setBookingData(null)
            }
          } else {
            console.log('Incomplete booking data, clearing...')
            localStorage.removeItem('bookingData')
            setBookingData(null)
          }
        }
      } catch (error) {
        console.error('Error loading booking data:', error)
        localStorage.removeItem('bookingData')
        setBookingData(null)
      }
    }

    // Load initially
    loadBookingData()

    // Listen for storage changes (from the hero section submission)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'bookingData') {
        loadBookingData()
      }
    }

    // Listen for custom event (for same-window updates)
    const handleBookingUpdate = () => {
      loadBookingData()
    }

    window.addEventListener('storage', handleStorageChange)
    window.addEventListener('bookingDataUpdated', handleBookingUpdate)

    return () => {
      window.removeEventListener('storage', handleStorageChange)
      window.removeEventListener('bookingDataUpdated', handleBookingUpdate)
    }
  }, [isMounted])

  const handleBooking = (vehicle: Vehicle) => {
    if (bookingData) {
      setSelectedVehicle(vehicle)
      setShowBookingModal(true)
    } else {
      openWhatsApp(vehicle)
    }
  }

  const calculateDays = (startDate: string, endDate: string): number => {
    // Validate inputs
    if (!startDate || !endDate) return 1

    const start = new Date(startDate)
    const end = new Date(endDate)

    // Check for invalid dates
    if (isNaN(start.getTime()) || isNaN(end.getTime())) return 1

    // Calculate difference (end should be after start)
    const diffTime = end.getTime() - start.getTime()

    // If dates are the same or end is before start, return 1
    if (diffTime <= 0) return 1

    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return diffDays
  }

  const generateWhatsAppMessage = (vehicle: Vehicle) => {
    if (!bookingData) {
      const message = `Bonjour! Je souhaite réserver la voiture suivante :

• ${vehicle.name}

Pouvez-vous me donner plus d'informations sur la disponibilité et les tarifs ? Merci !`
      return encodeURIComponent(message)
    }

    const days = calculateDays(bookingData.pickupDate, bookingData.returnDate)
    const totalPrice = vehicle.price * days
    const message = `Bonjour! Je souhaite réserver:

• ${vehicle.name}
• ${days} jours
• ${totalPrice} MAD
• Du ${formatDate(bookingData.pickupDate)} au ${formatDate(bookingData.returnDate)}
• Lieu: ${bookingData.location}

Pouvez-vous me confirmer la disponibilité?`

    return encodeURIComponent(message)
  }

  const openWhatsApp = (vehicle: Vehicle) => {
    const message = generateWhatsAppMessage(vehicle)
    const whatsappUrl = `https://wa.me/212657821410?text=${message}`
    window.open(whatsappUrl, '_blank')
    setShowBookingModal(false)
  }

  const openPhoneCall = () => {
    window.open('tel:+212657821410', '_self')
    setShowBookingModal(false)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    })
  }

  return (
    <section id="vehicles" className="section-padding">
      <div className="container-custom">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            EUN CARS CATÉGORIES DE VÉHICULES
          </h2>
        </div>

        {/* Show booking summary if available */}
        {bookingData && (
          <div className="mt-8 p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-white/50 max-w-md mx-auto relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-luxury-gold/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-luxury-blue/10 rounded-full blur-xl"></div>

            <div className="relative z-10 text-center">
              {/* Header with modern design */}
              <div className="flex items-center justify-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
                    <Calendar className="w-6 h-6 text-luxury-blue" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-luxury-blue rounded-full flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-luxury-blue">
                    Réservation active
                  </h4>
                  <p className="text-xs text-gray-500 font-medium">
                    Sélectionnez votre véhicule
                  </p>
                </div>
              </div>

              {/* Booking details with modern cards */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-luxury-gold/20 rounded-lg flex items-center justify-center">
                      <Calendar className="w-4 h-4 text-luxury-gold" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Période</span>
                  </div>
                  <span className="text-sm font-semibold text-luxury-blue">
                    {calculateDays(bookingData.pickupDate, bookingData.returnDate)} jours
                  </span>
                </div>

                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-luxury-gold/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-luxury-gold" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">Lieu</span>
                  </div>
                  <span className="text-sm font-semibold text-luxury-blue text-right max-w-32 truncate">
                    {bookingData.location}
                  </span>
                </div>
              </div>

              {/* Modern call-to-action */}
              <div className="p-4 bg-gradient-to-r from-luxury-gold/10 to-luxury-blue/10 rounded-xl border border-luxury-gold/20">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <p className="text-sm font-semibold text-luxury-blue">
                    Choisissez votre véhicule
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Down arrow pointing to vehicles - positioned between booking card and vehicles */}
        {bookingData && (
          <div className="flex justify-center mt-8 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-yellow-400 rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <ChevronDown className="w-6 h-6 text-luxury-blue" />
            </div>
          </div>
        )}

        {/* Vehicles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {vehicles.map((vehicle) => {
            const days = bookingData ? calculateDays(bookingData.pickupDate, bookingData.returnDate) : 1
            const totalPrice = vehicle.price * days

            return (
              <div
                key={vehicle.id}
                className="card overflow-hidden group hover:transform hover:scale-105 transition-all duration-300"
              >
                {/* Vehicle Image */}
                <div className="relative h-48 md:h-64 overflow-hidden">
                  {/* Car Image */}
                  <div className="relative h-full z-10">
                    <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                      quality={85}
                    />
                  </div>

                  {/* Price Tag */}
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 bg-luxury-gold text-luxury-blue px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-bold z-20 shadow-lg">
                    {vehicle.price} MAD/JOUR
                  </div>
                </div>

                {/* Vehicle Details */}
                <div className="p-4 md:p-6">
                  <div className="mb-4 md:mb-6">
                    {/* Car Name - Primary hierarchy */}
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-luxury-blue mb-3">
                      {vehicle.name}
                    </h3>

                    {/* Vehicle Tags - Secondary hierarchy */}
                    <div className="flex items-center space-x-2 mb-4">
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                        {vehicle.type}
                      </span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                        {vehicle.fuel}
                      </span>
                      {vehicle.transmission && (
                        <span className="bg-gray-100 px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                          {vehicle.transmission}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Vehicle Features - Tertiary hierarchy */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center w-10 h-10 bg-luxury-gold/20 rounded-full mx-auto mb-2">
                        <Users className="w-5 h-5 text-luxury-gold" />
                      </div>
                      <div className="text-sm font-medium text-luxury-blue">
                        {vehicle.seats} Places
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-10 h-10 bg-luxury-gold/20 rounded-full mx-auto mb-2">
                        <Briefcase className="w-5 h-5 text-luxury-gold" />
                      </div>
                      <div className="text-sm font-medium text-luxury-blue">
                        {vehicle.bags} Bagages
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center w-10 h-10 bg-luxury-gold/20 rounded-full mx-auto mb-2">
                        <Car className="w-5 h-5 text-luxury-gold" />
                      </div>
                      <div className="text-sm font-medium text-luxury-blue">
                        {vehicle.doors} Portes
                      </div>
                    </div>
                  </div>

                  {/* Features List - Quaternary hierarchy */}
                  <div className="hidden md:block mb-6">
                    <div className="flex flex-wrap gap-2">
                      {vehicle.features.map((feature, index) => (
                        <span
                          key={index}
                          className="text-xs bg-luxury-blue/5 text-luxury-blue px-2 py-1 rounded-full border border-luxury-blue/10"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA - Clear hierarchy */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <div className="text-2xl md:text-3xl font-bold text-luxury-blue mb-1">
                        {bookingData ? `${totalPrice} MAD` : `${vehicle.price} MAD`}
                      </div>
                      <div className="text-sm text-gray-500 font-medium">
                        {bookingData ? `pour ${calculateDays(bookingData.pickupDate, bookingData.returnDate)} jours` : 'par jour TTC'}
                      </div>
                    </div>
                    <button
                      onClick={() => handleBooking(vehicle)}
                      className="px-6 py-3 bg-gradient-to-r from-luxury-gold to-yellow-400 text-luxury-blue font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 text-sm"
                    >
                      <Car className="w-4 h-4" />
                      <span>Réserver</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action - Enhanced for mobile */}
        <div className="text-center mt-12 md:mt-16">
          <div className="bg-luxury-blue rounded-xl md:rounded-2xl p-6 md:p-8 text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4">
              Besoin d'un véhicule spécifique ?
            </h3>
            <p className="text-base md:text-lg mb-4 md:mb-6">
              Contactez-nous pour des demandes spéciales ou des véhicules de luxe
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4">
              <button className="btn-primary w-full md:w-auto">
                Nous Contacter
              </button>
              <div className="flex items-center space-x-2 text-sm md:text-base">
                <Phone className="w-4 h-4 md:w-5 md:h-5" />
                <span>+212 657-821410</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedVehicle && bookingData && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-6 md:p-8 max-w-md w-full">
            <div className="text-center mb-6">
              <h3 className="text-xl md:text-2xl font-bold text-luxury-blue mb-2">
                Réserver {selectedVehicle.name}
              </h3>
              <p className="text-gray-600">
                Choisissez votre méthode de contact préférée
              </p>
            </div>

            {/* Booking Summary */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-700 space-y-2">
                <div className="flex justify-between">
                  <span>Durée:</span>
                  <span className="font-semibold">{calculateDays(bookingData.pickupDate, bookingData.returnDate)} jours</span>
                </div>
                <div className="flex justify-between">
                  <span>Prix par jour:</span>
                  <span className="font-semibold">{selectedVehicle.price} MAD</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-luxury-blue">
                  <span>Total:</span>
                  <span>{selectedVehicle.price * calculateDays(bookingData.pickupDate, bookingData.returnDate)} MAD</span>
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Du {formatDate(bookingData.pickupDate)} au {formatDate(bookingData.returnDate)}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              {/* WhatsApp Button */}
              <button
                onClick={() => openWhatsApp(selectedVehicle)}
                className="w-full bg-green-500 text-white font-bold py-4 px-6 rounded-lg hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Réserver via WhatsApp</span>
              </button>

              {/* Phone Call Button */}
              <button
                onClick={openPhoneCall}
                className="w-full bg-luxury-gold text-luxury-blue font-bold py-4 px-6 rounded-lg hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Appeler maintenant</span>
              </button>

              {/* Close Button */}
              <button
                onClick={() => setShowBookingModal(false)}
                className="w-full bg-gray-200 text-gray-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-all duration-300"
              >
                Annuler
              </button>
            </div>

            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 text-center">
                💰 Paiement en espèces à la livraison
                <br />
                📱 Réservation via WhatsApp ou téléphone
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default VehiclesSection