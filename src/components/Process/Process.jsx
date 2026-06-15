import {
  MessageSquare, FileText, PlaneTakeoff, Shield, HeartHandshake
} from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Process.css';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Consultation',
    desc: 'Share your pet details, travel timeline, and destination. Our specialists design a custom relocation plan.',
    color: 'blue',
  },
  {
    number: '02',
    icon: FileText,
    title: 'Documentation',
    desc: 'We handle all paperwork — health certificates, vaccination records, import permits, customs clearance.',
    color: 'teal',
  },
  {
    number: '03',
    icon: PlaneTakeoff,
    title: 'Travel Planning',
    desc: 'Route optimization, airline coordination, IPATA-approved crate preparation and pre-travel vet check.',
    color: 'purple',
  },
  {
    number: '04',
    icon: HeartHandshake,
    title: 'Delivery & Support',
    desc: 'Safe doorstep delivery at the destination with post-relocation health check and settling-in guidance.',
    color: 'green',
  },
];

export default function Process() {
  const sectionRef = useScrollReveal();

  return (
    <section id="process" className="process" ref={sectionRef} aria-labelledby="process-title">
      <div className="container">
        <div className="process__header reveal">
          <span className="section-tag">How It Works</span>
          <h2 className="section-title" id="process-title">
            Simple <span>4-Steps</span> Process
          </h2>
          <p className="section-subtitle">
            From the first call to the happy reunion at your new home — we guide you through every step.
          </p>
        </div>

        <div className="process__timeline" role="list">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={'process__step reveal reveal-delay-' + (i + 1)}
              role="listitem"
            >
              {i < steps.length - 1 && (
                <div className="process__connector" aria-hidden="true" />
              )}

              <div className={'process__step-card process__step-card--' + step.color}>
                <span className="process__number" aria-hidden="true">{step.number}</span>

                <div className={'process__icon process__icon--' + step.color}>
                  <step.icon size={22} strokeWidth={1.8} />
                </div>

                <h3 className="process__title">{step.title}</h3>
                <p className="process__desc">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="process__footer reveal">
          <a href="#contact" className="btn-primary">
            Start Your Pet Journey
          </a>
          <p className="process__footer-note">
            Free consultation — No commitment required
          </p>
        </div>
      </div>
    </section>
  );
}
