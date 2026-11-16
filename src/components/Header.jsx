import { useEffect, useState } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { NAV_LINKS, SITE_CONFIG, buildWhatsAppUrl } from '../data/siteContent';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className={`site-header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <BrandLogo variant={scrolled ? 'dark' : 'light'} />

        <nav className="header__nav" aria-label="Main navigation">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="header__nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          {/* Prominent Phone Call Action with 24x7 Quick Response Note */}
          <div className="header__call-wrapper">
            <span className="header__call-note">For quick response call 24x7</span>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className={`header__phone-btn ${
                scrolled ? 'header__phone-btn--scrolled' : ''
              }`}
              aria-label={`For quick response call 24x7 at ${SITE_CONFIG.phoneDisplay}`}
            >
              <Phone size={15} className="header__phone-icon" aria-hidden="true" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
          </div>

          {/* Quick Mobile Direct Call Icon */}
          <a
            href={`tel:${SITE_CONFIG.phoneRaw}`}
            className="header__mobile-call-btn"
            aria-label={`Call ${SITE_CONFIG.phoneDisplay} 24/7`}
          >
            <Phone size={18} aria-hidden="true" />
          </a>

          <button
            type="button"
            className="header__menu-btn"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-drawer"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div id="mobile-nav-drawer" className="mobile-drawer" role="dialog" aria-label="Mobile navigation">
          <nav className="mobile-drawer__links" aria-label="Mobile links">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mobile-drawer__link"
                onClick={handleLinkClick}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="mobile-drawer__call-section">
            <div className="mobile-drawer__call-tag">
              <span className="live-status-dot" aria-hidden="true" />
              <span>For quick response call 24x7</span>
            </div>
            <a
              href={`tel:${SITE_CONFIG.phoneRaw}`}
              className="btn btn--on-dark-primary btn--full"
              onClick={handleLinkClick}
            >
              <Phone size={17} aria-hidden="true" />
              <span>{SITE_CONFIG.phoneDisplay}</span>
            </a>
            <a
              href={buildWhatsAppUrl('Hello LetsGetSchengen, I would like to consult with an advisor about my upcoming European trip.')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--glass btn--full"
              style={{ marginTop: '10px' }}
              onClick={handleLinkClick}
            >
              <MessageCircle size={17} aria-hidden="true" />
              <span>WhatsApp Support</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

