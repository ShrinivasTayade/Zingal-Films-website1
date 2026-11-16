import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, ChevronRight } from 'lucide-react';
import { companyData } from '../data/companyData';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Our Story', path: '/story' },
  { name: 'Services', path: '/services' },
  { name: 'Our Work', path: '/work' },
  { name: 'Studio & Gear', path: '/studio' },
  { name: 'Clients', path: '/clients' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-[#d4af37]/30 py-2 sm:py-2.5 shadow-xl shadow-black/90 transition-all duration-300"
        role="banner"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Strictly single-line flex row */}
          <div className="flex items-center justify-between flex-nowrap w-full gap-4">
            
            {/* Brand Logo - Cropped & Highlighted as requested, no redundant text */}
            <Link 
              to="/" 
              className="flex-shrink-0 flex items-center group py-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label="Zingal Films & Music India Home"
            >
              <div className="relative flex items-center justify-center">
                <img 
                  src="/assets/images/logo-cropped.png" 
                  alt="Zingal Films & Music India Pvt. Ltd." 
                  className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto max-w-[170px] sm:max-w-[220px] md:max-w-[260px] object-contain filter drop-shadow-[0_2px_14px_rgba(212,175,55,0.45)] group-hover:scale-105 group-hover:drop-shadow-[0_4px_18px_rgba(212,175,55,0.7)] transition-all duration-300"
                />
              </div>
            </Link>

            {/* Desktop Navigation - Strictly single horizontal line */}
            <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 flex-nowrap whitespace-nowrap" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-[11px] xl:text-xs uppercase tracking-widest font-semibold transition-colors duration-200 relative py-1.5 ${
                      isActive 
                        ? 'text-gold' 
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action Button */}
            <div className="hidden md:flex items-center flex-shrink-0 whitespace-nowrap">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-4 py-2 text-[11px] uppercase tracking-widest font-bold text-black bg-gradient-to-r from-[#dfba4f] via-[#fff2b2] to-[#c59d2a] rounded shadow-md hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                Enquire Now
              </Link>
            </div>

            {/* Mobile Menu Button - In same single line */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex-shrink-0 p-2 rounded-md text-gold hover:text-white hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              aria-label={isOpen ? "Close Menu" : "Open Menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6 text-gold" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Separate top-level portal overlay outside header */}
      {isOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-50 bg-[#080808] flex flex-col justify-between overflow-y-auto animate-fade-in"
          style={{ backgroundColor: '#080808' }}
        >
          {/* Top Bar inside Overlay */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 border-b border-gold/30 bg-black/95">
            <Link 
              to="/" 
              onClick={() => setIsOpen(false)}
              className="flex items-center py-0.5"
            >
              <img 
                src="/assets/images/logo-cropped.png" 
                alt="Zingal Films & Music India" 
                className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.4)]"
              />
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-md text-gold hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Close Menu"
            >
              <X className="w-6 h-6 text-gold" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-5 py-6 space-y-2 overflow-y-auto" aria-label="Mobile Navigation">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between text-sm uppercase tracking-widest py-3.5 px-4 rounded border transition-colors ${
                    isActive 
                      ? 'text-gold bg-gold/10 font-bold border-gold/40 border-l-4 border-l-gold' 
                      : 'text-gray-200 hover:text-gold border-white/5 bg-black/40 hover:bg-white/5'
                  }`}
                >
                  <span className="font-cinzel text-sm">{link.name}</span>
                  <ChevronRight className={`w-4 h-4 ${isActive ? 'text-gold' : 'text-gray-500'}`} />
                </Link>
              );
            })}
          </nav>

          {/* Footer Info & Action */}
          <div className="p-5 border-t border-gold/20 bg-black/90 space-y-4">
            <div className="space-y-2 text-xs text-gray-300 font-sans">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={companyData.socialLinks.phone} className="hover:text-gold transition-colors font-medium">
                  {companyData.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={companyData.socialLinks.email} className="hover:text-gold transition-colors break-all">
                  {companyData.email}
                </a>
              </div>
            </div>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full inline-flex items-center justify-center py-3.5 text-xs uppercase tracking-widest font-bold text-black bg-gradient-to-r from-[#dfba4f] via-[#fff2b2] to-[#c59d2a] rounded shadow-lg"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
