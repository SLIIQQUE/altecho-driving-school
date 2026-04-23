import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LuxuryNavbar from "@/components/LuxuryNavbar";

export const metadata: Metadata = {
  title: "Privacy Policy | Altecho Driving School",
  description: "Privacy Policy - Learn how Altecho Driving School collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <LuxuryNavbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-8">Privacy Policy</h1>
            
            <div className="prose prose-invert prose-lg">
              <p className="text-gray-400 mb-6">Last updated: April 2026</p>

              <h2 className="text-white font-display text-2xl mt-8 mb-4">Information We Collect</h2>
              <p className="text-gray-400 mb-4">
                Altecho Driving School collects personal information that you provide directly to us, including:
              </p>
              <ul className="text-gray-400 list-disc pl-6 mb-6 space-y-2">
                <li>Name and contact information (email, phone number)</li>
                <li>Driving license information</li>
                <li>Learning history and progress data</li>
                <li>Payment information</li>
              </ul>

              <h2 className="text-white font-display text-2xl mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-gray-400 mb-4">
                We use your information to:
              </p>
              <ul className="text-gray-400 list-disc pl-6 mb-6 space-y-2">
                <li>Provide driving instruction services</li>
                <li>Schedule and manage lessons</li>
                <li>Communicate with you about your training</li>
                <li>Process payments</li>
                <li>Improve our services</li>
              </ul>

              <h2 className="text-white font-display text-2xl mt-8 mb-4">Information Sharing</h2>
              <p className="text-gray-400 mb-4">
                We do not sell your personal information. We may share information with:
              </p>
              <ul className="text-gray-400 list-disc pl-6 mb-6 space-y-2">
                <li>FRSC (Federal Road Safety Corps) as required for license processing</li>
                <li>Service providers who assist our operations</li>
                <li>Legal authorities when required by law</li>
              </ul>

              <h2 className="text-white font-display text-2xl mt-8 mb-4">Data Security</h2>
              <p className="text-gray-400 mb-4">
                We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>

              <h2 className="text-white font-display text-2xl mt-8 mb-4">Your Rights</h2>
              <p className="text-gray-400 mb-4">
                You have the right to access, correct, or delete your personal information. Contact us at info@altecho.com to exercise these rights.
              </p>

              <h2 className="text-white font-display text-2xl mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-400 mb-4">
                If you have questions about this Privacy Policy, contact us at: <a href="mailto:info@altecho.com" className="text-[#d4af37] hover:underline">info@altecho.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}