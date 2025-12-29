/**
 * SKF Design System Constants
 * Based on Svenska Kickboxningsförbundet Grafisk Profil
 *
 * These constants provide type-safe access to brand values
 * and are used throughout the application.
 */

// =============================================================================
// BRAND INFORMATION
// =============================================================================

export const BRAND = {
  name: 'Svenska Kickboxningsförbundet',
  shortName: 'SKF',
  tagline: 'Sveriges nationella förbund för kickboxning',
  founded: 1985, // Update with correct year
} as const;

// =============================================================================
// COLORS
// Based on SKF Grafisk Profil Section 4
// =============================================================================

export const COLORS = {
  /**
   * Primary Blue
   * CMYK: 98 / 87 / 17 / 4
   * RGB: 15 / 36 / 84
   * Main brand color - stable, authoritative, official
   */
  blue: {
    hex: '#0F2454',
    rgb: 'rgb(15, 36, 84)',
    cmyk: { c: 98, m: 87, y: 17, k: 4 },
  },

  /**
   * Accent Yellow
   * CMYK: 4 / 6 / 92 / 0
   * RGB: 245 / 220 / 50
   * Accent color - energy, movement, contrast
   * Use sparingly, never dominate large areas
   */
  yellow: {
    hex: '#F5DC32',
    rgb: 'rgb(245, 220, 50)',
    cmyk: { c: 4, m: 6, y: 92, k: 0 },
  },

  /**
   * Black
   * For text and contrast elements
   */
  black: {
    hex: '#000000',
    rgb: 'rgb(0, 0, 0)',
    cmyk: { c: 0, m: 0, y: 0, k: 100 },
  },

  /**
   * White
   * For backgrounds and text on dark surfaces
   */
  white: {
    hex: '#FFFFFF',
    rgb: 'rgb(255, 255, 255)',
  },
} as const;

// =============================================================================
// TYPOGRAPHY
// Based on SKF Grafisk Profil Section 5
// =============================================================================

export const TYPOGRAPHY = {
  /**
   * Primary font: Frutiger
   * Fallbacks: Inter (free), Arial (system)
   */
  fontFamily: {
    primary: ['Frutiger', 'Inter', 'Arial', 'sans-serif'],
    // Same family for headings, different weights
    heading: ['Frutiger', 'Inter', 'Arial', 'sans-serif'],
  },

  /**
   * Font weights
   * H1: Black (Frutiger LT 75 Black)
   * H2-H3: Bold (Frutiger LT 65 Bold)
   * Body: Roman (Frutiger LT 55 Roman)
   */
  fontWeight: {
    black: 800, // Frutiger LT 75 Black equivalent
    bold: 700, // Frutiger LT 65 Bold equivalent
    semibold: 600,
    regular: 400, // Frutiger LT 55 Roman equivalent
  },
} as const;

// =============================================================================
// NAVIGATION
// Main site navigation structure
// =============================================================================

export const NAVIGATION = {
  main: [
    { label: 'Start', href: '/' },
    { label: 'Tävlingar', href: '/tavlingar' },
    { label: 'Landslaget', href: '/landslaget' },
    { label: 'Om förbundet', href: '/om-forbundet' },
    { label: 'Kommittéer', href: '/kommitteer' },
    { label: 'Nyheter', href: '/nyheter' },
  ],
  cta: [
    { label: 'Bli medlem', href: '/bli-medlem', primary: true },
    { label: 'Hitta klubb', href: '/hitta-klubb', primary: false },
  ],
} as const;

// =============================================================================
// SOCIAL MEDIA
// =============================================================================

export const SOCIAL = {
  facebook: 'https://facebook.com/svenskakickboxning',
  instagram: 'https://instagram.com/svenskakickboxning',
  youtube: 'https://youtube.com/@svenskakickboxning',
} as const;

// =============================================================================
// CONTACT
// =============================================================================

export const CONTACT = {
  email: 'info@svenskakickboxning.se',
  address: {
    street: 'Adress här',
    postal: '000 00',
    city: 'Stockholm',
    country: 'Sverige',
  },
} as const;
