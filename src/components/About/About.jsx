import { useState } from 'react';
import { CheckCircle2, Users, MapPin, Globe, Award, Heart, Briefcase, Zap, Crown, Shield } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

const achievements = [
  { icon: Users, value: '5,000+', label: 'Pets Relocated', color: 'blue' },
  { icon: MapPin, value: '50+', label: 'Cities Covered', color: 'teal' },
  { icon: Globe, value: '10+', label: 'Countries', color: 'accent' },
  { icon: Award, value: '8+', label: 'Years Experience', color: 'green' },
];

const highlights = [
  'IPATA-certified pet handling team',
  'Real-time tracking & updates',
  'Custom travel crates & accessories',
  '24/7 customer support',
  'Complete documentation assistance',
  'Post-relocation follow-up care',
];

const tones = [
  {
    id: 'professional',
    label: 'Professional',
    icon: Briefcase,
    desc: 'We ensure safe, compliant, and stress-free pet relocations worldwide. Our experienced team handles logistics, documentation, and personalized care so your pet arrives healthy and happy.',
  },
  {
    id: 'caring',
    label: 'Warm & Caring',
    icon: Heart,
    desc: 'Moved by your pet\'s needs, we treat every animal like family. From door-to-door transport to comfort-focused care, we make relocation calm and reassuring for pets and owners alike.',
  },
  {
    id: 'modern',
    label: 'Modern & Efficient',
    icon: Zap,
    desc: 'Combining tech-driven tracking with hands-on care, we deliver fast, transparent pet relocations. Real-time updates and expert handling give you peace of mind every mile of the way.',
  },
  {
    id: 'premium',
    label: 'Premium',
    icon: Crown,
    desc: 'Luxury travel for beloved pets. We offer bespoke relocation plans, VIP transport, and concierge support to ensure a calm, first-class journey for your companion.',
  },
  {
    id: 'trust',
    label: 'Trust & Safety',
    icon: Shield,
    desc: 'Safety is our priority. Certified handlers, vet-approved protocols, and meticulous planning ensure your pet\'s relocation is secure, comfortable, and fully compliant with regulations.',
  },
];

export default function About() {
  const sectionRef = useScrollReveal();
  const [activeTone, setActiveTone] = useState('professional');

  const active = tones.find((t) => t.id === activeTone);

  return (
    <section id="about" className="about" ref={sectionRef} aria-labelledby="about-title">
      <div className="container about__inner">

        {/* Left: Visual */}
        <div className="about__visual reveal">
          <div className="about__visual-main">
            <div className="about__visual-scene" aria-hidden="true">
              <div className="about__visual-card about__visual-card--main">
                <img
                  src="https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?w=520&h=520&fit=crop&auto=format&q=80"
                  alt="Professional pet handler caring for a dog"
                  className="about__visual-photo"
                  loading="lazy"
                />
                <div className="about__visual-overlay" />
              </div>
              <div className="about__mini-card about__mini-card--1">
                <Heart size={16} fill="currentColor" />
                <span>Pet-First<br />Approach</span>
              </div>
              <div className="about__mini-card about__mini-card--2">
                <Award size={16} />
                <span>IPATA<br />Certified</span>
              </div>
            </div>
          </div>

          {/* Achievement cards */}
          <div className="about__achievements" aria-label="Key statistics">
            {achievements.map((a) => (
              <div key={a.label} className={'about__achievement about__achievement--' + a.color}>
                <span className="about__achievement-icon">
                  <a.icon size={18} strokeWidth={1.8} />
                </span>
                <strong className="about__achievement-value">{a.value}</strong>
                <span className="about__achievement-label">{a.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Content */}
        <div className="about__content">
          <div className="reveal">
            <span className="section-tag">About Relowings</span>
            <h2 className="section-title" id="about-title">
              We Treat Your Pet<br />Like <span>Family</span>
            </h2>
          </div>

          {/* Tone tabs */}
          <div className="about__tones reveal reveal-delay-1" role="tablist" aria-label="About us perspectives">
            {tones.map((t) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={activeTone === t.id}
                className={'about__tone-btn' + (activeTone === t.id ? ' about__tone-btn--active' : '')}
                onClick={() => setActiveTone(t.id)}
              >
                <t.icon size={13} strokeWidth={2} />
                {t.label}
              </button>
            ))}
          </div>

          {/* Active tone description */}
          <div className="about__tone-desc" role="tabpanel">
            <div className="about__tone-icon">
              <active.icon size={20} strokeWidth={1.8} />
            </div>
            <p>{active.desc}</p>
          </div>

          <ul className="about__highlights reveal reveal-delay-3" aria-label="Key highlights">
            {highlights.map((h) => (
              <li key={h} className="about__highlight">
                <CheckCircle2 size={16} strokeWidth={2.5} />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="about__ctas reveal reveal-delay-4">
            <a href="#contact" className="btn-primary">Get Free Consultation</a>
            <a href="#why" className="btn-secondary">Why Choose Us</a>
          </div>
        </div>

      </div>
    </section>
  );
}