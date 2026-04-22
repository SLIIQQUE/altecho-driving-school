"use client";

import { Sparkles, Mic, BookOpen, Clock, ArrowRight } from "lucide-react";

export default function AIHomepageCTA() {
  const features = [
    {
      icon: Mic,
      title: "Voice Enabled",
      desc: "Speak naturally to get instant answers",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      desc: "Learn anytime, anywhere",
    },
    {
      icon: BookOpen,
      title: "Test Prep",
      desc: "Practice theory questions",
    },
  ];

  return (
    <section className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d4af37]/5 to-transparent" />

      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/30 to-transparent" />

      <div className="absolute top-1/2 left-20 w-64 h-64 bg-[#d4af37]/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-20 w-80 h-80 bg-[#d4af37]/3 rounded-full blur-3xl" />

      <div className="container-main relative z-10">
        <div className="text-center mb-16">
          <span className="badge-consistent inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4" />
            AI-Powered Learning
          </span>
          <h2 className="section-header__title">
            Meet Your <span className="text-[#d4af37]">AI Driving Tutor</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-body text-lg">
            Get instant answers about driving courses, practice theory tests, and prepare
            for your exam with our intelligent AI assistant.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, i) => (
            <div
              key={i}
              className="card-consistent p-8 text-center group hover:border-[#d4af37]/50 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-[#d4af37]/20 group-hover:scale-110 transition-all duration-300">
                <feature.icon className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h3 className="font-display text-xl text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-500 font-body">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => {
              const event = new CustomEvent("open-ai-chat");
              window.dispatchEvent(event);
            }}
            className="btn-primary inline-flex items-center gap-3 group"
          >
            <Sparkles className="w-5 h-5" />
            Try AI Tutor Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-gray-500 text-sm mt-4 font-body">
            Free to use • No account required • Instant answers
          </p>
        </div>
      </div>
    </section>
  );
}