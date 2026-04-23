import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LuxuryNavbar from "@/components/LuxuryNavbar";
import { Shield, FileText, Users, Lock, Eye, Mail, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Altecho Driving School",
  description: "Privacy Policy - Learn how Altecho Driving School collects, uses, and protects your personal information.",
};

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: "Altecho Driving School collects personal information that you provide directly to us, including:",
    items: [
      "Name and contact information (email, phone number)",
      "Driving license information",
      "Learning history and progress data",
      "Payment information",
    ],
  },
  {
    icon: FileText,
    title: "How We Use Your Information",
    content: "We use your information to:",
    items: [
      "Provide driving instruction services",
      "Schedule and manage lessons",
      "Communicate with you about your training",
      "Process payments",
      "Improve our services",
    ],
  },
  {
    icon: Users,
    title: "Information Sharing",
    content: "We do not sell your personal information. We may share information with:",
    items: [
      "FRSC (Federal Road Safety Corps) as required for license processing",
      "Service providers who assist our operations",
      "Legal authorities when required by law",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.",
  },
  {
    icon: Eye,
    title: "Your Rights",
    content: "You have the right to access, correct, or delete your personal information. Contact us at info@altecho.com to exercise these rights.",
  },
];

export default function PrivacyPage() {
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
              Privacy <span className="text-[#d4af37]">Policy</span>
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
                      <p className="text-gray-400 font-body text-sm leading-relaxed mb-3">
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
              <span className="font-display text-lg text-white">Contact Us</span>
            </div>
            <p className="text-gray-400 font-body">
              If you have questions about this Privacy Policy, contact us at{' '}
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