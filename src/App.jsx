import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsStrip from './components/StatsStrip';
import WhyChooseSection from './components/WhyChooseSection';
import ServicesSection from './components/ServicesSection';
import ProcessTimelineSection from './components/ProcessTimelineSection';
import LeadFormSection from './components/LeadFormSection';
import TestimonialsSection from './components/TestimonialsSection';
import SupportProtocolSection from './components/SupportProtocolSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import LegalModal from './components/LegalModal';
import FloatingContactButtons from './components/FloatingContactButtons';

export default function App() {
  const [selectedService, setSelectedService] = useState('');
  const [legalModal, setLegalModal] = useState(null);

  return (
    <>
      <Header />
      <main>
        {/* Section 1: Hero Gateway & Destination Radar */}
        <HeroSection onSelectService={setSelectedService} />

        {/* Section 2: Comprehensive Consultancy Services (Moved up for immediate value) */}
        <ServicesSection onSelectService={setSelectedService} />

        {/* Section 3: Trust Metrics & European Coverage Bar */}
        <StatsStrip />

        {/* Section 4: 5-Stage European Travel Clearance Roadmap */}
        <ProcessTimelineSection />

        {/* Section 5: Why Choose LetsGetSchengen (Bento Grid) */}
        <WhyChooseSection />

        {/* Section 6: Fast-Track Consultation Studio (Lead Form) */}
        <LeadFormSection selectedService={selectedService} />

        {/* Section 7: Verified Traveller Stories & Passport Reviews */}
        <TestimonialsSection />

        {/* Section 8: VIP Support Protocol & Executive SLA */}
        <SupportProtocolSection />

        {/* Section 9: Interactive Knowledge Base & FAQs */}
        <FaqSection />
      </main>

      {/* Section 10: Footer */}
      <Footer onOpenLegal={setLegalModal} />

      {/* Floating 24/7 Call and WhatsApp Shortcuts */}
      <FloatingContactButtons />

      <LegalModal type={legalModal} onClose={() => setLegalModal(null)} />
    </>
  );
}

