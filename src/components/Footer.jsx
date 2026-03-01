import React from 'react'
import { Instagram, Phone, Mail, MapPin, Heart, Facebook } from 'lucide-react'
import { Link, useNavigate } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const navigate = useNavigate()

  const handleNavClick = (sectionId) => {
    navigate('/')
    setTimeout(() => {
      const element = document.getElementById(sectionId)
      if (element) {
        const navbarHeight = 80
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
        window.scrollTo({
          top: elementPosition - navbarHeight,
          behavior: 'smooth'
        })
      }
    }, 100)
  }

  return (
    <footer className="relative py-8 sm:py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div>
            <div className="flex items-center mb-3 sm:mb-4">
              <img 
                src="/multiplexauto/logo-new.png" 
                alt="Perfect'Car Logo" 
                className="h-10 sm:h-20 lg:h-24 w-auto object-contain sm:pt-6"
              />
            </div>
            <p className="text-gray-400 text-xs sm:text-base mb-3 sm:mb-4">
              Votre spécialiste en vitres teintées à Troyes.
            </p>
            <div className="flex flex-col space-y-2 sm:space-y-3">
              <a
                href="https://www.instagram.com/perfect_car_troyes/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-silver-accent hover:text-red-600 transition-colors"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold text-xs sm:text-base">@perfect_car_troyes</span>
              </a>
              <a
                href="https://www.facebook.com/PERFECTCarTROYES/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-silver-accent hover:text-blue-600 transition-colors"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-semibold text-xs sm:text-base">PERFECT'Car TROYES</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-racing font-bold text-sm sm:text-lg mb-3 sm:mb-4">Navigation</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li>
                <button onClick={() => handleNavClick('home')} className="text-gray-400 hover:text-silver-accent transition-colors text-xs sm:text-base">
                  Accueil
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('testimonials')} className="text-gray-400 hover:text-silver-accent transition-colors text-xs sm:text-base">
                  Avis
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('gallery')} className="text-gray-400 hover:text-silver-accent transition-colors text-xs sm:text-base">
                  Galerie
                </button>
              </li>
              <li>
                <button onClick={() => handleNavClick('contact')} className="text-gray-400 hover:text-silver-accent transition-colors text-xs sm:text-base">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-racing font-bold text-sm sm:text-lg mb-3 sm:mb-4">Services</h4>
            <ul className="space-y-1 sm:space-y-2">
              <li className="text-gray-400 text-xs sm:text-base">Vitres Teintées Citadines</li>
              <li className="text-gray-400 text-xs sm:text-base">Vitres Teintées Berlines</li>
              <li className="text-gray-400 text-xs sm:text-base">Vitres Teintées Sportives</li>
              <li className="text-gray-400 text-xs sm:text-base">Film Anti-Effraction</li>
              <li className="text-gray-400 text-xs sm:text-base">Protection UV</li>
              <li className="text-gray-400 text-xs sm:text-base">Personnalisation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-racing font-bold text-sm sm:text-lg mb-3 sm:mb-4">Contact</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li className="flex items-start space-x-2 sm:space-x-3">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-silver-accent flex-shrink-0 mt-0.5" />
                <a href="tel:0663207808" className="text-gray-400 hover:text-silver-accent transition-colors text-xs sm:text-base">
                  06 63 20 78 08
                </a>
              </li>
              <li className="flex items-start space-x-2 sm:space-x-3">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-silver-accent flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 text-xs sm:text-base">
                  2 rue Archimède<br />
                  10600 La Chapelle Saint-Luc
                </span>
              </li>
              <li className="flex items-start space-x-2 sm:space-x-3">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-silver-accent flex-shrink-0 mt-0.5" />
                <a href="https://multiplexeauto.fr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-silver-accent transition-colors text-xs sm:text-base">
                  multiplexeauto.fr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Perfect Car. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm flex items-center space-x-1">
              <span>Créé avec</span>
              <Heart className="w-4 h-4 text-silver-accent fill-silver-accent" />
              <span>à Troyes</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
