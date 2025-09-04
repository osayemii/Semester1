import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import LivingRoom from './categories/LivingRoom';
import KitchenAndDinning from './categories/KitchenAndDinning';
import BedRoom from './categories/BedRoom';
import Cupboard from './categories/Cupboard';
import Office from './categories/Office';
import Door from './categories/Door';
import TVstands from './categories/TVstands';
import TableAndShelf from './categories/TableAndShelf';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Routes>
          {/* Home page */}
          <Route path="/" element={
            <>
              <Hero />
              <FeaturedProducts />
              <Categories />
              <Services />
              <About />
              <Contact />
            </>
          } />

          {/* Category pages */}
          <Route path="/categories/LivingRoom" element={<LivingRoom />} />
          <Route path="/categories/KitchenAndDinning" element={<KitchenAndDinning />} />
          <Route path="/categories/BedRoom" element={<BedRoom />} />
          <Route path="/categories/Cupboard" element={<Cupboard />} />
          <Route path="/categories/Office" element={<Office />} />
          <Route path="/categories/Door" element={<Door />} />
          <Route path="/categories/TVstands" element={<TVstands />} />
          <Route path="/categories/TableAndShelf" element={<TableAndShelf />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;