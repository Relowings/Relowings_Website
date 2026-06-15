import { useScrollReveal } from '../../hooks/useScrollReveal';
import './WhyRelowings.css';

const reasons = [
{
  // number: '01',
  image:
    'https://techstrong.ai/wp-content/uploads/2024/12/transparency-8728255_1280-1-600x257.jpg',
  title: '100% Transparency',
  description:
    'Complete visibility into every step — from pickup to delivery. No hidden fees, no surprises.',
  alt: 'Transparent pet relocation process with complete customer communication',
},

{
  // number: '02',
  image:
    'https://tse2.mm.bing.net/th/id/OIP.aF7_s0Q1smVjdEg-NRMiKgHaE8?rs=1&pid=ImgDetMain&o=7&rm=3',
  title: 'Experienced Team',
  description:
    'IPATA-certified professionals with years of specialized pet handling and logistics expertise.',
  alt: 'Experienced professional team handling pet relocation services',
},

{
  // number: '03',
  image:
    'https://st3.depositphotos.com/1350793/13202/i/450/depositphotos_132020242-stock-photo-customer-satisfaction-concept-with-young.jpg',
  title: '95%+ Happy Customers',
  description:
    'Our reputation is built on thousands of successful, stress-free pet relocations and glowing reviews.',
  alt: 'Happy pet owners satisfied with professional relocation services',
},

{
  // number: '04',
  image:
    'https://static.vecteezy.com/system/resources/previews/034/606/503/original/team-growth-teamwork-to-help-improve-working-and-achieve-success-work-together-or-cooperate-to-increase-efficiency-concept-vector.jpg',
  title: '100% Success Ratio',
  description:
    'Every pet we move arrives safely at the destination — our track record speaks for itself.',
  alt: 'Successful pet relocation and logistics service achievement concept',
},

{
  // number: '05',
  image:
    'https://cupertinovet.com/wp-content/uploads/2025/06/Young-Friends-at-the-Vet.jpg',
  title: '0% Casualty',
  description:
    'Absolute commitment to pet safety with vetted protocols, trained handlers, and emergency preparedness.',
  alt: 'Safe veterinary care and secure pet handling during relocation',
},

{
  // number: '06',
  image:
    'https://okcredit-blog-images-prod.storage.googleapis.com/2020/09/emi.jpg',
  title: 'Flexible Payment Terms',
  description:
    'EMI options, part payments, and corporate billing to make premium pet care accessible to all.',
  alt: 'Flexible payment options and EMI plans for pet relocation services',
},

{
  // number: '07',
  image:
    'https://www.mapnations.com/continents/maps/asia-regions-map.jpg',
  title: 'Pan-India & International',
  description:
    'Extensive network across 50+ Indian cities and 10+ countries worldwide.',
  alt: 'Pan India and international pet relocation network coverage map',
},

{
  // number: '08',
  image:
    'https://www.messagebuy.com/hubfs/Personalized-customer-experiences-1.png',
  title: 'Personalized Experience',
  description:
    'Every relocation plan is custom-built around your pet, health, temperament, and requirements.',
  alt: 'Personalized pet relocation experience tailored for every pet',
},

{
  // number: '09',
  image:
    'https://thumbs.dreamstime.com/b/stopwatch-hand-23946599.jpg',
  title: 'One-Stop End-to-End',
  description:
    'Documentation, health checks, travel crates, transport, customs — all under one roof.',
  alt: 'Complete end to end pet relocation and travel management services',
},

{
  // number: '10',
  image:
    'https://www.myitchydog.co.uk/wp-content/uploads/2024/05/Canine-car-restraints-1.jpg',
  title: 'Safety & Comfort Focused',
  description:
    'Certified crates, climate-controlled transport, and constant monitoring ensure your pet wellbeing.',
  alt: 'Safe and comfortable pet transportation with secure travel arrangements',
},

{
  // number: '11',
  image:
    'https://www.qinvest.com/sites/default/files/banners/geographic.jpg',
  title: 'Broad Geographic Reach',
  description:
    'We cover Tier-1, Tier-2, and Tier-3 cities in India along with major international destinations.',
  alt: 'Wide geographic reach for domestic and international pet relocation',
},

{
  // number: '12',
  image:
    'https://www.ringcentral.com/gb/en/blog/wp-content/uploads/2021/05/customer-centric_strategy-640x411.jpg',
  title: 'Customer-Centric Values',
  description:
    '24/7 support, real-time updates, and dedicated relationship managers for every client.',
  alt: 'Customer centric pet relocation support and service assistance',
},
];

export default function WhyRelowings() {
  const sectionRef = useScrollReveal();

  return (
    <section
      id="why"
      className="why"
      ref={sectionRef}
      aria-labelledby="why-title"
    >
      <div className="why__bg" aria-hidden="true">
        <div className="why__bg-blob why__bg-blob--1" />
        <div className="why__bg-blob why__bg-blob--2" />
      </div>

      <div className="container">

        <div className="why__header reveal">
          <span className="section-tag">
            Why Choose Us
          </span>

          <h2 className="section-title" id="why-title">
            Why <span>Relowings</span>
          </h2>

          <p className="section-subtitle">
            12 reasons pet parents across India and beyond trust us with
            their most precious family members.
          </p>
        </div>

        <div className="why__grid" role="list">

          {reasons.map((r, i) => {
            const delayNum = (i % 4) + 1;

            return (
              <div
                key={r.title}
                className={
                  'why__card reveal reveal-delay-' + delayNum
                }
                role="listitem"
              >

                <div className="why__image-wrapper">
                  <img
                    src={r.image}
                    alt={r.title}
                    className="why__image"
                  />
                </div>

                <div className="why__content">

                  <span className="why__number">
                    {r.number}
                  </span>

                  <h3 className="why__title">
                    {r.title}
                  </h3>

                  <p className="why__desc">
                    {r.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}