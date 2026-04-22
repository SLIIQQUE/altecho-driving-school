'use client';

import { Sparkles, Mic, BookOpen, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function AIHomepageCTA() {
  const features = [
    { icon: Mic, title: 'Voice Enabled', desc: 'Speak naturally to get instant answers' },
    { icon: Clock, title: '24/7 Available', desc: 'Learn anytime, anywhere' },
    { icon: BookOpen, title: 'Test Prep', desc: 'Practice theory questions' },
  ];

  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af37]/5 to-transparent" />
      
      <div className="container-main relative z-10">
        <div className="text-center mb-16">
          <span className="badge-consistent inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4" />
            AI-Powered Learning
          </span>
          <h2 className="section-header__title">
            Meet Your <span className="text-[#d4af37]">AI Driving Tutor</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-body">
            Get instant answers about driving courses, practice theory tests, 
            and prepare for your exam with our intelligent AI assistant.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, i) => (
            <div key={i} className="card-consistent p-6 text-center group hover:border-[#d4af37]/50 transition-colors">
              <div className="w-14 h-14 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#d4af37]/20 transition-colors">
                <feature.icon className="w-6 h-6 text-[#d4af37]" />
              </div>
              <h3 className="font-display text-lg text-white mb-2">{feature.title}</h3>
              <p className="text-gray-500 text-sm font-body">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link href="/contact" className="btn-primary inline-flex items-center gap-2">
            Try AI Tutor Now
            <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="text-gray-500 text-sm mt-4 font-body">
            Free to use • No account required • Instant answers
          </p>
        </div>
      </div>
    </section>
  );
}
