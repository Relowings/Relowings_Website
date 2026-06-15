import { useEffect, useRef } from 'react';
import { Smile, PawPrint, MapPin, Globe, Users } from 'lucide-react';
import './Stats.css';

const stats = [
  { icon: Smile, value: 5000, suffix: '+', label: 'Happy Customers', color: 'blue', desc: 'Pet parents trust us' },
  { icon: PawPrint, value: 8000, suffix: '+', label: 'Pets Relocated', color: 'teal', desc: 'Safe & successful moves' },
  { icon: MapPin, value: 50, suffix: '+', label: 'Cities Covered', color: 'purple', desc: 'Across India' },
  { icon: Globe, value: 10, suffix: '+', label: 'Countries', color: 'accent', desc: 'International network' },
  { icon: Users, value: 50, suffix: '+', label: 'Team Experts', color: 'green', desc: 'Certified professionals' },
];

function StatCounter({ value, suffix }) {
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const duration = 2200;
          const startTime = performance.now();

          const tick = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            const ease = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.floor(ease * value).toLocaleString() + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          };

          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function Stats() {
  return (
    <section className="stats" aria-labelledby="stats-title">
      <div className="stats__bg" aria-hidden="true">
        <div className="stats__blob stats__blob--1" />
        <div className="stats__blob stats__blob--2" />
      </div>

      <div className="container">
        <div className="stats__header">
          <span className="section-tag" style={{ '--tag-color': 'rgba(255,255,255,0.15)', '--tag-border': 'rgba(255,255,255,0.2)', color: 'var(--primary)' }}>
            Our Numbers
          </span>
          <h2 className="section-title stats__title" id="stats-title">
            Numbers That <span>Speak</span>
          </h2>
        </div>

        <div className="stats__grid" role="list">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`stats__card stats__card--${s.color}`}
              role="listitem"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className={`stats__icon stats__icon--${s.color}`}>
                <s.icon size={22} strokeWidth={1.8} />
              </div>
              <div className="stats__value">
                <StatCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className="stats__label">{s.label}</div>
              <div className="stats__desc">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
