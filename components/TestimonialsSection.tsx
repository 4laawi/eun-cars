import React from 'react'
import { Star, Quote } from 'lucide-react'

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Ahmed Benali",
      location: "Laayoune",
      rating: 5,
      comment: "Service exceptionnel ! Voiture en parfait état, livraison ponctuelle. Je recommande vivement Eun Cars pour tous vos déplacements à Laayoune."
    },
    {
      id: 2,
      name: "Fatima Zahra",
      location: "Casablanca",
      rating: 5,
      comment: "Très satisfaite de mon expérience. Personnel professionnel, véhicules bien entretenus et tarifs transparents. Je reviendrai !"
    },
    {
      id: 3,
      name: "Mohammed El Amrani",
      location: "Rabat",
      rating: 5,
      comment: "Location parfaite pour mon voyage d'affaires. GPS inclus, assurance complète et service client réactif. Excellent rapport qualité-prix."
    }
  ]

  const stats = [
    { number: "850+", label: "Clients Satisfaits" },
    { number: "12+", label: "Véhicules Disponibles" },
    { number: "24/7", label: "Assistance Client" },
    { number: "4.8/5", label: "Note Moyenne" }
  ]

  return (
    <section id="testimonials" className="section-padding bg-luxury-cream">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-luxury-blue mb-4">
            Avis de Nos Clients
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4 md:px-0">
            Découvrez ce que nos clients disent de notre service
          </p>
        </div>

        {/* Stats - Hidden on mobile to reduce clutter */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-luxury-gold mb-2">
                {stat.number}
              </div>
              <div className="text-sm lg:text-base text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card p-6 md:p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-luxury-gold/20">
                <Quote className="w-8 h-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-luxury-gold fill-current" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-sm md:text-base text-gray-700 mb-6 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-luxury-gold rounded-full flex items-center justify-center mr-3 md:mr-4">
                  <span className="text-luxury-blue font-bold text-sm md:text-base">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-luxury-blue text-sm md:text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Stats - Only show on mobile */}
        <div className="md:hidden mt-8">
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-4">
              {stats.slice(0, 2).map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-luxury-gold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection 