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
              whileHover={{ y: -4 }}
              className={`relative group cursor-pointer ${
                area.highlight 
                  ? 'md:col-span-2 bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 border-[#d4af37]/30' 
                  : 'bg-[#141414] border-white/5 hover:border-[#d4af37]/20'
              } border rounded-2xl p-6 transition-all duration-300`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display text-xl font-semibold text-white group-hover:text-[#d4af37] transition-colors">
                    {area.name}
                  </h3>
                  <p className="text-sm text-gray-500 font-body mt-1">
                    {area.distance}
                  </p>
                </div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  area.highlight ? 'bg-[#d4af37]' : 'bg-white/5 group-hover:bg-[#d4af37]/10'
                } transition-colors`}>
                  <MapPin className={`w-5 h-5 ${area.highlight ? 'text-black' : 'text-[#d4af37]'}`} />
                </div>
              </div>
              
              {area.highlight && (
                <div className="absolute top-3 right-3">
                  <span className="text-xs font-semibold bg-[#d4af37] text-black px-2 py-1 rounded-full">
                    Central
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
        >
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-[#d4af37] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 font-body">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6"
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
              className="bg-[#141414] border border-white/5 rounded-2xl p-6 hover:border-[#d4af37]/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center mb-4 group-hover:bg-[#d4af37]/20 transition-colors">
                <item.icon className="w-7 h-7 text-[#d4af37]" />
              </div>
              <h4 className="font-display text-lg font-semibold text-white mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-gray-500 font-body">
                {item.description}
              </p>
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
