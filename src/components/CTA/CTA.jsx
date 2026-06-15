import { ArrowRight, Phone, MessageCircle, ShieldCheck, Star, Globe, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './CTA.css';

const statCards = [
  { icon: TrendingUp, value: '100%', label: 'Success Ratio', color: 'blue' },
  { icon: ShieldCheck, value: '0%', label: 'Casualty Rate', color: 'teal' },
  { icon: Star, value: '4.9/5', label: 'Average Rating', color: 'accent' },
  { icon: Globe, value: '10+', label: 'Countries', color: 'green' },
];

// Floating decorative pet photos
const floatingPets = [
  {
    src: 'https://1.bp.blogspot.com/-xQb6HntEAOM/X241owxDrnI/AAAAAAAABhg/NDjJyUisHNsZvXssXqB-AGn8RTa_wGcDgCLcBGAsYHQ/w1200-h630-p-k-no-nu/packers-movers-hyderabad1.jpg',
    alt: 'Happy dog',
    cls: 'cta-pet cta-pet--1',
  },
  {
    src: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=120&h=120&fit=crop&auto=format&q=70',
    alt: 'Relaxed cat',
    cls: 'cta-pet cta-pet--2',
  },
  {
    src: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=100&h=100&fit=crop&auto=format&q=70',
    alt: 'Colorful parrot',
    cls: 'cta-pet cta-pet--3',
  },
  {
    src: 'https://images.rawpixel.com/image_social_landscape/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L2ZsNDUzNDkzMjY3MDUtcHVibGljLWltYWdlLWtvbnFncDEyLmpwZw.jpg',
    alt: 'Dog at home',
    cls: 'cta-pet cta-pet--4',
  },
];

export default function CTA() {
  const sectionRef = useScrollReveal();

  return (
    <section id="cta" className="cta-section" ref={sectionRef} aria-labelledby="cta-title">
      <div className="cta-section__bg" aria-hidden="true">
        <div className="cta-section__blob cta-section__blob--1" />
        <div className="cta-section__blob cta-section__blob--2" />
        <div className="cta-section__blob cta-section__blob--3" />
        <div className="cta-section__grid" />
      </div>

      {/* Floating pet photos */}
      <div className="cta-section__pets" aria-hidden="true">
        {floatingPets.map((p) => (
          <div key={p.alt} className={p.cls}>
            <img src={p.src} alt={p.alt} loading="lazy" />
          </div>
        ))}
      </div>

      <div className="container cta-section__inner">
        <div className="cta-section__content reveal">
          <div className="cta-section__badge">
            <span className="cta-section__badge-dot" />
            Ready to Move Your Pet?
          </div>

          <h2 className="cta-section__heading" id="cta-title">
            Ready To Relocate Your<br />
            <span className="cta-section__heading-gradient">Pet Safely?</span>
          </h2>

          <p className="cta-section__sub">
            Join thousands of happy pet parents who trusted Relowings for a stress-free, safe,
            and memorable relocation experience.
          </p>

          <div className="cta-section__chips" aria-label="Key trust factors">
            {['Free Consultation', 'No Hidden Charges', '24/7 Support', 'Pan India & International'].map((chip) => (
              <span key={chip} className="cta-section__chip">&#10003; {chip}</span>
            ))}
          </div>

          <div className="cta-section__btns">
            <a href="#contact" className="cta-section__btn-main">
              Get Free Quote
              <ArrowRight size={18} strokeWidth={2.5} />
            </a>
            <a href="tel: +91 9900028437" className="cta-section__btn-call">
              <Phone size={16} strokeWidth={2} />
              Call Us Now
            </a>
            <a
              href="https://wa.me/919900028437"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-section__btn-whatsapp"
            >
              <MessageCircle size={16} strokeWidth={2} />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Stats cards using Lucide icons */}
        <div className="cta-section__stats reveal reveal-delay-2" aria-label="Key statistics">
          {statCards.map((s) => (
            <div key={s.label} className={'cta-section__stat-card cta-section__stat-card--' + s.color}>
              <span className={'cta-section__stat-icon cta-section__stat-icon--' + s.color}>
                <s.icon size={22} strokeWidth={1.8} />
              </span>
              <strong className="cta-section__stat-value">{s.value}</strong>
              <span className="cta-section__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
