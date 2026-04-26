import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import CareServices from './pages/CareServices';
import OurFacility from './pages/OurFacility';
import Contact from './pages/Contact';

export default function App() {
  return (
    <div className="font-sans min-h-screen flex flex-col" style={{ backgroundColor: 'var(--color-bg-main)' }}>
      <Header />
      
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/care-services" element={<CareServices />} />
          <Route path="/our-facility" element={<OurFacility />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
}
