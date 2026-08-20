/**
 * Chatbot FAQ knowledge base
 *
 * Static topic list for the site chat widget, matched against visitor
 * input with a fuzzy, typo-tolerant scorer (see matchChatTopic below).
 * When nothing scores highly enough, the widget falls back to the AI
 * endpoint at /api/chat for a general answer — see that route for the
 * knowledge boundary and prompt-injection defenses.
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

/** Confidence (0–1) above which a local FAQ match is considered good enough
 *  to answer directly, without falling back to the AI endpoint. */
export const CHAT_MATCH_THRESHOLD = 0.5;

export interface ChatMatch {
  topic: ChatTopic;
  confidence: number;
}

// Common short Swedish function words. Excluded from token-level scoring so
// that e.g. "vad" or "är" (present in the multi-word keyword phrase "vad är
// kickboxning") don't by themselves count as a topic match for unrelated
// questions that happen to share these very frequent words.
const STOPWORDS = new Set([
  'vad', 'ar', 'är', 'en', 'ett', 'det', 'den', 'de', 'för', 'och', 'att',
  'på', 'av', 'med', 'som', 'har', 'kan', 'vill', 'man', 'du', 'jag', 'vi',
  'ni', 'han', 'hon', 'inte', 'till', 'om', 'så', 'var', 'hur', 'är', 'i',
  'är', 'sig', 'sin', 'ska', 'skulle', 'blir', 'blev', 'jo',
]);

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .normalize('NFC')
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

function meaningfulTokens(text: string): string[] {
  return tokenize(text).filter((token) => !STOPWORDS.has(token) && token.length > 1);
}

/** Levenshtein edit distance, used for typo tolerance on short words. */
function levenshtein(a: string, b: string): number {
  if (a === b) return 0;
  const rows = a.length + 1;
  const cols = b.length + 1;
  const dist: number[][] = Array.from({ length: rows }, (_, i) => [i, ...Array(cols - 1).fill(0)]);
  for (let j = 0; j < cols; j++) dist[0][j] = j;
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dist[i][j] = Math.min(
        dist[i - 1][j] + 1,
        dist[i][j - 1] + 1,
        dist[i - 1][j - 1] + cost
      );
    }
  }
  return dist[rows - 1][cols - 1];
}

/**
 * Fuzzy-matches visitor input against the FAQ topics. Unlike a plain
 * substring check, this tolerates typos and word reordering: it scores
 * exact phrase hits highest, exact token hits next, and near-miss tokens
 * (edit distance 1–2, scaled to word length) lowest. Returns the
 * best-scoring topic with a 0–1 confidence, or undefined if nothing
 * scored at all.
 */
export function matchChatTopic(input: string): ChatMatch | undefined {
  const normalizedInput = input.toLowerCase();
  const inputTokens = meaningfulTokens(input);
  if (inputTokens.length === 0) return undefined;

  let best: { topic: ChatTopic; score: number } | undefined;

  for (const topic of CHAT_TOPICS) {
    let score = 0;
    for (const keyword of topic.keywords) {
      if (normalizedInput.includes(keyword)) {
        score += 2;
        continue;
      }
      for (const keywordToken of meaningfulTokens(keyword)) {
        for (const inputToken of inputTokens) {
          if (inputToken === keywordToken) {
            score += 1.5;
            continue;
          }
          // Typo tolerance only makes sense on words long enough that an
          // edit distance of 1-2 is a plausible slip, not a coincidence —
          // e.g. "tavling"/"tävling". On very short tokens (2-3 letters)
          // almost any other short word is within distance 1, which was
          // matching unrelated input like "då" against the "gå" in "gå
          // med" and triggering the membership topic for random questions.
          if (Math.min(inputToken.length, keywordToken.length) < 4) continue;
          const maxDist = keywordToken.length <= 4 ? 1 : 2;
          if (
            Math.abs(inputToken.length - keywordToken.length) <= maxDist &&
            levenshtein(inputToken, keywordToken) <= maxDist
          ) {
            score += 1;
          }
        }
      }
    }
    if (score > 0 && (!best || score > best.score)) {
      best = { topic, score };
    }
  }

  if (!best) return undefined;
  return { topic: best.topic, confidence: Math.min(best.score / 3, 1) };
}

/** Back-compat wrapper: only returns a topic when confidence clears the
 *  answer-directly threshold. */
export function findChatTopic(input: string): ChatTopic | undefined {
  const match = matchChatTopic(input);
  return match && match.confidence >= CHAT_MATCH_THRESHOLD ? match.topic : undefined;
}
