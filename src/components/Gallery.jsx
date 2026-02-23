import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    {
      url: '/multiplexauto/images/gallery/gallery-1.jpg',
      category: 'Sportive',
      title: 'Audi S5 Sportback',
    },
    {
      url: '/multiplexauto/images/gallery/gallery-4.jpg',
      category: 'Berline',
      title: 'Audi S7',
    },
    {
      url: '/multiplexauto/images/gallery/gallery-7.jpg',
      category: 'Berline',
      title: 'Golf 7',
    },
    {
      url: '/multiplexauto/images/gallery/gallery-10.jpg',
      category: 'Citadine',
      title: 'Peugeot 208',
    },
    {
      url: '/multiplexauto/images/gallery/gallery-13.jpg',
      category: 'Sportive',
      title: 'Audi R8 Spyder',
    },
    {
      url: '/multiplexauto/images/gallery/gallery-2.jpg',
      category: 'Sportive',
      title: 'Audi S5 Sportback',
    },
    {
      url: '/multiplexauto/images/gallery/gallery-5.jpg',
      category: 'Berline',
      title: 'Audi S7',
    },
    {
      url: '/multiplexauto/images/gallery/gallery-8.jpg',
      category: 'Berline',
      title: 'Golf 7',
    },
    {
      url: '/multiplexauto/images/gallery/gallery-11.jpg',
      category: 'Citadine',
      title: 'Peugeot 208',
    },
  ]

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <span className="text-racing-red font-racing font-bold text-sm tracking-wider">NOTRE GALERIE</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-racing font-bold mt-4 mb-6">
            <span className="gradient-text">NOS RÉALISATIONS</span>
            <br />
            <span className="text-white">En Images</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Découvrez quelques-unes de nos installations de vitres teintées sur différents types de véhicules
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-xl cursor-pointer animate-slide-up hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-gray via-dark-gray/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-racing-red px-3 py-1 rounded-full text-sm font-semibold mb-2">
                  {image.category}
                </span>
                <h3 className="font-racing font-bold text-lg">{image.title}</h3>
              </div>
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Maximize2 className="w-6 h-6 text-white" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/perfect_car_troyes/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block glass-effect hover:bg-white/10 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 hover-lift"
          >
            Voir Plus sur Instagram →
          </a>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-auto rounded-xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-racing-red hover:bg-red-700 text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
            >
              ✕
            </button>
            <div className="absolute bottom-4 left-4 right-4 glass-effect p-4 rounded-lg">
              <span className="inline-block bg-racing-red px-3 py-1 rounded-full text-sm font-semibold mb-2">
                {selectedImage.category}
              </span>
              <h3 className="font-racing font-bold text-xl">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gallery
