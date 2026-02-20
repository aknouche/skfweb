/**
 * Utbildningskommittén
 * Education committee page
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Utbildningskommittén | Svenska Kickboxningsförbundet',
  description:
    'Utbildningskommittén ansvarar för kompetensutveckling, kunskapsspridning och nationella utbildningar inom svensk kickboxning.',
};

export default function UtbildningPage() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">Utbildningskommittén</h1>

        <div className="mt-6 space-y-4 text-lg text-gray-700">
          <p>
            Utbildningskommittén är Svenska Kickboxningsförbundets centrala funktion för
            kompetensutveckling och kunskapsspridning. Kommitténs uppdrag är att långsiktigt stärka
            kvaliteten i svensk kickboxning genom att säkerställa att tränare, ledare, domare och
            föreningar har tillgång till relevant, aktuell och tillämpbar kunskap.
          </p>
          <p>
            Utbildningskommittén utgår från förbundets Strategi 2030 och verkar för att skapa en
            sammanhållen utbildningsstruktur som stödjer hela idrottens utveckling – från
            breddverksamhet till elit. Fokus ligger inte enbart på att producera enskilda
            utbildningar, utan på att bygga system, progression och långsiktighet i
            kompetensförsörjningen.
          </p>
        </div>

        <div className="mx-auto my-8 h-1 w-16 bg-skf-yellow"></div>

        <div className="mt-10 space-y-12 text-gray-700">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Utbildning som strategiskt verktyg
            </h2>
            <p className="mb-4">
              En grundläggande princip i Utbildningskommitténs arbete är att utbildning är ett av
              förbundets viktigaste styrmedel. Genom väl utformade utbildningar kan kvalitet höjas
              på ett likvärdigt sätt i hela landet, samtidigt som föreningarna ges bättre
              förutsättningar att växa och utvecklas.
            </p>
            <p>
              Utbildningskommittén har därför ett nära samband med förbundets övergripande mål om
              höjd träningskvalitet, trygg och hållbar föreningsverksamhet, ökad tillgänglighet och
              inkludering, samt internationell konkurrenskraft. Kommittén fungerar som länken
              mellan forskning och praktik, där kunskap omsätts till konkreta utbildningsinsatser.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Kunskapsområden och innehåll
            </h2>
            <p className="mb-4">
              Utbildningskommitténs arbete omfattar flera centrala kunskapsområden inom svensk
              kickboxning. Utbildningarna utformas för att möta faktiska behov i verksamheten och
              anpassas till olika målgrupper och roller.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Tränarrollen och träningslära',
                'Idrottsspecifik teknik och metodik',
                'Fysträning och prestationsutveckling',
                'Domar- och funktionärsverksamhet',
                'Föreningsutveckling och organisationsfrågor',
                'Kommunikation och föreningssynlighet',
              ].map((area) => (
                <div
                  key={area}
                  className="rounded-lg border border-gray-200 px-4 py-3 text-sm font-medium text-gray-900"
                >
                  {area}
                </div>
              ))}
            </div>
            <p className="mt-4">
              Utbildningskommittén ansvarar även för att sprida information om relevanta externa
              utbildningsinsatser, exempelvis från RF/SISU, och för att integrera dessa i
              förbundets egen utbildningsstruktur.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Struktur och genomförande
            </h2>
            <p>
              Utbildningskommittén arbetar med både lärarledda utbildningar och digitala format. En
              central del av uppdraget är att bygga upp och förvalta en digital utbildningsplattform
              som möjliggör nationell spridning, tillgänglighet och kontinuitet.
            </p>
            <p className="mt-4 mb-4">
              Utbildningsstrukturen utvecklas stegvis och är tänkt att:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Stödja olika roller inom sporten</li>
              <li>Skapa tydlig progression över tid</li>
              <li>Vara kopplad till förbundets grenprofil och utvecklingstrappa</li>
              <li>Bidra till kvalitetssäkring och certifiering</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Kvalitet och långsiktig utveckling
            </h2>
            <p>
              Utbildningskommittén arbetar kontinuerligt med uppföljning och kvalitetssäkring.
              Genom deltagarutvärderingar, återkoppling från föreningar och dialog med övriga delar
              av förbundet säkerställs att utbildningarna är relevanta och ger faktisk effekt i
              verksamheten.
            </p>
            <p className="mt-4">
              Ambitionen är att etablera en hållbar utbildningskultur inom svensk kickboxning –
              där lärande ses som en naturlig och kontinuerlig del av idrottsutövandet, och där
              kompetensutveckling bidrar till både sportsliga resultat och en trygg, professionell
              idrottsmiljö.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
