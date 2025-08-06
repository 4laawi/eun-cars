import React from 'react'
import { 
  Truck, 
  Car, 
  Navigation, 
  DollarSign, 
  RefreshCw, 
  Phone,
  Shield,
  Clock,
  MapPin,
  Star
} from 'lucide-react'

const ServicesSection = () => {
  const services = [
    {
      icon: Truck,
      title: "Livraison gratuite des voitures",
      description: "Nous livrons votre véhicule directement à votre adresse ou à l'aéroport sans frais supplémentaires."
    },
    {
      icon: Car,
      title: "Un grand choix de véhicules",
      description: "Large gamme de véhicules : berlines, SUV, 4x4, utilitaires et véhicules de luxe."
    },
    {
      icon: Navigation,
      title: "GPS Gratuit avec votre location",
      description: "Tous nos véhicules sont équipés de GPS pour vous guider partout au Maroc."
    },
    {
      icon: DollarSign,
      title: "Tarifs Compétitifs",
      description: "Prix transparents sans frais cachés. Tarifs TTC avec assurance incluse."
    },
    {
      icon: RefreshCw,
      title: "Annulation - Modification",
      description: "Flexibilité totale : modifiez ou annulez votre réservation sans frais jusqu'à 24h avant."
    },
    {
      icon: Phone,
      title: "Assistance téléphonique 7/7",
      description: "Notre équipe est disponible 24h/24 et 7j/7 pour vous assister en cas de besoin."
    }
  ]

  const additionalFeatures = [
    {
      icon: Shield,
      title: "Assurance complète",
      description: "Protection maximale incluse"
    },
    {
      icon: Clock,
      title: "Service 24/7",
      description: "Disponible à tout moment"
    },
    {
      icon: MapPin,
      title: "Multiples agences",
      description: "Présence dans toute la région"
    },
    {
      icon: Star,
      title: "Service premium",
      description: "Excellence client garantie"
    }
  ]

  return (
    <section id="services" className="section-padding bg-luxury-cream">
      <div className="container-custom">
        {/* Header - Simplified for mobile */}
        <div className="text-center mb-8 md:mb-16">
          {/* Hide long title on mobile, show only on desktop */}
          <h2 className="hidden md:block text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-luxury-blue mb-4">
            EUN CARS Location de voiture Laayoune
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-luxury-gold mb-4 md:mb-6">
            POURQUOI NOUS CHOISIR
          </h3>
          {/* Hide long description on mobile */}
          <p className="hidden md:block text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 md:px-0">
            Découvrez pourquoi des milliers de clients nous font confiance pour leurs déplacements au Maroc
          </p>
        </div>

        {/* Main Services Grid - 2x2 on mobile, 3x2 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="card p-4 md:p-8 text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="w-10 h-10 md:w-16 md:h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-3 md:mb-6 group-hover:bg-yellow-400 transition-colors duration-300">
                <service.icon className="w-5 h-5 md:w-8 md:h-8 text-luxury-blue" />
              </div>
              <h4 className="text-sm md:text-xl font-bold text-luxury-blue mb-2 md:mb-4">
                {service.title}
              </h4>
              <p className="text-xs md:text-base text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features - Hidden on mobile to reduce clutter */}
        <div className="hidden md:block bg-white rounded-xl md:rounded-2xl p-6 md:p-8 shadow-lg">
          <h4 className="text-xl md:text-2xl font-bold text-luxury-blue text-center mb-6 md:mb-8">
            Services Inclus
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {additionalFeatures.map((feature, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-luxury-blue rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:bg-blue-800 transition-colors duration-300">
                  <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h5 className="font-semibold text-luxury-blue mb-1 md:mb-2 text-sm md:text-base">
                  {feature.title}
                </h5>
                <p className="text-xs md:text-sm text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action - Enhanced for mobile */}
        <div className="text-center mt-6 md:mt-12">
          <div className="inline-flex items-center space-x-3 md:space-x-4 bg-luxury-gold rounded-full px-6 md:px-8 py-3 md:py-4 text-luxury-blue font-semibold text-sm md:text-base">
            <Phone className="w-4 h-4 md:w-5 md:h-5" />
                            <span>Réservez maintenant : +212 657-821410</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection 