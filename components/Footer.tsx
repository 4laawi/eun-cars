import React from 'react'
import { Phone, MapPin, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-luxury-blue text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-16 px-4 md:px-0">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-luxury-gold rounded-lg flex items-center justify-center">
                <span className="text-luxury-blue font-bold text-lg">EC</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">EUN CARS</h3>
                <p className="text-sm text-gray-300">Location de Voiture</p>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">
                Eun Cars location de voiture Laayoune
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                Votre partenaire de confiance pour la location de véhicules à Laayoune et dans toute la région. 
                Service premium, véhicules de qualité et tarifs compétitifs.
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-luxury-gold" />
                <div>
                  <div className="font-semibold">Laayoune, Maroc</div>
                  <div className="text-sm text-gray-300">Siège principal</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-luxury-gold" />
                <div>
                  <div className="font-semibold">24h/24 - 7j/7</div>
                  <div className="text-sm text-gray-300">Service disponible</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact & Services */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                  <span className="text-sm text-gray-300">Location de voitures</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                  <span className="text-sm text-gray-300">Livraison gratuite</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                  <span className="text-sm text-gray-300">GPS inclus</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                  <span className="text-sm text-gray-300">Assurance complète</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                  <span className="text-sm text-gray-300">Service 24/7</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
                  <span className="text-sm text-gray-300">Tarifs transparents</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">Contactez-nous</h4>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-luxury-gold" />
                  <div>
                    <div className="font-semibold">+212 657-821410</div>
                    <div className="text-sm text-gray-300">Téléphone principal</div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-luxury-gold" />
                  <div>
                    <div className="font-semibold">contact@euncars.ma</div>
                    <div className="text-sm text-gray-300">Email</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Suivez-nous</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                  <Facebook className="w-5 h-5 text-luxury-blue" />
                </a>
                <a href="#" className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                  <Instagram className="w-5 h-5 text-luxury-blue" />
                </a>
                <a href="#" className="w-10 h-10 bg-luxury-gold rounded-full flex items-center justify-center hover:bg-yellow-400 transition-colors">
                  <Twitter className="w-5 h-5 text-luxury-blue" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Band */}
      <div className="bg-luxury-gold py-8 px-4 md:px-0">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left mb-4 lg:mb-0">
              <h3 className="text-2xl font-bold text-luxury-blue">
                VOUS AVEZ DES QUESTIONS ? N'HÉSITEZ PAS À DEMANDER...
              </h3>
            </div>
            <div className="flex items-center space-x-4">
              <button className="btn-secondary">
                APPELEZ-NOUS
              </button>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-luxury-blue" />
                <span className="text-xl font-bold text-luxury-blue">
                  +212 657-821410
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-luxury-dark py-6 px-4 md:px-0">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <div className="text-sm text-white mb-2">
                VISITEZ NOTRE AGENCE
              </div>
              <div className="text-sm text-gray-200">
                EUN CARS LOCATION DE VOITURE LAAYOUNE
              </div>
            </div>
            <div className="text-sm text-gray-200">
              © {currentYear} Developed by{' '}
              <a 
                href="https://sitepro.ma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-luxury-gold hover:text-yellow-400 transition-colors"
              >
                sitepro.ma
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 