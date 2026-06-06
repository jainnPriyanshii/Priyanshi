import React, { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Stack', href: '#stack' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Handle scroll events for shadow/blur
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Track active section based on scroll position
      const scrollPosition = window.scrollY + 200;
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
      setActiveSection(href);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-background/90 backdrop-blur-md shadow-sm border-b border-secondary/10 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="flex justify-between items-center px-6 md:px-12 w-full max-w-container-max mx-auto">
        <a 
          href="#"
          onClick={(e) => handleNavClick(e, '#')}
          className="font-display text-2xl font-extrabold tracking-tight text-text-primary hover:text-accent transition-colors duration-300"
        >
          Priyanshi Jain
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-mono text-xs uppercase tracking-widest font-semibold transition-all duration-300 pb-1 relative ${
                activeSection === link.href 
                  ? 'text-accent border-b-2 border-accent' 
                  : 'text-secondary hover:text-accent'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile Navigation Trigger */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-text-primary hover:text-accent p-1 transition-colors duration-300 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background border-b border-secondary/10 py-6 px-8 flex flex-col gap-5 shadow-lg animate-fade-in-up">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`font-mono text-sm uppercase tracking-widest font-semibold transition-all duration-300 py-2 ${
                activeSection === link.href 
                  ? 'text-accent pl-2 border-l-2 border-accent' 
                  : 'text-secondary hover:text-accent'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
