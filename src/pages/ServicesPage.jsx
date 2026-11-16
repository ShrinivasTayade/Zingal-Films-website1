import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Film, 
  Tv, 
  Briefcase, 
  Sparkles, 
  Camera, 
  Music, 
  Sliders, 
  ArrowRight,
  FileText,
  Compass,
  Video,
  Scissors,
  Palette,
  Headphones,
  Wand2,
  Plane,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import { mainServices, technicalExpertise } from '../data/servicesData';
import { companyData } from '../data/companyData';

export default function ServicesPage() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Film': return <Film className="w-5 h-5 text-gold" />;
      case 'Tv': return <Tv className="w-5 h-5 text-gold" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 text-gold" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5 text-gold" />;
      case 'Camera': return <Camera className="w-5 h-5 text-gold" />;
      case 'Music': return <Music className="w-5 h-5 text-gold" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-gold" />;
      case 'FileText': return <FileText className="w-5 h-5 text-gold" />;
      case 'Compass': return <Compass className="w-5 h-5 text-gold" />;
      case 'Video': return <Video className="w-5 h-5 text-gold" />;
      case 'Scissors': return <Scissors className="w-5 h-5 text-gold" />;
      case 'Palette': return <Palette className="w-5 h-5 text-gold" />;
      case 'Headphones': return <Headphones className="w-5 h-5 text-gold" />;
      case 'Wand2': return <Wand2 className="w-5 h-5 text-gold" />;
      case 'Plane': return <Plane className="w-5 h-5 text-gold" />;
      default: return <Film className="w-5 h-5 text-gold" />;
    }
  };

  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Zingal Films & Music Production Services',
    description: 'Comprehensive film, commercial, documentary, and post-production services offered by Zingal Films & Music India Pvt. Ltd.',
    numberOfItems: mainServices.length,
    itemListElement: mainServices.map((service, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: service.title,
      url: `https://zingalfilms.com/services/${service.id}`,
      description: service.description
    }))
  };

  return (
    <div className="bg-black min-h-screen text-gray-200">
      {/* SEO Meta & Schema */}
      <SEO
        title="Film, OTT, Commercial & Post-Production Services"
        description="Comprehensive cinematic production services: Feature Films, OTT Web Series, TV Commercials, Corporate Films, Documentaries, Music Videos, and full in-house post-production."
        keywords="Film Production Services, Web Series Production India, TV Commercials Production, Corporate Films Nagpur, Music Video Production, Post Production Studio, DI Color Grading, Sound Design"
        canonical="/services"
        schema={servicesSchema}
      />

      {/* 1. Cinematic Hero Section with Visual Backdrop & Gradient Mesh */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        
        {/* Subtle Atmospheric Backdrop */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/studio/studio-video-editing-color.png"
            alt="Zingal Production Services Facility"
            className="w-full h-full object-cover filter brightness-[0.20] scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/70" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12)_0%,transparent_75%)]" />
        </div>

        <div className="max-w-5xl mx-auto text-center space-y-6 relative z-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center justify-center space-x-2 text-xs uppercase tracking-widest text-gray-400 mb-2">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold font-semibold">Services</span>
          </nav>

          <span className="inline-block px-3.5 py-1 rounded-full border border-gold/40 bg-gold/10 text-[11px] uppercase tracking-super-wide text-gold font-bold">
            End-to-End Cinematic Capabilities
          </span>

          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-wide leading-tight">
            Production & Post Services
          </h1>

          <p className="text-base sm:text-lg text-gray-300 font-sans max-w-3xl mx-auto leading-relaxed">
            Delivering complete, high-craft production solutions for feature films, episodic web series, television commercials, corporate films, documentaries, music videos, and master post-production.
          </p>

          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent mx-auto pt-2" />

          {/* Quick Service Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4 text-xs font-sans">
            {mainServices.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-gold/50 text-gray-300 hover:text-gold transition-colors text-[11px] uppercase tracking-wider"
              >
                {service.title}
              </a>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Primary Production Verticals Grid (Linking to Dedicated Service Pages) */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block mb-2">
                Flagship Offerings
              </span>
              <h2 className="font-cinzel text-3xl sm:text-4xl font-bold text-white uppercase tracking-wide">
                Production Verticals
              </h2>
              <p className="text-sm text-gray-400 font-sans mt-2 max-w-2xl">
                Every vertical is backed by in-house cinema gear, seasoned creative directors, and industry-standard finishing workflows. Click any service to view its dedicated scope and technical pipeline.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                id={service.id}
                key={service.id}
                className="bg-[#0c0c0c] border border-white/10 hover:border-gold/50 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gold/10 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Card Visual Header with Atmospheric Photo */}
                  <div className="relative w-full h-48 overflow-hidden bg-black/60">
                    <img 
                      src={service.heroImage} 
                      alt={service.title} 
                      className="w-full h-full object-cover filter brightness-[0.75] group-hover:scale-105 group-hover:brightness-95 transition-all duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0c] via-black/40 to-transparent" />
                    
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <div className="w-9 h-9 rounded-lg bg-black/80 border border-gold/40 flex items-center justify-center p-1.5 backdrop-blur-sm">
                        {getIcon(service.icon)}
                      </div>
                    </div>

                    <div className="absolute top-4 right-4">
                      <span className="font-cinzel text-xs text-gold/80 font-bold bg-black/70 px-2.5 py-1 rounded border border-white/10 backdrop-blur-sm">
                        0{index + 1}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-[10px] uppercase tracking-super-wide text-gold font-semibold block">
                        {service.tagline}
                      </span>
                      <h3 className="font-cinzel text-xl text-white font-bold group-hover:text-gold transition-colors">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    <div className="pt-2 border-t border-white/5 space-y-2">
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 font-semibold block">
                        Core Capabilities:
                      </span>
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-300 font-sans">
                          <CheckCircle className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="leading-tight">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link to Dedicated Page */}
                <div className="p-6 pt-0">
                  <Link
                    to={`/services/${service.id}`}
                    className="w-full inline-flex items-center justify-between px-4 py-3 rounded bg-white/5 border border-white/10 hover:border-gold/60 text-gold hover:text-white hover:bg-gold/10 transition-all text-xs uppercase tracking-widest font-bold group/btn"
                  >
                    <span>View Dedicated {service.title} Page</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. In-House Technical Specializations & Post Pipeline */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-black">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <SectionHeading
            subtitle="Artisanal Precision"
            title="Technical Specializations"
            description="Our production infrastructure encompasses every individual craft required for cinematic excellence."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalExpertise.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#0a0a0a] border border-white/10 hover:border-gold/40 rounded-xl p-6 transition-all duration-300 hover:shadow-xl group hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded bg-black border border-gold/30 flex items-center justify-center mb-4 group-hover:border-gold transition-colors">
                  {getIcon(item.icon)}
                </div>

                <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block mb-1">
                  {item.subtitle}
                </span>

                <h3 className="font-cinzel text-lg text-white font-bold mb-2 group-hover:text-gold transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-400 font-sans leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.highlight && (
                  <div className="pt-3 border-t border-white/5 text-[11px] font-sans text-gray-500">
                    <span className="text-gold font-medium">Focus: </span>
                    {item.highlight}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Infrastructure Cross-Link */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-[#0d0d0d] via-[#141414] to-[#0d0d0d] border border-gold/30 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-xs uppercase tracking-widest text-gold font-semibold">
                In-House Facilities
              </span>
              <h3 className="font-cinzel text-xl sm:text-2xl text-white font-bold">
                Owned Studio, Editing Suites & Soundstages
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-sans max-w-2xl">
                Explore our Arri Alexa cinema cameras, Zeiss primes, soundstages, DaVinci Resolve suites, and audio recording studios.
              </p>
            </div>

            <Link
              to="/studio"
              className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-widest font-bold text-black bg-gradient-to-r from-[#dfba4f] via-[#fff2b2] to-[#c59d2a] rounded shadow-md whitespace-nowrap flex-shrink-0"
            >
              <span>Explore Studio & Gear</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      {/* 4. Contact & Consultation Call to Action */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black via-[#080808] to-black text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block">
            Begin Your Production
          </span>

          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-white uppercase tracking-wide leading-tight">
            Have a Project in Mind?
          </h2>

          <p className="text-sm sm:text-base text-gray-300 font-sans max-w-2xl mx-auto leading-relaxed">
            From complete theatrical feature films to corporate documentaries and commercial advertisements, 
            partner with Zingal Films & Music India to bring your cinematic vision to reality.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 text-xs uppercase tracking-widest font-bold text-black bg-gradient-to-r from-[#dfba4f] via-[#fff2b2] to-[#c59d2a] rounded shadow-lg hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Request Project Proposal</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <a
              href={`tel:${companyData.phone}`}
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-widest font-semibold text-gray-300 border border-white/20 hover:border-gold hover:text-white rounded transition-all"
            >
              <span>Call +91 9503736430</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
