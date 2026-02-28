import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: "Quelle est la durée de vie des vitres teintées ?",
      answer: "Nos films de qualité professionnelle ont une durée de vie de 10 à 15 ans minimum, voire plus selon l'entretien. Nous offrons une garantie jusqu'à la cession du véhicule sur toutes nos installations."
    },
    {
      question: "Les vitres teintées sont-elles légales en France ?",
      answer: "Oui, à condition de respecter la réglementation : les vitres avant (conducteur et passager) doivent laisser passer au minimum 70% de la lumière. Les vitres arrière et la lunette arrière peuvent être teintées sans restriction. Nous vous conseillons sur les teintes conformes à la loi."
    },
    {
      question: "Combien de temps dure la pose ?",
      answer: "La pose complète prend généralement entre 2 et 4 heures selon le type de véhicule et le nombre de vitres à teinter. Nous travaillons avec précision pour garantir un résultat parfait sans bulles ni plis."
    },
    {
      question: "Puis-je laver ma voiture après la pose ?",
      answer: "Nous recommandons d'attendre 3 à 5 jours avant de laver votre véhicule, le temps que le film adhère parfaitement. Évitez les jets haute pression directs sur les vitres pendant les premières semaines."
    },
    {
      question: "Quels sont les avantages des vitres teintées ?",
      answer: "Les vitres teintées offrent de nombreux avantages : réduction de la chaleur jusqu'à 60%, protection UV à 99%, intimité et discrétion, réduction de l'éblouissement, sécurité renforcée (le film retient les éclats en cas de bris), et valorisation du véhicule."
    },
    {
      question: "Quel est le prix pour teinter mon véhicule ?",
      answer: "Le prix varie selon le type de véhicule et le nombre de vitres à teinter. Par exemple : à partir de 120€ pour les vitres avant, 160€ à 290€ pour le 3/4 arrière, et 260€ à 390€ pour le véhicule complet. Utilisez notre simulateur en ligne pour obtenir un devis personnalisé."
    },
    {
      question: "Proposez-vous différentes teintes ?",
      answer: "Oui, nous proposons plusieurs niveaux de teinte : 5%, 15%, 20%, 30%, 35%, 50%, 65%, 80% et 85% de transmission lumineuse. Nous vous conseillons la teinte adaptée à vos besoins et conforme à la réglementation."
    },
    {
      question: "La garantie couvre-t-elle quoi exactement ?",
      answer: "Notre garantie jusqu'à la cession du véhicule couvre les défauts de fabrication du film (décollement, bulles, décoloration) ainsi que les défauts de pose. Elle ne couvre pas les dommages causés par un choc, une rayure ou un mauvais entretien."
    },
    {
      question: "Puis-je retirer les vitres teintées plus tard ?",
      answer: "Oui, les films peuvent être retirés sans endommager les vitres. Cependant, nous recommandons de faire appel à un professionnel pour éviter tout risque de rayure ou de résidu de colle."
    },
    {
      question: "Travaillez-vous sur tous types de véhicules ?",
      answer: "Oui, nous intervenons sur tous types de véhicules : citadines, berlines, SUV, breaks, monospaces, minibus et utilitaires. Chaque véhicule bénéficie d'une pose sur-mesure adaptée à ses spécificités."
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-silver-accent font-racing font-bold text-sm tracking-wider">FAQ</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-racing font-bold mt-4 mb-6">
            <span className="gradient-text">QUESTIONS</span>
            <br />
            <span className="text-white">Fréquemment Posées</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur nos vitres teintées
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-effect rounded-xl overflow-hidden animate-slide-up hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-white/5"
              >
                <h3 className="font-racing font-bold text-lg text-white pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-silver-accent flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-silver-accent flex-shrink-0" />
                )}
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Vous avez d'autres questions ?
          </p>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-silver-accent to-red-600 text-white px-8 py-3 rounded-lg font-racing font-bold hover:shadow-lg hover:shadow-red-600/50 transition-all duration-300 hover-lift"
          >
            Contactez-nous
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQ
