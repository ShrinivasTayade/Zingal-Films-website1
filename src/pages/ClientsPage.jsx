import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Shield, Landmark } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import { clientsData, clientCategories } from '../data/clientsData';

export default function ClientsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Partners");

  const filteredClients = useMemo(() => {
    if (selectedCategory === "All Partners") return clientsData;
    return clientsData.filter((c) => c.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-black min-h-screen text-gray-200 pt-28 pb-24">
      
      {/* 1. Header Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-white/5 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block">
            Governmental & Corporate Collaborations
          </span>
          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-wide leading-tight">
            Our Clientele
          </h1>
          <p className="text-base sm:text-lg text-gray-300 font-sans max-w-3xl mx-auto leading-relaxed">
            Honored to partner with government departments, municipal corporations, public sector undertakings, 
            infrastructure developers, and enterprise brands across Maharashtra and India.
          </p>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </div>
      </section>

      {/* 2. Client Categories Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="flex flex-wrap items-center justify-center gap-2 border-b border-white/10 pb-6">
          {clientCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all font-sans ${
                selectedCategory === cat
                  ? 'border border-gold bg-gold text-black font-bold shadow-md'
                  : 'border border-white/10 text-gray-400 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 3. Clients Responsive Grid */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {filteredClients.map((client, idx) => (
              <div
                key={idx}
                className="bg-[#0b0b0b] border border-white/10 hover:border-gold/50 rounded-lg p-6 flex flex-col items-center justify-between text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
              >
                {/* Logo Frame */}
                <div className="w-full h-24 flex items-center justify-center p-2 mb-4 bg-black/40 rounded border border-white/5 group-hover:border-gold/20 transition-colors">
                  <img 
                    src={client.logo} 
                    alt={client.name} 
                    className="max-h-full max-w-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>

                {/* Information */}
                <div className="w-full space-y-1">
                  <span className="text-[9px] uppercase tracking-widest text-gold font-semibold block">
                    {client.sector}
                  </span>

                  <h3 className="font-cinzel text-xs sm:text-sm text-white font-bold group-hover:text-gold transition-colors line-clamp-2">
                    {client.name}
                  </h3>

                  {client.marathiName && (
                    <p className="text-[10px] text-gray-500 font-sans line-clamp-1">
                      {client.marathiName}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Trust Summary Banner */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-white/5 bg-[#050505]">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block">
            Civic & Commercial Impact
          </span>
          <h2 className="font-cinzel text-2xl sm:text-4xl font-bold text-white uppercase tracking-wide">
            Delivering Institutional Excellence
          </h2>
          <p className="text-sm text-gray-400 font-sans max-w-2xl mx-auto leading-relaxed">
            From the District Election Office's 'Adhikar Hai' democratic empowerment campaigns 
            to high-stakes corporate brand films for state energy corporations, 
            Zingal delivers reliability, protocol compliance, and cinematic impact.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs uppercase tracking-widest font-bold text-black bg-gradient-to-r from-[#dfba4f] via-[#fff2b2] to-[#c59d2a] rounded shadow-lg"
            >
              <span>Partner With Zingal</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
