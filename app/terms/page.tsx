import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LuxuryNavbar from "@/components/LuxuryNavbar";
import { Shield, FileText, Users, Clock, CreditCard, AlertTriangle, Copyright, Scale, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms of Service | Altecho Driving School",
  description: "Terms of Service - Terms and conditions for using Altecho Driving School services.",
};

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content: "By accessing and using Altecho Driving School's website and services, you accept and agree to be bound by the terms and provisions of this agreement.",
  },
  {
    icon: Shield,
    title: "Services Provided",
    content: "Altecho Driving School provides professional driving instruction services including beginner driving lessons, defensive driving courses, refresher courses, license preparation and mock tests, and FRSC certification processing.",
  },
  {
    icon: Clock,
    title: "Booking and Scheduling",
    content: "Lessons must be booked in advance. Cancellations must be made at least 24 hours before the scheduled lesson. Late cancellations may incur a fee.",
  },
  {
    icon: CreditCard,
    title: "Payment Terms",
    content: "Payment is due before or at the time of service. We accept bank transfers and mobile money. Package prices are valid for the duration specified in your selected plan.",
  },
  {
    icon: Users,
    title: "Student Responsibilities",
    items: [
      "Provide valid identification",
      "Arrive on time for lessons",
      "Follow instructor guidance",
      "Practice safe driving habits",
      "Disclose medical conditions that may affect driving",
    ],
  },
  {
    icon: AlertTriangle,
    title: "Liability",
    content: "While we take all reasonable safety precautions, Altecho Driving School is not liable for injuries or damages resulting from student actions during or after training. Students are responsible for their own vehicle insurance during practice sessions.",
  },
  {
    icon: Copyright,
    title: "Intellectual Property",
    content: "All content on this website, including text, graphics, logos, and images, is the property of Altecho Driving School and may not be reproduced without permission.",
  },
  {
    icon: Scale,
    title: "Limitation of Liability",
    content: "Altecho Driving School's liability is limited to the amount paid for services not received. We are not liable for indirect, incidental, or consequential damages.",
  },
];

export default function TermsPage() {
  return (
    <>
      <LuxuryNavbar />
      <main className="min-h-screen pt-24 pb-16 relative">
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#d4af37]/5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-[#d4af37]/3 blur-3xl" />
        </div>

        <div className="container-main relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="badge-consistent inline-block mb-4">Legal</span>
            <h1 className="font-display text-4xl md:text-5xl text-white mb-4">
              Terms of <span className="text-[#d4af37]">Service</span>
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Last updated: April 2026
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-6">
            {sections.map((section, index) => (
              <div
                key={index}
                className="card-luxury p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-5 h-5 text-[#d4af37]" />
                  </div>
                  <div>
                    <h2 className="font-display text-xl text-white mb-3">{section.title}</h2>
                    {section.content && (
                      <p className="text-gray-400 font-body text-sm leading-relaxed">
                        {section.content}
                      </p>
                    )}
                    {section.items && (
                      <ul className="text-gray-400 font-body text-sm space-y-2">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#d4af37] mt-2 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact */}
          <div className="card-luxury p-8 mt-12 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Mail className="w-5 h-5 text-[#d4af37]" />
              <span className="font-display text-lg text-white">Contact Information</span>
            </div>
            <p className="text-gray-400 font-body">
              For questions about these Terms of Service, contact us at{' '}
              <a href="mailto:info@altecho.com" className="text-[#d4af37] hover:underline">
                info@altecho.com
              </a>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}