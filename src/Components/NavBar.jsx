import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import "../CssFiles/navbar.css"

const navItems = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Projects', href: 'projects' },

  { name: 'Contact', href: 'contact' },
]

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // 1. Scroll style toggle
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // 2. Section detection using IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // Detect when section is in the middle of screen
      threshold: 0
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    navItems.forEach((item) => {
      const element = document.getElementById(item.href)
      if (element) observer.observe(element)
    })

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      observer.disconnect()
    }
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Adjust based on navbar height if needed
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <motion.div
        className="navbar-box"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <ul>
          {navItems.map((item) => (
            <li key={item.name}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={activeSection === item.href ? 'active-Contact' : ''}
                onClick={() => scrollToSection(item.href)}
              >
                <span>{item.name}</span>
              </motion.button>
            </li>
          ))}
        </ul>
      </motion.div>
    </nav>
  )
}

export default Navbar
