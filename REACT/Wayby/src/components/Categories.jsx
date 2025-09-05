import React from 'react';
import './Categories.css';
import { HashLink } from 'react-router-hash-link';

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
    linkCat: "/categories/Cupboard#searchAndSort"
  },
  {
    id: 2,
    name: "Dining Room",
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Beautiful dining sets for memorable family meals",
    linkCat: "/categories/KitchenAndDinning#searchAndSort"
  },
  {
    id: 3,
    name: "Bedroom",
    image: "https://images.pexels.com/photos/1571468/pexels-photo-1571468.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Luxurious beds and storage solutions for restful nights",
    linkCat: "/categories/BedRoom#searchAndSort"
  },
  {
    id: 4,
    name: "Office",
    image: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Productive workspaces with classic style and functionality",
    linkCat: "/categories/Office#searchAndSort"
  },
  {
    id: 5,
    name: "Door",
    image: "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Elegant storage solutions to organize your home beautifully",
    linkCat: "/categories/Door#searchAndSort"
  },
  {
    id: 6,
    name: "TV Stand",
    image: "https://images.pexels.com/photos/1571458/pexels-photo-1571458.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    description: "Weather-resistant furniture for your outdoor living spaces",
    linkCat: "/categories/TVStand#searchAndSort"
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
                    <HashLink to={category.linkCat}><button className="btn btn-primary">Shop Now</button></HashLink>
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