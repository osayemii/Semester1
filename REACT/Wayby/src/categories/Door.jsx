import React, { useState, useMemo } from 'react';
import { HashLink } from 'react-router-hash-link'
import './style.css'
import sadImage from '../assets/sad.jpeg';
import img1 from '../assets/Door/4.jpg';
import img2 from '../assets/Door/5.jpg';
import img3 from '../assets/Door/15.jpg';
import img4 from '../assets/Door/16.jpg';
import img5 from '../assets/Door/19.jpg';
import img6 from '../assets/Door/20.jpg';
import img7 from '../assets/Door/22.jpg';
import img8 from '../assets/Door/29.jpg';
import img9 from '../assets/Door/31.jpg';
import img10 from '../assets/Door/32.jpg';
import img11 from '../assets/Door/34.jpg';
import img12 from '../assets/Door/35.jpg';
import img13 from '../assets/Door/36.jpg';
import img14 from '../assets/Door/37.jpg';
import img15 from '../assets/Door/50.jpg';
import img16 from '../assets/Door/66.jpg';
import img17 from '../assets/Door/70.jpg';

const initialProducts = [
    {
        id: 1,
        name: 'Panel Grip Door',
        definition: 'Horizontal wood panels with full-length handle and sleek finish.',
        image: img1,
        soldOut: false,
        price: 129.99,
        date: new Date('2025-08-15'),
    },
    {
        id: 2,
        name: 'Classic White Double Door',
        definition: 'White paneled double door with embossed frame and metallic handles.',
        image: img2,
        soldOut: false,
        price: 129.99,
        date: new Date('2025-08-15'),
    },
    {
        id: 3,
        name: 'Striped Wood Door',
        definition: 'Light wood door with vertical metal strip and black handle.',
        image: img3,
        soldOut: false,
        price: 249.5,
        date: new Date('2025-08-20'),
    },
    {
        id: 4,
        name: 'Light Panel Door',
        definition: 'Light wood door with rectangular panel and black handle.',
        image: img4,
        soldOut: false,
        price: 39.0,
        date: new Date('2025-08-10'),
    },
    {
        id: 5,
        name: 'Rich Wood Door',
        definition: 'Dark wood door with metal handle and tiled floor base.',
        image: img5,
        soldOut: false,
        price: 129.99,
        date: new Date('2025-08-15'),
    },
    {
        id: 6,
        name: 'Dark Grain Door',
        definition: 'Vertical grain wood door with black handle and matching frame.',
        image: img6,
        soldOut: false,
        price: 129.99,
        date: new Date('2025-08-15'),
    },
    {
        id: 7,
        name: 'Horizontal Grain Door',
        definition: 'Wood door with horizontal grain and sleek metal handle.',
        image: img7,
        soldOut: false,
        price: 249.5,
        date: new Date('2025-08-20'),
    },
    {
        id: 8,
        name: 'Sliding Glass Panel Door',
        definition: 'Wooden sliding door with five vertical glass inserts and concealed track.',
        image: img8,
        soldOut: false,
        price: 39.0,
        date: new Date('2025-08-10'),
    },
    {
        id: 9,
        name: 'Frosted Panel Door',
        definition: 'Light wood door with three horizontal frosted glass inserts and metal handle.',
        image: img9,
        soldOut: false,
        price: 129.99,
        date: new Date('2025-08-15'),
    },
    {
        id: 10,
        name: 'Open Grain Door',
        definition: 'Horizontal wood grain door with black handle and matching frame.',
        image: img10,
        soldOut: false,
        price: 129.99,
        date: new Date('2025-08-15'),
    },
    {
        id: 11,
        name: 'Corner Grain Door',
        definition: 'Dark horizontal grain door with black handle and exposed hinges.',
        image: img11,
        soldOut: false,
        price: 249.5,
        date: new Date('2025-08-20'),
    },
    {
        id: 12,
        name: 'White Frosted Glass Door',
        definition: 'White door with three vertical frosted panels and gold handle.',
        image: img12,
        soldOut: false,
        price: 39.0,
        date: new Date('2025-08-10'),
    },
    {
        id: 13,
        name: 'Sliding Panel Door',
        definition: 'White-framed sliding glass doors with wood side panels.',
        image: img13,
        soldOut: false,
        price: 129.99,
        date: new Date('2025-08-15'),
    },
    {
        id: 14,
        name: 'Geometric Double Door',
        definition: 'Brown double door with angular wood grain and central metal strip.',
        image: img14,
        soldOut: false,
        price: 129.99,
        date: new Date('2025-08-15'),
    },
    {
        id: 15,
        name: 'White Grid Glass Door',
        definition: 'White door with 3×3 frosted glass panels and gold handle.',
        image: img15,
        soldOut: false,
        price: 249.5,
        date: new Date('2025-08-20'),
    },
    {
        id: 16,
        name: 'Matte Grey Door',
        definition: 'Grey door with digital lock, set in matching wall paneling.',
        image: img16,
        soldOut: false,
        price: 39.0,
        date: new Date('2025-08-10'),
    },
    {
        id: 17,
        name: 'Gold-Trim Wood Door',
        definition: 'Brown wood door with gold inlays and dark handle.',
        image: img17,
        soldOut: false,
        price: 39.0,
        date: new Date('2025-08-10'),
    },
];

function Door() {
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
                    <input type="text" id='searchBar' placeholder="Search for door..." maxLength={20} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
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

export default Door;