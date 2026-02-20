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
      'Styrelsen fungerar som Svenska Kickboxningsförbundets strategiska och operativa ledning och har det övergripande ansvaret att omsätta visionen, stadgarna och Strategi 2030 i handling.',
    mandate:
      'Styrelsen verkar för att samordna kommittéernas arbete, fatta beslut om verksamhetens inriktning, följa upp måluppfyllelse samt representera förbundet externt. Styrelsen består av ordförande, vice ordförande, sekreterare, kassör och ledamöter med särskilda ansvarsområden.',
    responsibilities: [
      'Samordna och följa upp arbetet i samtliga kommittéer',
      'Säkerställa att verksamheten ligger i linje med Strategi 2030',
      'Fatta övergripande beslut om resurser och prioriteringar',
      'Representera SKF i kontakter med externa parter och överordnade organisationer (SB&K, RF etc.)',
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
      'Kommunikationskommittén ansvarar för Svenska Kickboxningsförbundets interna och externa kommunikation. Kommitténs uppdrag är att säkerställa att information är tydlig, samordnad och tillgänglig – samt att förbundets verksamhet, värdegrund och utveckling kommuniceras på ett professionellt och förtroendeskapande sätt.',
    mandate:
      'Kommunikation ses inte som en stödjande sidofunktion, utan som ett strategiskt verktyg för att skapa förståelse, engagemang och sammanhållning inom svensk kickboxning. Genom strukturerad kommunikation stärks både den interna organisationen och förbundets externa position.',
    responsibilities: [
      'Samordna information från styrelse och kommittéer',
      'Säkerställa att beslut, riktlinjer och förändringar kommuniceras tydligt',
      'Förbundets webbplats och sociala medier',
      'Grafisk profil och mallar',
      'Extern positionering av svensk kickboxning',
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
      'FoU-kommittén är Svenska Kickboxningsförbundets kunskaps- och utvecklingsmotor. Kommitténs uppdrag är att långsiktigt stärka kvaliteten, konkurrenskraften och hållbarheten inom svensk kickboxning genom att säkerställa att sportens utveckling vilar på vetenskaplig grund, beprövad erfarenhet och systematiskt lärande.',
    mandate:
      'FoU-kommittén arbetar tvärfunktionellt och har en central roll i att knyta samman forskning, praktik och strategisk utveckling. Kommittén bidrar med strukturer, modeller och kunskapsunderlag som genomsyrar hela förbundets verksamhet – från föreningsnivå till landslag.',
    responsibilities: [
      'Utveckla och förvalta SKF:s Body of Knowledge',
      'Ta fram grenprofil, kravprofil och utvecklingstrappa',
      'Initiera och samordna forsknings- och utvecklingsinsatser',
      'Stödja förbundets verksamhet med evidensbaserade underlag',
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
      'Utbildningskommittén är Svenska Kickboxningsförbundets centrala funktion för kompetensutveckling och kunskapsspridning. Kommitténs uppdrag är att långsiktigt stärka kvaliteten i svensk kickboxning genom att säkerställa att tränare, ledare, domare och föreningar har tillgång till relevant, aktuell och tillämpbar kunskap.',
    mandate:
      'Utbildningskommittén utgår från förbundets Strategi 2030 och verkar för att skapa en sammanhållen utbildningsstruktur som stödjer hela idrottens utveckling – från breddverksamhet till elit. Kommittén fungerar som länken mellan forskning och praktik.',
    responsibilities: [
      'Utveckla och genomföra nationella utbildningar',
      'Driva och utveckla digital utbildningsplattform',
      'Etablera certifierings- och utbildningsstrukturer',
      'Säkerställa kvalitet och långsiktighet i kompetensutvecklingen',
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
    description:
      'Landslagskommittén ansvarar för Svenska Kickboxningsförbundets elit- och landslagsverksamhet samt förbundets internationella representation. Kommitténs uppdrag är att skapa långsiktigt hållbara förutsättningar för prestationsutveckling på högsta nivå.',
    mandate:
      'Landslagsverksamheten bygger på principen att internationell framgång inte uppstår isolerat, utan är ett resultat av systematik, kvalitet och långsiktig utveckling – från föreningsmiljö till mästerskap. Kommittén leds av förbundskaptenen.',
    responsibilities: [
      'Uttagning och utveckling av senior- och juniorlandslag',
      'Planering av tränings- och tävlingsverksamhet',
      'Deltagande i internationella mästerskap',
      'Samordning av tränare och stödresurser',
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
    description:
      'Tävlingskommittén är Svenska Kickboxningsförbundets expertorgan för tävlingsverksamheten och ansvarar för att all nationell tävlingsverksamhet bedrivs på ett säkert, rättssäkert och kvalitativt sätt.',
    mandate:
      'Tävlingskommittén verkar i gränslandet mellan sportens praktiska genomförande och dess formella regelverk. Arbetet omfattar både strategiska och operativa frågor, med målet att tävlingssystemet ska vara långsiktigt hållbart, internationellt kompatibelt och anpassat till svensk idrotts kontext.',
    responsibilities: [
      'Förvaltning och utveckling av tävlingsregelverk',
      'Sanktionering av tävlingar och mästerskap',
      'Domarutbildning och licensiering',
      'Ranking, PRO-verksamhet och medicinska riktlinjer',
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
    description:
      'Graderingskommittén ansvarar för Svenska Kickboxningsförbundets nationella graderingssystem och för tilldelning av högre mästargrader. Kommitténs uppdrag är att säkerställa att graderingar inom svensk kickboxning präglas av likvärdighet, kvalitet och långsiktighet.',
    mandate:
      'Graderingssystemet är en viktig del av sportens struktur och identitet. Det fungerar både som ett verktyg för individuell utveckling och som ett sätt att upprätthålla gemensamma standarder för kunskap, färdighet och ledarskap.',
    responsibilities: [
      'Genomföra nationell mästargradering',
      'Tilldela högre mästargrader',
      'Utveckla och förvalta nationellt graderingssystem',
      'Säkerställa nationell likvärdighet i graderingar',
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
    description:
      'Marknadskommittén ansvarar för Svenska Kickboxningsförbundets arbete inom marknad, hållbarhet, etik och affärsutveckling. Kommitténs uppdrag är att skapa långsiktigt hållbara ekonomiska och organisatoriska förutsättningar för förbundets verksamhet.',
    mandate:
      'Marknadsarbetet utgår från insikten att en stabil och professionell ekonomi är en förutsättning för utveckling inom samtliga delar av verksamheten. Marknadskommittén har en strategisk, stödjande och utvecklingsinriktad roll snarare än ett operativt genomförandeansvar.',
    responsibilities: [
      'Fungera som referens i etiska frågor',
      'Utveckla och följa upp förbundets hållbarhetsarbete',
      'Skapa förbättrade ekonomiska förutsättningar genom sponsring',
      'Utveckla affärsmöjligheter som gynnar förbundet och medlemsföreningarna',
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
