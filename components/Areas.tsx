"use client";

import { motion } from "motion/react";
import { MapPin, Clock, Navigation, Phone, Car, Shield, Star } from "lucide-react";
import Link from "next/link";

const areas = [
  { name: "Ipaja", distance: "Central", highlight: true },
  { name: "Abeokuta", distance: "30 min" },
  { name: "Sango", distance: "20 min" },
  { name: "Ota", distance: "25 min" },
  { name: "Agbado", distance: "15 min" },
  { name: "Iyana-Itele", distance: "10 min" },
  { name: "Egbeda", distance: "12 min" },
  { name: "Dopemu", distance: "8 min" },
];

const stats = [
  { number: "500+", label: "Students Passed" },
  { number: "98%", label: "Pass Rate" },
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Areas Covered" },
];

export default function Areas() {
  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a]" />
      
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
      
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-[#d4af37]/3 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="badge-consistent inline-flex items-center gap-2 mb-4">
            <MapPin className="w-4 h-4" />
            Service Areas
          </span>
          <h2 className="section-header__title">
            Driving Lessons <span className="text-[#d4af37]">Near You</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-body text-lg">
            We bring professional driving instruction directly to your location. 
            Serving Ipaja and surrounding areas with door-to-door pickup service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-4 mb-16">
          {areas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              whileHover={{ y: -6 }}
              className="relative group"
            >
              <div 
                className={`relative overflow-hidden rounded-2xl h-full transition-all duration-400 ${
                  area.highlight 
                    ? 'border-2 border-[#d4af37]/50'
                    : 'border border-white/5 hover:border-[#d4af37]/25'
                }`}
                style={{
                  background: area.highlight
                    ? 'linear-gradient(145deg, #1c1c1c 0%, #0f0f0f 60%, #1a1a1a 100%)'
                    : 'linear-gradient(145deg, #141414 0%, #0a0a0a 100%)',
                  boxShadow: area.highlight
                    ? '0 12px 40px rgba(0,0,0,0.4), 0 0 60px rgba(212, 175, 55, 0.08)'
                    : '0 4px 20px rgba(0,0,0,0.3)'
                }}
              >
                {/* Hover glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212, 175, 55, 0.08), transparent 40%)'
                  }}
                />
                
                {/* Top accent for highlighted */}
                {area.highlight && (
                  <div 
                    className="absolute top-0 left-0 right-0 h-px"
                    style={{
                      background: 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.8) 50%, transparent 100%)'
                    }}
                  />
                )}

                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-12 h-12 opacity-30">
                  <div className="absolute top-3 left-3 w-px h-6 bg-gradient-to-b from-[#d4af37] to-transparent" />
                  <div className="absolute top-3 left-3 w-6 h-px bg-gradient-to-r from-[#d4af37] to-transparent" />
                </div>
                
                <div className="relative z-10 p-5">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 
                        className="font-display text-lg font-semibold text-white group-hover:text-[#d4af37] transition-colors duration-300"
                        style={{ fontFamily: '"Playfair Display", serif' }}
                      >
                        {area.name}
                      </h3>
                      <p 
                        className="text-xs text-gray-500 font-body mt-1 flex items-center gap-1"
                      >
                        {area.highlight && <Star className="w-3 h-3 text-[#d4af37] fill-[#d4af37]" />}
                        {area.distance}
                      </p>
                    </div>
                    <div 
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        area.highlight 
                          ? 'bg-gradient-to-br from-[#d4af37] to-[#b8962e]' 
                          : 'bg-white/5 group-hover:bg-[#d4af37]/15'
                      }`}
                    >
                      <MapPin className={`w-5 h-5 ${area.highlight ? 'text-black' : 'text-[#d4af37] group-hover:text-[#d4af37]'}`} />
                    </div>
                  </div>
                  
                  {area.highlight && (
                    <div className="flex items-center gap-2 mt-4 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                      <div className="flex -space-x-1">
                        {[1,2,3].map((i) => (
                          <div 
                            key={i}
                            className="w-5 h-5 rounded-full border border-[#0f0f0f]"
                            style={{
                              background: `linear-gradient(135deg, ${i === 1 ? '#d4af37' : i === 2 ? '#3a3a3a' : '#2a2a2a'} 0%, ${i === 1 ? '#b8962e' : i === 2 ? '#2a2a2a' : '#1a1a1a'} 100%)`
                            }}
                          />
                        ))}
                      </div>
                      <span className="text-xs text-gray-500">
                        <span className="text-[#d4af37] font-medium">200+</span> students
                      </span>
                    </div>
                  )}
                  
                  {!area.highlight && (
                    <div className="flex items-center gap-1 mt-2 text-xs text-gray-600 group-hover:text-[#d4af37]/70 transition-colors">
                      <Navigation className="w-3 h-3" />
                      <span>Get directions</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="relative group"
            >
              <div 
                className="relative overflow-hidden rounded-2xl p-6 text-center"
                style={{
                  background: 'linear-gradient(145deg, #141414 0%, #0a0a0a 100%)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
                }}
              >
                {/* Hover glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(400px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212, 175, 55, 0.06), transparent 40%)'
                  }}
                />
                
                <div className="relative z-10">
                  <div 
                    className="font-display text-4xl md:text-5xl font-bold mb-2"
                    style={{ 
                      fontFamily: '"Playfair Display", serif',
                      background: 'linear-gradient(135deg, #d4af37 0%, #e5c14a 50%, #d4af37 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {stat.number}
                  </div>
                  <div 
                    className="text-sm text-gray-500 font-body"
                    style={{ fontFamily: '"DM Sans", sans-serif' }}
                  >
                    {stat.label}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-5"
        >
          {[
            {
              icon: Clock,
              title: "Flexible Hours",
              description: "Morning, afternoon, and weekend sessions available",
            },
            {
              icon: Car,
              title: "Door-to-Door",
              description: "We pick you up and drop you off at your location",
            },
            {
              icon: Shield,
              title: "Certified Instructors",
              description: "FRSC certified professionals with years of experience",
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -4 }}
              className="relative group"
            >
              <div 
                className="relative overflow-hidden rounded-2xl p-6 h-full transition-all duration-300"
                style={{
                  background: 'linear-gradient(145deg, #141414 0%, #0a0a0a 100%)',
                  border: '1px solid rgba(255,255,255,0.05)',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.3)'
                }}
              >
                {/* Hover glow */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(212, 175, 55, 0.06), transparent 40%)'
                  }}
                />
                
                {/* Top accent line */}
                <div 
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(212, 175, 55, 0.5) 50%, transparent 100%)'
                  }}
                />

                <div className="relative z-10">
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                    style={{
                      background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0.05) 100%)',
                      border: '1px solid rgba(212, 175, 55, 0.2)'
                    }}
                  >
                    <item.icon className="w-7 h-7 text-[#d4af37]" />
                  </div>
                  <h4 
                    className="font-semibold text-white mb-2"
                    style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.1rem' }}
                  >
                    {item.title}
                  </h4>
                  <p 
                    className="text-sm text-gray-500"
                    style={{ fontFamily: '"DM Sans", sans-serif', lineHeight: 1.6 }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/areas" className="btn-primary inline-flex items-center gap-2">
            View All Areas
            <MapPin className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
