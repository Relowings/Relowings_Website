import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ArrowLeft, Clock3, User2 } from 'lucide-react';

import internationalGuide from '../data/blogs/internationalGuide';
import checklist2025 from '../data/blogs/checklist2025';
import boardingFacility from '../data/blogs/boardingFacility';
import petHealth from '../data/blogs/petHealth';
import petAnxiety from '../data/blogs/petAnxiety';
import easiestCountries from '../data/blogs/easiestCountries';

import './BlogDetails.css';

const blogs = [
  internationalGuide,
  checklist2025,
  boardingFacility,
  petHealth,
  petAnxiety,
  easiestCountries,
];

export default function BlogDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const handleBack = () => {
  navigate('/');

  setTimeout(() => {
    const blogSection = document.getElementById('blog');

    if (blogSection) {
      blogSection.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }, 100);
};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const article = blogs.find((b) => b.slug === slug);

  if (!article) {
    return (
      <div className="blog-not-found">
        <h1>Blog Not Found</h1>
        <Link to="/">Go Back</Link>
      </div>
    );
  }

  return (
    <section className="blog-details">
      {/* HERO */}
      <div className="blog-hero">
        <img src={article.image} alt={article.title} />

        <div className="blog-hero-overlay">
          <button
            className="back-btn"
            onClick={handleBack}
          >
            ← Back
          </button>

          <div className="blog-hero-content">
            <span className="blog-category">
              {article.category}
            </span>

            <h1>{article.title}</h1>

            <p>{article.subtitle}</p>

            <div className="blog-meta">
              <span>
                <User2 size={16} />
                {article.author}
              </span>

              <span>
                <Clock3 size={10} />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="blog-content-wrapper">
        <article className="blog-content">
          {article.content
            .trim()
            .split('\n\n')
            .map((para, index) => (
              <p key={index}>{para}</p>
            ))}
        </article>
      </div>
    </section>

    
  );
}