import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Heart, Home as HomeIcon, Stethoscope, Utensils, 
  Clock, Shield, ArrowRight, Play, ChevronDown, 
  ChevronUp
} from 'lucide-react';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept both Private Pay and Medicaid. We strive to make our high-quality care accessible to those who need it."
    },
    {
      question: "What medical conditions can you accommodate?",
      answer: "We are equipped to care for residents with Alzheimer's & Dementia, Congestive Heart Failure, COPD, Diabetes, Parkinson's Disease, Stroke Patients, and those needing Behavioral Support, Hospice Care, or Tube Feeding, among others."
    },
    {
      question: "Are your caregivers trained and qualified?",
      answer: "Yes, our staff includes qualified RNs and CNAs with specialized training in Mental Health, Dementia, CPR/First Aid, and Developmental Disabilities. A provider lives on-site, and caregivers are available 24 hours a day."
    },
    {
      question: "Do you accommodate special dietary needs?",
      answer: "Absolutely. We provide 3 meals daily made from scratch with fresh ingredients. We can accommodate Low Sodium, Gluten-Free, Organic, and special request diets."
    },
    {
      question: "Are pets allowed in the home?",
      answer: "Yes! We believe pets can bring great joy to our residents. We currently allow dogs, cats, and fish."
    }
  ];

  const features = [
    { icon: <Clock width="20" height="20" />, title: "24-hour On-Site Support", desc: "Caregivers are available 24/7 for safety and supervision." },
    { icon: <Shield width="20" height="20" />, title: "Certified RN & CNA Staff", desc: "Highly trained staff with Dementia and Mental Health specialty." },
    { icon: <HomeIcon width="20" height="20" />, title: "Private Rooms & Amenities", desc: "Hardwood floors, cable/internet, and a beautiful garden." },
    { icon: <Stethoscope width="20" height="20" />, title: "Complex Medical Care", desc: "Support for Hoyer lifts, catheters, insulin, and wound care." },
    { icon: <Utensils width="20" height="20" />, title: "Made From Scratch Meals", desc: "3 daily meals customized to dietary needs, including gluten-free." },
    { icon: <Heart width="20" height="20" />, title: "Compassionate Care", desc: "Respectful, dignified, and culturally competent care in English." }
  ];

  return (
    <main style={{ overflowX: 'hidden' }}>
      {/* ── Hero Section ── */}
      <header
        className="hero-section"
        style={{
          backgroundImage: 'url("/images/wp4.jpg")',
          backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat',
          overflow: 'hidden'  /* Step 1: prevents any white edge from bleeding out */
        }}
      >
        {/* Overlay */}
        <div style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'var(--color-primary-dark)', opacity: 0.85, zIndex: 0 }} />

        <div className="relative max-w-3xl text-white" style={{ zIndex: 10 }}>
          {/* STEP 2 — fluid hero heading */}
          <h1 className="font-serif hero-h1 leading-tight" style={{ marginBottom: '24px' }}>
            Live-In Care<br/>That Feels Like<br/>Family
          </h1>
          <p className="text-lg opacity-90 font-light" style={{ marginBottom: '40px', maxWidth: '36rem' }}>
            Homegrown Adult Family Home is committed to providing resident-centered care in a safe, supportive, and dignified environment.
          </p>
          <div className="flex flex-wrap items-center gap-16px reveal">
            <NavLink to="/care-services" className="btn-primary" style={{ padding: '14px 28px', textDecoration: 'none' }}>
              Explore Care <ArrowRight width="20" height="20" />
            </NavLink>
            <NavLink to="/our-facility" className="btn-secondary" style={{ textDecoration: 'none' }}>
              <div style={{ backgroundColor: 'var(--color-secondary)', color: 'var(--color-primary)', borderRadius: '9999px', padding: '4px' }}>
                <Play width="16" height="16" style={{ marginLeft: '2px', fill: 'currentColor' }} />
              </div>
              Tour the Home
            </NavLink>
          </div>
        </div>

        {/* Step 1: no translateY — SVG sits flush at the bottom, no white gap */}
        <div className="torn-divider" style={{ bottom: 0 }}>
          <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{ color: 'var(--color-bg-main)', fill: 'currentColor', height: '48px', width: '100%', display: 'block' }}>
            <path d="M0,48 C480,48 960,0 1440,0 L1440,48 L0,48 Z" />
          </svg>
        </div>
      </header>

      {/* ── About / "Homegrown Difference" Section ── */}
      <section id="about" className="section-padding max-w-7xl mx-auto">
        {/* STEP 1 — grid-cols-2 already stacks to 1 col on mobile via CSS */}
        <div className="grid grid-cols-2 gap-64px items-center" style={{ marginBottom: '64px' }}>
          <div className="reveal">
            <h2 className="font-serif section-h2 text-primary leading-tight" style={{ marginBottom: '24px' }}>
              The Homegrown Difference
            </h2>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-muted)', marginBottom: '32px', fontSize: '1rem' }}>
              Care is about much more than just daily assistance; it is about providing a fulfilling, vibrant lifestyle. We focus on nourishing both the body and the spirit. Our residents enjoy three daily, made-from-scratch meals tailored to their exact dietary needs, alongside engaging daily activities, a pet-friendly environment, and a multilingual staff. Here, residents don't just receive care—they thrive.
            </p>
          </div>
          <div className="relative reveal delay-100">
            {/* Premium image container — rounded, shadowed, consistent height */}
            <div
              style={{
                borderRadius: '2rem',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(14, 59, 62, 0.15)',
                height: 'clamp(280px, 40vw, 460px)',
              }}
            >
              <img
                src="/images/wp6.jpg"
                alt="Residents enjoying activities in a vibrant, pet-friendly home"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>

        {/* Amenities stats — 2 cols on mobile (sm), 4 on desktop */}
        <div id="amenities" className="grid grid-cols-4 gap-16px" style={{ marginTop: '32px' }}>
          <article className="flex flex-col items-center justify-center text-center p-32px rounded-2xl" style={{ backgroundColor: 'var(--color-feat-1)' }}>
            <h4 className="font-serif text-3xl font-bold text-primary" style={{ marginBottom: '8px' }}>24/7</h4>
            <p className="text-sm font-medium" style={{ color: 'rgba(14, 59, 62, 0.7)' }}>On-Site Care</p>
          </article>
          <article className="flex flex-col items-center justify-center text-center p-32px rounded-2xl" style={{ backgroundColor: 'var(--color-feat-2)' }}>
            <h4 className="font-serif text-3xl font-bold text-primary" style={{ marginBottom: '8px' }}>Medicaid</h4>
            <p className="text-sm font-medium" style={{ color: 'rgba(14, 59, 62, 0.7)' }}>Accepted Here</p>
          </article>
          <article className="flex flex-col items-center justify-center text-center p-32px rounded-2xl" style={{ backgroundColor: 'var(--color-feat-3)' }}>
            <h4 className="font-serif text-3xl font-bold text-primary" style={{ marginBottom: '8px' }}>RN/CNA</h4>
            <p className="text-sm font-medium" style={{ color: 'rgba(14, 59, 62, 0.7)' }}>Certified Staff</p>
          </article>
          <article className="flex flex-col items-center justify-center text-center p-32px rounded-2xl" style={{ backgroundColor: 'var(--color-feat-4)' }}>
            <h4 className="font-serif text-3xl font-bold text-primary" style={{ marginBottom: '8px' }}>3 Meals</h4>
            <p className="text-sm font-medium" style={{ color: 'rgba(14, 59, 62, 0.7)' }}>Fresh Daily</p>
          </article>
        </div>
      </section>

      {/* ── Features Grid ── */}
      <section id="services" className="section-padding max-w-7xl mx-auto">
        <div className="text-center reveal" style={{ marginBottom: '48px' }}>
          <h2 className="font-serif section-h2 text-primary" style={{ marginBottom: '16px' }}>One Home, Many Solutions</h2>
          <p className="max-w-2xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            Handpicked caregivers chosen for their kind hearts, providing your loved ones a safe, fulfilling life with dignity at home.
          </p>
        </div>
        {/* STEP 1 — grid-cols-3 → 1 col mobile, 3 col desktop via CSS */}
        <div className="grid grid-cols-3 gap-16px">
          {features.map((feature, idx) => (
            <article key={idx} className="feature-card">
              <div className="feature-icon-wrapper">{feature.icon}</div>
              <div className="flex-grow">
                <h3 className="font-bold text-primary" style={{ fontSize: '15px' }}>{feature.title}</h3>
                <p className="text-sm" style={{ color: 'var(--color-text-light)', marginTop: '4px' }}>{feature.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── "Finding the perfect home" — unified CTA ── */}
      <section
        className="relative bg-primary text-white"
        style={{ marginTop: '64px', paddingTop: '80px', paddingBottom: '80px', zIndex: 10 }}
      >
        <div className="max-w-7xl mx-auto px-safe" style={{ position: 'relative', zIndex: 10 }}>
          {/* STEP 1 — flex-col-mobile stacks on mobile */}
          <div className="flex-col-mobile flex justify-between" style={{ gap: '48px', alignItems: 'flex-start' }}>

            {/* LEFT: heading → button → paragraph */}
            <div className="text-left flex flex-col items-start w-full md-w-5-12 reveal">
              <h2 className="font-serif cta-h2 font-light" style={{ marginBottom: '36px' }}>
                Finding the<br/>perfect home<br/>for your needs
              </h2>
              <NavLink
                to="/care-services"
                className="btn-primary"
                style={{ paddingLeft: '24px', paddingRight: '8px', paddingBottom: '8px', paddingTop: '8px', textDecoration: 'none', marginBottom: '28px' }}
              >
                Explore More
                <div style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-secondary)', borderRadius: '9999px', padding: '8px', marginLeft: '16px' }}>
                  <ArrowRight width="16" height="16" />
                </div>
              </NavLink>
              <p className="leading-relaxed" style={{ color: 'var(--color-text-teal-light)', fontSize: '15px', opacity: 0.9, maxWidth: '36rem' }}>
                Finding the right care and understanding options can be daunting, but we're here to guide you with a smooth transition from the start.
              </p>
            </div>

            {/* CENTER: photo — visible on ALL screen sizes (Step 1 fix) */}
            <div
              className="flex justify-center relative w-full md-w-1-3 reveal delay-100"
              style={{ zIndex: 20 }}
            >
              {/* Premium image container — rounded corners, floating shadow, consistent height */}
              <div
                style={{
                  borderRadius: '2rem',
                  overflow: 'hidden',
                  boxShadow: '0 20px 50px rgba(14, 59, 62, 0.25)',
                  width: '100%',
                  maxWidth: '320px',
                  height: 'clamp(280px, 45vw, 420px)',
                  marginTop: '-40px',
                }}
              >
                <img
                  src="/images/wp5.jpg"
                  alt="Private bedroom highlighting a smooth, comfortable transition to care"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </div>
            </div>

            {/* RIGHT: stats — full-width 2-col grid on mobile, right-aligned on desktop */}
            <div
              className="w-full md-w-1-4"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '24px',
                textAlign: 'center',
              }}
            >
              <div>
                <h3 className="font-bold text-secondary" style={{ fontSize: '3.5rem', marginBottom: '8px', lineHeight: 1 }}>5</h3>
                <p className="leading-snug" style={{ color: 'var(--color-text-teal-light)', fontSize: '14px' }}>
                  Private Bedrooms<br/>for personalized care
                </p>
              </div>
              <div>
                <h3 className="font-bold text-secondary" style={{ fontSize: '3.5rem', marginBottom: '8px', lineHeight: 1 }}>24/7</h3>
                <p className="leading-snug" style={{ color: 'var(--color-text-teal-light)', fontSize: '14px' }}>
                  On-Site Care<br/>readily available
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ Section ── */}
      <section className="section-padding max-w-4xl mx-auto reveal">
        <div className="text-center" style={{ marginBottom: '48px' }}>
          <h2 className="font-serif section-h2 text-primary" style={{ marginBottom: '16px' }}>Frequently Asked Questions</h2>
          <p style={{ color: 'var(--color-text-muted)' }}>Find answers to common questions about our home, care services, and policies.</p>
        </div>
        
        <div className="flex flex-col" style={{ gap: '12px' }}>
          {faqs.map((faq, idx) => (
            <article key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm transition-shadow" style={{ border: '1px solid var(--color-border-light)' }}>
              <button
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="w-full flex justify-between items-center text-left"
                style={{ padding: '20px 24px', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}
                aria-expanded={openFaq === idx}
              >
                <span className="font-bold text-primary" style={{ fontSize: '1rem', paddingRight: '16px' }}>{faq.question}</span>
                {openFaq === idx
                  ? <ChevronUp width="20" height="20" className="flex-shrink-0" style={{ color: 'var(--color-text-light)' }} />
                  : <ChevronDown width="20" height="20" className="flex-shrink-0" style={{ color: 'var(--color-text-light)' }} />
                }
              </button>
              <div className="accordion-content" style={{ maxHeight: openFaq === idx ? '200px' : '0' }}>
                <p className="leading-relaxed" style={{ color: 'var(--color-text-muted)', padding: '8px 24px 24px 24px' }}>{faq.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      
    </main>
  );
}
