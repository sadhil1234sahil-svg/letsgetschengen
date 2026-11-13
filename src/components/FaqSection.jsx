import { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle, PhoneCall, Sparkles } from 'lucide-react';
import { FAQ_ITEMS, buildWhatsAppUrl, SITE_CONFIG } from '../data/siteContent';

export default function FaqSection() {
  const [openId, setOpenId] = useState(FAQ_ITEMS[0]?.id || null);

  const toggleItem = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faqs" className="section section-faq-modern">
      <div className="container">
        <div className="faq-split-layout">
          {/* Left Column: Sticky Knowledge Hub Help Card */}
          <div className="faq-info-col">
            <div className="badge-tag">
              <Sparkles size={14} aria-hidden="true" />
              <span>Schengen Knowledge Hub</span>
            </div>
            <h2 className="faq-col-title">
              Clear Answers for Confident Preparation
            </h2>
            <p className="faq-col-desc">
              European documentation guidelines change frequently. Here are clear, straightforward
              answers to common questions from our clients.
            </p>

            <div className="faq-help-box">
              <div className="faq-help-icon" aria-hidden="true">
                <HelpCircle size={24} />
              </div>
              <h3 className="faq-help-title">Have a Complex Multi-Country Itinerary?</h3>
              <p className="faq-help-desc">
                If your trip spans multiple Schengen destinations or non-standard visa requirements,
                speak directly with an advisor.
              </p>
              <div className="faq-help-actions">
                <a
                  href={buildWhatsAppUrl('Hello LetsGetSchengen, I have a specific question about my travel documents.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--on-dark-primary btn--sm"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  <span>Ask on WhatsApp</span>
                </a>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`}
                  className="btn btn--glass btn--sm"
                >
                  <PhoneCall size={15} aria-hidden="true" />
                  <span>Call Advisor</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Numbered Modern Accordion */}
          <div className="faq-accordion-col">
            <div className="faq-accordion-list">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = openId === item.id;
                const panelId = `${item.id}-panel`;
                const buttonId = `${item.id}-button`;

                return (
                  <div
                    key={item.id}
                    className={`faq-modern-item${isOpen ? ' faq-modern-item--open' : ''}`}
                  >
                    <button
                      id={buttonId}
                      type="button"
                      className="faq-modern-trigger"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleItem(item.id)}
                    >
                      <div className="faq-modern-question-wrap">
                        <span className="faq-modern-num">0{index + 1}</span>
                        <span className="faq-modern-q-text">{item.question}</span>
                      </div>
                      <ChevronDown
                        size={19}
                        className={`faq-modern-chevron${isOpen ? ' faq-modern-chevron--rotated' : ''}`}
                        aria-hidden="true"
                      />
                    </button>

                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      className={`faq-modern-panel${isOpen ? ' faq-modern-panel--open' : ''}`}
                    >
                      <div className="faq-modern-panel-inner">
                        <p>{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

