import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Sparkles, Calendar, FileText } from 'lucide-react';
import { HERO_CONTENT, buildWhatsAppUrl, SCHENGEN_DESTINATIONS } from '../data/siteContent';

const POPULAR_DESTINATIONS = [
  { flag: '🇫🇷', name: 'France' },
  { flag: '🇮🇹', name: 'Italy' },
  { flag: '🇪🇸', name: 'Spain' },
  { flag: '🇩🇪', name: 'Germany' },
  { flag: '🇨🇭', name: 'Switzerland' },
  { flag: '🇬🇷', name: 'Greece' },
  { flag: '🇵🇹', name: 'Portugal' },
  { flag: '🇳🇱', name: 'Netherlands' },
];

export default function HeroSection({ onSelectService }) {
  return (
    <section id="hero" className="hero">
      {/* Decorative ambient background glows */}
      <div className="hero__ambient-glow hero__ambient-glow--orange" aria-hidden="true" />
      <div className="hero__ambient-glow hero__ambient-glow--blue" aria-hidden="true" />

      {/* Destination Ticker */}
      <div className="hero__ticker-bar" aria-label="Popular European destinations">
        <div className="container hero__ticker-container">
          <span className="hero__ticker-label">
            <Sparkles size={14} className="hero__ticker-sparkle" aria-hidden="true" />
            Popular 2026 Destinations:
          </span>
          <div className="hero__ticker-pills">
            {POPULAR_DESTINATIONS.map((dest) => (
              <a
                key={dest.name}
                href="#lead-form"
                className="hero__dest-pill"
                title={`Consult for ${dest.name} travel documentation`}
              >
                <span className="hero__dest-flag">{dest.flag}</span>
                <span>{dest.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container hero__grid">
        <div className="hero__content">
          <div className="hero__status-badge">
            <span className="hero__pulse-dot" aria-hidden="true" />
            <span>2026 Schengen Travel Dossier Support Live</span>
          </div>

          <h1 className="hero__headline">
            Your European Journey <br />
            <span className="hero__headline--highlight">Starts With the Right Guidance.</span>
          </h1>

          <p className="hero__description">
            {HERO_CONTENT.description}
          </p>

          <div className="hero__ctas">
            <a href="#lead-form" className="btn btn--on-dark-primary btn--lg">
              <span>{HERO_CONTENT.primaryCta.label}</span>
              <ArrowRight size={18} aria-hidden="true" />
            </a>

            <a
              href={buildWhatsAppUrl('Hello LetsGetSchengen, I would like to consult with an advisor about my upcoming European trip.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--glass btn--lg"
            >
              <MessageCircle size={18} aria-hidden="true" />
              <span>WhatsApp Specialist</span>
            </a>
          </div>

          {/* Trust badges */}
          <div className="hero__trust-strip">
            <div className="hero__trust-item">
              <ShieldCheck size={18} className="hero__trust-icon" aria-hidden="true" />
              <div>
                <strong>12,500+ Travellers</strong>
                <span>Assisted Across Europe</span>
              </div>
            </div>

            <div className="hero__trust-item">
              <Calendar size={18} className="hero__trust-icon" aria-hidden="true" />
              <div>
                <strong>29 Schengen Countries</strong>
                <span>Direct Embassy Alignment</span>
              </div>
            </div>

            <div className="hero__trust-item">
              <CheckCircle2 size={18} className="hero__trust-icon" aria-hidden="true" />
              <div>
                <strong>1-on-1 Guidance</strong>
                <span>Zero Automation Guesswork</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__media-wrap">
          <div className="hero__visual-stage">
            {/* Ambient Radial Spotlight */}
            <div className="hero__visual-spotlight" aria-hidden="true" />

            {/* Floating Glass Badges */}
            <div className="hero__floating-card hero__floating-card--top" aria-hidden="true">
              <div className="hero__floating-icon hero__floating-icon--green">
                <FileText size={18} />
              </div>
              <div>
                <p className="hero__floating-title">Dossier Audit</p>
                <p className="hero__floating-sub">100% Pre-Check Complete</p>
              </div>
            </div>

            <div className="hero__floating-card hero__floating-card--bottom" aria-hidden="true">
              <div className="hero__floating-icon hero__floating-icon--orange">
                <Calendar size={18} />
              </div>
              <div>
                <p className="hero__floating-title">Appointment Guidance</p>
                <p className="hero__floating-sub">Jurisdiction &amp; Slot Prep</p>
              </div>
            </div>

            <img
              src="/7f4948a0-d135-4b6e-8933-36c3eaa9ef1c.png"
              alt="European landmarks collage including Eiffel Tower, Colosseum, Big Ben, Brandenburg Gate, and Leaning Tower of Pisa with an airplane and Schengen passport"
              className="hero__image"
              width={1536}
              height={1024}
              priority="true"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

