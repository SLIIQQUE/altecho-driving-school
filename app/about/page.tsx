"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LuxuryNavbar from "@/components/LuxuryNavbar";
import Footer from "@/components/Footer";
import { Award, Shield, Users, Clock, MapPin, Phone, Mail, CheckCircle, ArrowRight, Car, Target, Star } from "lucide-react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Graduates" },
  { value: "98%", label: "Pass Rate" },
  { value: "4.9", label: "Rating" },
];

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "We prioritize safety above all else, teaching defensive driving techniques that protect you and others on the road.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for excellence in every lesson, ensuring you receive the highest quality driving education.",
  },
  {
    icon: Users,
    title: "Student-Centered",
    description: "Every learner is unique. We tailor our instruction to your pace and learning style.",
  },
  {
    icon: Award,
    title: "Professionalism",
    description: "Our FRSC certified instructors maintain the highest standards of professional conduct.",
  },
];

const timeline = [
  { year: "2014", event: "Founded Altecho Driving School" },
  { year: "2016", event: "Launched beginner program" },
  { year: "2018", event: "100th graduate" },
  { year: "2020", event: "Added defensive driving" },
  { year: "2022", event: "500+ graduates milestone" },
  { year: "2024", event: "Award winning recognition" },
];

export default function About() {
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

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
          {/* Background */}
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
                About Us
              </span>
              
              <h1 className="section-header__title" style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                Building Confident Drivers Since 2014
              </h1>
              
              <p style={{ 
                fontSize: '1.125rem', 
                color: '#d1d5db', 
                lineHeight: 1.7,
                fontFamily: '"DM Sans", sans-serif',
                maxWidth: '600px'
              }}>
                Altecho Driving School has been transforming novices into confident, 
                skilled drivers for over a decade. Our mission is to provide world-class 
                driving education that exceeds expectations and creates safer roads for everyone.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="section bg-[#141414]">
          <div className="container-main">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', textAlign: 'center' }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '2.5rem', fontWeight: 700, color: '#d4af37', marginBottom: '8px' }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: '0.875rem', color: '#9ca3af', fontFamily: '"DM Sans", sans-serif' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="section bg-[#0a0a0a]">
          <div className="container-main">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', alignItems: 'center' }}>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <span className="badge-consistent" style={{ marginBottom: '16px', display: 'inline-block' }}>Our Story</span>
                <h2 className="section-header__title" style={{ marginBottom: '24px', textAlign: 'left' }}>
                  A Passion for Driving Excellence
                </h2>
                <p style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: '20px', fontFamily: '"DM Sans", sans-serif' }}>
                  Founded in 2014, Altecho Driving School began with a simple mission: 
                  to make driving education accessible, professional, and enjoyable for everyone. 
                  What started as a small operation in Ipaja has grown into one of Lagos' 
                  most trusted driving schools.
                </p>
                <p style={{ color: '#9ca3af', lineHeight: 1.8, marginBottom: '32px', fontFamily: '"DM Sans", sans-serif' }}>
                  Our team of FRSC certified instructors combines years of experience with 
                  modern teaching methods to help you become a confident, safe driver. We believe 
                  everyone deserves the chance to drive with confidence.
                </p>
                <Link href="/contact" className="btn-primary">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Start Your Journey
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card-consistent"
                style={{ padding: '48px' }}
              >
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', color: '#ffffff', marginBottom: '32px' }}>
                  Why Choose Altecho?
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {[
                    "FRSC certified instructors",
                    "Modern training vehicles",
                    "Flexible scheduling",
                    "Personalized learning plans",
                    "98% first-attempt pass rate",
                    "Lifetime refresher support"
                  ].map((item) => (
                    <li 
                      key={item}
                      style={{ 
                        display: 'flex', 
                        alignItems: 'center', 
                        gap: '12px', 
                        marginBottom: '16px',
                        fontFamily: '"DM Sans", sans-serif',
                        color: '#d1d5db'
                      }}
                    >
                      <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section bg-[#141414]">
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <span className="badge-consistent" style={{ marginBottom: '16px', display: 'inline-block' }}>Our Values</span>
              <h2 className="section-header__title">
                What Drives Us
              </h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
              {values.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-consistent"
                >
                  <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <value.icon className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.25rem', color: '#ffffff', marginBottom: '12px' }}>
                    {value.title}
                  </h3>
                  <p style={{ color: '#9ca3af', lineHeight: 1.6, fontFamily: '"DM Sans", sans-serif', fontSize: '0.9375rem' }}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section bg-[#0a0a0a]">
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <span className="badge-consistent" style={{ marginBottom: '16px', display: 'inline-block' }}>Our Journey</span>
              <h2 className="section-header__title">
                Milestones
              </h2>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '24px' }}>
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  style={{ textAlign: 'center' }}
                >
                  <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '2rem', fontWeight: 700, color: '#d4af37', marginBottom: '8px' }}>
                    {item.year}
                  </div>
                  <div style={{ color: '#d1d5db', fontFamily: '"DM Sans", sans-serif', fontSize: '0.9375rem' }}>
                    {item.event}
                  </div>
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
                Ready to Start Your Journey?
              </h2>
              <p style={{ color: '#9ca3af', marginBottom: '32px', fontFamily: '"DM Sans", sans-serif', fontSize: '1.0625rem' }}>
                Join hundreds of satisfied drivers who have mastered the road with Altecho.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                <Link href="/contact" className="btn-primary">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Get in Touch
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
                <Link href="/services" className="btn-secondary">
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    View Programs
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