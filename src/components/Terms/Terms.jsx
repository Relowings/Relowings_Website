import { useEffect } from 'react';
import { X, FileText, ChevronRight } from 'lucide-react';
import './Terms.css';

const sections = [
  {
    // number: '01',
    title: 'Quote Validity',
    color: 'blue',
    content:
      'This quote is valid for 5 days from the date of generation. Final pricing may vary based on updates in flight availability, crate specifications, origin/destination documentation, or changes in travel timelines.',
  },
  {
    // number: '02',
    title: 'Scope Of Quote',
    color: 'teal',
    content:
      'The shared estimate may include airline freight charges, IPATA-approved crate, customs clearance, documentation assistance, microchipping (if required), and pre-travel vet consultation. Please refer to the detailed breakup for specific inclusions.',
  },
  {
    // number: '03',
    title: 'Exclusions',
    color: 'accent',
    content:
      'Destination country taxes, destination import customs clearance, quarantine charges, boarding costs, vaccination/treatment expenses, and any rejections or delays due to incomplete documentation are not included unless explicitly mentioned.',
  },
  {
    // number: '04',
    title: 'Booking & Confirmation',
    color: 'blue',
    content:
      'A relocation is confirmed only upon advance payment and submission of required documents. Airline bookings are subject to pet acceptance policies and live animal slot availability. The current airfreight is based on the current air fare and may change (increase or decrease).',
  },
  {
    // number: '05',
    title: 'Health & Documentation',
    color: 'green',
    content:
      'Pet parents must ensure all country-specific vaccination, health certifications, and other compliance documents are prepared and submitted timely. Our team will guide you through the entire process.',
  },
  {
    // number: '06',
    title: 'Flight Changes & Delays',
    color: 'teal',
    content:
      'Relowings cannot be held liable for airline-induced delays, route changes, or cancellations. Any rescheduling charges due to external circumstances will be applicable separately.',
  },
  {
    // number: '07',
    title: 'Cancellation Policy',
    color: 'accent',
    content:
      'Cancellations made after airline bookings, crate purchases, or document submissions will incur charges based on expenses already incurred, with an additional Rs 5,000 service charge.',
  },
  {
    // number: '08',
    title: 'Transit Assurance',
    color: 'blue',
    content:
      'We work only with certified handlers and partners globally. While utmost care is taken, Relowings is not responsible for unforeseen circumstances such as customs delays or health-related complications during transit.',
  },
  {
    // number: '09',
    title: 'Journey Updates & Support',
    color: 'green',
    content:
      'You will be assigned a dedicated pet relocation manager for updates, queries, and assistance throughout the journey — from pick-up to final delivery.',
  },
];

export default function Terms({ onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className="terms-overlay" role="dialog" aria-modal="true" aria-labelledby="terms-title">

      {/* Backdrop */}
      <div className="terms-backdrop" onClick={onClose} aria-hidden="true" />

      {/* Panel */}
      <div className="terms-panel">

        {/* Header */}
        <div className="terms-header">
          <div className="terms-header-left">
            <div className="terms-header-icon">
              <FileText size={22} strokeWidth={1.8} />
            </div>
            <div>
              <h2 className="terms-title" id="terms-title">Terms &amp; Conditions</h2>
              <p className="terms-subtitle">Please read these terms carefully before booking your pet's relocation.</p>
            </div>
          </div>
          <button
            className="terms-close"
            onClick={onClose}
            aria-label="Close Terms and Conditions"
          >
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Intro banner */}
        <div className="terms-intro">
          <ChevronRight size={16} strokeWidth={2.5} />
          <p>
            By booking a relocation service with <strong>Relowings</strong>, you agree to the following
            terms and conditions. These are designed to ensure transparency, safety, and the best
            possible experience for you and your pet.
          </p>
        </div>

        {/* Sections */}
        <div className="terms-body">
          <div className="terms-grid">
            {sections.map((s) => (
              <div key={s.number} className={'terms-card terms-card--' + s.color}>
                <div className="terms-card-top">
                  <span className={'terms-card-number terms-card-number--' + s.color}>
                    {s.number}
                  </span>
                  <h3 className="terms-card-title">{s.title}</h3>
                </div>
                <div className={'terms-card-line terms-card-line--' + s.color} aria-hidden="true" />
                <p className="terms-card-content">{s.content}</p>
              </div>
            ))}
          </div>

          {/* Footer note */}
          <div className="terms-footer-note">
            <p>
              For any questions regarding these terms, please contact us at{' '}
              <a href="mailto:support@relowings.com">support@relowings.com</a><br />
              or call{' '}
              <a href="tel:+919900028437">+91 9900028437</a>.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}