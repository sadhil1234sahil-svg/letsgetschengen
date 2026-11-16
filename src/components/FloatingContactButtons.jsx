import { Phone, MessageCircle } from 'lucide-react';
import { SITE_CONFIG, buildWhatsAppUrl } from '../data/siteContent';

export default function FloatingContactButtons() {
  return (
    <aside className="floating-actions" aria-label="Quick contact shortcuts">
      {/* WhatsApp Floating Button */}
      <a
        href={buildWhatsAppUrl('Hello LetsGetSchengen, I would like to consult with an advisor regarding my upcoming European travel.')}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-btn--whatsapp"
        aria-label={`Chat with us on WhatsApp at ${SITE_CONFIG.phoneDisplay}`}
        title="Chat on WhatsApp (24/7 Available)"
      >
        <span className="floating-btn__pulse" aria-hidden="true" />
        <MessageCircle size={22} className="floating-btn__icon" aria-hidden="true" />
        <span className="floating-btn__label">WhatsApp</span>
      </a>

      {/* Direct Call Floating Button */}
      <a
        href={`tel:${SITE_CONFIG.phoneRaw}`}
        className="floating-btn floating-btn--phone"
        aria-label={`Call us 24/7 at ${SITE_CONFIG.phoneDisplay}`}
        title="Call 24/7 for Quick Response"
      >
        <Phone size={20} className="floating-btn__icon" aria-hidden="true" />
        <span className="floating-btn__label">Call 24/7</span>
      </a>
    </aside>
  );
}
