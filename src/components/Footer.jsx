import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUp, Film } from 'lucide-react';
import { companyData } from '../data/companyData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050505] border-t border-[#d4af37]/20 pt-16 pb-10 text-gray-400 overflow-hidden">
      {/* Decorative Gold Glow in Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#d4af37]/5 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Editorial Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-white/5">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-flex items-center gap-4 group">
              <div className="w-16 h-16 rounded-full p-1.5 bg-black/60 border border-gold/40 group-hover:border-gold transition-colors flex items-center justify-center">
                <img 
                  src="/assets/images/logo.png" 
                  alt="Zingal Films & Music India" 
                  className="w-full h-full object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]"
                />
              </div>
              <div>
                <h3 className="font-cinzel text-lg md:text-xl text-white font-bold tracking-widest uppercase">
                  {companyData.name}
                </h3>
                <p className="text-xs text-gold font-sans tracking-widest uppercase mt-0.5">
                  {companyData.tagline}
                </p>
              </div>
            </Link>

            <p className="text-sm text-gray-400 font-sans leading-relaxed max-w-md">
              A premier creative film production house and music label delivering visually engaging, 
              technically masterful, and emotionally powerful cinema for global audiences.
            </p>

            <blockquote className="border-l-2 border-gold/50 pl-4 py-1 italic font-cormorant text-base text-gray-300">
              "{companyData.quote}"
            </blockquote>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-cinzel text-xs tracking-super-wide uppercase text-white font-semibold">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs font-sans uppercase tracking-widest">
              <li>
                <Link to="/" className="hover:text-gold transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/story" className="hover:text-gold transition-colors">Our Story</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-gold transition-colors">Our Work</Link>
              </li>
              <li>
                <Link to="/studio" className="hover:text-gold transition-colors">Studio & Gear</Link>
              </li>
              <li>
                <Link to="/clients" className="hover:text-gold transition-colors">Clients</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gold transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Capabilities */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-cinzel text-xs tracking-super-wide uppercase text-white font-semibold">
              Capabilities
            </h4>
            <ul className="space-y-2 text-xs text-gray-400 font-sans">
              <li>Feature Films</li>
              <li>Web Series & OTT</li>
              <li>TV Commercials (TVCs)</li>
              <li>Corporate Brand Films</li>
              <li>Documentaries</li>
              <li>Zingal Music Label</li>
              <li>DI Color Grading</li>
              <li>Drone Cinematography</li>
            </ul>
          </div>

          {/* Column 4: Verified Contact */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-cinzel text-xs tracking-super-wide uppercase text-white font-semibold">
              Headquarters
            </h4>
            <div className="space-y-3 text-xs text-gray-300 font-sans">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                <span>{companyData.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href={companyData.socialLinks.phone} className="hover:text-gold transition-colors">
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

            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-block px-4 py-2 border border-gold/40 text-gold hover:bg-gold hover:text-black transition-all duration-300 text-[11px] uppercase tracking-widest font-semibold rounded-sm"
              >
                Project Inquiries
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Utility Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p className="font-sans">
            &copy; {new Date().getFullYear()} {companyData.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] tracking-widest uppercase text-gray-600">
              Nagpur &bull; Maharashtra &bull; India
            </span>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-gray-400 hover:text-gold transition-colors p-1"
              aria-label="Back to top of page"
            >
              <span className="text-[10px] tracking-widest uppercase">Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
