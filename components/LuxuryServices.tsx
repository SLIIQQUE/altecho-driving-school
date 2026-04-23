"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Car, Shield, Target, Award, CheckCircle, ArrowRight, Clock, Users, Star } from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Beginner Program",
    description: "Comprehensive training for first-time drivers. Build confidence from the ground up with expert instruction.",
    features: ["Vehicle controls mastery", "Traffic rules & signs", "Parking techniques", "Road safety fundamentals"],
    duration: "8-12 weeks",
    price: "Contact for pricing",
  },
  {
    icon: Target,
    title: "Defensive Driving",
    description: "Advanced techniques to anticipate hazards and respond effectively. Become a truly skilled driver.",
    features: ["Hazard perception", "Emergency maneuvers", "Weather adaptation", "Defensive techniques"],
    duration: "4-6 weeks",
    price: "Contact for pricing",
  },
  {
    icon: Shield,
    title: "Refresher Course",
    description: "Nervous about getting back on the road? Our refresher program builds confidence and skills.",
    features: ["Confidence building", "Skill assessment", "Targeted practice", "Personalized approach"],
    duration: "2-4 weeks",
    price: "Contact for pricing",
  },
  {
    icon: Award,
    title: "License Preparation",
    description: "Complete preparation for your driving license examination. Pass first time with flying colors.",
    features: ["Theory preparation", "Mock tests", "Road test practice", "Documentation guidance"],
    duration: "4-8 weeks",
    price: "Contact for pricing",
  },
];

