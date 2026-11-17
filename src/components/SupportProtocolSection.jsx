import {
  Users,
  MessageCircle,
  BellRing,
  CheckCircle2,
  ArrowRight,
  Headphones,
  Sparkles,
  PhoneCall,
} from 'lucide-react';
import { buildWhatsAppUrl, SITE_CONFIG } from '../data/siteContent';

const PROTOCOL_CARDS = [
  {
    icon: Headphones,
    sla: 'Direct Advisor Access',
    title: 'Dedicated Travel Specialist',
    description: 'You work directly with a designated travel documentation specialist who understands your route and assists you step by step.',
    metric: '1-on-1 Direct Support Line',
  },
  {
    icon: CheckCircle2,
    sla: 'Thorough Pre-Check',
    title: 'Pre-Submission File Audit',
    description: 'Every statement, invitation letter, flight reservation, and travel policy is reviewed against specific destination criteria.',
    metric: 'Detailed Checklist Verification',
  },
  {
    icon: BellRing,
    sla: 'Proactive Milestone Alerts',
    title: 'Timeline & Deadline Tracking',
    description: 'We track your document validity windows, ensuring bank proofs, NOCs, and insurance policies remain strictly valid for submission.',
    metric: 'Structured Scheduling Guidance',
  },
  {
    icon: Users,
    sla: 'Transparent Guidance',
    title: 'Clear, Jargon-Free Communication',
    description: 'We translate complex consulate guidelines into simple, sequential action steps tailored to your personal itinerary.',
    metric: 'Plain-English Checklists',
  },
];

export default function SupportProtocolSection() {
  return (
    <section id="support-protocol" className="section section-protocol-modern">
      <div className="container">
        <div className="section-header section-header--center">
          <div className="badge-tag">
            <Sparkles size={14} aria-hidden="true" />
            <span>Our Service Commitments</span>
          </div>
          <h2 className="section-title">Professional Standards &amp; Client Care Commitments</h2>
          <p className="section-subtitle">
            We believe in honest, transparent, and structured advisory. Every traveller receives
            thorough guidance focused on accuracy, clarity, and peace of mind.
          </p>
        </div>

        {/* Modern Protocol SLA Grid */}
        <div className="protocol-sla-grid">
          {PROTOCOL_CARDS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="protocol-sla-card">
                <div className="protocol-sla-card__head">
                  <div className="protocol-sla-card__icon-box" aria-hidden="true">
                    <Icon size={24} />
                  </div>
                  <span className="protocol-sla-card__badge">{item.sla}</span>
                </div>

                <h3 className="protocol-sla-card__title">{item.title}</h3>
                <p className="protocol-sla-card__desc">{item.description}</p>

                <div className="protocol-sla-card__metric">
                  <span className="protocol-sla-dot" aria-hidden="true" />
                  <span>{item.metric}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Emergency Travel Concierge Bar */}
        <div className="emergency-desk-strip">
          <div className="emergency-desk-strip__info">
            <div className="emergency-desk-badge">
              <PhoneCall size={16} aria-hidden="true" />
              <span>Need Immediate Travel Advisory?</span>
            </div>
            <h3 className="emergency-desk-title">
              Have Upcoming Travel Dates or Documentation Questions?
            </h3>
            <p className="emergency-desk-text">
              Connect directly with our European documentation advisors right now. Call{' '}
              <strong>{SITE_CONFIG.phone}</strong> or message us on WhatsApp for 24/7 assistance.
            </p>
          </div>

          <div className="emergency-desk-actions">
            <a
              href={buildWhatsAppUrl(
                'Hello LetsGetSchengen, I have questions regarding my upcoming European travel documentation.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--on-dark-primary"
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>

            <a href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`} className="btn btn--glass">
              <PhoneCall size={16} aria-hidden="true" />
              <span>Call 24/7 Advisor</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

