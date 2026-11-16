import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, Sliders, Volume2, Film, CheckCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { equipmentList, studioFacilities } from '../data/studioData';

export default function StudioPage() {
  return (
    <div className="bg-black min-h-screen text-gray-200 pt-28 pb-24">
      
      {/* 1. Header Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-white/5 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block">
            Infrastructure & Technology
          </span>
          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-wide leading-tight">
            Studio & Equipment
          </h1>
          <p className="text-base sm:text-lg text-gray-300 font-sans max-w-3xl mx-auto leading-relaxed">
            Equipped with professional cinema cameras, Zeiss primes, acoustically treated recording suites, 
            and advanced color grading workstations in Nagpur, Maharashtra.
          </p>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </div>
      </section>

      {/* 2. Camera & Cinematography Showcase */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block">
                Visual Precision
              </span>
              <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white uppercase tracking-wide">
                Professional Cameras for Every Story
              </h2>
              <p className="text-sm sm:text-base text-gray-300 font-sans leading-relaxed">
                We believe powerful storytelling begins with the right visual language. Our production house is equipped with professional cinema and production cameras designed to deliver exceptional image quality, cinematic depth, reliable performance, and creative flexibility.
              </p>
              <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                From feature films, short films and documentaries to music videos, corporate films, advertisements and digital content, our camera setup allows us to create visuals that match the mood, scale and creative requirements of every project.
              </p>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-lg overflow-hidden border border-gold/30 bg-[#080808] p-4 flex items-center justify-center">
                <img 
                  src="/assets/equipment/equipment-cinema-cameras-lenses.png" 
                  alt="Zingal Cinema Cameras and Optics Package" 
                  className="w-full max-h-[420px] object-contain filter drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
                />
              </div>
            </div>

          </div>

          {/* Equipment Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {equipmentList.map((item) => (
              <div 
                key={item.name}
                className="bg-[#0b0b0b] border border-white/10 hover:border-gold/50 rounded-lg p-6 sm:p-8 transition-all duration-300 flex flex-col justify-between group shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 text-[10px] uppercase tracking-widest text-gold bg-gold/10 border border-gold/20 rounded font-semibold">
                      {item.badge}
                    </span>
                    <Camera className="w-5 h-5 text-gray-500 group-hover:text-gold transition-colors" />
                  </div>

                  <h3 className="font-cinzel text-xl text-white font-bold mb-1 group-hover:text-gold transition-colors">
                    {item.name}
                  </h3>

                  <p className="text-xs text-gold-light font-medium tracking-wide mb-4">
                    {item.lenses}
                  </p>

                  <p className="text-xs text-gray-400 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. Studio & Editing Suites Showcase */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto space-y-16">
          
          <SectionHeading
            subtitle="Creative Infrastructure"
            title="Studio & Editing Suites"
            description="We have a complete professional setup for filmmaking, music production, and post-production, allowing us to deliver high-quality creative work from concept to final output."
          />

          <div className="space-y-16">
            {studioFacilities.map((facility, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={facility.id}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Photo Column */}
                  <div className={`lg:col-span-7 ${isEven ? '' : 'lg:order-2'}`}>
                    <div className="relative rounded-lg overflow-hidden border border-gold/30 bg-black shadow-2xl group">
                      <img 
                        src={facility.image} 
                        alt={facility.name} 
                        className="w-full aspect-[16/10] object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
                    </div>
                  </div>

                  {/* Details Column */}
                  <div className={`lg:col-span-5 space-y-5 ${isEven ? '' : 'lg:order-1'}`}>
                    <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block">
                      {facility.tagline}
                    </span>

                    <h3 className="font-cinzel text-2xl sm:text-3xl text-white font-bold leading-tight">
                      {facility.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">
                      {facility.description}
                    </p>

                    <div className="space-y-2.5 pt-3">
                      {facility.specs.map((spec, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5 text-xs text-gray-400 font-sans">
                          <CheckCircle className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Booking / Equipment Enquiry CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 text-center bg-black">
        <div className="max-w-4xl mx-auto space-y-6">
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white uppercase tracking-wide">
            Book Our Studio or Camera Package
          </h2>
          <p className="text-sm text-gray-400 font-sans max-w-xl mx-auto leading-relaxed">
            Our facilities in Nagpur are available for film productions, advertising shoots, music album recordings, and master DI grading sessions.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs uppercase tracking-widest font-bold text-black bg-gradient-to-r from-[#dfba4f] via-[#fff2b2] to-[#c59d2a] rounded shadow-lg"
            >
              <span>Check Studio Availability</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
