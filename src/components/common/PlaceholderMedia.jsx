/**
 * PlaceholderMedia Component
 * Architectural, cinematic SVG/CSS wireframe image placeholder.
 * Communicates framing, aspect ratio, and lighting intentions without broken image links.
 */

export function PlaceholderMedia({
  aspectRatio = '16/10',
  label = '[Visual Media Placeholder]',
  sublabel,
  variant = 'inherit', // 'dark' | 'light' | 'inherit'
  height,
  className = '',
  style = {}
}) {
  const isDark = variant === 'dark';
  const isLight = variant === 'light';

  // Compute CSS aspect-ratio string
  const cssAspect = aspectRatio === '35/65' ? '65/35' : aspectRatio.replace(':', '/');

  const borderColor = isDark 
    ? 'var(--surface-dark-border)' 
    : isLight 
    ? 'var(--surface-light-border)' 
    : 'var(--current-border, var(--surface-dark-border))';

  const textColor = isDark 
    ? 'var(--text-dark-secondary)' 
    : isLight 
    ? 'var(--text-light-secondary)' 
    : 'var(--current-text-secondary, var(--text-dark-secondary))';

  const tertiaryColor = isDark 
    ? 'var(--text-dark-tertiary)' 
    : isLight 
    ? 'var(--text-light-tertiary)' 
    : 'var(--current-text-tertiary, var(--text-dark-tertiary))';

  const bgGrad = isDark 
    ? 'radial-gradient(ellipse at 70% 30%, rgba(255, 255, 255, 0.04) 0%, rgba(14, 16, 18, 0.95) 75%)' 
    : isLight 
    ? 'radial-gradient(ellipse at 70% 30%, rgba(255, 255, 255, 0.8) 0%, rgba(236, 232, 225, 0.95) 75%)' 
    : 'radial-gradient(ellipse at 70% 30%, rgba(255, 255, 255, 0.05) 0%, rgba(0, 0, 0, 0.15) 85%)';

  return (
    <div
      role="img"
      aria-label={label}
      className={`placeholder-media ${className}`.trim()}
      style={{
        position: 'relative',
        width: '100%',
        height: height || 'auto',
        aspectRatio: height ? undefined : cssAspect,
        border: `1px solid ${borderColor}`,
        background: bgGrad,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        overflow: 'hidden',
        userSelect: 'none',
        ...style
      }}
    >
      {/* Corner Architectural Coordinate Markers */}
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10px',
          left: '12px',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: tertiaryColor,
          lineHeight: 1
        }}
      >
        +
      </span>
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10px',
          right: '12px',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: tertiaryColor,
          lineHeight: 1
        }}
      >
        +
      </span>
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '12px',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: tertiaryColor,
          lineHeight: 1
        }}
      >
        +
      </span>
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '10px',
          right: '12px',
          fontFamily: 'var(--font-mono)',
          fontSize: '11px',
          color: tertiaryColor,
          lineHeight: 1
        }}
      >
        +
      </span>

      {/* Center Reticle & Framing Icon */}
      <div
        aria-hidden="true"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '48px',
          height: '48px',
          border: `1px dashed ${borderColor}`,
          borderRadius: '50%',
          marginBottom: '16px'
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '14px',
            color: 'var(--accent-ember)',
            lineHeight: 1
          }}
        >
          ●
        </span>
      </div>

      {/* Primary Label */}
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--text-mono-tag)',
          letterSpacing: 'var(--tracking-widest)',
          textTransform: 'uppercase',
          color: textColor,
          textAlign: 'center',
          maxWidth: '85%',
          marginBottom: sublabel ? '6px' : 0
        }}
      >
        {label}
      </div>

      {/* Sublabel / Technical Specification */}
      {sublabel && (
        <div
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '11px',
            color: tertiaryColor,
            textAlign: 'center',
            maxWidth: '80%'
          }}
        >
          {sublabel}
        </div>
      )}
    </div>
  );
}

export default PlaceholderMedia;

