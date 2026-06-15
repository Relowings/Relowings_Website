import ServicePage from './ServicePage';

const paragraphs = [
  "There are times when you may need to travel without your pet, and during such moments, finding a safe and loving place for them becomes essential. At Relowings, our pet boarding services are designed to give your furry companions a second home where they feel secure, comfortable, and cared for.",
  "Our boarding facilities are clean, hygienic, and designed with your pet's happiness in mind. We maintain separate areas for cats and dogs to ensure a stress-free environment, along with climate-controlled spaces for maximum comfort. Each pet is provided with adequate space, ventilation, and cozy bedding so they can relax and feel at home.",
  "At Relowings, your pet's daily routine is carefully managed. We provide nutritious meals, fresh water, regular exercise, and play sessions to keep them active and cheerful. Trained handlers spend quality time with each pet, giving them the attention and affection they need to reduce separation anxiety.",
  "For pets with special needs, we offer personalized care. This includes medical supervision, administering medications, and on-call veterinary support. Our team is trained to recognize signs of stress or discomfort, ensuring that every pet receives immediate attention whenever required. We also offer grooming and bathing services to keep your pet refreshed during their stay.",
  "Safety is one of our top priorities. Our facilities are monitored 24/7, and strict hygiene protocols are followed to prevent infections and ensure a healthy environment. We also take special care to maintain secure enclosures and safe play areas so that pets can move freely without risk.",
  "Choosing our Pet Boarding service means giving your pets a home away from home. With compassionate care, round-the-clock attention, and professional handling, we ensure that your pets stay happy, active, and well-cared for while you are away. At Relowings, we do not just board pets — we nurture them like family.",
];

const highlights = [
  "Separate areas for cats and dogs",
  "Climate-controlled comfortable spaces",
  "Nutritious meals & fresh water daily",
  "Regular exercise & play sessions",
  "24/7 facility monitoring & security",
  "On-call veterinary support",
  "Medication administration if needed",
  "Grooming and bathing services",
  "Daily updates sent to pet parents",
];

export default function PetBoarding({ onOpenTerms }) {
  return (
    <ServicePage
      heroImage="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1600&h=700&fit=crop&auto=format&q=85"
      heroImageAlt="Happy dog relaxing comfortably in a clean pet boarding facility"
      badge="Boarding & Daycare"
      title="Pet Boarding Facility"
      tagline="A safe, loving home away from home for your pets while you are away."
      paragraphs={paragraphs}
      highlights={highlights}
      onOpenTerms={onOpenTerms}
    />
  );
}