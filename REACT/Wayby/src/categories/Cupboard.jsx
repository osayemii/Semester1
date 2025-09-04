import React, { useState, useMemo } from 'react';
import { HashLink } from 'react-router-hash-link'
import './style.css';
import img1 from '../assets/Cupboard/14.jpg'
import img2 from '../assets/Cupboard/25.jpg'
import img3 from '../assets/Cupboard/30.jpg'
import img4 from '../assets/Cupboard/38.jpg'
import img5 from '../assets/Cupboard/41.jpg'
import img6 from '../assets/Cupboard/44.jpg'
import img7 from '../assets/Cupboard/51.jpg'
import img8 from '../assets/Cupboard/52.jpg'
import img9 from '../assets/Cupboard/59.jpg'
import img10 from '../assets/Cupboard/48.jpg'
import sadImage from '../assets/sad.jpeg'

const initialProducts = [
    {
        id: 1,
        name: 'Built-In Wardrobe Unit',
        definition: 'Spacious wooden wardrobe with open shelves and tall storage compartments.',
        image: img1,
        soldOut: false,
        price: 129.99,
        date: new Date('2025-08-15'),
    },
    {
        id: 2,
        name: 'Custom Walk-In Closet',
        definition: 'Light wood closet with open shelves, drawers, and cozy seating areas.',
        image: img2,
        soldOut: false,
        price: 129.99,
        date: new Date('2025-08-15'),
    },
    {
        id: 3,
        name: 'Mirrored Wardrobe Unit',
        definition: 'Modern wardrobe with mirrored doors, wood drawers, and sleek handles.',
        image: img3,
        soldOut: false,
        price: 249.5,
        date: new Date('2025-08-20'),
    },
    {
        id: 4,
        name: 'White Panel Wardrobe',
        definition: 'Modern built-in wardrobe with sleek black handles and clean white finish.',
        image: img4,
        soldOut: false,
        price: 39.0,
        date: new Date('2025-08-10'),
    },
    {
        id: 5,
        name: 'Beige Entry Wardrobe',
        definition: 'Built-in unit with tall cabinets, open shelves, and cushioned bench with hooks.',
        image: img5,
        soldOut: false,
        price: 129.99,
        date: new Date('2025-08-15'),
    },
    {
        id: 6,
        name: 'Walk-In Closet Suite',
        definition: 'Spacious wood closet with shelves, drawers, and hanging space in a sleek layout.',
        image: img6,
        soldOut: false,
        price: 129.99,
        date: new Date('2025-08-15'),
    },
    {
        id: 7,
        name: 'Glass-Door Closet',
        definition: 'Modern walk-in closet with lit glass wardrobes, open shelves, and sleek drawers.',
        image: img7,
        soldOut: false,
        price: 249.5,
        date: new Date('2025-08-20'),
    },
    {
        id: 8,
        name: 'Corner Wardrobe Setup',
        definition: 'Light wood wardrobe with mirror, drawers, and open shelves in a cozy bedroom corner.',
        image: img8,
        soldOut: false,
        price: 39.0,
        date: new Date('2025-08-10'),
    },
    {
        id: 9,
        name: 'Dual-Tone Wardrobe',
        definition: 'White and taupe cabinet with drawers, shelves, and sleek black handles.',
        image: img9,
        soldOut: false,
        price: 39.0,
        date: new Date('2025-08-10'),
    },
    {
        id: 10,
        name: 'Glass-Front Closet Display',
        definition: 'Dark wardrobe with lit glass cabinets, sleek drawers, and marble flooring.',
        image: img10,
        soldOut: false,
        price: 39.0,
        date: new Date('2025-08-10'),
    },
];

function Cupboard() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortKey, setSortKey] = useState('default');

    // derive list based on search & sort
    const displayed = useMemo(() => {
        let list = [...initialProducts];

        // filter by search term
        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            list = list.filter(
                p =>
                    p.name.toLowerCase().includes(term) ||
                    p.definition.toLowerCase().includes(term)
            );
        }

        // sort by selected key
        if (sortKey === 'priceLowToHigh') {
            list.sort((a, b) => a.price - b.price);
        } else if (sortKey === 'priceHighToLow') {
            list.sort((a, b) => b.price - a.price);
        } else if (sortKey === 'newArrivals') {
            list.sort((a, b) => b.date - a.date);
        }

        return list;
    }, [searchTerm, sortKey]);

    return (
        <>
            <div className="searchAndSort" id='searchAndSort'>
                {/* SEARCH */}
                <div id="search">
                    <input type="text" id='searchBar' placeholder="Search for cupboard..." maxLength={20} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
                    <span id="icon">
                        <svg height="20" width="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.195 0c4.527 0 8.196 3.62 8.196 8.084a7.989 7.989 0 0 1-1.977 5.267l5.388 5.473a.686.686 0 0 1-.015.98a.71.71 0 0 1-.993-.014l-5.383-5.47a8.23 8.23 0 0 1-5.216 1.849C3.67 16.169 0 12.549 0 8.084C0 3.62 3.67 0 8.195 0Zm0 1.386c-3.75 0-6.79 2.999-6.79 6.698c0 3.7 3.04 6.699 6.79 6.699s6.791-3 6.791-6.699c0-3.7-3.04-6.698-6.79-6.698Z" fill="#6c6c6cff" />
                        </svg>
                    </span>
                </div>

                {/* SORT */}
                <div id="sort">
                    <select id="sortBy" value={sortKey} onChange={e => setSortKey(e.target.value)}>
                        <option value="newArrivals">New Arrivals</option>
                        <option value="priceLowToHigh">Price: Low to High</option>
                        <option value="priceHighToLow">Price: High to Low</option>
                    </select>
                </div>
            </div>

            {/* PRODUCT GRID */}
            {displayed.length > 0 ?
                <div className="product-list">
                    {displayed.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                                {product.soldOut && (
                                    <div className="product-overlay">
                                        <button className="btn btn-primary">Sold Out</button>
                                    </div>
                                )}
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p className="product-description">{product.definition}</p>
                                <div className="product-footer">
                                    {/* <button
                                        className="btn btn-secondary" id='buyBtn'
                                        disabled={product.soldOut}
                                    >
                                        <HashLink to="/#contact" smooth>
                                            Get in Touch
                                        </HashLink>
                                    </button> */}
                                </div>
                            </div>
                        </div>
                    ))}
                </div> : (
                    <div className="no-results">
                        <img src={sadImage} alt="No products found" className="sad-icon" />
                        <h2 className="conditionH2">
                            Ohh no... we couldn’t find any product matching your search.
                            <br />Try a different keyword or check back later.
                        </h2>
                    </div>
                )}
        </>
    );
}

export default Cupboard;