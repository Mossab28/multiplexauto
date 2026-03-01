import React, { useState } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote, BadgeCheck } from 'lucide-react'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Jeremy Vivig',
      rating: 5,
      text: "J'ai découvert cet atelier par le biais de Google et grâce à de très bons avis et bien cela se confirme la teinte des vitres de ma voiture est impeccable, le professionnalisme et la gentillesse du patron lui valent bien ces 5 étoiles. Merci beaucoup",
      verified: true,
    },
    {
      name: 'Lucie Guillot',
      rating: 5,
      text: "Très satisfaits du service. Nous voulions teindre les vitres et notre voiture est spécifique avec un défi technique pour le toit, défi relevé haut la main. Personne de confiance, très doué dans son métier, sérieux, et avec un contact agréable. Je recommande à 100% !",
      verified: true,
    },
    {
      name: 'david lobgeois',
      rating: 5,
      text: "Très pro service de qualité rien n'a redire",
      verified: true,
    },
    {
      name: 'Catherine Bernet',
      rating: 5,
      text: "Très professionnel\nBon rendu",
      verified: true,
    },
    {
      name: 'Youyou You',
      rating: 5,
      text: "Super au top rien à dire très à l'écoute et donne beaucoup de conseil avant et après travaux, je recommande fortement",
      verified: true,
    },
    {
      name: 'Syd fr',
      rating: 5,
      text: "Service et suivi au top, gérant hyper sympa",
      verified: true,
    },
    {
      name: 'Laurie CLEM',
      rating: 5,
      text: "Je suis satisfaite du résultat.\nGérant professionnel et à l'écoute.\nTravail soigné et propre.\nJe recommande 👍🏾",
      verified: true,
    },
    {
      name: 'Himeur Samir',
      rating: 5,
      text: "Très bon établissement patron très sympa et arrangeant et le rapport qualité-prix exceptionnel",
      verified: true,
    },
    {
      name: 'Carole Gresle',
      rating: 5,
      text: "très professionnel.\nDe très bons conseils.\nIl vous dit la teinture exacte qui vous faut pour le vitrage de votre voiture.\nprix correct et bon travail",
      verified: true,
    },
    {
      name: 'Sylvia Bertrand',
      rating: 5,
      text: "Sur teintage sur Audi A5 Très professionnel, très sympathique. Résultat très satisfaisant Je recommande à 100%.",
      verified: true,
    },
    {
      name: 'christopher vaz braz',
      rating: 5,
      text: "Très professionnel, résultat impeccable",
      verified: true,
    },
    {
      name: 'thomas mougenot',
      rating: 5,
      text: "Personne très professionnel avec un prix très abordable pour notre BMW série 5\nMême avec une batterie qui a fait des siennes , ce professionnel a tout fait pour la faire redémarrer rapidement\nJe recommende !",
      verified: true,
    },
    {
      name: 'Franck Gaillard',
      rating: 5,
      text: "Travail soigné impeccable sur Trafic minibus, prix raisonnable et personne vraiment sympa....",
      verified: true,
    },
    {
      name: 'David Liedot',
      rating: 5,
      text: "Superbe accueil, travail parfait et soigné.\nLe film est de qualité supérieur",
      verified: true,
    },
    {
      name: 'Frédéric Haby',
      rating: 5,
      text: "Accueil très agréable\nExcellent conseil\nTravail impeccable",
      verified: true,
    },
    {
      name: 'Micka VINCENT',
      rating: 5,
      text: "très professionnel et à l'écoute\ntravail propre et soigné\nprix très attractif\nje recommande, merci",
      verified: true,
    },
    {
      name: 'Nassi minto Aziz',
      rating: 5,
      text: "très satisfait de mes vitre teinté, très pro propre et très sympatrique je recommande les yeux fermé",
      verified: true,
    },
    {
      name: 'Poisson Sébastien',
      rating: 5,
      text: "J'ai déjà appelé\nPlusieurs personnes qui proposent les mêmes services pour comparer les prix et les disponibilités j'étais pourtant habitué à aller chez un concurrent ayant l'habitude de faire mais véhicule en glass teintée et la vraiment surpris déjà un prix très intéressant une disponibilité  au top pourtant c'était pour faire une lunette arrière de Clio 2 pas se qu'il ya de plus facile le rendu et parfait avec un film de qualité vraiment je conseille vivement c'est service je pense pas que vous trouverez mieux ailleurs et je parle en connaissance aillant été fidèle plusieurs années à un concurrent qui c'est gavés pour un résultat des fois descevent un grand merci j'ai trouvé mon nouveau garage attitré !!!! Encore un grand merci et a bientôt",
      verified: true,
    },
    {
      name: 'Anthnoy Taquet',
      rating: 5,
      text: "Je suis très satisfait de mes vitres teintées, très pro, . Le gérant est arrangeant et sympa, je le recommande vivement.",
      verified: true,
    },
    {
      name: 'Anais Fourré',
      rating: 5,
      text: "Je suis très satisfaite des vitres teintées, très sympathique et arrangeant. Total confiance. Je recommande. ☝️😊",
      verified: true,
    },
    {
      name: 'rrfefre frrefrfre',
      rating: 5,
      text: "Gérant très sympa et professionnel. Vitre teinté effectué parfaitement en quelques minutes, je recommande.",
      verified: true,
    },
    {
      name: 'Stephane devienne',
      rating: 5,
      text: "Bonjour a tous\nDepuis mes vitres teintées mon audi a pris un charme fou , a recommander , travail soigné\nRien a dire nikel 👍",
      verified: true,
    },
    {
      name: 'Miguel Borges',
      rating: 5,
      text: "Travail soigné personne sympathique  et rdv rapide à conseillé sans probleme👍",
      verified: true,
    },
    {
      name: 'patmax pat-',
      rating: 5,
      text: "Passage le 31 Mai au matin, Très bon travail, consciencieux, n'a pas hésité a refaire une vitre après un défaut.",
      verified: true,
    },
    {
      name: 'Flo Rotary',
      rating: 5,
      text: "Super accueil. Super service. Merci encore. Au top.",
      verified: true,
    },
    {
      name: 'Florian Thavot',
      rating: 5,
      text: "Tres bon acceuil et travail impeccable. Rien à dire",
      verified: true,
    },
    {
      name: 'sarah huart',
      rating: 5,
      text: "Un super accueil. Rendez vous rapide. Allez y sans hésiter.",
      verified: true,
    },
    {
      name: 'zouhir boudjerada',
      rating: 5,
      text: "Tres bon service, professionnel et de tres bons conseils. Je recommande vivement.",
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
    <section id="testimonials" className="py-12 sm:py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16 animate-slide-up">
          <span className="text-silver-accent font-racing font-bold text-xs sm:text-sm tracking-wider">TÉMOIGNAGES</span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-racing font-bold mt-3 sm:mt-4 mb-4 sm:mb-6">
            <span className="gradient-text">NOS CLIENTS</span>
            <br />
            <span className="text-white">Nous Font Confiance</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-lg max-w-2xl mx-auto mb-3 px-2">
            Plus de 300 clients satisfaits et des dizaines d'avis 5 étoiles sur Google
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
            <BadgeCheck className="w-4 h-4 text-blue-500 fill-blue-500" />
            <span>Avis Google vérifiés</span>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative glass-effect p-5 sm:p-8 md:p-12 rounded-2xl animate-fade-in">
            <Quote className="absolute top-4 left-4 sm:top-8 sm:left-8 w-8 h-8 sm:w-12 sm:h-12 text-silver-accent/20" />
            
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 text-sm sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 text-center italic">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <h4 className="font-racing font-bold text-xl">
                    {testimonials[currentIndex].name}
                  </h4>
                  {testimonials[currentIndex].verified && (
                    <BadgeCheck className="w-5 h-5 text-blue-500 fill-blue-500" title="Avis vérifié Google" />
                  )}
                </div>
                <p className="text-silver-accent font-semibold text-sm mt-1">
                  Client vérifié Google
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 mt-6 sm:mt-8">
              <button
                onClick={prevTestimonial}
                className="bg-silver-accent/20 hover:bg-silver-accent text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover-lift flex-shrink-0"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
              
              <span className="text-gray-400 font-racing text-sm whitespace-nowrap">
                {currentIndex + 1} / {testimonials.length}
              </span>

              <button
                onClick={nextTestimonial}
                className="bg-silver-accent/20 hover:bg-silver-accent text-white w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 hover-lift flex-shrink-0"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-12">
            <div className="glass-effect p-3 sm:p-6 rounded-xl text-center hover-lift">
              <div className="text-2xl sm:text-4xl font-racing font-bold gradient-text mb-1 sm:mb-2">4.8/5</div>
              <p className="text-gray-400 text-xs sm:text-base">Note Google</p>
            </div>
            <div className="glass-effect p-3 sm:p-6 rounded-xl text-center hover-lift">
              <div className="text-2xl sm:text-4xl font-racing font-bold gradient-text mb-1 sm:mb-2">39</div>
              <p className="text-gray-400 text-xs sm:text-base">Avis Clients</p>
            </div>
            <div className="glass-effect p-3 sm:p-6 rounded-xl text-center hover-lift">
              <div className="text-2xl sm:text-4xl font-racing font-bold gradient-text mb-1 sm:mb-2">100%</div>
              <p className="text-gray-400 text-xs sm:text-base">Satisfaction</p>
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
