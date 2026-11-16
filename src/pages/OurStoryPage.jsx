import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Film, Sparkles, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import SEO from '../components/SEO';
import { companyData } from '../data/companyData';

export default function OurStoryPage() {
  return (
    <div className="bg-black min-h-screen text-gray-200 pt-28 pb-24">
      <SEO
        title="Our Story, Heritage & Vision"
        description="Learn about Zingal Films & Music India Pvt. Ltd. Founded with a vision to craft cinema that connects and stories that inspire across India."
        canonical="/story"
      />
      
      {/* 1. Hero Header */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-white/5 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block">
            About Our House
          </span>
          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-wide leading-tight">
            Our Story & Vision
          </h1>
          <p className="text-base sm:text-lg text-gray-300 font-sans max-w-3xl mx-auto leading-relaxed">
            {companyData.tagline}
          </p>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </div>
      </section>

      {/* 2. Core Narrative: About Section from Profile */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Visual Frame - 1:1 on mobile as requested */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-lg overflow-hidden border border-gold/40 bg-[#080808] shadow-2xl aspect-square md:aspect-[4/5] flex items-center justify-center">
                <img 
                  src="/assets/images/cinematic-clapperboard.jpg" 
                  alt="Zingal Films Production Slate" 
                  className="w-full h-full aspect-square md:aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/80 backdrop-blur-md rounded border border-white/10 text-center">
                  <p className="font-cormorant text-base sm:text-lg text-gold-light italic">
                    "{companyData.quote}"
                  </p>
                </div>
              </div>
            </div>

            {/* Narrative Copy */}
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block">
                Source of Creativity
              </span>
              <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-wide">
                Crafting Impact Across Platforms
              </h2>
              
              <p className="text-base text-gray-300 font-sans leading-relaxed">
                {companyData.aboutSummary}
              </p>

              <div className="p-6 rounded-lg bg-[#0a0a0a] border border-white/10 space-y-4">
                <h3 className="font-cinzel text-lg text-gold font-semibold uppercase tracking-wider">
                  Artistic Vision & Technical Precision
                </h3>
                <p className="text-sm text-gray-300 font-sans leading-relaxed">
                  {companyData.aboutFull}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Who We Are Section from Profile */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          
          <SectionHeading
            subtitle="The Creative Identity"
            title="Who We Are"
            description="We are creators, storytellers, and visual innovators dedicated to transforming ideas into unforgettable cinematic experiences."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="p-8 rounded-lg bg-black border border-white/10 hover:border-gold/40 transition-colors space-y-4">
              <div className="w-12 h-12 rounded bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-xl text-white font-bold uppercase tracking-wider">
                Uncompromising Quality
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                At our core, we believe every story deserves to be told with creativity, passion, 
                and world-class production quality that resonates across global screens.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-black border border-white/10 hover:border-gold/40 transition-colors space-y-4">
              <div className="w-12 h-12 rounded bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                <Film className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-xl text-white font-bold uppercase tracking-wider">
                End-to-End In-House
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                From concept development and scriptwriting to filming, editing, music production, 
                sound design, color grading, VFX, and final delivery, every stage is handled in-house to guarantee consistency and excellence.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-black border border-white/10 hover:border-gold/40 transition-colors space-y-4">
              <div className="w-12 h-12 rounded bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-cinzel text-xl text-white font-bold uppercase tracking-wider">
                Industry-Level Ecosystem
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                Featuring cinema-grade Arri and Sony camera systems, Zeiss optics, dedicated DI color suites, 
                and treated music production studios, enabling content that matches the highest industry benchmarks.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. The Creative & Dedicated Team Pillar */}
      <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b border-white/5">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block">
            Our Core Pillar
          </span>

          <h2 className="font-cinzel text-3xl sm:text-4xl md:text-5xl font-bold text-white uppercase tracking-wide">
            Creative & Dedicated Team
          </h2>

          <p className="text-base sm:text-lg text-gray-300 font-sans leading-relaxed">
            The biggest strength of Zingal Films & Music India lies in its highly creative and dedicated team, 
            whose passion, artistic discipline, and technical depth help create unique and memorable content 
            for audiences and clients alike.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6">
            <div className="p-6 rounded bg-[#0a0a0a] border border-white/10">
              <span className="font-cinzel text-2xl sm:text-3xl text-gold font-bold block mb-1">100%</span>
              <span className="text-xs uppercase tracking-widest text-gray-400 font-sans">In-House Production</span>
            </div>
            <div className="p-6 rounded bg-[#0a0a0a] border border-white/10">
              <span className="font-cinzel text-2xl sm:text-3xl text-gold font-bold block mb-1">30+</span>
              <span className="text-xs uppercase tracking-widest text-gray-400 font-sans">Partner Institutions</span>
            </div>
            <div className="p-6 rounded bg-[#0a0a0a] border border-white/10">
              <span className="font-cinzel text-2xl sm:text-3xl text-gold font-bold block mb-1">4K/5.1K</span>
              <span className="text-xs uppercase tracking-widest text-gray-400 font-sans">Cinema Mastering</span>
            </div>
            <div className="p-6 rounded bg-[#0a0a0a] border border-white/10">
              <span className="font-cinzel text-2xl sm:text-3xl text-gold font-bold block mb-1">Nagpur</span>
              <span className="text-xs uppercase tracking-widest text-gray-400 font-sans">Central India Hub</span>
            </div>
          </div>

          <div className="pt-8">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-xs uppercase tracking-widest font-bold text-black bg-gradient-to-r from-[#dfba4f] via-[#fff2b2] to-[#c59d2a] rounded shadow-xl"
            >
              <span>Connect with Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
