import React, { useEffect } from 'react';
import { X, Calendar, User, Film, Tag, Sparkles } from 'lucide-react';

export default function ProjectModal({ project, still, onClose }) {
  useEffect(() => {
    // Only lock scrolling when modal is actually open
    if (!project && !still) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    
    // Save previous overflow and lock
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow || 'unset';
    };
  }, [project, still, onClose]);

  if (!project && !still) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/95 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div 
        className="relative max-w-4xl w-full max-h-[90vh] bg-[#0c0c0c] border border-gold/40 rounded-lg overflow-y-auto shadow-2xl shadow-black text-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 bg-black/80 hover:bg-gold text-white hover:text-black rounded-full border border-white/20 transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {project ? (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
            {/* Poster / Image Column */}
            <div className="md:col-span-5 bg-black flex items-center justify-center p-4 md:p-6 border-b md:border-b-0 md:border-r border-white/10">
              <img 
                src={project.poster} 
                alt={project.title} 
                className="w-full max-h-[550px] object-contain rounded shadow-lg filter drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]"
              />
            </div>

            {/* Content & Credits Column */}
            <div className="md:col-span-7 p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-gold mb-2">
                  <span className="px-2.5 py-0.5 rounded-full border border-gold/30 bg-gold/10 font-medium">
                    {project.category}
                  </span>
                  <span>&bull;</span>
                  <span className="text-gray-400">{project.year}</span>
                </div>

                <h2 className="font-cinzel text-2xl sm:text-3xl text-white font-bold tracking-wide mb-3">
                  {project.title}
                </h2>

                <p className="text-sm text-gold-light italic font-cormorant text-lg mb-4">
                  "{project.logline}"
                </p>

                <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Verified Credits Table */}
                <div className="pt-4 border-t border-white/10 space-y-2.5 text-xs font-sans">
                  <h4 className="font-cinzel text-xs uppercase tracking-super-wide text-gold font-semibold mb-3">
                    Verified Production Credits
                  </h4>

                  {project.credits.director && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">Direction:</span>
                      <span className="text-white font-medium text-right">{project.credits.director}</span>
                    </div>
                  )}

                  {project.credits.presenter && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">Presented By:</span>
                      <span className="text-white font-medium text-right">{project.credits.presenter}</span>
                    </div>
                  )}

                  {project.credits.banner && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">Banner / Label:</span>
                      <span className="text-white font-medium text-right">{project.credits.banner}</span>
                    </div>
                  )}

                  {project.credits.producers && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">Produced By:</span>
                      <span className="text-white font-medium text-right">{project.credits.producers}</span>
                    </div>
                  )}

                  {project.credits.producer && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">Produced By:</span>
                      <span className="text-white font-medium text-right">{project.credits.producer}</span>
                    </div>
                  )}

                  {project.credits.storyScreenplay && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">Story & Screenplay:</span>
                      <span className="text-white font-medium text-right">{project.credits.storyScreenplay}</span>
                    </div>
                  )}

                  {project.credits.dop && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">Cinematography (DOP):</span>
                      <span className="text-white font-medium text-right">{project.credits.dop}</span>
                    </div>
                  )}

                  {project.credits.dopEditing && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">DOP & Editing:</span>
                      <span className="text-white font-medium text-right">{project.credits.dopEditing}</span>
                    </div>
                  )}

                  {project.credits.editor && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">Editing:</span>
                      <span className="text-white font-medium text-right">{project.credits.editor}</span>
                    </div>
                  )}

                  {project.credits.music && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">Music:</span>
                      <span className="text-white font-medium text-right">{project.credits.music}</span>
                    </div>
                  )}

                  {project.credits.singers && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">Singers:</span>
                      <span className="text-white font-medium text-right">{project.credits.singers}</span>
                    </div>
                  )}

                  {project.credits.singer && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">Singer:</span>
                      <span className="text-white font-medium text-right">{project.credits.singer}</span>
                    </div>
                  )}

                  {project.credits.lyrics && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">Lyrics:</span>
                      <span className="text-white font-medium text-right">{project.credits.lyrics}</span>
                    </div>
                  )}

                  {project.credits.cast && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">Starring:</span>
                      <span className="text-white font-medium text-right">{project.credits.cast}</span>
                    </div>
                  )}

                  {project.credits.platforms && (
                    <div className="flex justify-between py-1 border-b border-white/5">
                      <span className="text-gray-400">Distribution:</span>
                      <span className="text-gold font-medium text-right">{project.credits.platforms}</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between text-xs text-gray-500">
                <span>Zingal Films & Music India Archive</span>
                <button
                  onClick={onClose}
                  className="px-4 py-2 border border-gold/40 text-gold hover:bg-gold hover:text-black rounded text-xs uppercase tracking-widest transition-colors font-semibold"
                >
                  Close Detail
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* Production Still Lightbox */
          <div className="p-4 sm:p-6 md:p-8 space-y-4">
            <div className="max-h-[70vh] flex items-center justify-center bg-black rounded overflow-hidden">
              <img 
                src={still.image} 
                alt={still.title} 
                className="w-full h-full max-h-[65vh] object-contain"
              />
            </div>
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-t border-white/10">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold block mb-1">
                  {still.category} &bull; Zingal Production Set
                </span>
                <h3 className="font-cinzel text-lg sm:text-xl text-white font-bold">
                  {still.title}
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 font-sans mt-1">
                  {still.caption}
                </p>
              </div>
              <button
                onClick={onClose}
                className="self-start sm:self-auto px-4 py-2 border border-gold/40 text-gold hover:bg-gold hover:text-black rounded text-xs uppercase tracking-widest transition-colors font-semibold"
              >
                Close Still
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
