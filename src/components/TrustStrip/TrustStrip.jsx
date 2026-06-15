import { Shield, Globe, Stethoscope, Heart, CheckCircle2 } from 'lucide-react';
import './TrustStrip.css';

const items = [
  { icon: Shield, label: '100% Safe Relocation', color: 'blue' },
  { icon: Globe, label: 'Pan India Service', color: 'teal' },
  { icon: Globe, label: 'International Support', color: 'blue' },
  { icon: Stethoscope, label: 'Vet Approved', color: 'accent' },
  { icon: Heart, label: 'Trusted By Pet Parents', color: 'teal' },
];

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Trust indicators">
      <div className="container trust-strip__inner">
        {items.map((item, i) => (
          <div key={item.label} className="trust-strip__item">
            <span className={`trust-strip__icon trust-strip__icon--${item.color}`}>
              <item.icon size={18} strokeWidth={2} />
            </span>
            <span className="trust-strip__label">{item.label}</span>
            {i < items.length - 1 && (
              <span className="trust-strip__divider" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
