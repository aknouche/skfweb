/**
 * Dynamic Navigation Data
 *
 * Builds navigation structure with dynamic content from Sanity CMS.
 * Falls back to static data if Sanity is not configured.
 */

import type { NavItem } from '../constants';
import { fetchAllCommittees } from './committees';

/**
 * Build committees navigation item with dynamic children from Sanity
 */
async function buildCommitteesNav(): Promise<NavItem> {
  const committees = await fetchAllCommittees();

  const children: NavItem[] = committees.map((committee) => ({
    label: committee.name,
    href: `/kommitteer/${committee.slug}`,
  }));

  return {
    label: 'Kommittéer',
    href: '/kommitteer',
    children: children.length > 0 ? children : undefined,
  };
}

/**
 * Fetch complete dynamic navigation structure
 * Only Kommittéer has a dropdown with dynamic content from Sanity.
 * Nyheter and Kalender are direct links (no dropdowns).
 */
export async function fetchDynamicNavigation(): Promise<NavItem[]> {
  const committeesNav = await buildCommitteesNav();

  return [
    { label: 'Start', href: '/' },
    { label: 'Om kickboxning', href: '/om-kickboxning' },
    { label: 'Kalender', href: '/kalender' },
    committeesNav,
    { label: 'Om förbundet', href: '/om-forbundet' },
    { label: 'Landslaget', href: '/landslaget' },
    { label: 'Nyheter', href: '/nyheter' },
    { label: 'Strategi 2030', href: '/strategi-2030' },
    { label: 'Webshop', href: '#', external: true, badge: 'Inom kort' },
  ];
}

/**
 * Get static navigation (for fallback or client-side)
 */
export function getStaticNavigation(): NavItem[] {
  return [
    { label: 'Start', href: '/' },
    { label: 'Om kickboxning', href: '/om-kickboxning' },
    { label: 'Kalender', href: '/kalender' },
    {
      label: 'Kommittéer',
      href: '/kommitteer',
      children: [
        { label: 'Styrelsen', href: '/kommitteer/styrelsen' },
        { label: 'Kommunikationskommittén', href: '/kommitteer/kommunikation' },
        { label: 'Forsknings- och utvecklingskommittén', href: '/kommitteer/fou' },
        { label: 'Utbildningskommittén', href: '/kommitteer/utbildning' },
        { label: 'Landslagskommittén', href: '/kommitteer/landslag' },
        { label: 'Tävlingskommittén', href: '/kommitteer/tavling' },
        { label: 'Graderingskommittén', href: '/kommitteer/gradering' },
        { label: 'Marknadskommittén', href: '/kommitteer/marknad' },
      ],
    },
    { label: 'Om förbundet', href: '/om-forbundet' },
    { label: 'Landslaget', href: '/landslaget' },
    { label: 'Nyheter', href: '/nyheter' },
    { label: 'Strategi 2030', href: '/strategi-2030' },
    { label: 'Webshop', href: '#', external: true, badge: 'Inom kort' },
  ];
}
