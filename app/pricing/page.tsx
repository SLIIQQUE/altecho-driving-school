"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import LuxuryNavbar from "@/components/LuxuryNavbar";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight, Sparkles, Car, Shield, Clock } from "lucide-react";

const plans = [
  {
    name: "Essential",
    description: "Perfect for beginners starting their driving journey",
    price: "Contact Us",
    duration: "8-12 weeks",
    popular: false,
    features: [
      "12 comprehensive lessons",
      "Vehicle controls training",
      "Basic parking techniques",
      "Traffic rules education",
      "2 mock tests",
      "Digital progress tracking",
      "Email support",
    ],
  },
  {
    name: "Premium",
    description: "Our most popular program for complete driver transformation",
    price: "Contact Us",
    duration: "10-14 weeks",
    popular: true,
    features: [
      "20 comprehensive lessons",
      "Defensive driving techniques",
      "Advanced parking mastery",
      "Hazard perception training",
      "5 mock tests",
      "Priority scheduling",
      "Personal instructor",
      "WhatsApp support",
      "Free theory materials",
    ],
  },
  {
    name: "Elite",
    description: "VIP experience with premium benefits and guarantees",
    price: "Contact Us",
    duration: "8-12 weeks",
    popular: false,
    features: [
      "Unlimited lessons until certified",
      "All Premium features",
      "Home pickup service",
      "1-on-1 intensive training",
      "Express license processing",
      "Dedicated driving coach",
      "Premium certificate",
      "Lifetime refresher access",
    ],
  },
];

const faqs = [
  { question: "What's included in the price?", answer: "All prices include lessons, use of training vehicle, mock tests, and FRSC registration. Fuel costs may vary." },
  { question: "Can I pay in installments?", answer: "Yes! We offer flexible payment plans. Contact us to discuss your options." },
  { question: "How long does it take to get licensed?", answer: "Most students complete their training in 8-14 weeks, depending on the program chosen and your availability." },
  { question: "What if I fail the test?", answer: "We offer free refresher lessons if you need to retake. Our 98% first-attempt pass rate speaks for itself." },
  { question: "Do you offer intensive courses?", answer: "Yes! Our Intensive program is designed for those who need to learn quickly. Ask about availability." },
];

export default function PricingPage() {
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
                Pricing
              </span>
              
              <h1 className="section-header__title" style={{ marginBottom: '24px', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)' }}>
                Invest in Your Driving Future
              </h1>
              
              <p style={{ 
                fontSize: '1.125rem', 
                color: '#d1d5db', 
                lineHeight: 1.7,
                fontFamily: '"DM Sans", sans-serif',
                maxWidth: '600px'
              }}>
                Transparent pricing with no hidden fees. Choose the program that fits 
                your budget and goals.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="section bg-[#141414]">
          <div className="container-main">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', maxWidth: '1000px', margin: '0 auto' }}>
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="card-consistent"
                  style={{ position: 'relative' }}
                >
                  {plan.popular && (
                    <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', zIndex: 1 }}>
                      <span className="badge-consistent" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Sparkles className="w-3 h-3" />
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div style={{ padding: plan.popular ? '40px 32px' : '32px' }}>
                    <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', color: '#ffffff', marginBottom: '8px' }}>
                      {plan.name}
                    </h3>
                    <p style={{ color: '#9ca3af', marginBottom: '24px', fontFamily: '"DM Sans", sans-serif', fontSize: '0.9375rem' }}>
                      {plan.description}
                    </p>

                    <div style={{ marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                      <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '2rem', fontWeight: 700, color: '#d4af37' }}>
                        {plan.price}
                      </span>
                      <div style={{ fontSize: '0.875rem', color: '#9ca3af', marginTop: '4px', fontFamily: '"DM Sans", sans-serif' }}>
                        {plan.duration}
                      </div>
                    </div>

                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {plan.features.map((feature) => (
                        <li 
                          key={feature}
                          style={{ 
                            display: 'flex', 
                            alignItems: 'flex-start', 
                            gap: '12px', 
                            marginBottom: '14px',
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: '0.9375rem',
                            color: '#d1d5db'
                          }}
                        >
                          <CheckCircle className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Link 
                      href="/contact" 
                      className={plan.popular ? "btn-primary" : "btn-secondary"}
                      style={{ width: '100%', marginTop: '32px', justifyContent: 'center' }}
                    >
                      <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        Get Started
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section className="section bg-[#0a0a0a]">
          <div className="container-main">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', textAlign: 'center' }}>
              {[
                { icon: Shield, title: "Satisfaction Guarantee", description: "Not happy with your first lesson? It's free." },
                { icon: Clock, title: "Flexible Scheduling", description: "We work around your availability." },
                { icon: Car, title: "Quality Vehicles", description: "Modern, safe training fleet." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-consistent"
                  style={{ textAlign: 'center', padding: '32px' }}
                >
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(212,175,55,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <item.icon className="w-6 h-6 text-[#d4af37]" />
                  </div>
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.125rem', color: '#ffffff', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ color: '#9ca3af', fontFamily: '"DM Sans", sans-serif', fontSize: '0.875rem' }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section bg-[#141414]">
          <div className="container-main">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-header"
            >
              <span className="badge-consistent" style={{ marginBottom: '16px', display: 'inline-block' }}>FAQ</span>
              <h2 className="section-header__title">
                Frequently Asked Questions
              </h2>
            </motion.div>

            <div style={{ maxWidth: '800px', margin: '0 auto' }}>
              {faqs.map((faq, i) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="card-consistent"
                  style={{ marginBottom: '16px', padding: '24px 32px' }}
                >
                  <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.0625rem', color: '#ffffff', marginBottom: '8px' }}>
                    {faq.question}
                  </h3>
                  <p style={{ color: '#9ca3af', fontFamily: '"DM Sans", sans-serif', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                    {faq.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
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
                Still Have Questions?
              </h2>
              <p style={{ color: '#9ca3af', marginBottom: '32px', fontFamily: '"DM Sans", sans-serif', fontSize: '1.0625rem' }}>
                Our team is here to help. Contact us for a free consultation.
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