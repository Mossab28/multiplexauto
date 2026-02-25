import React, { useState } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

const BrandGallery = () => {
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const brands = [
    {
      name: 'BMW',
      logo: '🏁',
      images: [
        '/multiplexauto/images/gallery/gallery-1.jpg',
        '/multiplexauto/images/gallery/gallery-2.jpg',
      ],
      color: '#1C69D4'
    },
    {
      name: 'Audi',
      logo: '⭕',
      images: [
        '/multiplexauto/images/gallery/gallery-4.jpg',
        '/multiplexauto/images/gallery/gallery-5.jpg',
        '/multiplexauto/images/gallery/gallery-1.jpg',
      ],
      color: '#BB0A30'
    },
    {
      name: 'Mercedes',
      logo: '⭐',
      images: [
        '/multiplexauto/images/gallery/gallery-7.jpg',
        '/multiplexauto/images/gallery/gallery-8.jpg',
      ],
      color: '#00ADEF'
    },
    {
      name: 'Maserati',
      logo: '🔱',
      images: [
        '/multiplexauto/images/gallery/gallery-13.jpg',
      ],
      color: '#0C2340'
    }
  ]

  const openBrandGallery = (brand) => {
    setSelectedBrand(brand)
    setCurrentImageIndex(0)
  }

  const closeBrandGallery = () => {
    setSelectedBrand(null)
    setCurrentImageIndex(0)
  }

  const nextImage = () => {
    if (selectedBrand) {
      setCurrentImageIndex((prev) => 
        prev === selectedBrand.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (selectedBrand) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedBrand.images.length - 1 : prev - 1
      )
    }
  }

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-silver-accent font-racing font-bold text-sm tracking-wider">NOTRE GALERIE</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-racing font-bold mt-4 mb-6">
            <span className="gradient-text">NOS RÉALISATIONS</span>
            <br />
            <span className="text-white">Par Marque</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez nos installations par marque automobile. Cliquez sur une marque pour voir toutes les réalisations.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {brands.map((brand, index) => (
            <button
              key={index}
              onClick={() => openBrandGallery(brand)}
              className="group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                {/* Bordure subtile */}
                <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-silver-accent/20 to-silver-accent/10 group-hover:from-silver-accent/30 group-hover:to-silver-accent/20 transition-all duration-300" />
                
                {/* Image de prévisualisation */}
                <div className="relative aspect-square rounded-2xl overflow-hidden border border-silver-accent/20 group-hover:border-silver-accent/40 transition-all duration-300">
                  <img 
                    src={brand.images[0]} 
                    alt={brand.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
              </div>
              
              {/* Nom de la marque en dessous */}
              <h3 className="text-xl font-racing font-bold text-white group-hover:text-silver-accent transition-colors duration-300 mt-4 text-center">
                {brand.name}
              </h3>
            </button>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/perfect_car_troyes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block glass-effect hover:bg-white/10 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover-lift border border-silver-accent/20"
          >
            Voir Plus sur Instagram →
          </a>
        </div>
      </div>

      {selectedBrand && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={closeBrandGallery}
        >
          <button
            onClick={closeBrandGallery}
            className="absolute top-4 right-4 bg-silver-accent/20 hover:bg-silver-accent/30 text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="text-center mb-6">
              <h3 className="text-3xl font-racing font-bold text-silver-accent mb-2">
                {selectedBrand.name}
              </h3>
              <p className="text-gray-400">
                {currentImageIndex + 1} / {selectedBrand.images.length}
              </p>
            </div>

            <div className="relative">
              <img
                src={selectedBrand.images[currentImageIndex]}
                alt={`${selectedBrand.name} ${currentImageIndex + 1}`}
                className="w-full h-auto rounded-xl max-h-[70vh] object-contain"
              />

              {selectedBrand.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-lg"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            <div className="flex justify-center gap-2 mt-6">
              {selectedBrand.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? 'bg-silver-accent w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default BrandGallery
