"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LuxuryNavbar from "@/components/LuxuryNavbar";
import Footer from "@/components/Footer";
import { Car, Shield, Target, Award, CheckCircle, ArrowRight, Clock, Users, Star } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Beginner Program",
    description: "Comprehensive training for first-time drivers. Build confidence from the ground up with expert instruction.",
    features: ["Vehicle controls mastery", "Traffic rules & signs", "Parking techniques", "Road safety fundamentals"],
    duration: "8-12 weeks",
  },
  {
    icon: Target,
    title: "Defensive Driving",
    description: "Advanced techniques to anticipate hazards and respond effectively. Become a truly skilled driver.",
    features: ["Hazard perception", "Emergency maneuvers", "Weather adaptation", "Defensive techniques"],
    duration: "4-6 weeks",
  },
  {
    icon: Shield,
    title: "Refresher Course",
    description: "Nervous about getting back on the road? Our refresher program builds confidence and skills.",
    features: ["Confidence building", "Skill assessment", "Targeted practice", "Personalized approach"],
    duration: "2-4 weeks",
  },
  {
    icon: Award,
    title: "License Preparation",
    description: "Complete preparation for your driving license examination. Pass first time with flying colors.",
    features: ["Theory preparation", "Mock tests", "Road test practice", "Documentation guidance"],
    duration: "4-8 weeks",
  },
  {
    icon: Users,
    title: "Instructor Training",
    description: "Train to become a professional driving instructor with FRSC certification.",
    features: ["Teaching methodology", "Road safety standards", "Student management", "Assessment techniques"],
    duration: "8-12 weeks",
  },
  {
    icon: Star,
    title: "Intensive Course",
    description: "Fast-track program for those who need to learn quickly. Accelerated learning with guaranteed results.",
    features: ["Daily lessons", "Personal instructor", "Flexible schedule", "Express testing"],
    duration: "2-4 weeks",
  },
];

export default function ServicesPage() {
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
                Our Services
              </span>
              
              <h1 className="section-header__title" style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                Comprehensive Driving Programs
              </h1>
              
              <p style={{ 
                fontSize: '1.125rem', 
                color: '#d1d5db', 
                lineHeight: 1.7,
                fontFamily: '"DM Sans", sans-serif',
                maxWidth: '600px'
              }}>
                We offer a range of driving programs designed to meet your specific needs. 
                From beginner lessons to advanced defensive driving, we've got you covered.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section bg-[#0a0a0a]">
          <div className="container-main">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="card-consistent"
                >
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                      <service.icon className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    
                    <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.375rem', color: '#ffffff', marginBottom: '12px' }}>
                      {service.title}
                    </h3>
                    
                    <p style={{ color: '#9ca3af', lineHeight: 1.7, marginBottom: '24px', fontFamily: '"DM Sans", sans-serif' }}>
                      {service.description}
                    </p>
                    
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, marginBottom: '24px' }}>
                      {service.features.map((feature) => (
                        <li 
                          key={feature}
                          style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '10px', 
                            marginBottom: '10px',
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: '0.9375rem',
                            color: '#d1d5db'
                          }}
                        >
                          <CheckCircle className="w-4 h-4 text-[#d4af37] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span style={{ fontSize: '0.875rem', color: '#9ca3af', fontFamily: '"DM Sans", sans-serif' }}>
                        {service.duration}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section bg-[#141414]">
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <span className="badge-consistent" style={{ marginBottom: '16px', display: 'inline-block' }}>How It Works</span>
              <h2 className="section-header__title">
                Your Path to a License
              </h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
              {[
                { step: "01", title: "Book Consultation", description: "Tell us about your goals and experience level" },
                { step: "02", title: "Assessment", description: "We evaluate your current skill level" },
                { step: "03", title: "Custom Plan", description: "Get a personalized training plan" },
                { step: "04", title: "Learn & Pass", description: "Complete training and ace your test" },
              ].map((item, i) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ textAlign: 'center' }}
                >
                  <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '3rem', fontWeight: 700, color: 'rgba(212,175,55,0.2)', marginBottom: '16px' }}>
                    {item.step}
                  </div>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.25rem', color: '#ffffff', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#9ca3af', fontFamily: '"DM Sans", sans-serif', fontSize: '0.9375rem' }}>
                    {item.description}
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
                Ready to Start Learning?
              </h2>
              <p style={{ color: '#9ca3af', marginBottom: '32px', fontFamily: '"DM Sans", sans-serif', fontSize: '1.0625rem' }}>
                Contact us today for a free consultation and let&apos;s get you on the road.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                <Link href="/contact" className="btn-primary">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                <Link href="/pricing" className="btn-secondary">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    View Pricing
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