import {
  Compass,
  FileCheck2,
  ShieldCheck,
  Headset,
  CalendarCheck2,
  Layers,
  CheckCircle,
  Sparkles,
  Zap,
  Globe,
  Lock,
} from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/siteContent';

const CHECKLIST_ITEMS = [
  'Passport Validity & Schengen 90/180 Rule Audited',
  'Tailored Cover Letter & Purpose Narrative Drafted',
  'Verified Flight Itinerary & Hotel Proof Alignment',
  '€30,000+ EU Medical Coverage Policy Verification',
  'Employment & Proof of Financial Sustenance Pack',
];

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="section section-bento">
      <div className="container">
        <div className="section-header section-header--center">
          <div className="badge-tag">
            <Sparkles size={14} aria-hidden="true" />
            <span>The LetsGetSchengen Advantage</span>
          </div>
          <h2 className="section-title">
            Engineered For Clarity. Dedicated to Your Peace of Mind.
          </h2>
          <p className="section-subtitle">
            We don’t rely on generic templates or robotic answers. Every client receives an attentive,
            meticulously verified dossier strategy backed by experienced European consultants.
          </p>
        </div>

        {/* Bespoke Asymmetrical Bento Grid */}
        <div className="bento-grid">
          {/* Bento Cell 1: Large Feature Card with Live Checklist Simulation */}
          <div className="bento-card bento-card--large">
            <div className="bento-card__badge">
              <FileCheck2 size={16} />
              <span>Dossier Inspection Protocol</span>
            </div>
            <h3 className="bento-card__title">
              Personalised Document Roadmaps That Leave Zero Room for Ambiguity
            </h3>
            <p className="bento-card__desc">
              Consulates scrutinise minor inconsistencies — from date mismatches to unclear sponsorship
              letters. Our audit process cross-references every single document before your submission.
            </p>

            <div className="bento-checklist">
              <span className="bento-checklist__header">Every Dossier Undergoes Our 5-Point Validation:</span>
              <ul className="bento-checklist__list">
                {CHECKLIST_ITEMS.map((item) => (
                  <li key={item} className="bento-checklist__item">
                    <CheckCircle size={17} className="bento-check-icon" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bento Cell 2: Speed & Responsiveness */}
          <div className="bento-card bento-card--medium">
            <div className="bento-card__badge bento-card__badge--orange">
              <Zap size={16} />
              <span>Rapid Turnaround</span>
            </div>
            <h3 className="bento-card__title">Under 2-Hour Response Time</h3>
            <p className="bento-card__desc">
              When appointment slots open unpredictably or travel dates draw near, waiting days for an email
              is not an option.
            </p>
            <div className="bento-metric-box">
              <span className="bento-metric-val">&lt; 120 min</span>
              <span className="bento-metric-label">Average Advisor Response Time via WhatsApp &amp; Email</span>
            </div>
          </div>

          {/* Bento Cell 3: Complete Coverage */}
          <div className="bento-card bento-card--medium">
            <div className="bento-card__badge bento-card__badge--blue">
              <Globe size={16} />
              <span>Pan-European Scope</span>
            </div>
            <h3 className="bento-card__title">All 29 Schengen States Mapped</h3>
            <p className="bento-card__desc">
              From multi-city rail itineraries to single-country conferences, we understand the distinct
              requirements of every member consulate.
            </p>
            <div className="bento-tags-row">
              <span className="bento-tag">France</span>
              <span className="bento-tag">Italy</span>
              <span className="bento-tag">Germany</span>
              <span className="bento-tag">Spain</span>
              <span className="bento-tag">Switzerland</span>
              <span className="bento-tag">+24 More</span>
            </div>
          </div>

          {/* Bento Cell 4: 1-on-1 Dedicated Support */}
          <div className="bento-card bento-card--split">
            <div className="bento-card__badge">
              <Headset size={16} />
              <span>Dedicated Advisor</span>
            </div>
            <h3 className="bento-card__title">Direct 1-on-1 Specialist Care</h3>
            <p className="bento-card__desc">
              You are assigned a dedicated consultant who knows your travel itinerary intimately,
              available directly via phone and WhatsApp.
            </p>
          </div>

          {/* Bento Cell 5: Confidentiality & Protection */}
          <div className="bento-card bento-card--split">
            <div className="bento-card__badge bento-card__badge--green">
              <Lock size={16} />
              <span>100% Confidential</span>
            </div>
            <h3 className="bento-card__title">Bank-Grade Privacy Standards</h3>
            <p className="bento-card__desc">
              Your financial statements, passports, and personal itinerary records are handled strictly
              under rigorous UK &amp; EU data protection standards.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

