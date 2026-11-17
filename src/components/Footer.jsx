import {
  Mail,
  Phone,
  MessageCircle,
  Clock,
  Instagram,
  Linkedin,
  Facebook,
} from 'lucide-react';
import BrandLogo from './BrandLogo';
import {
  NAV_LINKS,
  SERVICES_ITEMS,
  SITE_CONFIG,
  buildWhatsAppUrl,
} from '../data/siteContent';

export default function Footer({ onOpenLegal }) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer__grid">
          <div>
            <BrandLogo variant="footer" />
            <p className="footer__brand-desc">
              {SITE_CONFIG.brandName} is an independent Schengen travel consultancy dedicated to
              simplifying European travel documentation, planning, and appointment preparation.
            </p>
            <div className="footer__socials" aria-label="Social media channels">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LetsGetSchengen on Instagram"
              >
                <Instagram size={18} aria-hidden="true" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LetsGetSchengen on LinkedIn"
              >
                <Linkedin size={18} aria-hidden="true" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label="LetsGetSchengen on Facebook"
              >
                <Facebook size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="footer__col-title">Quick Navigation</h3>
            <ul className="footer__links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer__link">
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#testimonials" className="footer__link">
                  Client Reviews
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="footer__col-title">Consultancy Services</h3>
            <ul className="footer__links">
              {SERVICES_ITEMS.map((service) => (
                <li key={service.id}>
                  <a href="#services" className="footer__link">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="footer__col-title">Contact &amp; Support</h3>
            <ul className="footer__links">
              <li>
                <a href={`mailto:${SITE_CONFIG.email}`} className="footer__link">
                  <Mail size={15} aria-hidden="true" />
                  <span>{SITE_CONFIG.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone.replace(/\s+/g, '')}`}
                  className="footer__link"
                >
                  <Phone size={15} aria-hidden="true" />
                  <span>{SITE_CONFIG.phone}</span>
                </a>
              </li>
              <li>
                <a
                  href={buildWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__link"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  <span>WhatsApp Consultation</span>
                </a>
              </li>
              <li>
                <span className="footer__link">
                  <Clock size={15} aria-hidden="true" />
                  <span>{SITE_CONFIG.officeHours}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__disclaimer">
          <p>
            <strong>Legal Disclaimer:</strong> LetsGetSchengen ({SITE_CONFIG.domain}) is an independent private consultancy providing European travel document preparation, checklist review, and appointment coordination advisory. We are not an official government agency, embassy, or consulate, and are not affiliated with any European diplomatic mission or outsourced visa application centre (including VFS Global, TLScontact, or BLS International). Decisions on visa issuance, document acceptance, and processing timelines are made solely and independently by the respective competent embassy or consulate authorities.
          </p>
        </div>

        <div className="footer__bottom">
          <span>
            &copy; {year} {SITE_CONFIG.brandName} ({SITE_CONFIG.domain}). All rights reserved.
          </span>

          <div className="footer__legal">
            <button
              type="button"
              className="footer__legal-btn"
              onClick={() => onOpenLegal('privacy')}
            >
              Privacy Policy
            </button>
            <button
              type="button"
              className="footer__legal-btn"
              onClick={() => onOpenLegal('terms')}
            >
              Terms &amp; Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

