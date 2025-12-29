/**
 * Logo Component
 * SVG placeholder for SKF logo.
 * Replace with actual logo SVG when available.
 */

interface LogoProps {
  className?: string;
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <svg
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Svenska Kickboxningsförbundet logotyp"
      role="img"
    >
      {/* Placeholder: Blue circle with yellow accent */}
      <circle cx="20" cy="20" r="18" fill="#0F2454" />
      <circle cx="20" cy="20" r="12" fill="#F5DC32" />
      <circle cx="20" cy="20" r="6" fill="#0F2454" />

      {/* Text placeholder */}
      <text
        x="45"
        y="25"
        fill="#0F2454"
        fontFamily="Inter, Arial, sans-serif"
        fontSize="14"
        fontWeight="700"
      >
        SKF
      </text>
    </svg>
  );
}
