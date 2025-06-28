import React, { useState, useEffect } from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <img src={Logo} alt='Fitness Logo' className='logo' />
        </div>
        
        {/* Desktop Navigation */}
        <nav className='header-nav'>
          <ul className='header-menu'>
            <li><a href="#home">Home</a></li>
            <li><a href="#programs">Programs</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#plans">Plans</a></li>
            <li><a href="#reviews">Reviews</a></li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-btn ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
        
        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
          <ul className='mobile-menu'>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#programs" onClick={closeMenu}>Programs</a></li>
            <li><a href="#about" onClick={closeMenu}>About Us</a></li>
            <li><a href="#plans" onClick={closeMenu}>Plans</a></li>
            <li><a href="#reviews" onClick={closeMenu}>Reviews</a></li>
          </ul>
          
          {/* CTA Button in Mobile Menu */}
          <div className="mobile-cta">
            <button className="cta-button">Get Started</button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header