import ServicePage from './ServicePage';

const paragraphs = [
  "Relocating to a new home or office can be stressful, especially when it comes to handling valuable belongings with care and safety. At Relowings, our Packers and Movers services are designed to provide a smooth, secure, and hassle-free moving experience for individuals, families, and businesses across India and internationally.",
  "We understand that every move is unique, which is why we offer customized relocation solutions tailored to your specific needs. Our experienced team carefully handles everything from packing and loading to transportation, unloading, and unpacking. Using high-quality packing materials and modern techniques, we ensure that your belongings remain safe and damage-free throughout the entire journey.",
  "At Relowings, we prioritize organization and efficiency. Our trained professionals systematically pack furniture, electronics, kitchen items, office equipment, fragile goods, and personal belongings with extra attention to detail. We use secure wrapping, cushioning, and labeling methods to make unpacking easier and more convenient at your new destination.",
  "For customers requiring temporary space during relocation, we also provide secure storage and warehouse facilities. Our climate-controlled and monitored storage units ensure that your belongings stay protected until you are ready to move them into your new location.",
  "Safety and reliability are at the core of our services. We maintain strict handling protocols, GPS-enabled transportation tracking, and professional supervision throughout the moving process. Our dedicated support team stays connected with you at every stage to provide updates and ensure complete peace of mind.",
  "In addition to residential relocation, we also specialize in office and commercial shifting services. We carefully plan and execute business relocations with minimal downtime so that your operations continue smoothly without unnecessary interruptions.",
  "Choosing Relowings Packers and Movers means choosing professionalism, safety, and convenience. From careful packing to timely delivery, we manage every aspect of your relocation with commitment and care. At Relowings, we do not just move your belongings — we move them with responsibility, protection, and trust.",
];

const highlights = [
  "Door-to-door packing & unpacking",
  "High-quality packing materials",
  "Furniture & fragile goods handling",
  "GPS-enabled vehicle tracking",
  "Secure warehouse & storage options",
  "Residential & commercial shifting",
  "Climate-controlled transport",
  "Trained & verified moving staff",
  "Pan India & international moves",
];

export default function PackersMovers({ onOpenTerms }) {
  return (
    <ServicePage
      heroImage="https://1.bp.blogspot.com/-xQb6HntEAOM/X241owxDrnI/AAAAAAAABhg/NDjJyUisHNsZvXssXqB-AGn8RTa_wGcDgCLcBGAsYHQ/w1200-h630-p-k-no-nu/packers-movers-hyderabad1.jpg"
      heroImageAlt="Professional packers carefully wrapping and boxing household items for relocation"
      badge="Packers & Movers"
      title="Packers & Movers"
      tagline="Professional, careful, and fully managed relocation of your home and office belongings."
      paragraphs={paragraphs}
      highlights={highlights}
      onOpenTerms={onOpenTerms}
    />
  );
}