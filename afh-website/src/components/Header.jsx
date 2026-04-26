import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close overlay on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const getNavLinkClass = ({ isActive }) =>
    isActive ? 'nav-link font-bold text-secondary' : 'nav-link';

  const isDarkText = !isScrolled && location.pathname !== '/';

  const close = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`nav-bar ${isScrolled ? 'nav-scrolled' : 'nav-top'}`}
        style={isDarkText ? { color: 'var(--color-primary)' } : {}}
      >
        {/* Logo / Brand */}
        <NavLink
          to="/"
          className="flex items-center gap-16px cursor-pointer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <div
            className="bg-white rounded-full flex items-center justify-center shadow-lg overflow-hidden border"
            style={{ width: '48px', height: '48px', padding: '2px', borderColor: 'var(--color-border-light)' }}
          >
            <img src="/images/logo.png" alt="Homegrown AFH Logo" className="w-full h-full object-cover rounded-full" />
          </div>
          <span className="font-serif text-xl font-bold tracking-wide">Homegrown AFH</span>
        </NavLink>

        {/* Desktop nav links */}
        <div className="hidden md-flex gap-32px text-sm font-medium">
          <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
          <a href="/about.html" className="nav-link">About Us</a>
          <NavLink to="/our-facility" className={getNavLinkClass}>Our Facility</NavLink>
          <NavLink to="/care-services" className={getNavLinkClass}>Care Services</NavLink>
          <NavLink to="/contact" className={getNavLinkClass}>Contact</NavLink>
        </div>

        {/* Desktop CTA button */}
        <div className="hidden md-flex items-center gap-16px">
          <NavLink to="/contact" className="btn-primary" style={{ textDecoration: 'none' }}>
            Contact Us
          </NavLink>
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open navigation menu"
          style={isDarkText ? { color: 'var(--color-primary)' } : {}}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6"  x2="21" y2="6"  />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </nav>

      {/* ── Premium Full-Screen Mobile Nav Overlay ── */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'open' : ''}`} role="dialog" aria-modal="true" aria-label="Navigation menu">

        {/* Close (X) button */}
        <button className="mobile-nav-close" onClick={close} aria-label="Close navigation menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6"  x2="6"  y2="18" />
            <line x1="6"  y1="6"  x2="18" y2="18" />
          </svg>
        </button>

        {/* Logo inside overlay */}
        <div className="flex items-center gap-16px" style={{ marginBottom: '8px' }}>
          <div className="bg-white rounded-full flex items-center justify-center overflow-hidden" style={{ width: '48px', height: '48px', padding: '2px' }}>
            <img src="/images/logo.png" alt="Homegrown AFH Logo" className="w-full h-full object-cover rounded-full" />
          </div>
          <span className="font-serif text-xl font-bold text-white tracking-wide">Homegrown AFH</span>
        </div>

        {/* Divider */}
        <div style={{ width: '40px', height: '2px', backgroundColor: 'var(--color-secondary)', borderRadius: '2px' }} />

        {/* Nav links */}
        <NavLink to="/"             className={getNavLinkClass} onClick={close}>Home</NavLink>
        <a href="/about.html"       className="nav-link"        onClick={close}>About Us</a>
        <NavLink to="/our-facility" className={getNavLinkClass} onClick={close}>Our Facility</NavLink>
        <NavLink to="/care-services" className={getNavLinkClass} onClick={close}>Care Services</NavLink>
        <NavLink to="/contact"      className={getNavLinkClass} onClick={close}>Contact</NavLink>

        {/* CTA button */}
        <NavLink
          to="/contact"
          className="btn-primary"
          style={{ textDecoration: 'none', marginTop: '8px', padding: '12px 32px', fontSize: '1rem' }}
          onClick={close}
        >
          Contact Us
        </NavLink>
      </div>
    </>
  );
}
