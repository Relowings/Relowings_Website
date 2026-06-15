import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Vision.css';

const visions = [
  {
    number: '01',
    text: 'To be the world\'s most trusted pet relocation partner, ensuring every journey is safe, stress-free, and filled with care.',
    color: 'blue',
  },
  {
    number: '02',
    text: 'To redefine pet travel through compassionate service, innovative logistics, and unwavering commitment to animal welfare.',
    color: 'teal',
  },
  {
    number: '03',
    text: 'To make global relocation seamless for pets and owners, blending safety, transparency, and personalized care in every move.',
    color: 'blue',
  },
  {
    number: '04',
    text: 'To create a future where every pet moves with dignity and comfort, supported by expert handlers and cutting-edge solutions.',
    color: 'teal',
  },
  {
    number: '05',
    text: 'To set the gold standard in pet relocation by prioritizing safety, happiness, and peace of mind for families everywhere.',
    color: 'blue',
  },
  {
    number: '06',
    text: 'To transform pet relocation into a trusted, effortless experience — where love, safety, and professionalism guide every mile.',
    color: 'teal',
  },
];

export default function Vision() {
  const sectionRef = useScrollReveal();

  return (
    <section id="vision" className="vision" ref={sectionRef} aria-labelledby="vision-title">

      {/* Background */}
      <div className="vision__bg" aria-hidden="true">
        <div className="vision__blob vision__blob--1" />
        <div className="vision__blob vision__blob--2" />
      </div>

      <div className="container">

        {/* Header */}
        <div className="vision__header reveal">
          <span className="section-tag">Our Vision</span>
          <h2 className="section-title vision__heading" id="vision-title">
            What We <span>Stand For</span>
          </h2>
          <p className="section-subtitle vision__sub">
            Six commitments that define who we are and how we serve every pet and family we work with.
          </p>
        </div>

        {/* Cards grid */}
        <div className="vision__grid" role="list">
          {visions.map((v, i) => (
            <div
              key={v.number}
              className={'vision__card vision__card--' + v.color + ' reveal reveal-delay-' + ((i % 3) + 1)}
              role="listitem"
            >
              <span className="vision__number" aria-hidden="true">{v.number}</span>
              <div className={'vision__line vision__line--' + v.color} aria-hidden="true" />
              <p className="vision__text">{v.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}