/**
 * Dynamic Navigation Data
 *
 * Builds navigation structure with dynamic content from Sanity CMS.
 * Falls back to static data if Sanity is not configured.
 */

import type { NavItem } from '../constants';
import { fetchAllCommittees } from './committees';
import { fetchUpcomingCompetitions } from './competitions';
import { fetchLatestNews } from './news';

/**
 * Static base navigation items that don't need dynamic content
 */
const STATIC_NAV_ITEMS: NavItem[] = [
  { label: 'Start', href: '/' },
  { label: 'Om kickboxning', href: '/om-kickboxning' },
];

const STATIC_NAV_SUFFIX: NavItem[] = [
  { label: 'Om förbundet', href: '/om-forbundet' },
  { label: 'Landslaget', href: '/landslaget' },
  { label: 'Strategi 2030', href: '/strategi-2030' },
  { label: 'Webshop', href: '#', external: true, badge: 'Inom kort' },
];

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
 * Build competitions navigation item with dynamic children from Sanity
 */
async function buildCompetitionsNav(): Promise<NavItem> {
  const competitions = await fetchUpcomingCompetitions();

  // Only show up to 5 upcoming competitions in dropdown
  const upcomingChildren: NavItem[] = competitions.slice(0, 5).map((comp) => ({
    label: comp.title,
    href: `/tavlingar/${comp.slug}`,
  }));

  // Always include "Alla tävlingar" link
  const children: NavItem[] = [
    ...upcomingChildren,
    ...(upcomingChildren.length > 0
      ? [{ label: 'Visa alla tävlingar', href: '/tavlingar' }]
      : []),
  ];

  return {
    label: 'Tävlingar',
    href: '/tavlingar',
    children: children.length > 1 ? children : undefined,
  };
}

/**
 * Build news navigation item with dynamic children from Sanity
 */
async function buildNewsNav(): Promise<NavItem> {
  const news = await fetchLatestNews(4);

  // Only show up to 4 latest news in dropdown
  const newsChildren: NavItem[] = news.map((article) => ({
    label: article.title.length > 40 ? article.title.slice(0, 40) + '...' : article.title,
    href: `/nyheter/${article.slug}`,
  }));

  // Always include "Alla nyheter" link
  const children: NavItem[] = [
    ...newsChildren,
    ...(newsChildren.length > 0 ? [{ label: 'Visa alla nyheter', href: '/nyheter' }] : []),
  ];

  return {
    label: 'Nyheter',
    href: '/nyheter',
    children: children.length > 1 ? children : undefined,
  };
}

/**
 * Fetch complete dynamic navigation structure
 * Fetches committees, competitions, and news from Sanity in parallel
 */
export async function fetchDynamicNavigation(): Promise<NavItem[]> {
  // Fetch all dynamic content in parallel
  const [committeesNav, competitionsNav, newsNav] = await Promise.all([
    buildCommitteesNav(),
    buildCompetitionsNav(),
    buildNewsNav(),
  ]);

  return [
    ...STATIC_NAV_ITEMS,
    competitionsNav,
    committeesNav,
    ...STATIC_NAV_SUFFIX.slice(0, 2), // Om förbundet, Landslaget
    newsNav,
    ...STATIC_NAV_SUFFIX.slice(2), // Strategi 2030, Webshop
  ];
}

/**
 * Get static navigation (for fallback or client-side)
 */
export function getStaticNavigation(): NavItem[] {
  return [
    { label: 'Start', href: '/' },
    { label: 'Om kickboxning', href: '/om-kickboxning' },
    { label: 'Tävlingar', href: '/tavlingar' },
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
