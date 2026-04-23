"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LuxuryNavbar from "@/components/LuxuryNavbar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from "lucide-react";

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#050505]">
        <div className="text-[#d4af37] text-xl" style={{ fontFamily: 'DM Sans, sans-serif' }}>Loading...</div>
      </div>
    );
  }

  return (
    <>
      <LuxuryNavbar />
      <main>
        {/* Hero Section */}
        <section 
          ref={containerRef}
          className="section relative overflow-hidden bg-[#050505]"
          style={{ paddingTop: '120px', paddingBottom: '80px' }}
        >
          <motion.div 
            style={{ y: y1 }}
            className="absolute inset-0 pointer-events-none"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80')`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/80 via-[#050505]/60 to-[#050505]" />
          </motion.div>

          <div className="container-main relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              style={{ maxWidth: '800px' }}
            >
              <span className="badge-consistent" style={{ marginBottom: '24px', display: 'inline-block' }}>
                Contact Us
              </span>
              
              <h1 className="section-header__title" style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                Get in Touch
              </h1>
              
              <p style={{ 
                fontSize: '1.125rem', 
                color: '#d1d5db', 
                lineHeight: 1.7,
                fontFamily: '"DM Sans", sans-serif',
                maxWidth: '600px'
              }}>
                Ready to start your driving journey? We&apos;d love to hear from you. 
                Send us a message and we&apos;ll get back to you within 24 hours.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section bg-[#0a0a0a]">
          <div className="container-main">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '48px' }}>
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="section-header__title" style={{ marginBottom: '32px', textAlign: 'left' }}>
                  Let&apos;s Connect
                </h2>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '40px' }}>
                  {[
                    { icon: Phone, title: "Phone", value: "+234 800 123 4567", desc: "Mon - Sat: 8AM - 6PM" },
                    { icon: Mail, title: "Email", value: "info@altecho.com", desc: "We reply within 24 hours" },
                    { icon: MapPin, title: "Location", value: "Ipaja, Lagos, Nigeria", desc: "Main training hub" },
                  ].map((item) => (
                    <div key={item.title} style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <item.icon className="w-5 h-5 text-[#d4af37]" />
                      </div>
                      <div>
                        <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1rem', color: '#ffffff', marginBottom: '4px' }}>
                          {item.title}
                        </h3>
                        <p style={{ color: '#d1d5db', fontFamily: '"DM Sans", sans-serif', fontSize: '0.9375rem' }}>
                          {item.value}
                        </p>
                        <p style={{ color: '#9ca3af', fontFamily: '"DM Sans", sans-serif', fontSize: '0.8125rem', marginTop: '2px' }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="card-consistent" style={{ padding: '24px' }}>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1rem', color: '#ffffff', marginBottom: '16px' }}>
                    Quick Response
                  </h3>
                  <p style={{ color: '#9ca3af', fontFamily: '"DM Sans", sans-serif', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    We respond to all inquiries within 24 hours. For immediate assistance, 
                    call us during business hours.
                  </p>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {submitted ? (
                  <div className="card-consistent" style={{ padding: '48px', textAlign: 'center' }}>
                    <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                      <CheckCircle className="w-8 h-8 text-[#d4af37]" />
                    </div>
                    <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', color: '#ffffff', marginBottom: '12px' }}>
                      Message Sent!
                    </h3>
                    <p style={{ color: '#9ca3af', fontFamily: '"DM Sans", sans-serif', fontSize: '0.9375rem', marginBottom: '24px' }}>
                      Thank you for contacting us. We&apos;ll be in touch soon.
                    </p>
                    <Link href="/" className="btn-primary">
                      Back to Home
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="card-consistent" style={{ padding: '40px' }}>
                    <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', color: '#ffffff', marginBottom: '32px' }}>
                      Send us a Message
                    </h2>
                    
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', color: '#9ca3af', marginBottom: '8px', fontFamily: '"DM Sans", sans-serif' }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          borderRadius: '8px',
                          border: '1px solid rgba(255,255,255,0.1)',
                          background: 'rgba(255,255,255,0.05)',
                          color: '#ffffff',
                          fontSize: '0.9375rem',
                          fontFamily: '"DM Sans", sans-serif',
                          outline: 'none',
                          transition: 'all 0.3s'
                        }}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', color: '#9ca3af', marginBottom: '8px', fontFamily: '"DM Sans", sans-serif' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          borderRadius: '8px',
                          border: '1px solid rgba(255,255,255,0.1)',
                          background: 'rgba(255,255,255,0.05)',
                          color: '#ffffff',
                          fontSize: '0.9375rem',
                          fontFamily: '"DM Sans", sans-serif',
                          outline: 'none',
                          transition: 'all 0.3s'
                        }}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', color: '#9ca3af', marginBottom: '8px', fontFamily: '"DM Sans", sans-serif' }}>
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          borderRadius: '8px',
                          border: '1px solid rgba(255,255,255,0.1)',
                          background: 'rgba(255,255,255,0.05)',
                          color: '#ffffff',
                          fontSize: '0.9375rem',
                          fontFamily: '"DM Sans", sans-serif',
                          outline: 'none',
                          transition: 'all 0.3s'
                        }}
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    
                    <div style={{ marginBottom: '20px' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', color: '#9ca3af', marginBottom: '8px', fontFamily: '"DM Sans", sans-serif' }}>
                        Program Interest
                      </label>
                      <select
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          borderRadius: '8px',
                          border: '1px solid rgba(255,255,255,0.1)',
                          background: 'rgba(255,255,255,0.05)',
                          color: '#ffffff',
                          fontSize: '0.9375rem',
                          fontFamily: '"DM Sans", sans-serif',
                          outline: 'none',
                          transition: 'all 0.3s'
                        }}
                        value={formData.package}
                        onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                      >
                        <option value="" style={{ color: '#666' }}>Select a program</option>
                        <option value="beginner" style={{ color: '#000' }}>Beginner Program</option>
                        <option value="defensive" style={{ color: '#000' }}>Defensive Driving</option>
                        <option value="refresher" style={{ color: '#000' }}>Refresher Course</option>
                        <option value="license" style={{ color: '#000' }}>License Preparation</option>
                        <option value="intensive" style={{ color: '#000' }}>Intensive Course</option>
                      </select>
                    </div>
                    
                    <div style={{ marginBottom: '24px' }}>
                      <label style={{ display: 'block', fontSize: '0.875rem', color: '#9ca3af', marginBottom: '8px', fontFamily: '"DM Sans", sans-serif' }}>
                        Message
                      </label>
                      <textarea
                        rows={4}
                        style={{
                          width: '100%',
                          padding: '14px 16px',
                          borderRadius: '8px',
                          border: '1px solid rgba(255,255,255,0.1)',
                          background: 'rgba(255,255,255,0.05)',
                          color: '#ffffff',
                          fontSize: '0.9375rem',
                          fontFamily: '"DM Sans", sans-serif',
                          outline: 'none',
                          transition: 'all 0.3s',
                          resize: 'vertical'
                        }}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        Send Message
                        <Send className="w-4 h-4" />
                      </span>
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Placeholder */}
        <section className="section bg-[#141414]" style={{ paddingBottom: '96px' }}>
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <h2 className="section-header__title">
                Find Us
              </h2>
            </motion.div>
            
            <div className="card-consistent" style={{ padding: '0', overflow: 'hidden', height: '400px' }}>
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(212,175,55,0.05) 0%, rgba(212,175,55,0.02) 100%)' }}>
                <div style={{ textAlign: 'center' }}>
                  <MapPin className="w-12 h-12 text-[#d4af37] mx-auto mb-4" />
                  <p style={{ color: '#9ca3af', fontFamily: '"DM Sans", sans-serif' }}>
                    Ipaja, Lagos, Nigeria
                  </p>
                  <Link href="/areas" style={{ color: '#d4af37', fontFamily: '"DM Sans", sans-serif', fontSize: '0.875rem', marginTop: '8px', display: 'inline-block' }}>
                    View all areas we serve →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}