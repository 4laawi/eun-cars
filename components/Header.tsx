'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const navigation = [
    { name: 'Accueil', href: '/', homeOnly: false },
    { name: 'Nos Véhicules', href: '/#vehicles', homeOnly: true },
    { name: 'Services', href: '/#services', homeOnly: true },
    { name: 'À Propos', href: '/contact', homeOnly: false },
    { name: 'Contact', href: '/contact', homeOnly: false },
  ]

  const handleNavigation = (href: string, homeOnly: boolean) => {
    if (homeOnly && pathname !== '/') {
      // If we're not on home page and link is home-only, navigate to home first
      router.push(href)
    } else if (href === '/contact') {
      // For contact page, use Next.js navigation
      router.push(href)
    } else if (href === '/') {
      // Navigate to home page
      router.push(href)
    } else {
      // For sections on home page, smooth scroll
      if (href.startsWith('/#')) {
        const sectionId = href.split('#')[1]
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20 px-4 md:px-0">
          {/* Logo */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <Link href="/" className="flex items-center space-x-2 md:space-x-3 hover:opacity-80 transition-opacity duration-300">
              <div className="relative w-10 h-10 md:w-12 md:h-12">
                <Image
                  src="/images/Logo/second-logo.png"
                  alt="EUN CARS Logo"
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 768px) 40px, 48px"
                />
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-luxury-blue">EUN CARS</h1>
                <p className="text-xs md:text-sm text-gray-600">Location de Voiture</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href, item.homeOnly)}
                className="text-gray-700 hover:text-luxury-gold transition-colors duration-300 font-medium"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Info - Desktop */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-luxury-gold" />
              <span className="text-sm font-medium">+212 657-821410</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-luxury-gold" />
              <span className="text-sm font-medium">Laayoune</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-luxury-blue" />
            ) : (
              <Menu className="w-6 h-6 text-luxury-blue" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg">
            <div className="px-6 py-8 space-y-6">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.href, item.homeOnly)}
                  className="block text-gray-700 hover:text-luxury-gold transition-colors duration-300 font-medium text-lg w-full text-left"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-6 border-t border-gray-100 space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-luxury-gold" />
                  <span className="text-base font-medium">+212 657-821410</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-luxury-gold" />
                  <span className="text-base font-medium">Laayoune</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header 