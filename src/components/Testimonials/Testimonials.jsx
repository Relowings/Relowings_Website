import { useState, useEffect, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai to Singapore',
    pet: 'Labrador, Bruno',
    rating: 5,
    text: "Relowings made our international move so smooth. Bruno was well-cared for throughout the entire journey and the team kept us updated at every step. Could not have asked for better service!",
    avatar: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=1A6FD4&color=fff&size=80&bold=true&rounded=true',
    petImage: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=50&h=50&fit=crop&auto=format&q=70',
    petAlt: 'Labrador dog Bruno',
  },
  {
    name: 'Rahul Mehta',
    location: 'Bangalore to Delhi',
    pet: 'Persian Cat, Whiskers',
    rating: 5,
    text: "I was very anxious about moving my cat but the team at Relowings put all my worries to rest. Whiskers arrived perfectly relaxed and healthy. True professionals who genuinely love animals.",
    avatar: 'https://ui-avatars.com/api/?name=Rahul+Mehta&background=0FB8B2&color=fff&size=80&bold=true&rounded=true',
    petImage: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=50&h=50&fit=crop&auto=format&q=70',
    petAlt: 'Persian cat Whiskers',
  },
  {
    name: 'Anjali Nair',
    location: 'Chennai to USA',
    pet: 'Golden Retriever, Max',
    rating: 5,
    text: "The documentation process for international travel seemed daunting but Relowings handled every single requirement flawlessly. Max arrived in Los Angeles happy and healthy. Absolutely five stars!",
    avatar: 'https://ui-avatars.com/api/?name=Anjali+Nair&background=FF7B4B&color=fff&size=80&bold=true&rounded=true',
    petImage: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=50&h=50&fit=crop&auto=format&q=70',
    petAlt: 'Golden Retriever Max',
  },
  {
    name: 'Vikram Singh',
    location: 'Pune to Dubai',
    pet: 'Macaw, Rio',
    rating: 5,
    text: "Moving a bird internationally is incredibly complex with CITES permits and special handling. The Relowings team navigated everything expertly. Rio is thriving in Dubai thanks to their care.",
    avatar: 'https://ui-avatars.com/api/?name=Vikram+Singh&background=5B21B6&color=fff&size=80&bold=true&rounded=true',
    petImage: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=50&h=50&fit=crop&auto=format&q=70',
    petAlt: 'Macaw parrot Rio',
  },
  {
    name: 'Sneha Gupta',
    location: 'Hyderabad to London',
    pet: 'Beagle, Coco',
    rating: 5,
    text: "From the very first consultation to Coco delivery at our London home, the experience was seamless. 24/7 support, real-time updates — everything we could have hoped for.",
    avatar: 'https://ui-avatars.com/api/?name=Sneha+Gupta&background=16A34A&color=fff&size=80&bold=true&rounded=true',
    petImage: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=50&h=50&fit=crop&auto=format&q=70',
    petAlt: 'Beagle dog Coco',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const sectionRef = useScrollReveal();

  useEffect(() => {
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setCurrent((c) => (c + 1) % testimonials.length);
      }, 4500);
    }
    return () => clearInterval(intervalRef.current);
  }, [paused]);

  const prev = () => {
    clearInterval(intervalRef.current);
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  };

  const next = () => {
    clearInterval(intervalRef.current);
    setCurrent((c) => (c + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="testimonials" ref={sectionRef} aria-labelledby="testimonials-title">
      <div className="testimonials__bg" aria-hidden="true">
        <div className="testimonials__blob" />
      </div>

      <div className="container">
        <div className="testimonials__header reveal">
          <span className="section-tag">Testimonials</span>
          <h2 className="section-title" id="testimonials-title">
            What Pet Parents <span>Say</span>
          </h2>
          <p className="section-subtitle">
            Thousands of happy families trust Relowings with their most precious companions.
          </p>
        </div>

        <div
          className="testimonials__carousel reveal"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          aria-label="Customer testimonials carousel"
        >
          <div
            className="testimonials__track"
            style={{ transform: 'translateX(calc(-' + current + ' * 100% - ' + current + ' * 24px))' }}
          >
            {testimonials.map((t, i) => {
              const cardClass = i === current
                ? 'testimonials__card testimonials__card--active'
                : 'testimonials__card';
              return (
                <article key={t.name} className={cardClass} aria-hidden={i !== current}>
                  <Quote size={32} className="testimonials__quote" strokeWidth={1.5} />
                  <p className="testimonials__text">"{t.text}"</p>

                  <div className="testimonials__footer">
                    <div className="testimonials__author">
                      {/* Real avatar image */}
                      <div className="testimonials__avatar">
                        <img
                          src={t.avatar}
                          alt={t.name}
                          className="testimonials__avatar-img"
                          loading="lazy"
                          width="56"
                          height="56"
                        />
                        {/* Small pet photo badge */}
                        <div className="testimonials__pet-badge">
                          <img
                            src={t.petImage}
                            alt={t.petAlt}
                            className="testimonials__pet-img"
                            loading="lazy"
                            width="24"
                            height="24"
                          />
                        </div>
                      </div>
                      <div className="testimonials__info">
                        <strong className="testimonials__name">{t.name}</strong>
                        <span className="testimonials__location">{t.location}</span>
                        <span className="testimonials__pet">{t.pet}</span>
                      </div>
                    </div>

                    <div className="testimonials__stars" aria-label={t.rating + ' out of 5 stars'}>
                      {Array(t.rating).fill(0).map((_, idx) => (
                        <Star key={idx} size={14} fill="currentColor" strokeWidth={0} />
                      ))}
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="testimonials__controls">
            <button className="testimonials__btn" onClick={prev} aria-label="Previous testimonial">
              <ChevronLeft size={18} strokeWidth={2} />
            </button>
            <div className="testimonials__dots" role="tablist">
              {testimonials.map((_, i) => {
                const dotClass = i === current
                  ? 'testimonials__dot testimonials__dot--active'
                  : 'testimonials__dot';
                return (
                  <button
                    key={i}
                    className={dotClass}
                    onClick={() => setCurrent(i)}
                    role="tab"
                    aria-selected={i === current}
                    aria-label={'Go to testimonial ' + (i + 1)}
                  />
                );
              })}
            </div>
            <button className="testimonials__btn" onClick={next} aria-label="Next testimonial">
              <ChevronRight size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

