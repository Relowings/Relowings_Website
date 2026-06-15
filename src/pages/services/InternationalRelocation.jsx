import ServicePage from './ServicePage';

const paragraphs = [
  "Relocating your pet overseas can feel overwhelming, but with Relowings, it becomes a seamless and stress-free experience. We understand that pets are family, and their comfort, safety, and well-being come first. Our international pet relocation service is designed to handle every detail of the journey, ensuring your furry companion reaches you happy and healthy no matter where in the world you move.",
  "The process of moving pets abroad involves complex steps such as documentation, vaccinations, microchipping, customs regulations, and airline approvals. Our experienced team takes complete responsibility for these formalities, guiding you through country-specific requirements to avoid last-minute issues. From government health certificates to quarantine clearances, we ensure your pet's travel documents are always in order.",
  "At Relowings, we arrange IPATA-approved travel crates customized to your pet's size and comfort. These crates are designed to provide proper ventilation, safety, and a cozy environment during long journeys. Our trained handlers carefully supervise the check-in process, making sure your pet boards the flight calmly. We only collaborate with trusted airlines that follow strict international pet transport guidelines, guaranteeing safety from departure to arrival.",
  "Once your pet arrives at the destination, our global partners assist with customs clearance and doorstep delivery. If a country requires a quarantine period, we manage the boarding facilities with 24/7 care, ensuring your pet's comfort until they can be reunited with you. Throughout the process, our team keeps you updated with regular communication so you always know where your pet is and how they are doing.",
  "Choosing Relowings means choosing a partner who values compassion, safety, and expertise. We take pride in treating every pet like our own, ensuring they receive the love and care they deserve while traveling across borders. With us, international pet relocation becomes more than just a service — it becomes a journey of trust, comfort, and happy reunions.",
];

const highlights = [
  "Complete documentation & customs clearance",
  "IPATA-approved travel crates",
  "Country-specific health certificates",
  "Rabies titer tests & import permits",
  "Trusted airline coordination",
  "Quarantine facility management",
  "24/7 real-time journey updates",
  "Door-to-door global delivery",
  "Post-arrival support & guidance",
];

export default function InternationalRelocation({ onOpenTerms }) {
  return (
    <ServicePage
      heroImage="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&h=700&fit=crop&auto=format&q=85"
      heroImageAlt="Airplane flying above clouds representing international pet relocation"
      badge="International Service"
      title="International Pet Relocation"
      tagline="Safe, compliant, and compassionate pet moves to any destination worldwide."
      paragraphs={paragraphs}
      highlights={highlights}
      onOpenTerms={onOpenTerms}
    />
  );
}