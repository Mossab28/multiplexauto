import React from 'react'
import { ChevronDown, Shield, Sun, Eye, ThermometerSun, BadgeCheck, Sparkles, Award } from 'lucide-react'

const Hero = () => {

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16 sm:pt-20 pb-8 sm:pb-0">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Contenu à gauche */}
          <div className="text-center lg:text-left animate-fade-in py-4 sm:py-0">
            <div className="inline-block mb-6 sm:mb-6">
              <span className="bg-silver-accent/10 text-silver-accent px-4 py-2 sm:px-6 rounded-md text-xs sm:text-sm font-semibold border border-silver-accent/20">
                Atelier de Personnalisation Automobile
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-racing font-bold mb-6 sm:mb-6 animate-slide-up leading-tight">
              <span className="gradient-text">VITRES TEINTÉES</span>
              <br />
              <span className="text-white">DE HAUTE QUALITÉ</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 sm:mb-8 lg:max-w-xl animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Spécialiste du vitrage automobile à Troyes. Protection, style et confort pour votre véhicule.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center lg:items-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <a
                href="/multiplexauto/simulateur"
                className="bg-silver-accent hover:bg-white active:bg-gray-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 w-full sm:w-auto shadow-lg text-center"
              >
                Simulateur de Prix
              </a>
              <a
                href="#contact"
                className="bg-white/5 hover:bg-white/10 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg transition-all duration-300 border border-white/20 w-full sm:w-auto text-center"
              >
                Devis Gratuit
              </a>
            </div>

            <div className="grid grid-cols-3 gap-3 sm:gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-silver-accent mx-auto lg:mx-0 mb-1 sm:mb-2" />
                <h3 className="font-racing font-semibold text-xs sm:text-base mb-0.5 sm:mb-1">Protection UV</h3>
                <p className="text-gray-400 text-[10px] sm:text-xs">99% UV bloqués</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10">
                <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-silver-accent mx-auto lg:mx-0 mb-1 sm:mb-2" />
                <h3 className="font-racing font-semibold text-xs sm:text-base mb-0.5 sm:mb-1">Finition Premium</h3>
                <p className="text-gray-400 text-[10px] sm:text-xs">Installation pro</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-lg border border-white/10 transition-all duration-300 hover:bg-white/10">
                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-silver-accent mx-auto lg:mx-0 mb-1 sm:mb-2" />
                <h3 className="font-racing font-semibold text-xs sm:text-base mb-0.5 sm:mb-1">Garantie Qualité</h3>
                <p className="text-gray-400 text-[10px] sm:text-xs">Satisfaction garantie</p>
              </div>
            </div>
          </div>

          {/* Section Avantages à droite */}
          <div className="hidden lg:block">
            {/* Garantie à vie - Mise en avant compacte */}
            <div className="glass-effect border border-blue-500/30 rounded-xl p-6 mb-6 animate-slide-up hover-lift">
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping" />
                  <div className="relative">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" fill="#3B82F6"/>
                      <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-racing font-bold text-blue-500 mb-1">
                    GARANTIE À VIE OFFERTE
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Sur toutes nos installations de vitres teintées
                  </p>
                </div>
              </div>
            </div>

            {/* Avantages des vitres teintées */}
            <div className="space-y-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-xl font-racing font-bold text-white mb-3">Pourquoi teinter vos vitres ?</h3>
              
              <div className="glass-effect p-4 rounded-xl border border-silver-accent/20 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="bg-silver-accent/10 p-3 rounded-lg">
                    <Sun className="w-6 h-6 text-silver-accent" />
                  </div>
                  <div>
                    <h4 className="font-racing font-bold text-white mb-1">Protection UV 99%</h4>
                    <p className="text-gray-400 text-sm">Bloquez les rayons UV nocifs et protégez votre peau et l'intérieur de votre véhicule.</p>
                  </div>
                </div>
              </div>

              <div className="glass-effect p-4 rounded-xl border border-silver-accent/20 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="bg-silver-accent/10 p-3 rounded-lg">
                    <ThermometerSun className="w-6 h-6 text-silver-accent" />
                  </div>
                  <div>
                    <h4 className="font-racing font-bold text-white mb-1">Réduction de chaleur</h4>
                    <p className="text-gray-400 text-sm">Jusqu'à 60% de chaleur en moins dans votre habitacle, pour un confort optimal.</p>
                  </div>
                </div>
              </div>

              <div className="glass-effect p-4 rounded-xl border border-silver-accent/20 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="bg-silver-accent/10 p-3 rounded-lg">
                    <Eye className="w-6 h-6 text-silver-accent" />
                  </div>
                  <div>
                    <h4 className="font-racing font-bold text-white mb-1">Intimité renforcée</h4>
                    <p className="text-gray-400 text-sm">Protégez votre vie privée et dissuadez les tentatives d'effraction.</p>
                  </div>
                </div>
              </div>

              <div className="glass-effect p-4 rounded-xl border border-silver-accent/20 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="bg-silver-accent/10 p-3 rounded-lg">
                    <Sparkles className="w-6 h-6 text-silver-accent" />
                  </div>
                  <div>
                    <h4 className="font-racing font-bold text-white mb-1">Esthétique premium</h4>
                    <p className="text-gray-400 text-sm">Donnez un look sportif et élégant à votre véhicule.</p>
                  </div>
                </div>
              </div>

              <div className="glass-effect p-4 rounded-xl border border-silver-accent/20 hover-lift">
                <div className="flex items-start space-x-4">
                  <div className="bg-silver-accent/10 p-3 rounded-lg">
                    <Shield className="w-6 h-6 text-silver-accent" />
                  </div>
                  <div>
                    <h4 className="font-racing font-bold text-white mb-1">Protection anti-effraction</h4>
                    <p className="text-gray-400 text-sm">Le film renforce vos vitres et retarde les tentatives d'intrusion.</p>
                  </div>
                </div>
              </div>
            </div>
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
