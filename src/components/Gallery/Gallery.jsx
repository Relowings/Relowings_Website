import { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Gallery.css';

const galleryItems = [
  { emoji: '🐕', bg: 'blue', label: 'Happy Traveler', desc: 'Dog safely delivered' , size: 'large' },
  { emoji: '✈️', bg: 'dark', label: 'In-Flight Care', desc: 'International route' , size: 'small' },
  { emoji: '🐈', bg: 'teal', label: 'Cat Comfort', desc: 'Stress-free journey' , size: 'small' },
  { emoji: '📦', bg: 'purple', label: 'Secure Crating', desc: 'IPATA approved' , size: 'medium' },
  { emoji: '🦜', bg: 'green', label: 'Exotic Birds', desc: 'CITES compliant' , size: 'small' },
  { emoji: '🏠', bg: 'orange', label: 'Boarding Facility', desc: 'Home-like comfort' , size: 'medium' },
  { emoji: '🩺', bg: 'pink', label: 'Health Check', desc: 'Pre-travel vet visit' , size: 'small' },
  { emoji: '🤝', bg: 'blue', label: 'Happy Reunion', desc: 'Safe delivery' , size: 'large' },
  { emoji: '🗺️', bg: 'teal', label: 'Nationwide Coverage', desc: 'Pan India service' , size: 'small' },
];

const colorMap = {
  blue: 'linear-gradient(135deg, #1A4FA0, #1A6FD4)',
  teal: 'linear-gradient(135deg, #0A7570, #0FB8B2)',
  dark: 'linear-gradient(135deg, #0E1628, #1C3460)',
  purple: 'linear-gradient(135deg, #5B21B6, #7C3AED)',
  green: 'linear-gradient(135deg, #166534, #16A34A)',
  orange: 'linear-gradient(135deg, #9A3412, #EA580C)',
  pink: 'linear-gradient(135deg, #9D174D, #EC4899)',
};

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const sectionRef = useScrollReveal();

  const openLightbox = (item) => {
    setLightbox(item);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightbox(null);
    document.body.style.overflow = '';
  };

  return (
    <section id="gallery" className="gallery" ref={sectionRef} aria-labelledby="gallery-title">
      <div className="container">
        <div className="gallery__header reveal">
          <span className="section-tag">Pet Gallery</span>
          <h2 className="section-title" id="gallery-title">
            Happy Pets, <span>Happy Journeys</span>
          </h2>
          <p className="section-subtitle">
            Every photo tells a story of trust, care, and safe arrivals.
          </p>
        </div>

        <div className="gallery__grid" role="list">
          {galleryItems.map((item, i) => (
            <button
              key={i}
              className={`gallery__item gallery__item--${item.size} reveal reveal-delay-${(i % 3) + 1}`}
              style={{ background: colorMap[item.bg] }}
              onClick={() => openLightbox(item)}
              role="listitem"
              aria-label={`View ${item.label}: ${item.desc}`}
            >
              <div className="gallery__item-inner">
                <span className="gallery__emoji" aria-hidden="true">{item.emoji}</span>
                <div className="gallery__overlay">
                  <ZoomIn size={20} strokeWidth={2} />
                  <div className="gallery__info">
                    <strong>{item.label}</strong>
                    <span>{item.desc}</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="gallery__lightbox" onClick={closeLightbox} role="dialog" aria-modal="true" aria-label={lightbox.label}>
          <div className="gallery__lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="gallery__lightbox-close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X size={20} strokeWidth={2} />
            </button>
            <div
              className="gallery__lightbox-visual"
              style={{ background: colorMap[lightbox.bg] }}
            >
              <span className="gallery__lightbox-emoji">{lightbox.emoji}</span>
            </div>
            <div className="gallery__lightbox-info">
              <strong>{lightbox.label}</strong>
              <span>{lightbox.desc}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
