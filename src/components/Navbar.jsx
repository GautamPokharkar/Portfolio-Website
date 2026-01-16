import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Add shadow and background when scrolled
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container navbar-container">
        <div className="navbar-logo">
          <a href="#home">
            <span className="gradient-text">JD</span>
          </a>
        </div>

        <div className="navbar-toggle" onClick={toggleMenu}>
          <div className={`toggle-bar ${menuOpen ? 'open' : ''}`}></div>
        </div>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {['home', 'about', 'skills', 'projects', 'resume', 'contact'].map(section => (
            <li key={section}>
              <a 
                href={`#${section}`}
                className={activeSection === section ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                {activeSection === section && (
                  <motion.div 
                    className="active-indicator" 
                    layoutId="activeSection"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
