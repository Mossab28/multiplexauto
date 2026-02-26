import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Phone, MapPin, Calculator } from 'lucide-react'

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Accueil', href: '/', type: 'route' },
    { name: 'À Propos', href: '/', type: 'route', scrollTo: 'about' },
    { name: 'Services', href: '/', type: 'route', scrollTo: 'services' },
    { name: 'Galerie', href: '/', type: 'route', scrollTo: 'gallery' },
    { name: 'Contact', href: '/', type: 'route', scrollTo: 'contact' },
  ]

  const handleNavClick = (scrollTo, scrollToTop) => {
    if (scrollToTop) {
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      }, 100)
    } else if (scrollTo) {
      setTimeout(() => {
        const element = document.getElementById(scrollTo)
        if (element) {
          const navbarHeight = 100
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          const offsetPosition = elementPosition - navbarHeight
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'glass-effect py-4 red-glow' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center -ml-8 overflow-hidden">
            <img 
              src="/multiplexauto/logo-new.png" 
              alt="Perfect'Car Logo" 
              className="w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-contain scale-150"
              style={{ objectPosition: 'left center' }}
            />
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const LinkIcon = link.icon
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => handleNavClick(link.scrollTo, link.scrollToTop)}
                  className="text-gray-300 hover:text-silver-accent transition-colors duration-300 font-medium group flex items-center space-x-1"
                >
                  {LinkIcon && <LinkIcon className="w-4 h-4" />}
                  <span className="relative">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-silver-accent group-hover:w-full transition-all duration-300" />
                  </span>
                </Link>
              )
            })}
            <Link
              to="/simulateur"
              onClick={() => handleNavClick(null, true)}
              className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-6 py-2.5 rounded-lg font-black transition-all duration-300 hover-lift flex items-center space-x-2 shadow-lg border-2 border-red-400/50"
            >
              <Calculator size={18} />
              <span className="font-racing tracking-wide">COMBIEN ÇA COÛTE ?</span>
            </Link>
            <a
              href="tel:0663207808"
              className="bg-call-green hover:bg-green-600 text-white px-6 py-2.5 rounded-lg font-black transition-all duration-300 hover-lift flex items-center space-x-2 shadow-lg border-2 border-green-400/50"
            >
              <Phone size={18} />
              <span className="font-racing tracking-wide">06 63 20 78 08</span>
            </a>
          </div>

          <div className="lg:hidden flex items-center space-x-3">
            <a
              href="tel:0663207808"
              className="bg-call-green hover:bg-green-600 text-white p-3 rounded-full transition-all duration-300 hover-lift"
            >
              <Phone size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 hover:bg-silver-accent/20 rounded-lg transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 animate-slide-up bg-matte-black/95 backdrop-blur-md rounded-lg px-4">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const LinkIcon = link.icon
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => {
                      setIsOpen(false)
                      handleNavClick(link.scrollTo, link.scrollToTop)
                    }}
                    className="text-gray-300 hover:text-silver-accent transition-colors duration-300 font-medium py-2 border-b border-gray-800 flex items-center space-x-2"
                  >
                    {LinkIcon && <LinkIcon className="w-4 h-4" />}
                    <span>{link.name}</span>
                  </Link>
                )
              })}
              <Link
                to="/simulateur"
                onClick={() => {
                  setIsOpen(false)
                  handleNavClick(null, true)
                }}
                className="bg-gradient-to-r from-red-600 to-red-500 text-white px-4 py-3 rounded-lg font-black transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg border-2 border-red-400/50"
              >
                <Calculator size={18} />
                <span className="font-racing tracking-wide">COMBIEN ÇA COÛTE ?</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
