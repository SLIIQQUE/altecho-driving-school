"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { 
  Car, 
  MapPin, 
  Shield, 
  Award, 
  CheckCircle,
  ArrowRight,
  Cpu,
  Crosshair,
  Target
} from "lucide-react";

const services = [
  {
    icon: Car,
    title: "Beginner Program",
    description: "Complete foundation course for first-time drivers. Master Basics to advanced techniques.",
    features: ["Vehicle Controls", "Road Signs", "Parking Skills", "Traffic Awareness"],
    popular: true,
  },
  {
    icon: Crosshair,
    title: "Refresher Course",
    description: "Get back behind the wheel with confidence. Perfect for those who've been away.",
    features: ["Road Confidence", "Traffic Awareness", "Advanced Maneuvers", "Mock Tests"],
    popular: false,
  },
  {
    icon: Target,
    title: "Defensive Driving",
    description: "Advanced hazard perception and emergency response techniques.",
    features: ["Hazard Perception", "Emergency Maneuvers", "Weather Conditions", "Night Driving"],
    popular: false,
  },
  {
    icon: Award,
    title: "License Acquisition",
    description: "End-to-end guidance through the entire licensing process.",
    features: ["Theory Prep", "Mock Tests", "Road Test Practice", "Documentation"],
    popular: false,
  },
];

export default function Services() {
  return (
    <section className="section-padding bg-[#050508] relative">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <div className="container-neon relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge-neon mb-4">// Services</span>
          <h2 className="text-display-lg text-white mt-4">
            Training Programs
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Advanced driver training programs designed to develop 
            skilled and confident drivers.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`card-glow group relative ${
                service.popular ? "card-glow-accent" : ""
              }`}
            >
              {service.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="badge-neon-secondary">Popular</span>
                </div>
              )}
              
              <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="font-display font-semibold text-lg text-white mb-3">
                {service.title}
              </h3>
              
              <p className="text-sm text-gray-400 mb-5">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="font-mono">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-neon btn-neon-secondary group">
            View All Programs
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}