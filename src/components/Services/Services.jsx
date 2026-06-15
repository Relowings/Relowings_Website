import { ArrowUpRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { Link } from 'react-router-dom';
import './Services.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

const services = [
  {
    image:
      'https://www.petmovers.in/assets/images/domestic-pet-relocation.jpg',
    title: 'Globally Pet Relocation',
    path: '/services/domestic-relocation',
    desc:
      'Safe and stress-free pet relocation services across India with expert handling, climate-safe transport, and real-time support for your beloved companions.',
    color: 'blue',
    tag: 'Most Popular',
    alt: 'Safe domestic and global pet relocation service for dogs and cats',
  },

  // {
  //   image:
  //     'https://pawfly.in/wp-content/uploads/2024/11/International-pet-relocation.jpeg',
  //   title: 'International Pet Relocation',
  //   path: '/services/international-relocation',
  //   desc:
  //     'Complete international pet relocation including documentation, health certification, customs clearance, airline coordination, and end-to-end travel support.',
  //   color: 'teal',
  //   tag: null,
  //   alt: 'International pet travel and relocation with airline and documentation support',
  // },

  {
    image:
      'https://www.petbacker.com/blog/images/pet-boarding.jpg',
    title: 'Pet Boarding',
    path: '/services/pet-boarding',
    desc:
      'Premium pet boarding facilities with hygienic spaces, regular supervision, nutritious meals, and stress-free comfort for your pets.',
    color: 'purple',
    tag: null,
    alt: 'Premium pet boarding facility with safe and comfortable environment',
  },

  {
    image:
      'https://www.baysidevets.com.au/wp-content/uploads/2023/04/vet-consultation.jpg',
    title: 'Vet Consultation',
    path: '/services/vet-consultation',
    desc:
      'Professional veterinary support including vaccination checks, travel fitness certification, microchipping, and complete travel documentation.',
    color: 'green',
    tag: null,
    alt: 'Professional veterinary consultation and pet health check services',
  },

  {
    image:
      'https://images.unsplash.com/photo-1600518464441-9154a4dea21b?q=80&w=1400&auto=format&fit=crop',
    title: 'Packers & Movers',
    path: '/services/packers-movers',
    desc:
      'Reliable packing and moving solutions for families relocating with pets, ensuring safe logistics and smooth transitions.',
    color: 'orange',
    tag: null,
    alt: 'Professional packers and movers service for household relocation',
  },

  {
    image:
      'https://tse1.mm.bing.net/th/id/OIP.dU6Am5PsSMRQ5zPNueINiQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
    title: 'Warehouse Facility',
    path: '/services/storage-facility',
    desc:
      'Secure climate-controlled temporary boarding and storage facilities for pets and belongings during relocation.',
    color: 'pink',
    tag: null,
    alt: 'Secure warehouse and climate-controlled storage facility for belongings',
  },
];

export default function Services() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="services"
      className="services"
      ref={sectionRef}
      aria-labelledby="services-title"
    >
      <div className="container">

        <div className="services__header reveal">
          <span className="section-tag">Our Services</span>

          <h2 className="section-title" id="services-title">
            Everything Your <span>Pet Needs</span>
          </h2>

          <p className="section-subtitle">
            From your doorstep to the destination — we handle every detail with
            love, expertise, and absolute care.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="services__slider"
        >
          {services.map((s, i) => (
            <SwiperSlide key={s.title}>
              <article
                className={
                  'services__card services__card--' +
                  s.color +
                  ' reveal reveal-delay-' +
                  ((i % 3) + 1)
                }
                aria-label={s.title}
              >
                {s.tag && (
                  <span
                    className="services__tag"
                    aria-label="Most popular service"
                  >
                    {s.tag}
                  </span>
                )}

                <div className="services__card-inner">

                  <div className="services__banner">
                    <img
                      src={s.image}
                      alt={s.alt}
                      className="services__banner-img"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="services__title">
                    {s.title}
                  </h3>

                  <p className="services__desc">
                    {s.desc}
                  </p>

                  <Link
                    to={s.path}
                    className="services__cta"
                  >
                    Explore Service
                    <ArrowUpRight
                      size={15}
                      strokeWidth={2.5}
                    />
                  </Link>

                </div>

                <div
                  className="services__card-bg"
                  aria-hidden="true"
                />

              </article>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
}