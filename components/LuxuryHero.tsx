"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { ChevronDown, Star, Shield, Award } from "lucide-react";

export default function LuxuryHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();
  
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center justify-center h-screen bg-[#050505]">
        <div className="text-[#d4af37] text-xl font-body animate-pulse">Loading...</div>
      </div>
    );
  }

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-[#050505]"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1920&q=80')`,
          }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/70 via-[#050505]/50 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/60 via-transparent to-[#050505]/60" />
      </motion.div>

      {/* Decorative Elements */}
      <motion.div 
        style={{ y: y2 }}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {/* Gold gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#d4af37]/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#d4af37]/3 blur-3xl" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNkNGRhMzciIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDM0djJoLTJ2LTJoMnptLTItNHYyaC0ydi0yaDJ6bTQtOGgydjJoLTJ6bS04LTR2MmgtMnYtMmgyek0zMiAzMHYyaC0ydi0yaDJ6bTQtOGgydjJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 min-h-screen flex flex-col justify-center items-center"
      >
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 backdrop-blur-sm mb-10"
            >
              <Shield className="w-4 h-4 text-[#d4af37]" />
              <span className="font-body text-sm text-[#d4af37] tracking-widest uppercase">
                FRSC Certified Excellence
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-display-xl text-white mb-8 leading-tight"
            >
              Master the Road with
              <span className="block mt-2"> <span className="text-gradient-luxury">Confidence & Grace</span></span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-body leading-relaxed"
            >
              Experience premium driving instruction that transforms novices into skilled, 
              confident drivers. Where expertise meets elegance.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-6 justify-center mb-16"
            >
              <Link 
                href="/contact" 
                className="btn-luxury text-lg px-10 py-5 group"
              >
                <span className="flex items-center gap-3">
                  Begin Your Journey
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </span>
              </Link>
              <Link 
                href="/services" 
                className="btn-luxury btn-luxury-outline text-lg px-10 py-5 group"
              >
                <span className="flex items-center gap-3">
                  Explore Programs
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-12 justify-center"
            >
              {[
                { value: "500+", label: "Graduates" },
                { value: "98%", label: "Success Rate" },
                { value: "4.9", label: "Rating" },
                { value: "10+", label: "Years Experience" },
              ].map((stat, i) => (
                <motion.div 
                  key={stat.label} 
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-4xl md:text-5xl font-display font-bold text-[#d4af37]">{stat.value}</div>
                  <div className="font-body text-sm text-gray-500 mt-2 tracking-wide">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-8 h-12 rounded-full border border-[#d4af37]/30 flex justify-center pt-3"
        >
          <div className="w-1 h-3 rounded-full bg-[#d4af37]" />
        </motion.div>
      </motion.div>

      {/* Trust Badges */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block"
      >
        <div className="flex flex-col gap-6">
          {[
            { icon: Shield, label: "FRSC Certified" },
            { icon: Award, label: "Award Winning" },
            { icon: Star, label: "Premium Service" },
          ].map((item, i) => (
            <div 
              key={item.label}
              className="flex items-center gap-3 px-4 py-2 rounded-full bg-black/30 backdrop-blur-sm border border-white/10"
            >
              <item.icon className="w-5 h-5 text-[#d4af37]" />
              <span className="font-body text-xs text-gray-300">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
