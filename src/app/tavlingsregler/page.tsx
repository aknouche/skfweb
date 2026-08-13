/**
 * Tävlingsregler
 * Overview of the official competition rules for Swedish kickboxing,
 * with downloadable PDF rulebooks.
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tävlingsregler | Svenska Kickboxningsförbundet',
  description:
    'Officiella tävlingsregler för svensk kickboxning – huvudboken för fullkontaktsdisciplinerna (K1, Low Kick, Full Contact) och bilagan för lätt kontakt (Kick Light, Light Contact). Ladda ner regelböckerna som PDF.',
};

interface Rulebook {
  title: string;
  subtitle: string;
  file: string;
  updated: string;
  intro: string;
  disciplines: { code: string; name: string; note: string }[];
  highlights: string[];
}

const RULEBOOKS: Rulebook[] = [
  {
    title: 'Huvudbok – Fullkontakt',
    subtitle: 'K1-style · Low Kick · Full Contact (samt junior)',
    file: '/documents/Regelbok_Svensk-Kickboxning_Huvudbok_K1_LK_FC_K1J_LKJ_240210.pdf',
    updated: 'Uppdaterad 2023-06-10',
    intro:
      'Huvudboken innehåller det kompletta regelverket för svensk kickboxning i fullkontaktsdisciplinerna. Här beskrivs allt från ringens mått och obligatorisk skyddsutrustning till viktklasser, ronder, poängbedömning, tillåtna träffytor, förseelser och domarnas ansvar. Det är grundregelverket som alla övriga bilagor utgår från.',
    disciplines: [
      { code: 'K1', name: 'K1-style', note: 'Hand- och bentekniker, låga sparkar samt knän tillåts' },
      { code: 'LK', name: 'Low Kick', note: 'Hand- och bentekniker samt låga sparkar tillåts' },
      { code: 'FC', name: 'Full Contact', note: 'Hand- och bentekniker ovanför bältet tillåts' },
      { code: 'K1J / LKJ', name: 'Junior (16–17 år)', note: 'Förhöjd kontaktgrad utan K.O. som vinstgivande moment' },
    ],
    highlights: [
      'Obligatorisk läkarundersökning på tävlingsdagen',
      'Ronder: 2 eller 3 ronder à 2 minuter med 1 minuts rondvila',
      'Senior får gå max 3 matcher per dag, junior max 2',
      'Viktklasser och skyddsutrustning per disciplin',
      'Ålder: senior 18 år och äldre, junior 16–17 år (junior möter aldrig senior)',
    ],
  },
  {
    title: 'Bilaga – Lätt Kontakt',
    subtitle: 'Kick Light · Light Contact (samt ungdom och barn)',
    file: '/documents/Regelbok_Svensk-Kickboxning_Latt-Kontakt_240616.pdf',
    updated: 'Uppdaterad 2023-06-16',
    intro:
      'Denna bilaga kompletterar huvudboken och gäller de lätta kontaktdisciplinerna. Den avgörande skillnaden mot fullkontakt är kontaktgraden – den ska vara kontrollerad så att båda tävlande kan genomföra matchen med bibehållen god teknik och minimal skaderisk. För detaljer som inte tas upp här hänvisas till huvudboken.',
    disciplines: [
      { code: 'KL', name: 'Kick Light (15 år och äldre)', note: 'Ungdom (KLU) 11–14 år och barn (KLB) 7–10 år' },
      { code: 'LC', name: 'Light Contact (15 år och äldre)', note: 'Ungdom (LCU) 11–14 år och barn (LCB) 7–10 år' },
    ],
    highlights: [
      'Kontrollerad kontaktgrad – för hård kontakt är en förseelse',
      'Ingen läkarundersökning krävs på tävlingsdagen',
      'Får arrangeras på öppen yta (minst 8×8 m), inte enbart i ring',
      'Poäng: godkänd träff ger 1 klick, spark mot huvudet ger 2 klick',
      'Extra höga krav på kontroll i ungdoms- och barnklasser',
    ],
  },
];

function DownloadIcon() {
  return (
    <svg
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
      />
    </svg>
  );
}

export default function TavlingsreglerPage() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        {/* Page Title */}
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">Tävlingsregler</h1>

        {/* Intro paragraph */}
        <p className="mt-6 text-lg text-gray-700">
          Svensk kickboxning tävlas enligt ett gemensamt regelverk som utgår från de internationella
          reglerna inom WAKO. Regelverket består av en huvudbok för fullkontaktsdisciplinerna och en
          bilaga för lätt kontakt. Nedan hittar du en översikt av vad varje dokument omfattar samt
          möjlighet att ladda ner den fullständiga regelboken som PDF.
        </p>

        {/* Yellow accent divider */}
        <div className="mt-8 h-1 w-24 bg-skf-yellow" aria-hidden="true" />

        {/* Rulebook cards */}
        <div className="mt-12 space-y-10">
          {RULEBOOKS.map((book) => (
            <article
              key={book.file}
              className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm lg:p-8"
            >
              <header>
                <h2 className="text-2xl font-bold text-skf-blue lg:text-3xl">{book.title}</h2>
                <p className="mt-1 text-sm font-medium text-gray-500">{book.subtitle}</p>
              </header>

              <p className="mt-5 text-gray-700">{book.intro}</p>

              {/* Disciplines */}
              <div className="mt-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-skf-blue">
                  Discipliner
                </h3>
                <ul className="mt-3 space-y-2">
                  {book.disciplines.map((d) => (
                    <li key={d.code} className="flex gap-3 text-gray-700">
                      <span className="mt-0.5 inline-flex min-w-[4.5rem] shrink-0 justify-center rounded bg-skf-blue px-2 py-0.5 text-xs font-bold text-white">
                        {d.code}
                      </span>
                      <span>
                        <span className="font-medium text-black">{d.name}</span>
                        {' – '}
                        {d.note}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div className="mt-6">
                <h3 className="text-sm font-bold uppercase tracking-wide text-skf-blue">
                  I korthet
                </h3>
                <ul className="mt-3 ml-5 list-disc space-y-1.5 text-gray-700">
                  {book.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>

              {/* Download */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={book.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-skf-blue px-5 py-3 text-sm font-bold text-white no-underline transition-colors duration-200 hover:bg-skf-blue/90"
                >
                  <DownloadIcon />
                  Ladda ner PDF
                </a>
                <span className="text-sm text-gray-500">{book.updated} · PDF</span>
              </div>
            </article>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-10 text-sm text-gray-500">
          Regelböckerna publiceras av Svenska Kickboxningsförbundet och kan uppdateras. Vid eventuella
          tolkningsfrågor är det den fullständiga regeltexten och förbundets domarutbildning som
          gäller.
        </p>
      </div>
    </main>
  );
}
