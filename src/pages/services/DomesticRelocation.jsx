import ServicePage from './ServicePage';

const paragraphs = [
  "Moving within India can be just as stressful for pets as international travel. At Relowings, we make globally pet relocation simple, safe, and worry-free. Whether you are moving across states or to a new city, our team ensures your furry companion enjoys a comfortable and stress-free journey every step of the way.",
  "Globally pet relocation requires careful planning, from arranging the right mode of transport to ensuring pets are fit to travel. We provide both air and road transportation options based on your pet's comfort, size, and your travel requirements. Our team manages all pre-travel checks, including veterinary health certificates and travel crates, so your pet's journey complies with Indian regulations and airline guidelines.",
  "For pets traveling by air, we coordinate with trusted airlines that follow IPATA pet transport standards. Our trained staff supervises check-in, ensuring your pet boards calmly and safely. For road journeys, we offer climate-controlled vehicles and experienced handlers who provide care, hydration, and comfort during the trip. No matter the distance, your pet's safety and happiness remain our top priority.",
  "To make the relocation truly hassle-free, we offer door-to-door services. This means we pick up your pet directly from your home, manage the entire journey, and safely deliver them to your new destination. Throughout the process, our team shares real-time updates, so you always know where your pet is and how they are doing.",
  "What sets Relowings apart is our personalized care. We understand that every pet is unique, and we design travel plans that suit their temperament, health, and lifestyle. From providing the right food and water to giving them breaks during long road journeys, we go the extra mile to make sure your pet feels secure and loved.",
  "Choosing our Globally Pet Relocation service means choosing reliability, compassion, and professionalism. With Relowings, your pet's move across India is more than just transport — it's a safe, comfortable, and happy journey.",
];

const highlights = [
  "Air and road transport options",
  "IPATA-compliant airline coordination",
  "Climate-controlled road vehicles",
  "Veterinary health certificates",
  "Door-to-door pickup and delivery",
  "Real-time journey updates",
  "Experienced trained handlers",
  "Custom travel crates included",
  "Pan India coverage — 50+ cities",
];


export default function DomesticRelocation({ onOpenTerms }) {
  return (
    <ServicePage
      heroImage="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1600&h=700&fit=crop&auto=format&q=85"
      heroImageAlt="Happy dog looking out of a car window during domestic relocation"
      badge="Global Service"
      title="Globally Pet Relocation"
      tagline="Safe, door-to-door pet moves across every city and state in India."
      paragraphs={paragraphs}
      highlights={highlights}
      onOpenTerms={onOpenTerms}
    />
  );
}