/**
 * SectionWrapper Component
 * Manages substrate switching (Cinematic Dark vs Warm Light),
 * edge-to-edge full bleed backgrounds, and centered max-width content containers.
 */

export function SectionWrapper({
  children,
  variant = 'dark', // 'dark' | 'light' | 'raised-dark' | 'raised-light'
  id,
  className = '',
  hasBorderTop = false,
  hasBorderBottom = false,
  noPaddingY = false,
  style = {}
}) {
  const isLight = variant === 'light' || variant === 'raised-light';
  const substrateClass = isLight ? 'substrate-light' : 'substrate-dark';
  
  const borderTopClass = hasBorderTop ? 'hairline-top' : '';
  const borderBottomClass = hasBorderBottom ? 'hairline-bottom' : '';

  const backgroundOverride = 
    variant === 'raised-dark' ? 'var(--surface-secondary)' :
    variant === 'raised-light' ? 'var(--surface-secondary)' :
    undefined;

  return (
    <section
      id={id}
      className={`section-wrapper ${substrateClass} ${borderTopClass} ${borderBottomClass} ${className}`.trim()}
      style={{
        backgroundColor: backgroundOverride,
        position: 'relative',
        width: '100%',
        ...style
      }}
    >
      <div
        className="section-container"
        style={{
          width: '100%',
          maxWidth: 'var(--container-max-width)',
          margin: '0 auto',
          paddingLeft: 'var(--container-padding)',
          paddingRight: 'var(--container-padding)',
          paddingTop: noPaddingY ? 0 : 'var(--section-padding-y)',
          paddingBottom: noPaddingY ? 0 : 'var(--section-padding-y)',
          position: 'relative'
        }}
      >
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;

