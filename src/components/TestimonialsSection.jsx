import { Star, ShieldCheck, Sparkles } from 'lucide-react';
import { TESTIMONIALS_ITEMS } from '../data/siteContent';

const DESTINATION_FLAGS = {
  'France & Switzerland Trip': '🇫🇷 🇨🇭',
  'Italy Family Holiday': '🇮🇹',
  'Germany Business Travel': '🇩🇪',
  'Spain & Portugal Tour': '🇪🇸 🇵🇹',
  'Netherlands & Belgium': '🇳🇱 🇧🇪',
  'Greece Summer Getaway': '🇬🇷',
};

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section section-testimonials-modern">
      <div className="container">
        <div className="section-header section-header--center">
          <div className="badge-tag">
            <Sparkles size={14} aria-hidden="true" />
            <span>Client Experiences &amp; Feedback</span>
          </div>
          <h2 className="section-title">
            Genuine Feedback from Travellers We’ve Supported
          </h2>
          <p className="section-subtitle">
            Read how our structured document checklists, timeline coordination, and 1-on-1 advisor care
            helped UAE and international travellers prepare their European travel files with confidence.
          </p>

          <div className="rating-pill-banner" aria-label="Rating summary">
            <div className="rating-pill-stars" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#E0F354" color="#E0F354" />
              ))}
            </div>
            <span className="rating-pill-text">
              Dedicated Support Across <strong>29 Schengen Countries</strong> &bull; Tailored Travel Files
            </span>
          </div>
        </div>

        {/* Boarding Pass / Passport Review Grid */}
        <div className="passport-reviews-grid">
          {TESTIMONIALS_ITEMS.map((item) => {
            const flag = DESTINATION_FLAGS[item.destination] || '🇪🇺';

            return (
              <article key={item.id} className="passport-card">
                {/* Boarding pass top header */}
                <div className="passport-card__head">
                  <div className="passport-card__route">
                    <span className="passport-card__flag" aria-hidden="true">{flag}</span>
                    <span className="passport-card__dest-name">{item.destination}</span>
                  </div>
                  <span className="passport-card__stamp" aria-hidden="true">
                    TRIP PREPARATION
                  </span>
                </div>

                <div className="passport-card__stars" aria-label={`${item.rating} out of 5 stars`}>
                  {[...Array(item.rating)].map((_, idx) => (
                    <Star key={idx} size={16} fill="#FD550A" color="#FD550A" />
                  ))}
                </div>

                <blockquote className="passport-card__quote">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>

                <div className="passport-card__footer">
                  <div className="passport-card__avatar" aria-hidden="true">
                    {item.initials}
                  </div>
                  <div className="passport-card__meta">
                    <p className="passport-card__name">{item.name}</p>
                    <p className="passport-card__verified">
                      <ShieldCheck size={14} className="passport-check-icon" aria-hidden="true" />
                      <span>Client Consultation</span>
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

