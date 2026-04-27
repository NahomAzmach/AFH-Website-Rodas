import React, { useState } from 'react';
import { Heart, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      // Split name safely
      const nameParts = formData.name.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          lastName,
          email: formData.email,
          message: formData.message
        })
      });
    } catch (err) {
      console.error("Footer form error:", err);
    }
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <>
      {/* Footer Top Smooth Wave Divider — seamless transition from page bg into dark footer */}
      <div style={{ backgroundColor: 'var(--color-bg-main)', lineHeight: 0, display: 'block', marginBottom: '-1px' }}>
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '60px', fill: 'var(--color-primary-dark)' }}
        >
          <path d="M0,80 C360,80 1080,0 1440,0 L1440,80 L0,80 Z" />
        </svg>
      </div>

      <footer id="contact" className="text-white" style={{ backgroundColor: 'var(--color-primary-dark)', paddingTop: '64px', paddingBottom: '40px' }}>
      <div className="max-w-7xl mx-auto px-safe">
        {/* Contact call-to-action + form — STEP 1: stacks on mobile */}
        <div className="flex-col-mobile flex justify-between" style={{ marginBottom: '64px', paddingBottom: '48px', borderBottom: '1px solid rgba(204, 251, 241, 0.2)', gap: '40px' }}>
          <div className="w-full md-w-5-12">
            <h2 className="font-serif text-4xl text-white m-16px" style={{ marginBottom: '16px' }}>Have questions?<br/>We're here to help.</h2>
            <p className="leading-relaxed" style={{ color: 'rgba(204, 251, 241, 0.7)', fontSize: '15px' }}>
              Whether you want to schedule a tour, discuss availability, or learn more about our specific care plans, send us a message. We'll review your inquiry and get back to you directly via email.
            </p>
          </div>
          <div className="w-full md-w-7-12">
            {isSubmitted ? (
              <div className="flex flex-col justify-center items-center text-center h-full p-32px rounded-2xl" style={{ backgroundColor: 'rgba(14, 59, 62, 0.4)', border: '1px solid rgba(214, 248, 102, 0.3)' }}>
                <div className="btn-primary m-16px" style={{ borderRadius: '9999px', padding: '12px', marginBottom: '16px' }}>
                  <Heart width="24" height="24" />
                </div>
                <h3 className="text-xl font-bold text-white m-8px" style={{ marginBottom: '8px' }}>Message Sent Successfully!</h3>
                <p style={{ color: 'rgba(204, 251, 241, 0.8)', fontSize: '14px' }}>Thank you for reaching out. We will review your message and get back to your email shortly.</p>
              </div>
            ) : (
              <form className="flex flex-col gap-16px" onSubmit={handleContactSubmit}>
                {/* STEP 1: 2-col form grid stacks on mobile */}
                <div className="grid grid-cols-2 gap-16px">
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    placeholder="Your Name" 
                    className="input-field"
                  />
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    placeholder="Your Email Address" 
                    className="input-field"
                  />
                </div>
                <textarea 
                  required 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What questions do you have for us?" 
                  rows="3" 
                  className="input-field"
                  style={{ resize: 'none' }}
                ></textarea>
                <div className="flex justify-end" style={{ paddingTop: '8px' }}>
                  <button type="submit" disabled={isSubmitting} className="btn-primary" style={{ opacity: isSubmitting ? 0.7 : 1 }}>
                    {isSubmitting ? 'Sending...' : 'Send Message'} {isSubmitting ? null : <ArrowRight width="16" height="16" />}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Footer links grid — STEP 1: 3 col desktop, stacks on mobile */}
        <div className="grid grid-cols-3 gap-32px" style={{ marginBottom: '64px' }}>
          <div>
            <div className="flex items-center gap-8px m-24px" style={{ marginBottom: '24px' }}>
              <div className="bg-white rounded-full flex items-center justify-center overflow-hidden" style={{ width: '48px', height: '48px', padding: '2px' }}>
                <img src="/images/logo.png" alt="Homegrown AFH Logo" className="w-full h-full object-cover rounded-full" />
              </div>
              <span className="font-serif text-xl font-bold">Homegrown AFH</span>
            </div>
            <p className="leading-relaxed" style={{ color: 'rgba(204, 251, 241, 0.6)', fontSize: '14px', marginBottom: '24px' }}>
              Providing high-quality, resident-centered care in a safe and supportive environment.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg m-24px" style={{ marginBottom: '24px' }}>Quick Links</h4>
            <ul className="flex flex-col gap-8px" style={{ listStyle: 'none', color: 'rgba(204, 251, 241, 0.6)', fontSize: '14px' }}>
              <li><Link to="/" className="nav-link">Home</Link></li>
              <li><a href="/about.html" className="nav-link">About Us</a></li>
              <li><Link to="/our-facility" className="nav-link">Our Facility</Link></li>
              <li><Link to="/care-services" className="nav-link">Care Services</Link></li>
              <li><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg m-24px" style={{ marginBottom: '24px' }}>Contact Us</h4>
            <ul className="flex flex-col gap-16px" style={{ listStyle: 'none', color: 'rgba(204, 251, 241, 0.6)', fontSize: '14px' }}>
              <li className="flex gap-8px">
                <Phone width="20" height="20" className="flex-shrink-0" style={{ color: 'var(--color-secondary)' }} />
                <span>206-816-4268</span>
              </li>
              <li className="flex gap-8px">
                <Mail width="20" height="20" className="flex-shrink-0" style={{ color: 'var(--color-secondary)' }} />
                <span>homegrownafh@gmail.com</span>
              </li>
              <li className="flex gap-8px">
                <MapPin width="20" height="20" className="flex-shrink-0" style={{ color: 'var(--color-secondary)' }} />
                <span>18123 56th Ave W,<br/>Lynnwood, WA, 98037</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center" style={{ fontSize: '14px', color: 'rgba(204, 251, 241, 0.4)', borderTop: '1px solid rgba(204, 251, 241, 0.2)', paddingTop: '32px' }}>
          <p>&copy; {new Date().getFullYear()} Homegrown Adult Family Home. All rights reserved.</p>
        </div>
      </div>
      </footer>
    </>
  );
}
