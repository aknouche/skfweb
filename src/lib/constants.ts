/**
 * SKF Design System Constants
 * Based on Svenska Kickboxningsförbundet Grafisk Profil
 */

// =============================================================================
// BRAND INFORMATION
// =============================================================================

export const BRAND = {
  name: 'Svenska Kickboxningsförbundet',
  shortName: 'SKF',
  tagline: 'Sveriges nationella förbund för kickboxning',
} as const;

// =============================================================================
// BRAND COLORS
// =============================================================================

/**
 * SKF Brand Colors - MANDATORY, NO DEVIATIONS
 * Source: SKF Grafisk Profil v.0.3
 */
export const COLORS = {
  primary: {
    name: 'SKF Blue',
    hex: '#0F2454',
    rgb: 'rgb(15, 36, 84)',
    cmyk: '98/87/17/4',
    usage: 'Primary background, headings, main brand areas',
  },
  accent: {
    name: 'SKF Yellow',
    hex: '#F5DC32',
    rgb: 'rgb(245, 220, 50)',
    cmyk: '4/6/92/0',
    usage: 'Accent color - USE SPARINGLY for CTAs, highlights, lines',
  },
  text: {
    name: 'Black',
    hex: '#000000',
    rgb: 'rgb(0, 0, 0)',
    cmyk: '0/0/0/100',
    usage: 'Body text, informational text, contrasting elements',
  },
} as const;

// =============================================================================
// TYPOGRAPHY
// =============================================================================

/**
 * SKF Typography System
 * Primary: Frutiger (professional production)
 * Fallback: Inter, Arial (web/office)
 */
export const TYPOGRAPHY = {
  primary: {
    family: 'Frutiger',
    weights: {
      heading: 'Frutiger LT 75 Black',
      subheading: 'Frutiger LT 65 Bold',
      body: 'Frutiger LT 55 Roman',
      caption: 'Frutiger LT 55 Roman',
    },
  },
  fallback: {
    family: 'Inter, Arial',
    note: 'Use same hierarchy as Frutiger',
  },
} as const;

// =============================================================================
// NAVIGATION
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
  },
} as const;
