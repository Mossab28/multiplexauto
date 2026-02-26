import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Certification from './components/Certification'
import BrandGallery from './components/BrandGallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Simulator from './components/Simulator'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const HomePage = () => (
    <>
      <Hero />
      <About />
      <Services />
      <Certification />
      <BrandGallery />
      <Testimonials />
      <Contact />
    </>
  )

  return (
    <Router>
      <div className="relative min-h-screen flex flex-col">
        <div className="fixed inset-0 bg-matte-black -z-10" />
        
        <Navbar scrolled={scrolled} />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/simulateur" element={<Simulator />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
