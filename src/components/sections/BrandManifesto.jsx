import { SectionWrapper, EditorialTag, HairlineDivider } from '../common';
import { FORGE_CONTENT } from '../../data/content';

/**
 * BrandManifesto Component (Section 07)
 * Elegant editorial brand section on warm limestone substrate (#F6F3EE).
 * Features:
 * - Spacious centered thesis composition in Newsreader
 * - Three architectural principle columns with vertical hairline dividers on desktop
 * - Horizontal hairline dividers on mobile
 * - JetBrains Mono pillar labels and Plus Jakarta Sans descriptions
 */
export function BrandManifesto() {
  const { manifesto } = FORGE_CONTENT;

  return (
    <SectionWrapper
      id="manifesto"
      variant="light"
      className="manifesto-section"
      hasBorderBottom
    >
      <div className="manifesto-container">
        {/* Centered Editorial Header & Thesis Statement */}
        <div className="manifesto-header">
          <EditorialTag variant="light" accent style={{ marginBottom: '24px' }}>
            {manifesto.sectionTag}
          </EditorialTag>

          <h2 className="manifesto-thesis">
            {manifesto.thesis}
          </h2>
        </div>

        <HairlineDivider variant="light" margin="clamp(40px, 6vw, 64px) 0" />

        {/* Three Architectural Principle Columns */}
        <div className="manifesto-pillars-grid">
          {manifesto.pillars.map((pillar, index) => (
            <div
              key={pillar.number}
              className={`manifesto-pillar-col ${index > 0 ? 'manifesto-pillar-col--bordered' : ''}`}
            >
              <div className="manifesto-pillar-meta">
                <span className="manifesto-pillar-num">{pillar.number}</span>
                <span className="manifesto-pillar-title">{pillar.title}</span>
              </div>

              <p className="manifesto-pillar-text">
                {pillar.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

export default BrandManifesto;

