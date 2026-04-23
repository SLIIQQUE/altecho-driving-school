"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LuxuryNavbar from "@/components/LuxuryNavbar";
import Footer from "@/components/Footer";
import { MapPin, Clock, Navigation, Phone, ArrowRight } from "lucide-react";

const areas = [
  { name: "Ipaja", distance: "Central", features: "Main training hub", available: true },
  { name: "Abeokuta", distance: "30 min", features: "Flexible pickup", available: true },
  { name: "Sango", distance: "20 min", features: "Home pickup", available: true },
  { name: "Ota", distance: "25 min", features: "Flexible pickup", available: true },
  { name: "Agbado", distance: "15 min", features: "Home pickup", available: true },
  { name: "Iyana-Itele", distance: "10 min", features: "Home pickup", available: true },
  { name: "Idimu", distance: "15 min", features: "Flexible pickup", available: true },
  { name: "Egbeda", distance: "20 min", features: "Flexible pickup", available: true },
  { name: " Dopemu", distance: "25 min", features: "Flexible pickup", available: false },
  { name: "Akowonjo", distance: "30 min", features: "Flexible pickup", available: false },
  { name: "Shasha", distance: "20 min", features: "Flexible pickup", available: true },
  { name: "Diobu", distance: "35 min", features: "Flexible pickup", available: false },
];

const features = [
  { icon: MapPin, title: "Flexible Pickup", description: "We pick you up from your location" },
  { icon: Clock, title: "Flexible Hours", description: "Morning, afternoon, and weekend sessions" },
  { icon: Navigation, title: "Door-to-Door", description: "Complete training at your location" },
];

export default function AreasPage() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);

  useEffect(() => {
    setMounted(true);
  }, []);

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
                Areas We Serve
              </span>
              
              <h1 className="section-header__title" style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                Driving Lessons Across Lagos
              </h1>
              
              <p style={{ 
                fontSize: '1.125rem', 
                color: '#d1d5db', 
                lineHeight: 1.7,
                fontFamily: '"DM Sans", sans-serif',
                maxWidth: '600px'
              }}>
                We provide professional driving lessons across multiple locations in Lagos. 
                Find a location near you or ask about home pickup service.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Areas Grid */}
        <section className="section bg-[#0a0a0a]">
          <div className="container-main">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {areas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="card-consistent"
                  style={{ 
                    padding: '24px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    opacity: area.available ? 1 : 0.5
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ 
                      width: '48px', 
                      height: '48px', 
                      borderRadius: '12px', 
                      background: area.available ? 'rgba(212,175,55,0.1)' : 'rgba(255,255,255,0.05)',
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center' 
                    }}>
                      <MapPin className={`w-5 h-5 ${area.available ? 'text-[#d4af37]' : 'text-gray-600'}`} />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.0625rem', color: '#ffffff', fontWeight: 600 }}>
                        {area.name}
                      </h3>
                      <p style={{ fontSize: '0.8125rem', color: '#9ca3af', fontFamily: '"DM Sans", sans-serif' }}>
                        {area.distance} • {area.features}
                      </p>
                    </div>
                  </div>
                  {area.available && (
                    <span style={{ 
                      fontSize: '0.6875rem', 
                      color: '#d4af37', 
                      fontFamily: '"DM Sans", sans-serif',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.05em'
                    }}>
                      Available
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="section bg-[#141414]">
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <span className="badge-consistent" style={{ marginBottom: '16px', display: 'inline-block' }}>Service Features</span>
              <h2 className="section-header__title">
                Why Choose Our Service
              </h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-consistent"
                  style={{ padding: '32px', textAlign: 'center' }}
                >
                  <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <feature.icon className="w-7 h-7 text-[#d4af37]" />
                  </div>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.25rem', color: '#ffffff', marginBottom: '12px' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: '#9ca3af', lineHeight: 1.6, fontFamily: '"DM Sans", sans-serif', fontSize: '0.9375rem' }}>
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-[#0a0a0a]">
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-consistent"
              style={{ textAlign: 'center', padding: '64px 48px', maxWidth: '800px', margin: '0 auto' }}
            >
              <h2 className="section-header__title" style={{ marginBottom: '16px' }}>
                Don't See Your Area?
              </h2>
              <p style={{ color: '#9ca3af', marginBottom: '32px', fontFamily: '"DM Sans", sans-serif', fontSize: '1.0625rem' }}>
                We may still be able to serve you! Contact us to discuss your location.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                <Link href="/contact" className="btn-primary">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}