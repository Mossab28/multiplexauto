import React from 'react'
import { Users, Target, TrendingUp, MapPin } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Users, value: '5000+', label: 'Clients Satisfaits' },
    { icon: Target, value: '10+', label: "Années d'Expérience" },
    { icon: TrendingUp, value: '103', label: 'Publications Instagram' },
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-right">
            <div className="inline-block mb-4">
              <span className="text-silver-accent font-racing font-bold text-sm tracking-wider">QUI SOMMES-NOUS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-racing font-bold mb-6">
              <span className="gradient-text">PERFECT' CAR</span>
              <br />
              <span className="text-white">Votre Expert en Vitrage</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Basé à <span className="text-silver-accent font-semibold">Troyes</span>, nous sommes spécialisés dans la pose de vitres teintées pour tous types de véhicules. Notre atelier de personnalisation automobile offre des services de haute qualité avec une attention particulière aux détails.
            </p>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Avec plus de <span className="text-silver-accent font-semibold">5000 followers</span> sur Instagram et des centaines de clients satisfaits, nous sommes reconnus pour notre expertise et notre professionnalisme dans le domaine du vitrage automobile.
            </p>

            <div className="flex items-start space-x-3 mb-6 glass-effect p-4 rounded-lg">
              <MapPin className="w-6 h-6 text-silver-accent flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-white">Notre Atelier</p>
                <p className="text-gray-400">2 rue Archimède</p>
                <p className="text-gray-400">10600 La Chapelle Saint-Luc</p>
              </div>
            </div>

            <a
              href="https://www.instagram.com/perfect_car_troyes/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover-lift"
            >
              📱 Suivez-nous sur Instagram
            </a>
          </div>

          <div className="relative animate-slide-up">
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-effect p-6 rounded-xl hover-lift text-center">
                <div className="w-16 h-16 bg-silver-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-silver-accent" />
                </div>
                <h3 className="text-3xl font-racing font-bold text-white mb-2">5000+</h3>
                <p className="text-gray-400">Clients Satisfaits</p>
              </div>
              <div className="glass-effect p-6 rounded-xl hover-lift text-center mt-8">
                <div className="w-16 h-16 bg-silver-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-silver-accent" />
                </div>
                <h3 className="text-3xl font-racing font-bold text-white mb-2">10+</h3>
                <p className="text-gray-400">Années d'Expérience</p>
              </div>
              <div className="glass-effect p-6 rounded-xl hover-lift text-center">
                <div className="w-16 h-16 bg-silver-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-silver-accent" />
                </div>
                <h3 className="text-3xl font-racing font-bold text-white mb-2">103</h3>
                <p className="text-gray-400">Publications</p>
              </div>
              <div className="glass-effect p-6 rounded-xl hover-lift text-center mt-8">
                <div className="w-16 h-16 bg-silver-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-silver-accent" />
                </div>
                <h3 className="text-3xl font-racing font-bold text-white mb-2">1</h3>
                <p className="text-gray-400">Atelier à Troyes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
