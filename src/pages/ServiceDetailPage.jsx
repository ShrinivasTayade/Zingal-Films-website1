import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Film, 
  Tv, 
  Briefcase, 
  Sparkles, 
  Camera, 
  Music, 
  Sliders, 
  Phone, 
  Mail, 
  ChevronRight,
  ShieldCheck,
  Cpu,
  Layers,
  HelpCircle,
  Clock
} from 'lucide-react';
import SEO from '../components/SEO';
import { mainServices, technicalExpertise } from '../data/servicesData';
import { companyData } from '../data/companyData';
import { portfolioData } from '../data/portfolioData';
import { stillsData } from '../data/stillsData';

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const [openFaq, setOpenFaq] = useState(0);

  // Find the requested service
  const service = mainServices.find((s) => s.id === serviceId);

  // If invalid service ID, gracefully redirect to main services hub
  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related services (exclude current)
  const otherServices = mainServices.filter((s) => s.id !== service.id).slice(0, 3);

  // Select 3 relevant production posters/stills to showcase
  const relevantPosters = portfolioData.slice(0, 3);
  const relevantStills = stillsData.slice(0, 4);

  // Icon selector
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Film': return <Film className="w-6 h-6 text-gold" />;
      case 'Tv': return <Tv className="w-6 h-6 text-gold" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-gold" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-gold" />;
      case 'Camera': return <Camera className="w-6 h-6 text-gold" />;
      case 'Music': return <Music className="w-6 h-6 text-gold" />;
      case 'Sliders': return <Sliders className="w-6 h-6 text-gold" />;
      default: return <Film className="w-6 h-6 text-gold" />;
    }
  };

  // Build JSON-LD Structured Data for this specific service
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.title,
    name: `${service.title} - Zingal Films & Music India`,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'Zingal Films & Music India Pvt. Ltd.',
      telephone: '+91-9503736430',
      email: 'zingalfilmsmusicindia@gmail.com',
      url: 'https://zingalfilms.com',
      logo: 'https://zingalfilms.com/assets/images/logo-cropped.png',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nagpur',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN'
      }
    },
    areaServed: {
      '@type': 'Country',
      name: 'India'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: `${service.title} Capabilities`,
      itemListElement: service.scopeOfWork.map((item, idx) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: item
        }
      }))
    }
  };

  return (
    <div className="bg-black min-h-screen text-gray-200">
      {/* Dynamic SEO Meta & Schema */}
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        keywords={service.keywords}
        canonical={`/services/${service.id}`}
        ogImage={service.heroImage}
        schema={serviceSchema}
      />

      {/* 1. Cinematic Hero Section with Visual Backdrop */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 overflow-hidden">
        
        {/* Background Visual Image with Atmospheric Overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src={service.heroImage}
            alt={service.title}
            className="w-full h-full object-cover filter brightness-[0.25] scale-105 transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/85 to-black/60" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.12)_0%,transparent_70%)]" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center space-x-2 text-xs uppercase tracking-widest text-gray-400 mb-8" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-gold transition-colors">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-gold transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gold font-semibold">{service.title}</span>
          </nav>

          <div className="space-y-6 max-w-4xl">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-[11px] uppercase tracking-super-wide text-gold font-bold">
                {service.tagline}
              </span>
            </div>

            {/* Main H1 Heading */}
            <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-wide leading-tight">
              {service.title}
            </h1>

            {/* Narrative Overview */}
            <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">
              {service.overview}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center justify-center px-8 py-3.5 text-xs uppercase tracking-widest font-bold text-black bg-gradient-to-r from-[#dfba4f] via-[#fff2b2] to-[#c59d2a] rounded shadow-lg hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <span>Enquire for {service.title}</span>
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>

              <Link
                to="/work"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-widest font-semibold text-gray-300 border border-white/20 hover:border-gold hover:text-white rounded transition-all backdrop-blur-sm"
              >
                <span>View Project Showcase</span>
              </Link>
            </div>
          </div>

          {/* Quick Technical Highlights Banner */}
          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-8">
            <div className="p-4 rounded-lg bg-black/60 border border-white/5 backdrop-blur-sm">
              <span className="text-[10px] uppercase tracking-widest text-gold block mb-1">Sensor & Glass</span>
              <p className="font-cinzel text-sm text-white font-bold">Arri & Sony 4K/6K</p>
            </div>
            <div className="p-4 rounded-lg bg-black/60 border border-white/5 backdrop-blur-sm">
              <span className="text-[10px] uppercase tracking-widest text-gold block mb-1">Post Facility</span>
              <p className="font-cinzel text-sm text-white font-bold">In-House DI Color</p>
            </div>
            <div className="p-4 rounded-lg bg-black/60 border border-white/5 backdrop-blur-sm">
              <span className="text-[10px] uppercase tracking-widest text-gold block mb-1">Acoustic Specs</span>
              <p className="font-cinzel text-sm text-white font-bold">Dolby Surround Sound</p>
            </div>
            <div className="p-4 rounded-lg bg-black/60 border border-white/5 backdrop-blur-sm">
              <span className="text-[10px] uppercase tracking-widest text-gold block mb-1">Final Delivery</span>
              <p className="font-cinzel text-sm text-white font-bold">DCP & OTT Masters</p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Detailed Scope of Work / Deliverables */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block">
              Execution Standards
            </span>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white uppercase tracking-wide">
              Complete Scope of Work
            </h2>
            <p className="text-sm sm:text-base text-gray-400 font-sans">
              Every stage of your production is managed in-house by experienced technicians, creative directors, and master craftspeople.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.scopeOfWork.map((item, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-[#0c0c0c] border border-white/10 hover:border-gold/40 flex items-start gap-4 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-8 h-8 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <CheckCircle2 className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-1">
                    Deliverable 0{index + 1}
                  </span>
                  <p className="text-sm text-gray-200 font-sans group-hover:text-white transition-colors leading-relaxed">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Three-Stage Production Pipeline */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-black relative">
        <div className="max-w-6xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block">
              Structured Methodology
            </span>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white uppercase tracking-wide">
              Production Workflow & Pipeline
            </h2>
            <p className="text-sm sm:text-base text-gray-400 font-sans">
              Our systematic 3-phase production lifecycle guarantees uncompromising quality, deadline adherence, and transparent client collaboration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {service.pipeline.map((step, idx) => (
              <div 
                key={idx}
                className="relative p-8 rounded-xl bg-[#0a0a0a] border border-white/10 hover:border-gold/50 flex flex-col justify-between transition-all duration-300 group shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-gold uppercase tracking-widest">
                      {step.phase}
                    </span>
                    <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center font-cinzel text-xs text-gray-400 group-hover:text-gold group-hover:border-gold/30">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-cinzel text-xl text-white font-bold group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-sm text-gray-300 font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center text-xs text-gray-500 font-sans">
                  <Clock className="w-3.5 h-3.5 text-gold mr-2" />
                  <span>Quality Assured Milestone</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Equipment & Technology Ecosystem */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#050505]">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block">
                Technical Arsenal
              </span>
              <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white uppercase tracking-wide leading-tight">
                Cinema-Grade Gear & Facilities
              </h2>
              <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
                We eliminate third-party dependencies by owning and operating our full equipment inventory: from Arri Alexa cinema cameras and Zeiss prime lenses to soundstage lighting, DaVinci Resolve suites, and Dolby audio mastering facilities.
              </p>

              <div className="space-y-3 pt-2">
                {service.equipment.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-3.5 rounded-lg bg-[#0e0e0e] border border-white/5">
                    <Cpu className="w-4 h-4 text-gold flex-shrink-0" />
                    <span className="text-xs sm:text-sm font-sans text-gray-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/studio"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-white transition-colors"
                >
                  <span>Explore Complete Studio & Gear Inventory</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Studio Still Frame */}
            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden border border-gold/30 bg-[#080808] shadow-2xl">
                <img 
                  src="/assets/studio/studio-video-editing-color.png" 
                  alt="Zingal Post Production and Editing Suite" 
                  className="w-full h-auto object-cover"
                />
                <div className="p-5 bg-[#0a0a0a] border-t border-white/10 flex items-center justify-between">
                  <div>
                    <h4 className="font-cinzel text-sm text-white font-bold uppercase">In-House Production Studio</h4>
                    <p className="text-xs text-gray-400 font-sans mt-0.5">Central India's Premier Cinema Hub</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gold px-2.5 py-1 rounded bg-gold/10 border border-gold/30">
                    Nagpur, MH
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. Production Visuals Showcase (Stills / Posters) */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-black">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block mb-2">
                Proven Track Record
              </span>
              <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white uppercase tracking-wide">
                Production Highlights
              </h2>
            </div>
            
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-white transition-colors group"
            >
              <span>Explore All Productions & Stills</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relevantStills.map((still) => (
              <div 
                key={still.id}
                className="relative rounded-lg overflow-hidden border border-white/10 bg-[#0c0c0c] aspect-[4/3] group"
              >
                <img 
                  src={still.image} 
                  alt={still.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[9px] uppercase tracking-widest text-gold block">
                    {still.category}
                  </span>
                  <p className="font-cinzel text-xs text-white font-bold truncate">
                    {still.title}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Frequently Asked Questions (SEO Structured Content) */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#050505]">
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-16 space-y-3">
              <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block">
                Clear Answers
              </span>
              <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white uppercase tracking-wide">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-gray-400 font-sans">
                Common questions regarding our {service.title.toLowerCase()} pipeline, technical workflows, and deliverables.
              </p>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div 
                  key={idx}
                  className="rounded-xl bg-[#0c0c0c] border border-white/10 overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-white/5 transition-colors"
                    aria-expanded={openFaq === idx}
                  >
                    <span className="font-cinzel text-sm sm:text-base text-white font-bold">
                      {faq.q}
                    </span>
                    <span className={`text-gold text-lg transition-transform duration-200 ${openFaq === idx ? 'rotate-180' : ''}`}>
                      ↓
                    </span>
                  </button>

                  {openFaq === idx && (
                    <div className="p-5 pt-0 text-sm text-gray-300 font-sans leading-relaxed border-t border-white/5">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* 7. Other Services Cross-Navigation */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-black">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block mb-1">
                Explore More
              </span>
              <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-white uppercase">
                Other Production Verticals
              </h3>
            </div>

            <Link 
              to="/services" 
              className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-gold hover:text-white"
            >
              <span>View All 7 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherServices.map((other) => (
              <Link
                key={other.id}
                to={`/services/${other.id}`}
                className="p-6 rounded-xl bg-[#0c0c0c] border border-white/10 hover:border-gold/50 flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  <div className="w-10 h-10 rounded bg-black border border-gold/30 flex items-center justify-center mb-4 group-hover:border-gold">
                    {getIcon(other.icon)}
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gold font-semibold block mb-1">
                    {other.tagline}
                  </span>
                  <h4 className="font-cinzel text-lg text-white font-bold group-hover:text-gold transition-colors mb-2">
                    {other.title}
                  </h4>
                  <p className="text-xs text-gray-400 font-sans line-clamp-2">
                    {other.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs text-gold uppercase tracking-widest font-semibold">
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Conversion Banner */}
      <section className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] via-black to-black text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block">
            Begin Production
          </span>
          <h2 className="font-cinzel text-3xl sm:text-5xl font-bold text-white uppercase tracking-wide">
            Ready to Produce Your {service.title}?
          </h2>
          <p className="text-sm sm:text-base text-gray-300 font-sans max-w-2xl mx-auto leading-relaxed">
            Collaborate with our seasoned creative directors, cinematographers, and post-production specialists. Schedule a discovery call or request a detailed project quote today.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to={`/contact?service=${encodeURIComponent(service.title)}`}
              className="inline-flex items-center justify-center px-8 py-3.5 text-xs uppercase tracking-widest font-bold text-black bg-gradient-to-r from-[#dfba4f] via-[#fff2b2] to-[#c59d2a] rounded shadow-lg hover:shadow-gold/30 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>

            <a
              href={`tel:${companyData.phone}`}
              className="inline-flex items-center justify-center px-6 py-3.5 text-xs uppercase tracking-widest font-semibold text-gray-300 border border-white/20 hover:border-gold hover:text-white rounded transition-all"
            >
              <Phone className="w-4 h-4 mr-2 text-gold" />
              <span>Call +91 9503736430</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
