import {
  Users,
  MessageCircle,
  BellRing,
  CheckCircle2,
  ArrowRight,
  ShieldAlert,
  Headphones,
  Clock,
  Sparkles,
} from 'lucide-react';
import { SUPPORT_PROTOCOL_ITEMS, buildWhatsAppUrl, SITE_CONFIG } from '../data/siteContent';

const PROTOCOL_CARDS = [
  {
    icon: Headphones,
    sla: '< 120 Min Callback SLA',
    title: 'Dedicated Senior Specialist',
    description: 'You work with a designated travel documentation advisor who personally manages your file from day one.',
    metric: '1-on-1 WhatsApp & Phone Line',
  },
  {
    icon: CheckCircle2,
    sla: '100% Dual-Review Standard',
    title: 'Pre-Submission File Audit',
    description: 'Every statement, invitation, and travel voucher is checked against specific consular checklists before submission.',
    metric: 'Zero Discrepancy Tolerance',
  },
  {
    icon: BellRing,
    sla: 'Proactive Milestone Alerts',
    title: 'Timeline & Deadline Tracking',
    description: 'We track your document validity windows, ensuring bank proofs and insurance policies remain strictly valid.',
    metric: 'No Expired Document Risks',
  },
  {
    icon: Users,
    sla: 'Transparent Guidance',
    title: 'Clear, Jargon-Free Communication',
    description: 'We demystify complex consulate guidelines into simple, sequential action steps tailored to your itinerary.',
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
            <span>Consultancy Service Level Agreement</span>
          </div>
          <h2 className="section-title">Our Strict Support Protocol &amp; Care Standards</h2>
          <p className="section-subtitle">
            Consultancy is only as good as the accountability behind it. We guarantee responsive,
            honest, and meticulous guidance across all four pillars of our travel standard.
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
              <ShieldAlert size={16} aria-hidden="true" />
              <span>Priority Travel Desk Active</span>
            </div>
            <h3 className="emergency-desk-title">
              Have Tight Travel Dates or Urgent Documentation Questions?
            </h3>
            <p className="emergency-desk-text">
              Directly connect with our European documentation coordinators right now. We review
              upcoming travel timelines immediately.
            </p>
          </div>

          <div className="emergency-desk-actions">
            <a
              href={buildWhatsAppUrl(
                'Hello LetsGetSchengen, I need urgent priority advice for my upcoming European journey.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--on-dark-primary"
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </a>

            <a href="#lead-form" className="btn btn--glass">
              <span>Book Priority Callback</span>
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

