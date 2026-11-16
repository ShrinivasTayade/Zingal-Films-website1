import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Film, 
  Sparkles, 
  Sliders, 
  ChevronRight, 
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
import ProjectModal from '../components/ProjectModal';
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
  const previewStills = stillsData.slice(0, 8);
  const featuredClients = clientsData.slice(0, 16);

  return (
    <div className="relative bg-black min-h-screen text-gray-200">
      
      {/* 1. Main Hero: Opening Logo Video */}
      <HeroVideo />

      {/* 2. Brand Statement & Company Philosophy */}
      <section 
        id="company-statement" 
        className="relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Column with Slate Still from Profile */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-lg overflow-hidden border border-gold/30 bg-obsidian-900 shadow-2xl">
                <img 
                  src="/assets/images/cinematic-clapperboard.jpg" 
                  alt="Zingal Films Production Slate" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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

      {/* 3. Featured Productions Showcase (Cinematic Poster Grid) */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
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

          {/* Posters Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* 4. Core Services Overview */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-black relative">
        <div className="max-w-7xl mx-auto">
          
          <SectionHeading
            subtitle="Full Spectrum Production"
            title="Our Core Services"
            description="From high-concept development and scriptwriting to principal cinematography, editing, DI color grading, sound design, and OTT delivery."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {mainServices.slice(0, 6).map((service) => (
              <div 
                key={service.id}
                className="bg-[#0a0a0a] border border-white/10 hover:border-gold/40 rounded-lg p-6 sm:p-8 transition-all duration-300 hover:shadow-xl hover:shadow-black/50 flex flex-col justify-between group"
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
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs uppercase tracking-widest font-semibold border border-gold/40 text-gold hover:bg-gold hover:text-black transition-all rounded-sm"
            >
              <span>View All Services & Technical Expertise</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 5. Production Stills / Behind-the-Scenes Reel */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block mb-2">
                On Location & Soundstages
              </span>
              <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">
                Behind The Scenes
              </h2>
            </div>
            
            <Link
              to="/work#stills"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-white transition-colors group"
            >
              <span>Explore All 17 Production Stills</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stills Masonry-like Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {previewStills.map((still) => (
              <div
                key={still.id}
                onClick={() => setSelectedStill(still)}
                className="group relative aspect-[4/3] rounded overflow-hidden bg-black border border-white/10 hover:border-gold/60 cursor-pointer shadow-lg"
              >
                <img 
                  src={still.image} 
                  alt={still.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-semibold">
                    {still.category}
                  </span>
                  <p className="font-cinzel text-xs text-white font-medium line-clamp-1">
                    {still.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

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

      {/* 7. Verified Clientele Showcase */}
      <section className="py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          
          <SectionHeading
            subtitle="Trusted Partnerships"
            title="Our Clientele"
            description="Collaborating with government administrations, public sector undertakings, police authorities, municipal corporations, and enterprise leaders."
          />

          {/* Client Logos Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 sm:gap-6 items-center">
            {featuredClients.map((client, idx) => (
              <div 
                key={idx}
                className="p-3 sm:p-4 rounded bg-[#0a0a0a] border border-white/10 hover:border-gold/40 flex flex-col items-center justify-center aspect-square transition-all duration-300 group shadow-md"
                title={client.name}
              >
                <div className="w-full h-12 flex items-center justify-center p-1">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <span className="text-[9px] text-gray-400 group-hover:text-white text-center font-sans line-clamp-1 mt-2">
                  {client.name}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/clients"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-white transition-colors"
            >
              <span>Explore All 31 Verified Client Partners</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

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
