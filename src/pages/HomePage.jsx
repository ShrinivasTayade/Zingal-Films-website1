import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Film, 
  Sparkles, 
  Sliders, 
  ChevronRight, 
  ChevronLeft,
  Camera, 
  Tv, 
  Music, 
  Eye, 
  Layers, 
  Award,
  Video
} from 'lucide-react';
import HeroVideo from '../components/HeroVideo';
import SectionHeading from '../components/SectionHeading';
import BehindTheScenesSlider from '../components/BehindTheScenesSlider';
import ProjectModal from '../components/ProjectModal';
import SEO from '../components/SEO';
import { companyData } from '../data/companyData';
import { portfolioData } from '../data/portfolioData';
import { stillsData } from '../data/stillsData';
import { mainServices, technicalExpertise } from '../data/servicesData';
import { equipmentList, studioFacilities } from '../data/studioData';
import { clientsData } from '../data/clientsData';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedStill, setSelectedStill] = useState(null);

  const featuredWorks = portfolioData.slice(0, 6);

  // Mobile Featured Productions Slider State & Swipe Handlers
  const [mobileProjectIndex, setMobileProjectIndex] = useState(0);
  const [projTouchStart, setProjTouchStart] = useState(0);
  const [projTouchEnd, setProjTouchEnd] = useState(0);

  const prevMobileProject = () => {
    setMobileProjectIndex((prev) => (prev > 0 ? prev - 1 : featuredWorks.length - 1));
  };

  const nextMobileProject = () => {
    setMobileProjectIndex((prev) => (prev < featuredWorks.length - 1 ? prev + 1 : 0));
  };

  const handleProjTouchStart = (e) => {
    setProjTouchStart(e.targetTouches[0].clientX);
  };

  const handleProjTouchMove = (e) => {
    setProjTouchEnd(e.targetTouches[0].clientX);
  };

  const handleProjTouchEnd = () => {
    if (!projTouchStart || !projTouchEnd) return;
    const distance = projTouchStart - projTouchEnd;
    if (distance > 45) {
      nextMobileProject();
    } else if (distance < -45) {
      prevMobileProject();
    }
    setProjTouchStart(0);
    setProjTouchEnd(0);
  };

  // Divide clients into two balanced rows for opposite-direction marquee
  const clientRow1 = clientsData.slice(0, 16);
  const clientRow2 = clientsData.slice(16);

  return (
    <div className="relative bg-black min-h-screen text-gray-200">
      <SEO
        title="Zingal Films & Music India | Stories that Inspire. Cinema that Connects."
        description="Premier film & music production company based in Nagpur, Maharashtra. Feature films, OTT series, corporate documentaries, television commercials, and post-production."
        canonical="/"
      />
      
      {/* 1. Main Hero: 100% Width Opening Logo Video */}
      <HeroVideo />

      {/* 2. Brand Statement & Company Philosophy */}
      <section 
        id="company-statement" 
        className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column with Slate Still - STRICTLY 1:1 on Mobile */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-lg overflow-hidden border border-gold/30 bg-obsidian-900 shadow-2xl aspect-square md:aspect-auto flex items-center justify-center">
                <img 
                  src="/assets/images/cinematic-clapperboard.jpg" 
                  alt="Zingal Films Production Slate" 
                  className="w-full h-full aspect-square md:aspect-auto object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/80 backdrop-blur-md rounded border border-white/10">
                  <p className="text-xs uppercase tracking-super-wide text-gold font-semibold">
                    Production In Session
                  </p>
                  <p className="font-cinzel text-sm text-white font-medium mt-1">
                    "Emotion Captured in Frames"
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-gold/20 -z-10 rounded-lg pointer-events-none hidden sm:block" />
            </div>

            {/* Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 text-xs uppercase tracking-widest text-gold font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Production House</span>
              </div>

              <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-wide leading-tight">
                Stories that Inspire. <br />
                <span className="text-gold-metallic">Cinema that Connects.</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">
                {companyData.aboutSummary}
              </p>

              <blockquote className="border-l-2 border-gold pl-5 py-2 font-cormorant text-xl text-gold-light italic">
                "{companyData.quote}"
              </blockquote>

              <p className="text-sm text-gray-400 font-sans leading-relaxed">
                With a comprehensive filmmaking ecosystem featuring world-class cinema cameras, 
                advanced lighting, acoustics-treated audio suites, and cutting-edge color grading, 
                Zingal Films & Music India works closely with creators and brands to transform vision into timeless cinema.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  to="/story"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-widest font-bold text-black bg-gradient-to-r from-[#dfba4f] via-[#fff2b2] to-[#c59d2a] rounded shadow-lg hover:shadow-gold/30 hover:scale-[1.02] transition-all"
                >
                  <span>Our Full Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-widest font-semibold text-white border border-white/20 hover:border-gold hover:text-gold rounded transition-colors"
                >
                  <span>Explore Productions</span>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Featured Productions Showcase: Mobile Slider & Desktop Grid */}
      <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block mb-2">
                Portfolio Showcase
              </span>
              <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">
                Featured Productions
              </h2>
            </div>
            
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-white transition-colors group"
            >
              <span>View All 11 Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* MOBILE VIEW: Interactive Slider / Carousel (md:hidden) */}
          <div className="md:hidden">
            {/* Mobile Controls & Slide Indicator */}
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="flex items-center gap-2">
                <span className="font-cinzel text-[11px] uppercase tracking-widest text-gold font-bold bg-gold/10 px-3 py-0.5 rounded-full border border-gold/30">
                  Project {mobileProjectIndex + 1} / {featuredWorks.length}
                </span>
                <span className="text-[10px] text-gray-400 font-sans">
                  Swipe or tap arrows
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prevMobileProject}
                  className="p-2 rounded-full bg-[#121212] border border-white/15 text-white hover:text-gold hover:border-gold active:scale-95 transition-all shadow-md"
                  aria-label="Previous Featured Project"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={nextMobileProject}
                  className="p-2 rounded-full bg-[#121212] border border-white/15 text-white hover:text-gold hover:border-gold active:scale-95 transition-all shadow-md"
                  aria-label="Next Featured Project"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Mobile Sliding Track with Touch Events */}
            <div 
              className="overflow-hidden rounded-xl border border-white/10 bg-[#070707] p-2 shadow-2xl relative"
              onTouchStart={handleProjTouchStart}
              onTouchMove={handleProjTouchMove}
              onTouchEnd={handleProjTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-out"
                style={{ transform: `translateX(-${mobileProjectIndex * 100}%)` }}
              >
                {featuredWorks.map((work) => (
                  <div key={work.id} className="w-full flex-shrink-0 px-1">
                    <div 
                      onClick={() => setSelectedProject(work)}
                      className="group relative bg-[#0b0b0b] rounded-lg border border-white/15 hover:border-gold/60 overflow-hidden cursor-pointer shadow-xl"
                    >
                      {/* Poster Frame */}
                      <div className="relative aspect-[3/4] bg-black overflow-hidden flex items-center justify-center">
                        <img 
                          src={work.poster} 
                          alt={work.title} 
                          className="w-full h-full object-contain filter drop-shadow-md"
                        />
                        
                        {/* Overlay with Details & Tap Callout */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent flex flex-col justify-end p-5">
                          <span className="inline-block px-2.5 py-0.5 text-[9px] uppercase tracking-widest text-black bg-gold font-bold rounded-sm mb-1.5 self-start">
                            {work.category}
                          </span>
                          <h3 className="font-cinzel text-lg text-white font-bold mb-1">
                            {work.title}
                          </h3>
                          <p className="text-xs text-gray-300 font-sans line-clamp-2 mb-2">
                            {work.logline}
                          </p>
                          <div className="flex items-center gap-1.5 text-xs text-gold font-medium">
                            <Eye className="w-3.5 h-3.5" />
                            <span>Tap to View Full Credits & Details</span>
                          </div>
                        </div>
                      </div>

                      {/* Card Footer */}
                      <div className="p-4 flex items-center justify-between border-t border-white/5 bg-[#080808]">
                        <div>
                          <span className="text-[10px] uppercase tracking-widest text-gold font-medium block">
                            {work.category}
                          </span>
                          <h4 className="font-cinzel text-sm text-white font-bold">
                            {work.title}
                          </h4>
                        </div>
                        <span className="text-xs text-gray-400 font-sans">
                          {work.year}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile Pagination Dots */}
            <div className="flex items-center justify-center gap-2 mt-4">
              {featuredWorks.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setMobileProjectIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    mobileProjectIndex === idx ? 'w-6 bg-gold' : 'w-1.5 bg-white/20'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>

          {/* DESKTOP VIEW: Cinematic 3-Column Poster Grid (hidden md:grid) */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredWorks.map((work) => (
              <div 
                key={work.id}
                onClick={() => setSelectedProject(work)}
                className="group relative bg-[#0b0b0b] rounded-lg border border-white/10 hover:border-gold/60 overflow-hidden cursor-pointer shadow-xl transition-all duration-500 hover:-translate-y-1.5"
              >
                {/* Poster Frame */}
                <div className="relative aspect-[3/4] bg-black overflow-hidden flex items-center justify-center">
                  <img 
                    src={work.poster} 
                    alt={work.title} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 filter drop-shadow-md"
                  />
                  
                  {/* Subtle Gradient Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <span className="inline-block px-2.5 py-1 text-[10px] uppercase tracking-widest text-black bg-gold font-bold rounded-sm mb-2">
                        {work.category}
                      </span>
                      <h3 className="font-cinzel text-xl text-white font-bold mb-1">
                        {work.title}
                      </h3>
                      <p className="text-xs text-gray-300 font-sans line-clamp-2 mb-3">
                        {work.logline}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-gold font-medium">
                        <Eye className="w-4 h-4" />
                        <span>View Production Detail</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer Info */}
                <div className="p-5 flex items-center justify-between border-t border-white/5 bg-[#080808]">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-gold font-medium block">
                      {work.category}
                    </span>
                    <h4 className="font-cinzel text-base text-white font-bold group-hover:text-gold transition-colors">
                      {work.title}
                    </h4>
                  </div>
                  <span className="text-xs text-gray-500 font-sans">
                    {work.year}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Core Services Overview with Blurred Gradient Abstract Background */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-black relative overflow-hidden">
        
        {/* Abstract Blurred Gradient Mesh Elements */}
        <div className="absolute top-1/4 -left-32 w-[480px] h-[480px] bg-gradient-to-tr from-[#d4af37]/25 via-[#b8902d]/15 to-transparent rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 -right-32 w-[580px] h-[580px] bg-gradient-to-bl from-[#dfba4f]/20 via-[#895e1c]/15 to-transparent rounded-full blur-[160px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[320px] bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute inset-0 bg-radial-vignette opacity-60 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          
          <SectionHeading
            subtitle="Full Spectrum Production"
            title="Our Core Services"
            description="From high-concept development and scriptwriting to principal cinematography, editing, DI color grading, sound design, and OTT delivery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {mainServices.slice(0, 6).map((service) => (
              <div 
                key={service.id}
                className="bg-[#0a0a0a]/80 backdrop-blur-md border border-white/10 hover:border-gold/60 rounded-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="w-12 h-12 rounded bg-black border border-gold/30 flex items-center justify-center text-gold mb-6 group-hover:border-gold group-hover:scale-105 transition-all">
                    {service.id === 'feature-films' && <Film className="w-6 h-6" />}
                    {service.id === 'web-series' && <Tv className="w-6 h-6" />}
                    {service.id === 'corporate-films' && <Layers className="w-6 h-6" />}
                    {service.id === 'television-commercials' && <Sparkles className="w-6 h-6" />}
                    {service.id === 'documentaries' && <Camera className="w-6 h-6" />}
                    {service.id === 'music-videos' && <Music className="w-6 h-6" />}
                  </div>

                  <span className="text-[10px] uppercase tracking-super-wide text-gold font-semibold block mb-1">
                    {service.tagline}
                  </span>

                  <h3 className="font-cinzel text-xl sm:text-2xl text-white font-bold mb-3 group-hover:text-gold transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold hover:text-white transition-colors pt-4 border-t border-white/5"
                >
                  <span>Explore Capabilities</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs uppercase tracking-widest font-semibold border border-gold/40 text-gold hover:bg-gold hover:text-black transition-all rounded-sm backdrop-blur-sm"
            >
              <span>View All Services & Technical Expertise</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Production Stills / Behind-the-Scenes Image Slider */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#050505] relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block mb-2">
                On Location & Soundstages
              </span>
              <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">
                Behind The Scenes
              </h2>
            </div>
            
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-white transition-colors group"
            >
              <span>Explore All 17 Production Stills</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Interactive Image Slider */}
          <BehindTheScenesSlider onSelectStill={setSelectedStill} />

        </div>
      </section>

      {/* 6. Studio Infrastructure & Cinema Equipment Highlight */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-black">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Text & Equipment List */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block">
                Filmmaking Ecosystem
              </span>
              <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wide leading-tight">
                Studio & Cinema Technology
              </h2>
              <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
                {companyData.whoWeAre.split('\n\n')[2]}
              </p>

              <div className="space-y-4 pt-4">
                {equipmentList.slice(0, 3).map((item) => (
                  <div key={item.name} className="p-4 bg-[#0a0a0a] rounded border border-white/10 flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs uppercase tracking-widest text-gold font-semibold">{item.badge}</span>
                      </div>
                      <h4 className="font-cinzel text-base text-white font-bold mt-1">{item.name}</h4>
                      <p className="text-xs text-gray-400 font-sans mt-0.5">{item.lenses}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/studio"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs uppercase tracking-widest font-semibold border border-gold/40 text-gold hover:bg-gold hover:text-black rounded transition-all"
                >
                  <span>Explore All Cameras & Studios</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Studio Image Mosaic */}
            <div className="lg:col-span-6 space-y-6">
              <div className="relative rounded-lg overflow-hidden border border-gold/30 bg-[#080808] shadow-2xl">
                <img 
                  src="/assets/studio/studio-video-editing-color.png" 
                  alt="Zingal Video Editing & Color Grading Suites" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-4 bg-[#0a0a0a] border-t border-white/10 flex items-center justify-between">
                  <span className="font-cinzel text-sm text-white font-bold uppercase">
                    Post-Production & DI Color Suite
                  </span>
                  <span className="text-[10px] uppercase tracking-widest text-gold">
                    In-House Facility
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg overflow-hidden border border-white/10 bg-[#080808]">
                  <img 
                    src="/assets/studio/studio-audio-mixing-suite.jpg" 
                    alt="Zingal Sound Design & Audio Recording" 
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <p className="p-2.5 text-center text-[11px] font-cinzel text-gray-300 uppercase tracking-widest">
                    Audio Recording Suite
                  </p>
                </div>
                <div className="rounded-lg overflow-hidden border border-white/10 bg-[#080808]">
                  <img 
                    src="/assets/studio/studio-soundstage-lighting.jpg" 
                    alt="Zingal Soundstage & Lighting" 
                    className="w-full aspect-[4/3] object-cover"
                  />
                  <p className="p-2.5 text-center text-[11px] font-cinzel text-gray-300 uppercase tracking-widest">
                    Lighting Soundstage
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Verified Clientele Showcase - 2 OPPOSITE DIRECTION MARQUEE ROWS WITH HOVER PAUSE */}
      <section className="py-24 md:py-32 border-b border-white/5 bg-[#050505] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <SectionHeading
            subtitle="Trusted Partnerships"
            title="Our Clientele"
            description="Collaborating with government administrations, public sector undertakings, police authorities, municipal corporations, and enterprise leaders."
          />
        </div>

        {/* Marquee Container with Subtle Edge Fades and Pause on Hover */}
        <div className="relative w-full overflow-hidden marquee-container space-y-4 sm:space-y-6">
          
          {/* Left & Right Cinematic Vignette Gradients */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-10" />

          {/* Row 1: Moving in Direction A (Left) */}
          <div className="overflow-hidden py-1">
            <div className="animate-marquee-left flex items-stretch">
              {[...clientRow1, ...clientRow1].map((client, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="w-48 sm:w-56 md:w-64 flex-shrink-0 mx-2 sm:mx-3 p-4 sm:p-5 rounded-xl bg-[#0e0e0e] border border-white/10 hover:border-gold/60 flex flex-col items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:-translate-y-1 select-none"
                  title={client.name}
                >
                  <div className="w-full h-16 sm:h-20 md:h-22 flex items-center justify-center p-2">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs text-gray-300 group-hover:text-gold text-center font-sans font-medium line-clamp-1 mt-2 transition-colors">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: Moving in Opposite Direction B (Right) */}
          <div className="overflow-hidden py-1">
            <div className="animate-marquee-right flex items-stretch">
              {[...clientRow2, ...clientRow2].map((client, idx) => (
                <div
                  key={`r2-${idx}`}
                  className="w-48 sm:w-56 md:w-64 flex-shrink-0 mx-2 sm:mx-3 p-4 sm:p-5 rounded-xl bg-[#0e0e0e] border border-white/10 hover:border-gold/60 flex flex-col items-center justify-center transition-all duration-300 group shadow-lg hover:shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:-translate-y-1 select-none"
                  title={client.name}
                >
                  <div className="w-full h-16 sm:h-20 md:h-22 flex items-center justify-center p-2">
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[11px] sm:text-xs text-gray-300 group-hover:text-gold text-center font-sans font-medium line-clamp-1 mt-2 transition-colors">
                    {client.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-12 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/clients"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-white transition-colors group"
          >
            <span>Explore All 31 Verified Client Partners</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <section className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-black via-obsidian-950 to-black text-center">
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block">
            Begin Your Next Masterpiece
          </span>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wide leading-tight">
            Have a Story Waiting to be Told?
          </h2>

          <p className="text-base text-gray-300 font-sans max-w-2xl mx-auto leading-relaxed">
            From script ideation and casting to multi-camera production and theatrical post-production, 
            partner with Zingal Films & Music India to bring your cinematic vision to life.
          </p>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs uppercase tracking-widest font-bold text-black bg-gradient-to-r from-[#dfba4f] via-[#fff2b2] to-[#c59d2a] rounded shadow-xl hover:shadow-gold/30 hover:scale-[1.02] transition-all"
            >
              <span>Start Production Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${companyData.phone.replace(/\s+/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs uppercase tracking-widest font-semibold border border-white/20 text-white hover:border-gold hover:text-gold rounded transition-colors"
            >
              <span>Call +91 9503736430</span>
            </a>
          </div>
        </div>
      </section>

      {/* Project Lightbox Modal */}
      {(selectedProject || selectedStill) && (
        <ProjectModal 
          project={selectedProject} 
          still={selectedStill} 
          onClose={() => {
            setSelectedProject(null);
            setSelectedStill(null);
          }} 
        />
      )}

    </div>
  );
}
