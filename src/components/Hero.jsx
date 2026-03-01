import React from 'react'
import { ChevronDown, Shield, Sun, Eye, ThermometerSun, BadgeCheck, Sparkles, Award, Instagram, Facebook, MapPin } from 'lucide-react'

const Hero = () => {

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-32 sm:pt-24 pb-12">
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          {/* Contenu à gauche */}
          <div className="text-center lg:text-left animate-fade-in lg:pt-8">
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-racing font-bold mb-4 lg:mb-6 lg:max-w-xl animate-slide-up leading-tight" style={{ animationDelay: '0.2s' }}>
              <span className="gradient-text">Chez PERFECT'car, nous sommes spécialisés dans la pose de vitres teintées haut de gamme</span>
            </h1>
            
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 lg:mb-6 lg:max-w-xl animate-slide-up leading-relaxed" style={{ animationDelay: '0.3s' }}>
              conçues pour améliorer <span className="font-bold text-white">le confort, la sécurité et la valeur</span> de votre véhicule. Installés à <span className="font-bold text-white">Troyes</span>, nous accompagnons particuliers et professionnels avec des prestations <span className="font-bold text-white">précises, durables et conformes à la réglementation</span>.
            </p>
            

            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 lg:mb-6 animate-slide-up leading-relaxed" style={{ animationDelay: '0.4s' }}>
              Chaque installation est réalisée avec un <span className="font-bold text-white">matériel professionnel</span>, une <span className="font-bold text-white">pose millimétrée sans bulles</span>, et des <span className="font-bold text-white">films garantis</span>, pour un rendu irréprochable et durable dans le temps.
            </p>

            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-4 lg:mb-6 animate-slide-up leading-relaxed" style={{ animationDelay: '0.5s' }}>
              <span className="font-bold text-white">PERFECT'car</span> incarne l'exigence du détail et la finition haut de gamme au service de votre confort.
            </p>

            {/* Réseaux sociaux */}
            <div className="glass-effect p-3 sm:p-4 rounded-xl mb-6 lg:mb-8 animate-slide-up lg:max-w-xl" style={{ animationDelay: '0.6s' }}>
              <h3 className="text-xs sm:text-sm font-racing font-bold mb-2 sm:mb-3 text-white">Suivez-nous</h3>
              <div className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/perfect_car_troyes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-2 sm:px-3 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover-lift"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-bold text-xs sm:text-xs truncate">@perfect_car_troyes</p>
                    <p className="text-[10px] sm:text-xs opacity-90">5006 followers • 103 publications</p>
                  </div>
                </a>
                <a
                  href="https://www.facebook.com/PERFECTCarTROYES/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-2 sm:px-3 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover-lift"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <div className="min-w-0">
                    <p className="font-bold text-xs sm:text-xs truncate">PERFECT'Car TROYES</p>
                    <p className="text-[10px] sm:text-xs opacity-90">Suivez notre actualité</p>
                  </div>
                </a>
                <a
                  href="https://www.google.com/maps/place/PERFECT'+Car/@48.2953333,4.0747222,17z/data=!3m1!4b1!4m6!3m5!1s0x47ee9750e227e70f:0x7c8c8c8c8c8c8c8c!8m2!3d48.2953333!4d4.0747222!16s%2Fg%2F11c5y5y5y5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center space-x-2 bg-white hover:bg-gray-50 text-gray-900 px-2 sm:px-3 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 hover-lift border border-gray-200"
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <div className="min-w-0">
                    <p className="font-bold text-xs sm:text-xs truncate">PERFECT' car sur Google</p>
                    <p className="text-[10px] sm:text-xs opacity-70">4.9★ • 300+ avis clients</p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Section Avantages à droite */}
          <div className="lg:pt-8">
            {/* Garantie à vie - Mise en avant compacte */}
            <div className="glass-effect border border-blue-500/30 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6 animate-slide-up hover-lift">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping" />
                  <div className="relative">
                    <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" fill="#3B82F6"/>
                      <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-sm sm:text-base lg:text-xl font-racing font-bold text-blue-500 mb-1">
                    GARANTIE JUSQU'À LA CESSION DU VÉHICULE
                  </h3>
                  <p className="text-gray-300 text-xs sm:text-sm">
                    Sur toutes nos installations de vitres teintées
                  </p>
                </div>
              </div>
            </div>

            {/* Avantages des vitres teintées */}
            <div className="space-y-2 sm:space-y-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="glass-effect p-3 sm:p-4 rounded-xl border border-silver-accent/20 hover-lift">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">☀️</span>
                  <p className="text-gray-300 text-xs sm:text-sm"><span className="font-bold text-white">Rejet élevé de la chaleur :</span> jusqu'à -60 % de chaleur ressentie, pour un habitacle plus frais été comme hiver</p>
                </div>
              </div>
              <div className="glass-effect p-3 sm:p-4 rounded-xl border border-silver-accent/20 hover-lift">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">🛡️</span>
                  <p className="text-gray-300 text-xs sm:text-sm"><span className="font-bold text-white">Protection UV à 99 % :</span> préserve la peau, évite la décoloration des sièges, cuirs et plastiques</p>
                </div>
              </div>
              <div className="glass-effect p-3 sm:p-4 rounded-xl border border-silver-accent/20 hover-lift">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">🔒</span>
                  <p className="text-gray-300 text-xs sm:text-sm"><span className="font-bold text-white">Sécurité renforcée :</span> en cas de choc ou de bris de glace, le film retient les éclats</p>
                </div>
              </div>
              <div className="glass-effect p-3 sm:p-4 rounded-xl border border-silver-accent/20 hover-lift">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">👀</span>
                  <p className="text-gray-300 text-xs sm:text-sm"><span className="font-bold text-white">Intimité et discrétion</span> sans compromettre la visibilité</p>
                </div>
              </div>
              <div className="glass-effect p-3 sm:p-4 rounded-xl border border-silver-accent/20 hover-lift">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">🌞</span>
                  <p className="text-gray-300 text-xs sm:text-sm"><span className="font-bold text-white">Réduction de l'éblouissement</span> et de la fatigue visuelle</p>
                </div>
              </div>
              <div className="glass-effect p-3 sm:p-4 rounded-xl border border-silver-accent/20 hover-lift">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">💎</span>
                  <p className="text-gray-300 text-xs sm:text-sm"><span className="font-bold text-white">Esthétique premium :</span> finition nette, élégante et homogène</p>
                </div>
              </div>
              <div className="glass-effect p-3 sm:p-4 rounded-xl border border-silver-accent/20 hover-lift">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <span className="text-xl sm:text-2xl flex-shrink-0">💰</span>
                  <p className="text-gray-300 text-xs sm:text-sm"><span className="font-bold text-white">Valorisation du véhicule</span> à la revente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
