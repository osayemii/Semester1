import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownClick = () => {
    setIsCategoriesOpen(prev => !prev);
  };

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsCategoriesOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>

          <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
            <li><HashLink to="/#home" onClick={handleLinkClick}>Home</HashLink></li>
            <li><HashLink to="/#products" onClick={handleLinkClick}>Product</HashLink></li>

            <span id="main-dropdown">
              <span id="dropdown-cat" onClick={handleDropdownClick}>
                <span id="cat">Categories</span>
                <span id="svg">
                  <svg height="15" width="15" viewBox="0 0 630 700" xmlns="http://www.w3.org/2000/svg">
                    <path d="M622 106L311 417L0 106l65-65l246 245L556 41z" fill="currentColor" />
                  </svg>
                </span>
              </span>
              {isCategoriesOpen && (
                <ul id="dropdown">
                  <li><HashLink to="/categories/LivingRoom#searchAndSort" onClick={handleLinkClick}>Living Room</HashLink></li>
                  <li><HashLink to="/categories/BedRoom#searchAndSort" onClick={handleLinkClick}>Bed Room</HashLink></li>
                  <li><HashLink to="/categories/TableAndShelf#searchAndSort" onClick={handleLinkClick}>Table And Shelf</HashLink></li>
                  <li><HashLink to="/categories/TVstands#searchAndSort" onClick={handleLinkClick}>TV Stands</HashLink></li>
                  <li><HashLink to="/categories/Cupboard#searchAndSort" onClick={handleLinkClick}>Cupboard</HashLink></li>
                  <li><HashLink to="/categories/Door#searchAndSort" onClick={handleLinkClick}>Door</HashLink></li>
                  <li><HashLink to="/categories/Office#searchAndSort" onClick={handleLinkClick}>Office</HashLink></li>
                  <li><HashLink to="/categories/KitchenAndDinning#searchAndSort" onClick={handleLinkClick}>Kitchen And Dining Tables</HashLink></li>
                </ul>
              )}
            </span>

            <li><HashLink to="/#services" onClick={handleLinkClick}>Services</HashLink></li>
            <li><HashLink to="/#about" onClick={handleLinkClick}>About Us</HashLink></li>
            <li><HashLink to="/#contact" onClick={handleLinkClick}>Contact</HashLink></li>
          </nav>

          <button
            className="mobile-menu-toggle"
            onClick={() => {
              setIsMobileMenuOpen(prev => !prev);
              setIsCategoriesOpen(false);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;