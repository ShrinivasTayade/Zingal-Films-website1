import React from 'react';

export default function SectionHeading({ 
  subtitle, 
  title, 
  description, 
  centered = true, 
  number = null 
}) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center max-w-3xl mx-auto' : 'max-w-2xl'}`}>
      {/* Roman Numeral or Category Index */}
      {number && (
        <span className="font-cinzel text-xs tracking-super-wide text-gold/60 block mb-2 font-semibold">
          {number}
        </span>
      )}

      {/* Subtitle / Eyebrow */}
      {subtitle && (
        <span className="inline-block text-[11px] md:text-xs uppercase tracking-super-wide font-sans text-gold font-semibold mb-3">
          {subtitle}
        </span>
      )}

      {/* Main Heading */}
      <h2 className="font-cinzel text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-wide uppercase leading-tight mb-4">
        {title}
      </h2>

      {/* Gold Divider Accent */}
      <div className={`flex items-center gap-2 mb-4 ${centered ? 'justify-center' : 'justify-start'}`}>
        <span className="w-10 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
        <span className="w-1.5 h-1.5 rotate-45 border border-gold bg-gold/40" />
        <span className="w-10 h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent" />
      </div>

      {/* Narrative Lead Paragraph */}
      {description && (
        <p className="text-sm md:text-base text-gray-400 font-sans leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
