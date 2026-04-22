"use client";

import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="section relative overflow-hidden bg-[#0a0a0a]">
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)' }} />
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '800px', height: '800px', borderRadius: '50%', background: 'rgba(212,175,55,0.03)', filter: 'blur(120px)' }} />
      </div>
      
      <div className="container-main relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center' }}
        >
          <span className="badge-consistent" style={{ marginBottom: '24px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles className="w-4 h-4" />
            AI-Powered Learning
          </span>
          
          <h2 className="section-header__title" style={{ marginBottom: '24px' }}>
            Begin Your Driving Journey Today
          </h2>
          
          <p style={{ fontSize: '1.125rem', color: '#9ca3af', marginBottom: '40px', fontFamily: '"Plus Jakarta Sans", sans-serif', lineHeight: 1.7 }}>
            Get instant answers, personalized guidance, and 24/7 support from our AI Driving Tutor. 
            Or connect with our team when you&apos;re ready to book your first lesson.
          </p>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            <button 
              onClick={() => {
                const event = new CustomEvent("open-ai-chat");
                window.dispatchEvent(event);
              }}
              className="btn-primary cursor-pointer"
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sparkles className="w-4 h-4" />
                Chat with AI Tutor
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
