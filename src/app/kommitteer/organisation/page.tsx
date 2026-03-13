/**
 * Organisation och kommittéstruktur
 * SKF organizational structure overview
 */

import type { Metadata } from 'next';
import Link from 'next/link';
import { getAllCommittees } from '@/lib/data/committees';

export const metadata: Metadata = {
  title: 'Organisation | Svenska Kickboxningsförbundet',
  description:
    'Svenska Kickboxningsförbundets organisationsmodell, kommittéstruktur och ansvarsfördelning.',
};

export default function OrganisationPage() {
  const committees = getAllCommittees();

  // Styrelsen is shown separately at the top; exclude it from the committee grid
  const styrelsen = committees.find((c) => c.id === 'styrelsen');
  const otherCommittees = committees.filter((c) => c.id !== 'styrelsen');

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
            {styrelsen && (
              <ul className="ml-6 mt-4 list-disc space-y-2">
                {styrelsen.responsibilities.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            )}
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
              {otherCommittees.map((committee) => (
                <div
                  key={committee.id}
                  className="rounded-lg border border-gray-200 p-6 transition-shadow hover:shadow-md"
                >
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    {committee.name}
                  </h3>
                  <p className="mb-4 text-gray-700">{committee.description}</p>
                  {committee.responsibilities.length > 0 && (
                    <ul className="ml-4 list-disc space-y-1 text-sm text-gray-600">
                      {committee.responsibilities.map((r) => (
                        <li key={r}>{r}</li>
                      ))}
                    </ul>
                  )}
                  <Link
                    href={`/kommitteer/${committee.slug}`}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-skf-blue hover:underline"
                  >
                    Läs mer
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
