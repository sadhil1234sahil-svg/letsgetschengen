import { useState } from 'react';
import {
  MessageSquareText,
  FolderKanban,
  CalendarClock,
  MapPinned,
  ShieldPlus,
  ClipboardCheck,
  Check,
  ArrowRight,
  MessageCircle,
  PhoneCall,
  Sparkles,
  Zap,
} from 'lucide-react';
import { SERVICES_ITEMS, buildWhatsAppUrl, SITE_CONFIG } from '../data/siteContent';

const SERVICE_ICONS = {
  MessageSquareText,
  FolderKanban,
  CalendarClock,
  MapPinned,
  ShieldPlus,
  ClipboardCheck,
};

const CATEGORIES = [
  { id: 'all', label: 'All Services (6)' },
  { id: 'planning', label: 'Dossier Planning', services: ['documentation-consultation', 'document-preparation'] },
  { id: 'logistics', label: 'Appointments & Routes', services: ['appointment-coordination', 'itinerary-accommodation'] },
  { id: 'verification', label: 'Insurance & Audits', services: ['travel-insurance', 'application-review'] },
];

export default function ServicesSection({ onSelectService }) {
  const [activeTab, setActiveTab] = useState('all');

  const filteredServices = activeTab === 'all'
    ? SERVICES_ITEMS
    : SERVICES_ITEMS.filter((item) => {
        const cat = CATEGORIES.find((c) => c.id === activeTab);
        return cat?.services.includes(item.id);
      });

  const handleServiceClick = (serviceTitle) => {
    if (onSelectService) {
      onSelectService(serviceTitle);
    }
    const target = document.getElementById('lead-form');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="section section-services">
      <div className="container">
        {/* Section Header with Left-Aligned Editorial Style */}
        <div className="section-head-split">
          <div>
            <div className="badge-tag">
              <Sparkles size={14} aria-hidden="true" />
              <span>Full-Scope Schengen Consultancy</span>
            </div>
            <h2 className="section-title">
              Precision Services Designed Around Your Travel Dossier
            </h2>
          </div>
          <p className="section-lead-text">
            Whether you are planning your first European trip, coordinating a multi-country family
            tour, or managing an expedited business visa timeline, we provide end-to-end guidance
            without ambiguous embassy jargon.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="services-filter-nav" role="tablist" aria-label="Filter consultancy services">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeTab === cat.id}
              className={`services-filter-btn${activeTab === cat.id ? ' services-filter-btn--active' : ''}`}
              onClick={() => setActiveTab(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Dynamic Services Cards */}
        <div className="services-grid-modern">
          {filteredServices.map((service, index) => {
            const Icon = SERVICE_ICONS[service.iconName] || ClipboardCheck;
            return (
              <article key={service.id} className="service-card-modern">
                <div className="service-card-modern__header">
                  <div className="service-card-modern__icon-wrap">
                    <Icon size={24} className="service-card-modern__icon" />
                  </div>
                  <span className="service-card-modern__num">0{index + 1}</span>
                </div>

                <h3 className="service-card-modern__title">{service.title}</h3>
                <p className="service-card-modern__desc">{service.description}</p>

                <div className="service-card-modern__checklist">
                  <span className="service-card-modern__checklist-title">Included Scope:</span>
                  <ul>
                    {service.highlights.map((point) => (
                      <li key={point}>
                        <Check size={15} className="service-check-icon" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="service-card-modern__footer">
                  <button
                    type="button"
                    className="service-card-modern__action-btn"
                    onClick={() => handleServiceClick(service.title)}
                  >
                    <span>{service.ctaLabel}</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        {/* Executive Concierge Lounge / Urgent Travel Banner */}
        <div className="concierge-strip">
          <div className="concierge-strip__info">
            <div className="concierge-strip__status">
              <span className="live-status-dot" aria-hidden="true" />
              <span>Dedicated Consultation Desk Online</span>
            </div>
            <h3 className="concierge-strip__title">
              Travelling Within 14 to 30 Days? Request Immediate Priority Guidance
            </h3>
            <p className="concierge-strip__text">
              If your scheduled departure is approaching rapidly, our senior Schengen advisors can
              prioritise appointment window tracking and pre-audit your document stack within 24 hours.
            </p>
          </div>

          <div className="concierge-strip__actions">
            <a
              href={buildWhatsAppUrl(
                'Hello LetsGetSchengen, I have an urgent European trip coming up and need express consultation.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--on-dark-primary"
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>Priority WhatsApp</span>
            </a>

            <a
              href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`}
              className="btn btn--glass"
            >
              <PhoneCall size={17} aria-hidden="true" />
              <span>Direct Phone</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

