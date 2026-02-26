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
              <span className="gradient-text">PERFECT' CAR</span>
            </h1>
            
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-6 lg:max-w-xl animate-slide-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
              Chez <span className="font-bold text-white">PERFECT' CAR</span>, nous sommes spécialisés dans la pose de <span className="font-bold text-white">vitres teintées haut de gamme</span>, conçues pour améliorer <span className="font-bold text-white">le confort, la sécurité et la valeur</span> de votre véhicule. Installés à <span className="font-bold text-white">Troyes</span>, nous accompagnons particuliers et professionnels avec des prestations <span className="font-bold text-white">précises, durables et conformes à la réglementation</span>.
            </p>
            

            <p className="text-base sm:text-lg text-gray-300 mb-6 animate-slide-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
              Chaque installation est réalisée avec un <span className="font-bold text-white">matériel professionnel</span>, une <span className="font-bold text-white">pose millimétrée sans bulles</span>, et des <span className="font-bold text-white">films garantis</span>, pour un rendu irréprochable et durable dans le temps.
            </p>

            <p className="text-base sm:text-lg text-gray-300 mb-8 animate-slide-up leading-relaxed" style={{ animationDelay: '0.5s' }}>
              <span className="font-bold text-white">PERFECT' CAR</span> incarne l'exigence du détail et la finition haut de gamme au service de votre confort.
            </p>
          </div>

          {/* Section Avantages à droite */}
          <div className="hidden lg:block pt-8">
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
              <div className="glass-effect p-4 rounded-xl border border-silver-accent/20 hover-lift">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">☀️</span>
                  <p className="text-gray-300 text-sm"><span className="font-bold text-white">Rejet élevé de la chaleur :</span> jusqu'à -60 % de chaleur ressentie, pour un habitacle plus frais été comme hiver</p>
                </div>
              </div>
              <div className="glass-effect p-4 rounded-xl border border-silver-accent/20 hover-lift">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🛡️</span>
                  <p className="text-gray-300 text-sm"><span className="font-bold text-white">Protection UV à 99 % :</span> préserve la peau, évite la décoloration des sièges, cuirs et plastiques</p>
                </div>
              </div>
              <div className="glass-effect p-4 rounded-xl border border-silver-accent/20 hover-lift">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🔒</span>
                  <p className="text-gray-300 text-sm"><span className="font-bold text-white">Sécurité renforcée :</span> en cas de choc ou de bris de glace, le film retient les éclats</p>
                </div>
              </div>
              <div className="glass-effect p-4 rounded-xl border border-silver-accent/20 hover-lift">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">👀</span>
                  <p className="text-gray-300 text-sm"><span className="font-bold text-white">Intimité et discrétion</span> sans compromettre la visibilité</p>
                </div>
              </div>
              <div className="glass-effect p-4 rounded-xl border border-silver-accent/20 hover-lift">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">🕶️</span>
                  <p className="text-gray-300 text-sm"><span className="font-bold text-white">Réduction de l'éblouissement</span> et de la fatigue visuelle</p>
                </div>
              </div>
              <div className="glass-effect p-4 rounded-xl border border-silver-accent/20 hover-lift">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">💎</span>
                  <p className="text-gray-300 text-sm"><span className="font-bold text-white">Esthétique premium :</span> finition nette, élégante et homogène</p>
                </div>
              </div>
              <div className="glass-effect p-4 rounded-xl border border-silver-accent/20 hover-lift">
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">💰</span>
                  <p className="text-gray-300 text-sm"><span className="font-bold text-white">Valorisation du véhicule</span> à la revente</p>
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
