/**
 * Logo Component
 * Official SKF logo using Next.js Image for optimization.
 */

import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const SIZES = {
  sm: { width: 80, height: 80 },
  md: { width: 96, height: 96 },
  lg: { width: 128, height: 128 },
} as const;

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const dimensions = SIZES[size];

  return (
    <Image
      src="/images/logos/Logotype_transparent.png"
      alt="Svenska Kickboxningsförbundet"
      width={dimensions.width}
      height={dimensions.height}
      className={className}
      priority
    />
  );
}
