import {
  Compass,
  FileSpreadsheet,
  CheckCheck,
  CalendarDays,
  PlaneTakeoff,
  ArrowRight,
  Clock,
  Sparkles,
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/siteContent';

const STEP_DETAILS = [
  {
    icon: Compass,
    timeframe: 'Day 1 • 30 Min Discovery',
    deliverable: 'Trip Scope Assessment',
    highlight: 'Destination rules, passport validity, and bespoke strategy formulated.',
  },
  {
    icon: FileSpreadsheet,
    timeframe: 'Day 2 • Custom Blueprint',
    deliverable: 'Itemised Document Checklist',
    highlight: 'Tailored checklist covering financial, employment, and travel proofs.',
  },
  {
    icon: CheckCheck,
    timeframe: 'Day 3–5 • Rigorous Audit',
    deliverable: 'Dossier Audit & Verification',
    highlight: 'Zero discrepancies, aligned flight/hotel dates, and cover letter draft.',
  },
  {
    icon: CalendarDays,
    timeframe: 'Centre Window Tracking',
    deliverable: 'Jurisdiction & Slot Booking',
    highlight: 'Coordination across VFS/TLS/BLS centres for maximum timeliness.',
  },
  {
    icon: PlaneTakeoff,
    timeframe: 'Pre-Submission & Flight',
    deliverable: 'Submission Readiness Dossier',
    highlight: 'Sequential file ordering, mock interview questions, and departure peace of mind.',
  },
];

export default function ProcessTimelineSection() {
  return (
    <section id="how-it-works" className="section section-process">
      <div className="container">
        <div className="section-header section-header--center">
          <div className="badge-tag">
            <Sparkles size={14} aria-hidden="true" />
            <span>Structured 5-Stage Framework</span>
          </div>
          <h2 className="section-title">Your Journey to European Travel Clearance</h2>
          <p className="section-subtitle">
            We replace anxiety and conflicting online forums with a milestone-driven roadmap
            that guarantees thorough preparation from first enquiry to your European departure.
          </p>
        </div>

        {/* Modern Interactive Roadmap Cards */}
        <div className="roadmap-grid">
          {PROCESS_STEPS.map((item, index) => {
            const detail = STEP_DETAILS[index] || STEP_DETAILS[0];
            const StepIcon = detail.icon;

            return (
              <div key={item.step} className="roadmap-card">
                <div className="roadmap-card__top">
                  <div className="roadmap-card__badge">
                    <span>Stage {item.step}</span>
                  </div>
                  <div className="roadmap-card__time">
                    <Clock size={13} aria-hidden="true" />
                    <span>{detail.timeframe}</span>
                  </div>
                </div>

                <div className="roadmap-card__icon-box" aria-hidden="true">
                  <StepIcon size={24} />
                </div>

                <h3 className="roadmap-card__title">{item.title}</h3>
                <p className="roadmap-card__desc">{item.description}</p>

                <div className="roadmap-card__deliverable">
                  <span className="roadmap-card__deliverable-label">Key Deliverable:</span>
                  <p className="roadmap-card__deliverable-text">{detail.deliverable}</p>
                </div>

                <div className="roadmap-card__highlight">
                  <span>{detail.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Roadmap Action Bar */}
        <div className="roadmap-action-bar">
          <div className="roadmap-action-bar__text">
            <h4>Ready to Initiate Stage 01?</h4>
            <p>Our European documentation specialists are ready to review your travel timeline today.</p>
          </div>
          <a href="#lead-form" className="btn btn--on-dark-primary">
            <span>Start Stage 01 Consultation</span>
            <ArrowRight size={17} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}

