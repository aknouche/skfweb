import type { Committee, CommitteeType } from '../types';
import { sanityFetch, isSanityConfigured } from '../sanity';
import { committeeQueries } from '../sanity/queries';

/**
 * Committees - Static Data with Sanity Integration
 *
 * Uses Sanity CMS if configured, otherwise falls back to static data.
 * Extracted from Word documents in docs/content/committees/
 */

// =============================================================================
// STATIC FALLBACK DATA
// =============================================================================

export const COMMITTEES: Committee[] = [
  {
    id: 'styrelsen',
    name: 'Styrelsen',
    slug: 'styrelsen',
    description:
      'Förbundsstyrelsen är Svenska Kickboxningsförbundets högsta beslutande organ mellan förbundsmötena.',
    mandate: `
Styrelsen har det övergripande ansvaret för förbundets verksamhet och säkerställer att beslut från förbundsmötet verkställs.
Styrelsen fastställer strategisk inriktning, budget och verksamhetsplan.
    `.trim(),
    responsibilities: [
      'Verkställa beslut från förbundsmöte',
      'Fastställa strategisk inriktning',
      'Godkänna budget och verksamhetsplan',
      'Representera förbundet externt',
      'Utse kommittéer och arbetsgrupper',
    ],
    members: [
      {
        name: 'Ordförande',
        role: 'Ordförande',
      },
      {
        name: 'Vice ordförande',
        role: 'Vice ordförande',
      },
    ],
    contact: {
      email: 'styrelsen@svenskakickboxning.se',
    },
  },
  {
    id: 'kommunikation',
    name: 'Kommunikationskommittén',
    slug: 'kommunikation',
    description:
      'Ansvarar för förbundets externa och interna kommunikation, webb, sociala medier och PR.',
    mandate: `
Kommunikationskommittén ska säkerställa tydlig, konsekvent och professionell kommunikation från förbundet.
    `.trim(),
    responsibilities: [
      'Webb och digitala plattformar',
      'Sociala medier',
      'Presskontakt och PR',
      'Nyhetsbrev och informationsmaterial',
      'Grafisk profil och varumärke',
    ],
    members: [
      {
        name: 'Kommunikationsansvarig',
        role: 'Ordförande',
      },
    ],
    contact: {
      email: 'kommunikation@svenskakickboxning.se',
    },
  },
  {
    id: 'fou',
    name: 'Forsknings- och utvecklingskommittén',
    slug: 'fou',
    description:
      'Ansvarar för kunskapsutveckling, idrottsutveckling och digitalisering inom förbundet.',
    mandate: 'FoU-kommittén driver utveckling av idrotten och organisationen.',
    responsibilities: [
      'Idrottsutveckling',
      'Kunskapsutveckling',
      'Digitalisering',
      'Samverkan med forskning',
    ],
    members: [
      {
        name: 'FoU-ansvarig',
        role: 'Ordförande',
      },
    ],
    contact: {
      email: 'fou@svenskakickboxning.se',
    },
  },
  {
    id: 'utbildning',
    name: 'Utbildningskommittén',
    slug: 'utbildning',
    description:
      'Ansvarar för utbildning av instruktörer, domare, tränare och andra funktionärer.',
    mandate: 'Utbildningskommittén säkerställer kvalitet i all utbildning inom förbundet.',
    responsibilities: [
      'Instruktörsutbildning',
      'Domarutbildning',
      'Tränarutbildning',
      'Certifieringssystem',
    ],
    members: [
      {
        name: 'Utbildningsansvarig',
        role: 'Ordförande',
      },
    ],
    contact: {
      email: 'utbildning@svenskakickboxning.se',
    },
  },
  {
    id: 'landslag',
    name: 'Landslagskommittén',
    slug: 'landslag',
    description: 'Ansvarar för landslagsverksamhet, uttag och internationella mästerskap.',
    mandate: 'Landslagskommittén leder arbetet med landslag senior och junior.',
    responsibilities: [
      'Uttag landslag',
      'EM/VM-deltagande',
      'Landslagsläger',
      'Scouting och talangutveckling',
    ],
    members: [
      {
        name: 'Förbundskapten Senior',
        role: 'Förbundskapten Senior',
      },
    ],
    contact: {
      email: 'landslag@svenskakickboxning.se',
    },
  },
  {
    id: 'tavling',
    name: 'Tävlingskommittén',
    slug: 'tavling',
    description: 'Ansvarar för tävlingsverksamhet, regelverk och tävlingskalender.',
    mandate: 'Tävlingskommittén säkerställer kvalitet och struktur i all tävlingsverksamhet.',
    responsibilities: [
      'Tävlingskalender',
      'Regelverk och discipliner',
      'Domarutveckling',
      'SM och nationella tävlingar',
      'Ranking',
    ],
    members: [
      {
        name: 'Tävlingsansvarig',
        role: 'Ordförande',
      },
    ],
    contact: {
      email: 'tavling@svenskakickboxning.se',
    },
  },
  {
    id: 'gradering',
    name: 'Graderingskommittén',
    slug: 'gradering',
    description: 'Ansvarar för graderingssystem, bältesgradering och kvalitetssäkring.',
    mandate: 'Graderingskommittén säkerställer enhetligt och kvalitetssäkrat graderingssystem.',
    responsibilities: [
      'Graderingssystem',
      'Bältesexamination',
      'Mästargrad',
      'Kvalitetssäkring',
    ],
    members: [
      {
        name: 'Graderingsansvarig',
        role: 'Ordförande',
      },
    ],
    contact: {
      email: 'gradering@svenskakickboxning.se',
    },
  },
  {
    id: 'marknad',
    name: 'Marknadskommittén',
    slug: 'marknad',
    description: 'Ansvarar för sponsorer, partners, marknadsföring och försäljning.',
    mandate: 'Marknadskommittén driver förbundets kommersiella utveckling.',
    responsibilities: [
      'Sponsorer och partners',
      'Marknadsföring',
      'Försäljning och shop',
      'Evenemang och arrangemang',
    ],
    members: [
      {
        name: 'Marknadsansvarig',
        role: 'Ordförande',
      },
    ],
    contact: {
      email: 'marknad@svenskakickboxning.se',
    },
  },
];

