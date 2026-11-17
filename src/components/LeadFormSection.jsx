import { useState } from 'react';
import {
  UserCheck,
  FileText,
  Zap,
  Route,
  Lock,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import {
  SCHENGEN_DESTINATIONS,
  UAE_RESIDENCY_CATEGORIES,
  TRAVEL_MONTH_OPTIONS,
} from '../data/siteContent';
import {
  INITIAL_ENQUIRY_STATE,
  submitEnquiry,
  validateEnquiryForm,
} from '../services/enquiryService';

export default function LeadFormSection() {
  const [values, setValues] = useState(INITIAL_ENQUIRY_STATE);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const nextErrors = { ...prev };
        delete nextErrors[name];
        return nextErrors;
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitError('');

    const validationErrors = validateEnquiryForm(values);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      const firstErrorField = Object.keys(validationErrors)[0];
      const el = document.getElementById(`lead-${firstErrorField}`);
      if (el) el.focus();
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await submitEnquiry(values);
      setSubmitResult(response);
    } catch {
      setSubmitError(
        'We could not process your enquiry right now. Please try again or reach us via WhatsApp.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setValues(INITIAL_ENQUIRY_STATE);
    setErrors({});
    setSubmitResult(null);
    setSubmitError('');
  };

  return (
    <section id="lead-form" className="section section-lead-modern">
      <div className="container lead-modern-container">
        {/* Left Information Column */}
        <div className="lead-modern-info">
          <div className="badge-tag">
            <Zap size={14} aria-hidden="true" />
            <span>Personalised Travel Consultation</span>
          </div>

          <h2 className="lead-modern-title">
            Take the Uncertainty Out of Your European Travel Preparation
          </h2>

          <p className="lead-modern-desc">
            Submit your upcoming trip details and an experienced Schengen documentation advisor will
            review your itinerary, verify centre jurisdiction rules, and provide a tailored document checklist.
          </p>

          <div className="lead-perks-list">
            <div className="lead-perk-item">
              <div className="lead-perk-icon">
                <FileText size={18} />
              </div>
              <div>
                <strong>Tailored Dossier Checklist</strong>
                <p>Specific to your nationality, destination embassy, and employment / residency status.</p>
              </div>
            </div>

            <div className="lead-perk-item">
              <div className="lead-perk-icon">
                <Route size={18} />
              </div>
              <div>
                <strong>Jurisdiction &amp; Timeline Alignment</strong>
                <p>Accurate submission centre guidance (VFS Global, TLScontact, or BLS International) based on your travel plan.</p>
              </div>
            </div>

            <div className="lead-perk-item">
              <div className="lead-perk-icon">
                <UserCheck size={18} />
              </div>
              <div>
                <strong>1-on-1 Specialist Advisor</strong>
                <p>Direct communication with your assigned advisor via WhatsApp or phone (+971 50 553 6123).</p>
              </div>
            </div>
          </div>

          {/* Trust Guarantee Box */}
          <div className="lead-guarantee-card">
            <ShieldCheck size={26} className="lead-guarantee-icon" aria-hidden="true" />
            <div>
              <strong>Strictly Confidential &amp; Obligation-Free</strong>
              <p>Your details are protected under standard privacy policies and used solely for your consultation.</p>
            </div>
          </div>
        </div>

        {/* Right Form Card */}
        <div className="lead-form-modern-card">
          {submitResult ? (
            <div className="form-success-card" role="status" aria-live="polite">
              <div className="form-success-card__icon" aria-hidden="true">
                <CheckCircle2 size={30} />
              </div>
              <h3 className="lead-form-card__title">Enquiry Received Successfully</h3>
              <span className="form-success-card__ref">
                Reference: {submitResult.referenceCode}
              </span>
              <p className="lead-form-card__subtitle" style={{ marginBottom: '24px' }}>
                Thank you, <strong>{values.fullName}</strong>. Our Schengen consultancy team is
                reviewing your travel plans for <strong>{values.destination}</strong> and will
                reach out via WhatsApp at <strong>{values.phone}</strong> shortly.
              </p>
              <button
                type="button"
                className="btn btn--on-dark-secondary"
                onClick={handleReset}
              >
                Submit Another Enquiry
              </button>
            </div>
          ) : (
            <>
              <h3 className="lead-form-card__title">Request Your Travel Consultation</h3>
              <p className="lead-form-card__subtitle">
                Complete the fields marked with <span className="form-required">*</span> so we can
                prepare relevant guidance for your journey.
              </p>

              <form onSubmit={handleSubmit} noValidate>
                <div className="form-grid">
                  {/* Row 1: Full Name | UAE Mobile / WhatsApp */}
                  <div className="form-field">
                    <label htmlFor="lead-fullName" className="form-label">
                      Full Name (As in Passport)<span className="form-required">*</span>
                    </label>
                    <input
                      id="lead-fullName"
                      name="fullName"
                      type="text"
                      autoComplete="name"
                      placeholder="e.g. Rahul Sharma / Sarah Smith"
                      className={`form-input${errors.fullName ? ' form-input--error' : ''}`}
                      value={values.fullName}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.fullName)}
                      aria-describedby={errors.fullName ? 'err-fullName' : undefined}
                      required
                    />
                    {errors.fullName && (
                      <span id="err-fullName" className="form-error">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div className="form-field">
                    <label htmlFor="lead-phone" className="form-label">
                      UAE Mobile / WhatsApp<span className="form-required">*</span>
                    </label>
                    <input
                      id="lead-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+971 5X XXX XXXX"
                      className={`form-input${errors.phone ? ' form-input--error' : ''}`}
                      value={values.phone}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.phone)}
                      aria-describedby={errors.phone ? 'err-phone' : undefined}
                      required
                    />
                    {errors.phone && (
                      <span id="err-phone" className="form-error">
                        {errors.phone}
                      </span>
                    )}
                  </div>

                  {/* Row 2: Email Address | Primary European Destination */}
                  <div className="form-field">
                    <label htmlFor="lead-email" className="form-label">
                      Email Address<span className="form-required">*</span>
                    </label>
                    <input
                      id="lead-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      placeholder="name@company.com"
                      className={`form-input${errors.email ? ' form-input--error' : ''}`}
                      value={values.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'err-email' : undefined}
                      required
                    />
                    {errors.email && (
                      <span id="err-email" className="form-error">
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className="form-field">
                    <label htmlFor="lead-destination" className="form-label">
                      Primary European Destination<span className="form-required">*</span>
                    </label>
                    <select
                      id="lead-destination"
                      name="destination"
                      className={`form-select${errors.destination ? ' form-input--error' : ''}`}
                      value={values.destination}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.destination)}
                      aria-describedby={errors.destination ? 'err-destination' : undefined}
                      required
                    >
                      <option value="">Select Destination Country</option>
                      {SCHENGEN_DESTINATIONS.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    {errors.destination && (
                      <span id="err-destination" className="form-error">
                        {errors.destination}
                      </span>
                    )}
                  </div>

                  {/* Row 3: Anticipated Travel Month | UAE Residency Category */}
                  <div className="form-field">
                    <label htmlFor="lead-travelMonth" className="form-label">
                      Anticipated Travel Month
                    </label>
                    <select
                      id="lead-travelMonth"
                      name="travelMonth"
                      className="form-select"
                      value={values.travelMonth}
                      onChange={handleChange}
                    >
                      {TRAVEL_MONTH_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field">
                    <label htmlFor="lead-residencyCategory" className="form-label">
                      UAE Residency Category
                    </label>
                    <select
                      id="lead-residencyCategory"
                      name="residencyCategory"
                      className="form-select"
                      value={values.residencyCategory}
                      onChange={handleChange}
                    >
                      {UAE_RESIDENCY_CATEGORIES.map((cat) => (
                        <option key={cat} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  </div>

                  {submitError && (
                    <div className="form-field form-field--full">
                      <span className="form-error" role="alert">
                        {submitError}
                      </span>
                    </div>
                  )}

                  <div className="form-field form-field--full" style={{ marginTop: '8px' }}>
                    <button
                      type="submit"
                      className="btn btn--on-dark-primary btn--full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Submitting Enquiry...' : 'Get My Personalised Consultation'}
                      {!isSubmitting && <ArrowRight size={18} aria-hidden="true" />}
                    </button>
                    <p className="form-privacy-note">
                      <Lock size={13} aria-hidden="true" />
                      Your details stay confidential and are used solely to assist with your enquiry.
                    </p>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

