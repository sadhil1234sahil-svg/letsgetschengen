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
    timeframe: 'Stage 1 • Initial Review',
    deliverable: 'Trip Scope Assessment',
    highlight: 'Destination embassy rules, passport validity criteria, and tailored checklist formulation.',
  },
  {
    icon: FileSpreadsheet,
    timeframe: 'Stage 2 • Checklist Plan',
    deliverable: 'Itemised Requirements Checklist',
    highlight: 'Tailored requirements covering financial statements, employment NOCs, and accommodation proofs.',
  },
  {
    icon: CheckCheck,
    timeframe: 'Stage 3 • Document Audit',
    deliverable: 'Document Review & Alignment',
    highlight: 'Cross-checking flight & hotel dates, cover letter narrative, and mandatory travel insurance.',
  },
  {
    icon: CalendarDays,
    timeframe: 'Stage 4 • Appointment Prep',
    deliverable: 'Submission Centre Guidance',
    highlight: 'Step-by-step guidance for VFS Global, TLScontact, or BLS International appointments.',
  },
  {
    icon: PlaneTakeoff,
    timeframe: 'Stage 5 • Final Briefing',
    deliverable: 'Final Dossier Organisation',
    highlight: 'Sequential document ordering, appointment day checklist, and pre-departure preparation.',
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
          <h2 className="section-title">Step-by-Step European Travel Preparation Roadmap</h2>
          <p className="section-subtitle">
            We replace uncertainty and fragmented online advice with a clear, sequential roadmap
            designed to ensure your travel documents are complete, compliant, and properly organised.
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

