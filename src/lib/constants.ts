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

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  external?: boolean;
  badge?: string;
}

export const NAVIGATION: { main: NavItem[] } = {
  main: [
    { label: 'Start', href: '/' },
    { label: 'Om kickboxning', href: '/om-kickboxning' },
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
    {
      label: 'För klubbar',
      href: '/forbundsrabatter',
      children: [
        { label: 'Förbundsrabatter', href: '/forbundsrabatter' },
      ],
    },
    { label: 'Nyheter', href: '/nyheter' },
    { label: 'Partners', href: '/partners' },
    { label: 'Webshop', href: '#', external: true, badge: 'Inom kort' },
  ],
};

// =============================================================================
// AFFILIATE / PARTNER LINKS
// =============================================================================

export const AFFILIATE_URLS = {
  partnerPage: 'https://www.nicopiasport.se/se/?affiliate=13641&utm_source=skf_web&utm_medium=partner_page&utm_campaign=partner_page',
  clubDiscount: 'https://www.nicopiasport.se/se/?affiliate=13641&utm_source=skf_web&utm_medium=discount_page&utm_campaign=club_discount',
  memberDiscount: 'https://www.nicopiasport.se/se/?affiliate=13641&utm_source=skf_web&utm_medium=discount_page&utm_campaign=student_discount',
  toptenCatalog: 'https://www.nicopiasport.se/se/art/ifma-topten/wako-topten/?affiliate=13641&utm_source=skf_web&utm_medium=discount_page&utm_campaign=topten_catalog',
  footer: 'https://www.nicopiasport.se/se/?affiliate=13641&utm_source=skf_web&utm_medium=footer&utm_campaign=partner_link',
} as const;

// =============================================================================
// SOCIAL MEDIA
// =============================================================================

export const SOCIAL = {
  facebook: 'https://www.facebook.com/swekickbox',
  instagram: 'https://www.instagram.com/swedenkickboxing/',
} as const;

// =============================================================================
// CONTACT
// =============================================================================

export const CONTACT = {
  email: 'info@swekickboxing.se',
  address: {
    co: 'C/O Svenska Budo- och Kamportsförbundet',
    street: 'Ölandsgatan 42',
    postal: '116 63',
    city: 'Stockholm',
  },
} as const;

// =============================================================================
// CALENDAR EVENT TYPES
// =============================================================================

import type { CalendarEventType } from './types';

export const EVENT_TYPE_LABELS: Record<CalendarEventType, string> = {
  tavling: 'Tävling',
  lager: 'Läger',
  utbildning: 'Utbildning',
  forbundsmote: 'Förbundsmöte',
  ovrig: 'Övrigt',
} as const;

export const CALENDAR_FILTER_OPTIONS: { value: string; label: string }[] = [
  { value: 'alla', label: 'Alla' },
  { value: 'tavling', label: 'Tävlingar' },
  { value: 'lager', label: 'Läger' },
  { value: 'utbildning', label: 'Utbildning' },
  { value: 'forbundsmote', label: 'Möten' },
  { value: 'ovrig', label: 'Övrigt' },
];
