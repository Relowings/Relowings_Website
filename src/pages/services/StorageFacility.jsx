import ServicePage from './ServicePage';

const paragraphs = [
  "At Relowings, we understand that during relocation, travel, renovation, or business expansion, you may require a secure place to store your valuable belongings safely. Our Storage Facility services are designed to provide reliable, flexible, and fully secure storage solutions for both personal and commercial needs.",
  "Our storage facilities are modern, clean, and equipped with advanced security systems to ensure maximum protection of your belongings. Whether you need short-term or long-term storage, we offer spacious and well-maintained units suitable for furniture, household goods, office equipment, documents, electronics, and other valuable items.",
  "We prioritize safety and organization at every step. All stored items are carefully packed, labeled, and arranged systematically to prevent damage and ensure easy accessibility whenever needed. Our facilities are climate-controlled and ventilated to protect sensitive belongings from moisture, heat, dust, and environmental damage.",
  "At Relowings, security is one of our highest priorities. Our warehouses are monitored 24/7 with CCTV surveillance, secure access control systems, and professional supervision. We also follow strict hygiene and maintenance protocols to ensure a clean and pest-free environment for all stored items.",
  "For customers relocating internationally or temporarily shifting locations, our flexible storage plans provide the convenience of storing belongings safely until delivery is required. We also offer pickup, transportation, inventory management, and doorstep delivery services, making the entire storage process smooth and stress-free.",
  "Our trained team handles every item with care and professionalism. From packing fragile goods to managing large furniture and office assets, we ensure that your belongings remain protected throughout their storage duration.",
  "Choosing Relowings Storage Facility means choosing safety, convenience, and peace of mind. With secure infrastructure, professional handling, and flexible storage solutions, we ensure that your valuables stay protected and accessible whenever you need them. At Relowings, we don’t just store your belongings — we safeguard them with responsibility and trust.",
];

const highlights = [
  "Short-term & long-term storage",
  "24/7 CCTV surveillance",
  "Climate-controlled warehouse",
  "Safe & secure storage units",
  "Pickup & doorstep delivery",
  "Inventory management support",
  "Professional packing assistance",
  "Furniture & office equipment storage",
  "Clean & pest-free environment",
];

export default function StorageFacility({ onOpenTerms }) {
  return (
    <ServicePage
      heroImage="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&h=700&fit=crop&auto=format&q=85"
      heroImageAlt="Modern secure storage warehouse with organized storage units"
      badge="Secure Warehousing"
      title="Storage Facility"
      tagline="Safe, flexible, and fully secured storage solutions for your personal and commercial belongings."
      paragraphs={paragraphs}
      highlights={highlights}
      onOpenTerms={onOpenTerms}
    />
  );
}