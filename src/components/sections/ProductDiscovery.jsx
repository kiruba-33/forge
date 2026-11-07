import { RiArrowRightLine } from 'react-icons/ri';
import { SectionWrapper, EditorialTag } from '../common';
import { FORGE_CONTENT } from '../../data/content';

/**
 * ProductDiscovery Component (Section 08)
 * Architectural closing section on warm limestone substrate (#F7F5F0).
 * Features:
 * - Spacious centered composition with generous negative space
 * - Large Instrument Serif editorial headline and Manrope narrative
 * - Tactile primary button and secondary directional link
 */
export function ProductDiscovery() {
  const { discovery } = FORGE_CONTENT;

  return (
    <SectionWrapper
      id="discovery"
      variant="light"
      className="discovery-section"
      hasBorderTop
    >
      <div className="discovery-container">
        {/* Figure Label Eyebrow */}
        <div className="discovery-eyebrow-wrap">
          <EditorialTag accent style={{ marginBottom: '24px' }}>
            {discovery.figureTag}
          </EditorialTag>
        </div>

        {/* Large Editorial Headline */}
        <h2 className="discovery-headline">
          {discovery.title}
        </h2>

        {/* Supporting Narrative */}
        <p className="discovery-subtext">
          {discovery.subtext}
        </p>

        {/* Action Pair: Primary Button & Secondary Directional Link */}
        <div className="discovery-actions">
          <a
            href={discovery.primaryCta.href}
            className="forge-primary-btn"
            aria-label={discovery.primaryCta.label}
          >
            <span>{discovery.primaryCta.label}</span>
          </a>

          {discovery.secondaryCta && (
            <a
              href={discovery.secondaryCta.href}
              className="forge-secondary-link"
              aria-label={discovery.secondaryCta.label}
            >
              <span>{discovery.secondaryCta.label}</span>
              <RiArrowRightLine className="forge-cta-arrow" aria-hidden="true" size={15} />
            </a>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ProductDiscovery;
