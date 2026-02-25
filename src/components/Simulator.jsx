import React, { useState } from 'react'
import { ChevronRight, ChevronLeft, Check, Car, Shield, Zap, Users } from 'lucide-react'

const Simulator = () => {
  const [step, setStep] = useState(1)
  const [showContactForm, setShowContactForm] = useState(false)
  const [formData, setFormData] = useState({
    vehicleType: '',
    windowType: '',
    tintLevel: '',
    extras: []
  })
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const vehicleTypes = [
    { id: '3portes', name: '3 Portes', icon: Car, basePrice: 150, description: 'Citadines et petits véhicules' },
    { id: '5portes', name: '5 Portes', icon: Shield, basePrice: 200, description: 'Berlines et compactes' },
    { id: 'break', name: 'Break / SUV / Monospace', icon: Zap, basePrice: 250, description: 'Véhicules familiaux' },
    { id: 'minibus', name: 'Minibus et Utilitaire', icon: Users, basePrice: 350, description: 'Véhicules professionnels' }
  ]

  const windowTypes = [
    { id: 'avant', name: 'Vitres avant uniquement', price: 0, description: '2 vitres latérales avant' },
    { id: 'arriere', name: 'Vitres arrière uniquement', price: 50, description: 'Vitres latérales arrière + lunette' },
    { id: 'complet', name: 'Véhicule complet', price: 100, description: 'Toutes les vitres' }
  ]

  const tintLevels = [
    { id: 'leger', name: 'Léger (30%)', price: 0, description: 'Conforme réglementation' },
    { id: 'moyen', name: 'Moyen (20%)', price: 20, description: 'Bon compromis' },
    { id: 'fonce', name: 'Foncé (5%)', price: 40, description: 'Protection maximale' }
  ]

  const extras = [
    { id: 'panoramique', name: 'Toit panoramique', price: 100 },
    { id: 'antieffraction', name: 'Film anti-effraction', price: 80 },
    { id: 'garantie', name: 'Garantie 10 ans', price: 50 }
  ]

  const calculatePrice = () => {
    const vehicle = vehicleTypes.find(v => v.id === formData.vehicleType)
    const window = windowTypes.find(w => w.id === formData.windowType)
    const tint = tintLevels.find(t => t.id === formData.tintLevel)
    const extrasPrice = formData.extras.reduce((sum, extraId) => {
      const extra = extras.find(e => e.id === extraId)
      return sum + (extra?.price || 0)
    }, 0)

    return (vehicle?.basePrice || 0) + (window?.price || 0) + (tint?.price || 0) + extrasPrice
  }

  const nextStep = () => setStep(prev => Math.min(prev + 1, 5))
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

  const selectVehicle = (id) => {
    setFormData({ ...formData, vehicleType: id })
    setTimeout(nextStep, 300)
  }

  const selectWindow = (id) => {
    setFormData({ ...formData, windowType: id })
    setTimeout(nextStep, 300)
  }

  const selectTint = (id) => {
    setFormData({ ...formData, tintLevel: id })
    setTimeout(nextStep, 300)
  }

  const toggleExtra = (id) => {
    setFormData(prev => ({
      ...prev,
      extras: prev.extras.includes(id)
        ? prev.extras.filter(e => e !== id)
        : [...prev.extras, id]
    }))
  }

  return (
    <div className="min-h-screen bg-matte-black pt-36 sm:pt-40 pb-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-racing font-bold mb-4">
              <span className="gradient-text">SIMULATEUR</span>
              <br />
              <span className="text-white">DE DEVIS</span>
            </h1>
            <p className="text-gray-400 text-lg">
              Obtenez une estimation instantanée pour vos vitres teintées
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex justify-between items-center mb-2">
              {[1, 2, 3, 4, 5].map((s) => (
                <div
                  key={s}
                  className={`w-full h-2 mx-1 rounded-full transition-all duration-500 ${
                    s <= step ? 'bg-silver-accent' : 'bg-gray-700'
                  }`}
                />
              ))}
            </div>
            <p className="text-center text-gray-400 text-sm mt-2">
              Étape {step} sur 5
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
                <div className="grid sm:grid-cols-2 gap-4">
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
                        <p className="text-gray-400 text-sm mb-2">{vehicle.description}</p>
                        <p className="text-silver-accent font-bold">À partir de {vehicle.basePrice}€</p>
                      </button>
                    )
                  })}
                </div>
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
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-racing font-bold text-white mb-1">{window.name}</h3>
                          <p className="text-gray-400 text-sm">{window.description}</p>
                        </div>
                        <p className="text-silver-accent font-bold">
                          {window.price > 0 ? `+${window.price}€` : 'Inclus'}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Tint Level */}
            {step === 3 && (
              <div className="animate-slide-up">
                <h2 className="text-2xl font-racing font-bold text-white mb-6 text-center">
                  Niveau de teinte souhaité ?
                </h2>
                <div className="space-y-4">
                  {tintLevels.map((tint) => (
                    <button
                      key={tint.id}
                      onClick={() => selectTint(tint.id)}
                      className={`w-full p-6 rounded-xl border-2 transition-all duration-300 hover-lift text-left ${
                        formData.tintLevel === tint.id
                          ? 'border-silver-accent bg-silver-accent/10'
                          : 'border-gray-700 hover:border-silver-accent/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-racing font-bold text-white mb-1">{tint.name}</h3>
                          <p className="text-gray-400 text-sm">{tint.description}</p>
                        </div>
                        <p className="text-silver-accent font-bold">
                          {tint.price > 0 ? `+${tint.price}€` : 'Inclus'}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Extras */}
            {step === 4 && (
              <div className="animate-slide-up">
                <h2 className="text-2xl font-racing font-bold text-white mb-6 text-center">
                  Options supplémentaires (facultatif)
                </h2>
                <div className="space-y-4 mb-6">
                  {extras.map((extra) => (
                    <button
                      key={extra.id}
                      onClick={() => toggleExtra(extra.id)}
                      className={`w-full p-6 rounded-xl border-2 transition-all duration-300 hover-lift text-left ${
                        formData.extras.includes(extra.id)
                          ? 'border-silver-accent bg-silver-accent/10'
                          : 'border-gray-700 hover:border-silver-accent/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                          <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                            formData.extras.includes(extra.id)
                              ? 'border-silver-accent bg-silver-accent'
                              : 'border-gray-600'
                          }`}>
                            {formData.extras.includes(extra.id) && (
                              <Check className="w-4 h-4 text-black" />
                            )}
                          </div>
                          <h3 className="font-racing font-bold text-white">{extra.name}</h3>
                        </div>
                        <p className="text-silver-accent font-bold">+{extra.price}€</p>
                      </div>
                    </button>
                  ))}
                </div>
                <button
                  onClick={nextStep}
                  className="w-full bg-silver-accent hover:bg-white text-black px-8 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Voir le devis
                </button>
              </div>
            )}

            {/* Step 5: Result */}
            {step === 5 && (
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
                    <div className="flex justify-between items-center py-2 border-b border-gray-700 text-sm">
                      <span className="text-gray-300">Niveau de teinte</span>
                      <span className="text-white font-semibold">
                        {tintLevels.find(t => t.id === formData.tintLevel)?.name}
                      </span>
                    </div>
                    {formData.extras.length > 0 && (
                      <div className="flex justify-between items-center py-2 border-b border-gray-700 text-sm">
                        <span className="text-gray-300">Options</span>
                        <span className="text-white font-semibold">
                          {formData.extras.length} option(s)
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t-2 border-silver-accent">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-racing font-bold text-white">TOTAL ESTIMÉ</span>
                      <span className="text-3xl font-racing font-bold gradient-text">
                        {calculatePrice()}€
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs mt-1">
                      * Prix indicatif, devis personnalisé sur demande
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => setShowContactForm(true)}
                    className="flex-1 bg-silver-accent hover:bg-white text-black px-6 py-3 rounded-lg font-bold text-base transition-all duration-300 transform hover:scale-105 shadow-lg text-center"
                  >
                    Demander un devis personnalisé
                  </button>
                  <button
                    onClick={() => {
                      setStep(1)
                      setFormData({ vehicleType: '', windowType: '', tintLevel: '', extras: [] })
                    }}
                    className="flex-1 bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 border border-white/20"
                  >
                    Recommencer
                  </button>
                </div>
              </div>
            )}

            {/* Contact Form */}
            {step === 5 && showContactForm && (
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
                  <div className="flex gap-4">
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

          {/* Navigation Buttons */}
          {step < 5 && step > 1 && (
            <div className="flex justify-between mt-8">
              <button
                onClick={prevStep}
                className="flex items-center space-x-2 text-gray-400 hover:text-silver-accent transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
                <span>Retour</span>
              </button>
              {step === 4 && (
                <div className="text-gray-400 text-sm">
                  Cliquez sur "Voir le devis" pour continuer
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Simulator
