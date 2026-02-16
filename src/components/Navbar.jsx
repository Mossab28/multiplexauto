import React, { useState } from 'react'
import { Menu, X, Phone, MapPin } from 'lucide-react'

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'À Propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Galerie', href: '#gallery' },
    { name: 'Avis', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect py-4 red-glow' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.jpeg" 
              alt="Perfect'Car Logo" 
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
            />
            <div>
              <h1 className="text-xl sm:text-2xl font-racing font-bold gradient-text">
                MULTIPLEX AUTO
              </h1>
              <p className="text-xs text-gray-400 hidden sm:block">Vitres Teintées Premium</p>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-racing-red transition-colors duration-300 font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-racing-red group-hover:w-full transition-all duration-300" />
              </a>
            ))}
            <a
              href="tel:0663207808"
              className="bg-racing-red hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover-lift flex items-center space-x-2"
            >
              <Phone size={18} />
              <span>06 63 20 78 08</span>
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:bg-racing-red/20 rounded-lg transition-colors"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-slide-up">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-racing-red transition-colors duration-300 font-medium py-2 border-b border-gray-800"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:0663207808"
                className="bg-racing-red hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Phone size={18} />
                <span>06 63 20 78 08</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
