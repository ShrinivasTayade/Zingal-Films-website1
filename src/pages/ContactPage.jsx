import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Shield, CheckCircle } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';
import { companyData } from '../data/companyData';

export default function ContactPage() {
  return (
    <div className="bg-black min-h-screen text-gray-200 pt-28 pb-24">
      <SEO
        title="Contact Production Desk & Project Enquiries"
        description="Connect with Zingal Films & Music India Pvt. Ltd. in Nagpur. Phone: +91 9503736430, Email: zingalfilmsmusicindia@gmail.com. Request project quotes for films, TVCs & audio."
        canonical="/contact"
      />
      
      {/* 1. Header Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-white/5 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block">
            Direct Line to Production
          </span>
          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-wide leading-tight">
            Contact & Enquiries
          </h1>
          <p className="text-base sm:text-lg text-gray-300 font-sans max-w-3xl mx-auto leading-relaxed">
            Let's discuss your next film, commercial campaign, musical release, or studio booking. 
            Connect directly with the Zingal Films & Music India production desk in Nagpur.
          </p>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>

            {/* Right Column: Verified Details & Studio Info */}
            <div className="lg:col-span-5 space-y-8">
              
              {/* Verified Details Card */}
              <div className="bg-[#0b0b0b] border border-gold/30 rounded-lg p-6 sm:p-8 space-y-6 shadow-xl">
                <span className="text-[10px] uppercase tracking-super-wide text-gold font-semibold block">
                  Official Channels
                </span>
                <h3 className="font-cinzel text-xl sm:text-2xl text-white font-bold uppercase tracking-wide">
                  Headquarters
                </h3>

                <div className="space-y-6 text-sm font-sans">
                  
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-black border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 uppercase tracking-widest block mb-0.5">
                        Direct Phone / WhatsApp
                      </span>
                      <a 
                        href={`tel:${companyData.phone.replace(/\s+/g, '')}`} 
                        className="text-white hover:text-gold font-semibold text-base transition-colors"
                      >
                        {companyData.phone}
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-black border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 uppercase tracking-widest block mb-0.5">
                        Production Desk Email
                      </span>
                      <a 
                        href={`mailto:${companyData.email}`} 
                        className="text-white hover:text-gold font-semibold text-sm transition-colors break-all"
                      >
                        {companyData.email}
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded bg-black border border-gold/30 flex items-center justify-center text-gold flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs text-gray-400 uppercase tracking-widest block mb-0.5">
                        Location & Facilities
                      </span>
                      <p className="text-white font-semibold text-sm">
                        {companyData.location}
                      </p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        Central India Production Hub
                      </p>
                    </div>
                  </div>

                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400 font-sans">
                  <span>CIN / Registration: Registered Private Limited</span>
                  <span className="text-gold font-medium">Nagpur, MH</span>
                </div>
              </div>

              {/* Working Hours & Process Note */}
              <div className="bg-[#080808] border border-white/10 rounded-lg p-6 sm:p-8 space-y-4">
                <div className="flex items-center gap-3 text-gold">
                  <Clock className="w-5 h-5" />
                  <h4 className="font-cinzel text-base text-white font-bold uppercase tracking-wider">
                    Intake & Turnaround
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">
                  Project proposals, screenplays, and commercial briefs submitted through our channels are typically evaluated by our creative producers within 24 to 48 business hours.
                </p>
                <div className="space-y-2 pt-2 text-xs text-gray-300 font-sans">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <span>Confidentiality & Non-Disclosure Compliant</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-gold flex-shrink-0" />
                    <span>Complete Line Production Solutions for Out-of-State Units</span>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
