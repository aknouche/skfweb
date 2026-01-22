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
  sm: { width: 40, height: 40 },
  md: { width: 48, height: 48 },
  lg: { width: 64, height: 64 },
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
