import React, { useState } from 'react'
import { Car, Zap, Trophy, Shield, Sun, Lock } from 'lucide-react'

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('citadine')

  const categories = [
    {
      id: 'citadine',
      name: 'Citadine',
      icon: Car,
      description: 'Parfait pour les véhicules urbains',
      features: [
        'Vitres latérales teintées',
        'Lunette arrière',
        'Protection UV 99%',
        'Garantie 5 ans',
      ],
      price: 'À partir de 150€',
      image: '/multiplexauto/images/services/citadine.jpg',
    },
    {
      id: 'berline',
      name: 'Berline',
      icon: Shield,
      description: 'Élégance et protection optimale',
      features: [
        'Vitrage complet',
        'Film premium anti-effraction',
        'Réduction chaleur 80%',
        'Garantie 7 ans',
      ],
      price: 'À partir de 250€',
      image: '/multiplexauto/images/services/berline.jpg',
    },
    {
      id: 'sportive',
      name: 'Sportive',
      icon: Zap,
      description: 'Performance et style racing',
      features: [
        'Film haute performance',
        'Teinte personnalisée',
        'Protection maximale',
        'Garantie 10 ans',
      ],
      price: 'À partir de 350€',
      image: '/multiplexauto/images/services/sportive.jpg',
    },
  ]

  const benefits = [
    { icon: Sun, title: 'Protection UV', desc: 'Bloque 99% des rayons UV nocifs' },
    { icon: Shield, title: 'Anti-Effraction', desc: 'Renforce la sécurité de vos vitres' },
    { icon: Trophy, title: 'Confort Thermique', desc: 'Réduit la chaleur de 80%' },
    { icon: Lock, title: 'Confidentialité', desc: 'Protège votre intimité' },
  ]

  const activeService = categories.find(cat => cat.id === activeCategory)

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-racing-red font-racing font-bold text-sm tracking-wider">NOS SERVICES</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-racing font-bold mt-4 mb-6">
            <span className="gradient-text">VITRAGE POUR TOUS</span>
            <br />
            <span className="text-white">TYPES DE VÉHICULES</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des solutions adaptées à chaque type de véhicule avec une qualité professionnelle garantie
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover-lift ${
                  activeCategory === category.id
                    ? 'bg-racing-red text-white red-glow'
                    : 'glass-effect text-gray-300 hover:bg-white/10'
                }`}
              >
                <Icon className="w-6 h-6" />
                <span>{category.name}</span>
              </button>
            )
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16 animate-fade-in">
          <div className="relative overflow-hidden rounded-2xl group">
            <img
              src={activeService.image}
              alt={activeService.name}
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-gray via-dark-gray/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="inline-block bg-racing-red px-4 py-2 rounded-lg mb-4">
                <span className="font-racing font-bold">{activeService.name}</span>
              </div>
              <p className="text-gray-300">{activeService.description}</p>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-2xl">
            <h3 className="text-2xl font-racing font-bold mb-6 gradient-text">
              Prestations Incluses
            </h3>
            <ul className="space-y-4 mb-8">
              {activeService.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-racing-red/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 bg-racing-red rounded-full" />
                  </div>
                  <span className="text-gray-300 text-lg">{feature}</span>
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-700 pt-6">
              <p className="text-gray-400 mb-2">Tarif</p>
              <p className="text-3xl font-racing font-bold gradient-text mb-6">
                {activeService.price}
              </p>
              <a
                href="#contact"
                className="block w-full bg-racing-red hover:bg-red-700 text-white text-center px-6 py-4 rounded-lg font-bold transition-all duration-300 hover-lift"
              >
                Demander un Devis Gratuit
              </a>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="glass-effect p-6 rounded-xl text-center hover-lift animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-racing-red/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-racing-red" />
                </div>
                <h4 className="font-racing font-bold text-lg mb-2">{benefit.title}</h4>
                <p className="text-gray-400 text-sm">{benefit.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
