import React, { useState, useEffect, useRef } from 'react';
import { Home, Droplets, Wifi, Trees, Sun, ChevronLeft, ChevronRight } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function OurFacility() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const thumbnailTrackRef = useRef(null);

  const galleryImages = [
    "/images/bedroom_1.png",
    "/images/bedroom_2.png",
    "/images/bedroom_3.png",
    "/images/bedroom_4.png",
    "/images/bedroom_5.png",
    "/images/bathroom_1.jpg",
    "/images/bathroom_2.jpg",
    "/images/dining_table.jpg",
    "/images/kitchen.jpg",
    "/images/living_room_2.png",
    "/images/back_porch_clean.png",
    "/images/backyard_clean.png"
  ];

  // Reveal Animations on Scroll
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page loads

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSetImage = (idx) => {
    if (currentIndex === idx || isFading) return;
    setIsFading(true);
    setTimeout(() => {
      setCurrentIndex(idx);
      setIsFading(false);
      
      // Auto-scroll the thumbnail track
      if (thumbnailTrackRef.current && thumbnailTrackRef.current.children[idx]) {
        thumbnailTrackRef.current.children[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }, 200); // Wait for fade out to complete
  };

  const nextImage = () => {
    let newIndex = currentIndex + 1;
    if (newIndex >= galleryImages.length) newIndex = 0;
    handleSetImage(newIndex);
  };

  const prevImage = () => {
    let newIndex = currentIndex - 1;
    if (newIndex < 0) newIndex = galleryImages.length - 1;
    handleSetImage(newIndex);
  };

  return (
    <main className="flex-grow" style={{ paddingTop: '8rem', paddingBottom: '5rem', overflowX: 'hidden' }}>
      
      {/* HERO SECTION */}
      <section className="relative mx-auto px-safe" style={{ maxWidth: '80rem', marginBottom: '4rem' }}>
        {/* Dark Mission Box */}
        <div className="bg-primary text-white text-center relative shadow-2xl reveal" style={{ borderRadius: '3rem', paddingTop: '5rem', paddingBottom: '12rem', paddingLeft: '1.5rem', paddingRight: '1.5rem' }}>
          {/* Squiggle SVGs */}
          <svg viewBox="0 0 200 200" fill="none" className="absolute pointer-events-none hidden md-block opacity-50" style={{ width: '16rem', height: '16rem', top: '2.5rem', left: '2.5rem' }}>
            <path d="M-20,150 C40,180 80,50 120,40 C160,30 180,80 220,100" stroke="var(--color-secondary)" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <svg viewBox="0 0 200 200" fill="none" className="absolute pointer-events-none hidden md-block opacity-50" style={{ width: '16rem', height: '16rem', bottom: '5rem', right: '2.5rem', transform: 'rotate(180deg)' }}>
            <path d="M-20,150 C40,180 80,50 120,40 C160,30 180,80 220,100" stroke="var(--color-secondary)" strokeWidth="3" strokeLinecap="round" />
          </svg>
          
          <p className="text-secondary font-bold tracking-widest text-sm uppercase" style={{ marginBottom: '1.5rem' }}>Our Home</p>
          <h1 className="font-serif font-light z-10 relative mx-auto" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', maxWidth: '56rem', marginBottom: '2.5rem', lineHeight: 1.1 }}>
            A safe, comfortable, and beautiful place to call home.
          </h1>
          
          <div className="flex justify-center relative z-10" style={{ gap: '1rem' }}>
            <NavLink to="/contact" className="btn-primary" style={{ textDecoration: 'none', padding: '0.75rem 2rem', borderRadius: '9999px' }}>
              Schedule a Tour
            </NavLink>
          </div>
        </div>

        {/* Overlapping Image — PREMIUM FLUID STYLING */}
        <div className="flex justify-center relative z-20 reveal delay-100" style={{ marginTop: '-6rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
          <div 
            className="w-full overflow-hidden" 
            style={{ 
              maxWidth: '800px', 
              height: 'clamp(220px, 40vw, 450px)', 
              borderRadius: '2.5rem',
              boxShadow: '0 20px 50px rgba(14,59,62,0.15)',
              backgroundColor: '#fff'
            }}
          >
            <img 
              src="/images/front_of_home.png" 
              alt="Front view of Homegrown Adult Family Home" 
              className="w-full h-full object-cover"
              style={{ borderRadius: '2.5rem' }}
            />
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center mx-auto text-center reveal delay-200" style={{ gap: 'clamp(2rem, 8vw, 8rem)', marginTop: '3rem', maxWidth: '56rem' }}>
          <div>
            <h3 className="font-serif font-bold text-primary flex items-start justify-center" style={{ fontSize: '3rem', marginBottom: '0.25rem' }}>
              5
            </h3>
            <p className="font-bold text-xs tracking-widest uppercase" style={{ color: 'var(--color-text-muted)' }}>Rooms (4 Private + 1 Shared)</p>
            <p className="text-xs" style={{ color: 'var(--color-text-muted)', marginTop: '0.15rem' }}>shared room holds 2 patients</p>
          </div>
          <div>
            <h3 className="font-serif font-bold text-primary flex items-start justify-center" style={{ fontSize: '3rem', marginBottom: '0.25rem' }}>
              2
            </h3>
            <p className="font-bold text-xs tracking-widest uppercase" style={{ color: 'var(--color-text-muted)' }}>Bathrooms</p>
          </div>
          <div>
            <h3 className="font-serif font-bold text-primary flex items-start justify-center" style={{ fontSize: '3rem', marginBottom: '0.25rem' }}>
              100<span className="text-secondary font-black" style={{ fontSize: '1.875rem' }}>%</span>
            </h3>
            <p className="font-bold text-xs tracking-widest uppercase" style={{ color: 'var(--color-text-muted)' }}>Generator Backed</p>
          </div>
        </div>
      </section>

      {/* AMENITIES SECTION — STEP 1: stacks on mobile */}
      <section className="relative mx-auto px-safe" style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '80rem' }}>
        <div className="grid grid-cols-2 items-center" style={{ gap: '3rem' }}>
          <div className="relative reveal">
            <svg viewBox="0 0 200 200" fill="none" className="absolute pointer-events-none opacity-60 z-0 hidden md-block" style={{ width: '18rem', height: '18rem', top: '-4rem', left: '-2.5rem' }}>
              <path d="M-20,150 C40,180 80,50 120,40 C160,30 180,80 220,100" stroke="var(--color-secondary)" strokeWidth="3" strokeLinecap="round" />
            </svg>
            {/* PREMIUM FLUID STYLING */}
            <div 
              className="w-full overflow-hidden relative z-10" 
              style={{ 
                borderRadius: '2.5rem',
                boxShadow: '0 20px 50px rgba(14,59,62,0.15)',
                height: 'clamp(220px, 40vw, 450px)',
                backgroundColor: '#fff'
              }}
            >
              <img 
                src="/images/living_room_1.png" 
                alt="Bright and comfortable living space designed for accessibility" 
                className="w-full h-full object-cover"
                style={{ borderRadius: '2.5rem' }}
              />
            </div>
          </div>
          <div className="reveal delay-100">
            <h2 className="font-serif text-primary leading-tight" style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)', marginBottom: '2rem' }}>
              Designed for Comfort & Accessibility
            </h2>
            <div className="text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem' }}>
              <p>
                Our facility is thoughtfully designed to feel just like home, while incorporating subtle, essential accessibility features to ensure every resident can move freely and safely.
              </p>
              
              <div className="flex flex-col" style={{ gap: '1.25rem', marginTop: '2rem' }}>
                <div className="flex items-center" style={{ gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: '#f4f7f4' }}>
                    <Home className="text-primary" style={{ width: '1.5rem', height: '1.5rem' }} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-primary">Gorgeous Hardwood Floors</h4>
                    <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>Smooth, safe, and easy to navigate for walkers and wheelchairs.</p>
                  </div>
                </div>
                <div className="flex items-center" style={{ gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: '#f4f7f4' }}>
                    <Droplets className="text-primary" style={{ width: '1.5rem', height: '1.5rem' }} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-primary">Accessible Roll-in Shower</h4>
                    <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>Designed for dignity, ease of use, and maximum safety during bathing.</p>
                  </div>
                </div>
                <div className="flex items-center" style={{ gap: '1rem' }}>
                  <div style={{ padding: '0.75rem', borderRadius: '0.75rem', backgroundColor: '#f4f7f4' }}>
                    <Wifi className="text-primary" style={{ width: '1.5rem', height: '1.5rem' }} />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-primary">Cable & Internet</h4>
                    <p className="text-sm" style={{ color: 'var(--color-text-light)' }}>Complimentary high-speed internet and cable provided for all residents.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PREMIUM PHOTO GALLERY SLIDER — Step 4: replaced borderTop with smooth wave divider */}
      <div className="w-full overflow-hidden" style={{ marginTop: '3rem' }}>
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{ width: '100%', height: '48px', color: 'var(--color-bg-main)', fill: 'currentColor' }}>
          <path d="M0,0 C480,0 960,48 1440,48 L1440,0 L0,0 Z"></path>
        </svg>
      </div>
      <section className="mx-auto px-safe" style={{ paddingTop: '4rem', paddingBottom: '4rem', maxWidth: '72rem' }}>
        <div className="text-center reveal" style={{ marginBottom: '3rem' }}>
          <h2 className="font-serif text-primary section-h2" style={{ marginBottom: '1.5rem' }}>A Glimpse Inside</h2>
          <p className="text-lg mx-auto" style={{ color: 'var(--color-text-muted)', maxWidth: '42rem' }}>
            Explore our beautifully furnished private bedrooms, accessible bathrooms, and bright, welcoming common areas.
          </p>
        </div>

        <div className="reveal delay-100 flex flex-col" style={{ gap: '1rem' }}>
          {/* STEP 3: Gallery main image — fluid height */}
          <div className="relative w-full overflow-hidden group bg-gray-100" style={{ height: 'clamp(240px, 50vw, 550px)', boxShadow: '0 8px 30px rgba(0,0,0,0.12)' }}>
            <img 
              src={galleryImages[currentIndex]} 
              alt={`Facility View ${currentIndex + 1}`} 
              className="w-full h-full object-cover"
              style={{ transition: 'opacity 0.4s ease-in-out', opacity: isFading ? 0 : 1 }}
            />
            
            {/* Glassmorphism Navigation Arrows */}
            <button onClick={prevImage} className="absolute flex items-center justify-center rounded-full text-white transition-all shadow-lg" style={{ left: '1rem', top: '50%', transform: 'translateY(-50%)', width: '3rem', height: '3rem', backgroundColor: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.4)', zIndex: 10 }}>
              <ChevronLeft style={{ width: '1.5rem', height: '1.5rem' }} />
            </button>
            <button onClick={nextImage} className="absolute flex items-center justify-center rounded-full text-white transition-all shadow-lg" style={{ right: '1rem', top: '50%', transform: 'translateY(-50%)', width: '3rem', height: '3rem', backgroundColor: 'rgba(255,255,255,0.3)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255,255,255,0.4)', zIndex: 10 }}>
              <ChevronRight style={{ width: '1.5rem', height: '1.5rem' }} />
            </button>
          </div>

          {/* Scrollable Thumbnail Track */}
          <div 
            ref={thumbnailTrackRef}
            className="flex overflow-x-auto" 
            style={{ gap: '1rem', padding: '0.5rem 0.25rem', msOverflowStyle: 'none', scrollbarWidth: 'none', scrollSnapType: 'x mandatory' }}
          >
            {galleryImages.map((src, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div 
                  key={idx}
                  onClick={() => handleSetImage(idx)}
                  className="flex-none cursor-pointer transition-all duration-300"
                  style={{ 
                    width: '8rem', height: '8rem', 
                    scrollSnapAlign: 'center',
                    opacity: isActive ? 1 : 0.5,
                    transform: isActive ? 'scale(1)' : 'scale(0.95)'
                  }}
                >
                  <img src={src} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* OUTDOOR & DECK PICTURE — STEP 1: stacks on mobile */}
      <section className="mx-auto px-safe" style={{ paddingTop: '2rem', paddingBottom: '4rem', maxWidth: '80rem' }}>
        <div className="bg-primary text-white relative overflow-hidden reveal shadow-2xl" style={{ borderRadius: '2rem', padding: 'clamp(1.5rem, 5vw, 4rem)' }}>
          {/* Abstract BG pattern — Hidden on mobile for readability, visible on desktop */}
          <svg viewBox="0 0 400 400" className="absolute pointer-events-none hidden md-block opacity-10" style={{ right: 0, top: 0, width: '500px', height: '500px', transform: 'translateX(33.33%) translateY(-25%)' }}>
            <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="40" fill="none" />
          </svg>

          {/* grid-cols-2 stacks to 1-col on mobile via CSS */}
          <div className="grid grid-cols-2 relative z-10 items-center" style={{ gap: '2rem' }}>
            <div>
              <h2 className="font-serif text-secondary" style={{ fontSize: 'clamp(1.875rem, 3vw, 2.25rem)', marginBottom: '1.5rem' }}>Enjoy the Outdoors</h2>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-teal-light)', marginBottom: '1.5rem' }}>
                Residents have full access to our beautifully maintained garden and outdoor deck area—perfect for morning coffee, reading, or visiting with family on a sunny afternoon.
              </p>
              <div className="flex flex-wrap" style={{ gap: '1rem' }}>
                <div className="flex items-center" style={{ gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '0.75rem', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <Trees className="text-white" style={{ width: '1.25rem', height: '1.25rem' }} /> 
                  <span className="font-serif font-medium text-sm">Garden</span>
                </div>
                <div className="flex items-center" style={{ gap: '0.5rem', padding: '0.5rem 1rem', borderRadius: '0.75rem', backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <Sun className="text-white" style={{ width: '1.25rem', height: '1.25rem' }} /> 
                  <span className="font-serif font-medium text-sm">Outdoor Deck</span>
                </div>
              </div>
            </div>

            {/* Image container — PREMIUM FLUID STYLING */}
            <div 
              className="overflow-hidden group relative" 
              style={{ 
                height: 'clamp(220px, 40vw, 400px)',
                borderRadius: '2.5rem',
                boxShadow: '0 20px 50px rgba(14,59,62,0.15)',
                backgroundColor: '#fff'
              }}
            >
              <div style={{ position: 'absolute', inset: 0, transition: 'background-color 0.5s', zIndex: 10, pointerEvents: 'none', backgroundColor: 'rgba(14,59,62,0.2)' }} />
              <img 
                src="/images/backyard.png" 
                alt="Beautifully maintained garden and outdoor deck area" 
                className="w-full h-full object-cover transition-transform duration-700 z-0"
                style={{ borderRadius: '2.5rem' }}
              />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