function ServiceCard({ 
  icon: Icon, 
  title, 
  description, 
  features, 
  duration,
  price,
  index,
  popular = false 
}: {
  icon: any,
  title: string,
  description: string,
  features: string[],
  duration: string,
  price: string,
  index: number,
  popular?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="relative group"
    >
      {/* Main Card */}
      <div 
        className="relative h-full overflow-hidden rounded-2xl"
        style={{ 
          padding: '28px',
          background: popular 
            ? 'linear-gradient(145deg, #1e1e1e 0%, #121212 50%, #1a1a1a 100%)'
            : 'linear-gradient(145deg, #151515 0%, #0a0a0a 100%)',
          border: popular ? '1px solid rgba(212, 175, 55, 0.35)' : '1px solid rgba(255,255,255,0.05)',
          boxShadow: popular 
            ? '0 24px 48px rgba(0,0,0,0.5), 0 0 100px rgba(212, 175, 55, 0.06), inset 0 1px 0 rgba(255,255,255,0.08)'
            : '0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.03)',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        {/* Hover glow effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{
            background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212, 175, 55, 0.08), transparent 45%)'
          }}
        />
        
        {/* Top accent line for popular */}
        {popular && (
          <div 
            className="absolute top-0 left-0 right-0 h-px"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.9) 50%, transparent 100%)'
            }}
          />
        )}

        {/* Corner decorations */}
        <div className="absolute top-0 left-0 w-14 h-14 opacity-25 group-hover:opacity-40 transition-opacity duration-500">
          <div className="absolute top-4 left-4 w-px h-6 bg-gradient-to-b from-[#d4af37] to-transparent" />
          <div className="absolute top-4 left-4 w-6 h-px bg-gradient-to-r from-[#d4af37] to-transparent" />
        </div>
        
        <div className="relative z-10">
          {/* Icon with enhanced styling */}
          <motion.div 
            className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-5"
            style={{
              background: popular
                ? 'linear-gradient(135deg, rgba(212, 175, 55, 0.25) 0%, rgba(212, 175, 55, 0.08) 100%)'
                : 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
              border: popular ? '1px solid rgba(212, 175, 55, 0.35)' : '1px solid rgba(255,255,255,0.06)',
              boxShadow: popular ? '0 8px 24px rgba(212, 175, 55, 0.12)' : 'none'
            }}
            whileHover={{ scale: 1.08, rotate: 3 }}
            transition={{ duration: 0.3 }}
          >
            <div 
              className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" 
              style={{ background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.12), transparent 70%)' }} 
            />
            <Icon 
              className="w-7 h-7" 
              style={{ 
                position: 'relative', 
                zIndex: 1,
                color: popular ? '#d4af37' : '#d4af37'
              }} 
            />
          </motion.div>
          
          {/* Most Popular Badge */}
          {popular && (
            <div className="absolute -top-2.5 right-4 z-20">
              <span 
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #d4af37 0%, #c9a432 100%)',
                  color: '#000000',
                  fontFamily: '"DM Sans", sans-serif',
                  fontWeight: 700,
                  letterSpacing: '0.03em',
                  boxShadow: '0 4px 12px rgba(212, 175, 55, 0.3)'
                }}
              >
                <Star className="w-3 h-3 fill-current" />
                MOST POPULAR
              </span>
            </div>
          )}
          
          {/* Title */}
          <h3 style={{ 
            fontFamily: '"Playfair Display", serif', 
            fontSize: '1.3rem', 
            fontWeight: 600, 
            color: '#ffffff', 
            marginBottom: '12px',
            letterSpacing: '0.01em',
            lineHeight: 1.3
          }}>
            {title}
          </h3>
          
          {/* Description */}
          <p style={{ 
            color: '#a1a1aa', 
            marginBottom: '20px', 
            fontFamily: '"DM Sans", sans-serif',
            lineHeight: 1.65,
            fontSize: '0.9rem'
          }}>
            {description}
          </p>
          
          {/* Features with enhanced styling */}
          <ul style={{ marginBottom: '20px' }}>
            {features.map((feature, i) => (
              <motion.li 
                key={feature} 
                className="flex items-start gap-3"
                style={{ 
                  marginBottom: '10px',
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: '0.85rem',
                  color: '#a1a1aa'
                }}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * i }}
              >
                <div 
                  className="w-4.5 h-4.5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: 'rgba(212, 175, 55, 0.12)',
                    border: '1px solid rgba(212, 175, 55, 0.25)'
                  }}
                >
                  <CheckCircle className="w-2.5 h-2.5 text-[#d4af37]" />
                </div>
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
          
          {/* Meta with divider */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '14px', 
            paddingTop: '18px', 
            borderTop: '1px solid rgba(255,255,255,0.05)',
            marginBottom: '18px'
          }}>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-[#d4af37]/60" />
              <span style={{ fontSize: '0.8rem', color: '#a1a1aa', fontFamily: '"DM Sans", sans-serif' }}>
                {duration}
              </span>
            </div>
            <div 
              className="h-3.5 w-px"
              style={{ background: 'rgba(255,255,255,0.05)' }}
            />
            <span style={{ fontSize: '0.8rem', color: '#d4af37', fontFamily: '"DM Sans", sans-serif', fontWeight: 600 }}>
              {price}
            </span>
          </div>
          
          {/* Enhanced CTA */}
          <motion.div
            whileHover={{ x: 6 }}
            className="flex items-center gap-2 group/cta"
            style={{ 
              color: '#d4af37',
              fontSize: '0.85rem',
              fontFamily: '"DM Sans", sans-serif',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <span className="relative">
              Learn More
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#d4af37] group-hover/cta:w-full transition-all duration-300" />
            </span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-1" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function LuxuryServices() {
  return (
    <section className="section bg-[#0a0a0a] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#d4af37]/3 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#d4af37]/2 rounded-full blur-[100px]" />
      
      <div className="container-main relative z-10">
        {/* Section Header - Redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{
              background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.12) 0%, rgba(212, 175, 55, 0.04) 100%)',
              border: '1px solid rgba(212, 175, 55, 0.25)'
            }}
          >
            <Star className="w-4 h-4 text-[#d4af37] fill-[#d4af37]" />
            <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.8rem', color: '#d4af37', fontWeight: 500, letterSpacing: '0.05em' }}>OUR PROGRAMS</span>
          </motion.div>
          
          {/* Title with accent */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ 
              fontFamily: '"Playfair Display", serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 600,
              color: '#ffffff',
              marginBottom: '20px',
              lineHeight: 1.2
            }}
          >
            Premium Training{' '}
            <span 
              className="relative"
              style={{ color: '#d4af37' }}
            >
              Programs
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 4" fill="none">
                <path d="M0 2C25 2 35 2 50 2C75 2 85 2 100 2" stroke="url(#goldGradient)" strokeWidth="2" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
                    <stop offset="50%" stopColor="#d4af37" stopOpacity="1" />
                    <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          </motion.h2>
          
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            style={{ 
              fontFamily: '"DM Sans", sans-serif',
              color: '#9ca3af',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              maxWidth: '560px',
              margin: '0 auto'
            }}
          >
            Choose the program that fits your needs. Our certified instructors provide personalized 
            training to help you become a confident, skilled driver.
          </motion.p>
        </motion.div>

        {/* Services Grid - Redesigned */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              duration={service.duration}
              price={service.price}
              index={index}
              popular={service.title === "Beginner Program"}
            />
          ))}
        </div>

        {/* CTA Section - Redesigned Central Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center"
          style={{ marginTop: '64px' }}
        >
          <div 
            className="relative overflow-hidden rounded-2xl"
            style={{ 
              maxWidth: '700px', 
              width: '100%',
              background: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 0 60px rgba(212, 175, 55, 0.1), inset 0 1px 0 rgba(255,255,255,0.05)'
            }}
          >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#d4af37]/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            
            {/* Border accent line */}
            <div 
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.6), transparent)'
              }}
            />
            
            <div className="relative p-10 md:p-12">
              {/* Icon */}
              <div 
                className="w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6"
                style={{
                  background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2) 0%, rgba(212, 175, 55, 0.05) 100%)',
                  border: '1px solid rgba(212, 175, 55, 0.3)'
                }}
              >
                <Users className="w-8 h-8 text-[#d4af37]" />
              </div>
              
              <h3 
                className="text-center mb-4"
                style={{ 
                  fontFamily: '"Playfair Display", serif', 
                  fontSize: '1.75rem', 
                  fontWeight: 600, 
                  color: '#ffffff'
                }}
              >
                Not Sure Which Program is Right for You?
              </h3>
              
              <p 
                className="text-center mb-8"
                style={{ 
                  fontFamily: '"DM Sans", sans-serif',
                  color: '#9ca3af',
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  maxWidth: '480px',
                  margin: '0 auto 32px'
                }}
              >
                Our team is ready to help you choose the perfect training path. Contact us for a free consultation.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  href="/contact" 
                  className="group relative overflow-hidden rounded-lg px-8 py-4 font-medium transition-all duration-300 hover:shadow-lg"
                  style={{
                    background: 'linear-gradient(135deg, #d4af37 0%, #b8962e 100%)',
                    color: '#000000'
                  }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Free Consultation
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{
                      background: 'linear-gradient(135deg, #e5c14a 0%, #d4af37 100%)'
                    }}
                  />
                </Link>
              </div>
              
              {/* Trust badge */}
              <div 
                className="flex items-center justify-center gap-2 mt-8 pt-6"
                style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
              >
                <div className="flex -space-x-2">
                  {[1,2,3].map((i) => (
                    <div 
                      key={i}
                      className="w-8 h-8 rounded-full border-2 border-[#0d0d0d]"
                      style={{
                        background: `linear-gradient(135deg, ${i === 1 ? '#d4af37' : i === 2 ? '#2a2a2a' : '#1a1a1a'} 0%, ${i === 1 ? '#b8962e' : i === 2 ? '#1a1a1a' : '#0d0d0d'} 100%)`
                      }}
                    />
                  ))}
                </div>
                <span style={{ fontFamily: '"DM Sans", sans-serif', fontSize: '0.875rem', color: '#6b7280' }}>
                  Join <span style={{ color: '#d4af37', fontWeight: 500 }}>500+</span> students who got their license
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}