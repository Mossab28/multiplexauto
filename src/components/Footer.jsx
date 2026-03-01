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
              <a
                href="https://www.google.com/maps/place/PERFECT'+Car/@48.2953333,4.0747222,17z/data=!3m1!4b1!4m6!3m5!1s0x47ee9750e227e70f:0x7c8c8c8c8c8c8c8c!8m2!3d48.2953333!4d4.0747222!16s%2Fg%2F11c5y5y5y5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-700 hover:text-gray-900 bg-white hover:bg-gray-50 px-2 py-1.5 rounded transition-colors border border-gray-200"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
                <span className="font-semibold text-xs sm:text-base">Google Maps</span>
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
