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
  'Passport Validity & Schengen 90/180-Day Duration Checked',
  'Tailored Cover Letter & Purpose Narrative Drafted',
  'Flight Reservation & Hotel Voucher Date Cross-Checking',
  '€30,000+ EU Compliant Travel Insurance Verification',
  'Employment NOC, Bank Proofs & UAE Residency Verification',
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
            Structured For Accuracy. Dedicated to Stress-Free Preparation.
          </h2>
          <p className="section-subtitle">
            We don’t rely on generic templates or make unrealistic promises. Every client receives attentive,
            meticulous documentation guidance backed by knowledgeable travel consultants.
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
              Tailored Document Checklists That Minimise Avoidable Application Errors
            </h3>
            <p className="bento-card__desc">
              Consulates scrutinise inconsistencies — from mismatched hotel check-in dates to unclear employment
              sponsorship letters. Our review process cross-references every supporting record before you submit.
            </p>

            <div className="bento-checklist">
              <span className="bento-checklist__header">Key Document Elements We Audit:</span>
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
              <span>Responsive Support</span>
            </div>
            <h3 className="bento-card__title">Direct Advisor Accessibility</h3>
            <p className="bento-card__desc">
              When appointment slots open unpredictably or travel dates draw near, you can connect directly with your assigned consultant.
            </p>
            <div className="bento-metric-box">
              <span className="bento-metric-val">24 / 7</span>
              <span className="bento-metric-label">Direct WhatsApp &amp; Phone Line (+971 50 553 6123)</span>
            </div>
          </div>

          {/* Bento Cell 3: Complete Coverage */}
          <div className="bento-card bento-card--medium">
            <div className="bento-card__badge bento-card__badge--blue">
              <Globe size={16} />
              <span>Pan-European Scope</span>
            </div>
            <h3 className="bento-card__title">All 29 Schengen States Supported</h3>
            <p className="bento-card__desc">
              From multi-city tourist itineraries to business and conference visits, we understand the specific
              documentation guidelines of each Schengen member.
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
              <span>Strict Confidentiality</span>
            </div>
            <h3 className="bento-card__title">Data Privacy &amp; Security</h3>
            <p className="bento-card__desc">
              Your financial statements, passports, and personal travel records are handled strictly
              under secure data protection protocols and never shared.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

