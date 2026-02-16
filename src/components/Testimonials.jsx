import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Jean-Pierre M.',
      vehicle: 'BMW Série 3',
      rating: 5,
      text: "Service impeccable ! L'équipe est professionnelle et le résultat est parfait. Mes vitres teintées donnent un look incroyable à ma voiture tout en protégeant de la chaleur.",
      date: 'Il y a 2 semaines',
    },
    {
      name: 'Sophie L.',
      vehicle: 'Peugeot 208',
      rating: 5,
      text: "Très satisfaite de la prestation. Le travail est soigné, les délais respectés et le prix très correct. Je recommande vivement Multiplex Auto !",
      date: 'Il y a 1 mois',
    },
    {
      name: 'Marc D.',
      vehicle: 'Audi A4',
      rating: 5,
      text: "Excellent rapport qualité-prix. L'installation a été rapide et le rendu est top. La différence de température dans l'habitacle est vraiment notable.",
      date: 'Il y a 3 semaines',
    },
    {
      name: 'Amélie R.',
      vehicle: 'Mercedes Classe C',
      rating: 5,
      text: "Je suis ravie du résultat ! L'équipe a pris le temps de bien m'expliquer les différentes options. Le film est de très bonne qualité et l'installation est parfaite.",
      date: 'Il y a 1 semaine',
    },
    {
      name: 'Thomas B.',
      vehicle: 'Porsche Cayenne',
      rating: 5,
      text: "Professionnel et efficace. J'ai fait teinter toutes les vitres de mon SUV et le résultat dépasse mes attentes. Très bon accueil et conseils avisés.",
      date: 'Il y a 2 mois',
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
          <span className="text-racing-red font-racing font-bold text-sm tracking-wider">TÉMOIGNAGES</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-racing font-bold mt-4 mb-6">
            <span className="gradient-text">ILS NOUS FONT</span>
            <br />
            <span className="text-white">Confiance</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez les avis de nos clients satisfaits
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative glass-effect p-8 sm:p-12 rounded-2xl animate-fade-in">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-racing-red/20" />
            
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
                <h4 className="font-racing font-bold text-xl mb-1">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-racing-red font-semibold mb-1">
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
                className="bg-racing-red/20 hover:bg-racing-red text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover-lift"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'bg-racing-red w-8' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="bg-racing-red/20 hover:bg-racing-red text-white w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 hover-lift"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="glass-effect p-6 rounded-xl text-center hover-lift">
              <div className="text-4xl font-racing font-bold gradient-text mb-2">4.9/5</div>
              <p className="text-gray-400">Note Moyenne</p>
            </div>
            <div className="glass-effect p-6 rounded-xl text-center hover-lift">
              <div className="text-4xl font-racing font-bold gradient-text mb-2">500+</div>
              <p className="text-gray-400">Avis Clients</p>
            </div>
            <div className="glass-effect p-6 rounded-xl text-center hover-lift">
              <div className="text-4xl font-racing font-bold gradient-text mb-2">98%</div>
              <p className="text-gray-400">Recommandations</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a
              href="https://www.google.com/search?q=perfect+car+troyes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-racing-red hover:text-red-600 font-semibold transition-colors"
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
