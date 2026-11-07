import { useState, useEffect } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import { FORGE_CONTENT } from '../../data/content';

/**
 * Navigation Component (Section 01)
 * Balanced premium fixed navigation with centered FORGE wordmark,
 * six essential links targeting existing sections, adaptive scroll blur,
 * and accessible mobile navigation drawer.
 */
export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Monitor scroll for adaptive glass background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on Escape key and lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMobileOpen) {
        setIsMobileOpen(false);
      }
    };

    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const navItems = FORGE_CONTENT.navigation.items;
  // Divide 6 items into balanced left and right clusters around the centered wordmark
  const leftItems = navItems.slice(0, 3);
  const rightItems = navItems.slice(3);

  return (
    <>
      <header
        role="banner"
        className={`forge-navbar ${isScrolled ? 'forge-navbar--scrolled' : ''}`}
      >
        <div className="forge-navbar__inner">
          {/* Left Navigation Cluster (Desktop) */}
          <nav
            role="navigation"
            aria-label="Primary Left Navigation"
            className="forge-navbar__cluster forge-navbar__cluster--left"
          >
            {leftItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="forge-nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Centered FORGE Wordmark */}
          <a
            href="#"
            className="forge-navbar__brand"
            aria-label={`${FORGE_CONTENT.brand.name} — Return to top`}
          >
            <span className="forge-brand-wordmark">{FORGE_CONTENT.brand.name}</span>
          </a>

          {/* Right Navigation Cluster (Desktop) */}
          <nav
            role="navigation"
            aria-label="Primary Right Navigation"
            className="forge-navbar__cluster forge-navbar__cluster--right"
          >
            {rightItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="forge-nav-link"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile Navigation Trigger */}
          <div className="forge-navbar__mobile-trigger">
            <button
              type="button"
              className="forge-hamburger-btn"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-expanded={isMobileOpen}
              aria-controls="forge-mobile-drawer"
              aria-label={isMobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
            >
              {isMobileOpen ? (
                <RiCloseLine size={24} aria-hidden="true" />
              ) : (
                <RiMenuLine size={24} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Accessible Mobile Drawer Overlay */}
      <div
        id="forge-mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className={`forge-mobile-drawer ${isMobileOpen ? 'forge-mobile-drawer--open' : ''}`}
      >
        <div className="forge-mobile-drawer__content">
          <div className="forge-mobile-drawer__header">
            <span className="forge-brand-wordmark" style={{ fontSize: '20px' }}>
              {FORGE_CONTENT.brand.name}
            </span>
            <button
              type="button"
              className="forge-hamburger-btn"
              onClick={() => setIsMobileOpen(false)}
              aria-label="Close Navigation Menu"
            >
              <RiCloseLine size={24} aria-hidden="true" />
            </button>
          </div>

          <nav role="navigation" className="forge-mobile-nav">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="forge-mobile-nav-link"
                onClick={() => setIsMobileOpen(false)}
              >
                <span className="forge-mobile-nav-text">{item.label}</span>
              </a>
            ))}
          </nav>

          <div className="forge-mobile-drawer__footer">
            <div className="forge-mobile-meta">
              <span>{FORGE_CONTENT.brand.coordinateStamp}</span>
              <span>{FORGE_CONTENT.brand.archiveYear}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
