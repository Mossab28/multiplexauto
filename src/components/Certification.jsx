import React from 'react'
import { CheckCircle, Shield, FileCheck, Award } from 'lucide-react'

const Certification = () => {
  const certifications = [
    {
      icon: CheckCircle,
      title: '100% Homologué',
      description: 'Nos films sont conformes aux normes européennes et françaises en vigueur'
    },
    {
      icon: Shield,
      title: 'Contrôle Technique',
      description: 'Garantie de passage au contrôle technique sans aucun problème'
    },
    {
      icon: FileCheck,
      title: 'Totalement Légal',
      description: 'Installation respectant la réglementation avec certificat de conformité'
    },
    {
      icon: Award,
      title: 'Certification Qualité',
      description: 'Films premium certifiés avec garantie constructeur'
    }
  ]

  return (
    <section className="py-10 sm:py-16 relative bg-silver-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 animate-slide-up">
          <span className="text-silver-accent font-racing font-bold text-xs sm:text-sm tracking-wider">CONFORMITÉ & LÉGALITÉ</span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-racing font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
            <span className="gradient-text">100% HOMOLOGUÉ</span>
            <br />
            <span className="text-white">& CONFORME</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-3xl mx-auto px-2">
            Tous nos films teintés sont homologués et conformes à la réglementation française. 
            Vous passez le contrôle technique en toute sérénité.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <div
                key={index}
                className="glass-effect p-4 sm:p-6 rounded-xl text-center hover-lift animate-slide-up border border-silver-accent/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-silver-accent/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-silver-accent" />
                </div>
                <h3 className="font-racing font-bold text-sm sm:text-lg mb-2 sm:mb-3 text-silver-accent">{cert.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{cert.description}</p>
              </div>
            )
          })}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-block glass-effect px-4 sm:px-8 py-3 sm:py-4 rounded-lg border border-silver-accent/20">
            <p className="text-gray-300 text-xs sm:text-sm">
              <span className="text-silver-accent font-bold">Certificat de conformité</span> fourni avec chaque installation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Certification
