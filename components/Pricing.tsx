"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Check, ArrowRight, Zap } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "₦50,000",
    description: "Foundation program for beginners",
    features: [
      "8 driving sessions",
      "2 hours per session",
      "FRSC theory prep",
      "1 mock road test",
      "Weekday scheduling",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Standard",
    price: "₦85,000",
    description: "Most popular choice",
    features: [
      "15 driving sessions",
      "2 hours per session",
      "Full FRSC prep",
      "3 mock road tests",
      "Weekend available",
      "Defensive basics",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Premium",
    price: "₦120,000",
    description: "Comprehensive training",
    features: [
      "25 driving sessions",
      "2 hours per session",
      "Complete FRSC exam prep",
      "Unlimited mock tests",
      "Flexible scheduling",
      "Advanced defensive",
      "Pickup & drop-off",
      "1-on-1 instructor",
    ],
    cta: "Get Started",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section className="section-padding bg-[#050508] relative">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-20" />
      
      <div className="container-neon relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="badge-neon mb-4">// Pricing</span>
          <h2 className="text-display-lg text-white mt-4">
            Training Packages
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Transparent pricing. All packages include FRSC certified instructors 
            and quality training materials.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`card-glow relative flex flex-col ${
                pkg.popular ? "border-primary/50" : ""
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="badge-neon flex items-center gap-1">
                    <Zap className="w-3 h-3" />
                    Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="font-display font-bold text-xl text-white tracking-wider">
                  {pkg.name}
                </h3>
                <p className="text-xs text-gray-500 font-mono mt-1">
                  {pkg.description}
                </p>
              </div>
              
              <div className="mb-6">
                <span className="text-display-md text-white">
                  {pkg.price}
                </span>
              </div>
              
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-gray-400">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="font-mono">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                href="/contact" 
                className={`w-full ${pkg.popular ? "btn-neon btn-neon-fill" : "btn-neon"} justify-center`}
              >
                {pkg.cta}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}