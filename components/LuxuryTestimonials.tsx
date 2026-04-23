"use client";

import { useState, useRef } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Chidinma Okonkwo",
    role: "Business Executive",
    quote: "Altecho transformed me from a nervous beginner to a confident driver. The instructors are patient, professional, and truly invested in your success. Best decision I made for my independence.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1531123897727-8f129e78ae77?w=200&h=200&fit=crop",
    program: "Beginner Program",
  },
  {
    name: "Emeka Nwachukwu",
    role: "Medical Professional",
    quote: "The defensive driving course was eye-opening. I learned techniques I never knew existed. Now I feel completely prepared for any situation on the road. Highly recommend for anyone serious about safety.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd5008f44?w=200&h=200&fit=crop",
    program: "Defensive Driving",
  },
  {
    name: "Adaeze Fortune",
    role: "University Student",
    quote: "I was terrified of driving before joining Altecho. Their refresher course built my confidence step by step. The instructors understood my anxiety and worked with me at my own pace. Passed my test on the first try!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b71330?w=200&h=200&fit=crop",
    program: "Refresher Course",
  },
  {
    name: "Olumide Adeyemi",
    role: "Software Engineer",
    quote: "Premium service, premium results. The license preparation program was thorough and well-structured. The mock tests prepared me perfectly for the real exam. Worth every kobo.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    program: "License Preparation",
  },
  {
    name: "Funke Williams",
    role: "Entrepreneur",
    quote: "Teaching my teenage daughter to drive was stress-free thanks to Altecho. Professional scheduling, expert instruction, and excellent communication throughout. A truly premium experience.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    program: "Beginner Program",
  },
];

export default function LuxuryTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const next = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section bg-[#050505] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#d4af37]/3 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#d4af37]/2 blur-3xl" />
      </div>

      <div className="container-main relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="section-header__badge"
          >
            <span className="badge-consistent">Testimonials</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="section-header__title"
          >
            What Our Students
            <span className="section-header__title-accent"> Say</span>
          </motion.h2>
        </motion.div>

        {/* Featured Testimonial */}
        <div style={{ maxWidth: '800px', margin: '0 auto 48px' }}>
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="card-consistent"
            style={{ textAlign: 'center', padding: '48px 32px' }}
          >
            <Quote className="w-10 h-10 text-[#d4af37]/30 mx-auto mb-6" style={{ margin: '0 auto 24px' }} />
            
            <p style={{ 
              fontFamily: '"Cormorant Garamond", serif',
              fontSize: '1.375rem',
              fontStyle: 'italic',
              color: '#d1d5db',
              marginBottom: '32px',
              lineHeight: 1.7,
              maxWidth: '640px',
              margin: '0 auto 32px'
            }}>
              "{testimonials[activeIndex].quote}"
            </p>
            
            {/* Rating */}
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
              ))}
            </div>
            
            {/* Author */}
            <div className="flex items-center justify-center gap-4">
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', overflow: 'hidden', border: '2px solid rgba(212,175,55,0.3)' }}>
                <img 
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.125rem', color: '#ffffff', fontWeight: 600 }}>
                  {testimonials[activeIndex].name}
                </div>
                <div style={{ fontSize: '0.875rem', color: '#9ca3af' }}>
                  {testimonials[activeIndex].role}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#d4af37', marginTop: '4px' }}>
                  {testimonials[activeIndex].program}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-6" style={{ marginBottom: '48px' }}>
          <button
            onClick={prev}
            style={{
              width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'transparent', cursor: 'pointer', transition: 'all 0.3s'
            }}
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                style={{
                  width: '8px', height: '8px', borderRadius: '50%', 
                  background: i === activeIndex ? '#d4af37' : 'rgba(255,255,255,0.2)',
                  border: 'none', cursor: 'pointer', transition: 'all 0.3s'
                }}
              />
            ))}
          </div>
          
          <button
            onClick={next}
            style={{
              width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.15)', 
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'transparent', cursor: 'pointer', transition: 'all 0.3s'
            }}
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>

        {/* Thumbnail Carousel */}
        <div className="flex justify-center gap-4 flex-wrap">
          {testimonials.map((testimonial, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`w-14 h-14 rounded-full overflow-hidden border-2 transition-all ${
                i === activeIndex 
                  ? 'border-[#d4af37] scale-110' 
                  : 'border-transparent opacity-50 hover:opacity-100'
              }`}
            >
              <img 
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}