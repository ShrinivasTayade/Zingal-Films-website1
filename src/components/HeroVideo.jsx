import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, RotateCcw, ChevronDown } from 'lucide-react';

export default function HeroVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Autoplay attempt
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Autoplay muted required by browser policy:", err);
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => {
            setIsPlaying(false);
          });
        });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const handleRestart = () => {
    if (!videoRef.current) return;
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
  };

  const scrollToContent = () => {
    const nextSection = document.getElementById('company-statement');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative w-full bg-black flex flex-col items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-6 md:pb-12 md:min-h-[85vh] lg:h-screen select-none"
      aria-label="Zingal Films & Music Opening Logo Hero"
    >
      {/* Background Ambient Lighting strictly matching the video's obsidian tone */}
      <div className="absolute inset-0 bg-[#000000] z-0 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.06)_0%,rgba(0,0,0,0.98)_80%)] z-0 pointer-events-none" />

      {/* Main Video Presentation - STRICTLY NO CROPPING, NO STRETCHING, NO TEXT OVER LOGO */}
      <div className="relative z-10 w-full flex items-center justify-center px-2 sm:px-6 md:px-12 my-auto">
        {!hasError ? (
          <div className="relative w-full max-w-5xl aspect-[848/474] flex items-center justify-center overflow-hidden rounded">
            <video
              ref={videoRef}
              src="/assets/video/zingal-logo-hero.mp4"
              poster="/assets/images/logo-cropped.png"
              autoPlay
              muted
              loop
              playsInline
              webkit-playsinline="true"
              onLoadedData={() => setIsVideoLoaded(true)}
              onError={() => setHasError(true)}
              className="w-full h-full object-contain filter drop-shadow-[0_10px_35px_rgba(0,0,0,0.9)] transition-opacity duration-700"
              style={{ backgroundColor: '#000000' }}
              title="Zingal Films & Music India Logo Reveal"
            >
              <source src="/assets/video/zingal-logo-hero.mp4" type="video/mp4" />
              <source src="/assets/video/WhatsApp Video 2026-11-12 at 7.20.21 PM.mp4" type="video/mp4" />
              Your browser does not support HTML5 video playback.
            </video>

            {/* Subtle loading shimmer if video takes time on low networks */}
            {!isVideoLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/80">
                <div className="w-10 h-10 border-2 border-gold/20 border-t-gold rounded-full animate-spin" />
              </div>
            )}
          </div>
        ) : (
          /* Graceful Fallback to cropped logo if video asset cannot be rendered by browser */
          <div className="relative max-w-xl w-full p-6 flex flex-col items-center text-center animate-fade-in">
            <img 
              src="/assets/images/logo-cropped.png" 
              alt="Zingal Films & Music India Pvt. Ltd." 
              className="w-full max-w-sm object-contain filter drop-shadow-[0_10px_30px_rgba(212,175,55,0.3)] mb-4"
            />
          </div>
        )}
      </div>

      {/* Hero Bottom Utility Bar: Controls + Scroll Prompt */}
      <div className="relative z-20 w-full max-w-5xl px-4 sm:px-6 md:px-12 mt-3 md:mt-6 flex items-center justify-between">
        
        {/* Subtle Brand Tagline on Left (Hidden on very small mobile if space is tight) */}
        <div className="hidden sm:flex items-center gap-2 text-[11px] uppercase tracking-widest text-gold/70 font-sans">
          <span className="w-2 h-2 rounded-full bg-gold/60 animate-pulse" />
          <span>Cinema in Motion</span>
        </div>

        {/* Cinematic "Scroll to Explore" Center Indicator */}
        <button 
          onClick={scrollToContent}
          className="flex items-center gap-1.5 text-gray-400 hover:text-gold transition-colors duration-300 group focus:outline-none mx-auto sm:mx-0"
          aria-label="Scroll down to company overview"
        >
          <span className="text-[10px] uppercase tracking-super-wide font-sans text-gray-400 group-hover:text-gold transition-colors">
            Scroll to Explore
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-gold animate-bounce" />
        </button>

        {/* Discreet Sound, Play/Pause, and Restart Controls */}
        <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md border border-white/10 hover:border-gold/40 px-3 py-1.5 rounded-full shadow-2xl transition-all duration-300">
          <button
            onClick={togglePlay}
            className="p-1.5 text-gray-300 hover:text-gold transition-colors focus:outline-none rounded-full"
            aria-label={isPlaying ? "Pause Logo Video" : "Play Logo Video"}
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
          </button>

          <span className="w-[1px] h-3.5 bg-white/15" />

          <button
            onClick={toggleMute}
            className="p-1.5 text-gray-300 hover:text-gold transition-colors focus:outline-none rounded-full flex items-center gap-1"
            aria-label={isMuted ? "Unmute Sound" : "Mute Sound"}
            title={isMuted ? "Unmute Audio" : "Mute Audio"}
          >
            {isMuted ? (
              <VolumeX className="w-3.5 h-3.5" />
            ) : (
              <Volume2 className="w-3.5 h-3.5 text-gold" />
            )}
            <span className="text-[9px] uppercase font-sans tracking-widest hidden sm:inline text-gray-400">
              {isMuted ? "Muted" : "Audio On"}
            </span>
          </button>

          <span className="w-[1px] h-3.5 bg-white/15" />

          <button
            onClick={handleRestart}
            className="p-1.5 text-gray-300 hover:text-gold transition-colors focus:outline-none rounded-full"
            aria-label="Restart Video"
            title="Replay"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>

      </div>
    </section>
  );
}
