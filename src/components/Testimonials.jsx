import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Jeremy Vivig',
      vehicle: 'Client vérifié',
      rating: 5,
      text: "J'ai découvert cet atelier par le biais de Google et grâce à de très bons avis et bien cela se confirme la teinte des vitres de ma voiture est impeccable, le professionnalisme et la gentillesse du patron lui valent bien ces 5 étoiles. Merci beaucoup",
      date: 'Il y a 1 an',
      verified: true,
    },
    {
      name: 'Marie Auriac',
      vehicle: 'Client vérifié',
      rating: 5,
      text: "Ayant acheté un véhicule dans ce garage qui se trouve à plus de 700km de chez moi, le garagiste n'a pas hésité à me descendre la voiture au 3/4 du chemin. La transaction s'est bien déroulée, la personne est très professionnelle et a su gagner ma confiance. Merci encore pour votre gentillesse et je n'hésiterais pas à vous recommander.",
      date: 'Il y a 1 an',
      verified: true,
    },
    {
      name: 'Lucie Guillot',
      vehicle: 'Client vérifié',
      rating: 5,
      text: "Très satisfaits du service. Nous voulions teindre les vitres et notre voiture est spécifique avec un défi technique pour le toit, défi relevé haut la main. Personne de confiance, très doué dans son métier, sérieux, et avec un contact agréable. Je recommande à 100% !",
      date: 'Il y a 3 ans',
      verified: true,
    },
    {
      name: 'Micka VINCENT',
      vehicle: 'Client vérifié',
      rating: 5,
      text: "Très professionnel et à l'écoute, travail propre et soigné, prix très attractif. Je recommande, merci",
      date: 'Il y a 5 ans',
      verified: true,
    },
    {
      name: 'Carole Gresle',
      vehicle: 'Client vérifié',
      rating: 5,
      text: "Très professionnel. De très bons conseils. Il vous dit la teinture exacte qui vous faut pour le vitrage de votre voiture. Prix correct et bon travail",
      date: 'Il y a 4 ans',
      verified: true,
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-silver-accent font-racing font-bold text-sm tracking-wider">TÉMOIGNAGES</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-racing font-bold mt-4 mb-6">
            <span className="gradient-text">ILS NOUS FONT</span>
            <br />
            <span className="text-white">Confiance</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-3">
            Découvrez les avis de nos clients satisfaits
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <CheckCircle className="w-4 h-4 text-blue-500" />
            <span>Avis Google vérifiés</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative glass-effect p-8 sm:p-12 rounded-2xl animate-fade-in">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-silver-accent/20" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 text-center italic">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <h4 className="font-racing font-bold text-xl">
                    {testimonials[currentIndex].name}
                  </h4>
                  {testimonials[currentIndex].verified && (
                    <CheckCircle className="w-5 h-5 text-blue-500 fill-blue-500" title="Avis vérifié Google" />
                  )}
                </div>
                <p className="text-silver-accent font-semibold mb-1">
                  {testimonials[currentIndex].vehicle}
                </p>
                <p className="text-gray-500 text-sm">
                  {testimonials[currentIndex].date}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="bg-silver-accent/20 hover:bg-silver-accent text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover-lift"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-silver-accent w-8' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="bg-silver-accent/20 hover:bg-silver-accent text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover-lift"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="glass-effect p-6 rounded-xl text-center hover-lift">
              <div className="text-4xl font-racing font-bold gradient-text mb-2">4.8/5</div>
              <p className="text-gray-400">Note Google</p>
            </div>
            <div className="glass-effect p-6 rounded-xl text-center hover-lift">
              <div className="text-4xl font-racing font-bold gradient-text mb-2">39</div>
              <p className="text-gray-400">Avis Clients</p>
            </div>
            <div className="glass-effect p-6 rounded-xl text-center hover-lift">
              <div className="text-4xl font-racing font-bold gradient-text mb-2">100%</div>
              <p className="text-gray-400">Satisfaction</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/search?q=perfect+car+troyes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-silver-accent hover:text-red-600 font-semibold transition-colors"
            >
              Voir tous les avis Google →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
