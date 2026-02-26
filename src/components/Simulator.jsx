import React, { useState } from 'react'
import { ChevronRight, ChevronLeft, Check, Car, Truck, Bus } from 'lucide-react'

const Simulator = () => {
  const [step, setStep] = useState(1)
  const [showContactForm, setShowContactForm] = useState(false)
  const [formData, setFormData] = useState({
    vehicleType: '',
    windowType: ''
  })
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const vehicleTypes = [
    { id: '3portes', name: '3 Portes', icon: Car, description: 'Citadines' },
    { id: '5portes', name: '5 Portes', icon: Car, description: 'Berlines et compactes' },
    { id: 'suv', name: 'SUV', icon: Car, description: 'SUV et 4x4' },
    { id: 'break', name: 'Break / Monospace', icon: Truck, description: 'Break et monospace' },
    { id: 'minibus', name: 'Minibus', icon: Bus, description: 'Minibus' },
    { id: 'utilitaire', name: 'Utilitaire', icon: Truck, description: 'Sur devis personnalisé' }
  ]

  const windowTypes = [
    { id: 'avant', name: 'Vitres avant uniquement', description: '2 vitres latérales avant' },
    { id: '3/4', name: '3/4 (Vitres arrière)', description: 'Vitres latérales arrière + lunette' },
    { id: 'complet', name: 'Véhicule complet', description: 'Toutes les vitres' }
  ]

  const priceGrid = {
    '3portes': { 'avant': 120, '3/4': 160, 'complet': 260 },
    '5portes': { 'avant': 120, '3/4': 190, 'complet': 290 },
    'suv': { 'avant': 120, '3/4': 220, 'complet': 320 },
    'break': { 'avant': 120, '3/4': 240, 'complet': 340 },
    'minibus': { 'avant': 120, '3/4': 290, 'complet': 390 },
    'utilitaire': { 'avant': 0, '3/4': 0, 'complet': 0 }
  }

  const calculatePrice = () => {
    if (formData.vehicleType === 'utilitaire') {
      return 'Sur devis'
    }
    
    return priceGrid[formData.vehicleType]?.[formData.windowType] || 0
  }

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3))
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

  const selectVehicle = (id) => {
    setFormData({ ...formData, vehicleType: id })
    setTimeout(nextStep, 300)
  }

  const selectWindow = (id) => {
    setFormData({ ...formData, windowType: id })
    setTimeout(nextStep, 300)
  }

  return (
    <div className="min-h-screen bg-matte-black pt-36 sm:pt-40 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-racing font-bold mb-4">
              <span className="gradient-text">SIMULATEUR DE DEVIS</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Consultez le prix de vitres teintées pour votre voiture
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-2">
              {[1, 2, 3].map((s) => (
                <div
                  key={s}
                  className={`w-full h-2 mx-1 rounded-full transition-all duration-500 ${
                    s <= step ? 'bg-silver-accent' : 'bg-gray-700'
                  }`}
                />
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-2">
              Étape {step} sur 3
            </p>
          </div>

          {/* Step Content */}
          <div className="glass-effect p-8 rounded-2xl min-h-[400px] animate-fade-in">
            {/* Step 1: Vehicle Type */}
            {step === 1 && (
              <div className="animate-slide-up">
                <h2 className="text-2xl font-racing font-bold text-white mb-6 text-center">
                  Quel type de véhicule ?
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {vehicleTypes.map((vehicle) => {
                    const Icon = vehicle.icon
                    return (
                      <button
                        key={vehicle.id}
                        onClick={() => selectVehicle(vehicle.id)}
                        className={`p-6 rounded-xl border-2 transition-all duration-300 hover-lift ${
                          formData.vehicleType === vehicle.id
                            ? 'border-silver-accent bg-silver-accent/10'
                            : 'border-gray-700 hover:border-silver-accent/50'
                        }`}
                      >
                        <Icon className="w-12 h-12 text-silver-accent mx-auto mb-3" />
                        <h3 className="font-racing font-bold text-white mb-2">{vehicle.name}</h3>
                        <p className="text-gray-400 text-sm">{vehicle.description}</p>
                      </button>
                    )
                  })}
                </div>
                {step > 1 && (
                  <div className="mt-6">
                    <button
                      onClick={prevStep}
                      className="flex items-center space-x-2 text-gray-400 hover:text-silver-accent transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      <span>Retour</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Window Type */}
            {step === 2 && (
              <div className="animate-slide-up">
                <h2 className="text-2xl font-racing font-bold text-white mb-6 text-center">
                  Quelles vitres souhaitez-vous teinter ?
                </h2>
                <div className="space-y-4">
                  {windowTypes.map((window) => (
                    <button
                      key={window.id}
                      onClick={() => selectWindow(window.id)}
                      className={`w-full p-6 rounded-xl border-2 transition-all duration-300 hover-lift text-left ${
                        formData.windowType === window.id
                          ? 'border-silver-accent bg-silver-accent/10'
                          : 'border-gray-700 hover:border-silver-accent/50'
                      }`}
                    >
                      <div className="flex justify-between items-center w-full">
                        <div>
                          <h3 className="font-racing font-bold text-white mb-1">{window.name}</h3>
                          <p className="text-gray-400 text-sm">{window.description}</p>
                        </div>
                        {formData.vehicleType !== 'utilitaire' && (
                          <p className="text-silver-accent font-bold text-2xl">
                            {priceGrid[formData.vehicleType]?.[window.id]}€
                          </p>
                        )}
                        {formData.vehicleType === 'utilitaire' && (
                          <p className="text-silver-accent font-bold text-lg">Sur devis</p>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
                {step > 1 && (
                  <div className="mt-6">
                    <button
                      onClick={prevStep}
                      className="flex items-center space-x-2 text-gray-400 hover:text-silver-accent transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      <span>Retour</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Result */}
            {step === 3 && (
              <div className="animate-slide-up text-center">
                <div className="mb-5">
                  <div className="w-14 h-14 bg-silver-accent/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Check className="w-7 h-7 text-silver-accent" />
                  </div>
                  <h2 className="text-2xl font-racing font-bold text-white mb-2">
                    Votre devis estimatif
                  </h2>
                  <p className="text-gray-400 text-sm mb-4">
                    Voici une estimation pour votre projet
                  </p>
                </div>

                <div className="bg-white/5 rounded-xl p-5 mb-5">
                  <div className="space-y-2.5 mb-4">
                    <div className="flex justify-between items-center py-2 border-b border-gray-700 text-sm">
                      <span className="text-gray-300">Type de véhicule</span>
                      <span className="text-white font-semibold">
                        {vehicleTypes.find(v => v.id === formData.vehicleType)?.name}
                      </span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-700 text-sm">
                      <span className="text-gray-300">Vitres</span>
                      <span className="text-white font-semibold">
                        {windowTypes.find(w => w.id === formData.windowType)?.name}
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t-2 border-silver-accent">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-racing font-bold text-white">PRIX TOTAL</span>
                      <span className="text-3xl font-racing font-bold gradient-text">
                        {typeof calculatePrice() === 'number' ? `${calculatePrice()}€` : calculatePrice()}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">
                      * Prix final
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => {
                      setShowContactForm(true)
                      setTimeout(() => {
                        const formElement = document.querySelector('.glass-effect.p-8.rounded-2xl.animate-slide-up')
                        if (formElement) {
                          formElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
                        }
                      }, 100)
                    }}
                    className="flex-1 bg-silver-accent hover:bg-white text-black px-6 py-3 rounded-lg font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                  >
                    Demander un devis personnalisé{(formData.vehicleType === 'break' || formData.vehicleType === 'minibus') && ' *'}
                  </button>
                  <button
                    onClick={() => {
                      setStep(1)
                      setFormData({ vehicleType: '', windowType: '' })
                    }}
                    className="flex-1 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 border border-white/20"
                  >
                    Recommencer
                  </button>
                </div>
                {(formData.vehicleType === 'break' || formData.vehicleType === 'minibus') && (
                  <p className="text-yellow-500 text-xs mt-3 text-center">
                    * Pour les monospaces et minibus, merci de nous contacter pour confirmer le tarif exact en fonction de votre modèle.
                  </p>
                )}
                {step > 1 && (
                  <div className="mt-6">
                    <button
                      onClick={prevStep}
                      className="flex items-center space-x-2 text-gray-400 hover:text-silver-accent transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                      <span>Retour</span>
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Contact Form */}
            {step === 3 && showContactForm && (
              <div className="mt-8 glass-effect p-8 rounded-2xl animate-slide-up">
                <h3 className="text-2xl font-racing font-bold text-white mb-6 text-center">
                  Demande de devis personnalisé
                </h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Nom complet *</label>
                    <input
                      type="text"
                      value={contactData.name}
                      onChange={(e) => setContactData({ ...contactData, name: e.target.value })}
                      className="w-full bg-dark-gray border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-silver-accent transition-colors"
                      placeholder="Jean Dupont"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email *</label>
                    <input
                      type="email"
                      value={contactData.email}
                      onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
                      className="w-full bg-dark-gray border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-silver-accent transition-colors"
                      placeholder="jean.dupont@email.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Téléphone *</label>
                    <input
                      type="tel"
                      value={contactData.phone}
                      onChange={(e) => setContactData({ ...contactData, phone: e.target.value })}
                      className="w-full bg-dark-gray border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-silver-accent transition-colors"
                      placeholder="06 12 34 56 78"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Message (facultatif)</label>
                    <textarea
                      value={contactData.message}
                      onChange={(e) => setContactData({ ...contactData, message: e.target.value })}
                      rows="4"
                      className="w-full bg-dark-gray border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-silver-accent transition-colors resize-none"
                      placeholder="Précisions sur votre projet..."
                    />
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      type="button"
                      onClick={() => {
                        alert(`Demande de devis envoyée !\n\nNom: ${contactData.name}\nEmail: ${contactData.email}\nTéléphone: ${contactData.phone}\nPrix estimé: ${calculatePrice()}€\n\nNous vous contacterons rapidement.`)
                        setShowContactForm(false)
                        setContactData({ name: '', email: '', phone: '', message: '' })
                      }}
                      className="flex-1 bg-silver-accent hover:bg-white text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      Envoyer la demande
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowContactForm(false)}
                      className="flex-1 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 border border-white/20"
                    >
                      Annuler
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  )
}

export default Simulator
