/**
 * Hero Section Component
 * Main landing section with brand identity and tagline
 */

import { BRAND } from '@/lib/constants';

export function Hero() {
  return (
    <section className="relative bg-skf-blue text-white">
      <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {BRAND.name}
          </h1>

          {/* Tagline */}
          <p className="mb-8 text-xl sm:text-2xl text-white/90">
            {BRAND.tagline}
          </p>

          {/* Accent Line */}
          <div className="mx-auto mb-8 h-1 w-24 bg-skf-yellow"></div>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-lg text-white/80">
            Vi representerar kickboxning i Sverige och verkar för idrottens utveckling
            genom tävling, utbildning och föreningsstöd.
          </p>
        </div>
      </div>
    </section>
  );
}
