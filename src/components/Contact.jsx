import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, Instagram, Globe, Facebook, MessageCircle } from 'lucide-react'

const Contact = () => {
  const whatsappUrl = 'https://wa.me/33663207808'
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
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <span className="text-silver-accent font-racing font-bold text-xs sm:text-sm tracking-wider">CONTACT</span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-racing font-bold mt-3 sm:mt-4 mb-4 sm:mb-6 leading-tight">
            <span className="gradient-text">PRENEZ RENDEZ-VOUS</span>
            <br />
            <span className="text-white">Dès Maintenant</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto px-4">
            Contactez-nous pour un devis gratuit et personnalisé
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div className="animate-slide-right">
            <div className="glass-effect p-6 sm:p-8 rounded-2xl mb-6">
              <h3 className="text-xl sm:text-2xl font-racing font-bold mb-4 sm:mb-6 gradient-text">
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
              <div className="space-y-3">
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
                <a
                  href="https://www.facebook.com/PERFECTCarTROYES/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift"
                >
                  <Facebook className="w-6 h-6" />
                  <div>
                    <p className="font-bold">PERFECT'Car TROYES</p>
                    <p className="text-sm opacity-90">Suivez notre actualité</p>
                  </div>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift"
                >
                  <MessageCircle className="w-6 h-6" />
                  <div>
                    <p className="font-bold">WhatsApp</p>
                    <p className="text-sm opacity-90">06 63 20 78 08</p>
                  </div>
                </a>
                <a
                  href="https://www.google.com/maps/place/PERFECT%E2%80%99+Car/@48.3169346,4.0388392,17z/data=!3m1!4b1!4m6!3m5!1s0x47ee998c47e893ad:0xf21636705f5ec241!8m2!3d48.3169346!4d4.0414141!16s%2Fg%2F11gzm0c61f?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-3 bg-white hover:bg-gray-50 text-gray-900 px-6 py-4 rounded-lg font-semibold transition-all duration-300 hover-lift border border-gray-200"
                >
                  <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                  <div>
                    <p className="font-bold">Google Maps</p>
                    <p className="text-sm opacity-90">Voir notre localisation</p>
                  </div>
                </a>
              </div>
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
