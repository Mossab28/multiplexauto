import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, Instagram, Globe } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicle: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Merci pour votre demande ! Nous vous contacterons rapidement.')
    setFormData({ name: '', email: '', phone: '', vehicle: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-silver-accent font-racing font-bold text-sm tracking-wider">CONTACT</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-racing font-bold mt-4 mb-6">
            <span className="gradient-text">PRENEZ RENDEZ-VOUS</span>
            <br />
            <span className="text-white">Dès Maintenant</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Contactez-nous pour un devis gratuit et personnalisé
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="animate-slide-right">
            <div className="glass-effect p-8 rounded-2xl mb-6">
              <h3 className="text-2xl font-racing font-bold mb-6 gradient-text">
                Informations de Contact
              </h3>
              
              <div className="space-y-6">
                <a href="tel:0663207808" className="flex items-start space-x-4 group hover-lift p-4 rounded-lg hover:bg-white/5 transition-all">
                  <div className="w-12 h-12 bg-silver-accent/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-silver-accent transition-colors">
                    <Phone className="w-6 h-6 text-silver-accent group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Téléphone</p>
                    <p className="text-gray-400">06 63 20 78 08</p>
                  </div>
                </a>

                <div className="flex items-start space-x-4 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-silver-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-silver-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Adresse</p>
                    <p className="text-gray-400">2 rue Archimède</p>
                    <p className="text-gray-400">10600 La Chapelle Saint-Luc</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-silver-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-silver-accent" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Horaires</p>
                    <p className="text-gray-400">Lun - Ven: 9h00 - 18h00</p>
                    <p className="text-gray-400">Sam: 9h00 - 12h00</p>
                  </div>
                </div>

                <a 
                  href="https://multiplexeauto.fr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-start space-x-4 group hover-lift p-4 rounded-lg hover:bg-white/5 transition-all"
                >
                  <div className="w-12 h-12 bg-silver-accent/20 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-silver-accent transition-colors">
                    <Globe className="w-6 h-6 text-silver-accent group-hover:text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-white mb-1">Site Web</p>
                    <p className="text-gray-400">multiplexeauto.fr</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="glass-effect p-8 rounded-2xl">
              <h3 className="text-xl font-racing font-bold mb-4">Suivez-nous</h3>
              <a
                href="https://www.instagram.com/perfect_car_troyes/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift"
              >
                <Instagram className="w-6 h-6" />
                <div>
                  <p className="font-bold">@perfect_car_troyes</p>
                  <p className="text-sm opacity-90">5006 followers • 103 publications</p>
                </div>
              </a>
            </div>
          </div>

          <div className="animate-slide-up">
            <form onSubmit={handleSubmit} className="glass-effect p-8 rounded-2xl">
              <h3 className="text-2xl font-racing font-bold mb-6 gradient-text">
                Demande de Devis
              </h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                    Nom Complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-gray border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-silver-accent transition-colors"
                    placeholder="Jean Dupont"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-gray border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-silver-accent transition-colors"
                    placeholder="jean.dupont@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark-gray border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-silver-accent transition-colors"
                    placeholder="06 12 34 56 78"
                  />
                </div>

                <div>
                  <label htmlFor="vehicle" className="block text-sm font-semibold text-gray-300 mb-2">
                    Véhicule
                  </label>
                  <input
                    type="text"
                    id="vehicle"
                    name="vehicle"
                    value={formData.vehicle}
                    onChange={handleChange}
                    className="w-full bg-dark-gray border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-silver-accent transition-colors"
                    placeholder="Marque et modèle"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full bg-dark-gray border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-silver-accent transition-colors resize-none"
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-silver-accent hover:bg-white active:bg-gray-400 text-black px-6 py-4 rounded-lg font-bold text-lg transition-all duration-300 hover-lift flex items-center justify-center space-x-2 shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  <span>Devis Gratuit</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 rounded-2xl overflow-hidden glass-effect p-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2660.5!2d4.0833!3d48.3167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDE5JzAwLjEiTiA0wrAwNScwMC4wIkU!5e0!3m2!1sfr!2sfr!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="rounded-xl"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
