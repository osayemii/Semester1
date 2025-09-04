import React from 'react';
import './Services.css';

const scrollToContact = () => {
  const contactSection = document.getElementById('contact-form-co');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const services = [
  {
    id: 1,
    name: "Electrical Services",
    icon: "⚡",
    description: "Professional electrical installations, repairs, and maintenance for your home and office.",
    features: ["Wiring & Rewiring", "Lighting Installation", "Electrical Repairs", "Safety Inspections"],
    image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
  },
  {
    id: 2,
    name: "Plumbing Services",
    icon: "🔧",
    description: "Expert plumbing solutions from leak repairs to complete bathroom renovations.",
    features: ["Pipe Installation", "Leak Repairs", "Bathroom Fitting", "Emergency Services"],
    image: "https://images.unsplash.com/photo-1538474705339-e87de81450e8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGx1bWJpbmd8ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 3,
    name: "Tiling Services",
    icon: "🏠",
    description: "Beautiful tile installations for floors, walls, and backsplashes with precision craftsmanship.",
    features: ["Floor Tiling", "Wall Tiling", "Backsplash Design", "Tile Repair"],
    image: "https://structville.com/wp-content/uploads/2018/01/guidlines-to-quality-tiling-work.jpg"
  },
  {
    id: 4,
    name: "Tailoring Services",
    icon: "✂️",
    description: "Custom tailoring and alterations for perfect-fitting garments and home textiles.",
    features: ["Custom Clothing", "Alterations", "Curtain Making", "Upholstery"],
    image: "https://media.istockphoto.com/id/1412383343/photo/modern-sewing-machine-presser-foot-and-item-of-clothes-sewing-process-handmade-hobby-business.jpg?s=612x612&w=0&k=20&c=U2i15uFXlR_cHVM_QLosdMkuNmFT7PT466qoFgt-8N4="
  },
  {
    id: 5,
    name: "Welding Services",
    icon: "🔥",
    description: "Professional welding and metalwork for custom furniture frames and home fixtures.",
    features: ["Metal Fabrication", "Furniture Frames", "Gate Installation", "Repair Work"],
    image: "https://www.shutterstock.com/image-photo/industry-worker-welding-iron-pieces-600nw-1381444703.jpg"
  }
];

const Services = () => {
  return (
    <section id="services" className="section services-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2>Multipurpose Home Services</h2>
          <p>Beyond furniture, we offer comprehensive home services to complete your living space transformation.</p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={service.id} className={`service-card ${index % 2 === 0 ? 'card-left' : 'card-right'}`}>
              <div className="service-image">
                <img src={service.image} alt={service.name} />
                <p id='serviceId' style={{display: 'none'}}>{service.id}</p>
                <div className="service-icon">
                  <span>{service.icon}</span>
                </div>
              </div>
              <div className="service-content">
                <h3>{service.name}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a href="#contact-form-co"><button className="btn btn-primary service-btn">Get Quote</button></a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <div className="cta-content">
            <h3>Need Multiple Services?</h3>
            <p>Get a comprehensive quote for all your home improvement needs. We offer package deals for multiple services.</p>
            <button className="btn btn-secondary" onClick={scrollToContact}>Get Package Quote</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;