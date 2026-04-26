import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Stethoscope, Activity, Bed, Utensils, Syringe, 
  Droplets, ShieldPlus, Wind, Pill, Heart, Droplet, 
  Thermometer, Car, Sun 
} from 'lucide-react';

export default function CareServices() {
  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll on page load
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  const conditions = [
    "Alzheimer's & Dementia", "Congestive Heart Failure", "COPD", 
    "Diabetes", "Parkinson's Disease", "Stroke Patients", 
    "Mental Health", "Depression", "Developmentally Disabled", 
    "Hearing Impaired", "Visually Impaired"
  ];

  const advancedCare = [
    { icon: <Bed className="w-6 h-6 text-primary" />, text: "Hoyer Lift & Bed-bound Care" },
    { icon: <Utensils className="w-6 h-6 text-primary" />, text: "Feeding Tube Support" },
    { icon: <Syringe className="w-6 h-6 text-primary" />, text: "Insulin Injections" },
    { icon: <Droplets className="w-6 h-6 text-primary" />, text: "Catheter & Ostomy Care" },
    { icon: <ShieldPlus className="w-6 h-6 text-primary" />, text: "Wound Care & Dressings" }
  ];

  const alsoProviding = [
    { icon: <Wind className="w-5 h-5 text-secondary" />, text: "Oxygen Care" },
    { icon: <Pill className="w-5 h-5 text-secondary" />, text: "Medication Management" },
    { icon: <Heart className="w-5 h-5 text-secondary" />, text: "Hospice Care" },
    { icon: <Droplet className="w-5 h-5 text-secondary" />, text: "Regular Blood Draws" },
    { icon: <Thermometer className="w-5 h-5 text-secondary" />, text: "Vital Sign Monitoring" },
    { icon: <Droplets className="w-5 h-5 text-secondary" />, text: "Bathing & Incontinence Care" },
    { icon: <Car className="w-5 h-5 text-secondary" />, text: "Transport to Appointments" }
  ];

  return (
    <main className="flex-grow" style={{ paddingTop: '128px', paddingBottom: '80px', overflowX: 'hidden' }}>
      
      {/* HERO SECTION */}
      <section className="px-safe max-w-7xl mx-auto relative" style={{ marginBottom: '128px' }}>
        
        {/* Dark Mission Box */}
        <div className="bg-primary text-white text-center relative shadow-2xl reveal" style={{ borderRadius: '3rem', paddingTop: '80px', paddingBottom: '192px', paddingLeft: '24px', paddingRight: '24px' }}>
          {/* Squiggle SVGs */}
          <svg viewBox="0 0 200 200" fill="none" className="absolute pointer-events-none opacity-50 hidden md-block" style={{ width: '256px', height: '256px', top: '40px', left: '40px' }} xmlns="http://www.w3.org/2000/svg">
            <path d="M-20,150 C40,180 80,50 120,40 C160,30 180,80 220,100" stroke="var(--color-secondary)" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <svg viewBox="0 0 200 200" fill="none" className="absolute pointer-events-none opacity-50 hidden md-block" style={{ width: '256px', height: '256px', bottom: '80px', right: '40px', transform: 'rotate(180deg)' }} xmlns="http://www.w3.org/2000/svg">
            <path d="M-20,150 C40,180 80,50 120,40 C160,30 180,80 220,100" stroke="var(--color-secondary)" strokeWidth="3" strokeLinecap="round" />
          </svg>
          
          <p className="text-secondary font-bold tracking-widest text-sm" style={{ textTransform: 'uppercase', marginBottom: '24px' }}>Our Capabilities</p>
          <h1 className="font-serif font-light z-10 relative mx-auto" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', maxWidth: '56rem', marginBottom: '40px', lineHeight: 1.1 }}>
            Expert clinical care, tailored seamlessly to your loved one's needs.
          </h1>
          
          <div className="flex justify-center gap-16px relative z-10">
            <NavLink to="/contact" className="btn-primary" style={{ textDecoration: 'none', padding: '12px 32px' }}>
              Contact Us
            </NavLink>
          </div>
        </div>

        {/* Overlapping Image — PREMIUM FLUID STYLING */}
        <div className="flex justify-center relative z-20 reveal delay-100" style={{ marginTop: '-100px', paddingLeft: '16px', paddingRight: '16px' }}>
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
              src="/images/wp7.jpg" 
              alt="Expert clinical care and tailored support for residents" 
              className="w-full h-full object-cover"
              style={{ borderRadius: '2.5rem' }}
            />
          </div>
        </div>
      </section>

      {/* MEDICAL CONDITIONS GRID — STEP 1: grid-cols-3 → 1 col mobile, 3 col desktop */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="text-center reveal flex flex-col items-center" style={{ marginBottom: '64px' }}>
          <div className="flex items-center justify-center rounded-full" style={{ width: '64px', height: '64px', backgroundColor: '#f4f7f4', marginBottom: '24px' }}>
            <Stethoscope className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-serif section-h2 text-primary" style={{ marginBottom: '24px' }}>Medical Conditions We Support</h2>
          <p className="text-lg mx-auto" style={{ color: 'var(--color-text-muted)', maxWidth: '42rem' }}>
            Our highly trained RNs and CNAs are equipped to manage a wide spectrum of complex health profiles with dignity and expertise.
          </p>
        </div>

        <div className="grid grid-cols-3 reveal delay-100 gap-16px">
          {conditions.map((condition, idx) => (
            <div key={idx} className="bg-white p-24px rounded-2xl shadow-sm flex items-center gap-16px transition-shadow hover:shadow-md group" style={{ border: '1px solid var(--color-border-light)' }}>
              <div className="p-8px rounded-xl transition-colors group-hover:bg-secondary" style={{ backgroundColor: '#f4f7f4' }}>
                <Activity className="w-5 h-5 text-primary" />
              </div>
              <span className="font-bold text-primary">{condition}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SPECIALIZED CARE NEEDS — STEP 1: stacks on mobile, wave divider preserved */}
      <div className="w-full overflow-hidden">
        <svg viewBox="0 0 1440 48" preserveAspectRatio="none" style={{ width: '100%', height: '48px', color: '#ffffff', fill: 'currentColor' }}>
          <path d="M0,0 C480,0 960,48 1440,48 L1440,0 L0,0 Z"></path>
        </svg>
      </div>
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Subtle background decoration — hidden on mobile to avoid awkward overflow */}
        <div className="hidden md-block absolute top-0 right-0 h-full z-0" style={{ width: '50%', backgroundColor: 'var(--color-bg-main)', borderTopLeftRadius: '9999px', borderBottomLeftRadius: '9999px', opacity: 0.5, transform: 'translateX(33.333%)' }} />

        {/* STEP 1: grid-cols-2 → stacks on mobile */}
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-64px items-center relative z-10">
          <div className="reveal">
            <h2 className="font-serif text-4xl lg:text-5xl text-primary leading-tight" style={{ marginBottom: '24px' }}>
              Advanced Clinical Capabilities
            </h2>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)', marginBottom: '32px' }}>
              From daily living assistance to complex medical interventions, our in-house staff holds specialized certifications to safely administer advanced care.
            </p>
            
            <div className="flex flex-col gap-24px">
              {advancedCare.map((item, idx) => (
                <div key={idx} className="flex items-center gap-24px">
                  <div className="p-8px rounded-xl border-transparent" style={{ backgroundColor: '#f4f7f4', border: '1px solid var(--color-border-light)' }}>
                    {item.icon}
                  </div>
                  <span className="font-medium text-lg" style={{ color: 'var(--color-text-main)' }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative reveal delay-200">
            <div className="bg-primary text-white shadow-2xl" style={{ borderRadius: '2.5rem', padding: '40px' }}>
              <h3 className="font-serif text-2xl text-secondary" style={{ marginBottom: '32px' }}>Also Providing:</h3>
              <div className="flex flex-col gap-24px">
                {alsoProviding.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-24px">
                    <div className="p-8px rounded-xl" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                      {item.icon}
                    </div>
                    <span className="font-medium text-sm" style={{ color: 'var(--color-text-teal-light)' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NUTRITION & LIFESTYLE — STEP 1: grid-cols-2 stacks on mobile */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="text-center reveal" style={{ marginBottom: '64px' }}>
          <h2 className="font-serif section-h2 text-primary" style={{ marginBottom: '24px' }}>A Fulfilling Daily Life</h2>
          <p className="text-lg mx-auto" style={{ color: 'var(--color-text-muted)', maxWidth: '42rem' }}>
            Care goes beyond medicine. We provide a vibrant, culturally rich environment filled with beautiful meals, engaging hobbies, and community.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-32px">
          <div className="bg-white reveal delay-100 flex flex-col items-center text-center" style={{ padding: '40px', borderRadius: '2.5rem', boxShadow: '0 8px 30px rgba(0,0,0,0.04)', border: '1px solid var(--color-border-light)' }}>
            <div className="rounded-full flex items-center justify-center" style={{ width: '80px', height: '80px', backgroundColor: '#f4f7f4', marginBottom: '24px' }}>
              <Utensils className="w-10 h-10 text-primary" />
            </div>
            <h3 className="font-serif text-3xl text-primary" style={{ marginBottom: '16px' }}>Culinary Excellence</h3>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-muted)', marginBottom: '24px' }}>
              We serve 3 fresh, made-from-scratch meals daily. Our kitchen easily accommodates specific dietary requirements including:
            </p>
            <div className="flex flex-wrap justify-center gap-8px mt-auto">
              {['Low Sodium', 'Gluten Free', 'Organic Options', 'Special Holiday Meals'].map((tag, i) => (
                <span key={i} className="text-primary font-bold text-sm rounded-full" style={{ padding: '8px 16px', backgroundColor: 'rgba(14,59,62,0.05)' }}>{tag}</span>
              ))}
            </div>
          </div>

          <div className="bg-primary text-white shadow-2xl reveal delay-200 flex flex-col items-center text-center" style={{ padding: '40px', borderRadius: '2.5rem' }}>
            <div className="rounded-full flex items-center justify-center" style={{ width: '80px', height: '80px', backgroundColor: 'rgba(255,255,255,0.1)', marginBottom: '24px' }}>
              <Sun className="w-10 h-10 text-secondary" />
            </div>
            <h3 className="font-serif text-3xl text-secondary" style={{ marginBottom: '16px' }}>Daily Engagement</h3>
            <p className="leading-relaxed" style={{ color: 'var(--color-text-teal-light)', marginBottom: '24px' }}>
              We believe in keeping the mind and body active. Our residents enjoy a wide variety of activities and home services:
            </p>
            <div className="flex flex-wrap justify-center gap-8px mt-auto">
              {['Gardening & Walks', 'Music & Movies', 'Visiting Barber'].map((tag, i) => (
                <span key={i} className="font-medium text-sm rounded-full border border-transparent" style={{ padding: '8px 16px', backgroundColor: 'rgba(255,255,255,0.1)', borderColor: 'rgba(255,255,255,0.2)' }}>{tag}</span>
              ))}
              <span className="bg-secondary text-primary font-bold text-sm rounded-full" style={{ padding: '8px 16px' }}>Pets Allowed!</span>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
