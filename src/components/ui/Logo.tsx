/**
 * Logo Component
 * Official SKF logo using Next.js Image for optimization.
 *
 * Size guide:
 * - sm: 48px - Compact spaces (footer with background)
 * - md: 56px - Standard header usage
 * - lg: 72px - Larger displays
 * - xl: 96px - Hero/standalone usage
 */

import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const SIZES = {
  sm: { width: 48, height: 48 },
  md: { width: 56, height: 56 },
  lg: { width: 72, height: 72 },
  xl: { width: 96, height: 96 },
} as const;

export function Logo({ className = '', size = 'md' }: LogoProps) {
  const dimensions = SIZES[size];

  return (
    <Image
      src="/images/logos/Logotype_transparent.png"
      alt="Svenska Kickboxningsförbundet"
      width={dimensions.width}
      height={dimensions.height}
      className={`transition-transform duration-200 ${className}`}
      priority
    />
  );
}
