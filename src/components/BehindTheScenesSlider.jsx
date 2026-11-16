import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Eye, Film, Sparkles } from 'lucide-react';
import { stillsData } from '../data/stillsData';

export default function BehindTheScenesSlider({ onSelectStill }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const total = stillsData.length;

  // Items visible per view based on breakpoint:
  // Mobile: 1 item, Tablet: 2 items, Desktop: 3 items
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(1);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2);
      } else {
        setVisibleItems(3);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, total - visibleItems);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Keyboard navigation when slider has focus
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  };

  const activeStill = stillsData[currentIndex];

  return (
    <div 
      className="relative select-none"
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label="Behind the Scenes Image Slider"
    >
      {/* Slider Top Controls Bar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <span className="font-cinzel text-xs uppercase tracking-widest text-gold font-bold bg-gold/10 px-3 py-1 rounded-full border border-gold/30">
            Still {String(currentIndex + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
          <span className="text-xs text-gray-400 font-sans hidden sm:inline">
            Use arrows or swipe to explore film sets
          </span>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            className="p-2.5 rounded-full bg-black/80 border border-white/10 hover:border-gold text-white hover:text-gold transition-all duration-300 focus:outline-none shadow-lg active:scale-95"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2.5 rounded-full bg-black/80 border border-white/10 hover:border-gold text-white hover:text-gold transition-all duration-300 focus:outline-none shadow-lg active:scale-95"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Slider Viewport Container */}
      <div 
        className="overflow-hidden rounded-xl border border-white/10 bg-[#070707] p-2 sm:p-4 shadow-2xl relative"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
          }}
        >
          {stillsData.map((still) => (
            <div
              key={still.id}
              className="px-2 flex-shrink-0"
              style={{ width: `${100 / visibleItems}%` }}
            >
              <div
                onClick={() => onSelectStill(still)}
                className="group relative aspect-[16/10] sm:aspect-[4/3] rounded-lg overflow-hidden bg-black border border-white/10 hover:border-gold/60 cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img 
                  src={still.image} 
                  alt={still.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-4 sm:p-5">
                  <span className="text-[10px] uppercase tracking-widest text-gold font-bold mb-1">
                    {still.category}
                  </span>
                  <h4 className="font-cinzel text-sm sm:text-base text-white font-bold line-clamp-1 mb-1">
                    {still.title}
                  </h4>
                  <p className="text-xs text-gray-300 font-sans line-clamp-2 hidden sm:block mb-2">
                    {still.caption}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] text-gold font-medium mt-1">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Open Lightbox</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Progress Bar & Dot Indicators */}
      <div className="mt-6 flex items-center justify-between gap-4">
        {/* Progress Track */}
        <div className="flex-1 h-[2px] bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-gold via-gold-light to-gold transition-all duration-300 rounded-full"
            style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
          />
        </div>

        {/* Quick Dots on Desktop */}
        <div className="hidden md:flex items-center gap-1.5">
          {Array.from({ length: Math.min(10, maxIndex + 1) }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx ? 'w-6 bg-gold' : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
