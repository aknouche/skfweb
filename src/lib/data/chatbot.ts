/**
 * Chatbot FAQ knowledge base
 *
 * Static, rule-based question/answer topics for the site chat widget.
 * No external API, no cost — matches visitor input against keywords.
 */

export interface ChatTopic {
  id: string;
  /** Keywords/phrases (lowercase) that trigger this topic */
  keywords: string[];
  /** Short label shown as a quick-reply chip */
  label: string;
  answer: string;
  link?: { href: string; text: string };
}

export const CHAT_TOPICS: ChatTopic[] = [
  {
    id: 'om-assistenten',
    keywords: [
      'vem är du',
      'vad heter du',
      'vem pratar jag med',
      'är du en bot',
      'är du en robot',
      'är du en människa',
      'vad kan du hjälpa',
      'vad kan du göra',
      'vad kan man fråga',
      'hur fungerar chatt',
    ],
    label: 'Om assistenten',
    answer:
      'Jag är SKF:s digitala hjälpassistent – en enkel FAQ-bot (ingen AI) som svarar på vanliga frågor om tävlingar, medlemskap, klubbar, landslaget, kommittéer, domare, kickboxning, nyheter och kontaktuppgifter. Skriv din fråga eller välj ett ämne nedan.',
  },
  {
    id: 'tavlingar',
    keywords: ['tävling', 'tavling', 'match', 'sm ', 'mästerskap', 'anmäl', 'anmälan'],
    label: 'Tävlingar',
    answer:
      'Kommande tävlingar och anmälningsinformation hittar du i kalendern. Där listas datum, plats och anmälningsdeadlines.',
    link: { href: '/kalender', text: 'Se kalendern' },
  },
  {
    id: 'medlemskap',
    keywords: ['medlem', 'gå med', 'ansluta', 'klubb starta', 'bli medlem'],
    label: 'Medlemskap',
    answer:
      'Vill du eller din klubb bli medlem i förbundet? Kontakta oss så guidar vi dig genom processen.',
    link: { href: '/kontakt', text: 'Kontakta oss' },
  },
  {
    id: 'klubbar',
    keywords: ['klubb', 'rabatt', 'förbundsrabatt', 'forbundsrabatt'],
    label: 'För klubbar',
    answer:
      'Vi erbjuder förmåner och rabatter för anslutna klubbar. Du hittar all information under För klubbar.',
    link: { href: '/forbundsrabatter', text: 'Förbundsrabatter' },
  },
  {
    id: 'landslaget',
    keywords: ['landslag', 'landslaget'],
    label: 'Landslaget',
    answer: 'Läs om det svenska landslaget, uttagningar och trupper på vår landslagssida.',
    link: { href: '/landslaget', text: 'Om landslaget' },
  },
  {
    id: 'kommitteer',
    keywords: ['kommitté', 'kommitte', 'styrelse', 'organisation'],
    label: 'Kommittéer',
    answer:
      'Förbundets arbete drivs av styrelsen och flera kommittéer. Se organisation och ansvarsområden här.',
    link: { href: '/kommitteer', text: 'Kommittéer' },
  },
  {
    id: 'domare',
    keywords: ['domare', 'döma', 'doma', 'licens'],
    label: 'Domare',
    answer: 'Information om domarutbildning och licenser hittar du på domarsidan.',
    link: { href: '/domare', text: 'Om domare' },
  },
  {
    id: 'kickboxning',
    keywords: ['vad är kickboxning', 'regler', 'discipliner', 'stilar'],
    label: 'Om kickboxning',
    answer:
      'Kickboxning omfattar flera discipliner, t.ex. Point Fighting, Light Contact och Full Contact. Läs mer om sporten här.',
    link: { href: '/om-kickboxning', text: 'Om kickboxning' },
  },
  {
    id: 'nyheter',
    keywords: ['nyhet', 'senaste', 'aktuellt'],
    label: 'Nyheter',
    answer: 'Det senaste från förbundet hittar du på nyhetssidan.',
    link: { href: '/nyheter', text: 'Nyheter' },
  },
  {
    id: 'kontakt',
    keywords: ['kontakt', 'mejl', 'mail', 'ring', 'telefon', 'adress'],
    label: 'Kontakt',
    answer:
      'Du når förbundet enklast via kontaktformuläret eller e-post på info@swekickboxning.se.',
    link: { href: '/kontakt', text: 'Kontaktuppgifter' },
  },
];

export const CHAT_FALLBACK =
  'Jag har inte svar på det just nu. Prova en av frågorna nedan, eller hör av dig till oss direkt så hjälper vi dig.';

export const CHAT_GREETING =
  'Hej! Jag är SKF:s hjälpassistent. Fråga mig om tävlingar, medlemskap, klubbar eller landslaget – eller välj ett ämne nedan.';

export function findChatTopic(input: string): ChatTopic | undefined {
  const normalized = input.toLowerCase();
  return CHAT_TOPICS.find((topic) =>
    topic.keywords.some((keyword) => normalized.includes(keyword))
  );
}
