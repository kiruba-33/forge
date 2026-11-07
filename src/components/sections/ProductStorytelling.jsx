import { RiArrowRightLine } from 'react-icons/ri';
import { SectionWrapper, EditorialTag, HairlineDivider } from '../common';
import { FORGE_CONTENT } from '../../data/content';

/**
 * ProductStorytelling Component (Section 05)
 * Editorial monograph section on warm limestone substrate (#F7F5F0).
 * Features an asymmetric two-column composition on desktop,
 * and a tailored mobile reading flow:
 * 1. Editorial heading / pull-quote
 * 2. 4:5 Documentary process visual
 * 3. Narrative body content & monograph link
 */
export function ProductStorytelling() {
  const { storytelling } = FORGE_CONTENT;

  return (
    <SectionWrapper
      id="story"
      variant="light"
      className="storytelling-section"
      hasBorderBottom
    >
      <div className="storytelling-layout">
        {/* Area 1: Editorial Tag & Pull-Quote (Desktop Col 1 Top / Mobile 1st) */}
        <div className="storytelling-header-area">
          <EditorialTag variant="light" accent style={{ marginBottom: '24px' }}>
            {storytelling.sectionTag}
          </EditorialTag>

          <blockquote className="storytelling-quote">
            {storytelling.pullQuote}
          </blockquote>
        </div>

        {/* Area 2: 4:5 Documentary Process Visual (Desktop Col 2 / Mobile 2nd) */}
        <div className="storytelling-visual-area">
          <div className="storytelling-visual-wrap">
            <img
              src={storytelling.image.src}
              alt={storytelling.image.alt}
              loading="lazy"
              className="storytelling-media"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Area 3: Narrative Text & Monograph Link (Desktop Col 1 Bottom / Mobile 3rd) */}
        <div className="storytelling-narrative-area">
          <HairlineDivider variant="light" margin="28px 0" />

          <p className="storytelling-body">
            {storytelling.body}
          </p>

          <div className="storytelling-actions">
            <a
              href="#story"
              className="forge-editorial-action-link"
              aria-label={storytelling.ctaLabel}
            >
              <span>{storytelling.ctaLabel}</span>
              <RiArrowRightLine className="forge-action-arrow" aria-hidden="true" size={16} />
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default ProductStorytelling;
