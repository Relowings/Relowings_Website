import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ChevronDown, Menu, X,
  PlaneTakeoff, Phone
} from 'lucide-react';
import './Navbar.css';

const services = [
  {
    title: 'Globally Pet Relocation',
    path: '/services/domestic-relocation',
    image:
      'https://www.petmovers.in/assets/images/domestic-pet-relocation.jpg',
  },

  // {
  //   title: 'International Pet Relocation',
  //   path: '/services/international-relocation',
  //   image:
  //     'https://www.petmovers.in/assets/images/international-pet-relocation.jpg',
  // },

  {
    title: 'Pet Boarding',
    path: '/services/pet-boarding',
    image:
      'https://www.petbacker.com/blog/images/pet-boarding.jpg',
  },

  {
    title: 'Vet Consultation',
    path: '/services/vet-consultation',
    image:
      'https://tse4.mm.bing.net/th/id/OIP.I_s42u2nrPhQqqvsZwVHAQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
  },

  {
    title: 'Packers & Movers',
    path: '/services/packers-movers',
    image:
      'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=500&auto=format&fit=crop',
  },
  {
    title: 'Warehouse Facility',
    path: '/services/storage-facility',
    image:
    'https://tse1.mm.bing.net/th/id/OIP.dU6Am5PsSMRQ5zPNueINiQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
  },
];

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services', hasDropdown: true },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMobileToggle = () => {
    setMobileOpen((v) => !v);
    document.body.style.overflow = mobileOpen ? '' : 'hidden';
  };

  const handleNavClick = () => {
    setMobileOpen(false);
    setDropdownOpen(false);
    document.body.style.overflow = '';
  };

  const navbarClass = scrolled ? 'navbar navbar--scrolled' : 'navbar';
  const dropdownClass = dropdownOpen ? 'navbar__dropdown navbar__dropdown--open' : 'navbar__dropdown';
  const chevronClass = dropdownOpen ? 'navbar__chevron rotated' : 'navbar__chevron';
  const btnClass = dropdownOpen ? 'navbar__link navbar__link--btn active' : 'navbar__link navbar__link--btn';
  const mobileMenuClass = mobileOpen ? 'mobile-menu mobile-menu--open' : 'mobile-menu';

  return (
    <>
      <header className={navbarClass} role="banner">
        <div className="navbar__inner container">
          <a href="#home" className="navbar__logo" aria-label="Relowings Home">
          <img
            src="https://relowings.com/images/top-logo.png"
            alt="Relowings Logo"
            className="navbar__logo-image"
            loading="eager"
          />
        </a>

          <nav className="navbar__nav" aria-label="Main navigation">
            <ul className="navbar__links" role="list">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <li key={link.label} className="navbar__item navbar__item--dropdown" ref={dropdownRef}>
                    <button
                      className={btnClass}
                      onClick={() => setDropdownOpen((v) => !v)}
                      aria-expanded={dropdownOpen}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <ChevronDown size={14} className={chevronClass} />
                    </button>
                    <div className={dropdownClass} role="menu">
                      <div className="navbar__dropdown-grid">
{services.map((s) => (
  <Link
    key={s.title}
    to={s.path}
    className="navbar__dropdown-item"
    role="menuitem"
    onClick={handleNavClick}
  >
    <span className="navbar__dropdown-image">
      <img
        src={s.image}
        alt={s.title}
        loading="lazy"
      />
    </span>

    <span className="navbar__dropdown-text">
      <strong>{s.title}</strong>
    </span>
  </Link>
))}
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={link.label} className="navbar__item">
                    <a href={link.href} className="navbar__link" onClick={handleNavClick}>
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          <div className="navbar__actions">
            <a href="tel: +91 9900028437" className="navbar__phone" aria-label="Call us">
              <Phone size={16} strokeWidth={2} />
            </a>
            <a href="#contact" className="navbar__cta btn-primary" onClick={handleNavClick}>
              Book Appointment
            </a>
          </div>

          <button
            className="navbar__hamburger"
            onClick={handleMobileToggle}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <div className={mobileMenuClass} aria-hidden={!mobileOpen}>
        <div className="mobile-menu__inner">
          <nav aria-label="Mobile navigation">
            <ul className="mobile-menu__links" role="list">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <li key={link.label}>
                    <button
                      className="mobile-menu__link mobile-menu__link--btn"
                      onClick={() => setDropdownOpen((v) => !v)}
                    >
                      {link.label}
                      <ChevronDown size={16} className={dropdownOpen ? 'rotated' : ''} />
                    </button>
                    {dropdownOpen && (
                      <ul className="mobile-menu__sub" role="list">
                        {services.map((s) => (
                          <li key={s.title}>
                            <Link to={s.path} className="mobile-menu__sub-link" onClick={handleNavClick}>
                              <img
                                src={s.image}
                                alt={s.title}
                                className="mobile-menu__service-image"
                                loading="lazy"
                              />
                              {s.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ) : (
                  <li key={link.label}>
                    <a href={link.href} className="mobile-menu__link" onClick={handleNavClick}>
                      {link.label}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
          <a href="#contact" className="btn-primary mobile-menu__cta" onClick={handleNavClick}>
            Book Appointment
          </a>
        </div>
      </div>

      {mobileOpen && <div className="mobile-overlay" onClick={handleMobileToggle} aria-hidden="true" />}
    </>
  );
}
