/**
 * Organisation och kommittéstruktur
 * SKF organizational structure overview
 */

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Organisation | Svenska Kickboxningsförbundet',
  description:
    'Svenska Kickboxningsförbundets organisationsmodell, kommittéstruktur och ansvarsfördelning.',
};

const COMMITTEES = [
  {
    name: 'Forsknings- och utvecklingskommittén (FoU)',
    href: '/kommitteer/forskning-utveckling',
    description:
      'Fungerar som förbundets kunskaps- och utvecklingsnav och ansvarar för att forskningsbaserad och erfarenhetsbaserad kunskap omsätts i hela verksamheten.',
    responsibilities: [
      'Utveckla och förvalta SKF:s Body of Knowledge',
      'Ta fram grenprofil, kravprofil och utvecklingstrappa',
      'Initiera och samordna forsknings- och utvecklingsinsatser',
      'Stödja förbundets verksamhet med evidensbaserade underlag',
    ],
  },
  {
    name: 'Utbildningskommittén',
    href: '/kommitteer/utbildning',
    description:
      'Ansvarar för förbundets nationella kompetensutveckling och är en central motor i genomförandet av Strategi 2030.',
    responsibilities: [
      'Utveckla och genomföra nationella utbildningar',
      'Driva och utveckla digital utbildningsplattform',
      'Etablera certifierings- och utbildningsstrukturer',
      'Säkerställa kvalitet och långsiktighet i kompetensutvecklingen',
    ],
  },
  {
    name: 'Tävlingskommittén (TK)',
    href: '/kommitteer/tavling',
    description:
      'Förbundets expertorgan för tävlingsverksamheten. Ansvarar för ett enhetligt, säkert och kvalitativt tävlingssystem.',
    responsibilities: [
      'Förvaltning och utveckling av tävlingsregelverk',
      'Sanktionering av tävlingar och mästerskap',
      'Domarutbildning och licensiering',
      'Ranking, PRO-verksamhet och medicinska riktlinjer',
    ],
  },
  {
    name: 'Graderingskommittén',
    href: '/kommitteer/gradering',
    description:
      'Ansvarar för det nationella graderingssystemet och för tilldelning av högre mästargrader.',
    responsibilities: [
      'Genomföra nationell mästargradering',
      'Tilldela högre mästargrader',
      'Utveckla och förvalta nationellt graderingssystem',
    ],
  },
  {
    name: 'Kommunikationskommittén',
    href: '/kommitteer/kommunikation',
    description:
      'Ansvarar för förbundets interna och externa kommunikation och fungerar som nav för informationsspridning och varumärkesutveckling.',
    responsibilities: [
      'Förbundets webbplats och sociala medier',
      'Internkommunikation och utskick',
      'Grafisk profil och mallar',
      'Extern positionering av svensk kickboxning',
    ],
  },
  {
    name: 'Marknadskommittén',
    href: '/kommitteer/marknad',
    description:
      'Ansvarar för etik, hållbarhet, marknad och affärsutveckling. Bidrar till att stärka förbundets långsiktiga ekonomiska och värdegrundsmässiga hållbarhet.',
    responsibilities: [
      'Fungera som referens i etiska frågor',
      'Utveckla och följa upp förbundets hållbarhetsarbete',
      'Skapa förbättrade ekonomiska förutsättningar genom sponsring',
      'Utveckla affärsmöjligheter som gynnar förbundet och medlemsföreningarna',
    ],
  },
  {
    name: 'Landslagskommittén',
    href: '/kommitteer/landslag',
    description:
      'Ansvarar för förbundets elitverksamhet och internationella representation. Leds av förbundskaptenen.',
    responsibilities: [
      'Uttagning och utveckling av senior- och juniorlandslag',
      'Planering av tränings- och tävlingsverksamhet',
      'Deltagande i internationella mästerskap',
      'Samordning av tränare och stödresurser',
    ],
  },
];

export default function OrganisationPage() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">
          Organisation och kommittéstruktur
        </h1>

        <div className="mt-6 space-y-4 text-lg text-gray-700">
          <p>
            Svenska Kickboxningsförbundet är organiserat med tydlig ansvarsfördelning mellan
            strategisk styrning, operativ ledning och specialiserade kommittéer.
            Organisationsmodellen syftar till långsiktighet, transparens och minskat
            personberoende, i linje med förbundets stadgar och Strategi 2030.
          </p>
          <p>
            Förbundets verksamhet bedrivs genom tematiskt avgränsade kommittéer med tydliga uppdrag
            och definierade ansvarsområden. Samtliga delar verkar inom ett gemensamt ramverk för
            styrning, uppföljning och kvalitet.
          </p>
        </div>

        <div className="mx-auto my-8 h-1 w-16 bg-skf-yellow"></div>

        <div className="mt-10 space-y-12 text-gray-700">
          {/* Förbundsstämma och styrelse */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Förbundsstämma och styrelse
            </h2>
            <p>
              Förbundsstämman är Svenska Kickboxningsförbundets högsta beslutande organ. Styrelsen
              är förbundets strategiska ledning och har det övergripande ansvaret för att omsätta
              stadgar, beslut och Strategi 2030 i praktisk verksamhet.
            </p>
            <p className="mt-4">
              Styrelsen ansvarar för förbundets långsiktiga inriktning, prioriteringar,
              resursfördelning och uppföljning samt för representation gentemot överordnade och
              externa organisationer.
            </p>
            <ul className="ml-6 mt-4 list-disc space-y-2">
              <li>Fastställa mål, strategi och prioriteringar</li>
              <li>Fatta övergripande beslut om verksamhet och resurser</li>
              <li>Följa upp verksamhetens måluppfyllelse</li>
              <li>Företräda förbundet externt</li>
            </ul>
          </section>

          {/* Förbundskoordinator */}
          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">Förbundskoordinator (FK)</h2>
            <p>
              Förbundskoordinatorn är förbundets högsta operativa ledare och ansvarar för att
              verkställa styrelsens beslut samt samordna den dagliga verksamheten enligt Strategi
              2030. Rollen fungerar som länk mellan den strategiska nivån och den operativa
              verksamheten.
            </p>
            <p className="mt-4">
              Förbundskoordinatorn leder förbundets operativa arbete och är ordförande i
              ledningsgruppen, som består av samtliga kommittéansvariga.
            </p>
            <ul className="ml-6 mt-4 list-disc space-y-2">
              <li>Verkställa styrelsens beslut och strategiska inriktning</li>
              <li>Samordna och följa upp kommittéernas arbete</li>
              <li>Leda ledningsgruppen och säkerställa gemensam prioritering</li>
              <li>Identifiera avvikelser, risker och resursbehov</li>
              <li>Företräda förbundet i operativa sammanhang</li>
            </ul>
          </section>

          {/* Kommittéer */}
          <section>
            <h2 className="mb-6 text-2xl font-bold text-skf-blue">Kommittéer</h2>
            <div className="space-y-6">
              {COMMITTEES.map((committee) => (
                <div
                  key={committee.name}
                  className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    <Link href={committee.href} className="hover:text-skf-blue">
                      {committee.name}
                    </Link>
                  </h3>
                  <p className="mb-4 text-gray-700">{committee.description}</p>
                  <ul className="ml-4 list-disc space-y-1 text-sm text-gray-600">
                    {committee.responsibilities.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
