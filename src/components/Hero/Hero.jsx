import { useState, useEffect } from 'react';
import { ArrowRight, Star, Shield, Globe, Award, CheckCircle2, Phone } from 'lucide-react';
import './Hero.css';

const stats = [
  { value: '5000+', label: 'Pets Relocated' },
  { value: '98%', label: 'Happy Customers' },
  { value: '50+', label: 'Cities Covered' },
  { value: '10+', label: 'Countries' },
];

const floatingBadges = [
  { icon: Shield, text: '100% Safe', color: 'blue' },
  { icon: Globe, text: 'Pan India & International', color: 'teal' },
  { icon: Award, text: 'Certified Experts', color: 'accent' },
];

// Small pet photos for orbit + avatar row
const orbitPets = [
{
  src: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=80&h=80&fit=crop&auto=format&q=80',
  alt: 'Golden retriever dog sitting comfortably for pet relocation service',
},
{
  src: 'https://plus.unsplash.com/premium_photo-1675884215301-240f3fb01cec?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  alt: 'Cute domestic cat ready for safe pet relocation and travel',
},
{
  src: 'https://www.thehappychickencoop.com/wp-content/uploads/2022/08/low-maintenance-birds-Conure-Pet-Bird.jpg',
  alt: 'Colorful pet bird for bird relocation and travel services',
},
{
  src: 'https://images.unsplash.com/photo-1614359835514-92f8ba196357?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  alt: 'Professional packers and movers handling household relocation safely',
},
{
  src: 'https://images.unsplash.com/photo-1759826350352-c5b0b77729bd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  alt: 'Modern warehouse and secure storage facility for goods and belongings',
}
];

