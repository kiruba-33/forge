import { RiArrowRightLine } from 'react-icons/ri';
import { EditorialTag } from '../common';
import { FORGE_CONTENT } from '../../data/content';

/**
 * CinematicHero Component (Section 02)
 * Full-screen edge-to-edge concept hero:
 * - Minimum 100svh viewport height with full-width natural light photography
 * - Warm ambient overlay maintaining optimal contrast for upright typography
 * - Instrument Serif headline, Manrope narrative, and clear primary CTA
 */
export function CinematicHero() {
  const { hero } = FORGE_CONTENT;

  return (
    <section id="hero" className="hero-fullscreen">
      {/* Full-Bleed Edge-to-Edge Background Photography */}
      <div className="hero-fullscreen__media">
        <img
          src={hero.image}
          alt={hero.imageAlt}
          loading="eager"
          fetchPriority="high"
          className="hero-fullscreen__img"
        />
        <div className="hero-fullscreen__overlay" aria-hidden="true" />
      </div>

      {/* Foreground Editorial Content */}
      <div className="hero-fullscreen__content">
        <div className="hero-fullscreen__inner">
          <div className="hero-entrance-1">
            <EditorialTag accent style={{ marginBottom: '24px' }}>
              {hero.figureTag}
            </EditorialTag>
          </div>

          <h1 className="hero-fullscreen__headline hero-entrance-2">
            {hero.headline}
          </h1>

          <p className="hero-fullscreen__subtext hero-entrance-3">
            {hero.subtext}
          </p>

          <div className="hero-fullscreen__actions hero-entrance-4">
            <a
              href="#editions"
              className="forge-primary-btn"
              aria-label={hero.ctaLabel}
            >
              <span>{hero.ctaLabel}</span>
              <RiArrowRightLine aria-hidden="true" size={16} />
            </a>

            <a
              href="#showcase"
              className="forge-secondary-link"
              aria-label={hero.secondaryCta}
            >
              <span>{hero.secondaryCta}</span>
              <RiArrowRightLine className="forge-cta-arrow" aria-hidden="true" size={16} />
            </a>
          </div>

          <div className="hero-fullscreen__meta hero-entrance-4">
            <span>{hero.subCoordinates}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CinematicHero;
