/**
 * Dynamic Navigation Data
 *
 * Builds navigation structure with dynamic content from Sanity CMS.
 * Falls back to static data if Sanity is not configured.
 */

import type { NavItem } from '../constants';
import { getAllCommittees } from './committees';

/**
 * Build committees navigation item from static data
 */
function buildCommitteesNav(): NavItem {
  const committees = getAllCommittees();

  const committeeItems: NavItem[] = committees.map((committee) => ({
    label: committee.name,
    href: `/kommitteer/${committee.slug}`,
  }));

  const children: NavItem[] = [
    { label: 'Organisation', href: '/kommitteer/organisation' },
    ...committeeItems,
  ];

  return {
    label: 'Kommittéer',
    href: '/kommitteer',
    children: children.length > 1 ? children : undefined,
  };
}

/**
 * Fetch complete dynamic navigation structure
 */
export async function fetchDynamicNavigation(): Promise<NavItem[]> {
  const committeesNav = buildCommitteesNav();

  return [
    { label: 'Start', href: '/' },
    { label: 'Om kickboxning', href: '/om-kickboxning' },
    { label: 'Kalender', href: '/kalender' },
    committeesNav,
    { label: 'Om förbundet', href: '/om-forbundet' },
    { label: 'Landslaget', href: '/landslaget' },
    { label: 'Nyheter', href: '/nyheter' },
    { label: 'Strategi 2030', href: '/strategi-2030' },
    { label: 'Kontakt', href: '/kontakt' },
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
        { label: 'Organisation', href: '/kommitteer/organisation' },
        { label: 'Kommunikationskommittén', href: '/kommitteer/kommunikation' },
        { label: 'Forsknings- och utvecklingskommittén', href: '/kommitteer/forskning-utveckling' },
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
    { label: 'Kontakt', href: '/kontakt' },
    { label: 'Webshop', href: '#', external: true, badge: 'Inom kort' },
  ];
}
