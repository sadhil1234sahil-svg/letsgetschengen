import { useEffect } from 'react';
import { X } from 'lucide-react';
import { SITE_CONFIG } from '../data/siteContent';

export default function LegalModal({ type, onClose }) {
  useEffect(() => {
    if (!type) return undefined;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [type, onClose]);

  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div
      className="modal-backdrop"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card">
        <div className="modal-card__header">
          <h2 id="legal-modal-title" style={{ margin: 0, fontSize: '1.35rem' }}>
            {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
          </h2>
          <button
            type="button"
            className="modal-card__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {isPrivacy ? (
          <div style={{ color: '#4B5267', fontSize: '0.95rem', lineHeight: 1.65 }}>
            <p>
              {SITE_CONFIG.brandName} respects your privacy and handles all personal contact and
              travel enquiry information strictly for the purpose of delivering requested European
              travel documentation consultancy services.
            </p>
            <p>
              Information submitted via our enquiry form—such as your name, email address, phone
              number, residence country, and planned travel dates—is never sold or shared with
              unrelated third-party marketers.
            </p>
            <p style={{ marginBottom: 0 }}>
              To request updates or deletion of your enquiry records, please contact{' '}
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                style={{ color: '#015D47', fontWeight: 700 }}
              >
                {SITE_CONFIG.email}
              </a>
              .
            </p>
          </div>
        ) : (
          <div style={{ color: '#4B5267', fontSize: '0.95rem', lineHeight: 1.65 }}>
            <p>
              {SITE_CONFIG.brandName} operates as an independent Schengen travel consultancy
              providing document preparation support, itinerary planning, and appointment
              coordination guidance.
            </p>
            <p>
              All final travel clearance decisions remain solely at the discretion of the relevant
              consular authorities and official submission centres. Our consultancy focuses on
              helping travellers present complete, well-organised, and consistent documentation.
            </p>
            <p style={{ marginBottom: 0 }}>
              Service scope, timelines, and consultancy fees are confirmed transparently prior to
              commencing any engagement.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

