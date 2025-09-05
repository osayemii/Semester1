import { useState, useMemo } from 'react';
import './style.css'
import sadImage from '../assets/sad.jpeg';
import img1 from '../assets/Bedroom/1.jpg'
import img2 from '../assets/Bedroom/2.jpg'
import img3 from '../assets/Bedroom/11.jpg'
import img4 from '../assets/Bedroom/4.jpg'
import img5 from '../assets/Bedroom/23.jpg'
import img6 from '../assets/Bedroom/24.jpg'
import img7 from '../assets/Bedroom/26.jpg'
import img8 from '../assets/Bedroom/43.jpg'
import img9 from '../assets/Bedroom/45.jpg'
import img10 from '../assets/Bedroom/46.jpg'
import img11 from '../assets/Bedroom/47.jpg'
import img12 from '../assets/Bedroom/12.jpg'
import img13 from '../assets/Bedroom/49.jpg'
import img14 from '../assets/Bedroom/60.jpg'
import img15 from '../assets/Bedroom/67.jpg'
import img16 from '../assets/Bedroom/68.jpg'

const initialProducts = [
    {
        id: 1,
        name: 'Minimalist Nightstand',
        definition: 'Light wood cabinet with two drawers and sleek black handles',
        image: img1,
        soldOut: false,
        price: 129.99,
        date: new Date('2025-08-15'),
    },
    {
        id: 2,
        name: 'Grooved Wood Nightstand',
        definition: 'Rustic cabinet with two drawers and sleek built-in handles.',
        image: img2,
        soldOut: false,
        price: 129.99,
        date: new Date('2025-08-15'),
    },
    {
        id: 3,
        name: 'Twin Bed Setup',
        definition: 'Two single beds with scalloped headboards and shared nightstand in a cozy layout.',
        image: img3,
        soldOut: false,
        price: 249.5,
        date: new Date('2025-08-20'),
    },
    {
        id: 4,
        name: 'Upholstered Bed Frame',
        definition: 'Wooden bed with padded headboard, built-in nightstands, and storage drawers.',
        image: img4,
        soldOut: false,
        price: 39.0,
        date: new Date('2025-08-10'),
    },
    {
        id: 5,
        name: 'Two-Tone Bedside Cabinet',
        definition: 'Modern nightstand with cream drawers and wood handles in a sleek design.',
        image: img5,
        soldOut: false,
        price: 129.99,
        date: new Date('2025-08-15'),
    },
    {
        id: 6,
        name: 'Velvet Bed Set',
        definition: 'Dark grey tufted bed with matching frame and twin nightstands in a cozy room.',
        image: img6,
        soldOut: false,
        price: 129.99,
        date: new Date('2025-08-15'),
    },
    {
        id: 7,
        name: 'Twin Stripe Bedroom',
        definition: 'Two single beds with striped covers, playful pillows, and overhead storage.',
        image: img7,
        soldOut: false,
        price: 249.5,
        date: new Date('2025-08-20'),
    },
    {
        id: 8,
        name: 'Panel Headboard Bedroom',
        definition: 'Dark grey bed with tall paneled headboard and floating nightstands with mirrors.',
        image: img8,
        soldOut: false,
        price: 39.0,
        date: new Date('2025-08-10'),
    },
    {
        id: 9,
        name: 'Striped Bunk Bed',
        definition: 'Wooden bunk bed with ladder, striped bedding, and built-in drawers.',
        image: img9,
        soldOut: false,
        price: 129.99,
        date: new Date('2025-08-15'),
    },
    {
        id: 10,
        name: 'Velvet Storage Bed',
        definition: 'Light pink upholstered bed with tall headboard, side drawers, and matching nightstands.',
        image: img10,
        soldOut: false,
        price: 129.99,
        date: new Date('2025-08-15'),
    },
    {
        id: 11,
        name: 'Frosted Glass Double Doors',
        definition: 'Dark wood doors with vertical frosted panels and sleek metal handles for a modern touch.',
        image: img11,
        soldOut: false,
        price: 249.5,
        date: new Date('2025-08-20'),
    },
    {
        id: 12,
        name: 'Classic White Nightstand',
        definition: 'Elegant four-drawer cabinet with square handles in a cozy bedroom setup.',
        image: img12,
        soldOut: false,
        price: 39.0,
        date: new Date('2025-08-10'),
    },
    {
        id: 13,
        name: 'Twin Beige Bedroom',
        definition: 'Two single beds with rounded headboards, soft tones, and sheer-curtained windows.',
        image: img13,
        soldOut: false,
        price: 129.99,
        date: new Date('2025-08-15'),
    },
    {
        id: 14,
        name: 'Biege Panel Bed Set',
        definition: 'Upholstered bed with tall beige headboard, vanity with lit round mirror, and cushioned bench.',
        image: img14,
        soldOut: false,
        price: 129.99,
        date: new Date('2025-08-15'),
    },
    {
        id: 15,
        name: 'Grey Mirror Bed',
        definition: 'Tall grey headboard with side mirrors, matching bench, and two-drawer nightstand.',
        image: img15,
        soldOut: false,
        price: 249.5,
        date: new Date('2025-08-20'),
    },
    {
        id: 16,
        name: 'Blue Accent Bed',
        definition: 'Dark grey bed with white mattress, paired with twin blue-and-white nightstands.',
        image: img16,
        soldOut: false,
        price: 39.0,
        date: new Date('2025-08-10'),
    },
];

function BedRoom() {
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
                    <input type="text" id='searchBar' placeholder="Search for bedroom..." maxLength={20} value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
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

export default BedRoom;