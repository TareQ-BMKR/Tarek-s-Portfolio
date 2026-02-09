import { motion } from 'framer-motion'
import "../CssFiles/navbar.css"

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact', active: true },
  ]

  return (
    <nav className="navbar">
      <motion.div 
        className="navbar-box glass-effect"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <ul>
          {navItems.map((item, index) => (
            <li key={item.name}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={item.active ? 'active-Contact' : ''}
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
