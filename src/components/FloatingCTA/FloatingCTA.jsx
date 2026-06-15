import { useState } from 'react';
import { ChevronRight, MessageCircle, FileText } from 'lucide-react';
import './FloatingCTA.css';

export default function FloatingCTA() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`floating-cta ${open ? 'open' : ''}`}>
      
      <button
        className="floating-cta__toggle"
        onClick={() => setOpen(!open)}
      >
        <ChevronRight size={20} />
      </button>

      <div className="floating-cta__buttons">

        <a
          href="/#contact"
          className="floating-cta__btn quote"
        >
          <FileText size={18} />
          <span>Get Free Quote</span>
        </a>

        <a
          href="tel:+91 9900028437"
          className="floating-cta__btn consult"
        >
          <MessageCircle size={18} />
          <span>Get Free Consultation</span>
        </a>

      </div>
    </div>
  );
}