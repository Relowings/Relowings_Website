import { useEffect } from 'react';
import { ArrowLeft, CheckCircle2, Phone, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './ServicePage.css';


export default function ServicePage({
  heroImage,
  heroImageAlt,
  badge,
  title,
  tagline,
  paragraphs,
  highlights,
  onOpenTerms,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sp-root">
      <Navbar />

      <main>
        <div className="sp-hero">
          <img
            src={heroImage}
            alt={heroImageAlt}
            className="sp-hero__img"
            loading="eager"
          />
          <div className="sp-hero__overlay" />
          <div className="sp-hero__content container">
            <span className="sp-hero__badge">{badge}</span>
            <h1 className="sp-hero__title">{title}</h1>
            <p className="sp-hero__tagline">{tagline}</p>
            <div className="sp-hero__btns">
              <a href="/#contact" className="btn-primary sp-hero__cta">
                Get Free Quote
                <ArrowRight size={16} strokeWidth={2.5} />
              </a>
              <button
                className="sp-back-btn"
                onClick={() => navigate(-1)}
                aria-label="Go back"
              >
                <ArrowLeft size={16} strokeWidth={2} />
                Go Back
              </button>
            </div>
          </div>
        </div>

        <section className="sp-body">
          <div className="container sp-body__inner">

            <div className="sp-text">
              {paragraphs.map((para, i) => (
                <p key={i} className="sp-para">{para}</p>
              ))}
            </div>

            <aside className="sp-sidebar">
              {highlights && highlights.length > 0 && (
                <div className="sp-highlights">
                  <h3 className="sp-highlights__title">What We Offer</h3>
                  <ul className="sp-highlights__list">
                    {highlights.map((h) => (
                      <li key={h} className="sp-highlights__item">
                        <CheckCircle2 size={16} strokeWidth={2.5} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="sp-cta-card">
                <div className="sp-cta-card__icon">🐾</div>
                <h4 className="sp-cta-card__title">Ready to Get Started?</h4>
                <p className="sp-cta-card__sub">
                  Talk to our experts and get a free customized quote for your pet's journey.
                </p>
                <a href="/#contact" className="btn-primary sp-cta-card__btn">
                  Book Free Consultation
                </a>
                <a href="tel:+919900028434" className="sp-cta-card__call">
                  <Phone size={15} strokeWidth={2} />
                  +91 9900028434
                </a>
              </div>
            </aside>

          </div>
        </section>
      </main>

      <Footer onOpenTerms={onOpenTerms} />
    </div>
  );
}