import { RiArrowRightLine } from 'react-icons/ri';
import { SectionWrapper, EditorialTag } from '../common';
import { FORGE_CONTENT } from '../../data/content';

/**
 * ProductCollections Component (Section 04)
 * Asymmetric editorial collection layout on warm limestone substrate (#F7F5F0).
 * Features a 12-column staggered matrix with 4:5, 1:1, and 3:2 cards,
 * generous negative space, subtle hover zoom, and refined typography.
 */
export function ProductCollections() {
  const { collections } = FORGE_CONTENT;
  const [colA, colB, colC] = collections.items;

  return (
    <SectionWrapper
      id="editions"
      variant="light"
      className="collections-section"
      hasBorderTop
      hasBorderBottom
    >
      {/* Section Header */}
      <div className="collections-header">
        <EditorialTag variant="light" accent style={{ marginBottom: '16px' }}>
          {collections.sectionTag}
        </EditorialTag>
        <h2 className="collections-heading">
          {collections.heading}
        </h2>
      </div>

      {/* 12-Column Asymmetric Grid */}
      <div className="collections-grid">
        {/* Collection A: 7 Columns | Portrait 4:5 */}
        {colA && (
          <article className="collection-card collection-card--a">
            <div className="collection-card__media-wrap">
              <img
                src={colA.image}
                alt={colA.imageAlt || colA.title}
                loading="lazy"
                className="collection-card__media"
                style={{ aspectRatio: '4/5', objectFit: 'cover' }}
              />
            </div>
            <div className="collection-card__info">
              <span className="collection-card__meta">{colA.count}</span>
              <h3 className="collection-card__title">
                <a href="#editions" className="collection-card__link">
                  <span>{colA.title}</span>
                  <RiArrowRightLine className="collection-card__arrow" aria-hidden="true" size={16} />
                </a>
              </h3>
              <p className="collection-card__desc">{colA.description}</p>
            </div>
          </article>
        )}

        {/* Collection B: 5 Columns | Square 1:1 | Vertically Offset */}
        {colB && (
          <article className="collection-card collection-card--b">
            <div className="collection-card__media-wrap">
              <img
                src={colB.image}
                alt={colB.imageAlt || colB.title}
                loading="lazy"
                className="collection-card__media"
                style={{ aspectRatio: '1/1', objectFit: 'cover' }}
              />
            </div>
            <div className="collection-card__info">
              <span className="collection-card__meta">{colB.count}</span>
              <h3 className="collection-card__title">
                <a href="#editions" className="collection-card__link">
                  <span>{colB.title}</span>
                  <RiArrowRightLine className="collection-card__arrow" aria-hidden="true" size={16} />
                </a>
              </h3>
              <p className="collection-card__desc">{colB.description}</p>
            </div>
          </article>
        )}

        {/* Collection C: 7 Columns | Shifted Towards Right | Landscape 3:2 */}
        {colC && (
          <article className="collection-card collection-card--c">
            <div className="collection-card__media-wrap">
              <img
                src={colC.image}
                alt={colC.imageAlt || colC.title}
                loading="lazy"
                className="collection-card__media"
                style={{ aspectRatio: '3/2', objectFit: 'cover' }}
              />
            </div>
            <div className="collection-card__info">
              <span className="collection-card__meta">{colC.count}</span>
              <h3 className="collection-card__title">
                <a href="#editions" className="collection-card__link">
                  <span>{colC.title}</span>
                  <RiArrowRightLine className="collection-card__arrow" aria-hidden="true" size={16} />
                </a>
              </h3>
              <p className="collection-card__desc">{colC.description}</p>
            </div>
          </article>
        )}
      </div>
    </SectionWrapper>
  );
}

export default ProductCollections;
