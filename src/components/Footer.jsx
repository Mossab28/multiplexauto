import React from 'react'
import { Instagram, Phone, Mail, MapPin, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-16 h-16 flex items-center justify-center">
                <img 
                  src="/multiplexauto/logo.png" 
                  alt="Perfect'Car Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-racing font-bold gradient-text">PERFECT CAR</h3>
            </div>
            <p className="text-gray-400 mb-4">
              Votre spécialiste en vitres teintées à Troyes. Qualité professionnelle et service personnalisé.
            </p>
            <a
              href="https://www.instagram.com/perfect_car_troyes/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-silver-accent hover:text-red-600 transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="font-semibold">@perfect_car_troyes</span>
            </a>
          </div>

          <div>
            <h4 className="font-racing font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-silver-accent transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-silver-accent transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-silver-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-silver-accent transition-colors">
                  Galerie
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-silver-accent transition-colors">
                  Avis
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-silver-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-racing font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Vitres Teintées Citadines</li>
              <li className="text-gray-400">Vitres Teintées Berlines</li>
              <li className="text-gray-400">Vitres Teintées Sportives</li>
              <li className="text-gray-400">Film Anti-Effraction</li>
              <li className="text-gray-400">Protection UV</li>
              <li className="text-gray-400">Personnalisation</li>
            </ul>
          </div>

          <div>
            <h4 className="font-racing font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-silver-accent flex-shrink-0 mt-1" />
                <a href="tel:0663207808" className="text-gray-400 hover:text-silver-accent transition-colors">
                  06 63 20 78 08
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-silver-accent flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  2 rue Archimède<br />
                  10600 La Chapelle Saint-Luc
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-silver-accent flex-shrink-0 mt-1" />
                <a href="https://multiplexeauto.fr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-silver-accent transition-colors">
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
