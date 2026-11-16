import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DEFAULT_TITLE = 'Zingal Films & Music India Pvt. Ltd. | Stories that Inspire. Cinema that Connects.';
const DEFAULT_DESCRIPTION = 'Premier film and music production company based in Nagpur, Maharashtra. Specializing in feature films, OTT web series, corporate films, TVCs, documentaries, and full-spectrum post-production.';
const DEFAULT_KEYWORDS = 'Zingal Films, Zingal Music, Film Production India, Feature Films, Web Series, Corporate Films, TV Commercials, Documentaries, Post Production, DI Color Grading, Sound Design, Drone Cinematography, Nagpur Film Studio';
const SITE_URL = 'https://zingalfilms.com';
const DEFAULT_IMAGE = '/assets/images/logo-cropped.png';

export default function SEO({
  title,
  description,
  keywords,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  schema
}) {
  const location = useLocation();
  const currentUrl = `${SITE_URL}${canonical || location.pathname}`;
  const fullTitle = title ? `${title} | Zingal Films & Music India` : DEFAULT_TITLE;
  const fullDesc = description || DEFAULT_DESCRIPTION;
  const fullKeywords = keywords || DEFAULT_KEYWORDS;
  const fullImage = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;

  useEffect(() => {
    // 1. Update Document Title
    document.title = fullTitle;

    // Helper to set or create meta tag
    const setMetaTag = (attribute, name, content) => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', fullDesc);
    setMetaTag('name', 'keywords', fullKeywords);
    setMetaTag('name', 'robots', 'index, follow');

    // 3. OpenGraph / Facebook Tags
    setMetaTag('property', 'og:title', fullTitle);
    setMetaTag('property', 'og:description', fullDesc);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:image', fullImage);
    setMetaTag('property', 'og:site_name', 'Zingal Films & Music India Pvt. Ltd.');

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', fullTitle);
    setMetaTag('name', 'twitter:description', fullDesc);
    setMetaTag('name', 'twitter:image', fullImage);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // 6. JSON-LD Structured Data
    const scriptId = 'schema-structured-data';
    let scriptElement = document.getElementById(scriptId);
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.id = scriptId;
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }

    const defaultOrgSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Zingal Films & Music India Pvt. Ltd.',
      url: SITE_URL,
      logo: `${SITE_URL}/assets/images/logo-cropped.png`,
      sameAs: [
        'https://instagram.com/zingalfilms',
        'https://youtube.com/@zingalfilms'
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-9503736430',
        contactType: 'customer service',
        email: 'zingalfilmsmusicindia@gmail.com',
        areaServed: 'IN',
        availableLanguage: ['English', 'Hindi', 'Marathi']
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Nagpur',
        addressRegion: 'Maharashtra',
        addressCountry: 'IN'
      }
    };

    scriptElement.textContent = JSON.stringify(schema || defaultOrgSchema);

    // Cleanup on unmount or route change if needed
    return () => {
      // document title resets on next render
    };
  }, [fullTitle, fullDesc, fullKeywords, currentUrl, fullImage, ogType, schema]);

  return null;
}
