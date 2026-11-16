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
  CheckCircle
} from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { mainServices, technicalExpertise } from '../data/servicesData';

export default function ServicesPage() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Film': return <Film className="w-6 h-6 text-gold" />;
      case 'Tv': return <Tv className="w-6 h-6 text-gold" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-gold" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-gold" />;
      case 'Camera': return <Camera className="w-6 h-6 text-gold" />;
      case 'Music': return <Music className="w-6 h-6 text-gold" />;
      case 'Sliders': return <Sliders className="w-6 h-6 text-gold" />;
      case 'FileText': return <FileText className="w-5 h-5 text-gold" />;
      case 'Compass': return <Compass className="w-5 h-5 text-gold" />;
      case 'Video': return <Video className="w-5 h-5 text-gold" />;
      case 'Scissors': return <Scissors className="w-5 h-5 text-gold" />;
      case 'Palette': return <Palette className="w-5 h-5 text-gold" />;
      case 'Headphones': return <Headphones className="w-5 h-5 text-gold" />;
      case 'Wand2': return <Wand2 className="w-5 h-5 text-gold" />;
      case 'Plane': return <Plane className="w-5 h-5 text-gold" />;
      default: return <Film className="w-6 h-6 text-gold" />;
    }
  };

  return (
    <div className="bg-black min-h-screen text-gray-200 pt-28 pb-24">
      
      {/* 1. Header Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-white/5 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block">
            End-to-End Capabilities
          </span>
          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-wide leading-tight">
            Production & Post Services
          </h1>
          <p className="text-base sm:text-lg text-gray-300 font-sans max-w-3xl mx-auto leading-relaxed">
            Delivering complete production solutions for feature films, episodic web series, television commercials, corporate films, documentaries, and music videos.
          </p>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </div>
      </section>

      {/* 2. Primary Production Solutions */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <SectionHeading
            subtitle="Flagship Offerings"
            title="Production Verticals"
            description="Every vertical is backed by in-house cinema gear, seasoned creative directors, and industry-standard finishing workflows."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={service.id}
                className="bg-[#0c0c0c] border border-white/10 hover:border-gold/50 rounded-lg p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-black flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded bg-black border border-gold/30 flex items-center justify-center p-2 group-hover:border-gold transition-colors">
                      {getIcon(service.icon)}
                    </div>
                    <span className="font-cinzel text-xs text-gray-600 font-bold">
                      0{index + 1}
                    </span>
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

                  <div className="space-y-2.5 pt-4 border-t border-white/5">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2 text-xs text-gray-300 font-sans">
                        <CheckCircle className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-gold hover:text-white transition-colors"
                  >
                    <span>Commission Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Technical & Creative Expertise Breakdown (from PDF pages 7 & 8) */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <SectionHeading
            subtitle="The Craftsmanship"
            title="Our Technical Expertise"
            description="From initial blank page to master theatrical DCP and Dolby Atmos mixes, our in-house departments execute with precision."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalExpertise.map((tech) => (
              <div
                key={tech.title}
                className="bg-black border border-white/10 hover:border-gold/40 rounded-lg p-6 transition-all duration-300 space-y-4 group"
              >
                <div className="w-10 h-10 rounded bg-[#0e0e0e] border border-gold/30 flex items-center justify-center text-gold group-hover:scale-105 transition-transform">
                  {getIcon(tech.icon)}
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-widest text-gold block">
                    {tech.subtitle}
                  </span>
                  <h4 className="font-cinzel text-lg text-white font-bold group-hover:text-gold transition-colors">
                    {tech.title}
                  </h4>
                </div>

                <p className="text-xs text-gray-400 font-sans leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-black">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white uppercase tracking-wide">
            Need a Bespoke Production Package?
          </h2>
          <p className="text-sm text-gray-400 font-sans max-w-xl mx-auto leading-relaxed">
            Whether you require dedicated DI color grading, full feature production, or drone aerial sweeps, we tailor our equipment and crew to your vision.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs uppercase tracking-widest font-bold text-black bg-gradient-to-r from-[#dfba4f] via-[#fff2b2] to-[#c59d2a] rounded shadow-lg"
            >
              <span>Request Service Quotation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
