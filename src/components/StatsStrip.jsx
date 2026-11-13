import { Users, Globe2, Award, Clock3, Shield } from 'lucide-react';
import { STATS_ITEMS } from '../data/siteContent';

const STAT_ICONS = {
  travellers: Users,
  destinations: Globe2,
  satisfaction: Award,
  response: Clock3,
};

const EUROPE_CITIES = [
  'Paris', 'Rome', 'Madrid', 'Berlin', 'Amsterdam', 'Vienna',
  'Athens', 'Zurich', 'Lisbon', 'Prague', 'Brussels', 'Stockholm',
  'Reykjavik', 'Copenhagen', 'Warsaw', 'Budapest', 'Milan', 'Barcelona',
];

export default function StatsStrip() {
  return (
    <section className="stats-strip-modern" aria-label="Consultancy trust and achievement statistics">
      <div className="container">
        <div className="stats-strip-modern__inner">
          <div className="stats-strip-modern__header">
            <span className="stats-strip-modern__eyebrow">
              <Shield size={14} aria-hidden="true" />
              Trusted European Travel Mobility Standards
            </span>
            <p className="stats-strip-modern__tagline">
              Proven results backing individual travellers, families, and global professionals.
            </p>
          </div>

          <div className="stats-strip-modern__grid">
            {STATS_ITEMS.map((stat) => {
              const Icon = STAT_ICONS[stat.id] || Award;
              return (
                <div key={stat.id} className="stat-card-modern">
                  <div className="stat-card-modern__icon-wrap" aria-hidden="true">
                    <Icon size={22} />
                  </div>
                  <div className="stat-card-modern__content">
                    <div className="stat-card-modern__value">{stat.value}</div>
                    <div className="stat-card-modern__label">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Running Europe Cities Marquee Track */}
          <div className="cities-marquee" aria-hidden="true">
            <span className="cities-marquee__label">Schengen Corridors Supported:</span>
            <div className="cities-marquee__track">
              {EUROPE_CITIES.map((city, idx) => (
                <span key={`${city}-${idx}`} className="cities-marquee__item">
                  <span className="cities-marquee__bullet">•</span>
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

