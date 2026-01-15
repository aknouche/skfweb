import type { Committee } from '../types';

/**
 * Committees - Static Data (P1)
 *
 * Extracted from Word documents in docs/content/committees/
 * In P2: Replace with CMS queries
 */

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
      // Add actual members from Word doc
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
      // Extract from docs/content/committees/Verksamhetsbeskrivning_Kommunikationskommittén_SKF.docx
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
      // Extract from Verksamhetsbeskrivning_FOU-kommitten_SKF.docx
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
      // Extract from Verksamhetsbeskrivning_utbildningskommitte_SKF 1.0.docx
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
      // Extract from Verksamhetsbeskrivning_Landslagskommittén_SKF.pdf
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
      // Extract from Verksamhetsbeskrivning_Tavlingskommitten_SKF.docx
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
      // Extract from Verksamhetsbeskrivning_graderingskommitten_SKF 1.0.docx
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
      // Extract from Verksamhetsbeskrivning_Marknadskommitten_SKF.docx
    ],
    contact: {
      email: 'marknad@svenskakickboxning.se',
    },
  },
];

/**
 * Helper functions
 */

export function getCommitteeBySlug(slug: string): Committee | undefined {
  return COMMITTEES.find((committee) => committee.slug === slug);
}

export function getCommitteeById(id: Committee['id']): Committee | undefined {
  return COMMITTEES.find((committee) => committee.id === id);
}
