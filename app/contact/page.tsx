import React from 'react'
import { MapPin, Phone, Globe, Mail, Send, Building, Clock } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact - EUN CARS',
  description: 'Contactez EUN CARS pour la location de voitures au Maroc. Agence à Laâyoune, réservation par téléphone ou WhatsApp.',
}

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20 pb-16">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-12 px-4 md:px-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-luxury-blue mb-4">
              Contactez EUN CARS
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 md:px-8">
              Nous sommes là pour vous aider à trouver le véhicule parfait pour votre voyage
            </p>
          </div>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12 px-4 md:px-8">
            {/* Agency Location */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-yellow-400 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <MapPin className="w-6 h-6 text-luxury-blue" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-luxury-blue">
                  AGENCE LAÂYOUNE
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-luxury-gold mt-0.5 flex-shrink-0" />
                  <div className="flex-1">
                    <span className="text-gray-700 leading-relaxed">
                      AV Mekka 69,<br />Laayoune
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                  <span className="text-gray-700">+212 657-821410</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                  <span className="text-gray-700">Lun-Sam: 8h-20h</span>
                </div>
              </div>
            </div>

            {/* Online Contact */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-luxury-gold to-yellow-400 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                  <Globe className="w-6 h-6 text-luxury-blue" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-luxury-blue">
                  CONTACT EN LIGNE
                </h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                  <span className="text-gray-700">www.euncars.ma</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                  <span className="text-gray-700">contact@euncars.ma</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-luxury-gold flex-shrink-0" />
                  <span className="text-gray-700">WhatsApp: +212 657-821410</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-luxury-blue mb-2">
                  Envoyez-nous un message
                </h2>
                <p className="text-gray-600">
                  Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
                      placeholder="Votre nom complet"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
                      placeholder="+212 6XX XX XX XX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bureau de préférence
                    </label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300">
                      <option value="">Choisissez un bureau</option>
                      <option value="aeroport">Aéroport Laayoune</option>
                      <option value="bureau-central">Bureau Central - Laayoune</option>
                      <option value="centre-ville">Centre-ville Laayoune</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-luxury-gold focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Décrivez votre demande, dates de location, type de véhicule souhaité..."
                  ></textarea>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-luxury-gold to-yellow-400 text-luxury-blue font-bold px-8 py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
                  >
                    <Send className="w-5 h-5" />
                    <span>ENVOYER LE MESSAGE</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default ContactPage 