import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Testimonials from './components/Testimonials'
import Certification from './components/Certification'
import BrandGallery from './components/BrandGallery'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Simulator from './components/Simulator'
import FAQ from './components/FAQ'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          const navbarHeight = 100
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
          window.scrollTo({
            top: elementPosition - navbarHeight,
            behavior: 'smooth'
          })
        }
      }, 100)
    }
  }, [])

  const HomePage = () => (
    <>
      <Hero />
      <Testimonials />
      <Certification />
      <BrandGallery />
      <FAQ />
      <Contact />
    </>
  )

  return (
    <Router>
      <div className="relative">
        <div className="fixed inset-0 bg-matte-black -z-10" />
        
        <Navbar scrolled={scrolled} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/simulateur" element={<Simulator />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
