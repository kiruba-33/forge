/**
 * EditorialTag Component
 * Monospace coordinate / figure eyebrow tag.
 * e.g., "[FIG. 01 — ARCHIVE RELEASE PLACEHOLDER]"
 */

export function EditorialTag({
  children,
  label,
  variant = 'inherit', // 'dark' | 'light' | 'inherit'
  accent = false,
  className = '',
  style = {}
}) {
  const content = children || label;
  
  const isDark = variant === 'dark';
  const isLight = variant === 'light';

  const defaultColor = isDark
    ? 'var(--text-dark-tertiary)'
    : isLight
    ? 'var(--text-light-tertiary)'
    : 'var(--current-text-tertiary, var(--text-dark-tertiary))';

  const color = accent ? 'var(--accent-ember)' : defaultColor;

  return (
    <div
      className={`editorial-tag ${className}`.trim()}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-mono-tag)',
        letterSpacing: 'var(--tracking-widest)',
        textTransform: 'uppercase',
        color: color,
        userSelect: 'none',
        lineHeight: 1.2,
        ...style
      }}
    >
      {accent && (
        <span
          aria-hidden="true"
          style={{
            display: 'inline-block',
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            backgroundColor: 'var(--accent-ember)',
            boxShadow: '0 0 8px var(--accent-ember-glow)'
          }}
        />
      )}
      <span>{content}</span>
    </div>
  );
}

export default EditorialTag;

