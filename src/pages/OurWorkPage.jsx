import React, { useState, useMemo } from 'react';
import { Eye, Filter, Sparkles, Film, Image as ImageIcon } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';
import ProjectModal from '../components/ProjectModal';
import { portfolioData, portfolioCategories } from '../data/portfolioData';
import { stillsData } from '../data/stillsData';

export default function OurWorkPage() {
  const [activeTab, setActiveTab] = useState('posters'); // 'posters' or 'stills'
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedStill, setSelectedStill] = useState(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return portfolioData;
    return portfolioData.filter((p) => p.categorySlug === activeCategory);
  }, [activeCategory]);

  return (
    <div className="bg-black min-h-screen text-gray-200 pt-28 pb-24">
      
      {/* 1. Header Hero */}
      <section className="relative px-4 sm:px-6 lg:px-8 py-16 md:py-24 border-b border-white/5 overflow-hidden">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <span className="text-xs uppercase tracking-super-wide text-gold font-semibold block">
            The Cinematic Archive
          </span>
          <h1 className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-bold text-white uppercase tracking-wide leading-tight">
            Our Work & Showcase
          </h1>
          <p className="text-base sm:text-lg text-gray-300 font-sans max-w-3xl mx-auto leading-relaxed">
            Explore our showcase of feature films, theatrical projects, music singles, public campaigns, 
            and authentic behind-the-scenes production stills.
          </p>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </div>
      </section>

      {/* 2. Dual Tab Navigation: Showcase Posters vs Production Stills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-white/10 pb-6">
          
          {/* Main View Switcher */}
          <div className="flex items-center gap-2 p-1.5 bg-[#0e0e0e] border border-white/10 rounded-lg">
            <button
              onClick={() => setActiveTab('posters')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded text-xs uppercase tracking-widest font-semibold transition-all ${
                activeTab === 'posters'
                  ? 'bg-gold text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Film className="w-4 h-4" />
              <span>Production Posters ({portfolioData.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('stills')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded text-xs uppercase tracking-widest font-semibold transition-all ${
                activeTab === 'stills'
                  ? 'bg-gold text-black shadow-md'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Production Stills ({stillsData.length})</span>
            </button>
          </div>

          {/* Sub-Filters for Posters */}
          {activeTab === 'posters' && (
            <div className="flex flex-wrap items-center gap-2" aria-label="Category Filters">
              {portfolioCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider transition-all font-sans ${
                    activeCategory === cat.slug
                      ? 'border border-gold bg-gold/10 text-gold font-medium'
                      : 'border border-white/10 text-gray-400 hover:text-white hover:border-white/30'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 3. Main Content Display */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          {activeTab === 'posters' ? (
            /* Posters Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
              {filteredProjects.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="group bg-[#0b0b0b] rounded-lg border border-white/10 hover:border-gold/60 overflow-hidden cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                >
                  <div className="relative aspect-[3/4] bg-black flex items-center justify-center overflow-hidden">
                    <img 
                      src={project.poster} 
                      alt={project.title} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 filter drop-shadow-md"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                      <span className="inline-block px-2 py-0.5 text-[9px] uppercase tracking-widest text-black bg-gold font-bold rounded-sm mb-2 self-start">
                        {project.category}
                      </span>
                      <h4 className="font-cinzel text-lg text-white font-bold mb-1">
                        {project.title}
                      </h4>
                      <p className="text-xs text-gray-300 font-sans line-clamp-2 mb-3">
                        {project.logline}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-gold font-medium">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Inspect Full Credits</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border-t border-white/5 bg-[#080808]">
                    <span className="text-[10px] uppercase tracking-widest text-gold block">
                      {project.category}
                    </span>
                    <h3 className="font-cinzel text-sm sm:text-base text-white font-bold group-hover:text-gold transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Production Stills Grid */
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
              {stillsData.map((still) => (
                <div
                  key={still.id}
                  onClick={() => setSelectedStill(still)}
                  className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-black border border-white/10 hover:border-gold/60 cursor-pointer shadow-lg transition-all duration-300 hover:scale-[1.02]"
                >
                  <img 
                    src={still.image} 
                    alt={still.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-end">
                    <span className="text-[9px] uppercase tracking-widest text-gold font-semibold mb-1">
                      {still.category}
                    </span>
                    <p className="font-cinzel text-xs text-white font-medium line-clamp-1">
                      {still.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Lightbox / Credits Modal */}
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
