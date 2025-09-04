import React from 'react';
import './Categories.css';

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

const categories = [
  {
    id: 1,
    name: "Living Room",
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Comfortable seating and elegant tables for your living space",
    linkCat: {}
  },
  {
    id: 2,
    name: "Dining Room",
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Beautiful dining sets for memorable family meals"
  },
  {
    id: 3,
    name: "Bedroom",
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Luxurious beds and storage solutions for restful nights"
  },
  {
    id: 4,
    name: "Home Office",
    image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Productive workspaces with classic style and functionality"
  },
  {
    id: 5,
    name: "Storage",
    image: "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Elegant storage solutions to organize your home beautifully"
  },
  {
    id: 6,
    name: "Outdoor",
    image: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Weather-resistant furniture for your outdoor living spaces"
  }
];

const Categories = () => {
  return (
    <section id="categories" className="section bg-light">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2>Shop by Category</h2>
          <p>Explore our extensive collection organized by room and function to find exactly what you need.</p>
        </div>
        
        <div className="categories-grid grid grid-3">
          {categories.map((category) => (
            <div key={category.id} className="category-card">
              <div className="category-image">
                <img src={category.image} alt={category.name} />
                <div className="category-overlay">
                  <div className="category-content">
                    <h3>{category.name}</h3>
                    <p>{category.description}</p>
                    <button className="btn btn-primary" onClick={scrollToContact}>Shop Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;