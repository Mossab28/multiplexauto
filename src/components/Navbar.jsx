import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, Phone, Calculator } from 'lucide-react'
import croppedLogo from '../../Images/cropped_logo.png'

const Navbar = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Accueil', href: '/', scrollToTop: true },
    { name: 'Nos avis', href: '/', scrollTo: 'testimonials' },
    { name: 'Galerie', href: '/', scrollTo: 'gallery' },
    { name: 'FAQ', href: '/', scrollTo: 'faq' },
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
          const navbarHeight = 80
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
      scrolled ? 'glass-effect py-3 sm:py-4 red-glow' : 'bg-transparent py-4 sm:py-5'
    }`}>
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative">
        <Link
          to="/"
          onClick={() => {
            setIsOpen(false)
            handleNavClick(null, true)
          }}
          className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 lg:flex lg:items-center lg:justify-center"
        >
          <img
            src={croppedLogo}
            alt="Perfect'Car Logo"
            className="w-[360px] xl:w-[420px] 2xl:w-[480px] h-auto object-contain"
          />
        </Link>

        <div className="flex min-h-[88px] sm:min-h-[102px] lg:min-h-[124px] items-center justify-between gap-3 sm:gap-4">
          <Link
            to="/"
            onClick={() => {
              setIsOpen(false)
              handleNavClick(null, true)
            }}
            className="flex items-center justify-start lg:invisible"
          >
            <img
              src={croppedLogo}
              alt="Perfect'Car Logo"
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </Link>

          <div className="relative z-10 ml-auto flex items-center justify-end gap-2 sm:gap-3 lg:gap-4">
            <Link
              to="/simulateur"
              onClick={() => {
                setIsOpen(false)
                handleNavClick(null, true)
              }}
              className="bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all duration-300 hover-lift flex flex-shrink-0 items-center space-x-1.5 shadow-lg border-2 border-red-400/50"
            >
              <Calculator size={16} />
              <span className="font-racing tracking-wide hidden whitespace-nowrap sm:inline">COMBIEN ÇA COÛTE ?</span>
              <span className="font-racing tracking-wide whitespace-nowrap sm:hidden">DEVIS</span>
            </Link>
            <a
              href="tel:0663207808"
              className="bg-call-green hover:bg-green-600 text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg font-bold text-xs sm:text-sm transition-all duration-300 hover-lift flex flex-shrink-0 items-center space-x-1.5 shadow-lg border-2 border-green-400/50"
            >
              <Phone size={16} />
              <span className="font-racing tracking-wide hidden whitespace-nowrap sm:inline">06 63 20 78 08</span>
              <span className="font-racing tracking-wide whitespace-nowrap sm:hidden">APPEL</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2.5 sm:p-3 hover:bg-silver-accent/20 rounded-lg transition-colors border border-white/10 bg-white/5"
              aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="absolute right-3 sm:right-6 lg:right-8 top-full mt-3 w-[260px] animate-slide-up">
            <div className="bg-matte-black/95 backdrop-blur-md rounded-xl px-4 py-4 border border-white/10 shadow-2xl">
              <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => {
                      setIsOpen(false)
                      handleNavClick(link.scrollTo, link.scrollToTop)
                    }}
                    className="text-gray-300 hover:text-silver-accent hover:bg-white/5 transition-colors duration-300 font-medium py-3 px-3 rounded-lg border-b border-gray-800 last:border-b-0"
                  >
                    <span>{link.name}</span>
                  </Link>
                )
              })}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
