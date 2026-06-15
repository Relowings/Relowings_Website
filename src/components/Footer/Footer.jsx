import {
  PlaneTakeoff, Phone, Mail, MapPin,
  Facebook, Twitter, Instagram, Linkedin, Youtube,
  ArrowRight, Send
} from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Why Relowings', href: '#why' },
  { label: 'Process', href: '#process' },
  // { label: 'Gallery', href: '#gallery' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact' },
  { label: 'Terms & Conditions', href: '#terms' },
];

const services = [
  // { label: 'International Pet Relocation', path: '/services/international-relocation', },
  { label: 'Globally Pet Relocation', path: '/services/domestic-relocation', },
  { label: 'Pet Boarding Facility', path: '/services/pet-boarding', },
  { label: 'Vet Consultation', path: '/services/vet-consultation', },
  { label: 'Packers and Movers', path: '/services/packers-movers', },
  { label: 'Storage Facility', path: '/services/storage-facility', },
];

const socials = [
  { icon: Facebook, href: 'https://www.facebook.com/share/1F2rqxFxVf/', label: 'Facebook' },
  { icon: Instagram, href: 'https://www.instagram.com/relowings?igsh=MTV0bm9zd2dyYmR1dA==', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter / X' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer({ onOpenTerms }) {
  return (
    <footer className="footer" id="footer" role="contentinfo">
      {/* Top wave divider */}
      <div className="footer__wave" aria-hidden="true">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,60 C240,0 480,60 720,30 C960,0 1200,60 1440,20 L1440,60 Z" fill="#0E1628" />
        </svg>
      </div>

      <div className="footer__main">
        <div className="container footer__grid">
          {/* Brand column */}
          <div className="footer__brand">
            <img
            src="https://relowings.com/images/top-logo.png"
            alt="Relowings Logo"
            className="navbar__logo-image"
            loading="eager"
          />

            <p className="footer__tagline">
              India's most trusted pet relocation partner. Safe, comfortable &amp; stress-free moves for your beloved companions.
            </p>

            {/* Social links */}
            <div className="footer__socials" aria-label="Social media links">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="footer__social-btn"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <s.icon size={16} strokeWidth={1.8} />
                </a>
              ))}
            </div>

            {/* Certifications */}
            <div className="footer__certs" aria-label="Certifications">
            </div>
          </div>

          {/* Quick links */}
          <div className="footer__col">
            <h3 className="footer__col-title">Quick Links</h3>
            <ul className="footer__links" role="list">
              {quickLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="footer__link"
                    onClick={(e) => {
                      if (l.label === 'Terms & Conditions') {
                        e.preventDefault();
                        onOpenTerms();
                      }
                    }}
                  >
                    <ArrowRight size={13} strokeWidth={2.5} />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer__col">
            <h3 className="footer__col-title">Our Services</h3>
            <ul className="footer__links" role="list">
              {services.map((s) => (
  <li key={s.label}>
    <Link
      to={s.path}
      className="footer__link"
    >
      <ArrowRight size={13} strokeWidth={2.5} />
      {s.label}
    </Link>
  </li>
))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className="footer__col footer__col--contact">
            <h3 className="footer__col-title">Get In Touch</h3>

            <address className="footer__contact-list" style={{ fontStyle: 'normal' }}>
              <div className="footer__contact-item">
                <span>International Sales: +91 9900028434</span>
              </div>

              <div className="footer__contact-item">
                <span>Domestic Sales: +91 9900028433</span>
              </div>

              <div className="footer__contact-item">
                <span>Customer Support: +91 9900028437</span>
              </div>
                <Phone size={16} strokeWidth={1.8} />
            
              <a href="mailto:sales@relowings.com" className="footer__contact-item">
                <span>sales@relowings.com</span>
              </a>

              <a href="mailto:support@relowings.com" className="footer__contact-item">
                <span>support@relowings.com</span>
              </a>
              <div className="footer__contact-item">
                <span>
                  Ground Floor 6/2/1 Near Shri Kalyana Lakshmi Venkateswara Temple,
                  Ist Main Road Hebaal Kempapura, Hebbal,
                  Bangalore - 560024, Karnataka
                </span>
              </div>
            </address>

            {/* Newsletter */}
            <div className="footer__newsletter">
              <h4 className="footer__newsletter-title">Pet Travel Updates</h4>
              <p className="footer__newsletter-sub">Get tips, guides &amp; offers straight to your inbox.</p>
              <form
                className="footer__newsletter-form"
                onSubmit={(e) => e.preventDefault()}
                aria-label="Newsletter signup"
              >
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="footer__newsletter-input"
                  aria-label="Email address for newsletter"
                  required
                />
                <button type="submit" className="footer__newsletter-btn" aria-label="Subscribe to newsletter">
                  <Send size={15} strokeWidth={2} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p className="footer__copy">
            © {new Date().getFullYear()} Relowings. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <span aria-hidden="true">·</span>
            <a
              href="#terms"
              className="footer__legal-link"
              onClick={(e) => {
                e.preventDefault();
                onOpenTerms();
              }}
            >
              Terms & Conditions
            </a>
            <span aria-hidden="true">·</span>
            <a href="#" className="footer__legal-link">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
