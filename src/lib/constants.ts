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
