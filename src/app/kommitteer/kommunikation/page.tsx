/**
 * Kommunikationskommittén
 * Communications committee page
 */

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kommunikationskommittén | Svenska Kickboxningsförbundet',
  description:
    'Kommunikationskommittén ansvarar för SKF:s interna och externa kommunikation, webb och digital närvaro.',
};

export default function KommunikationPage() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">
          Kommunikationskommittén
        </h1>

        <div className="mt-6 space-y-4 text-lg text-gray-700">
          <p>
            Kommunikationskommittén ansvarar för Svenska Kickboxningsförbundets interna och externa
            kommunikation. Kommitténs uppdrag är att säkerställa att information är tydlig,
            samordnad och tillgänglig – samt att förbundets verksamhet, värdegrund och utveckling
            kommuniceras på ett professionellt och förtroendeskapande sätt.
          </p>
          <p>
            Kommunikation ses inte som en stödjande sidofunktion, utan som ett strategiskt verktyg
            för att skapa förståelse, engagemang och sammanhållning inom svensk kickboxning.
          </p>
        </div>

        <div className="mx-auto my-8 h-1 w-16 bg-skf-yellow"></div>

        <div className="mt-10 space-y-12 text-gray-700">
          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Kommunikation som sammanhållande kraft
            </h2>
            <p>
              Svenska Kickboxningsförbundet är en organisation med många funktioner, nivåer och
              målgrupper. Kommunikationskommitténs arbete syftar till att skapa ett gemensamt språk
              och en tydlig riktning i all informationsspridning – från styrelsebeslut och
              regeländringar till utbildningar, tävlingar och strategiska satsningar.
            </p>
            <p className="mt-4">
              Ett centralt mål är att medlemmar och föreningar enkelt ska kunna förstå vad som
              händer i förbundet, varför beslut fattas och hur verksamheten utvecklas över tid.
              Genom tydlig kommunikation stärks transparens, delaktighet och förtroende.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Intern och extern kommunikation
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">Internt</h3>
                <ul className="ml-4 list-disc space-y-2">
                  <li>Samordna information från styrelse och kommittéer</li>
                  <li>
                    Säkerställa att beslut, riktlinjer och förändringar kommuniceras tydligt
                  </li>
                  <li>Stödja föreningar med relevant och aktuell information</li>
                </ul>
              </div>
              <div className="rounded-lg border border-gray-200 p-6">
                <h3 className="mb-3 text-lg font-bold text-gray-900">Externt</h3>
                <ul className="ml-4 list-disc space-y-2">
                  <li>
                    Positionera svensk kickboxning som en seriös och professionell idrott
                  </li>
                  <li>Synliggöra förbundets verksamhet och utveckling</li>
                  <li>Säkerställa en enhetlig kommunikation gentemot externa intressenter</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Kanaler, struktur och kvalitet
            </h2>
            <p>
              Kommunikationskommittén ansvarar för förbundets huvudsakliga kommunikationskanaler,
              däribland webbplats, nyhetsutskick och digitala plattformar. Arbetet utgår från
              gemensamma riktlinjer för tonalitet, struktur och grafisk identitet.
            </p>
            <p className="mt-4">
              En viktig del av uppdraget är att skapa förutsägbarhet och igenkänning i
              kommunikationen. Det innebär att information presenteras på ett konsekvent sätt och
              att olika delar av förbundet kommunicerar i linje med gemensamma principer.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-skf-blue">
              Kommunikation som stöd för utveckling
            </h2>
            <p className="mb-4">
              Kommunikationskommittén bidrar även till förbundets långsiktiga utveckling genom att:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              <li>Stödja genomförandet av Strategi 2030</li>
              <li>Synliggöra utbildnings- och utvecklingsinsatser</li>
              <li>Bidra till ökad förståelse för förbundets struktur och arbetssätt</li>
            </ul>
            <p className="mt-4">
              Genom ett professionellt och samordnat kommunikationsarbete skapas förutsättningar
              för både intern effektivitet och extern legitimitet.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
