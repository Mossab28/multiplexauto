import React from 'react'
import { ChevronDown, Sparkles, Shield, Award } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920')] bg-cover bg-center opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-carbon/40 to-carbon" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="inline-block mb-6">
            <span className="bg-racing-red/10 text-racing-red px-6 py-2 rounded-md text-sm font-semibold border border-racing-red/20">
              Atelier de Personnalisation Automobile
            </span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-racing font-bold mb-6 animate-slide-up">
            <span className="gradient-text">VITRES TEINTÉES</span>
            <br />
            <span className="text-white">DE HAUTE QUALITÉ</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Spécialiste du vitrage automobile à Troyes. Protection, style et confort pour votre véhicule.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <a
              href="#contact"
              className="bg-racing-red hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto shadow-lg"
            >
              Demander un Devis
            </a>
            <a
              href="#services"
              className="bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/20 w-full sm:w-auto"
            >
              Nos Services
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10">
              <Shield className="w-10 h-10 text-racing-red mx-auto mb-3" />
              <h3 className="font-racing font-semibold text-lg mb-2">Protection UV</h3>
              <p className="text-gray-400 text-sm">99% des rayons UV bloqués</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10">
              <Sparkles className="w-10 h-10 text-racing-red mx-auto mb-3" />
              <h3 className="font-racing font-semibold text-lg mb-2">Finition Premium</h3>
              <p className="text-gray-400 text-sm">Installation professionnelle</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10">
              <Award className="w-10 h-10 text-racing-red mx-auto mb-3" />
              <h3 className="font-racing font-semibold text-lg mb-2">Garantie Qualité</h3>
              <p className="text-gray-400 text-sm">Satisfaction garantie</p>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-racing-red" />
      </a>
    </section>
  )
}

export default Hero
