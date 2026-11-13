export default function BrandLogo({ variant = 'light' }) {
  const className =
    variant === 'dark'
      ? 'brand-logo brand-logo--dark'
      : variant === 'footer'
      ? 'brand-logo brand-logo--footer'
      : 'brand-logo';

  return (
    <a href="#hero" className={className} aria-label="LetsGetSchengen home">
      <svg
        width="34"
        height="34"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <rect
          width="40"
          height="40"
          rx="10"
          fill={variant === 'dark' ? '#FD550A' : '#E0F354'}
        />
        <circle
          cx="20"
          cy="20"
          r="12.5"
          stroke={variant === 'dark' ? '#FFFFFF' : '#101126'}
          strokeWidth="2"
          strokeDasharray="3 3.5"
        />
        <path
          d="M14 20.5L18.2 24.5L26.5 15.5"
          stroke={variant === 'dark' ? '#E0F354' : '#015D47'}
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="brand-logo__text">LetsGetSchengen</span>
    </a>
  );
}

