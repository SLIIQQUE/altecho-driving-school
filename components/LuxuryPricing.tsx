"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { CheckCircle, ArrowRight, Sparkles, Car } from "lucide-react";

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

function PricingCard({
  name,
  description,
  price,
  duration,
  features,
  index,
  popular = false,
}: {
  name: string;
  description: string;
  price: string;
  duration: string;
  features: string[];
  index: number;
  popular?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="relative"
    >
      <div className={`card-luxury h-full ${popular ? 'card-luxury-gold' : ''}`}>
        {popular && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
            <span className="badge-luxury flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Most Popular
            </span>
          </div>
        )}

        <div className="p-8">
          {/* Plan Name */}
          <div className="mb-6">
            <h3 className="text-display-md text-white mb-2">{name}</h3>
            <p className="text-sm text-gray-500 font-body">{description}</p>
          </div>

          {/* Decorative Line */}
          <div className="decorative-line mb-6" />

          {/* Duration */}
          <div className="mb-8">
            <span className="text-3xl font-display font-bold text-[#d4af37]">
              {price}
            </span>
            <div className="text-sm text-gray-500 mt-2 font-body">
              {duration}
            </div>
          </div>

          {/* Features */}
          <ul className="space-y-4 mb-8">
            {features.map((feature, i) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-gray-300"
              >
                <CheckCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="font-body">{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/contact"
            className={`w-full btn-luxury justify-center whitespace-nowrap ${
              popular ? '' : 'btn-luxury-outline'
            }`}
          >
            <span className="flex items-center gap-2">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function LuxuryPricing() {
  return (
    <section className="section bg-[#141414] relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[#d4af37]/5 blur-3xl" />
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
            <span className="badge-consistent">Pricing</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="section-header__title"
          >
            Invest in Your
            <span className="section-header__title-accent"> Driving Future</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="section-header__description"
          >
            Choose the program that matches your goals. All plans include FRSC certification, 
            expert instructors, and a satisfaction guarantee.
          </motion.p>
        </motion.div>

        {/* Pricing Grid */}
        <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', maxWidth: '960px', margin: '0 auto' }}>
          {plans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              name={plan.name}
              description={plan.description}
              price={plan.price}
              duration={plan.duration}
              features={plan.features}
              index={index}
              popular={plan.popular}
            />
          ))}
        </div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
          style={{ marginTop: '48px' }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '16px', padding: '16px 32px', borderRadius: '9999px', background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.2)' }}>
            <Car className="w-5 h-5 text-[#d4af37]" />
            <span style={{ color: '#d4af37', fontFamily: '"DM Sans", sans-serif', fontSize: '0.9375rem' }}>
              All plans include a satisfaction guarantee
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}