import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { NAV_LINKS } from '../data/siteContent';

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
          <a
            href="#lead-form"
            className={`btn btn--sm header__cta-desktop ${
              scrolled ? 'btn--on-light-primary' : 'btn--on-dark-primary'
            }`}
          >
            <span>Book Consultation</span>
            <ArrowRight size={15} aria-hidden="true" />
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
          <a
            href="#lead-form"
            className="btn btn--on-light-primary btn--full"
            onClick={handleLinkClick}
          >
            Get in Touch
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      )}
    </header>
  );
}

