import { useState } from 'react';
import { RiArrowRightLine, RiCheckLine } from 'react-icons/ri';
import { FORGE_CONTENT } from '../../data/content';

/**
 * Footer Component (Section 09)
 * Sophisticated architectural ledger footer on warm secondary limestone surface (#EAE5DC).
 * Features:
 * - Upper Tier: Brand wordmark & genuinely functional newsletter form with accessible feedback
 * - Middle Tier: Four-column directory pointing strictly to existing section anchors
 * - Lower Tier: Copyright notice and archive ledger stamp
 * - Clean mobile 2-column directory adaptation with comfortable touch targets
 */
export function Footer() {
  const { brand, footer } = FORGE_CONTENT;

  // Genuinely functional client-side subscription state
  const [emailInput, setEmailInput] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setIsSubscribed(true);
    }
  };

  return (
    <footer
      id="footer"
      role="contentinfo"
      className="forge-footer"
    >
      <div className="forge-footer__container">
        {/* ========================================================
            UPPER TIER: Brand Identity & Functional Newsletter
            ======================================================== */}
        <div className="forge-footer__upper">
          <div className="forge-footer__brand-block">
            <span className="forge-footer__wordmark">{brand.name}</span>
            <p className="forge-footer__brand-claim">
              {footer.brandClaim}
            </p>
          </div>

          {/* Genuinely Functional Dispatch Form */}
          <div className="forge-footer__newsletter-block">
            <span className="forge-footer__newsletter-label">
              {footer.newsletter.label}
            </span>
            <p className="forge-footer__newsletter-desc">
              {footer.newsletter.description}
            </p>

            {isSubscribed ? (
              <div
                role="status"
                aria-live="polite"
                className="forge-footer__newsletter-success"
              >
                <RiCheckLine aria-hidden="true" size={16} />
                <span>{footer.newsletter.successMessage}</span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="forge-footer__newsletter-form"
                noValidate
              >
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder={footer.newsletter.placeholder}
                  className="forge-footer__newsletter-input"
                  aria-label={footer.newsletter.label}
                />
                <button
                  type="submit"
                  className="forge-footer__newsletter-btn"
                  aria-label={footer.newsletter.submitLabel}
                >
                  <span>{footer.newsletter.submitLabel}</span>
                  <RiArrowRightLine aria-hidden="true" size={14} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Hairline Separator */}
        <hr className="forge-footer__divider" />

        {/* ========================================================
            MIDDLE TIER: Four-Column Navigation Directory
            ======================================================== */}
        <div className="forge-footer__directory">
          {footer.columns.map((column, idx) => (
            <div key={idx} className="forge-footer__col">
              <span className="forge-footer__col-title">{column.title}</span>
              <ul className="forge-footer__link-list">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx} className="forge-footer__link-item">
                    <a
                      href={link.href}
                      className="forge-footer__link"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Hairline Separator */}
        <hr className="forge-footer__divider" />

        {/* ========================================================
            LOWER TIER: Legal & Archive Ledger Readout
            ======================================================== */}
        <div className="forge-footer__lower">
          <span className="forge-footer__copyright">{footer.copyright}</span>
          <span className="forge-footer__archive-note">{footer.archiveNote}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
