/**
 * Dynamic Navigation Data
 *
 * Builds navigation structure with dynamic content from Sanity CMS.
 * Falls back to static data if Sanity is not configured.
 */

import type { NavItem } from '../constants';

/**
 * Fetch complete dynamic navigation structure
 */
const BASE_NAV: NavItem[] = [
  { label: 'Start', href: '/' },
  {
    label: 'Om kickboxning',
    href: '/om-kickboxning',
    children: [
      { label: 'Om kickboxning', href: '/om-kickboxning' },
      { label: 'Tävlingsregler', href: '/tavlingsregler' },
    ],
  },
  { label: 'Kalender', href: '/kalender' },
  {
    label: 'Förbundet',
    href: '/om-forbundet',
    children: [
      { label: 'Kommittéer', href: '/kommitteer' },
      { label: 'Landslaget', href: '/landslaget' },
      { label: 'Mästargrad', href: '/forbundet/mastargrad' },
      { label: 'Strategi 2030', href: '/strategi-2030' },
      { label: 'Domare', href: '/domare' },
      { label: 'Kontakt', href: '/kontakt' },
    ],
  },
  { label: 'Nyheter', href: '/nyheter' },
  { label: 'Partners', href: '/partners' },
  { label: 'Webshop', href: '#', external: true, badge: 'Inom kort' },
];

export async function fetchDynamicNavigation(): Promise<NavItem[]> {
  return BASE_NAV;
}

/**
 * Get static navigation (for fallback or client-side)
 */
export function getStaticNavigation(): NavItem[] {
  return BASE_NAV;
}