const avatarPets = [
  'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=60&h=60&fit=crop&auto=format&q=70',
  'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=60&h=60&fit=crop&auto=format&q=70',
  'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=60&h=60&fit=crop&auto=format&q=70',
  'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=60&h=60&fit=crop&auto=format&q=70',
  'https://images.unsplash.com/photo-1614359835514-92f8ba196357?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const heroSlides = [
  {
    title: 'Stress-Free Pet Relocation',
    subtitle:
      'We specialize in hassle-free domestic and international pet transport with love, care, and comfort.',
    image:
      'https://autumntrailsvet.com/wp-content/uploads/2023/02/tips-for-a-stress-free-pet-boarding-1536x864.jpg',
  },
  {
    title: 'Global Pet Travel Experts',
    subtitle: 'International Pet Relocation You Can Trust',
    image:
      'https://tse3.mm.bing.net/th/id/OIP.Yb8HYyG1RJunVwxi2JEkfgHaF6?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
  {
    title: 'Comfort-First Pet Transport',
    subtitle: 'Your Pet’s Comfort Is Our Priority',
    image:
      'https://townsquare.media/site/642/files/2023/12/attachment-Pet-First-Aid.jpg?w=980&q=75',
  },
    {
    title: 'Packers and Movers',
    subtitle: 'Full Service Pet Logistics',
    image:
      'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=2070&auto=format&fit=crop',
  },
];

export default function Hero() {
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
  const interval = setInterval(() => {
    setCurrentSlide((prev) =>
      prev === heroSlides.length - 1 ? 0 : prev + 1
    );
  }, 3000);

  return () => clearInterval(interval);
}, []);

  const contentClass = loaded ? 'hero__content hero__content--visible' : 'hero__content';
  const visualClass  = loaded ? 'hero__visual hero__visual--visible'  : 'hero__visual';

  return (
    <section id="home" className="hero" aria-label="Hero section">
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__blob hero__blob--1" />
        <div className="hero__blob hero__blob--2" />
        <div className="hero__blob hero__blob--3" />
        <div className="hero__grid" />
      </div>

      <div className="container hero__inner">
        {/* Left content */}
        <div className={contentClass}>
          <div className="hero__eyebrow">
            <span className="hero__eyebrow-dot" />
            India's Most Trusted Pet Relocation Partner
          </div>

          <h1 className="hero__heading">
            Safe, Comfortable<br />
            <span className="hero__heading-gradient">&amp; Trusted</span><br />
            Pet Relocation
          </h1>

          <p className="hero__sub">
            End-to-end pet relocation services — domestic &amp; international moves, boarding, vet consultation,
            packers &amp; movers. Your pet's comfort is our priority.
          </p>

          <div className="hero__chips" role="list">
            {['Globally Relocation', 'Boarding', 'International Moves','Vet Support', 'Packers & Movers'].map((chip) => (
              <span key={chip} className="hero__chip" role="listitem">
                <CheckCircle2 size={13} strokeWidth={2.5} />
                {chip}
              </span>
            ))}
          </div>

          <div className="hero__ctas">
            <a href="#contact" className="btn-primary hero__cta-main">
              Get Free Quote
              <ArrowRight size={16} strokeWidth={2.5} />
            </a>
            <a href="tel: +91 9900028437" className="hero__cta-call">
              <span className="hero__cta-call-icon">
                <Phone size={16} strokeWidth={2.5} />
              </span>
              {/* <span className="hero__cta-call-text">
                <small>Call us anytime</small>
                <strong> +91 9900028437</strong>
              </span> */}
            </a>
          </div>

          {/* Trust row — real pet images */}
          <div className="hero__trust">
            <div className="hero__avatars" aria-label="Happy pet customers">
              {avatarPets.map((src, i) => (
                <div key={i} className="hero__avatar">
                  <img src={src} alt="Happy relocated pet" loading="lazy" />
                </div>
              ))}
            </div>
            <div className="hero__trust-text">
              <div className="hero__stars" aria-label="4.9 out of 5 stars">
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={13} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span><strong>4.9/5</strong> from 2,000+ pet parents</span>
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className={visualClass} aria-hidden="true">
          {/* Main card with centre hero image */}
          <div className="hero__card-main">
            <div className="hero__pet-scene">
              {/* Centre image */}
              <div className="hero__pet-img-wrap">
                <img
                  src="https://png.pngtree.com/background/20230314/original/pngtree-planet-earth-on-white-3d-rendering-planet-earth-on-white-elements-picture-image_2135064.jpg"
                  alt="Happy dog ready for relocation"
                  className="hero__pet-img"
                  loading="eager"
                  
                />
                 {/* Orbiting pet images */}
              {orbitPets.map((p, i) => (
                <div key={p.alt} className={'hero__orbit hero__orbit--' + (i + 1)}>
                  <img src={p.src} alt={p.alt} loading="lazy" />
                </div>
              ))}
                
              </div>
               {/* Orbiting pet images */}
              {orbitPets.map((p, i) => (
                <div key={p.alt} className={'hero__orbit hero__orbit--' + (i + 1)}>
                  <img src={p.src} alt={p.alt} loading="lazy" />
                </div>
              ))}
              <div className="hero__scene-ring hero__scene-ring--1" />
              <div className="hero__scene-ring hero__scene-ring--2" />
              <div className="hero__scene-ring hero__scene-ring--3" />

             
            </div>
          </div>

          {/* Floating badges */}
          {floatingBadges.map((b, i) => (
            <div key={b.text} className={'hero__badge hero__badge--' + (i + 1) + ' hero__badge--' + b.color}>
              <span className="hero__badge-icon"><b.icon size={15} strokeWidth={2} /></span>
              <span>{b.text}</span>
            </div>
          ))}

          {/* Live tracking card */}
          <div className="hero__tracking">
            <div className="hero__tracking-pulse" />
            <div className="hero__tracking-info">
              <span className="hero__tracking-label">Live Tracking</span>
              <span className="hero__tracking-status">Pet in transit · Safe</span>
            </div>
          </div>

          {/* Stats strip */}
          <div className="hero__stats-strip">
            {stats.map((s) => (
              <div key={s.label} className="hero__stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Carousel Slider */}
      <div className="hero-carousel">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`hero-carousel__slide ${
              index === currentSlide ? 'active' : ''
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="hero-carousel__overlay">
              <div className="hero-carousel__content">
                <h2>{slide.title}</h2>
                <p>{slide.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="hero__scroll" aria-hidden="true">
        {/* <div className="hero__scroll-dot" /> */}
      </div>
    </section>
  );
}
