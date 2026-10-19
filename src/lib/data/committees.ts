import type { Committee, CommitteeType } from '../types';

/**
 * Committees - Static Data
 *
 * Committee info is stable organisational data — managed as static content.
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
        name: 'Håkan Ozan',
        role: 'Ordförande',
        bio: [
          'Håkan har varit aktiv i sporten i snart 40 år som utövare, instruktör, ringdomare och ledare, och har 4:e dan i kickboxning sedan 2022. Han tävlade mellan 1994 och 2011 och gick 70 matcher, varav 12 som proffs. Bland meriterna finns VM-guld i muaythai 2009 och World Cup-guld i Low Kick 2007.',
          'Håkan har varit licensierad kickboxningsinstruktör sedan 1996. År 2010 grundade han OneChai Muaythai & K1 IF, där han har varit ordförande sedan starten.',
          'Han var förbundsordförande i SKF 2010–2016 och är det åter sedan 2024. Han har tagit fram förbundets Strategi 2030 och den nya kommittéorganisationen. Sedan 2010 ansvarar han för SKF PRO, och 2011 införde han de svenska proffsreglerna. Håkan företräder Sverige i WAKO och är sedan 2025 ledamot i WAKO Innovation and Technology Committee.',
          'Håkan har över 30 års erfarenhet av styrelsearbete i näringslivet, idrottsrörelsen och den idéburna sektorn, varav som ordförande i elva organisationer. Han är certifierad styrelseledamot genom Styrelseakademien och diplomerad vd genom Di Akademi.',
        ],
        highlights: [
          '4:e dan i kickboxning (2022)',
          'VM-guld i muaythai 2009, World Cup-guld i Low Kick 2007',
          'Förbundsordförande 2010–2016 och sedan 2024',
          'Upphovsman till Strategi 2030',
          'Ledamot i WAKO Innovation and Technology Committee (2025–)',
        ],
      },
      {
        name: 'Camilla Jörneheim',
        role: 'Vice ordförande',
        bio: [
          'Camilla har en bakgrund inom kickboxning som tävlande, coach, internationell tatamidomare och domarutbildare. Som tävlande representerade hon Ängelholms Kickboxningsklubb och tog bland annat SM-silver i både Light Contact och Full Contact samt guld i Light Contact på Danish Open. Hon har dömt vid flera internationella mästerskap, däribland EM och VM, och fick internationell domarlicens på A-nivå 2022. Hon har även medverkat som instruktör för tatamidomare vid Scandinavian Referee Camp tillsammans med internationella utbildare.',
          'Camilla har erfarenhet av styrelsearbete på både förenings- och förbundsnivå. Sedan 2009 har hon under olika perioder varit aktiv i flera klubbstyrelser, och sedan 2015 ingår hon i Svenska Kickboxningsförbundets styrelse, där hon har haft uppdrag som sekreterare, vice ordförande och ordförande.',
        ],
      },
      {
        name: 'Viktor Nordh',
        role: 'Kassör',
        bio: [
          'Viktor har en bakgrund som tävlande i fullkontaktkickboxning, där han representerade Ironman i Göteborg och gick cirka 50 matcher. Erfarenheten från ringen ger honom förståelse för de aktivas villkor och för vad tävlingsverksamheten kräver av både utövare och föreningar.',
          'Viktor är högskoleingenjör i automatiseringsteknik och har en kandidatexamen i socialpsykologi samt en Master of Business Administration (MBA). Han förenar därmed teknisk, beteendevetenskaplig och ekonomisk kompetens. Till vardags arbetar han som projektledare på Stadsfastighetsförvaltningen i Göteborgs Stad, där han leder projekt i en stor offentlig organisation.',
          'Som kassör ansvarar Viktor för förbundets ekonomiska förvaltning. Det omfattar budget och uppföljning, bokföring och attestering, ekonomiska rapporter till styrelsen samt årsbokslut och samarbetet med revisorerna. Kassören stödjer också kommittéerna i deras ekonomiska planering och är förbundets kontaktperson gentemot SB&K och Riksidrottsförbundet i ekonomiska frågor.',
        ],
      },
      {
        name: 'Linnea Delen',
        role: 'Sekreterare',
        bio: [
          'Linnea är sekreterare i Svenska Kickboxningsförbundets styrelse och i Kalvhagens kickboxningsförening. Genom sina styrelseuppdrag har hon fått erfarenhet av föreningsadministration, styrelsearbete och av att vara delaktig i beslut och utvecklingsfrågor. Hon värdesätter att få bidra även utanför tränings- och tävlingsverksamheten och att arbeta för bättre förutsättningar för både föreningar och aktiva inom sporten.',
          'Linnea började träna kickboxning 2022 och har sedan dess tävlat aktivt, coachat och instruerat på olika nivåer. Hon har bland annat två SM-guld i Kick Light, SM-guld i Allstyle fullkontakt och guld i Scandinavian Battle, samt två brons från World Cup 2026. Hon är även antagen till landslaget och har deltagit på landslagsläger i Sverige och Finland. Sedan 2024 instruerar hon barn, ungdomar, tjejer och vuxna på olika nivåer och har i dag ett stort ansvar för klubbens träningsverksamhet. Hon har även erfarenhet som tävlingscoach och arbetar extra som personlig tränare med inriktning mot kampsport.',
        ],
      },
      {
        name: 'Björn Nordberg (tidigare Rudman)',
        role: 'Ledamot och förbundskoordinator',
        image: {
          url: '/images/committees/bjorn-nordberg.jpg',
          alt: 'Porträtt av Björn Nordberg, ledamot och förbundskoordinator',
        },
        bio: [
          'Björn Nordberg (tidigare Rudman) har varit aktiv inom kickboxning sedan 1998 och har 4:e dan i kickboxning. Till vardags är han terapeut, författare och föreläsare inom psykisk hälsa, psykologisk resiliens och utmattning.',
          'I förbundet har Björn varit förbundsordförande, vice ordförande, utbildningsansvarig och fysansvarig för landslagen. Han är medgrundare till FoU-kommittén och har lett både den och Utbildningskommittén, där han är kvar som ledamot under överlämningen. Han är förbundskoordinator sedan den 9 september 2026.',
          'Förbundskoordinatorn är förbundets högsta operativa ledare. Rollen verkställer styrelsens beslut, samordnar och följer upp kommittéernas arbete och leder ledningsgruppen, som består av samtliga kommittéansvariga. Förbundskoordinatorn är också förbundets kontaktperson gentemot SB&K, Riksidrottsförbundet och WAKO.',
        ],
      },
      {
        name: 'Jonas Ånmo Sandqvist',
        role: 'Suppleant',
        bio: [
          'Uppdraget i förbundsstyrelsen är Jonas första styrelseuppdrag. Numera är han även ledamot i styrelsen för en mindre hobbyförening.',
          'Jonas har tränat och coachat muaythai och kickboxning i cirka 20 år. I dag är han assisterande coach på Fightzone IF, där han coachar både vuxen- och barngrupper, och han har coachat tävlande på både amatör- och proffsnivå. Hans kampsportsresa började med boxning och Combat Ju-Jutsu och fortsatte sedan med MMA och brasiliansk jiu-jitsu, där han både har tävlat och coachat.',
        ],
      },
      {
        name: 'Lina Svendsén Eriksson',
        role: 'Suppleant',
        bio: [
          'Lina har mångårig erfarenhet av styrelsearbete inom olika idrottsföreningar och ett brett engagemang i föreningslivet. I dag ansvarar hon för administration och ekonomi i tre kampsportsklubbar. Hon utövar själv kickboxning och är A-klassad poängdomare.',
          'För Lina är öppen kommunikation, tydlighet och transparens viktiga grundpelare i ett välfungerande föreningsliv, där alla medlemmar ska ges möjlighet att vara delaktiga och känna sig trygga. Gemenskap och inkludering är särskilt viktigt för henne, och paraidrotten ligger henne därför extra varmt om hjärtat.',
        ],
      },
    ],
    contact: {
      email: 'styrelsen@swekickboxing.se',
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
      email: 'kommunikation@swekickboxing.se',
    },
  },
  {
    id: 'fou',
    name: 'Forsknings- och utvecklingskommittén',
    slug: 'forskning-utveckling',
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
        name: 'Janna Hatsue Lofvars',
        role: 'Ordförande',
        email: 'fou@swekickboxing.se',
        bio: [
          'Janna har varit aktiv inom kampsporten sedan omkring 2007. Hon har tävlat i kickboxning upp till SM-nivå och har även utövat thaiboxning, submission wrestling och BJJ. I dag är hon verksam inom stående kamp som tränare. Hon har gått tränarprogrammet vid Högskolan Dalarna och har en masterexamen. Hon är också utbildad coach i styrkelyft och har stått på pallen som veteran vid SM i bänkpress.',
          'Janna har varit en del av FoU-kommitténs arbete sedan tidigare. I förbundets pilotprojekt om landslagets fysprofil ansvarade hon för den vetenskapliga datainsamlingen och bearbetningen av mätvärdena. Hon är ordförande sedan den 14 oktober 2026.',
        ],
      },
    ],
    contact: {
      email: 'fou@swekickboxing.se',
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
      'Utveckla och genomföra nationella utbildningar för tränare och ledare',
      'Teknikdokument, webbinarier och tränarforum',
      'Driva och utveckla digital utbildningsplattform',
      'Etablera certifierings- och utbildningsstrukturer',
      'Säkerställa kvalitet och långsiktighet i kompetensutvecklingen',
    ],
    members: [
      {
        name: 'Daniel Hansson',
        role: 'Ordförande',
        bio: [
          'Daniel har 35 år i kampsporten, med kyokushin karate som grund. Han har över 30 års tävlingserfarenhet och 20 VM-guld i fyra olika organisationer. Han har också instruerat i över 30 år och coachat fighters i kickboxning, karate, thaiboxning och boxning. Hans främsta merit som coach är ett VM-guld i kumite.',
          'Han har 2:a mästargraden genom Svenska Kickboxningsförbundet och 3:e gradens svarta bälte i både BBA Allstyle Kickboxing och World Traditional Karate Association. De senaste åren har han fördjupat sig i holländsk kickboxning, med ett tiotal träningsresor till ledande professionella gym. Daniel leder Östersunds Kampsport. Han är ordförande sedan den 14 oktober 2026.',
        ],
      },
    ],
    contact: {
      email: 'utbildning@swekickboxing.se',
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
      email: 'coach@swekickboxing.se',
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
      email: 'tavling@swekickboxing.se',
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
        name: 'Mikael Bergh',
        role: 'Ordförande',
        bio: [
          'Mikael började träna kickboxning 1997 på Jönköpings Kickboxningsklubb och blev hjälpinstruktör hösten 1998. Han har coachat sedan 2003 och blev tävlingsansvarig i klubben 2007. Mellan 1998 och 2006 tävlade han och gick cirka 60 matcher.',
          'I förbundsstyrelsen har Mikael suttit som sekreterare och vice ordförande, och han var ordförande för valberedningen under ett år. Han har även varit domarutbildare för förbundet. Sedan två år är han ordförande i Graderingskommittén.',
        ],
      },
    ],
    contact: {
      email: 'gradering@swekickboxing.se',
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
        name: 'Björn Ljungdahl',
        role: 'Ordförande',
        bio: [
          'Björn har varit aktiv inom sporten sedan 1992, haft uppdrag som ledare och tränare sedan 1999 och varit föreningskassör sedan 2005. Som projektledare har han arrangerat tre SM och två proffsgalor. Han är även utbildad ringdomare.',
          'I förbundsstyrelsen har Björn haft uppdrag som revisorsersättare, ordinarie ledamot och ordförande. I dag är han ordförande i Marknadskommittén.',
        ],
      },
    ],
    contact: {
      email: 'marknad@swekickboxing.se',
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