// =============================================================================
// HELPER FUNCTIONS (Sync - use static data)
// =============================================================================

export function getCommitteeBySlug(slug: string): Committee | undefined {
  return COMMITTEES.find((committee) => committee.slug === slug);
}

export function getCommitteeById(id: CommitteeType): Committee | undefined {
  return COMMITTEES.find((committee) => committee.id === id);
}

export function getAllCommittees(): Committee[] {
  return COMMITTEES;
}

// =============================================================================
// ASYNC FUNCTIONS (Try Sanity first, fallback to static)
// =============================================================================

/**
 * Transform Sanity response to match Committee interface
 */
function transformSanityCommittee(item: Record<string, unknown>): Committee {
  const contact = item.contact as Record<string, string> | undefined;
  return {
    id: (item.id as CommitteeType) || 'styrelsen',
    name: (item.name as string) || '',
    slug: (item.slug as string) || '',
    description: (item.description as string) || '',
    mandate: (item.mandate as string) || '',
    responsibilities: (item.responsibilities as string[]) || [],
    members: (item.members as Committee['members']) || [],
    contact: {
      email: contact?.email,
      phone: contact?.phone,
    },
  };
}

/**
 * Fetch all committees - tries Sanity first, falls back to static
 */
export async function fetchAllCommittees(): Promise<Committee[]> {
  if (isSanityConfigured) {
    const sanityData = await sanityFetch<Record<string, unknown>[]>(committeeQueries.all);
    if (sanityData && sanityData.length > 0) {
      return sanityData.map(transformSanityCommittee);
    }
  }
  return getAllCommittees();
}

/**
 * Fetch committee by slug - tries Sanity first, falls back to static
 */
export async function fetchCommitteeBySlug(slug: string): Promise<Committee | undefined> {
  if (isSanityConfigured) {
    const sanityData = await sanityFetch<Record<string, unknown>>(committeeQueries.bySlug(slug));
    if (sanityData) {
      return transformSanityCommittee(sanityData);
    }
  }
  return getCommitteeBySlug(slug);
}

/**
 * Fetch committee by ID - tries Sanity first, falls back to static
 */
export async function fetchCommitteeById(id: CommitteeType): Promise<Committee | undefined> {
  if (isSanityConfigured) {
    const sanityData = await sanityFetch<Record<string, unknown>>(committeeQueries.byId(id));
    if (sanityData) {
      return transformSanityCommittee(sanityData);
    }
  }
  return getCommitteeById(id);
}
