import type { Metadata } from 'next';
import { MastarTable } from '@/components/sections/MastarTable';

export const metadata: Metadata = {
  title: 'Mästargrad | Svenska Kickboxningsförbundet',
  description:
    'Graderingskrav för mästargraden i svensk kickboxning samt förteckning över alla mästargraderade.',
};

export default function MastarGradPage() {
  return (
    <main className="py-12 lg:py-16">
      <div className="container-narrow">

        {/* ── Page title ── */}
        <h1 className="text-3xl font-bold text-skf-blue lg:text-4xl">Mästargrad</h1>
        <div className="mt-1 h-1 w-20 rounded bg-skf-yellow" aria-hidden="true" />
        <p className="mt-6 text-lg text-gray-700">
          Graderingskrav för mästargraden i svensk kickboxning. Mästargraden innebär att man
          behärskar kickboxningens grundtekniker och att man har integrerat dem i ett eget
          fungerande kampsätt.
        </p>

        {/* ── Examination ── */}
        <section className="mt-10 space-y-4 text-gray-700" aria-labelledby="examination-heading">
          <h2 id="examination-heading" className="text-2xl font-bold text-skf-blue">
            Examination
          </h2>
          <p>
            Graderingskommittén är examinator och måste närvara med minst en representant vid
            graderingstillfället. Graderingskommittén kan utse andra att fungera som rådgivande
            examinatorer. Examinationsgruppen måste bestå av minst tre personer.
          </p>
          <p>
            Söker någon ur examinationsgruppen höjd mästargrad tillsätts ytterligare en grupp
            för bedömning av detta.
          </p>
        </section>

        {/* ── Genomförande + Grundtekniker ── */}
        <section className="mt-10 space-y-4 text-gray-700" aria-labelledby="genomforande-heading">
          <h2 id="genomforande-heading" className="text-2xl font-bold text-skf-blue">
            Graderingens genomförande
          </h2>
          <p>
            De exakta formerna för graderingen kan variera. Obligatoriska moment är att visa
            grundteknikerna, visa kombinationer, beskriva en teknik ingående samt 25 ronder fri
            kickboxning.
          </p>

          <h3 className="text-lg font-semibold text-skf-blue">Grundtekniker</h3>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm sm:grid-cols-3">
            {[
              'Rakt slag',
              'Krok',
              'Uppercut',
              'Rundspark',
              'Sidspark',
              'Frontspark',
              'Yxspark',
              'Krokspark',
              'Bakåtspark',
              'Snurrande krokspark',
              'Fotsvep',
              'Skifta grundställning för slag eller spark',
            ].map((t) => (
              <li key={t} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-skf-yellow" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </section>

        {/* ── Bedömning ── */}
        <section className="mt-10 space-y-4 text-gray-700" aria-labelledby="bedomning-heading">
          <h2 id="bedomning-heading" className="text-2xl font-bold text-skf-blue">
            Bedömning
          </h2>
          <dl className="space-y-4">
            {[
              {
                term: 'Avstånd',
                desc: 'Aspiranten skall visa att han eller hon behärskar kampens alla avstånd.',
              },
              {
                term: 'Kraft',
                desc: 'Aspiranten skall visa att han eller hon kan utföra alla tekniker med kraft, stadga och smidighet.',
              },
              {
                term: 'Uthållighet',
                desc: 'Aspiranten skall visa att han eller hon kan genomföra hela graderingen med energi i varje del.',
              },
              {
                term: 'Vilja',
                desc: 'Aspiranten skall visa att han eller hon kan genomföra hela graderingen med kämparglöd. Att under graderingen maska innebär automatiskt att man blir underkänd.',
              },
              {
                term: 'Kombinationer',
                desc: 'Aspiranten skall visa att han eller hon kan utföra teknikerna i kombinationer, där varje teknik utförs med ett syfte och följer naturligt på den föregående.',
              },
              {
                term: 'Försvar',
                desc: 'Aspiranten skall visa att han eller hon kan skydda sig genom sitt kampsätt.',
              },
              {
                term: 'Rörlighet och balans',
                desc: 'Aspiranten skall visa att han eller hon kan röra sig på ett effektivt och smidigt sätt och på så sätt uppnå balans vid försvar och anfall.',
              },
              {
                term: 'Regler',
                desc: 'Aspiranten skall visa att han eller hon i egenskap av utövare behärskar "Regler för svensk kickboxning".',
              },
              {
                term: 'Komplett system',
                desc: 'Det mest avgörande är att aspiranten visar att han eller hon har integrerat ett kampkoncept i sitt sätt att sparras – att det klart och tydligt framgår att aspiranten har integrerat kampteknikerna och skapat en fungerande kampform som innehåller ovan angivna delar.',
              },
            ].map(({ term, desc }) => (
              <div key={term}>
                <dt className="font-semibold text-gray-900">{term}</dt>
                <dd className="mt-0.5">{desc}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ── Riktlinjer ── */}
        <section className="mt-10 space-y-4 text-gray-700" aria-labelledby="riktlinjer-heading">
          <h2 id="riktlinjer-heading" className="text-2xl font-bold text-skf-blue">
            Riktlinjer för mästargrader
          </h2>
          <p>
            Mästargrader i svensk kickboxning är inte i första hand "tekniska" grader utan skall
            snarare ses som förtjänsttecken. När man har blivit mästare står det varje mästare
            fritt att uttolka och utveckla sina tekniker – en mästares tekniker kommer inte att
            återigen utvärderas ur graderingsaspekten.
          </p>
          <p>
            Mästargrader upp till och med tredje graden kan tilldelas på tävlingsmerit. Från och
            med den fjärde mästargraden är kriteriet att man har utfört förtjänstfullt arbete för
            svensk kickboxning.
          </p>

          {/* Progression table */}
          <div className="overflow-x-auto">
            <table className="min-w-full rounded-lg border border-gray-100 text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-skf-blue">Steg</th>
                  <th className="px-4 py-3 text-left font-semibold text-skf-blue">Normaltid</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                {[
                  { step: '1:a → 2:a', years: '3 år' },
                  { step: '2:a → 3:e', years: '4 år' },
                  { step: '3:e → 4:e', years: '6 år' },
                  { step: '4:e → 5:e', years: '6 år' },
                  { step: '5:e → 6:e', years: '6 år' },
                ].map(({ step, years }) => (
                  <tr key={step}>
                    <td className="px-4 py-2 font-medium text-gray-800">{step}</td>
                    <td className="px-4 py-2 text-gray-600">{years}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm">
            I normalfallet uppnås den 6:e mästargraden efter 25 år räknat från det år då man tog
            sin första mästargrad.
          </p>

          <h3 className="pt-2 text-lg font-semibold text-skf-blue">Ansökan</h3>
          <p>
            Mästargrader tilldelas efter ansökan till och godkännande av graderingskommittén.
            Ansökan kan endast lämnas av en föreningsstyrelse eller av medlem i
            graderingskommittén och skall innehålla en tydlig motivering som styrker att kraven
            för respektive mästargrad är uppfyllda.
          </p>
          <p>
            Vid frågor, kontakta graderingsansvarig via{' '}
            <a href="/kontakt" className="text-skf-blue underline hover:no-underline">
              kontaktformuläret
            </a>
            .
          </p>
        </section>

        {/* ── Divider ── */}
        <div className="my-12 h-px bg-gray-200" role="separator" aria-hidden="true" />

        {/* ── Register ── */}
        <section aria-labelledby="register-heading">
          <h2 id="register-heading" className="text-2xl font-bold text-skf-blue">
            Förteckning över mästargraderade
          </h2>
          <div className="mt-1 h-1 w-16 rounded bg-skf-yellow" aria-hidden="true" />
          <p className="mt-4 text-gray-600">
            Nedan listas alla mästargraderade inom svensk kickboxning, sorterade efter efternamn.
          </p>
          <div className="mt-6">
            <MastarTable />
          </div>
        </section>

      </div>
    </main>
  );
}
