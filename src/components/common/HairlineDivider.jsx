/**
 * HairlineDivider Component
 * 1px architectural hairline rule responding to substrate tokens.
 */

export function HairlineDivider({
  variant = 'inherit', // 'dark' | 'light' | 'inherit'
  margin = '0',
  className = '',
  style = {}
}) {
  const isDark = variant === 'dark';
  const isLight = variant === 'light';

  const borderColor = isDark
    ? 'var(--surface-dark-border)'
    : isLight
    ? 'var(--surface-light-border)'
    : 'var(--current-border, var(--surface-dark-border))';

  return (
    <hr
      className={`hairline-divider ${className}`.trim()}
      style={{
        border: 'none',
        borderTop: `1px solid ${borderColor}`,
        width: '100%',
        margin: margin,
        padding: 0,
        ...style
      }}
    />
  );
}

export default HairlineDivider;

