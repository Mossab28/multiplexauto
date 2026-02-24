import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Certification from './components/Certification'
import BrandGallery from './components/BrandGallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="relative">
      <div className="fixed inset-0 bg-matte-black -z-10" />
      
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Services />
      <Certification />
      <BrandGallery />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
