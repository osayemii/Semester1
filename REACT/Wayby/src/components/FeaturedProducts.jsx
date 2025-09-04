import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './FeaturedProducts.css';
import img12 from '../assets/12.jpg';
import img4 from '../assets/4.jpg';
import img14 from '../assets/14.jpg';
import img7 from '../assets/7.jpg';
import img2 from '../assets/2.jpg';

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

function FeaturedProducts() {  
  const products = [
    {
      id: 1,
      name: "Classic Cupboard",
      price: "$1,299",
      image: img12, // Use the imported image variable
      description: "Handcrafted wooden cupboard with intricate carvings and ample storage space.",
      linkTo: "/categories/Cupboard#searchAndSort"
    },
    {
      id: 2,
      name: "Carved Dressing Mirror",
      price: "$2,199",
      image: img4, 
      description: "Luxurious dressing mirror with timeless design and supreme comfort.",
      linkTo: "/categories/BedRoom#searchAndSort"
    },
    {
      id: 3,
      name: "Luxurious Wet Kitchen",
      price: "$899",
      image: img14,
      description: "Kitchen with all the modern amenities and a luxurious finish.",
      linkTo: "/categories/KitchenAndDinning#searchAndSort"
    },
    {
      id: 4,
      name: "Upholstered Armchair",
      price: "$749",
      image: img2,
      description: "Comfortable armchair with premium fabric upholstery.",
      linkTo: "/categories/LivingRoom#searchAndSort"
    },
    {
      id: 5,
      name: "Rustic Coffee Table",
      price: "$599",
      image: "https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
      description: "Handcrafted rustic coffee table with natural wood finish.",
      linkTo: "/categories/TableAndShelf#searchAndSort"
    },
    {
      id: 6,
      name: "Massive Golden Cupboard",
      price: "$1,599",
      image: img7,
      description: "Premium executive cupboard with built-in storage and elegant design.",
      linkTo: "/categories/Cupboard#searchAndSort"
    }
  ];

  return (
    <section id="products" className="section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2>Featured Collection</h2>
          <p>Discover our most popular pieces, carefully selected for their exceptional quality and timeless appeal.</p>
        </div>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <HashLink to={product.linkTo}><button className="btn btn-primary">View Details</button></HashLink>
                </div>
              </div>
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-footer">
                  {/* <button className="btn btn-secondary" onClick={scrollToContact}>Buy Now</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;