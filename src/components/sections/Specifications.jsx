import { useState } from 'react';
import { RiAddLine, RiSubtractLine } from 'react-icons/ri';
import { SectionWrapper, EditorialTag } from '../common';
import { FORGE_CONTENT } from '../../data/content';

/**
 * Specifications Component (Section 06)
 * Technical architectural product presentation on warm limestone substrate (#F7F5F0).
 * Features:
 * - Two-column desktop layout (Left: Specimen visual with interactive coordinate pips; Right: Spec accordion)
 * - Bidirectional interaction: clicking an accordion item highlights its marker; clicking a marker opens its spec
 * - Accessible keyboard navigation (Enter/Space, ARIA expanded & region)
 * - Stacks smoothly on mobile with comfortable touch targets
 */
export function Specifications() {
  const { specifications } = FORGE_CONTENT;

  // Active accordion item id (defaults to first item)
  const [activeSpecId, setActiveSpecId] = useState(specifications.items[0].id);

  const toggleSpec = (id) => {
    setActiveSpecId((current) => (current === id ? null : id));
  };

  return (
    <SectionWrapper
      id="specifications"
      variant="light"
      className="specifications-section"
      hasBorderTop
      hasBorderBottom
    >
      <div className="specifications-layout">
        {/* Left Column: Visual Diagram with Interactive Coordinate Markers */}
        <div className="specifications-visual-col">
          <div className="specifications-visual-wrap">
            <img
              src={specifications.diagramImage.src}
              alt={specifications.diagramImage.alt}
              loading="lazy"
              className="specifications-specimen-img"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                minHeight: '420px',
                display: 'block'
              }}
            />

            {/* Interactive Coordinate Overlay Markers */}
            <div
              className="specifications-markers-layer"
              role="group"
              aria-label="Specification interactive markers"
            >
              {specifications.items.map((item) => {
                const isActive = item.id === activeSpecId;
                return (
                  <button
                    key={`marker-${item.id}`}
                    type="button"
                    aria-label={`Highlight ${item.title}`}
                    aria-pressed={isActive}
                    aria-controls={`spec-content-${item.id}`}
                    className={`spec-marker-pip ${isActive ? 'spec-marker-pip--active' : ''}`}
                    style={{
                      left: item.markerPosition?.x || '50%',
                      top: item.markerPosition?.y || '50%'
                    }}
                    onClick={() => setActiveSpecId(item.id)}
                  >
                    <span className="spec-marker-pip__dot" />
                    <span className="spec-marker-pip__num">{item.number}</span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Coordinate Readout Stamp */}
            <div className="specifications-coord-stamp">
              <span>{specifications.coordinateTag}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Section Header & 3-Item Accordion */}
        <div className="specifications-info-col">
          <div className="specifications-header">
            <EditorialTag accent style={{ marginBottom: '16px' }}>
              {specifications.sectionTag}
            </EditorialTag>
            <h2 className="specifications-heading">
              {specifications.heading}
            </h2>
          </div>

          {/* Technical Specification Accordion */}
          <div className="specifications-accordion" role="presentation">
            {specifications.items.map((item) => {
              const isExpanded = item.id === activeSpecId;
              const contentId = `spec-content-${item.id}`;
              const buttonId = `spec-btn-${item.id}`;

              return (
                <div
                  key={item.id}
                  className={`spec-accordion-item ${isExpanded ? 'spec-accordion-item--expanded' : ''}`}
                >
                  <h3>
                    <button
                      type="button"
                      id={buttonId}
                      aria-expanded={isExpanded}
                      aria-controls={contentId}
                      className="spec-accordion-btn"
                      onClick={() => toggleSpec(item.id)}
                    >
                      <div className="spec-accordion-btn__title-group">
                        <span className="spec-accordion-btn__num">
                          {item.number}
                        </span>
                        <span className="spec-accordion-btn__text">
                          {item.title}
                        </span>
                      </div>

                      <span className="spec-accordion-btn__icon" aria-hidden="true">
                        {isExpanded ? <RiSubtractLine size={18} /> : <RiAddLine size={18} />}
                      </span>
                    </button>
                  </h3>

                  <div
                    id={contentId}
                    role="region"
                    aria-labelledby={buttonId}
                    className="spec-accordion-content"
                    hidden={!isExpanded}
                  >
                    <div className="spec-accordion-content__inner">
                      <p className="spec-accordion-detail">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default Specifications;
