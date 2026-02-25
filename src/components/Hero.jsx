import React from 'react'
import { ChevronDown, Sparkles, Shield, Award } from 'lucide-react'

const Hero = () => {
  const galleryImages = [
    '/multiplexauto/images/gallery/gallery-1.jpg',
    '/multiplexauto/images/gallery/gallery-2.jpg',
    '/multiplexauto/images/gallery/gallery-4.jpg',
    '/multiplexauto/images/gallery/gallery-5.jpg',
    '/multiplexauto/images/gallery/gallery-7.jpg',
    '/multiplexauto/images/gallery/gallery-8.jpg',
    '/multiplexauto/images/gallery/gallery-13.jpg',
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-20">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu à gauche */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="inline-block mb-6">
              <span className="bg-silver-accent/10 text-silver-accent px-6 py-2 rounded-md text-sm font-semibold border border-silver-accent/20">
                Atelier de Personnalisation Automobile
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-racing font-bold mb-6 animate-slide-up">
              <span className="gradient-text">VITRES TEINTÉES</span>
              <br />
              <span className="text-white">DE HAUTE QUALITÉ</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-300 mb-8 lg:max-w-xl animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Spécialiste du vitrage automobile à Troyes. Protection, style et confort pour votre véhicule.
            </p>

            <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="#contact"
                className="bg-silver-accent hover:bg-white text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto shadow-lg"
              >
                Devis Gratuit
              </a>
              <a
                href="#services"
                className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/20 w-full sm:w-auto"
              >
                Nos Services
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10">
                <Shield className="w-8 h-8 text-silver-accent mx-auto lg:mx-0 mb-2" />
                <h3 className="font-racing font-semibold text-base mb-1">Protection UV</h3>
                <p className="text-gray-400 text-xs">99% des rayons UV bloqués</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10">
                <Sparkles className="w-8 h-8 text-silver-accent mx-auto lg:mx-0 mb-2" />
                <h3 className="font-racing font-semibold text-base mb-1">Finition Premium</h3>
                <p className="text-gray-400 text-xs">Installation professionnelle</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10">
                <Award className="w-8 h-8 text-silver-accent mx-auto lg:mx-0 mb-2" />
                <h3 className="font-racing font-semibold text-base mb-1">Garantie Qualité</h3>
                <p className="text-gray-400 text-xs">Satisfaction garantie</p>
              </div>
            </div>
          </div>

          {/* Animation d'images à droite - visible uniquement sur desktop */}
          <div className="hidden lg:flex gap-4 h-[600px] relative overflow-hidden">
            {/* Colonne 1 - défile vers le bas */}
            <div className="flex-1 flex flex-col gap-4 animate-scroll-down">
              {[...galleryImages, ...galleryImages].map((img, idx) => (
                <div key={`col1-${idx}`} className="relative h-48 rounded-xl overflow-hidden flex-shrink-0 border border-silver-accent/10">
                  <img src={img} alt={`Car ${idx + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              ))}
            </div>

            {/* Colonne 2 - défile vers le haut (sens inverse) */}
            <div className="flex-1 flex flex-col gap-4 animate-scroll-up">
              {[...galleryImages.slice().reverse(), ...galleryImages.slice().reverse()].map((img, idx) => (
                <div key={`col2-${idx}`} className="relative h-48 rounded-xl overflow-hidden flex-shrink-0 border border-silver-accent/10">
                  <img src={img} alt={`Car ${idx + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              ))}
            </div>

            {/* Colonne 3 - défile vers le bas */}
            <div className="flex-1 flex flex-col gap-4 animate-scroll-down">
              {[...galleryImages, ...galleryImages].map((img, idx) => (
                <div key={`col3-${idx}`} className="relative h-48 rounded-xl overflow-hidden flex-shrink-0 border border-silver-accent/10">
                  <img src={img} alt={`Car ${idx + 1}`} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              ))}
            </div>

            {/* Gradient overlay pour masquer les bords */}
            <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-matte-black to-transparent pointer-events-none z-10" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-matte-black to-transparent pointer-events-none z-10" />
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-silver-accent" />
      </a>
    </section>
  )
}

export default Hero
