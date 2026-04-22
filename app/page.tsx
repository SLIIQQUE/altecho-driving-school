import LuxuryNavbar from "@/components/LuxuryNavbar";
import LuxuryHero from "@/components/LuxuryHero";
import LuxuryServices from "@/components/LuxuryServices";
import LuxuryTestimonials from "@/components/LuxuryTestimonials";
import LuxuryPricing from "@/components/LuxuryPricing";
import AIHomepageCTA from "@/components/AIHomepageCTA";
import Areas from "@/components/Areas";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LuxuryNavbar />
      <main>
        <LuxuryHero />
        <LuxuryServices />
        <LuxuryTestimonials />
        <LuxuryPricing />
        <AIHomepageCTA />
        <Areas />
        <CTA />
      </main>
      <Footer />
    </>
  );
}