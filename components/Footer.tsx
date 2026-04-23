"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { MapPin, Mail, Clock, Send, Shield, Award, Users, Sparkles, MessageCircle } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/pricing", label: "Pricing" },
  { href: "/areas", label: "Areas Served" },
  { href: "/contact", label: "Contact" },
];

const services = [
  "Beginner Lessons",
  "Refresher Courses", 
  "Defensive Driving",
  "License Acquisition",
  "Mock Tests",
  "Instructor Training",
];

const features = [
  { icon: Shield, label: "FRSC Certified" },
  { icon: Award, label: "Award Winning" },
  { icon: Users, label: "500+ Graduates" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic here
  };

  return (
    <footer className="bg-[#050505] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: 'absolute', top: 0, left: '25%', width: '384px', height: '384px', borderRadius: '50%', background: 'rgba(212,175,55,0.03)', filter: 'blur(100px)' }} />
        <div style={{ position: 'absolute', bottom: 0, right: '25%', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(212,175,55,0.02)', filter: 'blur(80px)' }} />
      </div>

      {/* Main Footer Content */}
      <div className="container-main relative" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        {/* Top Section - Brand & Features */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Brand Column */}
          <div>
            <Link href="/" className="flex items-center gap-4 mb-6 group">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#d4af37]">
                <Image
                  src="/images/logo.jpg"
                  alt="Altecho Driving School"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl text-white tracking-wide">ALTECHO</span>
                <span className="text-sm text-[#d4af37] tracking-widest uppercase">Driving School</span>
              </div>
            </Link>
            
            <p className="text-gray-400 mb-8 font-body leading-relaxed max-w-md">
              Transforming novices into confident, skilled drivers since 2014. Our mission is to provide 
              world-class driving education that exceeds expectations and creates safer roads for everyone.
            </p>

            {/* Features Badges */}
            <div className="flex flex-wrap gap-4 mb-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#d4af37]/5 border border-[#d4af37]/20"
                >
                  <feature.icon className="w-4 h-4 text-[#d4af37]" />
                  <span className="text-sm text-gray-300 font-body">{feature.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { icon: Award, label: "Facebook" },
                { icon: Users, label: "Instagram" },
                { icon: Shield, label: "X" },
              ].map((social) => (
                <a
                  key={social.label}
                  href="#"
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:border-[#d4af37] hover:bg-[#d4af37]/10 transition-all group"
                >
                  <social.icon className="w-5 h-5 text-gray-500 group-hover:text-[#d4af37] transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Column */}
          <div>
            <div className="card-luxury p-8 h-full">
              <h3 className="font-display text-xl text-white mb-4">Stay Updated</h3>
              <p className="text-gray-400 mb-6 font-body">
                Subscribe to our newsletter for driving tips, special offers, and updates.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-gray-500 font-body focus:border-[#d4af37] focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-[#d4af37] text-black font-body font-semibold flex items-center gap-2 hover:bg-[#f5c542] transition-colors"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              <p className="text-xs text-gray-600 mt-3 font-body">
                We respect your privacy. No spam, ever.
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Line */}
        <div className="h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent mb-16" />

        {/* Links Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#d4af37]" />
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-[#d4af37] transition-colors font-body inline-flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-[#d4af37] transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#d4af37]" />
              Our Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-sm text-gray-500 font-body inline-flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-gray-700" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-semibold text-white mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-[#d4af37]" />
              Get In Touch
            </h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h5 className="font-display text-white mb-1">Visit Us</h5>
                  <p className="text-sm text-gray-500 font-body">Ipaja, Lagos, Nigeria</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h5 className="font-display text-white mb-1">AI Driving Tutor</h5>
                  <button 
                    onClick={() => {
                      const event = new CustomEvent("open-ai-chat");
                      window.dispatchEvent(event);
                    }}
                    className="text-sm text-gray-500 hover:text-[#d4af37] transition-colors font-body cursor-pointer text-left"
                  >
                    24/7 AI Assistance
                  </button>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h5 className="font-display text-white mb-1">Email Us</h5>
                  <a href="mailto:info@altecho.com" className="text-sm text-gray-500 hover:text-[#d4af37] transition-colors font-body">
                    info@altecho.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5">
                <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h5 className="font-display text-white mb-1">Hours</h5>
                  <p className="text-sm text-gray-500 font-body">Mon - Sat: 8AM - 6PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 relative">
        <div className="container-main py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-sm text-gray-600 font-body">
                &copy; {new Date().getFullYear()} Altecho Driving School. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-sm text-gray-600 hover:text-[#d4af37] transition-colors font-body">Privacy Policy</a>
                <a href="#" className="text-sm text-gray-600 hover:text-[#d4af37] transition-colors font-body">Terms of Service</a>
                <a href="#" className="text-sm text-gray-600 hover:text-[#d4af37] transition-colors font-body">Cookie Policy</a>
              </div>
            </div>
            <a 
              href="https://sliiqque.space" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 hover:text-[#d4af37] transition-colors font-body flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              Designed by <span className="text-[#d4af37] font-semibold">SLIIQQUE</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}