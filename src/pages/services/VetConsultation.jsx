import ServicePage from './ServicePage';

const paragraphs = [
  "Relocating a pet requires more than just transport — it requires proper medical preparation and professional veterinary care. At Relowings, our vet consultation services are designed to ensure that your pet is fit, healthy, and fully prepared for both domestic and international journeys.",
  "Every country and airline has specific health requirements for pet travel. Our experienced veterinarians guide you through these regulations, helping you avoid last-minute issues. From administering the right vaccinations to issuing fit-to-fly health certificates, we make sure your pet meets all necessary travel standards.",
  "Our services include general health checkups, vaccination updates, parasite control treatments, and microchipping. For international travel, we also assist with specialized requirements such as rabies antibody (titer) tests, import/export permits, and documentation approved by government authorities. With our expert support, your pet's paperwork remains accurate and compliant with destination rules.",
  "Beyond compliance, we focus on your pet's overall well-being. Our vets provide personalized care plans, nutritional guidance, and advice on reducing travel anxiety. For pets with specific health conditions, we offer tailored recommendations to make their journey as safe and comfortable as possible.",
  "At Relowings, we know that every pet is unique. Our veterinary consultations are not just about meeting formalities — they are about building confidence and ensuring peace of mind. We take the time to answer your questions, guide you through the medical process, and support you until your pet is fully ready for travel.",
  "Choosing our Vet Consultation service means choosing a partner who values compassion and expertise. With us, you can rest assured that your furry friend receives the best medical attention before, during, and after relocation. Healthy pets make happy journeys, and we are here to make that happen.",
];

const highlights = [
  "Full pre-travel health checkup",
  "Vaccination updates & records",
  "Microchipping services",
  "Fit-to-fly health certificates",
  "Rabies titer (antibody) tests",
  "Parasite control treatments",
  "Import/export documentation",
  "Travel anxiety management advice",
  "Post-travel wellness assessment",
];

export default function VetConsultation({ onOpenTerms }) {
  return (
    <ServicePage
      heroImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1600&h=700&fit=crop&auto=format&q=85"
      heroImageAlt="Veterinarian conducting a thorough health examination on a dog"
      badge="Health & Wellness"
      title="Vet Consultation"
      tagline="Expert veterinary care ensuring your pet is healthy, certified, and travel-ready."
      paragraphs={paragraphs}
      highlights={highlights}
      onOpenTerms={onOpenTerms}
    />
  );
}