import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, ArrowRight, CheckCircle, MapPin, Map as MapIcon } from 'lucide-react';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
      e.preventDefault();
      setIsSubmitted(true);
  };

  const handleReset = () => {
      setIsSubmitted(false);
  };

  return (
    <>
      <style>{`
        /* User Custom CSS */
        .premium-input {
            background: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            transition: all 0.3s ease;
        }
        .premium-input:focus {
            background: rgba(255, 255, 255, 0.1);
            border-color: #d6f866;
            box-shadow: 0 0 15px rgba(214, 248, 102, 0.2);
            outline: none;
        }

        .glass-card {
            background: rgba(255, 255, 255, 0.90);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.5);
        }

        /* Hero Gradient classes */
        .bg-gradient-to-r {
            background-image: linear-gradient(to right, var(--tw-gradient-stops));
        }
        .from-\\[\\#0e3b3e\\]\\/90 {
            --tw-gradient-from: rgba(14, 59, 62, 0.9);
            --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(14, 59, 62, 0));
        }
        .via-\\[\\#0e3b3e\\]\\/60 {
            --tw-gradient-stops: var(--tw-gradient-from), rgba(14, 59, 62, 0.6), var(--tw-gradient-to, rgba(14, 59, 62, 0));
        }
        .to-transparent {
            --tw-gradient-to: transparent;
        }

        /* Support for original Tailwind layout classes that the user wants EXACTLY preserved */
        .bg-\\[\\#0e3b3e\\] { background-color: #0e3b3e; }
        .text-\\[\\#0e3b3e\\] { color: #0e3b3e; }
        .text-\\[\\#d6f866\\] { color: #d6f866; }
        .bg-\\[\\#d6f866\\] { background-color: #d6f866; }
        
        .h-\\[500px\\] { height: 500px; }
        .w-12 { width: 3rem; } .h-1 { height: 0.25rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-10 { margin-bottom: 2.5rem; }
        .mb-2 { margin-bottom: 0.5rem; }
        .mt-8 { margin-top: 2rem; }
        .mt-4 { margin-top: 1rem; }
        .-mt-20 { margin-top: -5rem; }
        .py-20 { padding-top: 5rem; padding-bottom: 5rem; }
        .py-24 { padding-top: 6rem; padding-bottom: 6rem; }
        .px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
        .px-8 { padding-left: 2rem; padding-right: 2rem; }
        .px-5 { padding-left: 1.25rem; padding-right: 1.25rem; }
        .py-4 { padding-top: 1rem; padding-bottom: 1rem; }
        .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
        .p-6 { padding: 1.5rem; }
        .p-8 { padding: 2rem; }
        
        .gap-4 { gap: 1rem; }
        .gap-5 { gap: 1.25rem; }
        .gap-6 { gap: 1.5rem; }
        .gap-12 { gap: 3rem; }
        
        .max-w-xl { max-width: 36rem; }
        .max-w-2xl { max-width: 42rem; }
        
        .text-xs { font-size: 0.75rem; line-height: 1rem; }
        .text-sm { font-size: 0.875rem; line-height: 1.25rem; }
        .text-base { font-size: 1rem; line-height: 1.5rem; }
        .text-lg { font-size: 1.125rem; line-height: 1.75rem; }
        .text-xl { font-size: 1.25rem; line-height: 1.75rem; }
        .text-2xl { font-size: 1.5rem; line-height: 2rem; }
        .text-3xl { font-size: 1.875rem; line-height: 2.25rem; }
        .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
        .text-5xl { font-size: 3rem; line-height: 1; }
        .text-6xl { font-size: 3.75rem; line-height: 1; }
        .text-7xl { font-size: 4.5rem; line-height: 1; }
        
        .opacity-20 { opacity: 0.2; }
        .opacity-80 { opacity: 0.8; }
        .opacity-90 { opacity: 0.9; }
        
        .leading-\\[1\\.1\\] { line-height: 1.1; }
        .drop-shadow-md { filter: drop-shadow(0 4px 3px rgba(0, 0, 0, 0.07)) drop-shadow(0 2px 2px rgba(0, 0, 0, 0.06)); }
        
        .w-14 { width: 3.5rem; } .h-14 { height: 3.5rem; }
        .w-6 { width: 1.5rem; } .h-6 { height: 1.5rem; }
        .w-5 { width: 1.25rem; } .h-5 { height: 1.25rem; }
        .w-4 { width: 1rem; } .h-4 { height: 1rem; }
        .w-96 { width: 24rem; } .h-96 { height: 24rem; }
        
        .bg-\\[\\#f4f7f4\\] { background-color: #f4f7f4; }
        .bg-white\\/50 { background-color: rgba(255, 255, 255, 0.5); }
        .border-2 { border-width: 2px; }
        .border-gray-100 { border-color: #f3f4f6; }
        .backdrop-blur-sm { backdrop-filter: blur(4px); }
        
        .rounded-2xl { border-radius: 1rem; }
        .rounded-3xl { border-radius: 1.5rem; }
        .rounded-\\[3rem\\] { border-radius: 3rem; }
        
        .shadow-\\[0_8px_30px_rgb\\(0\\,0\\,0\\,0\\.06\\)\\] { box-shadow: 0 8px 30px rgb(0,0,0,0.06); }
        .shadow-\\[0_20px_50px_rgba\\(14\\,59\\,62\\,0\\.3\\)\\] { box-shadow: 0 20px 50px rgba(14,59,62,0.3); }
        .shadow-\\[0_20px_50px_rgba\\(14\\,59\\,62\\,0\\.15\\)\\] { box-shadow: 0 20px 50px rgba(14,59,62,0.15); }
        .shadow-sm { box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05); }
        .shadow-md { box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); }
        
        .text-teal-50 { color: #f0fdfa; }
        .text-teal-100\\/70 { color: rgba(204, 251, 241, 0.7); }
        .text-teal-100\\/80 { color: rgba(204, 251, 241, 0.8); }
        .text-teal-100\\/30 { color: rgba(204, 251, 241, 0.3); }
        .text-gray-400 { color: #9ca3af; }
        .text-gray-500 { color: #6b7280; }
        .text-gray-700 { color: #374151; }
        .placeholder-teal-100\\/30::placeholder { color: rgba(204, 251, 241, 0.3); }
        
        .pt-10 { padding-top: 2.5rem; }
        .space-y-5 > :not([hidden]) ~ :not([hidden]) { --tw-space-y-reverse: 0; margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse))); margin-bottom: calc(1.25rem * var(--tw-space-y-reverse)); }
        
        .hover\\:-translate-y-1:hover { transform: translateY(-0.25rem); }
        .hover\\:scale-\\[1\\.02\\]:hover { transform: scale(1.02); }
        .group:hover .group-hover\\:bg-\\[\\#d6f866\\] { background-color: #d6f866; }
        .group:hover .group-hover\\:scale-105 { transform: scale(1.05); }
        .transition-transform { transition-property: transform; transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1); }
        .duration-300 { transition-duration: 300ms; }
        .duration-1000 { transition-duration: 1000ms; }
        
        .-right-20 { right: -5rem; }
        .-top-20 { top: -5rem; }
        .pointer-events-none { pointer-events: none; }
        .resize-none { resize: none; }
        
        .animate-fade-in { animation: fadeIn 0.5s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        
        .h-\\[450px\\] { height: 450px; }
        .from-\\[\\#0e3b3e\\]\\/60 { --tw-gradient-from: rgba(14, 59, 62, 0.6); --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(14, 59, 62, 0)); }
        .bg-gradient-to-t { background-image: linear-gradient(to top, var(--tw-gradient-stops)); }
        
        .bottom-6 { bottom: 1.5rem; } .left-6 { left: 1.5rem; } .right-6 { right: 1.5rem; }
        
        .inset-0 { top: 0; right: 0; bottom: 0; left: 0; }
        
        .border-white\\/30 { border-color: rgba(255,255,255,0.3); }

        @media (min-width: 768px) {
            .md\\:h-\\[600px\\] { height: 600px; }
            .md\\:h-\\[550px\\] { height: 550px; }
            .md\\:flex-row { flex-direction: row; }
            .md\\:items-center { align-items: center; }
            .md\\:p-14 { padding: 3.5rem; }
            .md\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
            .md\\:bottom-12 { bottom: 3rem; }
            .md\\:left-12 { left: 3rem; }
            .md\\:right-auto { right: auto; }
            .md\\:w-96 { width: 24rem; }
            .md\\:text-6xl { font-size: 3.75rem; line-height: 1; }
            .md\\:text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
        }
        
        @media (min-width: 1024px) {
            .lg\\:px-12 { padding-left: 3rem; padding-right: 3rem; }
            .lg\\:grid-cols-12 { grid-template-columns: repeat(12, minmax(0, 1fr)); }
            .lg\\:gap-20 { gap: 5rem; }
            .lg\\:col-span-5 { grid-column: span 5 / span 5; }
            .lg\\:col-span-7 { grid-column: span 7 / span 7; }
            .lg\\:pt-0 { padding-top: 0; }
            .lg\\:text-7xl { font-size: 4.5rem; line-height: 1; }
            .lg\\:text-5xl { font-size: 3rem; line-height: 1; }
        }

        @media (max-width: 767px) {
            .mobile-hero-padding { padding-top: 8rem !important; }
        }
      `}</style>
      
      <main className="flex-grow pb-20" style={{ overflowX: 'hidden' }}>
          
          {/* PREMIUM HERO SECTION */}
          <section className="relative w-full flex items-center justify-center overflow-hidden bg-[#0e3b3e]" style={{ minHeight: 'clamp(380px, 60vw, 600px)' }}>
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                  <img src="/images/backyard_clean.png" alt="Peaceful Backyard Environment" className="w-full h-full object-cover opacity-80" />
              </div>
              {/* Clean Gradient Overlay (Fades top and bottom to blend text) */}
              <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0e3b3e]/90 via-[#0e3b3e]/60 to-transparent"></div>
              
              <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full mobile-hero-padding">
                  <div className="max-w-2xl reveal">
                      <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-1 bg-[#d6f866]"></div>
                          <p className="text-[#d6f866] font-bold tracking-widest uppercase text-sm">Get in touch</p>
                      </div>
                      <h1 className="font-serif font-light text-white mb-8 shadow-sm" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', lineHeight: 1.1 }}>
                          We look forward to welcoming your family.
                      </h1>
                      <p className="text-teal-50 text-lg leading-relaxed max-w-xl mb-10 opacity-90 drop-shadow-md">
                          Whether you want to schedule a private tour, discuss specific care plans, or check our current availability, we are here to assist you every step of the way.
                      </p>
                  </div>
              </div>
          </section>

          {/* CONTACT INFO & FORM SECTION */}
          <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto -mt-20 relative z-30">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                  
                  {/* Left Column: Premium Contact Cards */}
                  <div className="lg:col-span-5 reveal">
                      <h2 className="font-serif text-3xl md:text-4xl text-[#0e3b3e] mb-8 leading-tight pt-10 lg:pt-0">
                          Direct Lines
                      </h2>

                      <div className="space-y-5">
                          {/* Phone Card */}
                          <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col md:flex-row md:items-center gap-5 hover:-translate-y-1 transition-transform duration-300 group">
                              <div className="bg-[#f4f7f4] w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#d6f866] transition-colors duration-300">
                                  <Phone className="w-6 h-6 text-[#0e3b3e]" />
                              </div>
                              <div>
                                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Call Us Anytime</p>
                                  <p className="text-xl font-bold text-[#0e3b3e]">206-816-4268</p>
                              </div>
                          </div>

                          {/* Email Card */}
                          <div className="bg-white p-6 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 flex flex-col md:flex-row md:items-center gap-5 hover:-translate-y-1 transition-transform duration-300 group">
                              <div className="bg-[#f4f7f4] w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-[#d6f866] transition-colors duration-300">
                                  <Mail className="w-6 h-6 text-[#0e3b3e]" />
                              </div>
                              <div>
                                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Email Inquiry</p>
                                  <p className="text-base font-bold text-[#0e3b3e] break-all">Homegrownadultfamilyhome<br/>@gmail.com</p>
                              </div>
                          </div>

                          {/* Hours Card */}
                          <div className="bg-white/50 border-2 border-gray-100 p-6 rounded-3xl flex items-start gap-5 mt-8 backdrop-blur-sm">
                              <Clock className="w-6 h-6 text-[#0e3b3e] mt-1 flex-shrink-0" />
                              <div>
                                  <h4 className="font-bold text-[#0e3b3e] mb-1">Operating Hours</h4>
                                  <p className="text-sm text-gray-500 mb-2">Our care staff is on-site 24/7. For administrative inquiries and tours:</p>
                                  <p className="text-sm font-medium text-[#0e3b3e]">Mon - Fri: 9:00 AM - 5:00 PM</p>
                              </div>
                          </div>
                      </div>
                  </div>

                  {/* Right Column: Premium Form */}
                  <div className="lg:col-span-7 relative reveal delay-100">
                      <div className="bg-[#0e3b3e] rounded-[3rem] p-8 md:p-14 text-white shadow-[0_20px_50px_rgba(14,59,62,0.3)] relative overflow-hidden">
                          
                          {/* Abstract BG pattern inside form box */}
                          <svg viewBox="0 0 400 400" className="absolute -right-20 -top-20 opacity-20 w-96 h-96 pointer-events-none">
                              <circle cx="200" cy="200" r="180" stroke="#d6f866" strokeWidth="2" fill="none" />
                              <circle cx="200" cy="200" r="140" stroke="#d6f866" strokeWidth="2" fill="none" strokeDasharray="10 10"/>
                          </svg>

                          {/* Dynamic UI based on state */}
                          <div className={isSubmitted ? "hidden" : "block"}>
                              <h3 className="font-serif text-3xl mb-2 relative z-10">Send a direct message</h3>
                              <p className="text-teal-100/70 text-sm mb-10 relative z-10">We prioritize all family inquiries and will respond within 24 hours.</p>
                              
                              {/* The Form */}
                              <form id="contactForm" onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
                                  <div className="grid md:grid-cols-2 gap-6">
                                      <div>
                                          <label className="block text-xs font-bold uppercase tracking-wider text-teal-100/70 mb-2 ml-1">First Name</label>
                                          <input type="text" required placeholder="Jane" className="w-full premium-input text-white placeholder-teal-100/30 px-5 py-4 rounded-2xl" />
                                      </div>
                                      <div>
                                          <label className="block text-xs font-bold uppercase tracking-wider text-teal-100/70 mb-2 ml-1">Last Name</label>
                                          <input type="text" required placeholder="Doe" className="w-full premium-input text-white placeholder-teal-100/30 px-5 py-4 rounded-2xl" />
                                      </div>
                                  </div>
                                  
                                  <div>
                                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-100/70 mb-2 ml-1">Email Address</label>
                                      <input type="email" required placeholder="jane@example.com" className="w-full premium-input text-white placeholder-teal-100/30 px-5 py-4 rounded-2xl" />
                                  </div>

                                  <div>
                                      <label className="block text-xs font-bold uppercase tracking-wider text-teal-100/70 mb-2 ml-1">How can we help?</label>
                                      <textarea required placeholder="Tell us a little about your loved one's needs or ask a question..." rows="4" className="w-full premium-input text-white placeholder-teal-100/30 px-5 py-4 rounded-2xl resize-none"></textarea>
                                  </div>

                                  <button type="submit" className="bg-[#d6f866] text-[#0e3b3e] px-8 py-4 rounded-full text-base font-bold hover:bg-white hover:scale-[1.02] transition-all duration-300 w-full shadow-lg mt-4 flex justify-center items-center gap-3">
                                      Send Secure Message <ArrowRight className="w-5 h-5" />
                                  </button>
                              </form>
                          </div>

                          {/* Success Message */}
                          <div id="successMessage" className={isSubmitted ? "relative z-10 flex flex-col justify-center items-center text-center h-[500px] animate-fade-in" : "hidden"}>
                              <div className="bg-[#d6f866] text-[#0e3b3e] p-5 rounded-full mb-6 shadow-lg shadow-[#d6f866]/20">
                                  <CheckCircle className="w-12 h-12" />
                              </div>
                              <h3 className="text-4xl font-serif text-white mb-4">Message Sent!</h3>
                              <p className="text-teal-100/80 text-lg leading-relaxed max-w-sm">
                                  Thank you for reaching out. We have received your inquiry and will reply to your email shortly.
                              </p>
                              <button id="resetFormBtn" onClick={handleReset} className="mt-8 border border-white/30 text-white px-8 py-3 rounded-full text-sm font-bold hover:bg-white hover:text-[#0e3b3e] transition-colors">
                                  Send Another Message
                              </button>
                          </div>

                      </div>
                  </div>

              </div>
          </section>

          {/* STREET VIEW / LOCATION SECTION */}
          <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
              <div className="relative w-full rounded-[3rem] overflow-hidden reveal shadow-[0_20px_50px_rgba(14,59,62,0.15)] group" style={{ height: 'clamp(300px, 50vw, 550px)' }}>
                  
                  {/* Actual Home Exterior Photo */}
                  <img src="/images/front_of_home.png" alt="Homegrown Adult Family Home Exterior" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                  
                  {/* Gentle Dark Overlay to make text pop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e3b3e]/60 to-transparent"></div>

                  {/* Floating Glass Info Card (Positioned neatly at the bottom left) */}
                  <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-auto md:w-96 glass-card p-8 rounded-3xl shadow-2xl">
                      <div className="bg-[#0e3b3e] w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                          <MapPin className="w-6 h-6 text-[#d6f866]" />
                      </div>
                      <h3 className="font-serif text-2xl text-[#0e3b3e] mb-2">Visit Our Home</h3>
                      <p className="text-gray-700 font-medium text-lg leading-relaxed mb-6">
                          18123 56th Ave W,<br/>Lynnwood, WA 98037
                      </p>
                      
                      {/* Button linking directly to Google Maps */}
                      <a href="https://maps.google.com/?q=18123+56th+Ave+W,+Lynnwood,+WA+98037" target="_blank" rel="noreferrer" className="bg-[#0e3b3e] text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-teal-800 transition-colors shadow-lg flex items-center justify-center gap-3 w-full">
                          Open in Google Maps <MapIcon className="w-4 h-4" />
                      </a>
                  </div>
              </div>
          </section>

      </main>
    </>
  );
}
