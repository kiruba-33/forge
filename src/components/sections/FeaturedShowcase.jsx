import { useState } from 'react';
import { SectionWrapper, EditorialTag, HairlineDivider } from '../common';
import { FORGE_CONTENT } from '../../data/content';

/**
 * FeaturedShowcase Component (Section 03)
 * Premium specimen showcase featuring:
 * - Desktop vertical thumbnail rail (responsive horizontal strip on mobile)
 * - Seamless stage visual with working angle switching and local photography
 * - Editorial title, material selector, and architectural specification breakdown
 */
export function FeaturedShowcase() {
  const { featuredShowcase } = FORGE_CONTENT;

  // Active angle and material state
  const [activeAngleId, setActiveAngleId] = useState(featuredShowcase.angles[0].id);
  const [selectedMaterialId, setSelectedMaterialId] = useState(featuredShowcase.materialOptions[0].id);

  const activeAngle = featuredShowcase.angles.find((a) => a.id === activeAngleId) || featuredShowcase.angles[0];
  const selectedMaterial = featuredShowcase.materialOptions.find((m) => m.id === selectedMaterialId) || featuredShowcase.materialOptions[0];

  return (
    <SectionWrapper
      id="showcase"
      variant="light"
      className="showcase-section"
      hasBorderTop
      hasBorderBottom
    >
      {/* Section Header Eyebrow */}
      <div className="showcase-section-header">
        <EditorialTag accent>
          {featuredShowcase.sectionTag}
        </EditorialTag>
        <span className="showcase-header-meta">
          {featuredShowcase.category}
        </span>
      </div>

      <div className="showcase-layout">
        {/* Vertical Angle Rail (Desktop) / Horizontal Preview Strip (Mobile) */}
        <div
          role="tablist"
          aria-label="Product Visual Angles"
          className="showcase-angle-rail"
        >
          {featuredShowcase.angles.map((angle) => {
            const isActive = angle.id === activeAngleId;
            return (
              <button
                key={angle.id}
                role="tab"
                type="button"
                id={`angle-tab-${angle.id}`}
                aria-selected={isActive}
                aria-controls="showcase-visual-stage"
                className={`showcase-angle-btn ${isActive ? 'showcase-angle-btn--active' : ''}`}
                onClick={() => setActiveAngleId(angle.id)}
                title={angle.label}
              >
                <span className="showcase-angle-num">{angle.number}</span>
                <span className="showcase-angle-text">{angle.label}</span>
              </button>
            );
          })}
        </div>

        {/* Center Stage: Seamless Product Visual */}
        <div
          id="showcase-visual-stage"
          role="tabpanel"
          aria-labelledby={`angle-tab-${activeAngle.id}`}
          className="showcase-stage"
        >
          <div className="showcase-stage-inner">
            <div className="showcase-media-frame">
              <img
                src={activeAngle.image}
                alt={`${featuredShowcase.productTitle} — ${activeAngle.label}`}
                loading="lazy"
                className="showcase-stage-img"
              />
              <div className="showcase-stage-badge">
                <span>{selectedMaterial.name}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Editorial Info, Material Swatches & Specs */}
        <div className="showcase-info-panel">
          <div className="showcase-info-header">
            <span className="showcase-series-tag">
              {featuredShowcase.category}
            </span>
            <h2 className="showcase-product-title">
              {featuredShowcase.productTitle}
            </h2>
          </div>

          <p className="showcase-description">
            {featuredShowcase.description}
          </p>

          <HairlineDivider margin="24px 0" />

          {/* Material Swatch Selector */}
          <div className="showcase-materials-block">
            <span className="showcase-block-label">
              FINISH SELECTION: <strong style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{selectedMaterial.name}</strong>
            </span>
            <div
              role="radiogroup"
              aria-label="Material Options"
              className="showcase-swatches"
            >
              {featuredShowcase.materialOptions.map((mat) => {
                const isSelected = mat.id === selectedMaterialId;
                return (
                  <button
                    key={mat.id}
                    role="radio"
                    type="button"
                    aria-checked={isSelected}
                    className={`showcase-swatch-btn ${isSelected ? 'showcase-swatch-btn--selected' : ''}`}
                    onClick={() => setSelectedMaterialId(mat.id)}
                  >
                    <span
                      className="showcase-swatch-circle"
                      style={{ backgroundColor: mat.hex }}
                      aria-hidden="true"
                    />
                    <span className="showcase-swatch-name">{mat.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <HairlineDivider margin="24px 0" />

          {/* Architectural Specifications List */}
          <div className="showcase-specs-block">
            <span className="showcase-block-label">
              SPECIFICATION SUMMARY
            </span>
            <dl className="showcase-specs-list">
              {featuredShowcase.specifications.map((spec, i) => (
                <div key={i} className="showcase-spec-row">
                  <dt className="showcase-spec-term">{spec.label}</dt>
                  <dd className="showcase-spec-def">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="showcase-action-wrap">
            <a
              href="#specifications"
              className="forge-exhibition-btn"
              aria-label={featuredShowcase.actionLabel}
            >
              {featuredShowcase.actionLabel}
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

export default FeaturedShowcase;
