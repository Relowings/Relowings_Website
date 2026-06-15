import { ArrowUpRight, Calendar, Tag } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import './Blog.css';

const posts = [
  {
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=280&fit=crop&auto=format&q=80',
    imageAlt: 'Airplane wing above clouds for international pet travel',
    category: 'Travel Guide',
    date: 'Jan 15, 2025',
    slug: "international-pet-relocation",
    title: 'Complete guide to international pet relocation',
    excerpt: 'Everything you need to know about moving your pet abroad — documents, health checks, airline rules, and destination country requirements.',
    readTime: '8 min read',
  },
  {
    image: 'https://img.freepik.com/premium-photo/image-businessfemale-preparing-checklist-office-desk_9635-1836.jpg?w=2000',
    imageAlt: 'Checklist and planning documents on desk',
    category: 'Checklist',
    date: 'Feb 3, 2025',
    slug: "ultimate-pet-relocation-checklist-for-2025",
    title: 'Ultimate pet relocation checklist for 2025',
    excerpt: 'A comprehensive step-by-step checklist covering every detail of domestic and international pet moves, from 12 weeks out to moving day.',
    readTime: '6 min read',
  },
  {
    image: 'https://allstarpetpatrol.com/wp-content/uploads/2023/06/mikemike2_dog_boarding_facility_with_many_happy_playing_dogs_in_ee02539c-9be5-4009-b6f0-26896f89f44d.jpg',
    imageAlt: 'Dog relaxing comfortably at a boarding facility',
    category: 'Boarding Tips',
    date: 'Feb 20, 2025',
    slug: "choosing-right-pet-boarding-facility",
    title: 'How to Choose the Right pet boarding facility',
    excerpt: 'Key factors to evaluate when selecting a boarding facility — safety standards, hygiene, staff qualifications, and enrichment activities.',
    readTime: '5 min read',
  },
  {
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=280&fit=crop&auto=format&q=80',
    imageAlt: 'Veterinarian conducting a health check on a dog',
    category: 'Vet Advice',
    date: 'Mar 5, 2025',
    slug: "pre-travel-health-requirements-for-pets",
    title: 'Pre-Travel health requirements for pets',
    excerpt: 'Understanding mandatory vaccinations, microchipping, health certificates, and what your vet needs to prepare before any relocation.',
    readTime: '7 min read',
  },
  {
    image: 'https://www.canadavetcare.com/blog/wp-content/uploads/2026/01/CVC-Blog-Preventing-and-Treating-travel-anxiety-in-dogs.jpg',
    imageAlt: 'Calm and relaxed dog on a comfortable blanket',
    category: 'Pet Wellbeing',
    date: 'Mar 18, 2025',
    slug: "reducing-travel-anxiety-in-dogs-and-cats",
    title: 'Reducing travel anxiety in dogs and cats',
    excerpt: 'Evidence-based tips and vet-approved techniques to keep your pet calm, comfortable, and stress-free throughout the relocation journey.',
    readTime: '6 min read',
  },
  {
    image: 'https://blog.dogtainers.com.au/wp-content/uploads/2024/10/Benefits-of-Pet-Transport-1024x614.webp',
    imageAlt: 'World map showing international pet travel routes',
    category: 'International',
    date: 'Apr 2, 2025',
    slug: "top-10-countries-with-easiest-pet-import-rules",
    title: 'Top 10 countries with easiest pet import rules',
    excerpt: 'A destination guide for pet-friendly countries — comparing import regulations, quarantine requirements, and best practices for each.',
    readTime: '9 min read',
  },
];

export default function Blog() {
  const sectionRef = useScrollReveal();

  return (
    <section id="blog" className="blog" ref={sectionRef} aria-labelledby="blog-title">
      <div className="container">
        <div className="blog__header reveal">
          <span className="section-tag">Blog &amp; Resources</span>
          <h2 className="section-title" id="blog-title">
            Pet Travel <span>Insights</span>
          </h2>
          <p className="section-subtitle">
            Expert advice, guides, and tips from India's leading pet relocation specialists.
          </p>
        </div>

        <div className="blog__grid" role="list">
          {posts.map((post, i) => (
            <article
              key={post.title}
              className={'blog__card reveal reveal-delay-' + ((i % 3) + 1)}
              role="listitem"
            >
              <div className="blog__cover">
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  className="blog__cover-img"
                  loading="lazy"
                  width="600"
                  height="280"
                />
                <div className="blog__cover-overlay" />
                <span className="blog__category">
                  <Tag size={11} strokeWidth={2.5} />
                  {post.category}
                </span>
              </div>

              <div className="blog__content">
                <div className="blog__meta">
                  <span className="blog__date">
                    <Calendar size={12} strokeWidth={2} />
                    {post.date}
                  </span>
                  <span className="blog__read-time">{post.readTime}</span>
                </div>

                <h3 className="blog__title">{post.title}</h3>
                <p className="blog__excerpt">{post.excerpt}</p>

                <Link
                  to={`/blog/${post.slug}`}
                  className="blog-card"
                >
                  <span>Read Article</span>
                  <ArrowUpRight size={14} strokeWidth={2} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="blog__footer reveal">
          {/* <a href="#" className="btn-secondary">View All Articles</a> */}
        </div>
      </div>
    </section>
  );
}
