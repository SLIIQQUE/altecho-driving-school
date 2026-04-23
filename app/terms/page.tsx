import type { Metadata } from "next";
import Footer from "@/components/Footer";
import LuxuryNavbar from "@/components/LuxuryNavbar";

export const metadata: Metadata = {
  title: "Terms of Service | Altecho Driving School",
  description: "Terms of Service - Terms and conditions for using Altecho Driving School services.",
};

export default function TermsPage() {
  return (
    <>
      <LuxuryNavbar />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-display text-4xl md:text-5xl text-white mb-8">Terms of Service</h1>
            
            <div className="prose prose-invert prose-lg">
              <p className="text-gray-400 mb-6">Last updated: April 2026</p>

              <h2 className="text-white font-display text-2xl mt-8 mb-4">Acceptance of Terms</h2>
              <p className="text-gray-400 mb-4">
                By accessing and using Altecho Driving School's website and services, you accept and agree to be bound by the terms and provisions of this agreement.
              </p>

              <h2 className="text-white font-display text-2xl mt-8 mb-4">Services Provided</h2>
              <p className="text-gray-400 mb-4">
                Altecho Driving School provides professional driving instruction services including:
              </p>
              <ul className="text-gray-400 list-disc pl-6 mb-6 space-y-2">
                <li>Beginner driving lessons</li>
                <li>Defensive driving courses</li>
                <li>Refresher courses</li>
                <li>License preparation and mock tests</li>
                <li>FRSC certification processing</li>
              </ul>

              <h2 className="text-white font-display text-2xl mt-8 mb-4">Booking and Scheduling</h2>
              <p className="text-gray-400 mb-4">
                Lessons must be booked in advance. Cancellations must be made at least 24 hours before the scheduled lesson. Late cancellations may incur a fee.
              </p>

              <h2 className="text-white font-display text-2xl mt-8 mb-4">Payment Terms</h2>
              <p className="text-gray-400 mb-4">
                Payment is due before or at the time of service. We accept bank transfers and mobile money. Package prices are valid for the duration specified in your selected plan.
              </p>

              <h2 className="text-white font-display text-2xl mt-8 mb-4">Student Responsibilities</h2>
              <p className="text-gray-400 mb-4">
                Students must:
              </p>
              <ul className="text-gray-400 list-disc pl-6 mb-6 space-y-2">
                <li>Provide valid identification</li>
                <li>Arrive on time for lessons</li>
                <li>Follow instructor guidance</li>
                <li>Practice safe driving habits</li>
                <li>Disclose medical conditions that may affect driving</li>
              </ul>

              <h2 className="text-white font-display text-2xl mt-8 mb-4">Liability</h2>
              <p className="text-gray-400 mb-4">
                While we take all reasonable safety precautions, Altecho Driving School is not liable for injuries or damages resulting from student actions during or after training. Students are responsible for their own vehicle insurance during practice sessions.
              </p>

              <h2 className="text-white font-display text-2xl mt-8 mb-4">Intellectual Property</h2>
              <p className="text-gray-400 mb-4">
                All content on this website, including text, graphics, logos, and images, is the property of Altecho Driving School and may not be reproduced without permission.
              </p>

              <h2 className="text-white font-display text-2xl mt-8 mb-4">Limitation of Liability</h2>
              <p className="text-gray-400 mb-4">
                Altecho Driving School's liability is limited to the amount paid for services not received. We are not liable for indirect, incidental, or consequential damages.
              </p>

              <h2 className="text-white font-display text-2xl mt-8 mb-4">Governing Law</h2>
              <p className="text-gray-400 mb-4">
                These terms are governed by the laws of the Federal Republic of Nigeria.
              </p>

              <h2 className="text-white font-display text-2xl mt-8 mb-4">Contact Information</h2>
              <p className="text-gray-400 mb-4">
                For questions about these Terms of Service, contact us at: <a href="mailto:info@altecho.com" className="text-[#d4af37] hover:underline">info@altecho.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}