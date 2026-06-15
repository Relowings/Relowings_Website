import { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.css';

const contactInfo = [
  // {
  //   icon: Phone,
  //   label: 'International Sales',
  //   value: '+91 9900028434',
  //   sub: 'International Pet Relocation',
  //   color: 'blue',
  // },
  // {
  //   icon: Phone,
  //   label: 'Globally Sales',
  //   value: '+91 9900028433',
  //   sub: 'Pet & Packers and Movers',
  //   color: 'teal',
  // },
  {
    icon: Phone,
    label: 'Mobile Number',
    value: '+91 9900028434',
    sub: '24/7 Customer Assistance',
    color: 'accent',
  },
  {
    icon: Mail,
    label: 'Sales Email',
    value: 'sales@relowings.com',
    sub: 'Sales & Business Queries',
    color: 'green',
  },
  {
    icon: Mail,
    label: 'Support Email',
    value: 'support@relowings.com',
    sub: 'Customer Support Team',
    color: 'blue',
  },
  {
    icon: MapPin,
    label: 'Office Address',
    value: 'Hebbal, Bangalore',
    sub: 'Ground Floor 6/2/1, Near Shri Kalyana Lakshmi Venkateswara Temple, 1st Main Road, Hebbal Kempapura, Bangalore - 560024',
    color: 'teal',
  },
];

export default function Contact() {
  const sectionRef = useScrollReveal();
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    // petType: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value,
  });
};

const handleSubmit = (e) => {
  e.preventDefault();

  const message = `
*New Inquiry From Website*

 Name: ${form.name}

 Phone: ${form.phone}

 Email: ${form.email}

 Service: ${form.service}

 Message:
${form.message}
  `;

  const whatsappURL =
    `https://wa.me/919900028434?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, '_blank');

  setSubmitted(true);

  setTimeout(() => {
    setSubmitted(false);
  }, 5000);

  setForm({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
};

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSubmitted(true);
  //   setTimeout(() => setSubmitted(false), 5000);
  //   setForm({ name: '', email: '', phone: '', petType: '', service: '', message: '' });
  // };

  return (
    <section id="contact" className="contact" ref={sectionRef} aria-labelledby="contact-title">
      <div className="container">

        <div className="contact__header reveal">
          <span className="section-tag">Contact Us</span>
          <h2 className="section-title" id="contact-title">
            Get In <span>Touch</span>
          </h2>
          <p className="section-subtitle">
            Ready to plan your pet's safe move? Fill in the form and our specialists will reach out within 2 hours.
          </p>
        </div>

        <div className="contact__inner">

          {/* Info cards */}
          <div className="contact__info reveal">
            {contactInfo.map((c) => (
              <div key={c.label} className={'contact__info-card contact__info-card--' + c.color}>
                <span className={'contact__info-icon contact__info-icon--' + c.color}>
                  <c.icon size={20} strokeWidth={1.8} />
                </span>
                <div className="contact__info-text">
                  <span className="contact__info-label">{c.label}</span>
                  <strong className="contact__info-value">{c.value}</strong>
                  <span className="contact__info-sub">{c.sub}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="contact__form-wrap reveal reveal-delay-2">
            {submitted ? (
              <div className="contact__success" role="alert">
                <CheckCircle2 size={48} strokeWidth={1.5} />
                <h3>Message Received!</h3>
                <p>Our team will contact you within 2 hours. Thank you for trusting Relowings with your pet's journey!</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <h3 className="contact__form-title">Book Free Consultation</h3>
                <p className="contact__form-sub">Fill in the details and we'll build a custom plan for your pet.</p>

                <div className="contact__row">
                  <div className="contact__field">
                    <label htmlFor="name" className="contact__label">Full Name *</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="contact__input"
                      placeholder="Your full name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="phone" className="contact__label">Phone Number *</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="contact__input"
                      placeholder="+91 XXXXX XXXXX"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      autoComplete="tel"
                    />
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="email" className="contact__label">Email Address *</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="contact__input"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </div>

                <div className="contact__row">
                  {/* <div className="contact__field">
                    <label htmlFor="petType" className="contact__label">Pet Type</label>
                    <select
                      id="petType"
                      name="petType"
                      className="contact__input contact__select"
                      value={form.petType}
                      onChange={handleChange}
                    >
                      <option value="">Select pet type</option>
                      <option value="dog">Dog</option>
                      <option value="cat">Cat</option>
                      <option value="bird">Bird</option>
                      <option value="rabbit">Rabbit</option>
                      <option value="other">Other</option>
                    </select>
                  </div> */}
                  <div className="contact__field contact__field--full">
                    <label htmlFor="service" className="contact__label">Service Type</label>
                    <select
                      id="service"
                      name="service"
                      className="contact__input contact__select"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service</option>
                      <option value="domestic">Domestic Pet Relocation</option>
                      <option value="international">International Pet Relocation</option>
                      <option value="boarding">Pet Boarding</option>
                      <option value="vet">Vet Consultation</option>
                      <option value="packers">Packers & Movers</option>
                      <option value="storage">Storage Facility</option>
                    </select>
                  </div>
                </div>

                <div className="contact__field">
                  <label htmlFor="message" className="contact__label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="contact__input contact__textarea"
                    placeholder="Tell us about your pet, destination, timeline..."
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                  />
                </div>

                <button type="submit" className="contact__submit btn-primary">
                  <Send size={16} strokeWidth={2} />
                  Send Message & Get Quote
                </button>

                <p className="contact__disclaimer">
                  Your data is secure. We never share personal information.
                </p>
              </form>
            )}
          </div>

        </div>

        {/* Full-width Google Map — below both columns */}
        <div className="contact__map-full">
          <div className="contact__map-header">
            <MapPin size={18} strokeWidth={2} />
            <span>Ground Floor 6/2/1, 1st Main Road, Hebbal Kempapura, Hebbal, Bangalore – 560024, Karnataka</span>
          </div>
          <iframe
            className="contact__map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5196584224!2d77.5945916!3d13.0499074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17c3b1a2b4e7%3A0xf0eab61e8d89f741!2sHebbal%2C%20Bengaluru%2C%20Karnataka%20560024!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="420"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Relowings Office – Hebbal, Bangalore"
          />
        </div>

      </div>
    </section>
  );
}